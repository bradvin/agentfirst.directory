---
slug: "looot"
name: "looot"
description: "A hosted catalog of data endpoints behind one token and prepaid balance, exposed to agents over a remote MCP server, CLI and REST API"
seoTitle: "looot: Data API Discovery and Fallback for AI Agents"
seoDescription: "Explore looot's hosted data API catalog, where agents inspect prices, run jobs with provider fallback and read receipts through MCP, CLI or REST."
reviewedBy: "foo-bender"
reviewedAt: "2026-10-15"
category: "api-access-orchestration-layers"
tags:
  - "mcp"
  - "data-api"
  - "enrichment"
  - "search"
  - "prepaid"
websiteUrl: "https://looot.ai"
pricing: "paid"
classification: "agent-enabling"
entityType: "web-api"
developerName: "looot"
docsUrl: "https://docs.looot.ai"
pricingUrl: "https://docs.looot.ai/get-started/pricing-basics"
interfaces:
  - "REST API"
  - "MCP"
  - "CLI"
deploymentModes:
  - "hosted"
evidenceSources:
  - title: "looot documentation"
    url: "https://docs.looot.ai/"
    claim: "The documentation describes a catalog of external data APIs behind one token and one prepaid balance, with no count claimed here, reachable from the web, the CLI, a remote MCP server and a REST API, with search, price inspection and run steps for agents."
    accessedAt: "2026-10-12"
    sourceType: "official-documentation"
  - title: "looot MCP quickstart"
    url: "https://docs.looot.ai/get-started/quickstart-mcp"
    claim: "The quickstart documents adding the hosted looot MCP server to Claude Code, signing in with the browser, checking the balance, searching the catalog and running a job with fallback."
    accessedAt: "2026-10-12"
    sourceType: "official-documentation"
  - title: "looot pricing basics"
    url: "https://docs.looot.ai/get-started/pricing-basics"
    claim: "looot is prepaid, charged per call or per result depending on the endpoint, with no subscription. The page states that failures cost $0; the gateway skill file adds one exception, listed as its own evidence item below. The minimum top-up is not fixed on this page; the live balance response reports it as topUpLink.minimumUsd."
    accessedAt: "2026-10-12"
    sourceType: "official-pricing"
  - title: "looot gateway skill file"
    url: "https://api.looot.ai/skill.md"
    claim: "The gateway contract says a provider error or timeout settles at $0 unless the provider itself reports a cost for it, and the receipt shows which. This is separate from a completed miss, which can be charged."
    accessedAt: "2026-10-14"
    sourceType: "official-documentation"
  - title: "looot-mcp repository"
    url: "https://github.com/loootai/looot-mcp"
    claim: "The public MIT-licensed repository holds the JavaScript stdio client bridge (it wraps a pinned mcp-remote), server.json and install steps for connecting to the hosted looot MCP server. The MIT licence covers this client component only. The hosted service has its own terms and the repository does not let anyone self-host it."
    accessedAt: "2026-10-12"
    sourceType: "official-repository"
verificationLevel: "documentation-reviewed"
classificationRationaleMd: "The service is a hosted data API that agents call through MCP, CLI or REST; it enables agent workflows rather than acting as an autonomous agent."
inclusionRationaleMd: "Agents can search a catalog of data endpoints, read the price before a call, and run a job with provider fallback under one credential."
bestForMd: "Agent builders who need work email, phone, company and people enrichment, Google SERP or web page data without managing a key per provider."
notBestForMd: "Teams that need a free tier, a subscription plan, or a single provider's full native API."
limitationsMd: "looot is prepaid with no free tier. The minimum top-up is shown by the live balance (topUpLink.minimumUsd). Catalog entries are marked runs_now, needs_your_account or coming_soon, so not every listed operation runs with only a looot token; some need a connected provider account and some cannot run yet. Job routing picks a provider that is runnable for the workspace. A quoted price is an estimate and hold; the actual charge is settled per call or per result according to the endpoint, with a documented ceiling of three times the hold. A completed miss can still be charged before fallback, including a flat per-call fee on per-call endpoints. A provider error or timeout settles at $0 unless the provider itself reports a cost for it; the receipt shows which. Prices vary by endpoint, so check the catalog row before running."
unknownsMd: "No independent benchmark of data accuracy or provider fallback success rates was reviewed."
---

looot is a hosted data API with a remote MCP server at https://api.looot.ai/mcp. One token and one prepaid balance cover a catalog of endpoints from many providers, including work email, phone, company and people enrichment, Google SERP, web search and web page reading. Availability depends on the endpoint and the workspace, see limitations.

## So agents can...

- search the catalog in plain words and read an endpoint's price before running it
- run a job and let looot pick a provider, with fallback to the next one on a miss
- pay per call or per result depending on the endpoint, with a receipt for each attempt; a provider error or timeout settles at $0 unless the provider reports a cost for it
