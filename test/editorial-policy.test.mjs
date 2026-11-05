import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

for (const path of ["README.md", "docs/tool-review-guide.md"]) {
  const source = readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

  test(`${path}: product fit precedes evidence and classification`, () => {
    assert.match(source, /before reviewing evidence|Before reviewing any evidence/);
    assert.match(source, /intended user, core job/);
    assert.match(source, /product description and operating model/);
    assert.match(source, /canonical homepage positioning if necessary/);
    assert.match(source, /Do not inspect evidence arrays, (?:documentation|docs), MCP details, implementation, pricing, licence, or validation/);
    assert.match(source, /pass-fit[^\n]*(?:evidence, schema, and contradiction|first-party evidence, schema, and contradiction) review/);
    assert.match(source, /fail-fit[^\n]*(?:Stop|stop) with nonacceptance[^\n]*(?:do not|Do not) review evidence, enrich metadata, or commit listing changes/);
    assert.match(source, /unclear-fit[^\n]*(?:Hold|hold) for product-positioning clarification[^\n]*(?:do not|Do not) review evidence or proceed with metadata or listing commits/);
  });

  test(`${path}: integrations and internal agents cannot bypass fit`, () => {
    assert.match(source, /human-first app/);
    assert.match(source, /integration depth or tool count/);
    assert.match(source, /An AI agent serving human(?:s| customers) is not, by itself, a tool built for agents/);
    assert.match(source, /designed for agent operation/);
    assert.match(source, /agent-only (?:products|origins)/);
    assert.match(source, /internal autonomous agents/);
    assert.match(source, /Historical reassessments and public corrections require separate owner approval/);
    assert.doesNotMatch(source, /General-purpose products can qualify|Agents do not need to be the product's exclusive or primary users/);
  });
}
