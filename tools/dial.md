---
slug: "dial"
name: "Dial"
description: "Gives AI agents a real phone number for voice and messaging through an API, MCP server, CLI, or SDK."
category: "agent-identity-communication"
tags:
  - "phone"
  - "voice"
  - "sms"
  - "mcp"
websiteUrl: "https://getdial.ai/"
logoUrl: "https://getdial.ai/favicon.svg"
ogImageUrl: "https://getdial.ai/opengraph-image?1400618b40ada60c"
pricing: "paid"
classification: "agent-native"
entityType: "service"
developerName: "Dial"
docsUrl: "https://docs.getdial.ai/"
pricingUrl: "https://getdial.ai/pricing"
interfaces:
  - "REST API"
  - "remote MCP server"
  - "local MCP server"
  - "CLI"
  - "Node SDK"
  - "Python SDK"
deploymentModes:
  - "hosted"
  - "hybrid with a self-hosted voice backend"
evidenceSources:
  - title: "Dial introduction"
    url: "https://docs.getdial.ai/documentation/get-started/introduction"
    claim: "Dial documents agent-owned phone numbers, SMS, AI voice calls, inbound events, number management, CLI access, SDKs, and a REST API."
    accessedAt: "2026-09-03"
    sourceType: "official-documentation"
  - title: "Using Dial from an agent"
    url: "https://docs.getdial.ai/documentation/get-started/using-dial-from-an-agent"
    claim: "Dial exposes the same service through its CLI, Node and Python SDKs, direct REST calls, and hosted or local MCP servers."
    accessedAt: "2026-09-03"
    sourceType: "official-documentation"
  - title: "Dial self-hosted voice mode"
    url: "https://docs.getdial.ai/documentation/platform/self-hosted"
    claim: "Dial can connect calls to a customer-hosted WebSocket voice backend while Dial continues to provide the managed telephony layer."
    accessedAt: "2026-09-03"
    sourceType: "official-documentation"
  - title: "Dial pricing"
    url: "https://getdial.ai/pricing"
    claim: "Dial publishes pay-as-you-go and subscription pricing for its managed phone-number and communications service."
    accessedAt: "2026-09-03"
    sourceType: "official-pricing"
  - title: "Dial usage and limits"
    url: "https://docs.getdial.ai/documentation/reference/usage-and-limits"
    claim: "Dial documents free-account call limits and warns that retrying non-idempotent write requests can duplicate messages or calls."
    accessedAt: "2026-09-03"
    sourceType: "official-documentation"
classificationRationaleMd: "Dial is built around an agent as the phone identity and first-class caller or message participant, with agent-oriented MCP, CLI, and SDK interfaces."
bestForMd: "Agents that need a programmable phone number for two-way SMS, voice calls, inbound events, and phone-based verification workflows."
limitationsMd: "Free accounts are limited to five minutes per call and two concurrent calls until the first top-up or subscription; write requests are not idempotent, so blind retries can create duplicate messages or calls."
verificationLevel: "documentation-reviewed"
---

Dial is a communication stack built for AI agents. It gives an agent its own phone number and supports two-way SMS, inbound and outbound voice calls, and account events through a REST API, MCP server, CLI, or Node and Python SDKs.

Pricing is usage-based with a pay-as-you-go option. Current rates are maintained on the [Dial pricing page](https://getdial.ai/pricing).

## So agents can...

- Provision and manage a phone number from an agent workflow
- Place and receive voice calls and send and receive SMS messages
- Wait for inbound events such as replies, call completion, and OTP codes
- Use the same communication capabilities through API, MCP, CLI, or SDK interfaces
