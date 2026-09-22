---
slug: "kapso"
name: "Kapso"
description: "WhatsApp Cloud API toolkit with storage, flows, and conversation APIs"
category: "agent-identity-communication"
tags:
  - "whatsapp"
  - "messaging"
  - "communication"
websiteUrl: "https://kapso.com/"
pricing: "freemium"
classification: "agent-enabling"
entityType: "service"
developerName: "Kapso"
docsUrl: "https://docs.kapso.ai/docs/introduction"
pricingUrl: "https://kapso.com/pricing"
interfaces:
  - "REST API"
  - "TypeScript SDK"
  - "CLI"
  - "MCP server"
  - "webhooks"
deploymentModes:
  - "hosted"
evidenceSources:
  - title: "Kapso documentation introduction"
    url: "https://docs.kapso.ai/docs/introduction"
    claim: "Kapso documents WhatsApp messaging, templates, webhooks, workflows, a TypeScript SDK, a CLI, and team inbox use cases."
    accessedAt: "2026-09-03"
    sourceType: "official-documentation"
  - title: "Kapso TypeScript SDK quickstart"
    url: "https://docs.kapso.ai/docs/whatsapp/typescript-sdk/introduction"
    claim: "The TypeScript SDK mirrors the WhatsApp Cloud API and adds Kapso-hosted conversation, message-history, contact, call-log, storage, and synchronization capabilities when used through the Kapso proxy."
    accessedAt: "2026-09-03"
    sourceType: "official-documentation"
  - title: "Kapso MCP server"
    url: "https://docs.kapso.ai/docs/whatsapp/mcp"
    claim: "Kapso provides a hosted project MCP endpoint for operating WhatsApp numbers, conversations, messages, templates, and webhooks."
    accessedAt: "2026-09-03"
    sourceType: "official-documentation"
  - title: "Kapso pricing"
    url: "https://kapso.com/pricing"
    claim: "Kapso publishes Free, Pro, and Platform plans and states that Meta messaging charges are separate."
    accessedAt: "2026-09-03"
    sourceType: "official-pricing"
  - title: "Kapso sandbox limitations"
    url: "https://docs.kapso.ai/docs/how-to/whatsapp/use-sandbox-for-testing"
    claim: "Kapso's sandbox is limited to testing and does not support templates, WhatsApp synchronization, or multiple recipients."
    accessedAt: "2026-09-03"
    sourceType: "official-documentation"
classificationRationaleMd: "Kapso is a programmable WhatsApp platform used by agents, backend systems, and human teams; its APIs and communication infrastructure enable agent workflows without making Kapso itself the autonomous actor."
bestForMd: "Products and agent workflows that need two-way WhatsApp messaging, stored conversation history, templates, flows, webhooks, or a shared operational inbox."
limitationsMd: "Meta message charges are billed separately from Kapso plans. The included sandbox is for testing only and omits templates, WhatsApp synchronization, and multiple-recipient use."
verificationLevel: "documentation-reviewed"
logoUrl: "https://kapso.com/favicon-32x32.png"
ogImageUrl: "https://kapso.com/og-image.png"
sortOrder: 30
---

Kapso is a developer-focused layer on top of the WhatsApp Cloud API. Its current docs center on a Meta-compatible TypeScript SDK plus Kapso storage and query extensions for messages, conversations, contacts, flows, templates, and call logs.

## Features

- TypeScript SDK that mirrors Meta's WhatsApp Cloud API surface
- Send text, media, location, contacts, reactions, templates, and interactive flow messages
- Conversation, message-history, contact, and call-log APIs when routed through the Kapso proxy
- WhatsApp Flows authoring, publishing, previewing, and event handling helpers
- Webhook normalization, signature verification, and extra Kapso response fields for stored history

## So agents can...

- Run two-way WhatsApp support or outreach workflows with a proper message history layer
- Trigger templated onboarding, reminders, and transactional notifications inside WhatsApp
- Hand off from message parsing to structured workflow execution using flows, contacts, and conversation metadata
