---
slug: "tablethis"
name: "TableThis"
description: "Shared tables and Markdown docs with scoped, audited access for AI assistants"
seoTitle: "TableThis: Shared Tables and Docs for AI Agent Workflows"
seoDescription: "Give AI assistants shared tables and Markdown documents through an OAuth MCP connector, with scoped permissions, change proposals, and audited updates."
agentSummary: "TableThis gives people and connected AI assistants a shared workspace of typed tables and Markdown documents. Agents can query records, search documents, and propose or apply changes according to granted permissions. Change history, conflict checks, and separate review and apply permissions support collaborative internal-app workflows without treating every connected client as an unrestricted writer."
category: "storage-media-hosting"
tags:
  - "mcp"
  - "shared-data"
  - "documents"
  - "permissions"
  - "human-agent-collaboration"
websiteUrl: "https://www.tablethis.ai/"
ogImageUrl: "https://app.tablethis.ai/images/og-home-8a9a5d8686cc8baf9897563b4b79b67e.png?vsn=d"
ogImageWidth: 1200
ogImageHeight: 630
pricing: "free"
classification: "agent-enabling"
entityType: "web-api"
developerName: "Second Coffee, LLC"
docsUrl: "https://www.tablethis.ai/docs"
interfaces:
  - "Remote MCP connector over HTTP with OAuth"
  - "Web application"
deploymentModes:
  - "hosted"
evidenceSources:
  - title: "TableThis connector setup and usage"
    url: "https://www.tablethis.ai/docs"
    claim: "Documents the hosted MCP URL, OAuth setup, workspace-scoped reads, table and document operations, audited writes with conflict checks, proposal/review/apply permissions, and restrictions on scheduled clients."
    accessedAt: "2026-10-17"
    sourceType: "official-documentation"
  - title: "TableThis product overview"
    url: "https://www.tablethis.ai/"
    claim: "Describes shared typed tables and Markdown documents for AI-built internal apps and shared company knowledge; advertises a free start with 100 MB of storage and no card."
    accessedAt: "2026-10-17"
    sourceType: "official-product-page"
  - title: "TableThis hosted-service terms"
    url: "https://www.tablethis.ai/terms"
    claim: "Identifies Second Coffee, LLC as operator and says the service is currently offered without charge, subject to usage limits and possible future paid plans."
    accessedAt: "2026-10-17"
    sourceType: "official-legal"
  - title: "TableThis privacy policy"
    url: "https://www.tablethis.ai/privacy"
    claim: "Explains workspace content processing, third-party embedding and AI providers, connected-client responsibilities, and retention including 30-day Free-plan document history and backup deletion windows."
    accessedAt: "2026-10-17"
    sourceType: "official-legal"
verificationLevel: "documentation-reviewed"
reviewedBy: "foo-bender"
reviewedAt: "2026-10-17"
classificationRationaleMd: "TableThis materially enables agents to work on shared records and documents across clients while enforcing workspace membership, OAuth scopes, conflict checks, and attributable changes. The qualifying value is its governed shared-data workflow, not merely the presence of an MCP endpoint."
inclusionRationaleMd: "The product owns persistent shared tables and documents together with access control, audited mutations, and proposal/review/apply workflows. Storage & Media is the closest existing category because agents persist, retrieve, and update shared documents and records with material permission and provenance controls; this is not a claim of a dedicated agent-memory abstraction."
bestForMd: "Teams building internal apps or shared knowledge workflows with AI assistants that need the same records and documents, scoped access, and reviewable changes."
notBestForMd: "Teams seeking an autonomous agent orchestrator, a dedicated extracted-memory engine, or guaranteed support for regulated data and enterprise compliance requirements."
limitationsMd: "An OAuth connection and appropriate workspace membership are required. Approval is not universal: clients granted immediate-write permissions can edit directly; proposal, review, and apply permissions are distinct. Scheduled or always-on clients are documented as suggest-only. The current free service is usage-limited; the homepage advertises 100 MB storage. Hosted search sends document, record, and query text to an embedding provider, and requested AI features may use third-party model providers; connected AI clients have their own privacy terms. Free-plan document revision history and trashed documents/conflicts have 30-day retention terms, and deleted information may persist in backups for up to 30 days. Terms prohibit HIPAA-regulated PHI without a separate agreement and payment-card data."
unknownsMd: "No authenticated end-to-end tool execution, security audit, performance benchmark, or regulated-data certification was established for this listing. Hosted-service documentation does not establish a public backend source license or self-hosted feature parity."
---

TableThis is a shared backend for typed tables and Markdown documents used by people, internal apps, and connected AI assistants. Its hosted MCP connector is available at https://app.tablethis.ai/mcp. Agents operate on named workspaces under the user's permissions; mutations are audited and use conflict checks rather than silently overwriting newer values.

## So agents can...

- query shared tables and search or read the documents behind an internal workflow
- preserve records and company knowledge across different assistants and human teammates
- propose changes for review, or edit directly only when the relevant permission is granted
- inspect change history and propose or apply undo operations under the documented permission model
