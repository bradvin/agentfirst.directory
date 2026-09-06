# agentfirst.directory

Public content repo for [agentfirst.directory](https://agentfirst.directory).

This repo contains the approved directory content only:

- categories in `categories/`
- tools in `tools/`

The website code lives separately in [bradvin/agentfirst.directory-site](https://github.com/bradvin/agentfirst.directory-site).

## Editorial Policy

**Agent First is intentionally opinionated, but agent-first infrastructure is broader than agent-only software.** The directory includes products and protocols that meet at least one of these classifications:

- **`agent-native`** — agents are a core actor, runtime, entity, or participant in the product. Examples include agent orchestration, agent identity and communications, agent-operated interfaces, and human-agent collaboration systems.
- **`agent-enabling`** — the product materially empowers an agent-first workflow through substantive capabilities such as execution, memory, data access, communication, testing, or safe interaction. Agents do not need to be the product's exclusive or primary users.
- **`agent-internet-protocol`** — an open protocol or interaction standard lets agents participate in internet communication, commerce, identity, coordination, or other machine-to-machine interaction.

Classification explains *how* each listing qualifies; it is not a quality tier.

## Inclusion Test

A listing must pass all of these checks:

1. **Identify one classification.** Which of the three definitions does the product satisfy?
2. **Name the concrete agent outcome.** What can an agent or agent builder materially do because this product or protocol exists?
3. **Verify the claim from first-party evidence.** Product documentation, source repositories, protocol specifications, or first-party pages must describe the relevant capability.
4. **Check that the capability is substantive.** The qualifying value must come from the product or protocol itself, not a thin wrapper or an integration badge.
5. **Keep the directory defensible.** The listing and its classification must remain accurate without stretching generic technical compatibility into an agent-first claim.

## What Does Not Qualify

A listing should be rejected when its only support is:

- generic technical compatibility with software an agent could call;
- a thin MCP, API, or command wrapper over an otherwise unrelated product;
- vague or unsupported marketing language about agents;
- a general-purpose primitive with no material agent-first workflow or agent-internet role;
- third-party claims that cannot be confirmed from an authoritative first-party source.

General-purpose products can qualify as `agent-enabling` when their documented capabilities materially empower agent-first workflows. Conversely, adding an agent integration does not automatically qualify a product.

When evidence is ambiguous, do not invent a rationale: request stronger first-party evidence or reject the listing.

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
  "scopeMd": "Includes control planes and runtimes that coordinate multiple agents or runs through task assignment, shared state, scheduling, observability, budgets, approvals, or governance.",
  "inclusionMd": "- Coordinates multiple agents or runs.\n- Provides shared state, observability, budgets, approvals, or governance.",
  "exclusionMd": "- A single-agent framework with no coordination layer.\n- A generic scheduler that merely launches an agent.",
  "selectionGuideMd": "- Which runtimes can participate?\n- How are state, failures, budgets, and approvals handled?",
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
- `sources` is an optional claim-level evidence array using the source format below
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
category: "api-access-orchestration-layers"
tags:
  - "mcp"
  - "security"
  - "api"
websiteUrl: "https://coolapi.dev"
githubUrl: "https://github.com/cooldev/coolapi"
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

Optional tool fields:

- `githubUrl`
- `logoUrl`
- `ogImageUrl`
- `logoWidth`, `logoHeight`, `ogImageWidth`, and `ogImageHeight` as positive integers
- `entityType`
- `developerName`
- `docsUrl`, `pricingUrl`, and `licenseUrl`
- `interfaces` and `deploymentModes` as arrays of non-empty strings
- `evidenceSources`
- `verificationLevel`
- `classificationRationaleMd` and `inclusionRationaleMd`
- `bestForMd`, `notBestForMd`, `limitationsMd`, and `unknownsMd`
- `reviewedBy`, `reviewedAt`, and `publishedAt`
- `isIndexable`, which defaults to `true`
- `sortOrder`

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

Each item in a category's `sources` or a tool's `evidenceSources` must include:

- `title` — the source's descriptive title
- `url` — an HTTP or HTTPS first-party URL
- `claim` — the specific directory claim this source supports
- `accessedAt` — the ISO 8601 date or timestamp when the source was checked

`sourceType` is optional, but when present must use one of these controlled values:

- `official-documentation`
- `official-repository`
- `official-license`
- `official-pricing`
- `official-product-page`
- `official-product-announcement`
- `official-specification`
- `official-legal`
- `official-release-notes`

One broad homepage link should not be used to support unrelated claims.

`reviewedBy` and `reviewedAt` describe a real editorial review, not submission or sync time. Add both only after that review occurs. `publishedAt` should only be supplied when the publication date is known. Quote dates in YAML frontmatter so they remain strings.

## How To Add A Tool

1. Fork this repo or create a branch.
2. Pick the closest existing category in `categories/`.
3. Add a new file in `tools/<slug>.md`.
4. Fill in the required frontmatter fields.
5. Add a short body description.
6. Open a pull request to `main`.

What you need to provide:

- a valid tool file in `tools/<slug>.md`
- the required frontmatter fields
- a short factual description of the tool
- useful, specific tags
- `githubUrl` when the tool is open source
- `logoUrl` and `ogImageUrl` when you already have the canonical values, but these are optional

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

After a tool PR is approved, the repo handles a few things automatically:

- author attribution is derived from the PR author
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
