---
slug: "circle-agent-stack"
name: "Circle Agent Stack"
description: "Wallets, marketplace, CLI, and USDC transactions for autonomous agents"
category: "agent-payment-financial-primitives"
tags:
  - "agent-wallets"
  - "usdc"
  - "payments"
  - "x402"
websiteUrl: "https://agents.circle.com/"
pricing: "paid"
classification: "agent-native"
entityType: "service"
developerName: "Circle Technology Services, LLC"
docsUrl: "https://developers.circle.com/agent-stack"
pricingUrl: "https://developers.circle.com/agent-stack/agent-wallets/fees"
interfaces:
  - "command-line interface"
  - "agent skills"
  - "service marketplace"
  - "x402-compatible endpoints"
deploymentModes:
  - "Circle-hosted platform"
evidenceSources:
  - title: "Circle Agent Stack documentation — wallets, payments, marketplace, CLI, and skills"
    url: "https://developers.circle.com/agent-stack"
    claim: "Circle documents an agent-native stack for wallets, spending policies, multichain transactions, x402-compatible service payments, a CLI, skills, nanopayments, and a marketplace."
    accessedAt: "2026-09-03"
    sourceType: "official-documentation"
  - title: "Circle Agent Stack overview — access and supported-chain constraints"
    url: "https://help.circle.com/support/en/circle-agent-stack-overview?id=kb_article_view&sysparm_article=KB0011122"
    claim: "Circle's support overview describes email-OTP wallet creation, human-defined spending policies, supported chains, CLI operations, and service discovery and payment."
    accessedAt: "2026-09-03"
    sourceType: "official-documentation"
  - title: "Circle Agent Stack starter kits — framework integrations and approval boundaries"
    url: "https://github.com/circlefin/agent-stack-starter-kits/blob/master/README.md"
    claim: "Circle's starter kits integrate Agent Stack with six agent frameworks and document local shell and skill interfaces, command approval gates, wallet spending caps, and non-production sample status."
    accessedAt: "2026-09-03"
    sourceType: "official-repository"
  - title: "Circle Agent Wallet fees — sponsored and fee-bearing operations"
    url: "https://developers.circle.com/agent-stack/agent-wallets/fees"
    claim: "Circle publishes Agent Wallet fees for sponsored gas, cross-chain transfers, forwarding, swaps, cross-chain x402 payments, and third-party Eco deposits."
    accessedAt: "2026-09-03"
    sourceType: "official-pricing"
  - title: "Circle Agent Platform terms — responsibility, third parties, and transaction risk"
    url: "https://agents.circle.com/terms-of-use"
    claim: "The terms require a responsible natural person, make that user responsible for agent actions and controls, warn that transactions can be irreversible, and state that third-party services and prices are not audited or controlled by Circle."
    accessedAt: "2026-09-03"
    sourceType: "official-legal"
verificationLevel: "documentation-reviewed"
classificationRationaleMd: "Agent Wallets, CLI commands, skills, service discovery, spending controls, and machine-payable endpoints are expressly designed for AI agents to hold assets and transact programmatically, so agents are first-class actors in the product."
bestForMd: "Builders who need an agent to hold and move supported assets, pay x402-compatible services with USDC, trade or bridge across supported chains, and operate under wallet-level spending policies."
limitationsMd: "A responsible natural person must accept the platform terms and remains responsible for every agent action. Blockchain transactions can be irreversible; spending limits are not guaranteed to prevent every unintended transaction, and marketplace services may have separate terms, fees, failures, or prompt-injection risks that Circle does not audit."
unknownsMd: "Circle publishes current Agent Wallet fees, but network-specific transfer costs, exchange rates, fair-use sponsorship caps, and third-party service or Eco fees can vary and should be checked for each operation."
---

Circle Agent Stack provides agent wallets, spending controls, multichain USDC operations, a service marketplace, and x402 payment support. Its infrastructure is usage-based: some operations are sponsored or free, while forwarding, swaps, cross-chain payments, and third-party services can carry fees.

## So agents can...

- Create wallets and transact within configurable spending limits
- Hold, transfer, swap, and bridge supported assets
- Discover and pay for x402-compatible services per request
