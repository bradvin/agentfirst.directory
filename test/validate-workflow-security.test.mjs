import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const workflowPath = new URL("../.github/workflows/validate-content.yml", import.meta.url);

test("content validation runs on the PR merge result with read-only permissions", async () => {
  const workflow = await readFile(workflowPath, "utf8");

  assert.match(workflow, /^on:\n  pull_request:\n/m);
  assert.doesNotMatch(workflow, /pull_request_target:/);
  assert.match(workflow, /^permissions:\n  contents: read$/m);
  assert.doesNotMatch(workflow, /^\s+[a-z-]+: write$/m);
  assert.match(workflow, /ref: refs\/pull\/\$\{\{ github\.event\.pull_request\.number \}\}\/merge/);
  assert.match(workflow, /persist-credentials: false/);
  assert.match(workflow, /node-version: 24/);
  assert.match(workflow, /run: npm test/);
  assert.match(workflow, /run: npm run validate:content -- --require-submitters/);
});
