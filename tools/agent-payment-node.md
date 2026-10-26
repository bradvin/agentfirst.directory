---
slug: "agent-payment-node"
name: "Agent Payment Node"
description: "Local payment runtime through which AI agents inspect offers and prepare operations under owner-set limits."
category: "agent-payment-financial-primitives"
tags:
  - "payments"
  - "x402"
  - "mcp"
  - "cli"
websiteUrl: "https://github.com/nuanu-ai/agent-payment-node"
githubUrl: "https://github.com/nuanu-ai/agent-payment-node"
pricing: "open-source"
classification: "agent-enabling"
entityType: "software-application"
verificationLevel: "documentation-reviewed"
developerName: "Nuanu AI"
docsUrl: "https://github.com/nuanu-ai/agent-payment-node#how-apn-works"
licenseUrl: "https://github.com/nuanu-ai/agent-payment-node/blob/main/LICENSE"
interfaces:
  - "CLI"
  - "MCP (local stdio)"
deploymentModes:
  - "local macOS Apple Silicon"
classificationRationaleMd: "The runtime is designed for AI agents to inspect payment offers and prepare exact operations through machine-readable CLI or local MCP interfaces, while the owner configures authority and approves direct-transfer signing in a foreground terminal."
inclusionRationaleMd: "Agent payment requests are bounded by explicit owner policies and represented as durable operations with status and receipt commands; this is the product's core operating model."
bestForMd: "Agent builders who need local payment preparation and explicit owner control on a supported Mac."
notBestForMd: "Linux or Windows deployments, hosted MCP endpoints, or a general merchant checkout gateway."
limitationsMd: "macOS Apple Silicon and Node 24 only. Direct-transfer signing requires foreground owner approval. The README separately documents unattended Solana x402 payments under an owner-admitted policy; approval behavior is command-specific. Network and provider fees are separate from the MIT-licensed software."
unknownsMd: "No new live payment execution, independent security audit, production adoption, or Linux/Docker compatibility test was performed for this submission. Public source capabilities do not establish the contents of every installed release."
evidenceSources:
  - title: "APN operating model and machine interfaces"
    url: "https://github.com/nuanu-ai/agent-payment-node#how-apn-works"
    claim: "The CLI and local stdio MCP expose payment operations; prepare freezes an exact effect, and direct-transfer approval requires a foreground owner step."
    accessedAt: "2026-10-26"
    sourceType: "official-documentation"
  - title: "APN x402 purchase documentation"
    url: "https://github.com/nuanu-ai/agent-payment-node#x402-purchases"
    claim: "APN documents x402 offer inspection, prepare/approve purchase commands, and a distinct unattended Solana exact-payment path under owner policy."
    accessedAt: "2026-10-26"
    sourceType: "official-documentation"
  - title: "APN platform support matrix"
    url: "https://github.com/nuanu-ai/agent-payment-node/blob/main/docs/platform-support.md"
    claim: "The supported distribution is the Homebrew Formula for Apple Silicon macOS with Node 24; Linux and Windows are unsupported."
    accessedAt: "2026-10-26"
    sourceType: "official-documentation"
  - title: "APN MIT license"
    url: "https://github.com/nuanu-ai/agent-payment-node/blob/main/LICENSE"
    claim: "Nuanu AI publishes Agent Payment Node under the MIT license."
    accessedAt: "2026-10-26"
    sourceType: "official-license"
---

Agent Payment Node is a local payment runtime built for AI agents. Agents use
the CLI or a local stdio MCP server to inspect supported offers and prepare
operations within limits configured by a human owner.

## So agents can...

- Inspect supported x402 payment offers before preparing a purchase.
- Prepare an exact direct transfer for the owner to approve in a foreground terminal.
- Read operation status and receipts to recover the workflow after an interrupted response.

The documented installation is `brew install nuanu-ai/tap/apn`; the local MCP
entry point is `apn mcp serve`. Approval behavior depends on the command, and
payment use can incur external network or provider fees. Review the linked
platform and custody documentation before use.
