# agentfirst.directory

Public content repo for [agentfirst.directory](https://agentfirst.directory).

This repo contains the approved directory content only:

- categories in `categories/`
- tools in `tools/`

The website code lives separately in `bradvin/agentfirst.directory-site` and consumes this repo as a git submodule.

## Editorial Intent

**Agent First is intentionally opinionated.**

This directory is for tools and platforms where **agents are a first-class citizen** — not just supported, integrated, or mentioned in marketing.

The bar is deliberately strict:

> If the product still makes complete sense as a normal devtool, API, SaaS, infra company, or AI product after removing the word "agent," it probably does **not** belong here.

We are not trying to index every tool an agent can use. We are trying to highlight tools built **for agents as the primary actor, user, runtime, or system boundary**.

## What Counts As Agent-First

A tool is a good fit when agents are central to the product itself, for example:

- **Agent identity** — inboxes, phone numbers, credentials, accounts, or durable agent presence
- **Agent memory/state** — persistent memory, context, state, or retrieval built primarily for agents
- **Agent orchestration/runtime** — systems where autonomous agents are the core abstraction
- **Agent-native execution environments** — products built specifically around how agents operate, not generic compute with agent messaging
- **Agent-specific interfaces or protocols** — standards, operating layers, or workflows designed around agent use from day one
- **Agent-to-human / agent-to-agent workflows** — where the agent is the primary participant, not just an automation backend

## What Usually Does *Not* Count

These categories are often useful in agent stacks, but are usually **not** enough on their own:

- generic browser automation
- generic cloud/browser/sandbox infrastructure
- generic search, crawling, scraping, or extraction APIs
- generic voice or multimodal AI platforms
- generic SaaS integrations or auth/connectivity middleware
- generic developer tooling, CI, evals, or frontend frameworks
- products that added agent features later but were not built around agents originally

In short: **dependencies of agents are not automatically agent-first products.**

## Inclusion Test

Before adding or approving a tool, ask:

1. **Who is the product really built for?**
   - An autonomous agent?
   - Or a human developer/team building software in general?
2. **What breaks if the agent framing is removed?**
   - If almost nothing breaks, it is probably not a fit.
3. **Is the agent the primary user/entity/system boundary?**
   - If not, it is probably adjacent tooling.
4. **Would this listing make the directory feel more focused or more diluted?**
   - If diluted, reject it.

## Fast Rejection Heuristics

A PR will often be rejected if the tool is primarily:

- browser infra for agents
- scraping/crawling/search infra for agents
- generic sandbox/compute infra for agents
- a standard API/productivity/devtool with new agent positioning
- integration plumbing for agent stacks
- broad AI tooling where agents are only one use case among many

These may be excellent products. They just may not match the directory thesis.

## Why PRs Get Rejected

Common reasons for non-approval:

- the tool is **agent-compatible**, but not **agent-first**
- the tool is mostly a **general-purpose primitive** used by agent builders
- the listing relies more on **marketing language** than product structure
- the tool fits a broader AI/devtools directory better than this one
- approving it would weaken the editorial line of the site

When in doubt, the directory should prefer being **smaller, sharper, and more defensible** over being comprehensive.

## Structure

### Categories

Each category is one JSON file in `categories/<slug>.json`.

Example:

```json
{
  "slug": "agent-security",
  "label": "Agent Security",
  "sortOrder": 110
}
```

Rules:

- `slug` must be lowercase kebab-case
- `label` should be short enough to fit in the site navigation
- `sortOrder` is optional, but helps place the category in the list

### Tools

Each tool is one Markdown file in `tools/<slug>.md`.

Example:

```md
---
slug: "coolapi"
name: "CoolAPI"
description: "An agent-first API for doing cool things"
category: "agent-security"
tags:
  - "mcp"
  - "security"
  - "api"
websiteUrl: "https://coolapi.dev"
githubUrl: "https://github.com/cooldev/coolapi"
logoUrl: "https://www.google.com/s2/favicons?sz=64&domain_url=https://coolapi.dev"
ogImageUrl: "https://coolapi.dev/og-image.png"
pricing: "freemium"
submittedBy: "your-github-handle"
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
- `submittedBy`

Optional tool fields:

- `githubUrl`
- `logoUrl`
- `ogImageUrl`
- `sortOrder`

Valid `pricing` values:

- `open-source`
- `freemium`
- `free`
- `paid`

## How To Add A Tool

1. Fork this repo or create a branch.
2. Pick the closest existing category in `categories/`.
3. Add a new file in `tools/<slug>.md`.
4. Fill in the frontmatter, including `ogImageUrl` when available, and add a short body description.
5. In the PR description, explain **why the tool is agent-first** using the inclusion test above.
6. Open a pull request to `main`.

If a tool PR omits asset fields, the repo now auto-fills them on the PR branch when possible:

- missing `logoUrl` defaults to a Google favicon URL based on `websiteUrl`
- missing `ogImageUrl` is discovered from the tool website's social metadata

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

## Current Categories

- Identity & Comms
- Compute & Sandboxes
- Browser Automation
- Crawling & Extraction
- Memory & State
- Payments
- SaaS Integrations
- Orchestrators
- API Orchestration
- Voice & Multimodal
- Search & Discovery
