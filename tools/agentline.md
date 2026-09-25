---
slug: "agentline"
name: "AgentLine"
description: "Gives AI agents persistent phone numbers for voice calls, inbound SMS, transcripts, and real-time event delivery."
category: "agent-identity-communication"
tags:
  - "phone"
  - "voice"
  - "sms"
  - "mcp"
websiteUrl: "https://agentline.cloud/"
githubUrl: "https://github.com/AgentLineHQ/AgentLine"
logoUrl: "https://agentline.cloud/logo.png"
ogImageUrl: "https://agentline.cloud/twitter-banner.png"
pricing: "open-source"
classification: "agent-native"
entityType: "web-api"
developerName: "AgentLine"
docsUrl: "https://docs.agentline.cloud/"
pricingUrl: "https://agentline.cloud/pricing"
licenseUrl: "https://github.com/AgentLineHQ/AgentLine/blob/main/LICENSE"
interfaces:
  - "REST API"
  - "MCP server"
  - "Agent Skill"
  - "Python SDK"
  - "Node.js SDK"
  - "webhooks"
  - "WebSocket relay"
deploymentModes:
  - "hosted"
  - "self-hosted"
evidenceSources:
  - title: "AgentLine introduction"
    url: "https://docs.agentline.cloud/introduction"
    claim: "AgentLine documents persistent phone numbers for AI agents, inbound and outbound voice calls, SMS, transcripts, REST endpoints, MCP, and Python and Node.js SDKs."
    accessedAt: "2026-09-25"
    sourceType: "official-documentation"
  - title: "AgentLine calls guide"
    url: "https://docs.agentline.cloud/guides/calls"
    claim: "The calls guide documents outbound calling, saved transcripts, call control, and turn-bound context delivery to live calls."
    accessedAt: "2026-09-25"
    sourceType: "official-documentation"
  - title: "AgentLine Agent Skill"
    url: "https://agentline.cloud/skill.md"
    claim: "The official skill describes agent setup, inbound call and SMS events, signed webhooks, a persistent WebSocket relay, REST operations, MCP tools, transcripts, and current channel limitations."
    accessedAt: "2026-09-25"
    sourceType: "official-documentation"
  - title: "AgentLine pricing"
    url: "https://agentline.cloud/pricing"
    claim: "AgentLine publishes usage-based pricing for its hosted phone-number, voice-call, and SMS service."
    accessedAt: "2026-09-25"
    sourceType: "official-pricing"
  - title: "AgentLine source repository"
    url: "https://github.com/AgentLineHQ/AgentLine"
    claim: "The official repository provides the MIT-licensed AgentLine API source and documents hosted and self-hosted operation."
    accessedAt: "2026-09-25"
    sourceType: "official-repository"
classificationRationaleMd: "AgentLine is designed around an AI agent as the owner and operator of a persistent phone identity, with agent-oriented MCP, skill, relay, API, and SDK interfaces as core product surfaces."
bestForMd: "Agents that need a programmable phone number for inbound and outbound voice, inbound SMS, saved transcripts, and event-driven follow-up through REST, MCP, a skill, SDKs, webhooks, or a persistent relay."
limitationsMd: "Current first-party sources conflict over whether number fees are one-time or monthly, whether number availability is US-only or includes Canada, and whether outbound SMS is enabled. Verify current coverage, channel support, and billing terms before integrating."
unknownsMd: "The homepage's Python install command conflicts with the Python SDK documentation, which names the distribution as agentline-ai. The documented npm package returned 404 from the registry when reviewed, and the hosted service was not hands-on tested for this listing."
verificationLevel: "documentation-reviewed"
---

AgentLine provides phone identities for AI agents, combining inbound and outbound voice calls, inbound SMS, stored transcripts, and real-time event delivery. Builders can use the hosted service or deploy the MIT-licensed source, then integrate through REST, MCP, an Agent Skill, SDKs, signed webhooks, or a persistent WebSocket relay.

Hosted access is usage-based. Because current first-party pages disagree on some number, geography, SMS, and package details, the linked documentation and pricing page should be checked before implementation.

## So agents can...

- Provision and operate a persistent phone number
- Place and receive voice calls and retrieve their transcripts
- Receive SMS and telephony events through a webhook, relay, or fallback mailbox
- Push context into a live call from an external agent runtime
