---
slug: "sponge"
name: "Sponge"
description: "Wallets, agent spending controls, and payment gateways for the agent economy"
category: "agent-payment-financial-primitives"
tags:
  - "payments"
  - "wallets"
  - "spending-controls"
websiteUrl: "https://paysponge.com"
pricing: "unknown"
classification: "agent-native"
entityType: "service"
developerName: "Sponge"
docsUrl: "https://docs.paysponge.com/"
interfaces:
  - "remote MCP server"
  - "REST API"
  - "TypeScript SDK"
  - "Python SDK"
  - "command-line interface"
  - "web dashboard"
deploymentModes:
  - "hosted"
evidenceSources:
  - title: "Sponge homepage — agent wallets and merchant payments"
    url: "https://paysponge.com/"
    claim: "Sponge presents hosted financial infrastructure for agents to hold and spend through cards, bank accounts, and crypto, with programmable spending controls and a gateway for merchants accepting agent payments."
    accessedAt: "2026-09-03"
    sourceType: "official-product-page"
  - title: "Sponge Wallet documentation — wallet capabilities and interfaces"
    url: "https://docs.paysponge.com/"
    claim: "The wallet documentation covers stablecoin storage, virtual cards, ACH and wire transfers, x402 and MPP calls, swaps and markets, with MCP, CLI, TypeScript SDK, and Python SDK access."
    accessedAt: "2026-09-03"
    sourceType: "official-documentation"
  - title: "Sponge Gateway overview — paid API proxy and management surfaces"
    url: "https://docs.paysponge.com/gateway"
    claim: "The gateway documentation explains how a hosted proxy can expose upstream API routes through x402 or MPP with fixed, dynamic, or session pricing managed through a dashboard, MCP, or authenticated HTTP API."
    accessedAt: "2026-09-03"
    sourceType: "official-documentation"
  - title: "Sponge Gateway concepts — payment modes and route-review boundary"
    url: "https://docs.paysponge.com/gateway/concepts"
    claim: "The concepts guide documents exact and usage-capped payments, upstream credential injection, resource ownership, and warns operators to review imported routes because an enabled route becomes callable by anyone who pays."
    accessedAt: "2026-09-03"
    sourceType: "official-documentation"
  - title: "Sponge terms — beta status and third-party payment dependency"
    url: "https://paysponge.com/terms"
    claim: "The terms state that the service may be offered in beta and changed or discontinued, and identify a third-party payment-tokenization dependency."
    accessedAt: "2026-09-03"
    sourceType: "official-legal"
verificationLevel: "documentation-reviewed"
classificationRationaleMd: "Sponge gives agents their own programmable financial accounts and payment actions, and lets merchants expose machine-payable endpoints, making autonomous agent transactions the product's primary design rather than an add-on."
bestForMd: "Agents that need controlled wallets, card or bank payment capabilities, x402/MPP purchases, transfers, swaps, or markets, and API businesses that want to sell metered endpoints to agents through a managed gateway."
limitationsMd: "Financial actions involve real funds, credentials, supported chains, third-party providers, and in some cases card onboarding or KYC. Operators must apply conservative limits, protect sensitive card and API-key data, review every published gateway route, and account for legal, tax, compliance, counterparty, and market risk."
unknownsMd: "No public Sponge fee schedule or plan page was found in the reviewed first-party sources, so product pricing remains unknown; prices configured for third-party gateway endpoints do not establish Sponge's own fees. The terms say features may be beta and may change; custody model, geographic eligibility, service-level commitments, and independent control effectiveness were not established."
logoUrl: "https://www.google.com/s2/favicons?sz=64&domain_url=https://paysponge.com"
sortOrder: 20
---

Sponge is financial infrastructure for agents and businesses transacting with them. Its current product spans agent wallets, payment gateways, REST APIs, wallet skills, transfer and swap flows, x402 paid API access, and owner-managed spending controls.

## Features

- Agent wallet accounts for holding and moving funds across supported chains
- Business gateway for onboarding agents and accepting payments without a human checkout flow
- REST API for balances, transfers, swaps, bridges, funding requests, and transaction history
- x402 payment creation for paid API access and machine-native payment flows
- Spending controls, allowlists, and owner approval flows for safer delegated spending

## So agents can...

- Pay for services or data within pre-approved guardrails instead of asking a human to click checkout
- Transfer funds to vendors, creators, or other agents while keeping an audit trail
- Combine planning and payment in one loop, for example buying data before executing a trade or workflow
