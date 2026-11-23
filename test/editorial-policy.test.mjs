import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("current policy has one canonical v0.3 Run/Equip/Enable document", () => {
  const policy = read("docs/editorial-policy.md");
  assert.match(policy, /Policy v0\.3: Run, Equip and Enable/);
  assert.match(policy, /issues\/125/);
  for (const path of ["README.md", "docs/tool-review-guide.md"]) {
    assert.match(read(path), /\]\((?:docs\/)?editorial-policy\.md\)/, `${path} must link to the canonical policy`);
    assert.match(read(path), /Run.*Equip.*Enable/);
  }
});

// Copy/wiring checks, NOT semantic evaluator or installed stop-order proof.
test("canonical policy preserves positioning bounds and stop ordering", () => {
  const policy = read("docs/editorial-policy.md");
  assert.match(policy, /target maximum 150 words/);
  assert.match(policy, /at most two short first-party positioning excerpts \(target combined maximum 300 words\)/);
  assert.match(policy, /introductory repository\/docs overview is allowed/);
  assert.match(policy, /Do not inspect claim-evidence arrays, detailed API\/MCP docs, code, pricing, licensing or validators/);
  assert.match(policy, /`pass-fit`[^\n]*Only now proceed to claim evidence/);
  for (const outcome of ["fail-fit", "unclear-fit"]) {
    const line = policy.split("\n").find((line) => line.startsWith(`- **\u0060${outcome}\u0060`));
    assert.match(line, /[Ss]top with \*\*evidence not reviewed\*\*/);
    assert.match(line, /enrich metadata or commit listing changes/);
  }
  assert.match(policy, /Missing information is not proof that the capability is absent/);
  assert.match(policy, /An inaccessible page alone is not a negative fit finding/);
});

test("routes remain separate from classification and installed rollout", () => {
  const policy = read("docs/editorial-policy.md");
  assert.match(policy, /not new frontmatter fields, categories or classification enum values/);
  assert.match(policy, /not quality tiers or automatic one-to-one mappings/);
  assert.match(policy, /not an installed submission-review producer\/verifier/);
  assert.match(policy, /do \*\*not\*\* execute a semantic fit evaluator/);
  assert.match(policy, /No merge, deployment, listing migration, submission review\/restart, schedule resume or private reviewer\/configuration change/);
  for (const path of ["README.md", "docs/tool-review-guide.md"]) {
    const source = read(path);
    assert.match(source, /Unknown is not negative/);
    assert.match(source, /detailed API\/MCP docs, claim-evidence arrays, code, pricing, licensing and validators cannot make or rescue fit/);
    for (const outcome of ["fail-fit", "unclear-fit"]) {
      const line = source.split("\n").find((line) => line.includes(`\u0060${outcome}\u0060`));
      assert.match(line, /[Ss]top with \*\*evidence not reviewed\*\*/);
      assert.match(line, /enrichment or listing commits/);
    }
    assert.doesNotMatch(source, /request stronger first-party evidence or reject|canonical homepage positioning if necessary/);
  }
});

test("hypothetical calibration cases stay tied to canonical rules, not vendor verdicts", () => {
  const fixture = JSON.parse(read("test/fixtures/editorial-policy-v03.json"));
  const policy = read("docs/editorial-policy.md");
  assert.equal(fixture.policyVersion, "0.3");
  assert.equal(fixture.kind, "hypothetical-human-calibration-not-evaluator-results");
  assert.equal(fixture.policyDocument, "docs/editorial-policy.md");
  assert.ok(fixture.cases.length > 0);
  assert.equal(new Set(fixture.cases.map(({ id }) => id)).size, fixture.cases.length);
  for (const item of fixture.cases) {
    assert.ok(item.positioning.trim().length > 0, item.id);
    assert.ok(item.reason.trim().length > 0, item.id);
    assert.ok(policy.includes(item.policyClause), `${item.id}: missing canonical rule`);
    assert.ok(["pass-fit", "fail-fit", "unclear-fit"].includes(item.expectedFit), item.id);
    assert.equal(item.evidence, "evidence not reviewed", item.id);
    assert.equal(item.stage, "product-fit", item.id);
    if (item.expectedFit === "pass-fit") {
      assert.ok(["Run", "Equip", "Enable"].includes(item.primaryRoute), item.id);
      assert.equal(item.clarification, null, item.id);
    } else {
      assert.equal(item.primaryRoute, null, item.id);
      if (item.expectedFit === "unclear-fit") {
        assert.ok(item.clarification?.trim().length > 0, item.id);
      } else {
        assert.equal(item.clarification, null, item.id);
      }
    }
  }
  for (const id of [
    "controlled-runtime", "finished-outcome-only", "output-control-unknown",
    "agent-connectors", "human-feedback", "agent-library", "agent-data",
    "agent-context", "instruction-producing-tool", "generic-api-mcp",
    "skill-pack", "payment-standard", "agent-ui-standard", "portable-definition",
    "generic-standard", "protocol-user", "standard-harness-unknown",
    "contradictory-positioning", "unreachable-only", "unreachable-with-overview",
    "api-only-inbox", "mode-specific-run", "same-service-other-transport",
  ]) {
    assert.ok(fixture.cases.some((item) => item.id === id), `missing ${id}`);
  }
});
