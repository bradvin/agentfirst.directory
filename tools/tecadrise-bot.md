---
slug: "tecadrise-bot"
name: "TecAdRise Bot"
description: "Open-source local multi-agent desktop shell built on the Cursor SDK"
seoTitle: "TecAdRise Bot: Local Multi-Agent Desktop for Cursor SDK Agents"
seoDescription: "TecAdRise Bot is a free MIT-licensed Windows desktop for local multi-agent teams with per-agent models, souls, skills, MCP, shared memory, and scheduled routines."
agentSummary: "TecAdRise Bot is a Windows desktop workspace for a local multi-agent team on the Cursor SDK. Each agent gets its own model, instructions, workspace, skills, and MCP tools. A shared memory vault and a localhost HTTP control plane let agents coordinate, schedule routines, and update their own config."
category: "agent-ui-frontends"
tags:
  - "desktop"
  - "multi-agent"
  - "open-source"
  - "cursor-sdk"
  - "local-first"
websiteUrl: "https://tecadrise.ai/products/tecadrisebot"
githubUrl: "https://github.com/tecadrise-ai/TecAdRiseBot"
pricing: "open-source"
classification: "agent-native"
entityType: "software-application"
developerName: "TecAdRise"
docsUrl: "https://github.com/tecadrise-ai/TecAdRiseBot/blob/master/docs/control-plane.md"
licenseUrl: "https://github.com/tecadrise-ai/TecAdRiseBot/blob/master/LICENSE"
interfaces:
  - "desktop application"
  - "HTTP control plane"
deploymentModes:
  - "local"
classificationRationaleMd: "TecAdRise Bot is a human-agent desktop workspace, not a reusable framework or standard. Users run named local agents in an Electron chat UI with per-agent state, tools, memory, and routines. Using the Cursor SDK does not make this a framework listing."
bestForMd: "Builders who want a local Windows multi-agent desktop with Cursor SDK streaming, shared skills and memory, scheduled routines, and a localhost control plane."
limitationsMd: "Run from source on Windows (clone and npm run dev). There are no published GitHub Releases or packaged Windows installers. Cursor API usage is billed separately by Cursor. The HTTP control plane binds 127.0.0.1 only, has no auth, and must not be exposed outside the PC. Mac is not an official build."
verificationLevel: "documentation-reviewed"
evidenceSources:
  - title: "TecAdRise Bot product page"
    url: "https://tecadrise.ai/products/tecadrisebot"
    claim: "The product page describes TecAdRise Bot as a free open-source local multi-agent Windows desktop on the Cursor SDK. Documented install is a source-run workflow (clone and npm run dev), not packaged GitHub Releases."
    accessedAt: "2026-10-13"
    sourceType: "official-product-page"
  - title: "TecAdRise Bot control plane docs"
    url: "https://github.com/tecadrise-ai/TecAdRiseBot/blob/master/docs/control-plane.md"
    claim: "Default-branch docs on master describe a localhost HTTP API on 127.0.0.1:8787 with no auth, 127.0.0.1-only bind, and an instruction not to expose port 8787 outside the PC."
    accessedAt: "2026-10-13"
    sourceType: "official-documentation"
  - title: "TecAdRise Bot MIT license"
    url: "https://github.com/tecadrise-ai/TecAdRiseBot/blob/master/LICENSE"
    claim: "The TecAdRiseBot repository on master includes the MIT License legal text."
    accessedAt: "2026-10-13"
    sourceType: "official-license"
---

TecAdRise Bot (TecAdRiseBot) is a free open-source Windows desktop for running a local multi-agent team on the Cursor SDK. Each agent has its own model, Soul instructions, workspace, skills, and MCP tools, and agents can share lasting memory, talk to each other, and run scheduled routines.

Run it from source: clone https://github.com/tecadrise-ai/TecAdRiseBot (default branch `master`) and `npm run dev`. There are no packaged Windows GitHub Releases.

The localhost HTTP control plane (`http://127.0.0.1:8787`) has no authentication. It binds 127.0.0.1 only. Do not port-forward or expose it outside the PC. Agents can PATCH their own config through that API.

## So agents can...

- Run as named local agents with separate models, instructions, skills, and workspaces
- Persist lasting facts in a shared host memory vault and reuse them on later turns
- Coordinate through inter-agent messages and a localhost HTTP control plane
- Execute scheduled routines (interval, cron, daily, weekly, once) while the desktop app is open
