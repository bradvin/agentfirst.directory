---
slug: "sandbox0"
name: "Sandbox0"
description: "Managed cloud sandboxes with persistent RootFS and on-demand compute for AI agents"
category: "agent-compute-sandbox-environments"
tags:
  - "sandboxes"
  - "persistent-filesystems"
  - "cloud-compute"
websiteUrl: "https://sandbox0.ai/"
pricing: "paid"
classification: "agent-enabling"
entityType: "service"
developerName: "Sandbox0"
docsUrl: "https://sandbox0.ai/docs/sandbox"
pricingUrl: "https://sandbox0.ai/pricing"
interfaces:
  - "REST API"
  - "Python SDK"
  - "JavaScript/TypeScript SDK"
  - "Go SDK"
  - "s0 CLI"
deploymentModes:
  - "managed cloud"
evidenceSources:
  - title: "Sandbox0 — agent sandbox product overview"
    url: "https://sandbox0.ai/"
    claim: "Sandbox0 describes isolated cloud computers for AI agents, a persistent writable RootFS that grows online on supported templates, and compute that can be paused and resumed on demand."
    accessedAt: "2026-11-06"
    sourceType: "official-product-page"
  - title: "Sandbox0 Cloud pricing"
    url: "https://sandbox0.ai/pricing"
    claim: "Sandbox0 lists compute at $0.015 per GiB-hour, billed by the second, and retained incremental storage at $0.02 per GiB-month; paused sandboxes incur storage charges only."
    accessedAt: "2026-11-06"
    sourceType: "official-pricing"
  - title: "Pause and Resume — Sandbox Docs"
    url: "https://sandbox0.ai/docs/sandbox/pause-resume"
    claim: "The default filesystem-only pause preserves the committed writable RootFS and sandbox identity, then resumes with fresh processes; retaining supported process state requires explicit experimental memory pause and resume."
    accessedAt: "2026-11-06"
    sourceType: "official-documentation"
  - title: "Deployment Options — Sandbox Docs"
    url: "https://sandbox0.ai/docs/sandbox/deployment"
    claim: "Sandbox0 Cloud is the supported service; self-hosting is discontinued, BYOC is planned but unavailable, current runtime development is closed source, and the s0 CLI and SDKs remain open source."
    accessedAt: "2026-11-06"
    sourceType: "official-documentation"
classificationRationaleMd: "Sandbox0 provides isolated, persistent compute that an agent or agent application can provision and control through documented APIs, SDKs, and a CLI. It enables agent execution workflows but is not itself the planning agent."
bestForMd: "Agent products that need a managed cloud computer with a persistent writable filesystem, programmatic command and file operations, and the ability to release compute between tasks."
limitationsMd: "The supported deployment is Sandbox0 Cloud. Self-hosting is discontinued and BYOC is not available. Default pause and resume preserves files but starts fresh processes; process-state retention requires the explicit experimental memory mode. Retained storage remains billable while paused."
unknownsMd: "The product documentation describes its isolation and persistence behavior; this listing does not independently benchmark performance or availability."
---

Sandbox0 is a managed cloud runtime for isolated computers used by AI agents. Agents and agent applications can create and operate sandboxes through the API, SDKs, and `s0` CLI. A sandbox keeps its committed writable RootFS when compute is paused, and supported growth-enabled templates can expand the filesystem online as it fills.

## So agents can...

- Run code and install tools in an isolated cloud environment
- Keep system configuration, dependencies, and workspace files across successful filesystem checkpoints
- Release compute between tasks and resume the same sandbox when work returns
- Read persistent files while compute is paused; filesystem-only pauses also support file changes through the Files API
