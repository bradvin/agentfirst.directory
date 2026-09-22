---
slug: "agentmail"
name: "AgentMail"
description: "Programmatic inboxes and email delivery for autonomous agents"
category: "agent-identity-communication"
tags:
  - "email"
  - "identity"
  - "communication"
websiteUrl: "https://www.agentmail.to/"
pricing: "freemium"
classification: "agent-native"
entityType: "web-api"
developerName: "AgentMail"
docsUrl: "https://docs.agentmail.to/introduction"
pricingUrl: "https://www.agentmail.to/pricing"
interfaces:
  - "REST API"
  - "Python SDK"
  - "TypeScript SDK"
  - "WebSockets"
  - "webhooks"
  - "MCP server"
deploymentModes:
  - "hosted"
  - "bring-your-own cloud (enterprise)"
evidenceSources:
  - title: "AgentMail introduction — agent inbox API and identity model"
    url: "https://docs.agentmail.to/introduction"
    claim: "AgentMail describes an API platform that gives AI agents their own inboxes so they can send, receive, and act on email as first-class internet users."
    accessedAt: "2026-09-03"
    sourceType: "official-documentation"
  - title: "AgentMail API-key guide — free tier and integration surfaces"
    url: "https://docs.agentmail.to/knowledge-base/getting-api-key"
    claim: "The free tier includes three inboxes, 3,000 monthly emails, 3 GB of storage, full REST, WebSocket, and webhook access, and Python and TypeScript SDKs."
    accessedAt: "2026-09-03"
    sourceType: "official-documentation"
  - title: "AgentMail pricing — hosted plans and deployment options"
    url: "https://www.agentmail.to/pricing"
    claim: "The pricing page documents Free, Developer, Startup, and Enterprise plans, plan quotas, MCP access, and enterprise bring-your-own-cloud deployment."
    accessedAt: "2026-09-03"
    sourceType: "official-pricing"
verificationLevel: "documentation-reviewed"
classificationRationaleMd: "Dedicated inbox identity, persistent email threads, inbound events, and programmatic send/receive actions are designed for agents to participate directly in email workflows, so the product is agent-native."
bestForMd: "Agents that need separate durable inbox identities for sign-ups, verification messages, support conversations, notifications, or high-volume email workflows driven through APIs and events."
limitationsMd: "Hosted plans enforce inbox, sending, storage, and custom-domain quotas; the free tier is limited to three inboxes and 3,000 emails per month. Bring-your-own-cloud deployment is listed only for Enterprise."
unknownsMd: "No independently measured deliverability or latency benchmark was found in the reviewed first-party documentation, and operational results will also depend on sender reputation, domains, and recipient providers."
logoUrl: "https://www.google.com/s2/favicons?sz=64&domain_url=https://www.agentmail.to/"
ogImageUrl: "https://www.agentmail.to/og-image.png"
sortOrder: 10
---

AgentMail gives agents dedicated inboxes they can create and manage programmatically. The current product surface includes mailbox creation, send and receive flows, webhook support, and access through REST, CLI, and MCP-oriented integrations.

## Features

- One-call mailbox creation for dedicated agent inboxes
- Send and receive email programmatically instead of wiring a human mailbox
- REST API, CLI, and MCP-style integration points for agent frameworks
- Webhooks for new-message driven workflows
- Inbox primitives designed to scale horizontally across many agent identities

## So agents can...

- Register for services with their own inboxes and capture verification links or codes automatically
- Run email-based support and follow-up loops without sharing a founder or operator mailbox
- Route inbound messages to specialized handler agents based on sender, thread, or workflow
