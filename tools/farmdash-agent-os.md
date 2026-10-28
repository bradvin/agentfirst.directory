---
slug: "farmdash-agent-os"
name: "FarmDash Agent OS"
description: "Zero-custody DeFi intelligence, simulation and execution controls designed for AI-agent workflows."
category: "api-access-orchestration-layers"
tags:
  - "defi"
  - "mcp"
  - "openapi"
  - "execution-controls"
  - "x402"
websiteUrl: "https://www.farmdash.one"
githubUrl: "https://github.com/Parmasanandgarlic/farmdash-openclaw-skills"
pricing: "freemium"
classification: "agent-enabling"
entityType: "web-api"
developerName: "FarmDash"
docsUrl: "https://www.farmdash.one/docs"
pricingUrl: "https://www.farmdash.one/pricing"
interfaces:
  - "REST API"
  - "MCP (local stdio)"
deploymentModes:
  - "hosted API with local stdio MCP adapter"
evidenceSources:
  - title: "FarmDash Agent Hub"
    url: "https://www.farmdash.one/agents"
    claim: "FarmDash positions structured DeFi intelligence, wallet context, simulation and execution controls as workflows for agent builders."
    accessedAt: "2026-10-28"
    sourceType: "official-documentation"
  - title: "FarmDash execution truth"
    url: "https://www.farmdash.one/execution-truth.json"
    claim: "USER_SIGNED is the default; bounded-autonomous actions require separately authorized policy scopes and live readiness gates, without FarmDash receiving raw customer private keys."
    accessedAt: "2026-10-28"
    sourceType: "official-documentation"
  - title: "FarmDash canonical MCP capability manifest"
    url: "https://www.farmdash.one/.well-known/mcp.json"
    claim: "MCP v5.0.0 describes 94 capability-labeled runtime tools for intelligence, simulation and controlled agent workflows."
    accessedAt: "2026-10-28"
    sourceType: "official-documentation"
  - title: "FarmDash public stdio MCP source"
    url: "https://github.com/Parmasanandgarlic/farmdash-openclaw-skills/tree/main/mcp-server"
    claim: "The MIT-licensed local stdio adapter is installed from public source; FARMDASH_API_KEY is optional for Scout, and npm publication is not claimed."
    accessedAt: "2026-10-28"
    sourceType: "official-repository"
  - title: "FarmDash fee contract"
    url: "https://www.farmdash.one/api/v1/fees.json"
    claim: "Scout is free and quota-limited; Pioneer and Syndicate are paid API tiers, with route-specific x402 USDC pricing. Payment does not create transaction authority."
    accessedAt: "2026-10-28"
    sourceType: "official-documentation"
classificationRationaleMd: "FarmDash materially enables agent-first DeFi research and controlled execution by providing capability discovery, simulation and scoped authority workflows, rather than only exposing a conventional dashboard through an API."
inclusionRationaleMd: "Agent builders can reason about protocol and wallet risk, simulate proposed actions and keep transaction authority separate from API or payment access."
bestForMd: "Builders of DeFi agents that need structured intelligence and explicit execution-authority boundaries."
notBestForMd: "Teams seeking a custodial key service, an unrestricted autonomous trader, an A2A message transport or a hosted remote MCP endpoint."
limitationsMd: "MCP installation currently uses public source and local stdio; npm publication is unverified. USER_SIGNED is the default, and bounded autonomy requires explicit policy authorization and current readiness. ERC-4337 server submission, generic intent execution and MEE remain preparation-only; ACP is deployment-prerequisite dependent. The primary OpenAPI currently references undeclared ApiKeyAuth on billing-history, so strict contract consumers must track that upstream defect."
unknownsMd: "No independent performance benchmark or live paid execution was tested for this directory submission. Runtime readiness and route pricing must be read from current first-party status and fee contracts."
isIndexable: true
---

FarmDash Agent OS provides zero-custody DeFi intelligence and execution controls for AI agents. Its hosted API can be used directly or through the public local stdio MCP adapter. FarmDash does not receive customer raw private keys.

## So agents can...

- Research protocol opportunities, wallet context and risk before proposing a DeFi action.
- Simulate an action and distinguish user-signed workflows from separately authorized, policy-bounded automation.
- Discover capability schemas and access quotas without treating a paid API key, x402 payment or session as transaction authority.
