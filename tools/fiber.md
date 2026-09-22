---
slug: "fiber"
name: "Fiber"
description: "Search APIs for people, companies, jobs, and verified contacts"
category: "specialized-search-discovery-engines"
tags:
  - "search"
  - "people-data"
  - "company-data"
websiteUrl: "https://www.fiber.ai/integrations#apis"
pricing: "paid"
classification: "agent-enabling"
entityType: "service"
developerName: "Fiber AI"
docsUrl: "https://docs.fiber.ai/"
pricingUrl: "https://docs.fiber.ai/billing"
interfaces:
  - "REST API"
  - "MCP server"
  - "web dashboard"
  - "webhooks"
deploymentModes:
  - "hosted"
evidenceSources:
  - title: "Fiber AI documentation"
    url: "https://docs.fiber.ai/"
    claim: "Fiber documents hosted company and people search, contact enrichment, live enrichment, market intelligence, a dashboard, webhooks, and MCP access."
    accessedAt: "2026-09-03"
    sourceType: "official-documentation"
  - title: "Fiber billing and credits"
    url: "https://docs.fiber.ai/billing"
    claim: "Fiber uses credit-based, primarily per-result pricing and identifies response chargeInfo as the authoritative charge for an operation."
    accessedAt: "2026-09-03"
    sourceType: "official-pricing"
classificationRationaleMd: "Fiber is a general B2B search and enrichment service that agents can call through APIs or MCP; its core data service enables agent workflows rather than operating as an autonomous agent."
bestForMd: "Sales, recruiting, enrichment, and market-mapping workflows that need company, people, job, or verified contact data from partial identifiers or search criteria."
limitationsMd: "Published credit costs are representative and organization-specific pricing can differ; integrations should use each response's chargeInfo and handle HTTP 402 when credits are exhausted."
verificationLevel: "documentation-reviewed"
logoUrl: "https://www.fiber.ai/images/new/favicons/android-icon-192x192.png"
ogImageUrl: "https://www.fiber.ai/images/opengraph.png"
sortOrder: 20
---

Fiber exposes search and enrichment APIs across companies, people, jobs, and contact data. The current product emphasizes real-time and continuously refreshed search, verified contact waterfalls, reverse email lookup, and filters that go beyond traditional sales and recruiting tools.

## Features

- Hosted API search endpoints for companies, people, jobs, and combined searches
- Natural-language and structured search across large company, people, and job datasets
- Reverse email lookup plus contact enrichment, live fetch, and CRM-style enrichment endpoints
- Verified email and phone waterfalls with bounce detection and validation
- Real-time LinkedIn and company data retrieval for fresher enrichment workflows

## So agents can...

- Build lead or candidate lists from partial information instead of exact identifiers
- Enrich signups, CRM records, or outbound targets with verified company and contact data
- Pull fresh people, job, and company signals into recruiting, sales, or market-mapping workflows
