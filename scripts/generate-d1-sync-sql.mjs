import { generateSyncSql } from "./lib/sync-sql.mjs";

try {
  process.stdout.write(await generateSyncSql());
} catch (error) {
  if (error.validationErrors) {
    console.error("Cannot generate D1 sync SQL because content validation failed:\n");
    for (const validationError of error.validationErrors) {
      console.error(`- ${validationError}`);
    }
    process.exit(1);
  }

  throw error;
}
