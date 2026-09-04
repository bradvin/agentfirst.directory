---
slug: "ag-ui"
name: "AG-UI"
description: "Open event-based protocol for agent and user interaction"
category: "agent-frameworks-standards"
tags:
  - "agent-ui"
  - "protocol"
  - "streaming"
  - "state-sync"
websiteUrl: "https://docs.ag-ui.com/introduction"
githubUrl: "https://github.com/ag-ui-protocol/ag-ui"
pricing: "open-source"
classification: "agent-internet-protocol"
entityType: "protocol"
developerName: "CopilotKit"
docsUrl: "https://docs.ag-ui.com/introduction"
licenseUrl: "https://github.com/ag-ui-protocol/ag-ui/blob/main/LICENSE"
interfaces:
  - "HTTP"
  - "server-sent events"
  - "WebSockets"
deploymentModes:
  - "application-embedded"
  - "self-hosted"
evidenceSources:
  - title: "AG-UI Overview — protocol scope and interaction model"
    url: "https://docs.ag-ui.com/introduction"
    claim: "AG-UI is an open, bidirectional, event-based protocol for connecting agentic backends to user-facing applications, with streaming, shared state, tool calls, and human interaction primitives."
    accessedAt: "2026-09-03"
    sourceType: "official-documentation"
  - title: "AG-UI Server guide — HTTP and event-stream implementation"
    url: "https://docs.ag-ui.com/quickstart/server"
    claim: "The first-party server guide shows an HTTP endpoint accepting AG-UI requests and streaming typed events over server-sent events."
    accessedAt: "2026-09-03"
    sourceType: "official-documentation"
  - title: "AG-UI repository license — MIT"
    url: "https://github.com/ag-ui-protocol/ag-ui/blob/main/LICENSE"
    claim: "The maintained AG-UI repository publishes the protocol implementation and documentation under the MIT License."
    accessedAt: "2026-09-03"
    sourceType: "official-license"
  - title: "CopilotKit repository — maker of AG-UI"
    url: "https://github.com/CopilotKit/CopilotKit"
    claim: "CopilotKit identifies itself as the company behind the AG-UI Protocol."
    accessedAt: "2026-09-03"
    sourceType: "official-repository"
verificationLevel: "documentation-reviewed"
classificationRationaleMd: "AG-UI standardizes the boundary between agent backends and user-facing applications, so its primary role is an agent-internet protocol rather than an agent runtime or end-user application."
bestForMd: "Teams connecting an agent backend to an interactive frontend that needs streamed output, shared state, tool calls, interrupts, or other bidirectional agent/user events."
limitationsMd: "AG-UI supplies the interaction contract, not a hosted agent or complete application; adopters still need compatible client and server implementations and must operate their own backend and security controls."
unknownsMd: "The reviewed first-party sources do not publish a formal conformance certification program or an independent interoperability benchmark."
---

AG-UI is an MIT-licensed protocol that standardizes the bidirectional connection between agent backends and user-facing applications, including streamed events, shared state, tool calls, and user interactions.

## So agents can...

- Stream progress and responses into applications in real time
- Synchronize agent and frontend state across runtimes
- Request approvals and drive interactive or generative interfaces
