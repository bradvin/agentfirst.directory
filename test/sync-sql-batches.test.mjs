import test from "node:test";
import assert from "node:assert/strict";
import os from "node:os";
import path from "node:path";
import { mkdtemp, readFile, readdir, rm, writeFile } from "node:fs/promises";
import {
  generateSyncSql,
  generateSyncSqlStatements,
  renderSyncSqlStatements,
} from "../scripts/lib/sync-sql.mjs";
import {
  batchSyncSqlStatements,
  DEFAULT_SYNC_SQL_BATCH_MAX_BYTES,
  writeSyncSqlBatchFiles,
} from "../scripts/lib/sync-sql-batches.mjs";

const fixtureRoot = path.resolve("test/fixtures/valid");

function sqlBytes(sql) {
  return Buffer.byteLength(sql, "utf8");
}

test("generated batches preserve every sync statement in its original order", async () => {
  const statements = await generateSyncSqlStatements(fixtureRoot);
  const largestStatementBytes = Math.max(
    ...statements.map((statement) => sqlBytes(renderSyncSqlStatements([statement]))),
  );
  const batches = batchSyncSqlStatements(statements, {
    maxBytes: largestStatementBytes,
  });

  assert(batches.length > 1, "the test ceiling should force multiple batches");
  assert.equal(batches.join("\n"), await generateSyncSql(fixtureRoot));
  assert(batches.every((batch) => sqlBytes(batch) <= largestStatementBytes));
  assert.match(statements.at(-3), /^UPDATE tools\b/);
  assert.match(statements.at(-2), /^UPDATE categories\b/);
  assert.match(statements.at(-1), /^UPDATE url_redirects\b/);
});

test("default batching stays within 80,000 UTF-8 bytes without splitting statements", () => {
  const statementWithLiteralSemicolon =
    `INSERT INTO example (value) VALUES ('literal;${"x".repeat(29_000)}');`;
  const statements = Array.from(
    { length: 6 },
    (_, index) => statementWithLiteralSemicolon.replace("literal;", `literal-${index};`),
  );
  const batches = batchSyncSqlStatements(statements);

  assert(batches.length > 1);
  assert(batches.every((batch) => sqlBytes(batch) <= DEFAULT_SYNC_SQL_BATCH_MAX_BYTES));
  assert.equal(batches.join("\n"), renderSyncSqlStatements(statements));
  for (const statement of statements) {
    assert.equal(
      batches.filter((batch) => batch.includes(statement)).length,
      1,
      "each complete statement should occur in exactly one batch",
    );
  }
});

test("batching rejects an individual statement over the byte ceiling", () => {
  const oversizedStatement = `SELECT '${"é".repeat(40_000)}';`;

  assert.throws(
    () => batchSyncSqlStatements([oversizedStatement]),
    (error) => {
      assert(error instanceof RangeError);
      assert.match(error.message, /SQL statement 1 is \d+ bytes/);
      assert.match(error.message, /exceeds the 80000-byte batch limit/);
      assert.match(error.message, /cannot be split safely/);
      return true;
    },
  );
});

test("batch files use deterministic ordered names and remove stale generated files", async () => {
  const outputDirectory = await mkdtemp(path.join(os.tmpdir(), "agentfirst-d1-batches-"));

  try {
    await writeFile(path.join(outputDirectory, "batch-9999.sql"), "stale\n", "utf8");
    await writeFile(path.join(outputDirectory, "notes.txt"), "preserve\n", "utf8");

    const batches = ["SELECT 1;\n", "SELECT 2;\n", "SELECT 3;\n"];
    const writtenFiles = await writeSyncSqlBatchFiles(outputDirectory, batches);

    assert.deepEqual(
      writtenFiles.map((file) => path.basename(file)),
      ["batch-0001.sql", "batch-0002.sql", "batch-0003.sql"],
    );
    assert.deepEqual((await readdir(outputDirectory)).sort(), [
      "batch-0001.sql",
      "batch-0002.sql",
      "batch-0003.sql",
      "notes.txt",
    ]);

    for (const [index, file] of writtenFiles.entries()) {
      assert.equal(await readFile(file, "utf8"), batches[index]);
    }
  } finally {
    await rm(outputDirectory, { recursive: true, force: true });
  }
});

test("publish workflow generates batches and executes them in fail-fast filename order", async () => {
  const workflow = await readFile(path.resolve(".github/workflows/publish-d1.yml"), "utf8");
  const generateStep = workflow.indexOf("npm run sync:d1:batches");
  const executeStep = workflow.indexOf("for batch_file in");

  assert(generateStep >= 0);
  assert(executeStep > generateStep);
  assert.match(workflow, /set -euo pipefail/);
  assert.match(workflow, /batch_files=\(\/tmp\/agentfirst-d1-sync-batches\/batch-\*\.sql\)/);
  assert.match(workflow, /--file "\$batch_file"/);
  assert.doesNotMatch(workflow, /agentfirst-d1-sync\.sql/);
});
