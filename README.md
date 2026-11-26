# agentfirst.directory

Public content repo for [agentfirst.directory](https://agentfirst.directory).

This repo contains the approved directory content only:

- categories in `categories/`
- tools in `tools/`

The website code lives separately in [bradvin/agentfirst.directory-site](https://github.com/bradvin/agentfirst.directory-site).

## Proposed submission protection

The [review/merge/publication protection proposal](docs/submission-protection.md)
describes exact-head trusted approval, fail-closed publication checks and the
separate owner-approved settings activation plan. It is not active enforcement,
a submission-review restart or deployment authorization.

## Editorial Policy

The [canonical editorial policy](docs/editorial-policy.md) defines **v0.3: Run, Equip and Enable**. Agent First lists maintained offerings specifically designed for agents or people building, running and working with agents. Agent workflows must be a defining purpose, not merely a possible use.

- **Run:** run agents with meaningful customer control over execution, state or authority. Approving finished output alone is insufficient.
- **Equip:** provide a concrete agent task or improvement through named, purpose-built agent-workflow features. Human-operated feedback/context tools, maintained libraries, connectors, catalogues and data services can qualify; they need not own infrastructure or run the agent.
- **Enable:** define a maintained shared protocol/standard with first-class agents, a concrete interaction or portable representation and a defined contract. Implementing a protocol does not itself qualify a product through Enable.

### Product-fit gate (before evidence)

Use the bounded positioning packet in the canonical policy: identity/unit/mode, a short workflow explanation and submitted overview, plus at most two short first-party positioning excerpts if needed. Introductory docs/repository overviews are allowed; detailed API/MCP docs, claim-evidence arrays, code, pricing, licensing and validators cannot make or rescue fit.

- **`pass-fit`:** record the primary route, unit/mode and route-specific rationale. Only now review claim evidence, listing accuracy/classification and technical validation. Fit is eligibility, not acceptance.
- **`fail-fit`:** state the exact exclusion and stop with **evidence not reviewed**; no evidence review, enrichment or listing commits.
- **`unclear-fit`:** name the material missing fact or contradiction and ask a bounded clarification. Stop with **evidence not reviewed**; no evidence review, enrichment or listing commits. Unknown is not negative.

Availability is separate from fit. A failed page fetch alone is not rejection. Generic compatibility, integration depth, tool count, AI labels or internal agents returning finished outcomes do not establish fit. Standalone prompt/skill packs, templates and one-off scripts remain excluded. Category rules cannot bypass this gate or impose a Run-only boundary on Equip/Enable.

### Classifications (after `pass-fit`)

Run/Equip/Enable are review-record inclusion routes, **not** listing fields or classification replacements. The existing `agent-native`, `agent-enabling` and `agent-internet-protocol` classifications and evidence schema remain unchanged; see the canonical policy for their meanings. Classification is not a quality tier or an automatic one-to-one route mapping.

## Inclusion Test

After `pass-fit`, verify material claims against current first-party evidence, resolve contradictions and listing accuracy/taxonomy, and run content/schema/generated-data checks against the exact candidate. For Enable, verify the public specification and distinguish it from reference implementations; do not infer conformance from positioning.

Use `eligible — corrections required`, `hold — evidence unresolved`, `meets policy`, or `does not meet policy` with exact blockers and stage. Evidence uncertainty is a hold, not a guessed capability or an automatic rejection. Validation proves neither fit nor capability. `meets policy` is not approval to merge/deploy.

## What Does Not Qualify

Apply the canonical policy's exclusions to the exact offering, not its vendor family. Generic human-first SaaS with only secondary API/MCP/SDK compatibility does not qualify, but human operators and upstream services do not disqualify purpose-built agent tools.

The stricter lifecycle boundary for the **coding-agent orchestrators category** stays scoped to that category, not every Run tool and not Equip/Enable. Eligible tools may belong in a different category.

This repository update authorizes no existing-listing edits/removals, submission reviews/restart, installed-reviewer changes, merge or deployment. Structural validation is not a semantic evaluator; see the canonical policy's activation boundary.

## Structure

### Categories

Each category is one JSON file in `categories/<slug>.json`.

Example:

```json
{
  "slug": "orchestrators",
  "label": "Orchestrators",
  "sortOrder": 75,
  "seoTitle": "Orchestration platforms for teams of AI agents",
  "descriptionMd": "Control planes and runtimes that coordinate agents, tasks, state, governance, and human review.",
  "definitionMd": "This category covers systems whose main purpose is coordinating agent work across multiple runs, roles, workers, or workflows.",
  "scopeMd": "Includes control planes and runtimes that coordinate multiple agents or runs through task assignment, isolation, shared state, scheduling, observability, budgets, approvals, or governance. A coding-agent orchestrator must own a material lifecycle across runs, including a separate completion, review, or landing gate.",
  "inclusionMd": "- Coordinates multiple agents or runs.\n- Provides shared state, observability, budgets, approvals, or governance.\n- For coding agents, owns task assignment and isolation, retained or shared state or validation evidence, and a separate completion, review, or landing gate.",
  "exclusionMd": "- A single-agent framework with no coordination layer.\n- A generic scheduler that merely launches an agent.\n- A coding tool that only supplies prompts, wraps an API or MCP server, adds agent compatibility, or automates an ordinary developer task.",
  "selectionGuideMd": "- Which runtimes can participate?\n- How are state, failures, budgets, and approvals handled?\n- For coding agents, which controls span runs and what separate gate determines completion, review, or landing?",
  "useCases": [
    "Coordinate long-running agent work",
    "Apply budgets and approval controls"
  ],
  "isIndexable": true
}
```

Rules:

- `slug` must be lowercase kebab-case
- `label` should be short enough to fit in the site navigation
- `sortOrder` is optional, but helps place the category in the list
- `seoTitle`, `descriptionMd`, `definitionMd`, `scopeMd`, `inclusionMd`, `exclusionMd`, and `selectionGuideMd` are required authored editorial fields
- `useCases` is a required non-empty array of concrete category-specific uses
- `sources` is an optional claim-level evidence array. When present, each item requires `title`, `url` (HTTP or HTTPS first-party), `claim`, and `accessedAt`; `sourceType` is optional but must use the controlled list below when present
- `reviewedBy`, `reviewedAt`, and `publishedAt` are optional provenance fields and must only be added when known
- `isIndexable` is an optional boolean and defaults to `true`
- do not add `contentModifiedAt`; the publishing pipeline manages it from substantive changes

### Tools

Each tool is one Markdown file in `tools/<slug>.md`.

Example:

```md
---
slug: "coolapi"
name: "CoolAPI"
description: "An agent-first API for doing cool things"
seoTitle: "CoolAPI: Controlled API Access for AI Agent Workflows"
seoDescription: "Explore how CoolAPI gives AI agents controlled access to documented API operations. Review its supported interfaces, deployment model, pricing, and evidence."
agentSummary: "CoolAPI provides API and MCP interfaces for agents that need to request approved operations. Its documented permission controls define which actions an agent can attempt, while the hosted deployment handles the execution path. Review the linked documentation and pricing page to confirm the current controls, supported operations, and limits before relying on it."
category: "api-access-orchestration-layers"
tags:
  - "mcp"
  - "security"
  - "api"
websiteUrl: "https://coolapi.dev"
githubUrl: "https://github.com/cooldev/coolapi"
# Optional: only include when explicitly supplied for announcement tagging.
announcementXHandle: "CoolAPI_Team"
logoUrl: "https://www.google.com/s2/favicons?sz=64&domain_url=https://coolapi.dev"
ogImageUrl: "https://coolapi.dev/og-image.png"
logoWidth: 64
logoHeight: 64
ogImageWidth: 1200
ogImageHeight: 630
pricing: "freemium"
classification: "agent-enabling"
entityType: "web-api"
developerName: "CoolAPI"
docsUrl: "https://coolapi.dev/docs"
pricingUrl: "https://coolapi.dev/pricing"
licenseUrl: "https://coolapi.dev/license"
interfaces:
  - "REST API"
  - "MCP"
deploymentModes:
  - "hosted"
evidenceSources:
  - title: "CoolAPI agent documentation"
    url: "https://coolapi.dev/docs/agents"
    claim: "The documentation describes the agent-facing API and its permission model."
    accessedAt: "2026-09-03"
    sourceType: "official-documentation"
verificationLevel: "documentation-reviewed"
classificationRationaleMd: "Agents are a first-class participant in the documented API workflow."
inclusionRationaleMd: "The documented capability materially changes what an agent can do."
bestForMd: "Agent builders who need the documented API workflow."
notBestForMd: "Teams seeking an unrelated general-purpose API."
limitationsMd: "Confirm current limits on the linked pricing page."
unknownsMd: "No independent performance benchmark has been reviewed."
reviewedBy: "example-reviewer"
reviewedAt: "2026-09-03"
publishedAt: "2026-09-03"
isIndexable: true
---

Short summary of what the tool does.
```

Required tool fields:

- `slug`
- `name`
- `description`
- `category`
- `tags`
- `websiteUrl`
- `pricing`
- `classification`
- `evidenceSources` — a non-empty array of first-party evidence using the required format below

Optional tool fields:

- `announcementXHandle` — an explicitly supplied X account to tag in a listing announcement, not GitHub submitter attribution. Accept a bare handle or one leading `@`, with outer whitespace trimmed. The canonical published value is bare and preserves case; it must match ASCII `[A-Za-z0-9_]{1,15}`. Omit it when no tag is requested; empty or whitespace-only strings also mean no tag. URLs (including X/Twitter profile URLs), `null`, numbers, booleans, arrays, objects, and other invalid values are rejected. Never infer it from `submittedBy`, `tool-submitters.json`, `githubUrl`, website social metadata, or a product name; do not backfill existing listings.
- `seoTitle`, `seoDescription`, and `agentSummary` are optional, non-empty plain-text strings. Contributors may suggest them; the editorial reviewer owns the final wording. Existing listings need no changes.
- For these three SEO fields, surrounding whitespace is trimmed before validation and publishing; whitespace-only values are invalid.
- `seoTitle` overrides only the tool page title; `seoDescription` overrides only its meta and social description. Each falls back independently to the current generated text when omitted. `agentSummary` adds a paragraph before the existing visible description and does not replace it.
- Draft a specific, factual title around the tool and its agent use (usually about 50–60 characters). Write a description that helps a reader decide whether to open the profile (usually about 140–160 characters). Summarize the practical agent-facing outcome in one short paragraph (roughly 40–70 words). These are editorial drafting targets, not hard validation limits or automatic truncation rules. Avoid unsupported claims, keyword repetition, promotional language, and markdown or HTML.
- `githubUrl`
- `logoUrl`
- `ogImageUrl`
- `logoWidth`, `logoHeight`, `ogImageWidth`, and `ogImageHeight` as positive integers
- `entityType`
- `developerName`
- `docsUrl`, `pricingUrl`, and `licenseUrl`
- `interfaces` and `deploymentModes` as arrays of non-empty strings
- `verificationLevel`
- `classificationRationaleMd` and `inclusionRationaleMd`
- `bestForMd`, `notBestForMd`, `limitationsMd`, and `unknownsMd`
- `reviewedBy`, `reviewedAt`, and `publishedAt`
- `isIndexable`, which defaults to `true`
- `sortOrder`

The [tool review guide](docs/tool-review-guide.md) gives the reviewer the acceptance checklist and rollout behavior for SEO suggestions.

The announcement handle is retained by the source reader and published to D1 as nullable `announcement_x_handle`. Omission or blank input writes `NULL`, and removal clears any previous value. Existing attribution and asset generators preserve the authored field. This repository does not post announcements: a downstream announcement consumer must explicitly read this field, add `@` only when formatting a tag, and omit tagging when it is absent. Supplying it does not itself trigger or guarantee a post.

Do not add `contentModifiedAt` to a tool file. D1 sets it when the record is first published and advances it only when authored or visible data changes. `synced_at` is a separate operational timestamp that advances on every sync.

Valid `pricing` values:

- `open-source` — the core listed product is available under an open-source licence; a hosted offering may still charge
- `source-available` — source can be inspected, but its licence includes restrictions that are not open source
- `freemium` — a currently available, ongoing free tier exists alongside a currently available paid tier or upgrade
- `free` — the product is currently usable at no cost and no currently available paid tier is established
- `paid` — ongoing use requires payment after any limited trial or one-time introductory credit, whether by subscription or usage
- `unknown` — current first-party sources do not establish the product's own pricing; user-funded transactions or third-party fees alone are not product pricing

Valid `classification` values:

- `agent-native`
- `agent-enabling`
- `agent-internet-protocol`

Valid `entityType` values:

- `software-application`
- `web-application`
- `software-source-code`
- `web-api`
- `service`
- `technical-standard`
- `protocol`

Valid `verificationLevel` values:

- `documentation-reviewed`
- `vendor-confirmed`
- `hands-on-tested`

Use `hands-on-tested` only when the listing records what was tested, when it was tested, and the relevant conditions. Do not infer this level from documentation or a vendor demonstration.

### Evidence sources and provenance

Every tool **must** include a non-empty `evidenceSources` array. This is required for every new tool submission; a missing or empty array fails content validation. Category `sources` remain optional and are separate from this tool-submission requirement.

Each item in a tool's `evidenceSources` array must include all of these required fields:

- `title` — the source's descriptive title
- `url` — an HTTPS first-party URL
- `claim` — the specific directory claim this source supports
- `accessedAt` — the ISO 8601 date (`YYYY-MM-DD`) when the source was checked
- `sourceType` — one of these controlled values:

- `official-documentation`
- `official-repository`
- `official-license`
- `official-pricing`
- `official-product-page`
- `official-product-announcement`
- `official-specification`
- `official-legal`
- `official-release-notes`

One broad homepage link should not be used to support unrelated claims. The controlled `official-*` `sourceType` records the submitter's declaration that a source is first-party; reviewers must still confirm that the URL is owned or maintained by the product, project, or protocol authority.

`reviewedBy` and `reviewedAt` describe a real editorial review, not submission or sync time. Add both only after that review occurs. `publishedAt` should only be supplied when the publication date is known. Quote dates in YAML frontmatter so they remain strings.

## How To Add A Tool

1. Record `pass-fit` using the product-fit gate above before researching evidence or creating listing changes; otherwise stop. Fork this repo or create a branch only for a passing candidate.
2. Pick the closest existing category in `categories/`.
3. Add a new file in `tools/<slug>.md`.
4. Fill in every required frontmatter field, including a non-empty `evidenceSources` array.
5. Check that every evidence item has a title, HTTPS first-party URL, specific claim, ISO 8601 access date, and controlled `sourceType`.
6. Add a short body description.
7. Open a pull request to `main`.

What you need to provide:

- a valid tool file in `tools/<slug>.md`
- the required frontmatter fields
- a non-empty `evidenceSources` array with complete first-party evidence for the listing's claims
- a short factual description of the tool
- useful, specific tags
- `githubUrl` when the tool is open source
- `logoUrl` and `ogImageUrl` when you already have the canonical values, but these are optional
- optionally, `announcementXHandle` if you explicitly want that X account tagged in a listing announcement; a handle is never required to submit a tool

What you do not need to worry about:

- author attribution
- generated logo metadata
- generated OG image metadata

## How To Add A Category

Add a new category only when the current list clearly does not fit.

1. Create `categories/<slug>.json`.
2. Keep the label concise.
3. Add or update at least one tool in the same PR to use that category.
4. Open a pull request to `main`.

## Writing Guidance

- Keep descriptions factual and compact.
- Use the canonical website URL.
- Add `githubUrl` when the tool is open source.
- Add `ogImageUrl` from the product's social preview image when available.
- Keep tags useful and specific.
- Do not create duplicate listings for the same product.
- Do not rely on vague claims like "works with agents" or "great for agent workflows" as the main justification.

Prefer including an agent-enablement section in the markdown body that makes the tool's value to agents explicit. Good headings for this section include:

- `## So agents can...`
- `## Allows agents to...`
- `## Allows you to create agents that...`

This section should usually be a short bullet list of concrete agent outcomes. A simple example is:

```md
## So agents can...

- do outcome one
- do outcome two
- do outcome three
```

## Behind The Scenes

Before opening an internal tool PR, generate repo-managed submitter metadata using the actual GitHub PR author and the exact new tool slug (repeat `--slug` for multiple tools):

```bash
git fetch origin main
git worktree add --detach ../agentfirst-base origin/main
npm run sync:tool-submitters -- --base-root-dir ../agentfirst-base --submitted-by ACTUAL_PR_AUTHOR --slug EXACT_NEW_SLUG
git worktree remove ../agentfirst-base
npm run validate:content -- --require-submitters
```

Commit `tool-submitters.json` along with the tool file before opening the PR. Do not put `submittedBy` in tool frontmatter. The trusted base preserves attribution for existing tools; new tools are attributed to the actual PR author.

For both same-repository and fork PRs, enrichment is a branch-read-only preflight: it never commits or pushes. Missing generated metadata produces one updated correction comment and a failing preflight until the contributor commits the changes. Media generation runs only after an approved review; use the comment's exact local commands, validate, and commit any generated media changes. Fork validation still uses GitHub's normal workflow-approval rules.

After a tool PR is approved, the repo handles a few things automatically:

- author attribution is checked against the trusted base and the PR author
- missing `logoUrl` defaults to a Google favicon URL based on `websiteUrl`
- missing `ogImageUrl` is discovered from the tool website's social metadata when available
- D1 receives authored editorial, evidence, entity, and provenance fields
- `content_modified_at` changes only when authored or visible record data changes; `synced_at` records every sync
- changed public URLs are purged from the Cloudflare cache after D1 sync, then the canonical HTML subset is submitted to IndexNow

## Maintenance Scripts

Populate missing social preview images from each tool's website metadata:

```bash
npm run enrich:og-images
```

Write discovered `ogImageUrl` values back into tool files:

```bash
npm run enrich:og-images -- --write
```

Refresh even tools that already have `ogImageUrl` set:

```bash
npm run enrich:og-images -- --write --refresh
```

Populate both missing `logoUrl` and `ogImageUrl` values:

```bash
npm run enrich:tool-assets -- --write
```

Submit a previously computed JSON URL list to IndexNow:

```bash
npm run submit:indexnow -- /path/to/changed-urls.json
```

The production workflow uses the public verification key at `https://agentfirst.directory/51e9d2d62bf357523274a20c53e380c6.txt`. Rotate the constant and the hosted key file together.

## Current Categories

- Identity & Comms
- Compute & Sandboxes
- Browser Automation
- UI & Frontends
- Crawling & Extraction
- Agent Testing & QA
- Storage & Media
- Memory & State
- Payments
- Frameworks & Standards
- SaaS Integrations
- Orchestrators
- API Orchestration
- Voice & Multimodal
- Search & Discovery
- Marketing & SEO
- Education & Learning
