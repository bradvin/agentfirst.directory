---
slug: "agentphone"
name: "AgentPhone"
description: "API-driven phone calls for autonomous agents"
category: "agent-identity-communication"
tags:
  - "phone"
  - "voice"
  - "communication"
websiteUrl: "https://agentphone.ai/"
pricing: "paid"
classification: "agent-native"
entityType: "web-api"
developerName: "AgentPhone"
docsUrl: "https://docs.agentphone.ai/"
pricingUrl: "https://docs.agentphone.ai/usage"
interfaces:
  - "REST API"
  - "TypeScript SDK"
  - "Python SDK"
  - "MCP server"
  - "webhooks"
  - "server-sent events"
deploymentModes:
  - "hosted voice mode"
  - "customer webhook mode"
evidenceSources:
  - title: "AgentPhone documentation — agent numbers, messaging, and voice"
    url: "https://agentphone.ai/docs"
    claim: "The official docs describe agents that own phone numbers and support SMS, MMS, iMessage, inbound and outbound calls, hosted or webhook voice operation, signed webhooks, and live transcripts."
    accessedAt: "2026-09-03"
    sourceType: "official-documentation"
  - title: "AgentPhone API reference — REST and SDK interfaces"
    url: "https://docs.agentphone.ai/api-reference"
    claim: "AgentPhone provides a bearer-authenticated REST API plus TypeScript/JavaScript and Python SDKs for numbers, agents, messages, calls, and usage."
    accessedAt: "2026-09-03"
    sourceType: "official-documentation"
  - title: "AgentPhone MCP documentation — natural-language phone tools"
    url: "https://docs.agentphone.ai/mcp"
    claim: "The MCP server exposes tools for agents to buy and release numbers, read and send messages, place voice calls, and inspect usage."
    accessedAt: "2026-09-03"
    sourceType: "official-documentation"
  - title: "AgentPhone usage and billing — rates, credit, and provisioning limits"
    url: "https://docs.agentphone.ai/usage"
    claim: "AgentPhone uses pay-as-you-go billing, includes $5 in initial credit, publishes per-number, voice, SMS, and recording rates, and limits self-serve accounts to ten numbers."
    accessedAt: "2026-09-03"
    sourceType: "official-pricing"
verificationLevel: "documentation-reviewed"
classificationRationaleMd: "AgentPhone gives AI agents their own phone-number identities and direct programmatic tools for messaging and calls, making agent operation the core product surface rather than a generic telephony integration alone."
bestForMd: "Agents that need their own US or Canadian number for inbound or outbound voice, SMS-based workflows, verification flows, and event-driven follow-up through an API, SDK, MCP, or webhook."
limitationsMd: "Current first-party documentation lists only US and Canadian numbers and a ten-number self-serve limit. Usage is pay-as-you-go after the initial credit, and downstream carriers can accept a message without guaranteeing final delivery."
unknownsMd: "No independent call-completion, transcription-accuracy, carrier-delivery, or voice-quality benchmark was found in the reviewed first-party documentation."
logoUrl: "https://agentphone.ai/favicon.png?v=3"
ogImageUrl: "https://agentphone.ai/og-image.png"
sortOrder: 20
---

AgentPhone focuses on letting agents make real phone calls with a single API request. The current product advertises outbound calling plus structured JSON results that include transcripts, summaries, outcomes, and recordings.

## Features

- Single API endpoint to initiate a phone call with an objective
- AI-managed phone conversations that can navigate menus and speak with humans
- Structured result polling with outcome, summary, and call status
- Transcript and recording URLs for review or downstream automation
- No telephony infrastructure setup required on the builder side

## So agents can...

- Call businesses to book reservations, confirm appointments, or cancel services
- Escalate from chat to real-world phone execution when a task cannot be finished through APIs
- Hand structured call outcomes back to planner agents for the next step in a workflow
