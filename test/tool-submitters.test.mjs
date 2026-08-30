import test from "node:test";
import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { cp, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const fixturesRoot = path.resolve("test/fixtures/valid");
const syncScript = path.resolve("scripts/sync-tool-submitters.mjs");
const validateScript = path.resolve("scripts/validate-content.mjs");

async function createFixtureCopy() {
  const tempRoot = await mkdtemp(path.join(os.tmpdir(), "agentfirst-submitters-"));
  await cp(fixturesRoot, tempRoot, { recursive: true });
  return tempRoot;
}

test("required validation rejects missing tool submitters", async () => {
  const tempRoot = await createFixtureCopy();

  try {
    await writeFile(
      path.join(tempRoot, "tool-submitters.json"),
      `${JSON.stringify({ vapi: "bradvin" }, null, 2)}\n`,
      "utf8",
    );

    await assert.rejects(
      execFileAsync(process.execPath, [validateScript, tempRoot, "--require-submitters"]),
      (error) => {
        assert.match(
          error.stderr,
          /tools\/paperclip\.md: submitter must be set in tool-submitters\.json/,
        );
        return true;
      },
    );
  } finally {
    await rm(tempRoot, { recursive: true, force: true });
  }
});

test("submitter sync removes metadata for a deleted tool", async () => {
  const tempRoot = await createFixtureCopy();

  try {
    await rm(path.join(tempRoot, "tools/vapi.md"));

    const { stdout } = await execFileAsync(process.execPath, [
      syncScript,
      "--root-dir",
      tempRoot,
      "--submitted-by",
      "bradvin",
      "--slug",
      "vapi",
    ]);
    const submitters = JSON.parse(
      await readFile(path.join(tempRoot, "tool-submitters.json"), "utf8"),
    );

    assert.deepEqual(submitters, { paperclip: "bradvin" });
    assert.match(stdout, /removedMetadata=1/);
  } finally {
    await rm(tempRoot, { recursive: true, force: true });
  }
});
