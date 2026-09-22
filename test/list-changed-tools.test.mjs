import test from "node:test";
import assert from "node:assert/strict";
import os from "node:os";
import path from "node:path";
import { mkdtemp, mkdir, rename, rm, writeFile } from "node:fs/promises";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { withoutGitRepositoryOverrides } from "../scripts/lib/git-environment.mjs";

const execFileAsync = promisify(execFile);
const scriptPath = path.resolve("scripts/list-changed-tools.mjs");

async function run(command, args, cwd) {
  const commandArgs = command === "git" ? ["-C", cwd, ...args] : args;
  const { stdout } = await execFileAsync(command, commandArgs, {
    cwd: command === "git" ? undefined : cwd,
    env: command === "git" ? withoutGitRepositoryOverrides() : process.env,
  });
  return stdout.trim();
}

async function writeRepoFile(repoDir, relativePath, content) {
  await mkdir(path.dirname(path.join(repoDir, relativePath)), { recursive: true });
  await writeFile(path.join(repoDir, relativePath), content, "utf8");
}

async function commitAll(repoDir, message) {
  await run("git", ["add", "-A"], repoDir);
  await run("git", ["commit", "-m", message], repoDir);
  return run("git", ["rev-parse", "HEAD"], repoDir);
}

test("lists added, modified, and renamed tool files but excludes deleted tools", async () => {
  const repoDir = await mkdtemp(path.join(os.tmpdir(), "agentfirst-changed-tools-"));

  try {
    await run("git", ["init"], repoDir);
    await run("git", ["config", "user.name", "Test"], repoDir);
    await run("git", ["config", "user.email", "test@example.com"], repoDir);
    await writeRepoFile(repoDir, "tools/deleted.md", "deleted\n");
    await writeRepoFile(repoDir, "tools/modified.md", "before\n");
    await writeRepoFile(repoDir, "tools/rename-source.md", "renamed\n");
    await writeRepoFile(repoDir, "notes/ignored.md", "before\n");
    const baseSha = await commitAll(repoDir, "base");

    await rm(path.join(repoDir, "tools/deleted.md"));
    await writeRepoFile(repoDir, "tools/modified.md", "after\n");
    await writeRepoFile(repoDir, "tools/added.md", "added\n");
    await rename(
      path.join(repoDir, "tools/rename-source.md"),
      path.join(repoDir, "tools/renamed-existing.md"),
    );
    await writeRepoFile(repoDir, "notes/ignored.md", "after\n");
    const headSha = await commitAll(repoDir, "change tools");

    const output = await run("node", [scriptPath, repoDir, baseSha, headSha], repoDir);
    const submitterOutput = await run(
      "node",
      [scriptPath, repoDir, baseSha, headSha, "--include-deleted"],
      repoDir,
    );

    assert.deepEqual(JSON.parse(output), ["added", "modified", "renamed-existing"]);
    assert.deepEqual(JSON.parse(submitterOutput), [
      "added",
      "deleted",
      "modified",
      "rename-source",
      "renamed-existing",
    ]);
  } finally {
    await rm(repoDir, { recursive: true, force: true });
  }
});
