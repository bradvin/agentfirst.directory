---
slug: "402registry"
name: "402registry"
description: "Probes a website the way AI crawlers fetch it, sending GPTBot, ClaudeBot and other crawler user-agents, and keeps a registry of dated verdicts."
agentSummary: "Site-audit agents can retrieve cached verdicts through REST or MCP, then pay over x402 in USDC on Base for a fresh check or enriched registry snapshot. The service uses its own plain-HTTP probes with four AI crawler user-agent strings, making it useful for diagnosing content delivery and firewall differences, not observing real crawler visits or predicting rankings."
seoTitle: "402registry: Check How a Website Answers AI Crawler Requests"
seoDescription: "See how 402registry lets agents look up dated verdicts from its AI crawler user-agent probes for free, and pay over x402 for a fresh check or a catalog snapshot."
reviewedBy: "foo-bender"
reviewedAt: "2026-10-12"
category: "marketing-seo"
tags: ["x402", "mcp", "ai-crawlers", "seo"]
websiteUrl: "https://402registry.com"
logoUrl: "https://www.google.com/s2/favicons?sz=64&domain_url=https%3A%2F%2F402registry.com"
pricing: "freemium"
classification: "agent-native"
entityType: "web-api"
developerName: "402registry"
docsUrl: "https://402registry.com/llms.txt"
interfaces: ["REST API", "MCP"]
deploymentModes: ["hosted"]
verificationLevel: "documentation-reviewed"
classificationRationaleMd: "Agents are the callers and payers: they look up verdicts through REST or MCP and pay for fresh checks or the catalog snapshot over x402 without an account, and the subject of the checks is how a site answers the plain-HTTP requests AI crawlers make."
inclusionRationaleMd: "Gives an agent or its builder a documented way to test whether a site serves its content to requests carrying the main AI crawlers' user-agent strings, as a dated, public verdict that can be read as JSON."
bestForMd: "Agents and site owners that need a dated, machine-readable answer on whether a website serves the plain-HTTP requests that GPTBot, ClaudeBot, PerplexityBot and OAI-SearchBot make, and whether a firewall treats those user-agents differently."
notBestForMd: "General SEO analysis such as rankings or keywords, logs of real crawler visits, or checks of crawlers other than the four named ones."
limitationsMd: "Verdicts come from 402registry's own plain-HTTP probes from Cloudflare that send the four crawlers' user-agent strings ([crawler page](https://402registry.com/bot)); they are not observations of the companies' actual crawler visits, and a passing check does not guarantee indexing, ranking or citation ([trust page](https://402registry.com/trust)). Free: cached lookups of a site checked before and the basic registry as registry.json. Paid over x402 in USDC on Base mainnet: a fresh check ($0.10 each, at most 3 per hour and 10 per day for a site) and an enriched catalog snapshot ($0.05 each). The public registry lists only sites that passed, not every private or failed report."
unknownsMd: "No independent end-to-end paid check or accuracy benchmark was performed for this submission."
evidenceSources:
  - title: "402registry agent guide (llms.txt)"
    url: "https://402registry.com/llms.txt"
    claim: "Documents the free lookup and registry.json, the paid check and catalog snapshot endpoints with prices and limits, and the MCP tools."
    accessedAt: "2026-10-12"
    sourceType: "official-documentation"
  - title: "402registry OpenAPI description"
    url: "https://402registry.com/openapi.json"
    claim: "Describes the free check endpoint and the paid buy endpoints."
    accessedAt: "2026-10-12"
    sourceType: "official-specification"
  - title: "402registry x402 discovery manifest"
    url: "https://402registry.com/.well-known/x402"
    claim: "Lists the two paid resources for x402 discovery and points to the OpenAPI and service manifest for packs and prices."
    accessedAt: "2026-10-12"
    sourceType: "official-specification"
  - title: "402registry paid check endpoint (unsigned 402 response)"
    url: "https://402registry.com/buy/one"
    claim: "An unsigned GET answers HTTP 402 with x402 version 2 requirements in the PAYMENT-REQUIRED header: scheme exact, USDC on Base mainnet (eip155:8453), 100000 units ($0.10)."
    accessedAt: "2026-10-12"
    sourceType: "official-specification"
  - title: "402registry crawler page"
    url: "https://402registry.com/bot"
    claim: "Lists the probe requests: plain HTTP from 402registry, including the same page fetched with the OAI-SearchBot, PerplexityBot, GPTBot and ClaudeBot user-agent strings; the requests come from 402registry, not from those companies."
    accessedAt: "2026-10-12"
    sourceType: "official-documentation"
  - title: "402registry trust and verification page"
    url: "https://402registry.com/trust"
    claim: "Explains what one check measures and states that a passing check does not guarantee ranking, indexing, citation or inclusion."
    accessedAt: "2026-10-12"
    sourceType: "official-product-page"
  - title: "402registry public registry"
    url: "https://402registry.com/registry"
    claim: "Shows the public registry of dated verdicts for sites that passed, also available as JSON at /registry.json."
    accessedAt: "2026-10-12"
    sourceType: "official-product-page"
---

402registry probes a website the way AI crawlers fetch it (plain HTTP, no JavaScript) and sends the user-agent strings of GPTBot, ClaudeBot, PerplexityBot and OAI-SearchBot to see whether the site, or a firewall in front of it, treats those requests differently. These are 402registry's own probes, not the crawlers' real visits, and a pass does not guarantee indexing, ranking or citation. Looking up the last verdict is free; running a fresh check or downloading the enriched catalog snapshot is paid over x402 in USDC on Base.

## So agents can...

- Look up the last dated verdict for a site with a free REST call or the remote MCP server (lookup_site, get_pricing, get_docs, get_service_status).
- Pay $0.10 over x402 to run one check now, limited to 3 checks per hour and 10 per day for a site.
- Pay $0.05 over x402 for an enriched catalog snapshot as one JSON file, or read the free basic registry.json.
