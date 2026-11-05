import test from "node:test";
import assert from "node:assert/strict";
import { readFile, mkdtemp, rm } from "node:fs/promises";
import { spawnSync } from "node:child_process";
import { tmpdir } from "node:os";
import path from "node:path";

const workflowPath = new URL("../.github/workflows/enrich-tool-assets.yml", import.meta.url);
const workflow = await readFile(workflowPath, "utf8");
const changedCondition = "if: ${{ steps.tool-diff.outputs.changed == 'true' }}";

function step(name) {
  const value = workflow.split(`      - name: ${name}\n`)[1];
  assert.ok(value, `missing step: ${name}`);
  return value.split("      - name:")[0];
}

function comment(env) {
  const source = workflow.match(/node --input-type=module <<'NODE'\n([\s\S]*?)\n\s+NODE/)[1]
    .replace('import { writeFileSync } from "node:fs";', "const writeFileSync = (_path, body) => process.stdout.write(body);");
  const result = spawnSync(process.execPath, ["--input-type=module", "--eval", source], {
    encoding: "utf8",
    env: {
      ...process.env,
      PR_NUMBER: "123",
      GITHUB_REPOSITORY: "bradvin/agentfirst.directory",
      PR_BASE_SHA: "abc123",
      PR_AUTHOR: "actual-author",
      SUBMITTER_TOOLS_JSON: '["exact-new-slug"]',
      CHANGED_TOOLS_JSON: '["exact-new-slug"]',
      REVIEW_DECISION: "REVIEW_REQUIRED",
      ...env,
    },
  });
  assert.equal(result.status, 0, result.stderr);
  return result.stdout;
}

test("enrichment cannot commit/push a PR branch or request contents write", () => {
  assert.match(workflow, /^permissions:\n  contents: read\n  pull-requests: write$/m);
  assert.doesNotMatch(workflow, /contents: write|git[^\n]*\b(?:commit|push)\b|x-access-token/);
});

test("same-repository and fork PRs share correction and failure steps", () => {
  for (const name of ["Comment when PR needs enrichment", "Require PR enrichment changes"]) {
    const body = step(name);
    assert.ok(body.includes(changedCondition));
    assert.doesNotMatch(body, /head\.repo\.full_name|github\.repository/);
  }
  assert.match(step("Require PR enrichment changes"), /::error::.*PR branch[\s\S]*exit 1/);
});

test("correction comment updates an existing bot-owned marker instead of spamming", () => {
  assert.match(workflow, /<!-- agentfirst-enrichment-preflight -->/);
  const body = step("Comment when PR needs enrichment");
  assert.match(body, /gh api --paginate/);
  assert.match(body, /\.user\.type == "Bot"/);
  assert.match(body, /contains\("<!-- agentfirst-enrichment-preflight -->"\)/);
  assert.match(body, /gh api --method PATCH/);
  assert.match(body, /gh pr comment/);
});

test("repeat correction runs update the same comment; only the first run creates one", async () => {
  const root = await mkdtemp(path.join(tmpdir(), "enrichment-comments-"));
  const logPath = path.join(root, "gh-calls.log");
  const body = step("Comment when PR needs enrichment");
  const commands = body.slice(body.indexOf("          mapfile"));
  const mocks = `
    gh() {
      printf '%s\\n' "$*" >> "$CALL_LOG"
      if [[ "$1" == api && "$2" == --paginate ]]; then
        printf '%s' "$EXISTING_COMMENT_ID"
      fi
    }
    cat() { printf 'generated comment body'; }
  `;
  try {
    for (const id of ["", "456", "456"]) {
      const result = spawnSync("bash", ["-euo", "pipefail", "-c", mocks + commands], {
        encoding: "utf8",
        env: {
          ...process.env,
          CALL_LOG: logPath,
          EXISTING_COMMENT_ID: id,
          PR_NUMBER: "123",
          GITHUB_REPOSITORY: "bradvin/agentfirst.directory",
        },
      });
      assert.equal(result.status, 0, result.stderr);
    }
    const calls = await readFile(logPath, "utf8");
    assert.equal(calls.match(/^pr comment /gm)?.length, 1);
    assert.equal(calls.match(/^api --method PATCH repos\/bradvin\/agentfirst.directory\/issues\/comments\/456 /gm)?.length, 2);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test("both PR origins receive exact author/slug, trusted-base and validation instructions", () => {
  for (const repo of ["bradvin/agentfirst.directory", "contributor/agentfirst.directory"]) {
    const body = comment({ PR_HEAD_REPO: repo });
    assert.match(body, /same-repository and fork PRs/);
    assert.match(body, /--submitted-by 'actual-author' --slug 'exact-new-slug'/);
    assert.match(body, /--base-root-dir '\.\.\/agentfirst-base-123'/);
    assert.match(body, /git fetch 'https:\/\/github.com\/bradvin\/agentfirst.directory\.git' 'abc123'/);
    assert.match(body, /npm run validate:content -- --require-submitters/);
    assert.doesNotMatch(body, /npm run enrich:tool-assets/);
  }
  assert.match(comment({ REVIEW_DECISION: "APPROVED" }), /npm run enrich:tool-assets -- --write --slug 'exact-new-slug'/);
});

test("privileged preflight executes only trusted-base scripts and gates media on approval", () => {
  assert.match(workflow, /ref: \$\{\{ github\.event\.pull_request\.base\.ref \}\}\n\s+path: automation/);
  assert.match(workflow, /PR_AUTHOR: \$\{\{ github\.event\.pull_request\.user\.login \}\}/);
  assert.match(step("Checkout PR head"), /persist-credentials: false/);
  assert.match(step("Sync tool submitters"), /automation\/scripts\/sync-tool-submitters\.mjs --root-dir pr --base-root-dir automation --submitted-by "\$\{PR_AUTHOR\}"/);
  assert.match(step("Enrich changed tool files"), /review-decision\.outputs\.decision == 'APPROVED'/);
  assert.doesNotMatch(workflow, /(?:node|npm|npx) pr\/|working-directory: pr/);
});
