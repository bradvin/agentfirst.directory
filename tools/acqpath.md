---
slug: "acqpath"
name: "AcqPath"
description: "Signed source-rights observations for AI input, RAG, indexing, training, and search workflows."
agentSummary: "AcqPath gives agents a machine-readable evidence check before using supported public web sources. An agent can send a resource and intended purpose through MCP or HTTP and receive a signed, timestamped observation of supported source-side rights declarations. The observation is evidence only: it is not a licence, ownership determination, or legal clearance."
seoTitle: "AcqPath: Source-Rights Evidence for AI Agents"
seoDescription: "AcqPath lets agents obtain signed, timestamped source-rights observations before AI input, RAG, indexing, training, or search workflows."
category: "api-access-orchestration-layers"
tags: ["mcp", "provenance", "rights", "rag", "x402"]
websiteUrl: "https://getacqpath.com"
githubUrl: "https://github.com/reflectme-source/acqpath-distribution"
pricing: "paid"
classification: "agent-enabling"
entityType: "web-api"
developerName: "AcqPath"
docsUrl: "https://developers.getacqpath.com"
interfaces: ["REST API", "MCP", "x402"]
deploymentModes: ["hosted"]
classificationRationaleMd: "AcqPath materially enables agent-first ingestion and retrieval workflows by exposing source-rights observations through MCP and HTTP before content is used."
inclusionRationaleMd: "The service provides a machine-callable evidence layer that agents can query before using supported public web sources, returning signed and timestamped observations that downstream policy can evaluate."
bestForMd: "Agent and RAG workflows that need a machine-readable record of supported source-side AI-use or rights declarations before ingestion, indexing, training, search, or AI input."
notBestForMd: "Obtaining a licence, determining copyright ownership, proving actual downstream use, bypassing access controls, or replacing legal review."
limitationsMd: "Coverage is limited to supported machine-readable declaration sources and reviewed domains. An UNKNOWN observation is not permission. AcqPath reports what was observed and does not determine the legal effect of that observation."
unknownsMd: "No claim is made that every public source exposes a machine-readable declaration or that an observation remains unchanged after its timestamp."
evidenceSources:
  - title: "AcqPath developer documentation"
    url: "https://developers.getacqpath.com"
    claim: "Documents AcqPath's machine interfaces for source-rights observations, including MCP and paid x402 access."
    accessedAt: "2026-10-05"
    sourceType: "official-documentation"
  - title: "AcqPath distribution repository"
    url: "https://github.com/reflectme-source/acqpath-distribution"
    claim: "Official public distribution repository for AcqPath integration and discovery materials."
    accessedAt: "2026-10-05"
    sourceType: "official-repository"
---

AcqPath is a hosted evidence service for observing supported machine-readable source-side rights and AI-use declarations. It separates the observed evidence from the downstream policy or legal decision.

## So agents can...

- Check a supported public source before using it for AI input, RAG ingestion, indexing, training, or search.
- Receive a signed, timestamped observation that can be attached to an audit or provenance record.
- Re-check a source later and compare observations for declaration drift.

AcqPath does not grant permission or a licence. Its output is an observation for another policy, governance, or review layer to interpret.
