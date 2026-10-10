---
slug: "aiskills402"
name: "AISkills402"
description: "Catalog of tested agent skill files that agents search free and buy once over x402, with MCP, REST and A2A access."
agentSummary: "AISkills402 lets an agent search a catalog of tested SKILL.md files for free through REST, a remote MCP server or A2A, then buy the file of a chosen skill over plain HTTP with x402 in USDC on Base, with no account or API key. The purchase includes free re-downloads and free new versions. Each skill card states where a weaker model fails."
seoTitle: "AISkills402: Tested Agent Skill Files Bought Once Over x402"
seoDescription: "See how AISkills402 lets agents search tested SKILL.md files free over REST, MCP or A2A and buy the file once with x402, with re-downloads and updates included."
category: "api-access-orchestration-layers"
tags: ["x402", "mcp", "agent-skills", "skill-catalog"]
websiteUrl: "https://aiskills402.com"
githubUrl: "https://github.com/paranormalen2/aiskills402-mcp"
logoUrl: "https://www.google.com/s2/favicons?sz=64&domain_url=https%3A%2F%2Faiskills402.com"
pricing: "paid"
classification: "agent-native"
entityType: "web-api"
developerName: "AISkills402"
docsUrl: "https://aiskills402.com/llms.txt"
interfaces: ["REST API", "MCP", "A2A"]
deploymentModes: ["hosted"]
verificationLevel: "documentation-reviewed"
classificationRationaleMd: "Agents are the buyers and users: they discover skills through REST, MCP or A2A and pay for the file through x402 without an account or API key, then keep the file and fetch it again with a token from the receipt."
inclusionRationaleMd: "Gives an agent a documented way to find and obtain tested skill files in the Agent Skills format. Discovery is free and machine-readable, payment is part of the HTTP exchange, and each skill card says where a weaker model fails."
bestForMd: "Agents and agent builders that need a ready-made, tested SKILL.md file for a task and can pay a small per-file price in USDC on Base."
notBestForMd: "Teams that need to pay by card or account, or a hosted runtime that executes skills; the service sells files only."
limitationsMd: "Buying a file requires an x402 client and USDC on Base mainnet (eip155:8453), over plain HTTP: the MCP server is free discovery only and the A2A agent answers with a guide, so neither takes payment. Prices currently range from $0.01 to $0.10 per file. The source code of the service is not public; the linked repository holds listing metadata only."
unknownsMd: "No independent end-to-end purchase or skill-quality benchmark was performed for this submission; the testing claims on the skill cards come from the vendor."
evidenceSources:
  - title: "AISkills402 agent guide (llms.txt)"
    url: "https://aiskills402.com/llms.txt"
    claim: "Documents the free catalog and MCP tools, the paid file endpoint over x402, the receipt and re-download token, and packs."
    accessedAt: "2026-10-11"
    sourceType: "official-documentation"
  - title: "AISkills402 OpenAPI description"
    url: "https://api.aiskills402.com/openapi.json"
    claim: "Describes the free catalog endpoints and the paid file endpoint that answers HTTP 402."
    accessedAt: "2026-10-11"
    sourceType: "official-specification"
  - title: "AISkills402 x402 manifest"
    url: "https://api.aiskills402.com/.well-known/x402"
    claim: "Declares the x402 payment terms: scheme exact, USDC on Base mainnet."
    accessedAt: "2026-10-11"
    sourceType: "official-specification"
  - title: "AISkills402 A2A agent card"
    url: "https://api.aiskills402.com/.well-known/agent-card.json"
    claim: "Describes the A2A interface, which answers every message with a guide and leaves buying to plain HTTP x402."
    accessedAt: "2026-10-11"
    sourceType: "official-specification"
  - title: "AISkills402 trust and verification page"
    url: "https://aiskills402.com/trust"
    claim: "Lists the exact x402 payment a purchase asks the agent to sign (version 2, scheme exact, USDC on Base mainnet) so it can be checked before paying."
    accessedAt: "2026-10-11"
    sourceType: "official-product-page"
  - title: "AISkills402 listing metadata repository"
    url: "https://github.com/paranormalen2/aiskills402-mcp"
    claim: "Public repository with the listing metadata for the AISkills402 MCP server."
    accessedAt: "2026-10-11"
    sourceType: "official-repository"
---

AISkills402 is a catalog of tested AI agent skill files in the SKILL.md (Agent Skills) format. An agent searches the catalog for free, then buys the file of a skill once over x402 in USDC on Base and keeps it. No account or API key is needed.

## So agents can...

- Search and read skill cards for free through REST, the remote MCP server (search_skills, list_categories, get_skill, redownload_skill) or A2A.
- Buy a skill file with one x402 request and receive the file content, its sha256, a receipt with the settlement transaction and a re-download token.
- Download the file again, and get new versions, for free with that token.
- Read on each skill card where a weaker model fails, since every skill is tested with a strong and a weak model.

Packs let an agent choose several skills and pay once.
