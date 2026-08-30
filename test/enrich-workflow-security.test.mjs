import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const workflowPath = new URL("../.github/workflows/enrich-tool-assets.yml", import.meta.url);

test("pull_request_target enrichment keeps PR data out of shell source and trusts base attribution", async () => {
  const workflow = await readFile(workflowPath, "utf8");

  assert.doesNotMatch(
    workflow,
    /node -e [^\n]*\$\{\{ steps\.[^}]+\.outputs\.json \}\}/,
  );
  assert.match(
    workflow,
    /node automation\/scripts\/list-changed-tools\.mjs pr "\$\{PR_BASE_SHA\}" "\$\{PR_HEAD_SHA\}" --include-deleted/,
  );
  assert.match(
    workflow,
    /automation\/scripts\/sync-tool-submitters\.mjs --root-dir pr --base-root-dir automation/,
  );
  assert.match(
    workflow,
    /npm run sync:tool-submitters -- --base-root-dir \$\{shellQuote\(baseRoot\)\}/,
  );
  assert.match(workflow, /git worktree add --detach \$\{shellQuote\(baseRoot\)\}/);
  assert.match(
    workflow,
    /const enrichmentCommand = enrichmentFlags\s+\? `npm run enrich:tool-assets -- --write \$\{enrichmentFlags\}\\n`\s+: "";/,
  );
});
