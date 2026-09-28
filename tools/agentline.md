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
  - "webhooks"
  - "WebSocket relay"
deploymentModes:
  - "hosted"
  - "self-hosted"
evidenceSources:
  - title: "AgentLine introduction"
    url: "https://docs.agentline.cloud/introduction"
    claim: "AgentLine documents persistent US phone numbers for AI agents, inbound and outbound voice calls, inbound SMS, transcripts, REST, MCP, and its Python SDK; it says the Node SDK is not yet on npm and directs Node users to REST."
    accessedAt: "2026-09-26"
    sourceType: "official-documentation"
  - title: "AgentLine calls guide"
    url: "https://docs.agentline.cloud/guides/calls"
    claim: "The calls guide documents outbound calling, saved transcripts, call control, and turn-bound context delivery to live calls."
    accessedAt: "2026-09-26"
    sourceType: "official-documentation"
  - title: "AgentLine Agent Skill"
    url: "https://agentline.cloud/skill.md"
    claim: "The official skill describes agent setup, inbound call and SMS events, signed webhooks, a persistent WebSocket relay, REST operations, MCP tools, transcripts, and current channel limitations."
    accessedAt: "2026-09-26"
    sourceType: "official-documentation"
  - title: "AgentLine pricing"
    url: "https://agentline.cloud/pricing"
    claim: "AgentLine publishes $2/month pricing for US phone numbers and usage pricing for voice calls and inbound SMS; outbound SMS is disabled."
    accessedAt: "2026-09-26"
    sourceType: "official-pricing"
  - title: "AgentLine source repository"
    url: "https://github.com/AgentLineHQ/AgentLine"
    claim: "The official repository provides the MIT-licensed AgentLine API source and documents hosted and self-hosted operation."
    accessedAt: "2026-09-26"
    sourceType: "official-repository"
classificationRationaleMd: "AgentLine is designed around an AI agent as the owner and operator of a persistent phone identity, with agent-oriented MCP, skill, relay, REST, and Python SDK interfaces as core product surfaces."
bestForMd: "Agents that need a programmable phone number for inbound and outbound voice, inbound SMS, saved transcripts, and event-driven follow-up through REST, MCP, a skill, the Python SDK, webhooks, or a persistent relay."
limitationsMd: "Hosted phone numbers are currently US-only and cost $2/month each. SMS is inbound-only, with outbound SMS disabled. The Node SDK is not yet on npm, so Node.js users should currently use REST."
unknownsMd: "The hosted service and call quality were not hands-on tested for this listing, so provisioning reliability, real-world latency, audio quality, and event delivery remain unverified."
verificationLevel: "documentation-reviewed"
---

AgentLine provides phone identities for AI agents, combining inbound and outbound voice calls, inbound SMS, stored transcripts, and real-time event delivery. Builders can use the hosted service or deploy the MIT-licensed source, then integrate through REST, MCP, an Agent Skill, the Python SDK, signed webhooks, or a persistent WebSocket relay.

Hosted US phone numbers cost $2/month each. SMS is inbound-only and outbound SMS is disabled. Python users can install `agentline-ai`; Node.js users should use REST until the Node SDK is published to npm.

## So agents can...

- Provision and operate a persistent phone number
- Place and receive voice calls and retrieve their transcripts
- Receive SMS and telephony events through a webhook, relay, or fallback mailbox
- Push context into a live call from an external agent runtime
