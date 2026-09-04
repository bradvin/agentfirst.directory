---
slug: "agentation"
name: "Agentation"
description: "Visual UI annotation and structured feedback for AI coding agents"
category: "agent-ui-frontends"
tags:
  - "browser"
  - "annotation"
  - "developer-tools"
websiteUrl: "https://www.agentation.com/"
githubUrl: "https://github.com/benjitaylor/agentation"
logoUrl: "https://www.google.com/s2/favicons?sz=64&domain_url=https%3A%2F%2Fwww.agentation.com%2F"
ogImageUrl: "https://agentation.com/og-image.png"
pricing: "source-available"
classification: "agent-enabling"
entityType: "software-application"
developerName: "Benji Taylor"
docsUrl: "https://www.agentation.com/"
licenseUrl: "https://github.com/benjitaylor/agentation/blob/main/LICENSE"
interfaces:
  - "in-browser annotation toolbar"
  - "structured Markdown export"
  - "MCP server"
  - "webhooks"
deploymentModes:
  - "development-time application embed"
  - "local MCP server"
evidenceSources:
  - title: "Agentation documentation — annotations, MCP, webhooks, and licensing"
    url: "https://www.agentation.com/"
    claim: "The official documentation describes structured UI annotations for coding agents, MCP and webhook delivery, and free internal use with a commercial license required for redistribution in a sold product."
    accessedAt: "2026-09-03"
    sourceType: "official-documentation"
  - title: "Agentation repository — installation, features, and browser requirements"
    url: "https://github.com/benjitaylor/agentation"
    claim: "The maintained repository documents the React package, selector-rich Markdown output, and requirements of React 18+ and a desktop browser, with mobile unsupported."
    accessedAt: "2026-09-03"
    sourceType: "official-repository"
  - title: "Agentation skill — development-only and MCP setup"
    url: "https://github.com/benjitaylor/agentation/blob/main/skills/agentation/SKILL.md"
    claim: "The first-party skill instructs projects to load Agentation only in development and documents the local MCP server and annotation tools."
    accessedAt: "2026-09-03"
    sourceType: "official-documentation"
  - title: "Agentation license — PolyForm Shield 1.0.0"
    url: "https://github.com/benjitaylor/agentation/blob/main/LICENSE"
    claim: "The source is available under PolyForm Shield 1.0.0, which permits use, modification, and distribution but prohibits competing products or services."
    accessedAt: "2026-09-03"
    sourceType: "official-license"
verificationLevel: "documentation-reviewed"
classificationRationaleMd: "Agentation captures and structures a person's visual feedback so a separate coding agent can locate and change the relevant UI code; it enables that agent rather than acting autonomously itself."
bestForMd: "React teams reviewing an in-development interface who want precise selectors, layout context, and annotations delivered to coding agents by copy/paste, MCP, or webhook."
limitationsMd: "The documented package requires React 18+ and a desktop browser; mobile is unsupported, and the integration should load only in development. PolyForm Shield also restricts competing use."
unknownsMd: "First-party documentation does not publish a standalone price schedule for commercial redistribution licences."
sortOrder: 40
---

Agentation is a visual feedback layer for AI coding agents. Its current docs position it as a floating toolbar that lets you click elements, select text, and generate structured markdown that tools like Claude Code and Codex can use to find the right code and apply UI fixes.

## Features

- Floating in-browser toolbar for annotating elements, text selections, and layout regions
- Structured markdown output with selectors, DOM context, and optional component information
- React-aware component detection to help agents map page elements back to source code
- Multiple output detail levels for quick copy edits or deeper debugging context
- Installation flow for React and Next.js projects plus a Claude Code setup path

## So agents can...

- Turn vague visual feedback into precise code-editing instructions tied to real selectors
- Fix UI spacing, copy, and component behavior with less back-and-forth from the user
- Iterate on frontend details by copying structured annotations directly into an agent session
