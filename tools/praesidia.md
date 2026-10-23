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
agentSummary: "Praesidia gives registered agents and MCP servers separate identities and governed connections. Builders can constrain tool names and arguments, require approvals, and review decisions for routed calls. MCP content guardrails cover tool calls made during an agent chat turn. Plans and enabled integrations determine availability; a free Developer tier is available."
classificationRationaleMd: "Agents, applications, MCP servers, and their connections are explicit product entities. The platform governs registered agents' access to tools and records decisions on mediated calls."
inclusionRationaleMd: "Agent builders can apply reusable, connection-level authorization and runtime checks between agents and MCP tools, including tool permissions and approval-bound execution. This is substantive agent governance rather than a generic API wrapper."
bestForMd: "Teams integrating agents and MCP servers that need scoped tool access, policy decisions, approval workflows, and reviewable evidence around mediated operations."
notBestForMd: "Teams expecting automatic discovery of every MCP server or controls over actions that bypass Praesidia."
limitationsMd: "MCP inventory and controls cover registered servers and calls routed through Praesidia. MCP content guardrails apply to tool calls an agent makes during a chat turn; agent-to-agent intent rules do not apply to MCP calls. Decision records are signed under the default configuration; argument/result call logs are separate and unsigned. The hosted platform is proprietary; client SDK source is public under Apache-2.0 (TypeScript) and MIT (Python). Public source does not establish npm/PyPI publication; vendor-provided release packages are a separate distribution path. Features depend on the plan and enabled integration path."
unknownsMd: "This submission reviews public documentation; it does not independently test production onboarding, enforcement, throughput, or every advertised integration."
verificationLevel: "documentation-reviewed"
evidenceSources:
  - title: "Praesidia MCP server governance"
    url: "https://praesidia.ai/mcp"
    claim: "Documents registered MCP identities, per-connection tool and argument permissions, and content guardrails for agent chat-turn tool calls. Decision records are signed by default; separate argument/result call logs are unsigned. Unregistered servers and unrouted calls are outside its controls."
    accessedAt: "2026-10-18"
    sourceType: "official-product-page"
  - title: "Praesidia platform overview"
    url: "https://praesidia.ai/platform"
    claim: "Describes agent identities, access policies, runtime guardrails, human approval workflows, audit evidence, and cost controls as agent-governance capabilities."
    accessedAt: "2026-10-18"
    sourceType: "official-product-page"
  - title: "Praesidia runtime SDK installation"
    url: "https://praesidia.ai/docs/runtime-installation"
    claim: "Documents vendor-provided TypeScript tarballs and Python wheels for design partners, pending npm/PyPI publication, version-matched integration paths, and the limits of public browser signup and runtime credentials."
    accessedAt: "2026-10-18"
    sourceType: "official-documentation"
  - title: "Praesidia guardrail scope"
    url: "https://praesidia.ai/docs/guardrails"
    claim: "Documents content guardrails on MCP tool arguments/results during an agent chat turn. Intent rules run on tasks between agents and do not run on chat turns or MCP tool calls."
    accessedAt: "2026-10-18"
    sourceType: "official-documentation"
  - title: "Praesidia pricing and licensing"
    url: "https://praesidia.ai/pricing"
    claim: "Publishes an ongoing free Developer plan and vendor-scoped paid tiers with differing controls and limits. Identifies the hosted platform as proprietary and distinguishes permissively licensed client SDKs from the commercial core."
    accessedAt: "2026-10-18"
    sourceType: "official-pricing"
  - title: "Praesidia TypeScript client source"
    url: "https://github.com/praesidia-ai/sdk"
    claim: "Public TypeScript client implementation for Praesidia; the README distinguishes source installation from pending npm publication. This client repository does not establish hosted backend source availability."
    accessedAt: "2026-10-18"
    sourceType: "official-repository"
  - title: "Praesidia TypeScript client licence"
    url: "https://github.com/praesidia-ai/sdk/blob/main/LICENSE"
    claim: "The public TypeScript client source carries the Apache-2.0 licence; this licence is scoped to that client repository."
    accessedAt: "2026-10-18"
    sourceType: "official-license"
  - title: "Praesidia Python client source"
    url: "https://github.com/praesidia-ai/sdk-python"
    claim: "Public Python client implementation for Praesidia, separate from the hosted platform and vendor-provided release packages. Public client source does not establish PyPI publication or an open-source backend."
    accessedAt: "2026-10-18"
    sourceType: "official-repository"
  - title: "Praesidia Python client licence"
    url: "https://github.com/praesidia-ai/sdk-python/blob/main/LICENSE"
    claim: "The public Python client source carries the MIT licence; this licence is scoped to that client repository."
    accessedAt: "2026-10-18"
    sourceType: "official-license"
  - title: "Praesidia press kit"
    url: "https://praesidia.ai/press"
    claim: "Identifies Squad Technology SRL as the operator and provides official product descriptions and brand assets."
    accessedAt: "2026-10-18"
    sourceType: "official-product-page"
---

Praesidia is a hosted governance layer for registered AI agents and MCP servers. Builders assign identities, establish connections, and configure permissions and guardrails around tool use. The platform records decisions for calls that pass through it.

## So agents can...

- Access registered MCP tools under connection-specific tool and argument permissions.
- Apply content guardrails to the arguments and results of MCP tool calls made during an agent chat turn, with sensitive actions held for approval where configured and supported by the integration and plan.
- Produce decision records signed under the default configuration that builders can inspect alongside separate unsigned argument/result call logs and plan-dependent usage and cost information.

These controls require integration with Praesidia. They do not govern calls made outside the mediated path.
