---
slug: "praesidia"
name: "Praesidia"
description: "AI agent and MCP governance with connection-level permissions, runtime guardrails, approvals, and audit evidence"
category: "api-access-orchestration-layers"
tags: ["agent-security", "agent-governance", "mcp", "authorization", "human-approval", "audit"]
websiteUrl: "https://praesidia.ai"
logoUrl: "https://praesidia.ai/assets/images/praesidia-logomark.png"
logoWidth: 512
logoHeight: 512
pricing: "freemium"
classification: "agent-native"
entityType: "service"
developerName: "Squad Technology SRL"
docsUrl: "https://praesidia.ai/docs"
pricingUrl: "https://praesidia.ai/pricing"
interfaces: ["REST API", "MCP", "TypeScript SDK", "Python SDK", "web application"]
deploymentModes: ["hosted"]
seoTitle: "Praesidia: AI agent security and MCP tool governance"
seoDescription: "Govern AI agent and MCP tool access with Praesidia's connection-level permissions, runtime guardrails, human approvals, and audit evidence for routed calls."
agentSummary: "Praesidia gives registered agents and MCP servers separate identities and governed connections. Agent builders can constrain tool names and arguments, apply runtime guardrails, and inspect evidence for calls routed through the service. Approval workflows and cost controls depend on the plan. It is a commercial hosted platform with a free Developer tier."
classificationRationaleMd: "Agents, applications, MCP servers, and their connections are explicit product entities. The platform governs registered agents' access to tools and records decisions on mediated calls."
inclusionRationaleMd: "Agent builders can apply reusable, connection-level authorization and runtime checks between agents and MCP tools, including tool permissions and approval-bound execution. This is substantive agent governance rather than a generic API wrapper."
bestForMd: "Teams integrating agents and MCP servers that need scoped tool access, policy decisions, approval workflows, and reviewable evidence around mediated operations."
notBestForMd: "Teams expecting automatic discovery of every MCP server or controls over actions that bypass Praesidia."
limitationsMd: "MCP inventory and controls cover registered servers and calls routed through Praesidia. Features and limits vary by plan; paid tiers are scoped directly with the vendor. The platform is proprietary, and the client SDK source repositories are not public."
unknownsMd: "This submission reviews public documentation; it does not independently test production onboarding, enforcement, throughput, or every advertised integration."
verificationLevel: "documentation-reviewed"
evidenceSources:
  - title: "Praesidia MCP server governance"
    url: "https://praesidia.ai/mcp"
    claim: "Documents registered MCP server identities, connection-level authorization, tool-name and argument permissions, guardrails, and evidence for mediated calls; unregistered servers are outside its inventory."
    accessedAt: "2026-10-07"
    sourceType: "official-product-page"
  - title: "Praesidia platform overview"
    url: "https://praesidia.ai/platform"
    claim: "Describes agent identities, access policies, runtime guardrails, human approval workflows, audit evidence, and cost controls as agent-governance capabilities."
    accessedAt: "2026-10-07"
    sourceType: "official-product-page"
  - title: "Praesidia developer documentation"
    url: "https://praesidia.ai/docs"
    claim: "Documents application, agent, and MCP-server entities, governed connections, API access, and TypeScript and Python SDK integration; SDK releases are obtained directly from the vendor."
    accessedAt: "2026-10-07"
    sourceType: "official-documentation"
  - title: "Praesidia pricing and licensing"
    url: "https://praesidia.ai/pricing"
    claim: "Publishes a free Developer plan and paid scoped tiers with differing controls and limits; identifies the platform as proprietary and says client SDK source repositories are not public."
    accessedAt: "2026-10-07"
    sourceType: "official-pricing"
  - title: "Praesidia press kit"
    url: "https://praesidia.ai/press"
    claim: "Identifies Squad Technology SRL as the operator and provides official product descriptions and brand assets."
    accessedAt: "2026-10-07"
    sourceType: "official-product-page"
---

Praesidia is a hosted governance layer for registered AI agents and MCP servers. Builders assign identities, establish connections, and configure permissions and guardrails around tool use. The platform records decisions for calls that pass through it.

## So agents can...

- Access registered MCP tools under connection-specific tool and argument permissions.
- Route operations through policy and guardrail checks, with sensitive actions held for approval where configured and supported by the plan.
- Produce audit evidence that builders can inspect alongside usage and cost information.

These controls require integration with Praesidia. They do not govern calls made outside the mediated path.
