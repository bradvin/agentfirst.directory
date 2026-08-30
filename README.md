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
classification: "agent-native"
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
- `sortOrder`

Valid `pricing` values:

- `open-source`
- `freemium`
- `free`
- `paid`

Valid `classification` values:

- `agent-native`
- `agent-enabling`
- `agent-internet-protocol`

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
