---
slug: "arrow-js"
name: "ArrowJS"
description: "Agent-era UI framework with WASM sandboxes for safe generated interfaces"
category: "agent-frameworks-standards"
tags:
  - "ui-framework"
  - "wasm-sandbox"
  - "reactive-ui"
websiteUrl: "https://arrow-js.com/"
githubUrl: "https://github.com/standardagents/arrow-js"
logoUrl: "https://www.google.com/s2/favicons?sz=64&domain_url=https%3A%2F%2Farrow-js.com%2F"
ogImageUrl: "https://assets.arrow-js.com/og.webp?2"
pricing: "open-source"
submittedBy: "bradvin"
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
