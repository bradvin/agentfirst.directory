import path from "node:path";
import { generateSyncSqlStatements } from "./lib/sync-sql.mjs";
import {
  batchSyncSqlStatements,
  DEFAULT_SYNC_SQL_BATCH_MAX_BYTES,
  writeSyncSqlBatchFiles,
} from "./lib/sync-sql-batches.mjs";

const outputDirectory = process.argv[2];

if (!outputDirectory || process.argv.length > 3) {
  console.error("Usage: node scripts/generate-d1-sync-batches.mjs <output-directory>");
  process.exit(1);
}

try {
  const statements = await generateSyncSqlStatements();
  const batches = batchSyncSqlStatements(statements);
  const files = await writeSyncSqlBatchFiles(outputDirectory, batches);
  const totalBytes = batches.reduce((sum, sql) => sum + Buffer.byteLength(sql, "utf8"), 0);

  console.log(
    `Generated ${files.length} ordered SQL batches from ${statements.length} statements ` +
      `(${totalBytes} bytes total; ${DEFAULT_SYNC_SQL_BATCH_MAX_BYTES}-byte maximum per file).`,
  );
  for (const [index, file] of files.entries()) {
    console.log(
      `${path.basename(file)}\t${Buffer.byteLength(batches[index], "utf8")} bytes`,
    );
  }
} catch (error) {
  if (error.validationErrors) {
    console.error("Cannot generate D1 sync batches because content validation failed:\n");
    for (const validationError of error.validationErrors) {
      console.error(`- ${validationError}`);
    }
    process.exit(1);
  }

  throw error;
}
