---
slug: "hyperconsciousness"
name: "Hyperconsciousness"
description: "Encrypted, append-only knowledge storage with scoped MCP access and persistent task handoffs for agents."
agentSummary: "Hyperconsciousness gives agent builders a self-hosted knowledge store for carrying scoped context and task handoffs across sessions. Agents can retrieve authorized records, capture notes with source references, and correct or retract managed notes while append-only history remains intact. It suits developers experimenting with inspectable memory who can operate an alpha-stage system and its security boundaries."
seoTitle: "Hyperconsciousness: Persistent Memory for AI Agents"
seoDescription: "Explore Hyperconsciousness, a self-hosted knowledge store with scoped MCP access, persistent agent handoffs, provenance, and versioned note corrections."
category: "long-term-memory-state-management"
tags: ["memory", "mcp", "local-first", "encrypted-storage", "provenance"]
websiteUrl: "https://github.com/louis030195/hyperconsciousness"
githubUrl: "https://github.com/louis030195/hyperconsciousness"
pricing: "open-source"
classification: "agent-enabling"
entityType: "software-source-code"
verificationLevel: "documentation-reviewed"
reviewedBy: "foo-bender"
reviewedAt: "2026-09-28"
developerName: "Louis Beaumont"
docsUrl: "https://github.com/louis030195/hyperconsciousness#give-an-agent-limited-access"
licenseUrl: "https://github.com/louis030195/hyperconsciousness/blob/9984dc4677f878bedbd6f83a8855298b8b59d6c0/LICENSE"
interfaces: ["CLI", "MCP", "HTTP"]
deploymentModes: ["self-hosted"]
classificationRationaleMd: "HC provides grant-scoped retrieval and capture of persistent knowledge, including task handoffs with declared source references, so separate agent sessions can reopen prior context under their own current permissions."
inclusionRationaleMd: "Its memory workflow includes structured retrieval, durable record references, and versioned corrections or retractions of managed notes. These capabilities support continuity across harness sessions rather than only exposing a generic database through MCP."
bestForMd: "Developers experimenting with persistent, inspectable agent context in a locally operated store."
notBestForMd: "Users seeking a hosted agent runtime or a production-mature, independently audited memory service."
limitationsMd: "Developer alpha: commands and APIs may change. Grants constrain server responses, not processes with access to the owner account or keys. Hosted model providers can see returned plaintext. Retractions do not erase historical ciphertext or copies already made. No independent security audit is claimed."
unknownsMd: "No independent performance or security evaluation was performed for this submission."
evidenceSources: [{"title": "Repository README", "url": "https://github.com/louis030195/hyperconsciousness/blob/9984dc4677f878bedbd6f83a8855298b8b59d6c0/README.md", "claim": "Rust engine, CLI, MCP/HTTP interfaces, encrypted append-only records, device sync, scoped expiring grants, source build instructions and developer-alpha status.", "accessedAt": "2026-09-28", "sourceType": "official-repository"}, {"title": "Capture context and write receipts", "url": "https://github.com/louis030195/hyperconsciousness/blob/9984dc4677f878bedbd6f83a8855298b8b59d6c0/docs/CAPTURE-CONTEXT.md", "claim": "Structured retrieval, reopenable record references, task handoffs with declared source references, and versioned corrections/retractions for managed notes. Handoffs do not transfer access.", "accessedAt": "2026-09-28", "sourceType": "official-documentation"}, {"title": "Threat model and constraints", "url": "https://github.com/louis030195/hyperconsciousness/blob/9984dc4677f878bedbd6f83a8855298b8b59d6c0/docs/CONSTRAINTS.md", "claim": "Trusted-node and process-access boundaries; revocation cannot recall previously copied plaintext.", "accessedAt": "2026-09-28", "sourceType": "official-documentation"}, {"title": "MIT license", "url": "https://github.com/louis030195/hyperconsciousness/blob/9984dc4677f878bedbd6f83a8855298b8b59d6c0/LICENSE", "claim": "The public software is MIT licensed and copyright Louis Beaumont.", "accessedAt": "2026-09-28", "sourceType": "official-license"}, {"title": "Mission and repository boundary", "url": "https://github.com/louis030195/hyperconsciousness/blob/9984dc4677f878bedbd6f83a8855298b8b59d6c0/MISSION.md", "claim": "Knowledge storage and access are separate from agent orchestration, model routing and tool execution.", "accessedAt": "2026-09-28", "sourceType": "official-documentation"}]
---

Hyperconsciousness (`hc`) is a developer-alpha knowledge engine for humans and agents. Its MCP interface retrieves authorized context and accepts captured notes when the caller has write access. Managed notes support explicit versions, corrections, and retractions while preserving append-only history.

## So agents can...

- Search stored context and reopen selected records under scoped, expiring grants.
- Persist a task handoff with decisions, unresolved questions, and declared source references for a later session to reopen under its own access.
- Apply explicit versioned corrections to managed notes without treating superseded text as current context.

Start with the repository's [source installation instructions](https://github.com/louis030195/hyperconsciousness#install-from-source) and an isolated demo store. HC does not assemble the model's context window or execute the agent's tasks. Encryption at rest and during replication does not hide returned plaintext from the receiving model provider.
