---
slug: "sendsets"
name: "Sendsets"
description: "Cold email platform that agents operate over MCP, CLI, and REST, with a credential-bound approval policy on every send"
seoTitle: "Sendsets: Cold Email Campaigns Operated by AI Agents"
seoDescription: "See how Sendsets lets AI agents connect mailboxes, run warmup, launch cold email campaigns, and answer replies over MCP, CLI, or REST under a send-approval policy."
agentSummary: "Sendsets gives an agent the whole cold email workflow through a remote MCP server, a CLI, and a REST API: connecting and warming sender mailboxes, building sequences, adding leads, launching campaigns, and reading and answering replies. Send-class tools pass through a credential-bound policy that returns executed, awaiting_approval, or blocked, and approval cannot override suppression, opt-out, or mailbox health checks."
category: "agent-identity-communication"
tags:
  - "email"
  - "outbound"
  - "mcp"
  - "cli"
  - "communication"
websiteUrl: "https://sendsetsapi.com/"
logoUrl: "https://www.google.com/s2/favicons?sz=64&domain_url=https://sendsetsapi.com/"
ogImageUrl: "https://sendsetsapi.com/sendsets/og-image.jpg"
pricing: "freemium"
classification: "agent-native"
entityType: "web-api"
developerName: "Sendsets"
docsUrl: "https://docs.sendsetsapi.com/api/"
pricingUrl: "https://sendsetsapi.com/pricing/"
interfaces:
  - "MCP server"
  - "CLI"
  - "REST API"
  - "Agent skills"
  - "webhooks"
deploymentModes:
  - "hosted"
  - "self-hosted"
evidenceSources:
  - title: "Sendsets MCP server documentation"
    url: "https://docs.sendsetsapi.com/api/mcp/"
    claim: "Sendsets exposes its tools over streamable HTTP MCP at /v1/mcp with OAuth 2.1 or API keys, annotates every tool, and routes send-class tools through a credential-bound policy that returns executed, awaiting_approval, or blocked, which approval cannot use to override opt-out, suppression, mailbox health, or deliverability checks."
    accessedAt: "2026-09-26"
    sourceType: "official-documentation"
  - title: "Sendsets agent quickstart"
    url: "https://docs.sendsetsapi.com/api/quickstart/"
    claim: "The quickstart states Sendsets is designed to be operated by a coding agent, with the web app serving as the place a person inspects results and approves work."
    accessedAt: "2026-09-26"
    sourceType: "official-documentation"
  - title: "Sendsets CLI documentation"
    url: "https://docs.sendsetsapi.com/api/cli/"
    claim: "The sendsets CLI can set up everything a campaign needs without the dashboard, emits stable JSON when piped or with --json, and never prompts during non-interactive execution."
    accessedAt: "2026-09-26"
    sourceType: "official-documentation"
  - title: "Sendsets agent resources repository"
    url: "https://github.com/AddisonHoff/sendsets"
    claim: "The repository publishes the MCP Registry manifest (io.github.AddisonHoff/sendsets), Claude Code and Codex plugin marketplaces, a Gemini CLI extension, and the send-cold-email, sendsets, and sendsets-cli agent skills."
    accessedAt: "2026-09-26"
    sourceType: "official-repository"
  - title: "Sendsets pricing"
    url: "https://sendsetsapi.com/pricing/"
    claim: "The free plan includes 10 connected mailboxes, 10,000 emails a month, and API, CLI, and MCP access; the paid plan is $49 a month with unlimited mailboxes and emails."
    accessedAt: "2026-09-26"
    sourceType: "official-pricing"
  - title: "Sendsets self-hosting install guide"
    url: "https://docs.sendsetsapi.com/development/install/"
    claim: "Sendsets can be self-hosted with one command that installs it from published release images."
    accessedAt: "2026-09-26"
    sourceType: "official-documentation"
verificationLevel: "documentation-reviewed"
classificationRationaleMd: "Sendsets documents an agent as the operator of its cold email workflow: the MCP server, CLI, and skills cover setup through launch and replies, and send-class actions are governed by a credential-bound agent policy with human approval, so agents are a core actor rather than an incidental API client."
bestForMd: "Agents that need to run outbound email end to end (sender mailboxes, warmup, sequences, leads, launch, and replies) while a person keeps approval over sends."
notBestForMd: "Transactional or notification email, or an agent that needs its own disposable inbox identity rather than outbound campaigns from real sender mailboxes."
limitationsMd: "Sending runs through mailboxes the user connects or provisions, so volume and deliverability are bounded by those mailboxes and their providers. The free plan is limited to 10 mailboxes and 10,000 emails a month. Some tool families (CRM, forms, automations) are off on the MCP surface unless an instance operator enables them."
unknownsMd: "No independently measured deliverability benchmark was found in the reviewed first-party documentation."
---

Sendsets is a cold email platform built to be operated by an agent. The same service-layer tools are exposed through a remote MCP server, the `sendsets` CLI, and a REST API, and are packaged as agent skills and plugins for Claude Code, Codex, and Gemini CLI. Sends pass through a credential-bound policy, so a person can approve work in the dashboard instead of doing it.

## So agents can...

- Connect or provision sender mailboxes and turn on warmup before any campaign sends
- Build a sequence, add leads, preflight a campaign run, and launch it within an approval policy
- Read inbound replies and draft or send answers from the same tool surface
- Manage suppressions, read campaign analytics, and subscribe to signed webhooks for follow-up work
