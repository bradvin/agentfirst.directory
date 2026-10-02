---
slug: "orkas-video-studio"
name: "OrkasVideoStudio"
description: "Local-first CLI and MCP toolkit for coding-agent video production"
category: "storage-media-hosting"
tags:
  - "video"
  - "mcp"
  - "cli"
  - "local-first"
  - "editable-timeline"
websiteUrl: "https://github.com/Orkas-AI/Orkas-VideoStudio"
githubUrl: "https://github.com/Orkas-AI/Orkas-VideoStudio"
pricing: "open-source"
classification: "agent-enabling"
entityType: "software-source-code"
developerName: "Orkas"
verificationLevel: "documentation-reviewed"
docsUrl: "https://github.com/Orkas-AI/Orkas-VideoStudio#readme"
licenseUrl: "https://github.com/Orkas-AI/Orkas-VideoStudio/blob/main/LICENSE"
interfaces:
  - "CLI"
  - "MCP"
deploymentModes:
  - "local"
classificationRationaleMd: "The toolkit is designed for coding agents to author an editable plan.json timeline and carry it through composition, editing, generation and assembly. Its routing knowledge, shared timeline and delivery guard provide a substantive agent media-production workflow beyond generic access to a video model API."
bestForMd: "Coding agents that need to create or edit local video artifacts while retaining a readable production plan."
limitationsMd: "The project is in early development and currently documents installation from source. Composition, editing and transcription form the zero-key trunk; optional generation requires the user's provider keys and may incur provider costs. It is a local toolkit, not a hosted storage service or a claim of independently measured production reliability."
evidenceSources:
  - title: "OrkasVideoStudio official repository README"
    url: "https://github.com/Orkas-AI/Orkas-VideoStudio"
    claim: "Documents the local CLI and MCP interfaces for coding agents, editable plan.json timeline, composition/editing/generation axes, automatic assembly and delivery guard."
    accessedAt: "2026-10-02"
    sourceType: "official-repository"
  - title: "OrkasVideoStudio source installation and requirements"
    url: "https://github.com/Orkas-AI/Orkas-VideoStudio#install"
    claim: "Documents Node.js and ffmpeg prerequisites, source installation while npm packages are being published, and optional generation using the user's provider keys."
    accessedAt: "2026-10-02"
    sourceType: "official-documentation"
  - title: "OrkasVideoStudio MIT license"
    url: "https://github.com/Orkas-AI/Orkas-VideoStudio/blob/main/LICENSE"
    claim: "The public toolkit is distributed under the MIT license."
    accessedAt: "2026-10-02"
    sourceType: "official-license"
---

OrkasVideoStudio is an MIT-licensed, local-first TypeScript CLI and MCP toolkit that lets coding agents compose, edit, generate, and automatically assemble videos from editable `plan.json` timelines.

The agent supplies the production decisions and edits the plan; the toolkit provides routing knowledge and media operations. The documented `stage-plan` and `stage-assemble` pipeline connects the production steps, with `ovs plan promise-check` as a delivery guard. This is a documentation-based description, not an independent hands-on test.

## So agents can...

- Turn a video brief into a readable timeline that can be revised and re-rendered.
- Compose motion graphics and edit supplied footage through a local CLI or MCP interface.
- Combine media operations into an assembled video while keeping optional provider-backed generation distinct from the zero-key trunk.

This entry fits the media-processing side of Storage & Media; it does not claim to provide hosted storage or permanent public artifact URLs.
