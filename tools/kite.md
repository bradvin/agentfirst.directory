---
slug: "kite"
name: "Kite"
description: "Identity, governance, and stablecoin rails for agentic payments"
category: "agent-payment-financial-primitives"
tags:
  - "payments"
  - "stablecoins"
  - "identity"
websiteUrl: "https://gokite.ai"
pricing: "unknown"
classification: "agent-native"
entityType: "service"
developerName: "Kite AI"
docsUrl: "https://docs.gokite.ai/"
interfaces:
  - "web application"
  - "CLI"
  - "x402"
  - "Machine Payments Protocol"
deploymentModes:
  - "hosted"
  - "on-chain"
evidenceSources:
  - title: "Kite Agent Passport overview"
    url: "https://docs.gokite.ai/"
    claim: "Kite documents Agent Passport as an agent payment service with agent identity, funded wallets, user-defined spending rules, scoped sessions, and verifiable receipts."
    accessedAt: "2026-09-03"
    sourceType: "official-documentation"
  - title: "Kite service provider guide"
    url: "https://docs.gokite.ai/kite-agent-passport/service-provider-guide"
    claim: "Kite Agent Passport can pay services over x402 or the Machine Payments Protocol, with payment authorization resolved from an approved spending session."
    accessedAt: "2026-09-03"
    sourceType: "official-documentation"
  - title: "Kite Passport quick start"
    url: "https://agentpassport.ai/quickstart/"
    claim: "The official quick start documents the kpass CLI, wallet funding, passkey-approved spending sessions, x402 payments, and session-bound spending limits."
    accessedAt: "2026-09-03"
    sourceType: "official-documentation"
classificationRationaleMd: "Kite Agent Passport treats the autonomous agent as a first-class identity and payment participant, with delegated budgets and session rules that govern the agent's own transactions."
bestForMd: "Agents that need user-authorized budgets for paid APIs, services, transfers, or purchases using stablecoin and machine-payment rails."
limitationsMd: "A user must fund the Passport and approve each scoped spending session with a passkey before the agent can spend; card-based payments require a separate issuer onboarding and identity-verification path."
unknownsMd: "No public Kite Agent Passport fee schedule or plan page was found in the reviewed first-party sources, so product pricing remains unknown; wallet funding and third-party transaction costs do not establish Kite's own fees."
verificationLevel: "documentation-reviewed"
logoUrl: "https://www.google.com/s2/favicons?sz=64&domain_url=https://gokite.ai"
ogImageUrl: "https://gokite.ai/preview-newkiteai.png"
sortOrder: 10
---

Kite is building payment infrastructure for autonomous agents on top of an agent-first blockchain stack. The current platform emphasizes cryptographic identity, programmable governance, stablecoin-native payments, and x402-compatible agent-to-agent transaction flows.

## Features

- Cryptographic identity for agents, models, datasets, and services
- Programmable governance and delegated permissions for spending and usage controls
- Native stablecoin payments with low-fee, agent-oriented transaction patterns
- x402-compatible payment and message flows for machine-to-machine interactions
- Agent marketplace and passport concepts for discovery, reputation, and policy-aware commerce

## So agents can...

- Pay for data, APIs, or services without borrowing a human card or API key
- Operate under explicit spend limits and delegated authority instead of unrestricted wallet access
- Participate in agent-to-agent commerce with auditable identity and payment trails
