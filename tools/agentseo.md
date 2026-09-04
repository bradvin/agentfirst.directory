---
slug: "agentseo"
name: "AgentSEO"
description: "SEO workflow API for AI agents with REST, MCP, and structured decision outputs"
category: "marketing-seo"
tags:
  - "seo"
  - "mcp"
  - "rest-api"
  - "sdk"
websiteUrl: "https://www.agentseo.dev/"
logoUrl: "https://www.google.com/s2/favicons?sz=64&domain_url=https://www.agentseo.dev/"
pricing: "freemium"
classification: "agent-native"
entityType: "web-api"
developerName: "Joy Technologies LLC"
docsUrl: "https://www.agentseo.dev/docs"
pricingUrl: "https://www.agentseo.dev/pricing"
interfaces:
  - "REST API"
  - "hosted MCP server"
  - "Node.js SDK"
  - "Python SDK"
  - "OpenClaw plugin"
deploymentModes:
  - "hosted"
evidenceSources:
  - title: "AgentSEO documentation — API workflows and response contract"
    url: "https://www.agentseo.dev/docs"
    claim: "The official documentation defines an authenticated REST API with asynchronous SEO workflows and an agent workflow response contract containing decisions, confidence, evidence, recommended actions, limitations, and suggested next calls."
    accessedAt: "2026-09-04"
    sourceType: "official-documentation"
  - title: "AgentSEO quickstart — authentication, jobs, SDKs, and MCP"
    url: "https://www.agentseo.dev/docs/quickstart"
    claim: "The quickstart documents x-api-key REST authentication, queued jobs with polling and event URLs, Node.js and Python clients, and a hosted MCP connection path."
    accessedAt: "2026-09-04"
    sourceType: "official-documentation"
  - title: "AgentSEO pricing — credit-based plans and hard caps"
    url: "https://www.agentseo.dev/pricing"
    claim: "The official pricing page lists a no-card Hobby allowance plus monthly Starter, Pro, and Agency credit plans, with endpoint-dependent credit costs and no automatic overage."
    accessedAt: "2026-09-04"
    sourceType: "official-product-page"
  - title: "About AgentSEO — publisher and product scope"
    url: "https://www.agentseo.dev/about"
    claim: "AgentSEO identifies Joy Technologies LLC as its company and describes the product as structured search intelligence for developers, technical marketers, agencies, applications, agents, and automations."
    accessedAt: "2026-09-04"
    sourceType: "official-product-page"
verificationLevel: "documentation-reviewed"
classificationRationaleMd: "AgentSEO exposes SEO research, monitoring, and content workflows through agent-callable MCP and API interfaces with structured evidence, decisions, limitations, and next actions, making its primary interaction model agent-native."
bestForMd: "Developers, technical marketers, and agencies building repeatable search research, content-gap, rank-tracking, local-visibility, backlink, or AI-visibility workflows into agents, applications, and automations."
limitationsMd: "Production use requires an API key and consumes endpoint-dependent credits. Longer workflows use an asynchronous job model, so callers must implement polling or event handling, idempotency, rate-limit handling, and explicit failure paths. Hosted MCP requires a server-side key without browser-domain restrictions."
unknownsMd: "The reviewed overview pages do not establish independent accuracy benchmarks for every workflow or a public service-level agreement. Public source links for the SDK packages were not accessible during review, so this profile does not claim a source-code licence or self-hosted deployment."
---

AgentSEO is an SEO intelligence API for agents and developers. It exposes search, rank tracking, content analysis, local visibility, backlinks, and AI-visibility workflows through REST, hosted MCP, SDKs, and an OpenClaw plugin. Core workflow responses are designed to carry structured decisions, evidence, recommended actions, limitations, and next calls.

## Features

- REST workflows with queued jobs, polling, and event URLs
- Hosted MCP tools for compatible agent clients
- Node.js and Python SDKs for application and automation runtimes
- Credit-based usage plans with documented hard spending caps
- Project and workflow attribution headers for operational traces

## So agents can...

- Run SEO research and monitoring workflows without parsing dashboard-oriented reports
- Queue longer analyses and follow their progress through polling, event streams, or webhooks
- Use structured evidence and recommended next calls to choose the next workflow step
