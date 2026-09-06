---
slug: "arrow-js"
name: "ArrowJS"
description: "Agent-era UI framework with WASM sandboxes for safe generated interfaces"
category: "agent-ui-frontends"
tags:
  - "ui-framework"
  - "wasm-sandbox"
  - "reactive-ui"
websiteUrl: "https://arrow-js.com/"
githubUrl: "https://github.com/standardagents/arrow-js"
logoUrl: "https://www.google.com/s2/favicons?sz=64&domain_url=https%3A%2F%2Farrow-js.com%2F"
ogImageUrl: "https://assets.arrow-js.com/og.webp?2"
pricing: "open-source"
classification: "agent-enabling"
entityType: "software-source-code"
developerName: "Standard Agents"
docsUrl: "https://arrow-js.com/api/"
licenseUrl: "https://github.com/standardagents/arrow-js/blob/main/LICENSE.txt"
interfaces:
  - "JavaScript and TypeScript packages"
  - "Vite project scaffolder"
  - "agent skill"
deploymentModes:
  - "client-side browser runtime"
  - "server-side rendering and hydration"
  - "QuickJS and WebAssembly sandbox"
evidenceSources:
  - title: "ArrowJS repository — framework packages and agent tooling"
    url: "https://github.com/standardagents/arrow-js"
    claim: "The maintained repository documents the reactive core, framework, SSR, hydration, QuickJS/WASM sandbox, Vite integration, project scaffolder, and agent skill."
    accessedAt: "2026-09-03"
    sourceType: "official-repository"
  - title: "ArrowJS API reference — SSR, hydration, and sandbox security model"
    url: "https://arrow-js.com/api/"
    claim: "The API reference defines server rendering and hydration flows and says sandboxed code runs in QuickJS/WASM while the host mounts trusted DOM and forwards sanitized events."
    accessedAt: "2026-09-03"
    sourceType: "official-documentation"
  - title: "ArrowJS license — MIT"
    url: "https://github.com/standardagents/arrow-js/blob/main/LICENSE.txt"
    claim: "The ArrowJS repository is published under the MIT License."
    accessedAt: "2026-09-03"
    sourceType: "official-license"
verificationLevel: "documentation-reviewed"
classificationRationaleMd: "ArrowJS provides UI primitives, rendering packages, sandboxing, and an agent skill that help a separate coding agent generate application interfaces; it enables agent-authored UI rather than operating as an autonomous agent."
bestForMd: "Teams that want a small reactive DOM framework legible to coding agents, with an upgrade path from no-build browser use to SSR, hydration, and isolated execution of generated Arrow components."
limitationsMd: "A sandbox source bundle must contain exactly one main.ts or main.js entry file. Host bridge modules deliberately expose selected host functions to sandboxed code, so integrators still need to keep that bridge narrow and trusted."
unknownsMd: "The first-party security model explains the isolation boundary, but this review did not find or validate an independent security audit or benchmark of generated-code containment."
sortOrder: 30
---

ArrowJS is a tiny UI framework built for coding agents and agent-generated interfaces. The current project emphasizes direct DOM rendering, no-build-step core usage, and WebAssembly sandboxes that isolate generated component logic without forcing the UI into iframes or pre-defined component sets.

## Features

- Tiny reactive UI runtime built around JavaScript modules, template literals, and the DOM
- No-build-step core usage plus a larger framework stack for SSR, hydration, and async components
- QuickJS and WebAssembly sandbox runtime for executing Arrow code outside the host window realm
- Type-safe component model designed to stay legible to coding agents
- Tooling for playground use, API docs, framework packages, and agent setup flows

## So agents can...

- Generate inline interfaces that render directly into an app without inventing a full frontend stack
- Run agent-produced UI logic inside sandboxes while keeping the host environment safer
- Ship lightweight interactive surfaces quickly, then scale up to SSR and hydration when needed
