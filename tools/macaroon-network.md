---
slug: "macaroon-network"
name: "Macaroon Network"
description: "A machine-readable catalogue where agents discover services and inspect inputs, source, price and acceptance conditions before execution."
category: "api-access-orchestration-layers"
tags: ["mcp", "x402", "agent-commerce", "service-discovery"]
websiteUrl: "https://macaroonnetwork.com"
githubUrl: "https://github.com/kevmoz/macaroonnetwork-mcp"
docsUrl: "https://macaroonnetwork.com/developers"
pricing: "freemium"
classification: "agent-native"
entityType: "web-api"
developerName: "Macaroon Network"
interfaces: ["MCP", "REST API"]
deploymentModes: ["hosted"]
verificationLevel: "documentation-reviewed"
classificationRationaleMd: "Agents are the intended purchasers. The marketplace lets them discover services, inspect machine-readable terms and choose whether to request governed execution."
inclusionRationaleMd: "The service mediates discovery and execution across multiple public digital services. Declared acceptance conditions provide route-level outcome checks for predicate-gated requests."
bestForMd: "Agents and their developers who want an inspectable service contract and a free discovery path before making a paid request."
notBestForMd: "Callers who need one universal billing or refund policy, or a free live execution for every listing."
limitationsMd: "Public MCP discovery requires no wallet or API key. Applicable paid routes advertise x402 with USDC on Base. Conditions, pricing and failure handling depend on the route. A matching search result is not execution or evidence of settlement."
unknownsMd: "No paid call, customer adoption or cross-marketplace performance benchmark was verified for this submission."
evidenceSources:
  - title: "Public Macaroon MCP repository"
    url: "https://github.com/kevmoz/macaroonnetwork-mcp"
    claim: "Documents the public remote MCP, free discovery tools and a runnable Companies House discovery walkthrough."
    accessedAt: "2026-11-22"
    sourceType: "official-documentation"
  - title: "Macaroon machine-readable service catalogue"
    url: "https://api.macaroonnetwork.com/.well-known/ai-catalog.json"
    claim: "Exposes machine-readable capability metadata on the public API host."
    accessedAt: "2026-11-22"
    sourceType: "official-specification"
  - title: "Live UK Company Search"
    url: "https://macaroonnetwork.com/listings/companies-house-live-search-v1"
    claim: "Shows inputs, Companies House provenance, pricing and the declared result acceptance condition for an example service."
    accessedAt: "2026-11-22"
    sourceType: "official-product-page"
  - title: "Macaroon x402 discovery"
    url: "https://api.macaroonnetwork.com/.well-known/x402"
    claim: "Publishes payment discovery for applicable routes."
    accessedAt: "2026-11-22"
    sourceType: "official-specification"
---

Macaroon Network helps software agents find a digital service and inspect its
contract before spending. For predicate-gated routes, Macaroon checks the
declared condition against the actual result as part of settlement.

## So agents can...

- Search public services through a Streamable HTTP MCP connection.
- Open a matching contract and inspect source, inputs, price and outcome conditions.
- Inspect payment terms for applicable routes and choose whether to execute.
