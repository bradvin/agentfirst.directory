---
slug: "supermemory"
name: "Supermemory"
description: "Context and persistent memory infrastructure for AI agents"
category: "long-term-memory-state-management"
tags:
  - "agent-memory"
  - "long-term-memory"
  - "context-engineering"
  - "rag"
websiteUrl: "https://supermemory.ai/"
githubUrl: "https://github.com/supermemoryai/supermemory"
pricing: "freemium"
classification: "agent-enabling"
entityType: "web-api"
developerName: "Supermemory"
docsUrl: "https://supermemory.ai/docs/quickstart"
pricingUrl: "https://supermemory.ai/pricing/"
licenseUrl: "https://github.com/supermemoryai/supermemory/blob/main/LICENSE"
interfaces:
  - "REST API"
  - "TypeScript SDK"
  - "Python SDK"
  - "MCP server"
  - "agent plugins"
  - "local command-line runtime"
deploymentModes:
  - "hosted"
  - "local"
  - "self-hosted"
  - "air-gapped enterprise"
evidenceSources:
  - title: "Supermemory quickstart — memory API and SDK access"
    url: "https://supermemory.ai/docs/quickstart"
    claim: "The official quickstart documents authenticated memory add-and-retrieve calls through the Supermemory API and its TypeScript and Python SDKs."
    accessedAt: "2026-09-03"
    sourceType: "official-documentation"
  - title: "Supermemory repository — memory, profiles, search, and local operation"
    url: "https://github.com/supermemoryai/supermemory"
    claim: "The maintained repository describes a memory and context engine with fact extraction, user profiles, hybrid search, connectors, multimodal processing, agent plugins, MCP access, and a local runtime that can use Ollama offline."
    accessedAt: "2026-09-03"
    sourceType: "official-repository"
  - title: "Supermemory pricing — hosted usage and deployment options"
    url: "https://supermemory.ai/pricing/"
    claim: "The pricing page lists a free API plan and paid Pro, Max, Scale, and Enterprise tiers, usage-based context primitives, self-hosting on Scale and Enterprise, and air-gapped deployment on Enterprise."
    accessedAt: "2026-09-03"
    sourceType: "official-pricing"
  - title: "Supermemory repository license — MIT"
    url: "https://github.com/supermemoryai/supermemory/blob/main/LICENSE"
    claim: "The maintained Supermemory repository is published under the MIT License."
    accessedAt: "2026-09-03"
    sourceType: "official-license"
verificationLevel: "documentation-reviewed"
classificationRationaleMd: "Supermemory supplies memory ingestion, profile building, retrieval, search, and connectors to other agents and applications rather than deciding their goals or actions, so it is agent-enabling."
bestForMd: "Agents and AI products that need durable user memory, document retrieval, profiles, context search, connectors, or a local context engine without assembling separate embedding, chunking, and vector-database components."
limitationsMd: "Hosted usage draws from plan balances, the free plan pauses when its balance is exhausted, and production self-hosting is offered on higher tiers. Connector access varies by plan, while local or air-gapped operation still requires operators to choose, host, and secure the model and surrounding infrastructure."
unknownsMd: "Performance and benchmark leadership claims in first-party pages were not independently reproduced. This review also did not establish feature parity among the hosted API, open-source/local runtime, and commercial self-hosted deployments."
---

Supermemory provides an MIT-licensed memory and context layer for agents, combining extracted memories, evolving user profiles, document retrieval, connectors, and hosted or self-hosted operation.

## So agents can...

- Retain facts and user context across sessions
- Retrieve documents and memories through one context layer
- Update profiles as information changes over time
