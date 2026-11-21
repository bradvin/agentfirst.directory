---
slug: "open-agent-api"
name: "Open Agent API"
description: "Self-hosted gateway for delegating work to configured coding agents and inspecting the resulting runs."
category: "api-access-orchestration-layers"
tags:
  - "coding-agents"
  - "mcp"
  - "api"
  - "human-approval"
  - "self-hosted"
websiteUrl: "https://openagentapi.pages.dev/"
githubUrl: "https://github.com/jiangxingfan1-coder/Open-Agent-API"
logoUrl: "https://openagentapi.pages.dev/favicon.svg"
pricing: "open-source"
classification: "agent-enabling"
entityType: "software-application"
developerName: "StarFans"
docsUrl: "https://github.com/jiangxingfan1-coder/Open-Agent-API/blob/main/docs/quickstart.md"
licenseUrl: "https://github.com/jiangxingfan1-coder/Open-Agent-API/blob/main/LICENSE"
interfaces:
  - "REST API"
  - "MCP"
deploymentModes:
  - "self-hosted"
classificationRationaleMd: "MCP clients can delegate work to published coding agents with scoped access and inspect the resulting run, while approvals are handled separately by the gateway."
bestForMd: "Agent builders who want a local, inspectable delegation path to coding agents already configured on their machines."
limitationsMd: "The bundled sample uses fixed rules and calls no live model. Real agents require separate setup and may incur provider fees."
evidenceSources:
  - title: "Open Agent API protocol"
    url: "https://github.com/jiangxingfan1-coder/Open-Agent-API/blob/main/docs/protocol.md"
    claim: "Gateway keys carry agent grants and scopes, and invocations resolve a published agent and worker without handing the caller upstream credentials."
    accessedAt: "2026-11-21"
    sourceType: "official-documentation"
  - title: "Bounded inspection and MCP delivery"
    url: "https://github.com/jiangxingfan1-coder/Open-Agent-API/blob/main/docs/protocol.md#bounded-inspection-and-mcp-delivery"
    claim: "The MCP bridge can start a run, wait for completion or approval, and retrieve output and artifacts without exposing an approval-granting tool."
    accessedAt: "2026-11-21"
    sourceType: "official-documentation"
  - title: "Open Agent API repository"
    url: "https://github.com/jiangxingfan1-coder/Open-Agent-API"
    claim: "The Apache-2.0 project publishes a quickstart with a local rule-based sample that requires no model key."
    accessedAt: "2026-11-21"
    sourceType: "official-repository"
---

Open Agent API publishes configured coding agents through a self-hosted gateway.
The local MCP bridge lets a client delegate work and follow the same run by ID.

## So agents can...

- Discover published agents and delegate a task without receiving their upstream credentials.
- Wait for the run, then read its output and artifacts through the MCP bridge.
- Surface a pending human approval without granting that approval through MCP.
