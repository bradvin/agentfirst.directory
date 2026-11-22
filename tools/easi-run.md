---
slug: "easi-run"
name: "easi.run"
description: "Self-hosted Chrome sessions for coding agents and people"
category: "web-browser-interaction-tools"
tags: ["browser","mcp","self-hosted","human-in-the-loop"]
websiteUrl: "https://easi.run"
githubUrl: "https://github.com/julianosig/easi.run"
pricing: "open-source"
classification: "agent-enabling"
verificationLevel: "documentation-reviewed"
entityType: "software-application"
developerName: "Juliano Gouveia"
docsUrl: "https://docs.easi.run"
licenseUrl: "https://github.com/julianosig/easi.run/blob/main/LICENSE"
interfaces: ["MCP","REST API","web application"]
deploymentModes: ["self-hosted"]
classificationRationaleMd: "easi.run provides isolated Chrome sessions and MCP tools intended for coding agents, while supporting human control of the same session."
bestForMd: "Builders running browser tasks on their own server who want to observe agent actions and intervene when needed."
limitationsMd: "The documented installation requires a Linux x86-64 server with systemd and rootful Docker Engine 28 or later. HTTPS-only network egress means sites without HTTPS do not open."
evidenceSources: [{"title":"easi.run repository and quick start","url":"https://github.com/julianosig/easi.run","claim":"The repository documents self-hosted Chrome sessions, MCP and REST access, human takeover, saved profiles, action timelines and replay, plus installation requirements and network limitations.","accessedAt":"2026-11-22","sourceType":"official-repository"},{"title":"easi.run AGPL license","url":"https://github.com/julianosig/easi.run/blob/main/LICENSE","claim":"The project is distributed under AGPL-3.0-only.","accessedAt":"2026-11-22","sourceType":"official-license"}]
---

easi.run runs isolated Chrome sessions on a self-hosted Linux server, providing agent access through MCP and a live view for people to intervene. Action timelines and recordings support later review.
