import test from "node:test";
import assert from "node:assert/strict";
import os from "node:os";
import path from "node:path";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

test("render-wrangler-config writes a config for the named D1 database", async () => {
  const tempDir = await mkdtemp(path.join(os.tmpdir(), "agentfirst-wrangler-"));
  const outputPath = path.join(tempDir, "wrangler.jsonc");

  try {
    await execFileAsync(
      process.execPath,
      ["./scripts/render-wrangler-config.mjs", outputPath],
      {
        cwd: path.resolve("."),
        env: {
          ...process.env,
          CLOUDFLARE_D1_DATABASE_NAME: "agentfirst-production",
          CLOUDFLARE_D1_LIST_JSON: JSON.stringify([
            {
              name: "agentfirst-production",
              uuid: "11111111-1111-1111-1111-111111111111",
            },
          ]),
          PATH: process.env.PATH,
          npm_config_user_agent: process.env.npm_config_user_agent,
        },
      },
    );
  } catch (error) {
    assert.fail(`render-wrangler-config should succeed in test, got: ${error.stderr || error.message}`);
  }

  const config = JSON.parse(await readFile(outputPath, "utf8"));

  assert.equal(config.d1_databases[0].binding, "agentfirst-production");
  assert.equal(config.d1_databases[0].database_name, "agentfirst-production");
  assert.equal(config.d1_databases[0].database_id, "11111111-1111-1111-1111-111111111111");
  assert.equal(config.d1_databases[0].migrations_dir, path.resolve(".", "migrations"));

  await rm(tempDir, { recursive: true, force: true });
});
