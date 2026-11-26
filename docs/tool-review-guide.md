# Tool review guide

## Product fit comes first

Apply the [canonical editorial policy](editorial-policy.md), **v0.3: Run, Equip and Enable**, before accessing claim evidence, enriching metadata or making listing changes. Use the bounded positioning packet: exact offering/mode and overview, a short workflow explanation, and at most two short first-party positioning excerpts if needed. Introductory docs overviews are allowed; detailed API/MCP docs, claim-evidence arrays, code, pricing, licensing and validators cannot make or rescue fit.

- `pass-fit`: record the primary Run/Equip/Enable route and its specific rationale. Only now proceed to claim evidence, listing accuracy/classification and technical validation. Fit is positioning eligibility, not acceptance.
- `fail-fit`: state the known out-of-scope shape and exact exclusion. Stop with **evidence not reviewed**; no enrichment or listing commits.
- `unclear-fit`: state the material missing fact or positioning contradiction and ask a bounded clarification. Stop with **evidence not reviewed**; no enrichment or listing commits. Unknown is not negative.

Run needs meaningful customer control over agent execution, state or authority; approve/edit/skip of finished output alone does not establish that boundary. If control is unknown, hold rather than infer absence. Equip needs a concrete agent task/improvement and named purpose-built features, not infrastructure ownership: maintained connectors, catalogues, libraries, data/context tools and human-operated structured feedback/collaboration can qualify. Enable needs a named shared contract with first-class agents and a concrete interaction or portable representation; do not conflate standards with their same-branded harness/SDK or products that merely use them.

Generic compatibility, integration depth, tool count and AI labels alone do not qualify. Standalone skills/prompt packs, templates and one-off scripts remain excluded. Availability is separate from fit: a failed fetch alone is not rejection. Category-specific Run/orchestrator rules must not reject valid Equip/Enable tools. Existing inclusion and owner association give no exemption.

## Required review record and stop checks

Use section 7 of the canonical policy for the complete record. At minimum capture:

- Policy version, slug, exact candidate revision, access date and exact listing unit/mode.
- Customer/operator, agent workflow, permitted positioning sources/excerpts and source/availability gaps.
- Fit outcome and reason; primary route and separately justified secondary routes (if passing), with Run control, Equip task plus named features, or Enable agent participant plus shared contract.
- Stage reached; evidence consulted or **evidence not reviewed**; checks actually run/results; unresolved facts and bounded clarification; final recommendation and approval boundary.

For fail/unclear, stop before claim evidence, metadata enrichment, validation as review evidence or acceptance. Preserve historical records and bind new results to the exact revision; do not overwrite or blindly duplicate comments. Run/Equip/Enable belong in the review record, not new listing fields; the existing classification and evidence schema stay unchanged.

## Review after `pass-fit`

This repository's fixtures and copy/compatibility tests are not a semantic evaluator or an installed producer/verifier replay. This guidance authorizes no existing-listing edits/removals or reassessments, submission reviews/restart, private reviewer/configuration changes, merge or deployment. A separate authorized activation lane must implement and verify the canonical v0.3 contract in any installed reviewer.

Verify claims against current first-party evidence and distinguish modes, prerelease/repository-only features and contradictions. For Enable, verify a public implementable specification separately from conformance claims and reference tools. Check listing accuracy, taxonomy, duplicates and known provenance, then run `npm test` and `npm run validate:content -- --require-submitters` against the exact candidate. Do not infer product behavior from a validation pass; state when functional testing was not performed.

Use `eligible — corrections required`, `hold — evidence unresolved`, `meets policy`, or `does not meet policy`, recording stage and blockers. Missing evidence is unresolved, not proof of an absent capability. `meets policy` is not merge/deploy approval.

### SEO suggestions

Tool authors may suggest `seoTitle`, `seoDescription`, and `agentSummary` in tool frontmatter. All three are optional, including for existing listings. The editorial reviewer owns the final public wording and may revise, omit, or remove a suggestion before approval.

Review each field against the tool's cited first-party evidence and the existing profile. Keep the title specific to the tool and its agent-facing use (usually about 50–60 characters). Make the description a concise, factual reason to inspect the profile (usually about 140–160 characters). Make the agent summary one short plain-text paragraph about what the tool enables an agent to do (roughly 40–70 words). These are editorial drafting targets, not hard validation limits or automatic truncation rules. Avoid unsupported superlatives, promotional claims, repeated keywords, markdown, and HTML. A valid value must be a non-empty string after surrounding whitespace is trimmed.

`seoTitle` replaces the generated page title only. `seoDescription` replaces the generated meta, Open Graph, Twitter, and WebPage description only. These two fields fall back independently, so reviewers can approve one without the other. `agentSummary` appears as a paragraph before the existing short description; it does not replace the description used in tool entities, exports, feeds, or LLM summaries.

During rollout, approve these fields one tool at a time when the wording is ready. An omitted or removed field is published as `NULL`, and the site retains its established fallback or layout. A change to any field counts as a substantive tool edit for the content modification timestamp.

## Optional announcement tag

`announcementXHandle` is a separate, opt-in announcement-tagging value. Do not require it for acceptance or substitute a GitHub submitter, repository owner, product name, or scraped social account. Confirm it was explicitly supplied for tagging; existing tools need no backfill.

Accept outer whitespace and one optional leading `@`; publish the bare, case-preserved handle matching ASCII `[A-Za-z0-9_]{1,15}`. Omission and empty/whitespace-only strings mean no tag. Reject URLs (even X/Twitter profile URLs), `null`, other non-string types, extra `@` signs, punctuation, embedded whitespace, non-ASCII characters, and overlength handles. A lone `@` is invalid, not blank. Quote numeric-looking handles in YAML to keep them strings.

The D1 value is nullable `announcement_x_handle`; removing or blanking the source clears it to `NULL`. Changes, including case-only edits or removal, advance `content_modified_at`; equivalent `@`/bare inputs do not. Metadata generation must preserve the field independently of `submittedBy`. No announcement-posting implementation exists in this repository: downstream posting must consume this explicit field and omit a tag when it is absent, never fall back to GitHub attribution. This field does not itself authorize or trigger a post.
