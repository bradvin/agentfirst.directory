import { execFile } from "node:child_process";
import path from "node:path";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const [, , repoDirArg, baseSha, headSha, mode] = process.argv;

if (!repoDirArg || !baseSha || !headSha || (mode && mode !== "--include-deleted")) {
  console.error("Usage: node ./scripts/list-changed-tools.mjs <repo-dir> <base-sha> <head-sha> [--include-deleted]");
  process.exit(1);
}

const repoDir = path.resolve(repoDirArg);
const diffArgs = mode === "--include-deleted"
  ? ["diff", "--no-renames", "--diff-filter=ACDMR", "--name-only", baseSha, headSha, "--", "tools/*.md"]
  : ["diff", "--diff-filter=ACMR", "--name-only", baseSha, headSha, "--", "tools/*.md"];
const { stdout } = await execFileAsync(
  "git",
  diffArgs,
  { cwd: repoDir },
);

const slugs = stdout
  .split("\n")
  .map((line) => line.trim())
  .filter(Boolean)
  .map((filePath) => path.basename(filePath, ".md"))
  .sort();

process.stdout.write(`${JSON.stringify(slugs)}\n`);
