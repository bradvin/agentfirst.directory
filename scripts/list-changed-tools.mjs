import { execFile } from "node:child_process";
import path from "node:path";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const [, , repoDirArg, baseSha, headSha] = process.argv;

if (!repoDirArg || !baseSha || !headSha) {
  console.error("Usage: node ./scripts/list-changed-tools.mjs <repo-dir> <base-sha> <head-sha>");
  process.exit(1);
}

const repoDir = path.resolve(repoDirArg);
const { stdout } = await execFileAsync(
  "git",
  ["diff", "--name-only", baseSha, headSha, "--", "tools/*.md"],
  { cwd: repoDir },
);

const slugs = stdout
  .split("\n")
  .map((line) => line.trim())
  .filter(Boolean)
  .map((filePath) => path.basename(filePath, ".md"))
  .sort();

process.stdout.write(`${JSON.stringify(slugs)}\n`);
