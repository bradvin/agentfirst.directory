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
    accessedAt: "2026-10-06"
    sourceType: "official-documentation"
  - title: "AgentLine calls guide"
    url: "https://docs.agentline.cloud/guides/calls"
    claim: "The calls guide documents outbound calling, saved transcripts, call control, and turn-bound context delivery to live calls."
    accessedAt: "2026-10-06"
    sourceType: "official-documentation"
  - title: "AgentLine Agent Skill"
    url: "https://agentline.cloud/skill.md"
    claim: "The official skill describes agent setup, inbound call and SMS events, signed webhooks, a persistent WebSocket relay, REST operations, MCP tools, transcripts, and current channel limitations."
    accessedAt: "2026-10-06"
    sourceType: "official-documentation"
  - title: "AgentLine pricing"
    url: "https://agentline.cloud/pricing"
    claim: "The hosted pricing page lists US phone numbers at $2/month each, inbound and outbound voice at $0.10/minute with a one-minute minimum, and inbound SMS at $0.02/message."
    accessedAt: "2026-10-06"
    sourceType: "official-pricing"
  - title: "AgentLine source repository"
    url: "https://github.com/AgentLineHQ/AgentLine"
    claim: "The official repository provides the MIT-licensed AgentLine API source, links the separate hosted service, and explains that self-hosters pay their configured carrier, speech, model, and runtime providers rather than this repository."
    accessedAt: "2026-10-07"
    sourceType: "official-repository"
  - title: "AgentLine hosted OpenAPI specification"
    url: "https://api.agentline.cloud/openapi.json"
    claim: "The hosted OpenAPI specification advertises POST /v1/messages with operationId send_sms, although the hosted messages guide and skill say sending SMS is unsupported. This documents a source conflict, not a successful outbound SMS test."
    accessedAt: "2026-10-06"
    sourceType: "official-specification"
  - title: "AgentLine prepaid payment discovery"
    url: "https://api.agentline.cloud/.well-known/agent-payments.json"
    claim: "The hosted payment discovery describes prepaid onboarding with an agent token, US number leases at $2 for 30 days, voice at $0.10/minute with a first-minute minimum, and inbound SMS at $0.02/message; these are the stated prepaid terms, not a verified calendar-month renewal schedule."
    accessedAt: "2026-10-07"
    sourceType: "official-specification"
classificationRationaleMd: "AgentLine is designed around an AI agent as the owner and operator of a persistent phone identity, with agent-oriented MCP, skill, relay, REST, and Python SDK interfaces as core product surfaces."
bestForMd: "Agents that need a programmable phone number for inbound and outbound voice, inbound SMS, saved transcripts, and event-driven follow-up through REST, MCP, a skill, the Python SDK, webhooks, or a persistent relay."
limitationsMd: "Current hosted docs and the skill describe US-only numbers and inbound-only SMS. The pricing page lists $2/month per number, $0.10/minute for voice with a one-minute minimum, and $0.02 per inbound SMS; prepaid payment discovery specifies a $2 lease for 30 days, so calendar-month renewal must not be assumed for that onboarding path. The current repository no longer publishes the conflicting hosted rate table: its self-hosted source does not bill users, who pay their configured providers. Hosted OpenAPI version 0.3.0 advertises send_sms and the public version 0.4.0 source implements outbound sending, despite hosted docs saying sending is unsupported. Confirm deployed hosted SMS availability with the vendor before integration; the listing does not establish hosted outbound SMS support. The Node SDK is not yet on npm according to the SDK docs, so Node.js users should use REST."
unknownsMd: "The hosted service was not hands-on tested, so provisioning reliability, latency, audio quality, event delivery, and deployed outbound SMS availability remain unverified. The public source and hosted API report different versions. The repository README says relay context is spoken verbatim, while current hosted docs and the skill say the voice rephrases short facts; self-hosted and hosted behavior must not be assumed identical."
verificationLevel: "documentation-reviewed"
---

AgentLine provides phone identities for AI agents, combining inbound and outbound voice calls, inbound SMS, stored transcripts, and real-time event delivery. Builders can use the hosted service or deploy the MIT-licensed source, then integrate through REST, MCP, an Agent Skill, the Python SDK, signed webhooks, or a persistent WebSocket relay.

The current hosted pricing page lists US phone numbers at $2/month, voice at $0.10/minute with a one-minute minimum, and inbound SMS at $0.02/message. The [prepaid payment discovery](https://api.agentline.cloud/.well-known/agent-payments.json) specifies a $2 number lease for 30 days; these terms should not be assumed to mean calendar-month renewal. The current repository's Cost section describes self-hosted provider expenses, not hosted one-time number fees or free inbound SMS. Hosted docs describe SMS as inbound-only, but hosted OpenAPI version 0.3.0 advertises outbound sending and public source version 0.4.0 contains that operation. Deployed hosted outbound SMS still needs vendor clarification; no outbound SMS capability or live billing behavior was tested here. Python users can install `agentline-ai`; Node.js users should use REST until the Node SDK is published to npm.

## So agents can...

- Provision and operate a persistent phone number
- Place and receive voice calls and retrieve their transcripts
- Receive SMS and telephony events through a webhook, relay, or fallback mailbox
- Push context into a live call from an external agent runtime
