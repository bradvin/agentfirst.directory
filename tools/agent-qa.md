---
slug: "agent-qa"
name: "Agent QA"
description: "Autonomous QA agent for natural-language web and mobile application testing"
category: "agent-testing-qa"
tags:
  - "application-testing"
  - "browser"
  - "mcp"
  - "mobile"
websiteUrl: "https://vostride.com/docs/agent-qa"
githubUrl: "https://github.com/vostride/agent-qa"
logoUrl: "https://vostride.com/brand/vostride-colored-logo.svg"
ogImageUrl: "https://raw.githubusercontent.com/vostride/agent-qa/main/docs/assets/readme-banner.png"
pricing: "source-available"
classification: "agent-native"
entityType: "software-application"
developerName: "Vostride"
docsUrl: "https://vostride.com/docs/agent-qa"
licenseUrl: "https://github.com/vostride/agent-qa/blob/main/LICENSE.md"
interfaces:
  - "command-line interface"
  - "web dashboard"
  - "MCP server"
  - "agent skills"
deploymentModes:
  - "local"
  - "continuous integration"
evidenceSources:
  - title: "Agent QA Quickstart — runtimes, models, and local installation"
    url: "https://vostride.com/docs/agent-qa/quickstart"
    claim: "The quickstart documents local npm installation, web and mobile targets, multimodal-model requirements, CLI and dashboard operation, and optional Docker-isolated hooks."
    accessedAt: "2026-09-03"
    sourceType: "official-documentation"
  - title: "Agent QA MCP documentation — agent authoring and run tools"
    url: "https://vostride.com/docs/agent-qa/mcp"
    claim: "Agent QA exposes HTTP and stdio MCP servers with tools for authoring tests, queuing runs, inspecting evidence, and classifying failures."
    accessedAt: "2026-09-03"
    sourceType: "official-documentation"
  - title: "Agent QA product page — features and free local use"
    url: "https://vostride.com/"
    claim: "Vostride describes natural-language web, Android, and iOS tests, self-healing execution, file-backed memory, and free installation with model inference as the running cost."
    accessedAt: "2026-09-03"
    sourceType: "official-product-page"
  - title: "Agent QA license — FSL-1.1-ALv2"
    url: "https://github.com/vostride/agent-qa/blob/main/LICENSE.md"
    claim: "The current release uses FSL-1.1-ALv2, excludes competing use, and grants an Apache-2.0 future license after two years."
    accessedAt: "2026-09-03"
    sourceType: "official-license"
verificationLevel: "documentation-reviewed"
classificationRationaleMd: "Agent QA uses a model-driven execution loop to observe applications, plan and perform test actions, recover from UI drift, and retain execution memory, making the agent itself central to the product."
bestForMd: "Teams that want reviewable natural-language end-to-end tests across web, Android, or iOS and want coding agents to author, run, and triage those tests through CLI, dashboard, MCP, or skills."
limitationsMd: "The CLI and dashboard require a JavaScript runtime and configured LLM; normal visual testing needs a multimodal model. Docker is required for isolated hooks, and mobile runs also depend on the relevant Appium and platform tooling."
unknownsMd: "The first-party pages describe self-healing and usage savings, but this review did not find or validate an independent accuracy, reliability, or cost benchmark. Model and device-provider charges are outside Agent QA."
---

Agent QA is an autonomous QA agent that authors, runs, and troubleshoots natural-language tests for web and mobile applications. It exposes CLI, MCP, and agent-skill interfaces, and uses execution memory to adapt tests when an application's UI changes.

The current release is source-available under FSL-1.1-ALv2. That license permits copying, use, modification, and redistribution for purposes other than a competing use, and each release converts to Apache-2.0 after two years. Configured model, browser, or device providers may charge separately. Source and license terms are available in the [Agent QA repository](https://github.com/vostride/agent-qa).

## So agents can...

- Author and run web or mobile application tests from natural-language instructions
- Invoke QA workflows through MCP or reusable agent skills
- Reuse execution memory when adapting tests to changed interfaces
