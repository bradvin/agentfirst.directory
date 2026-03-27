import { writeFile } from "node:fs/promises";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const outputPath = process.argv[2];
const databaseName = process.env.CLOUDFLARE_D1_DATABASE_NAME;
const listJsonOverride = process.env.CLOUDFLARE_D1_LIST_JSON;

if (!outputPath) {
  console.error("Usage: node ./scripts/render-wrangler-config.mjs <output-file>");
  process.exit(1);
}

if (!databaseName) {
  console.error("CLOUDFLARE_D1_DATABASE_NAME is required.");
  process.exit(1);
}

const rawListJson = listJsonOverride
  ?? (
    await execFileAsync(
      "npx",
      ["wrangler", "d1", "list", "--json"],
      { env: process.env },
    )
  ).stdout;

const databases = JSON.parse(rawListJson);
const database = databases.find((entry) => entry.name === databaseName);

if (!database?.uuid) {
  console.error(`Could not find a D1 database named "${databaseName}" via wrangler d1 list.`);
  process.exit(1);
}

const config = {
  name: "agentfirst-directory-content",
  compatibility_date: "2026-03-27",
  compatibility_flags: ["nodejs_compat"],
  d1_databases: [
    {
      binding: databaseName,
      database_name: databaseName,
      database_id: database.uuid,
      migrations_dir: "./migrations",
    },
  ],
};

await writeFile(outputPath, `${JSON.stringify(config, null, 2)}\n`, "utf8");
