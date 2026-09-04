---
slug: "orthogonal"
name: "Orthogonal"
description: "Trusted skills and APIs marketplace for agent discovery and execution"
category: "api-access-orchestration-layers"
tags:
  - "api-gateway"
  - "skills"
  - "discovery"
websiteUrl: "https://www.orthogonal.com"
pricing: "freemium"
classification: "agent-enabling"
entityType: "web-api"
developerName: "Orth Inc."
docsUrl: "https://docs.orthogonal.com/"
pricingUrl: "https://www.orthogonal.com/pricing"
interfaces:
  - "REST API"
  - "TypeScript SDK"
  - "MCP server"
  - "command-line interface"
  - "agent skills"
deploymentModes:
  - "hosted"
evidenceSources:
  - title: "Orthogonal documentation — unified agent API gateway"
    url: "https://docs.orthogonal.com/"
    claim: "Orthogonal documents a hosted gateway through which agents can discover and call third-party APIs using one account, API key, and credit balance, with SDK, REST, MCP, CLI, and skill-based access."
    accessedAt: "2026-09-03"
    sourceType: "official-documentation"
  - title: "Orthogonal pricing — free and enterprise plans"
    url: "https://www.orthogonal.com/pricing"
    claim: "The official pricing page lists a no-monthly-fee Free plan with per-request charges and an Enterprise plan with custom terms."
    accessedAt: "2026-09-03"
    sourceType: "official-pricing"
  - title: "Orthogonal pricing documentation — per-call credits and x402 access"
    url: "https://docs.orthogonal.com/concepts/pricing"
    claim: "The pricing documentation describes fixed per-call endpoint charges, a $5 new-account credit offer, and contact-gated x402 access."
    accessedAt: "2026-09-03"
    sourceType: "official-pricing"
  - title: "Orthogonal homepage — API coverage and introductory-credit offer"
    url: "https://www.orthogonal.com/"
    claim: "The homepage markets one integration for more than 800 endpoints and 50 providers, and its FAQ separately describes $1 after phone verification plus $10 for booking a call."
    accessedAt: "2026-09-03"
    sourceType: "official-product-page"
  - title: "Orthogonal skills repository — supported agent clients"
    url: "https://github.com/orthogonal-sh/skills"
    claim: "The first-party skills repository provides installable integrations for agent clients including Codex, Claude Code, Cursor, Gemini CLI, GitHub Copilot, Windsurf, and OpenClaw."
    accessedAt: "2026-09-03"
    sourceType: "official-repository"
  - title: "Orthogonal terms — operator and third-party API model"
    url: "https://www.orthogonal.com/terms"
    claim: "The terms identify Orth Inc. as the service operator and explain that Orthogonal provides access to third-party APIs whose availability, provider terms, and fees remain relevant to use."
    accessedAt: "2026-09-03"
    sourceType: "official-legal"
verificationLevel: "documentation-reviewed"
classificationRationaleMd: "Orthogonal does not supply the agent's planning loop; it gives existing agents a unified discovery, authentication, payment, and execution layer for external APIs, so it is agent-enabling."
bestForMd: "Agents and agent developers that need to discover and call many third-party data or action APIs through one hosted integration and shared pay-per-call balance."
limitationsMd: "Calls consume credits and depend on upstream providers, their data, availability, and terms. Users remain responsible for API-key security, and endpoint coverage or pricing can change as providers change."
unknownsMd: "First-party pages currently disagree on introductory credits: the pricing page says $10, the pricing documentation says $5, and the homepage FAQ describes $1 after phone verification with another $10 for booking a call. x402 access is also described as contact-gated in pricing documentation while being promoted elsewhere, so current onboarding offers and rollout status should be confirmed in-product."
logoUrl: "https://www.google.com/s2/favicons?sz=64&domain_url=https://www.orthogonal.com"
sortOrder: 10
---

Orthogonal positions itself as a trusted skills and APIs layer for agents. The current product focuses on giving agents one place to discover partner APIs and skills, then call them through a consistent SDK and payment-aware integration surface.

## Features

- Central directory of trusted skills and API providers for agents
- SDK-based execution model for running partner APIs through a unified interface
- Broad partner network across data, search, scraping, enrichment, and workflow services
- Pay-as-you-go and x402-oriented flows highlighted in partner integrations
- Agent-friendly onboarding that works with tools like OpenClaw, Claude Code, Codex, and Cursor

## So agents can...

- Discover capabilities dynamically instead of hardcoding every API integration up front
- Call many third-party services through one integration pattern instead of bespoke glue code
- Add paid backend capabilities on demand as plans get more complex or data needs change
