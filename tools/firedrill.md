---
slug: "firedrill"
name: "Firedrill"
description: "Simulate AI agents across scenarios and inspect recorded outcomes and evidence."
seoTitle: "Firedrill: AI Agent Simulations and Recorded Evidence"
seoDescription: "Explore AI agent behavior across scenarios with Firedrill. Connect through MCP, CLI or SDK, keep execution in your runner, and inspect saved evidence."
agentSummary: "Firedrill lets coding agents prepare scenarios and inspect simulations of the AI agent a developer is building. The target runs in the developer's own process or CI runner. Optional stateful synthetic Tools provide controlled dependencies; saved reports separate execution, observed outcomes, semantic assessment and exact checks."
category: "agent-testing-qa"
tags:
  - "agent-simulation"
  - "agent-testing"
  - "synthetic-tools"
  - "mcp"
  - "cli"
  - "ci"
websiteUrl: "https://firedrill.run"
pricing: "free"
classification: "agent-enabling"
entityType: "service"
developerName: "Firedrill"
docsUrl: "https://docs.firedrill.run"
interfaces:
  - "MCP"
  - "CLI"
  - "TypeScript SDK"
  - "Python SDK"
  - "HTTP API"
deploymentModes:
  - "hosted"
classificationRationaleMd: "The documented workflow lets coding agents prepare and coordinate simulations, control synthetic dependencies, and inspect retained behavior and evidence for an existing AI agent. This is simulation infrastructure, not a generic API wrapper or a coding-agent orchestrator."
bestForMd: "Developers and coding agents exploring behavior, testing constraints or comparing configurations of an existing AI agent without moving its execution into the service."
notBestForMd: "Users seeking a service that remotely starts an arbitrary local application or guarantees identical stochastic outputs."
limitationsMd: "The customer must provide the target entry point and runner. Managed Tool restore and virtual time do not reset the target application's external state or accelerate model inference. Semantic assessment is optional; the documented text evaluator does not judge screenshots, audio or video."
unknownsMd: "This submission does not establish an independent throughput benchmark, statistical confidence or a universal model ranking."
evidenceSources:
  - title: "Firedrill quickstart"
    url: "https://docs.firedrill.run/quickstart"
    claim: "Documents native coding-agent setup, CLI initialization, customer-owned target execution, optional Tools and assessment, SDK entry points, saved reports and CI reuse."
    accessedAt: "2026-10-20"
    sourceType: "official-documentation"
  - title: "Firedrill operator MCP"
    url: "https://docs.firedrill.run/guides/control-mcp"
    claim: "Documents the authenticated Streamable HTTP MCP, scoped recipe/scenario/batch/report operations and the separate customer-runner handoff; queuing does not start a laptop process."
    accessedAt: "2026-10-20"
    sourceType: "official-documentation"
  - title: "Firedrill semantic scoring and exact requirements"
    url: "https://docs.firedrill.run/guides/scoring"
    claim: "Documents optional semantic rubrics, fractional text-evaluation scores, independent exact checks, missing-evidence handling and descriptive repeated-trial comparisons."
    accessedAt: "2026-10-20"
    sourceType: "official-documentation"
  - title: "Firedrill state and time controls"
    url: "https://docs.firedrill.run/guides/control-state-time"
    claim: "Documents snapshots, restore, modeled Tool time and retained history; those controls do not rewind external application state or accelerate model inference."
    accessedAt: "2026-10-20"
    sourceType: "official-documentation"
  - title: "Firedrill agent quickstart and current access policy"
    url: "https://firedrill.run/agents"
    claim: "States that Firedrill is free for now, with target model-provider and runner costs separate, and exposes the canonical remote MCP and short CLI setup command."
    accessedAt: "2026-10-20"
    sourceType: "official-product-page"
---

Firedrill is a closed-source, hosted simulation platform for AI agents. Coding
agents operate it on a developer's behalf through MCP, CLI or SDK. The developer's
application and target-model credentials remain in the customer-owned runner.

## So agents can...

- Prepare reviewable scenarios for an existing application's actual entry point.
- Use optional synthetic Tools and starting data instead of real production dependencies.
- Inspect saved outputs, calls, artifacts and assessment results without rerunning the target.
- Reuse simulation recipes in a repository or CI and compare recorded trials.

Start from the [quickstart](https://docs.firedrill.run/quickstart). The remote MCP
prepares and inspects work; a local or CI runner still executes the target.
Observation-only simulations are valid. Semantic assessment and exact constraints
are separate, and missing evidence is not a passing result. Current free access
does not include the customer's model-provider or runner expenses.
