---
slug: "tecadrise-bot"
name: "TecAdRise Bot"
description: "Open-source local multi-agent desktop shell built on the Cursor SDK"
seoTitle: "TecAdRise Bot: Local Multi-Agent Desktop for Cursor SDK Agents"
seoDescription: "TecAdRise Bot is a free MIT-licensed Windows desktop for local multi-agent teams with per-agent models, souls, skills, MCP, shared memory, and scheduled routines."
agentSummary: "TecAdRise Bot runs a local multi-agent team on Windows through the Cursor SDK. Each agent gets its own model, instructions, workspace, skills, and MCP tools, while a shared memory vault and localhost control plane let agents coordinate, schedule routines, and update their own config."
category: "agent-frameworks-standards"
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
docsUrl: "https://tecadrise.ai/products/tecadrisebot"
licenseUrl: "https://github.com/tecadrise-ai/TecAdRiseBot/blob/main/LICENSE"
interfaces:
  - "desktop application"
  - "HTTP control plane"
deploymentModes:
  - "local"
classificationRationaleMd: "TecAdRise Bot is itself the agent runtime and workspace: users run multiple named agents locally, each with sticky instructions, tools, memory, and routines, and agents can message peers and PATCH their own configuration."
bestForMd: "Builders who want a local Windows multi-agent desktop with Cursor SDK streaming, shared skills and memory, scheduled routines, and a localhost control plane."
limitationsMd: "Official product page documents Windows 10/11 support; Cursor API usage is billed separately by Cursor. Mac support is described as possible later, not as a current official build."
verificationLevel: "documentation-reviewed"
evidenceSources:
  - title: "TecAdRise Bot product page"
    url: "https://tecadrise.ai/products/tecadrisebot"
    claim: "TecAdRise documents TecAdRise Bot as a free open-source local multi-agent desktop for Windows built on the Cursor SDK, with per-agent models, souls, skills, MCP, shared memory, inter-agent messages, routines, and a localhost HTTP control plane."
    accessedAt: "2026-10-12"
    sourceType: "official-product-page"
  - title: "TecAdRise Bot GitHub repository"
    url: "https://github.com/tecadrise-ai/TecAdRiseBot"
    claim: "The official repository presents TecAdRiseBot as an open-source Electron desktop multi-agent shell using the Cursor TypeScript SDK."
    accessedAt: "2026-10-12"
    sourceType: "official-repository"
  - title: "TecAdRise Bot license"
    url: "https://github.com/tecadrise-ai/TecAdRiseBot/blob/main/LICENSE"
    claim: "The TecAdRiseBot repository is published under the MIT License."
    accessedAt: "2026-10-12"
    sourceType: "official-license"
---

TecAdRise Bot (TecAdRiseBot) is a free open-source Windows desktop for running a local multi-agent team on the Cursor SDK. Each agent has its own model, Soul instructions, workspace, skills, and MCP tools, and agents can share lasting memory, talk to each other, and run scheduled routines.

## So agents can...

- Run as named local agents with separate models, instructions, skills, and workspaces
- Persist lasting facts in a shared host memory vault and reuse them on later turns
- Coordinate through inter-agent messages and a localhost HTTP control plane
- Execute scheduled routines (interval, cron, daily, weekly, once) while the desktop app is open
