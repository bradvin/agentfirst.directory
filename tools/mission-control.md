---
slug: "mission-control"
name: "Mission Control"
description: "Self-hosted control plane for operating AI agent fleets"
category: "orchestrators"
tags:
  - "multi-agent-orchestration"
  - "control-plane"
  - "observability"
  - "self-hosted"
websiteUrl: "https://github.com/builderz-labs/mission-control"
githubUrl: "https://github.com/builderz-labs/mission-control"
pricing: "open-source"
classification: "agent-native"
entityType: "software-source-code"
developerName: "Builderz Labs"
docsUrl: "https://github.com/builderz-labs/mission-control#readme"
licenseUrl: "https://github.com/builderz-labs/mission-control/blob/main/LICENSE"
interfaces:
  - "web application"
  - "CLI"
  - "MCP server"
  - "REST API"
  - "WebSocket"
  - "SSE"
deploymentModes:
  - "local"
  - "Docker"
  - "self-hosted"
evidenceSources:
  - title: "Mission Control repository"
    url: "https://github.com/builderz-labs/mission-control"
    claim: "Builderz Labs documents Mission Control as a self-hosted control plane for agent tasks, runs, approvals, schedules, costs, knowledge, governance, and multiple runtime integrations."
    accessedAt: "2026-09-03"
    sourceType: "official-repository"
  - title: "Mission Control interface documentation"
    url: "https://github.com/builderz-labs/mission-control#what-mission-control-governs"
    claim: "The documented interfaces include a web UI, CLI, MCP server, OpenAPI-described REST API, WebSocket, and SSE."
    accessedAt: "2026-09-03"
    sourceType: "official-documentation"
  - title: "Mission Control deployment guide"
    url: "https://github.com/builderz-labs/mission-control/blob/main/docs/deployment.md"
    claim: "Mission Control supports local, Docker, standalone, reverse-proxy, and self-hosted server deployments with persistent SQLite state."
    accessedAt: "2026-09-03"
    sourceType: "official-documentation"
  - title: "Mission Control license"
    url: "https://github.com/builderz-labs/mission-control/blob/main/LICENSE"
    claim: "Mission Control is licensed under the MIT License."
    accessedAt: "2026-09-03"
    sourceType: "official-license"
classificationRationaleMd: "Mission Control directly coordinates agent identities, task assignment, execution, handoffs, approvals, schedules, and run visibility, making agents the core workers in its control plane."
bestForMd: "Operators coordinating multiple agents or runtimes who need shared task ownership, run inspection, approval and quality gates, scheduling, and spend or failure visibility."
limitationsMd: "Mission Control is alpha software with APIs, schemas, and configuration that may change; it is self-hosted rather than a managed multi-tenant service, and adapter depth varies by runtime."
verificationLevel: "documentation-reviewed"
---

Mission Control is an MIT-licensed, self-hosted control plane for coordinating agents and runtimes through shared tasks, run visibility, approvals, schedules, alerts, and cost tracking.

## So agents can...

- Receive and hand off tasks across multiple runtimes
- Surface sessions, logs, failures, and approval gates in one place
- Run scheduled workflows with centralized operational visibility
