---
slug: "jet-browser"
name: "Jet Browser"
description: "Self-hosted WPE WebKit runtime for isolated browser-agent sessions"
seoTitle: "Jet Browser: Isolated WPE Runtime for Browser Agents"
seoDescription: "Inspect Jet Browser's WPE WebKit runtime for agent-controlled sessions: native input, DOM state, screenshots, and caller-owned browser lifecycle."
agentSummary: "Jet Browser provides an open-source WPE WebKit execution layer for agent systems that need one browser session per container, ordered JSONL control, versioned tool schemas, native input, DOM state, and fresh screenshots. The caller supplies the model, planning loop, lifecycle supervision, network policy, and any hosted control plane."
reviewedBy: "foo-bender"
reviewedAt: "2026-10-12"
category: "web-browser-interaction-tools"
tags:
  - "browser"
  - "wpe-webkit"
  - "container-isolation"
  - "jsonl"
  - "mcp"
  - "native-input"
websiteUrl: "https://masaka-ai.vercel.app/jet-browser/"
githubUrl: "https://github.com/masakaai/jet-browser"
pricing: "open-source"
classification: "agent-enabling"
entityType: "software-source-code"
developerName: "MASAKA"
docsUrl: "https://github.com/masakaai/jet-browser#readme"
licenseUrl: "https://github.com/masakaai/jet-browser/blob/main/LICENSE"
interfaces:
  - "ordered JSONL runtime protocol"
  - "JavaScript SDK and tool declarations"
  - "bounded MCP runtime verifier"
  - "GitHub Action"
deploymentModes:
  - "self-hosted Docker"
  - "application-embedded"
  - "CI through GitHub Actions"
verificationLevel: "documentation-reviewed"
evidenceSources:
  - title: "Jet Browser README at the reviewed revision"
    url: "https://github.com/masakaai/jet-browser/blob/ec87212cf20997d555232214980810cff345bb42/README.md"
    claim: "The maintained repository documents the WPE WebKit and Rust runtime, one isolated browser session per container, ordered JSONL control, native input, DOM and screenshot evidence, and the boundary that Jet Browser does not include a model, agent loop, hosted control plane, or existing Chrome-profile attachment."
    accessedAt: "2026-10-12"
    sourceType: "official-repository"
  - title: "Jet Browser agent tool catalog"
    url: "https://github.com/masakaai/jet-browser/blob/ec87212cf20997d555232214980810cff345bb42/docs/agent-tools.md"
    claim: "The tool catalog documents versioned browser declarations, input validation, tab and interaction operations, a smaller default toolset, and caller-owned browser lifecycle and framework adaptation."
    accessedAt: "2026-10-12"
    sourceType: "official-documentation"
  - title: "Jet Browser v0.9.0 release"
    url: "https://github.com/masakaai/jet-browser/releases/tag/v0.9.0"
    claim: "The release publishes native linux/amd64 and linux/arm64 OCI manifests and records smoke verification of runtime startup, native input, DOM state, PNG capture, and cleanup on both native runner architectures."
    accessedAt: "2026-10-12"
    sourceType: "official-release-notes"
  - title: "Jet Browser Apache License 2.0"
    url: "https://github.com/masakaai/jet-browser/blob/ec87212cf20997d555232214980810cff345bb42/LICENSE"
    claim: "The reviewed source revision is published under the Apache License 2.0."
    accessedAt: "2026-10-12"
    sourceType: "official-license"
classificationRationaleMd: "Jet Browser materially enables an external agent harness by supplying isolated browser execution, versioned tool schemas, native interaction, DOM state, and screenshot evidence while leaving the model, planning loop, framework adapter, and lifecycle supervision to the caller. It is agent-enabling rather than an autonomous browser agent."
inclusionRationaleMd: "Its documented browser runtime supports multi-step navigation, pointer and keyboard input, scrolling, tab lifecycle, semantic inspection, and visual evidence inside an explicit per-container session boundary; the value is substantive browser execution for agent workflows rather than generic API compatibility."
bestForMd: "Self-hosted agent systems and deterministic tests that need a disposable WPE WebKit session, an ordered machine protocol, native input, semantic state, and fresh screenshot evidence without adopting a model or hosted browser control plane."
notBestForMd: "Teams that require an existing signed-in Chrome profile, Chromium extensions or CDP compatibility, a managed cloud browser fleet, stealth or CAPTCHA-solving services, or a bundled model-driven agent loop."
limitationsMd: "Docker is required for the published runtime, and source builds also require Node.js 24+. WPE WebKit is not Chromium and does not provide Chromium-only extensions, policies, or CDP contracts. The caller owns network policy, credentials, profiles, downloads, timeouts, and cleanup; evaluate and imported profile data should be treated as privileged. The published MCP integration is a bounded runtime verifier rather than a general remote browser provider."
unknownsMd: "The reviewed first-party runtime benchmark uses a local deterministic fixture and does not establish public-site task success, anti-bot or CAPTCHA performance, stealth, model accuracy, long-running stability, concurrent throughput, or hosted network latency."
---

Jet Browser is an Apache-2.0 browser execution runtime that packages WPE WebKit and a Rust WebDriver bridge behind an ordered JSONL protocol. It keeps browser execution separate from the model and agent loop.

## So agents can...

- run a disposable browser session with an explicit container lifecycle and resource boundary
- navigate, click, type, scroll, and manage tabs through versioned tool declarations
- inspect semantic DOM state and capture a fresh screenshot from the same runtime used for native input
- switch models, planning loops, or orchestration frameworks without changing the browser protocol
