---
slug: "402registry"
name: "402registry"
description: "Checks whether AI crawlers such as GPTBot and ClaudeBot actually see a website, and keeps a public registry of dated verdicts."
agentSummary: "402registry lets an agent look up, for free, the last dated verdict on whether AI crawlers (GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot) see a site, using REST or a remote MCP server. An agent can also pay over x402 in USDC on Base to run a fresh check now, or to download the whole registry as one JSON file."
seoTitle: "402registry: Check What AI Crawlers See on a Website"
seoDescription: "See how 402registry lets agents look up dated verdicts on AI crawler visibility for free, and pay over x402 to run a new check or fetch the full catalog."
category: "marketing-seo"
tags: ["x402", "mcp", "ai-crawlers", "seo"]
websiteUrl: "https://402registry.com"
logoUrl: "https://www.google.com/s2/favicons?sz=64&domain_url=https%3A%2F%2F402registry.com"
pricing: "paid"
classification: "agent-native"
entityType: "web-api"
developerName: "402registry"
docsUrl: "https://402registry.com/llms.txt"
interfaces: ["REST API", "MCP"]
deploymentModes: ["hosted"]
verificationLevel: "documentation-reviewed"
classificationRationaleMd: "Agents are the callers and payers: they look up verdicts through REST or MCP and pay for new checks or the catalog over x402 without an account, and the subject of the checks is how AI crawlers see a site."
inclusionRationaleMd: "Gives an agent or its builder a documented way to find out whether the main AI crawlers see a site, as a dated, public verdict that can be read as JSON."
bestForMd: "Agents and site owners that need a dated, machine-readable answer on whether GPTBot, ClaudeBot, PerplexityBot and OAI-SearchBot see a website."
notBestForMd: "General SEO analysis such as rankings or keywords, or checks of crawlers other than the four named ones."
limitationsMd: "Paid checks and the catalog download require an x402 client and USDC on Base mainnet. One check costs $0.10 and the catalog costs $0.05. One site gets at most 3 checks per hour and 10 per day. The free lookup returns a verdict only if the site was checked before."
unknownsMd: "No independent end-to-end paid check or accuracy benchmark was performed for this submission."
evidenceSources:
  - title: "402registry agent guide (llms.txt)"
    url: "https://402registry.com/llms.txt"
    claim: "Documents the free lookup, the paid check and catalog endpoints with prices and limits, and the MCP tools."
    accessedAt: "2026-10-11"
    sourceType: "official-documentation"
  - title: "402registry OpenAPI description"
    url: "https://402registry.com/openapi.json"
    claim: "Describes the free check endpoint and the paid buy endpoints."
    accessedAt: "2026-10-11"
    sourceType: "official-specification"
  - title: "402registry x402 manifest"
    url: "https://402registry.com/.well-known/x402"
    claim: "Declares the x402 payment terms for the paid endpoints in USDC on Base mainnet."
    accessedAt: "2026-10-11"
    sourceType: "official-specification"
  - title: "402registry public registry"
    url: "https://402registry.com/registry"
    claim: "Shows the public registry of dated verdicts, also available as JSON at /registry.json."
    accessedAt: "2026-10-11"
    sourceType: "official-product-page"
---

402registry checks whether AI crawlers (GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot) actually see a website and keeps a public registry of dated verdicts. Looking up the last verdict is free; running a new check or downloading the catalog is paid over x402 in USDC on Base.

## So agents can...

- Look up the last dated verdict for a site with a free REST call or the remote MCP server (lookup_site, get_pricing, get_docs, get_service_status).
- Pay $0.10 over x402 to run one check now, limited to 3 checks per hour and 10 per day for a site.
- Pay $0.05 over x402 for the whole catalog as one JSON file, or read the free registry.json.
