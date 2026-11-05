# agentfirst.directory

Public content repo for [agentfirst.directory](https://agentfirst.directory).

This repo contains the approved directory content only:

- categories in `categories/`
- tools in `tools/`

The website code lives separately in [bradvin/agentfirst.directory-site](https://github.com/bradvin/agentfirst.directory-site).

## Editorial Policy

**Only tools built for agents belong in this directory.** Decide product fit before reviewing evidence or assigning a classification. A human-first app with an API, MCP server, SDK, or embedded AI agent does not become a tool built for agents through integration depth or tool count.

Agent-oriented infrastructure, protocols, and agent-builder tools can qualify when their operating model is designed for agent operation. They need not serve agents exclusively or have originated as agent-only products. An AI agent serving human customers is not, by itself, a tool built for agents.

### Product-fit gate (before evidence)

Use only the product description and operating model, plus canonical homepage positioning if necessary. Do not inspect evidence arrays, documentation, MCP details, implementation, pricing, licence, or validation results to make or rescue this decision.

Record one bounded semantic decision for each proposed listing:

- **`pass-fit`** — record the intended user, core job, and why the product is built for agents. Only then proceed to evidence, schema, and contradiction review.
- **`fail-fit`** — record the intended user, core job, and why it is not built for agents. Stop with nonacceptance; do not review evidence, enrich metadata, or commit listing changes.
- **`unclear-fit`** — record the intended user, core job, and what prevents a built-for-agents decision. Hold for product-positioning clarification; do not review evidence or proceed with metadata or listing commits.

A classification cannot bypass this gate. Category guidance suggesting that internal autonomous agents alone establish eligibility is superseded by this rule. Historical reassessments and public corrections require separate owner approval; this policy update does not authorize changes to existing listings.

### Classifications (after `pass-fit`)

- **`agent-native`** — the product is built for agent operation, with agents as core actors, runtimes, entities, or participants; for example, agent orchestration, identity, communication, or agent-operated interfaces.
- **`agent-enabling`** — infrastructure or builder tooling designed for agent operation materially enables execution, memory, data access, communication, testing, or safe interaction. General-purpose usefulness or a secondary API/MCP integration cannot rescue a human-first product.
- **`agent-internet-protocol`** — an open protocol or interaction standard designed for agent participation in communication, commerce, identity, coordination, or other machine-to-machine interaction.

Classification explains *how* an eligible listing qualifies; it is not a quality tier.

## Inclusion Test

After `pass-fit`, a listing must pass all of these checks:

1. **Identify one classification.** Which of the three definitions does the eligible product satisfy?
2. **Name the concrete agent outcome.** What can an agent or agent builder materially do because this product or protocol exists?
3. **Verify the claim from first-party evidence.** Product documentation, source repositories, protocol specifications, or first-party pages must describe the relevant capability.
4. **Check that the capability is substantive.** The qualifying value must come from the product or protocol itself, not an integration badge.
5. **Check schema and contradictions.** Validate the submission and resolve conflicting claims without treating a schema pass as proof of product fit.

## What Does Not Qualify

Reject products not built for agents, including human-first apps with secondary REST, MCP, or SDK access, however extensive. Internal AI agents completing a human customer's task do not establish product fit. Generic compatibility, integration depth, tool count, and unsupported agent marketing cannot establish eligibility.

For coding-agent orchestrators, the product must own a material lifecycle across agent runs rather than merely invoke an agent. After product fit passes, evidence should show lifecycle controls such as task assignment and isolation, retained or shared state or validation evidence, and a separate gate that determines completion, review, or landing. Merely launching one agent, supplying prompts, wrapping an API or MCP server, advertising agent compatibility, or automating an ordinary developer task does not satisfy this boundary.

When evidence is ambiguous after `pass-fit`, do not invent a rationale: request stronger first-party evidence or reject the listing.

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
