---
slug: "honcho"
name: "Honcho"
description: "Open-source reasoning and memory system for stateful AI agents"
category: "long-term-memory-state-management"
tags:
  - "long-term-memory"
  - "stateful-agents"
  - "context-engineering"
  - "reasoning"
websiteUrl: "https://honcho.dev/"
githubUrl: "https://github.com/plastic-labs/honcho"
pricing: "freemium"
classification: "agent-enabling"
entityType: "service"
developerName: "Plastic Labs"
docsUrl: "https://honcho.dev/docs/v3/documentation/introduction"
pricingUrl: "https://honcho.dev/#pricing"
licenseUrl: "https://github.com/plastic-labs/honcho/blob/main/LICENSE"
interfaces:
  - "REST API"
  - "Python SDK"
  - "TypeScript SDK"
  - "MCP integrations"
deploymentModes:
  - "hosted"
  - "self-hosted"
  - "Docker"
evidenceSources:
  - title: "Honcho source repository"
    url: "https://github.com/plastic-labs/honcho"
    claim: "Plastic Labs documents Honcho as stateful-agent memory infrastructure with managed and self-hosted modes, REST service logic, Python and TypeScript SDKs, and agent-tool integrations."
    accessedAt: "2026-09-03"
    sourceType: "official-repository"
  - title: "Honcho pricing"
    url: "https://honcho.dev/#pricing"
    claim: "Honcho publishes usage-based prices for memory ingestion and multiple reasoning levels on its managed service."
    accessedAt: "2026-09-03"
    sourceType: "official-pricing"
  - title: "Honcho license"
    url: "https://github.com/plastic-labs/honcho/blob/main/LICENSE"
    claim: "The Honcho server repository is licensed under AGPL-3.0."
    accessedAt: "2026-09-03"
    sourceType: "official-license"
classificationRationaleMd: "Honcho provides memory storage, background reasoning, representations, and retrieval that applications and agents integrate; it supplies state infrastructure rather than acting as the primary autonomous agent."
bestForMd: "Agents and applications that need evolving representations of users, agents, projects, or other entities across conversations and sessions."
limitationsMd: "A self-hosted deployment requires operating the API and background worker plus PostgreSQL with pgvector and at least one configured LLM provider; hosted reasoning is usage-priced by query level."
verificationLevel: "documentation-reviewed"
---

Honcho is an AGPL-licensed memory system with a managed service for stateful agents. It stores conversations and entities, reasons over accumulated history, and maintains evolving state across sessions.

## So agents can...

- Remember users, agents, and other entities across sessions
- Track changing preferences, relationships, and contradictions
- Retrieve compact, reasoned context instead of replaying full histories
