---
slug: "gateway-information-group"
name: "Gateway Information Group Agent Services"
description: "A hosted catalog of paid reports and digital products with x402 quotes, private delivery and recovery records for authorized agent purchases."
category: "api-access-orchestration-layers"
tags: ["x402", "mcp", "agent-commerce", "private-delivery", "data-validation"]
websiteUrl: "https://gatewayinformationgroup.com/agents"
pricing: "freemium"
classification: "agent-enabling"
entityType: "web-api"
developerName: "Gateway Information Group LLC"
docsUrl: "https://gatewayinformationgroup.com/developers"
pricingUrl: "https://gatewayinformationgroup.com/catalog"
interfaces: ["REST API", "MCP"]
deploymentModes: ["hosted"]
verificationLevel: "vendor-confirmed"
classificationRationaleMd: "An authorized wallet-equipped agent can obtain explicit purchase terms, retain a private capability, and recover the same durable job after payment instead of relying on a browser session or treating a signature as delivery."
inclusionRationaleMd: "The catalog combines machine-readable inputs and prices with payment-state tracking, idempotent purchase requests and private asynchronous report or file retrieval. Free discovery and an unpaid compatibility playground allow clients to inspect the workflow before spending."
bestForMd: "Agent operators who need defined data checks, website readiness reports or digital-product delivery with per-purchase terms and private results."
notBestForMd: "Hosting a general-purpose autonomous agent, unrestricted code execution or automatic recurring wallet charges."
limitationsMd: "Paid agent checkout uses USDC on Base through x402. The operator must authorize spending and retain the private capability. A prepared quote or signature is not confirmed settlement. Browser payment methods and monthly plans have separate availability checks."
unknownsMd: "This is a vendor submission. No independent performance benchmark, directory endorsement or traffic outcome is claimed."
evidenceSources:
  - title: "Gateway developer guide"
    url: "https://gatewayinformationgroup.com/developers"
    claim: "Documents the hosted agent interfaces, payment authorization boundaries, private capabilities and result retrieval."
    accessedAt: "2026-10-02"
    sourceType: "official-documentation"
  - title: "Gateway machine-readable product catalog"
    url: "https://gatewayinformationgroup.com/api/catalog/v1/products"
    claim: "Publishes product inputs, prices, purchase requests and the current checkout availability for each offer."
    accessedAt: "2026-10-02"
    sourceType: "official-product-page"
  - title: "Gateway agent catalog"
    url: "https://gateway-wallet-payments.jerryrnapier.workers.dev/api/agent/v1/catalog"
    claim: "Describes free discovery, the compatibility playground, private delivery and the paid agent workflow."
    accessedAt: "2026-10-02"
    sourceType: "official-documentation"
---

Gateway provides defined checks and private digital delivery through a hosted service catalog. Agents can inspect inputs and prices, prepare an unpaid quote, and submit a purchase only within their operator's spending authorization.

## So agents can...

- Inspect machine-readable terms and run the free compatibility playground before a purchase.
- Buy a defined report or digital product with USDC on Base through x402.
- Retain a private capability to check payment state and retrieve the corresponding result.
- Recover an existing job without treating an uncertain wallet response as permission to pay again.

Reports describe the checks performed and their limits. Optional creator support is separate from paid products and does not grant access or recurring commitments.
