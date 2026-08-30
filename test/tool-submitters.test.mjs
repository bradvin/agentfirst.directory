import test from "node:test";
import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { copyFile, cp, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
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

test("submitter sync preserves trusted attribution and assigns the PR author only to base-unmapped tools", async () => {
  const baseRoot = await createFixtureCopy();
  const tempRoot = await createFixtureCopy();

  try {
    await writeFile(
      path.join(baseRoot, "tool-submitters.json"),
      `${JSON.stringify({ paperclip: "original-paperclip-author", vapi: "original-vapi-author" }, null, 2)}\n`,
      "utf8",
    );
    await writeFile(
      path.join(tempRoot, "tool-submitters.json"),
      `${JSON.stringify({
        "new-tool": "spoofed-new-tool-author",
        paperclip: "spoofed-paperclip-author",
        vapi: "spoofed-vapi-author",
      }, null, 2)}\n`,
      "utf8",
    );
    await copyFile(
      path.join(tempRoot, "tools/paperclip.md"),
      path.join(tempRoot, "tools/new-tool.md"),
    );

    const { stdout } = await execFileAsync(process.execPath, [
      syncScript,
      "--root-dir",
      tempRoot,
      "--base-root-dir",
      baseRoot,
      "--submitted-by",
      "pr-author",
      "--slug",
      "paperclip",
      "--slug",
      "vapi",
      "--slug",
      "new-tool",
    ]);
    const submitters = JSON.parse(
      await readFile(path.join(tempRoot, "tool-submitters.json"), "utf8"),
    );

    assert.deepEqual(submitters, {
      "new-tool": "pr-author",
      paperclip: "original-paperclip-author",
      vapi: "original-vapi-author",
    });
    assert.match(stdout, /metadataChanged=3/);
  } finally {
    await rm(baseRoot, { recursive: true, force: true });
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
