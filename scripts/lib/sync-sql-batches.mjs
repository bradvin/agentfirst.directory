import path from "node:path";
import { mkdir, readdir, rm, writeFile } from "node:fs/promises";
import { renderSyncSqlStatements } from "./sync-sql.mjs";

export const DEFAULT_SYNC_SQL_BATCH_MAX_BYTES = 80_000;

const GENERATED_BATCH_FILENAME = /^batch-\d+\.sql$/;

function byteLength(value) {
  return Buffer.byteLength(value, "utf8");
}

function validateMaxBytes(maxBytes) {
  if (!Number.isInteger(maxBytes) || maxBytes < 1) {
    throw new TypeError("maxBytes must be a positive integer");
  }
}

function validateStatements(statements) {
  if (!Array.isArray(statements) || statements.length === 0) {
    throw new TypeError("At least one SQL statement is required");
  }

  statements.forEach((statement, index) => {
    if (typeof statement !== "string" || statement.trim().length === 0) {
      throw new TypeError(`SQL statement ${index + 1} must be a non-empty string`);
    }
  });
}

/**
 * Pack complete SQL statements into deterministic, byte-bounded file payloads.
 * Statements are never parsed or split, so semicolons inside SQL strings are safe.
 */
export function batchSyncSqlStatements(
  statements,
  { maxBytes = DEFAULT_SYNC_SQL_BATCH_MAX_BYTES } = {},
) {
  validateMaxBytes(maxBytes);
  validateStatements(statements);

  const batches = [];
  let currentStatements = [];

  for (const [index, statement] of statements.entries()) {
    const singleStatementSql = renderSyncSqlStatements([statement]);
    const singleStatementBytes = byteLength(singleStatementSql);

    if (singleStatementBytes > maxBytes) {
      throw new RangeError(
        `SQL statement ${index + 1} is ${singleStatementBytes} bytes when rendered, ` +
          `which exceeds the ${maxBytes}-byte batch limit and cannot be split safely`,
      );
    }

    const candidateStatements = [...currentStatements, statement];
    const candidateSql = renderSyncSqlStatements(candidateStatements);

    if (currentStatements.length > 0 && byteLength(candidateSql) > maxBytes) {
      batches.push(renderSyncSqlStatements(currentStatements));
      currentStatements = [statement];
    } else {
      currentStatements = candidateStatements;
    }
  }

  batches.push(renderSyncSqlStatements(currentStatements));
  return batches;
}

/**
 * Replace only this generator's numbered SQL files in the target directory.
 */
export async function writeSyncSqlBatchFiles(outputDirectory, batches) {
  if (typeof outputDirectory !== "string" || outputDirectory.trim().length === 0) {
    throw new TypeError("An output directory is required");
  }

  if (!Array.isArray(batches) || batches.length === 0) {
    throw new TypeError("At least one SQL batch is required");
  }

  const resolvedOutputDirectory = path.resolve(outputDirectory);
  if (resolvedOutputDirectory === path.parse(resolvedOutputDirectory).root) {
    throw new TypeError("The filesystem root cannot be used as the batch output directory");
  }

  await mkdir(resolvedOutputDirectory, { recursive: true });

  for (const entry of await readdir(resolvedOutputDirectory, { withFileTypes: true })) {
    if (!GENERATED_BATCH_FILENAME.test(entry.name)) {
      continue;
    }

    if (!entry.isFile() && !entry.isSymbolicLink()) {
      throw new Error(`Refusing to replace non-file batch path: ${entry.name}`);
    }

    await rm(path.join(resolvedOutputDirectory, entry.name), { force: true });
  }

  const filenameWidth = Math.max(4, String(batches.length).length);
  const writtenFiles = [];

  for (const [index, sql] of batches.entries()) {
    if (typeof sql !== "string" || sql.length === 0) {
      throw new TypeError(`SQL batch ${index + 1} must be a non-empty string`);
    }

    const filename = `batch-${String(index + 1).padStart(filenameWidth, "0")}.sql`;
    const filePath = path.join(resolvedOutputDirectory, filename);
    await writeFile(filePath, sql, "utf8");
    writtenFiles.push(filePath);
  }

  return writtenFiles;
}
