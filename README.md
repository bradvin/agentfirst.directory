# agentfirst.directory

Public content repo for [agentfirst.directory](https://agentfirst.directory).

This repo contains the approved directory content only:

- categories in `categories/`
- tools in `tools/`

The website code lives separately in `bradvin/agentfirst.directory-site` and consumes this repo as a git submodule.

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

Prefer including an agent-enablement section in the markdown body that makes the tool's value to agents explicit. Good headings for this section include:

- `## So agents can...`
- `## Allows agents to...`
- `## Allows you to create agents that...`

This section should usually be a short bullet list of concrete agent outcomes. Existing examples in the repo include:

- [tools/paperclip.md](/Users/brad/Documents/GitHub/bradvin/agentfirst.directory/tools/paperclip.md): coordinating as a team with roles, goals, budgets, and governance
- [tools/vapi.md](/Users/brad/Documents/GitHub/bradvin/agentfirst.directory/tools/vapi.md): running phone-based workflows and handing conversations between specialized voice agents
- [tools/browser-use.md](/Users/brad/Documents/GitHub/bradvin/agentfirst.directory/tools/browser-use.md): logging in, completing multi-page workflows, and keeping browser state across runs

A simple pattern is:

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
