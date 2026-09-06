---
slug: "vapi"
name: "Vapi"
description: "Developer platform for voice AI agents over phone, web, and MCP"
category: "voice-multimodal-interfaces"
tags:
  - "voice"
  - "telephony"
  - "realtime"
websiteUrl: "https://vapi.ai"
pricing: "paid"
classification: "agent-native"
entityType: "web-api"
developerName: "Vapi Inc."
docsUrl: "https://docs.vapi.ai/quickstart/introduction"
pricingUrl: "https://vapi.ai/pricing"
interfaces:
  - "REST API"
  - "web dashboard"
  - "Web SDK"
  - "TypeScript server SDK"
  - "Python server SDK"
  - "command-line interface"
  - "MCP server"
  - "webhooks"
deploymentModes:
  - "hosted"
evidenceSources:
  - title: "Vapi introduction — hosted voice-agent platform"
    url: "https://docs.vapi.ai/quickstart/introduction"
    claim: "Vapi documents a hosted developer platform for voice agents that combines speech recognition, a configurable language model, speech synthesis, phone and web channels, tool integrations, and multi-assistant squads."
    accessedAt: "2026-09-03"
    sourceType: "official-documentation"
  - title: "Vapi assistants quickstart — inbound and outbound phone calls"
    url: "https://docs.vapi.ai/assistants/quickstart"
    claim: "The official quickstart shows assistant creation through the dashboard or API, web-call testing, phone-number attachment, and inbound, outbound, and scheduled phone calls."
    accessedAt: "2026-09-03"
    sourceType: "official-documentation"
  - title: "Vapi MCP server — agent management interface"
    url: "https://docs.vapi.ai/sdk/mcp-server"
    claim: "Vapi publishes a hosted MCP server for managing platform objects such as assistants, calls, tools, files, squads, and phone numbers from compatible clients."
    accessedAt: "2026-09-03"
    sourceType: "official-documentation"
  - title: "Vapi pricing — usage, provider costs, concurrency, and retention"
    url: "https://vapi.ai/pricing"
    claim: "The official pricing page lists usage-based Build pricing, pass-through speech/model/voice provider costs, included and paid concurrency, default call and chat retention periods, optional compliance add-ons, and custom annual Scale terms."
    accessedAt: "2026-09-03"
    sourceType: "official-pricing"
  - title: "Vapi terms — service operator"
    url: "https://vapi.ai/terms-of-service"
    claim: "The official terms identify Vapi Inc. as the Delaware corporation operating the voice-agent deployment service."
    accessedAt: "2026-09-03"
    sourceType: "official-legal"
verificationLevel: "documentation-reviewed"
classificationRationaleMd: "Vapi provides the realtime speech, model, tool, handoff, telephony, and conversation orchestration needed to run autonomous voice assistants, so the platform is agent-native rather than only a communications transport."
bestForMd: "Developers building inbound or outbound voice agents for support, qualification, booking, routing, campaigns, or browser-based voice experiences that need configurable providers, tools, knowledge, handoffs, and observability."
limitationsMd: "Costs combine Vapi hosting with telephony and speech/model/voice provider charges; Build has finite included concurrency and default retention windows, while some compliance and zero-retention features are paid add-ons. Operators remain responsible for testing, prompt/tool safety, consent, calling rules, recording notices, and jurisdiction-specific telephony compliance."
unknownsMd: "Sub-600 ms latency and platform reliability or compliance claims in first-party materials were not independently verified. Actual quality, latency, cost, availability, and data handling also vary with selected providers, regions, phone carriers, prompts, and tools."
logoUrl: "https://vapi.ai/icon.svg?icon.05txosa6z_gu8.svg"
ogImageUrl: "https://vapi.ai/opengraph-image.png?opengraph-image.0dryxzls5gf-2.png"
sortOrder: 20
---

Vapi is a developer platform for building and operating voice AI agents. The current docs highlight realtime conversations, phone and web integration, squads for multi-assistant handoffs, knowledge bases, call recording, testing, and MCP-based control.

## Features

- Realtime voice conversations with natural turn-taking and sub-second response targets
- Phone-number management for inbound and outbound calls plus web voice embedding
- Squad orchestration for multi-assistant handoffs with shared conversation context
- Knowledge bases and custom retrieval backends for grounded answers
- Call recording, analysis, concurrency controls, voice testing, and MCP server support

## So agents can...

- Run phone-based support, qualification, scheduling, and routing workflows
- Hand conversations between specialized voice agents without losing context
- Blend telephony, retrieval, and backend tool calls into one production voice stack
