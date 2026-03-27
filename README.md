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
4. Fill in the frontmatter and add a short body description.
5. Open a pull request to `main`.

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
- Keep tags useful and specific.
- Do not create duplicate listings for the same product.

## Current Categories

- Identity & Comms
- Compute & Sandboxes
- Browser Automation
- Crawling & Extraction
- Memory & State
- Payments
- SaaS Integrations
- API Orchestration
- Voice & Multimodal
- Search & Discovery
