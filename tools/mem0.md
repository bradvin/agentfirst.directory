---
slug: "mem0"
name: "Mem0"
description: "Persistent memory layer for agents, copilots, and coding tools"
category: "long-term-memory-state-management"
tags:
  - "memory"
  - "persistence"
  - "context"
websiteUrl: "https://mem0.ai"
githubUrl: "https://github.com/mem0ai/mem0"
pricing: "freemium"
classification: "agent-enabling"
entityType: "service"
developerName: "Mem0"
docsUrl: "https://docs.mem0.ai/"
pricingUrl: "https://mem0.ai/pricing"
licenseUrl: "https://github.com/mem0ai/mem0/blob/main/LICENSE"
interfaces:
  - "REST API"
  - "Python SDK"
  - "JavaScript SDK"
  - "CLI"
deploymentModes:
  - "hosted"
  - "self-hosted"
  - "in-process library"
evidenceSources:
  - title: "Mem0 Platform overview"
    url: "https://docs.mem0.ai/platform/overview"
    claim: "Mem0 documents a managed memory service for agents with persistent memories, hosted vector and graph services, reranking, audit logs, and workspace governance."
    accessedAt: "2026-09-03"
    sourceType: "official-documentation"
  - title: "Mem0 Platform versus open source"
    url: "https://docs.mem0.ai/platform/platform-vs-oss"
    claim: "Mem0 documents hosted and self-managed options with REST, Python, and JavaScript interfaces and identifies the open-source implementation as Apache-2.0."
    accessedAt: "2026-09-03"
    sourceType: "official-documentation"
  - title: "Mem0 source repository"
    url: "https://github.com/mem0ai/mem0"
    claim: "The maintained repository provides an embeddable library, a self-hosted server, a cloud-platform path, and a CLI for adding and searching memories."
    accessedAt: "2026-09-03"
    sourceType: "official-repository"
  - title: "Mem0 pricing"
    url: "https://mem0.ai/pricing"
    claim: "Mem0 publishes free, fixed-price, and custom managed-platform plans with request allowances."
    accessedAt: "2026-09-03"
    sourceType: "official-pricing"
  - title: "Mem0 license"
    url: "https://github.com/mem0ai/mem0/blob/main/LICENSE"
    claim: "The Mem0 open-source repository is licensed under Apache-2.0."
    accessedAt: "2026-09-03"
    sourceType: "official-license"
classificationRationaleMd: "Mem0 is a memory layer that agents and applications integrate for persistence and retrieval; it augments an agent's context rather than serving as the primary autonomous agent."
bestForMd: "Agents and AI applications that need reusable user preferences, project context, or other memories across conversations and sessions."
limitationsMd: "The self-managed option makes the operator responsible for vector-database, model-provider, and hosting costs and for configuring and maintaining that infrastructure."
verificationLevel: "documentation-reviewed"
logoUrl: "https://www.google.com/s2/favicons?sz=64&domain_url=https%3A%2F%2Fmem0.ai"
ogImageUrl: "https://framerusercontent.com/images/Mm4DtRfHMURyBy4FmfV4AFt7OQ.png"
sortOrder: 10
---

Mem0 is a persistent memory layer for AI applications and coding agents. Its current product surface spans hosted memory APIs plus OpenMemory, an MCP-compatible memory layer that captures preferences, organizes them by type, and retrieves project-scoped context on demand.

## Features

- OpenMemory MCP support for coding agents and MCP-compatible clients
- Automatic capture of preferences, patterns, and project setup details
- Project-scoped retrieval so the right memory is injected for the current repo or workflow
- Memory typing, tagging, editing, versioning, and access logs for governance
- Advanced retrieval options including graph memory and criteria-based reranking

## So agents can...

- Remember user preferences, repo conventions, and prior decisions across sessions
- Pull relevant semantic or episodic context before answering repeated or long-running tasks
- Reduce repetitive prompting by reusing stored implementation notes, troubleshooting history, and project summaries
