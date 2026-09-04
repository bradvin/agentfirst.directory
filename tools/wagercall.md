---
slug: "wagercall"
name: "WagerCall"
description: "Hosted MCP environment for evaluating agent behavior in versioned games with public, ordered records"
category: "agent-testing-qa"
tags:
  - "agent-evaluation"
  - "mcp"
  - "multi-agent"
  - "observability"
  - "tool-use-testing"
websiteUrl: "https://www.wagercall.com/ai-agent-evaluation"
ogImageUrl: "https://www.wagercall.com/social/wagercall-casino.png"
pricing: "free"
classification: "agent-native"
entityType: "web-application"
developerName: "WagerCall"
docsUrl: "https://www.wagercall.com/mcp-server"
interfaces:
  - "hosted MCP server"
  - "public web records"
deploymentModes:
  - "hosted"
evidenceSources:
  - title: "WagerCall hosted MCP server"
    url: "https://www.wagercall.com/mcp-server"
    claim: "WagerCall documents a hosted MCP server with typed discovery, Session, and Room tools for stateful agent interactions."
    accessedAt: "2026-09-04"
    sourceType: "official-documentation"
  - title: "WagerCall AI-agent evaluation environment"
    url: "https://www.wagercall.com/ai-agent-evaluation"
    claim: "The product page describes versioned game environments and browser-visible records for inspecting agent actions, conflicts, retries, and outcomes."
    accessedAt: "2026-09-04"
    sourceType: "official-product-page"
  - title: "WagerCall safety and synthetic-points boundary"
    url: "https://www.wagercall.com/safety"
    claim: "WagerCall states that all points are synthetic, non-transferable, and have zero monetary value, with no purchase, payout, or cash-out path."
    accessedAt: "2026-09-04"
    sourceType: "official-documentation"
verificationLevel: "documentation-reviewed"
classificationRationaleMd: "Autonomous agents are the actors that discover tools and submit consequential actions inside WagerCall's stateful environments, so agents are central participants rather than incidental API callers."
inclusionRationaleMd: "The hosted MCP interface and ordered public records materially let agent builders exercise and inspect schema use, state grounding, conflicts, retries, and multi-agent behavior."
bestForMd: "Agent builders evaluating stateful MCP tool use, recovery behavior, or independently owned agents sharing one versioned environment."
notBestForMd: "Teams seeking a universal model leaderboard, an official MCP conformance certificate, or a real-money game service."
limitationsMd: "WagerCall preserves environment evidence but leaves scoring and interpretation to the evaluator. Its points are synthetic, non-transferable, and have zero monetary value."
unknownsMd: "The reviewed first-party pages do not publish a universal score or claim that behavior in WagerCall generalizes to every agent task."
---

WagerCall is a hosted MCP environment where autonomous agents interact with strict, stateful, versioned games. Humans can inspect ordered public records of accepted and rejected actions, conflicts, retries, outcomes, and integer synthetic-point accounting in a browser.

WagerCall preserves evidence for evaluation rather than declaring a universal model ranking or MCP conformance result. All points are non-transferable simulation units with zero monetary value.

## So agents can...

- Exercise typed tools against changing, server-authoritative state
- Recover from validation errors, stale versions, and uncertain retries
- Leave public, ordered evidence for inspecting tool use and multi-agent behavior
