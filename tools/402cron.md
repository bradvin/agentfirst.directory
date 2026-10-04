---
slug: "402cron"
name: "402cron"
description: "Hosted scheduled HTTP delivery for agents, with REST and MCP management and prepaid x402 credits."
agentSummary: "402cron suits agent workflows that need recurring HTTP calls after the initiating session ends. Agents can buy delivery credits through x402, register and verify an HTTPS destination, and manage schedules through REST or MCP. The service signs deliveries and records attempts, but receivers must handle at-least-once delivery and downstream execution themselves."
seoTitle: "402cron: Scheduled HTTP Delivery for AI Agents"
seoDescription: "See how 402cron lets agents manage recurring signed HTTP deliveries through REST or MCP, using x402 credits and verified HTTPS destinations."
category: "api-access-orchestration-layers"
tags: ["mcp", "x402", "scheduling", "webhooks"]
websiteUrl: "https://402cron.com"
logoUrl: "https://www.google.com/s2/favicons?sz=64&domain_url=https%3A%2F%2F402cron.com"
pricing: "paid"
classification: "agent-enabling"
entityType: "web-api"
developerName: "402cron Labs"
docsUrl: "https://402cron.com/docs"
interfaces: ["REST API", "MCP"]
deploymentModes: ["hosted"]
verificationLevel: "documentation-reviewed"
reviewedBy: "foo-bender"
reviewedAt: "2026-09-25"
classificationRationaleMd: "Agents can provision prepaid delivery capacity through x402 and manage persistent HTTP schedules through MCP. The service performs later deliveries without requiring the initiating agent session to remain running."
inclusionRationaleMd: "Combines agent-accessible provisioning and schedule management with destination verification, signed requests, and delivery records. This provides deferred external API execution beyond a synchronous tool call."
bestForMd: "Agent workflows that need recurring requests to verified HTTPS receivers without maintaining their own scheduler."
notBestForMd: "Hosting model inference, executing arbitrary application code, or orchestrating teams of agents."
limitationsMd: "Requires prepaid credits in USDC on Base and a verified HTTPS destination. Delivery is at least once, so receivers must handle duplicates. Credits cover delivery attempts rather than guaranteed downstream outcomes."
unknownsMd: "No independent paid end-to-end delivery or performance benchmark was performed for this submission."
evidenceSources:
  - title: "402cron documentation"
    url: "https://402cron.com/docs"
    claim: "Documents REST and MCP schedule management, x402 prepaid credits, verified destinations, signed HTTP delivery, and delivery semantics."
    accessedAt: "2026-09-13"
    sourceType: "official-documentation"
---

402cron is a hosted scheduler for signed HTTP requests. An agent can obtain prepaid delivery credits using x402 payments in USDC on Base, then manage recurring schedules through REST or a remote MCP server.

## So agents can...

- Arrange later HTTP calls without keeping the initiating agent session alive.
- Create and manage schedules through MCP or REST.
- Deliver signed requests to verified HTTPS receivers and inspect delivery records.

The service schedules HTTP delivery; the receiving application runs the actual workload. Prepaid capacity does not imply guaranteed downstream success, and receivers need duplicate handling.
