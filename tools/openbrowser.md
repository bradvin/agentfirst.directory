---
slug: "openbrowser"
name: "Open Browser"
description: "Open-source autonomous browser framework for agent web tasks"
category: "web-browser-interaction-tools"
tags:
  - "browser"
  - "automation"
  - "playwright"
websiteUrl: "https://github.com/ntegrals/openbrowser"
githubUrl: "https://github.com/ntegrals/openbrowser"
logoUrl: "https://www.google.com/s2/favicons?sz=64&domain_url=https%3A%2F%2Fgithub.com%2Fntegrals%2Fopenbrowser"
ogImageUrl: "https://opengraph.githubassets.com/16a4683e8a8a1b1b11569d00797418535e5517f10efd77ed953a12fc51717198/ntegrals/openbrowser"
pricing: "open-source"
classification: "agent-native"
entityType: "software-source-code"
developerName: "ntegrals"
docsUrl: "https://github.com/ntegrals/openbrowser/blob/master/README.md"
licenseUrl: "https://github.com/ntegrals/openbrowser/blob/master/LICENSE"
interfaces:
  - "TypeScript library"
  - "command-line interface"
  - "interactive REPL"
deploymentModes:
  - "application-embedded"
  - "local"
  - "constrained local sandbox"
evidenceSources:
  - title: "Open Browser repository — framework, providers, and browser controls"
    url: "https://github.com/ntegrals/openbrowser"
    claim: "The maintained repository documents a TypeScript autonomous-browser framework built on Playwright, with natural-language runs, an interactive REPL, persistent sessions, and OpenAI, Anthropic, and Google model support through the Vercel AI SDK."
    accessedAt: "2026-09-03"
    sourceType: "official-repository"
  - title: "Open Browser README — resource and navigation constraints"
    url: "https://github.com/ntegrals/openbrowser/blob/master/README.md"
    claim: "The README documents sandbox CPU, memory, timeout, and allowed-domain controls, while the default agent configuration leaves allowed URLs unrestricted unless an operator configures restrictions."
    accessedAt: "2026-09-03"
    sourceType: "official-documentation"
  - title: "Open Browser repository license — MIT"
    url: "https://github.com/ntegrals/openbrowser/blob/master/LICENSE"
    claim: "The maintained Open Browser repository is published under the MIT License."
    accessedAt: "2026-09-03"
    sourceType: "official-license"
verificationLevel: "documentation-reviewed"
classificationRationaleMd: "Open Browser supplies an autonomous browser loop that interprets tasks, observes pages, and chooses browser actions, so it is agent-native rather than only a passive automation library."
bestForMd: "TypeScript projects that need an agent to complete multi-step browser tasks with Playwright, either as an embedded library, command-line run, or interactive debugging session."
limitationsMd: "A model-provider API key and local browser runtime are required. URL access is unrestricted by default, so operators handling untrusted tasks must configure domain restrictions and appropriate resource, credential, and network isolation."
unknownsMd: "The repository describes the framework as production-ready, but the reviewed first-party material does not provide independent reliability, security, or task-success benchmarks."
sortOrder: 30
---

Open Browser is an open-source TypeScript framework for autonomous web browsing. The current project centers on letting agents click, type, navigate, and extract data on live websites, with built-in support for OpenAI, Anthropic, and Google models plus a sandbox package for constrained execution.

## Features

- Playwright-based browser control for clicking, typing, navigation, extraction, and screenshots
- Natural-language agent runs that translate tasks into multi-step browser actions
- Interactive REPL for debugging and exploring live browser sessions
- Multi-model support through OpenAI, Anthropic, and Google providers
- Optional sandboxed execution with resource limits, monitoring, and allowed-domain controls

## So agents can...

- Complete web tasks on dynamic sites without writing a full browser script for each flow
- Drop into an interactive browser session to inspect or recover a failing task
- Run browser automation inside constrained environments with timeouts and domain restrictions
