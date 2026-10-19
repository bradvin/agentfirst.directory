---
slug: "aiskills402"
name: "AISkills402"
description: "Searchable catalog of tested agent skill files: agents search it free over REST or MCP and buy a file once over x402."
agentSummary: "Agent builders can discover SKILL.md files through free REST or MCP search and inspect versioned cards with prices, hashes and vendor-reported tests before buying. A one-time HTTP x402 payment in USDC on Base delivers the file and a token for free re-downloads and updates. Purchased files permit personal use and paid work, but not resale or republication."
seoTitle: "AISkills402: Tested Agent Skill Files Bought Once Over x402"
seoDescription: "See how AISkills402 lets agents search tested SKILL.md files free over REST or MCP and buy the file once with x402, with re-downloads and updates included."
reviewedBy: "foo-bender"
reviewedAt: "2026-10-12"
category: "specialized-search-discovery-engines"
tags: ["x402", "mcp", "agent-skills", "skill-catalog"]
websiteUrl: "https://aiskills402.com"
logoUrl: "https://www.google.com/s2/favicons?sz=64&domain_url=https%3A%2F%2Faiskills402.com"
pricing: "paid"
classification: "agent-native"
entityType: "web-api"
developerName: "AISkills402"
docsUrl: "https://aiskills402.com/llms.txt"
interfaces: ["REST API", "MCP", "A2A"]
deploymentModes: ["hosted"]
verificationLevel: "documentation-reviewed"
classificationRationaleMd: "Agents are the buyers and users: they search skills through REST or MCP and pay for the file over plain HTTP with x402, without an account or API key, then keep the file and fetch it again with a token from the receipt. The A2A agent only returns a guide."
inclusionRationaleMd: "Gives an agent structured search over a specialized corpus: tested skill files in the Agent Skills format. Each result is JSON with a stable slug, version, category, price, file sha256 and the dated test results with a strong and a weak model, so an agent can pick a skill before paying for the file over x402."
bestForMd: "Agents and agent builders that need a ready-made, tested SKILL.md file for a task and can pay a small per-file price in USDC on Base."
notBestForMd: "Teams that need to pay by card or account, or a hosted runtime that executes skills; the service sells files only."
limitationsMd: "Search runs over REST and MCP; buying a file requires an x402 client and USDC on Base mainnet (eip155:8453) over plain HTTP. The MCP server is free discovery only, and the A2A agent answers every message with the same guide, so neither takes payment. Prices currently range from $0.01 to $0.10 per file. Each purchased file carries a licence: perpetual and non-exclusive, use and modify it for yourself including paid work, no resale or republishing ([terms](https://aiskills402.com/terms), full text at [docs#license](https://aiskills402.com/docs#license)). The licence covers the purchased files only; the hosted service and its source code are not public."
unknownsMd: "No independent end-to-end purchase or skill-quality benchmark was performed for this submission; the testing claims on the skill cards come from the vendor."
evidenceSources:
  - title: "AISkills402 agent guide (llms.txt)"
    url: "https://aiskills402.com/llms.txt"
    claim: "Documents the free catalog and MCP tools, the paid file endpoint over x402, the receipt and re-download token, and packs."
    accessedAt: "2026-10-12"
    sourceType: "official-documentation"
  - title: "AISkills402 OpenAPI description"
    url: "https://api.aiskills402.com/openapi.json"
    claim: "Describes the free catalog search endpoints and the paid file endpoint that answers HTTP 402."
    accessedAt: "2026-10-12"
    sourceType: "official-specification"
  - title: "AISkills402 x402 discovery manifest"
    url: "https://api.aiskills402.com/.well-known/x402"
    claim: "Lists the paid skill-file resource URLs for x402 discovery."
    accessedAt: "2026-10-12"
    sourceType: "official-specification"
  - title: "AISkills402 A2A agent card"
    url: "https://api.aiskills402.com/.well-known/agent-card.json"
    claim: "Describes the A2A interface, which answers every message with the same guide and leaves buying to plain HTTP x402."
    accessedAt: "2026-10-12"
    sourceType: "official-specification"
  - title: "AISkills402 trust and verification page"
    url: "https://aiskills402.com/trust"
    claim: "Lists the exact x402 payment a purchase asks the agent to sign (version 2, scheme exact, USDC on Base mainnet) so it can be checked before paying."
    accessedAt: "2026-10-12"
    sourceType: "official-product-page"
  - title: "AISkills402 terms of sale"
    url: "https://aiskills402.com/terms"
    claim: "States the licence printed in every purchased file and receipt: perpetual, non-exclusive; use and modify for yourself including paid work; no resale or republishing."
    accessedAt: "2026-10-12"
    sourceType: "official-legal"
  - title: "AISkills402 listing metadata repository"
    url: "https://github.com/paranormalen2/aiskills402-mcp"
    claim: "Public repository with the listing metadata for the AISkills402 MCP server only; it holds no service source code."
    accessedAt: "2026-10-12"
    sourceType: "official-repository"
---

AISkills402 is a searchable catalog of tested AI agent skill files in the SKILL.md (Agent Skills) format. An agent searches the catalog for free over REST or MCP, then buys the file of a skill once over x402 in USDC on Base and keeps it. No account or API key is needed.

## So agents can...

- Search and read skill cards for free through REST or the remote MCP server (search_skills, list_categories, get_skill, redownload_skill).
- Buy a skill file with one plain HTTP x402 request and receive the file content, its sha256, a receipt with the settlement transaction and a re-download token.
- Download the file again, and get new versions, for free with that token.
- Read on each skill card where a weaker model fails, since every skill is tested with a strong and a weak model.

Packs let an agent choose several skills and pay once. An A2A agent card is also published: over A2A, every message gets the same guide (what is sold, prices, buy URLs and docs); it does not search or sell.
