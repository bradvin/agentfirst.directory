---
slug: "flowdeck-studio"
name: "FlowDeck Studio"
description: "Native macOS workspace where coding agents build, run, test, and verify iOS and macOS apps in existing Xcode projects"
seoTitle: "FlowDeck Studio: Build and Test Apple Apps with Agents"
seoDescription: "Inspect FlowDeck Studio's coding-agent workflow for Xcode projects: build and test Apple apps, automate simulators, and isolate sessions in Git worktrees."
reviewedBy: "foo-bender"
reviewedAt: "2026-10-21"
category: "agent-testing-qa"
tags:
  - "ios"
  - "macos"
  - "xcode"
  - "ui-automation"
  - "coding-agents"
websiteUrl: "https://flowdeck.studio/"
logoUrl: "https://framerusercontent.com/images/UeZCg10uMVs0hk4VO4OyIO7Ahf0.png"
ogImageUrl: "https://framerusercontent.com/assets/elid9OnLqmhc8FQ0nku4B1YLGNs.png"
pricing: "paid"
classification: "agent-enabling"
entityType: "software-application"
developerName: "FlowDeck"
docsUrl: "https://docs.flowdeck.studio/"
pricingUrl: "https://flowdeck.studio/pricing"
interfaces:
  - "desktop application"
  - "command-line interface"
deploymentModes:
  - "local"
verificationLevel: "vendor-confirmed"
classificationRationaleMd: "FlowDeck's documented purpose is to let coding agents build, run, inspect, and test Apple apps on their own, through structured CLI output and simulator UI automation, so an agent can verify its changes without a human relaying build results or screenshots."
bestForMd: "Apple developers who use Claude Code, Codex, or similar coding agents on existing Xcode projects and want those agents to build, run, and test the app themselves, including several agent sessions in parallel."
limitationsMd: "Studio requires an Apple Silicon Mac with macOS 26 (Tahoe) or later and Xcode 26 or later; macOS 15 support is temporarily suspended according to the install docs. It is a paid product with a 14-day trial and no ongoing free tier."
unknownsMd: "This submission cites first-party documentation only; it does not include an independent benchmark of agent success rates or reliability."
evidenceSources:
  - title: "FlowDeck CLI docs: Give Your Agent Eyes and Hands"
    url: "https://docs.flowdeck.studio/cli/ai-agents"
    claim: "FlowDeck documents that AI agents can see the simulator screen, tap buttons, run tests, and build iOS and macOS apps through FlowDeck."
    accessedAt: "2026-10-20"
    sourceType: "official-documentation"
  - title: "FlowDeck docs: UI Automation"
    url: "https://docs.flowdeck.studio/macos/ui-automation"
    claim: "FlowDeck for Mac documents simulator interaction including tap, type, scroll, and screenshots."
    accessedAt: "2026-10-20"
    sourceType: "official-documentation"
  - title: "FlowDeck docs: Projects & Sessions"
    url: "https://docs.flowdeck.studio/macos/projects-and-sessions"
    claim: "FlowDeck isolates work in Git worktrees and lets developers move between active agent sessions."
    accessedAt: "2026-10-20"
    sourceType: "official-documentation"
  - title: "FlowDeck docs: Install FlowDeck"
    url: "https://docs.flowdeck.studio/macos/install"
    claim: "FlowDeck for Mac requires an Apple Silicon Mac, macOS 26 or later, and Xcode 26 or later, and works with existing Xcode projects and workspaces."
    accessedAt: "2026-10-20"
    sourceType: "official-documentation"
  - title: "FlowDeck pricing"
    url: "https://flowdeck.studio/pricing"
    claim: "Studio costs $79 per year and the CLI $59 per year, each with a 14-day trial."
    accessedAt: "2026-10-20"
    sourceType: "official-pricing"
  - title: "FlowDeck product page"
    url: "https://flowdeck.studio/"
    claim: "FlowDeck Studio works with Claude Code, Codex, Cursor, OpenCode, and Grok using the developer's existing subscriptions, and runs parallel sessions each with an isolated Git worktree and simulator."
    accessedAt: "2026-10-20"
    sourceType: "official-product-page"
---

FlowDeck Studio is a native macOS app for Apple developers who work with coding agents. Agents such as Claude Code and Codex use it to build and run iOS and macOS apps, drive the simulator, read logs, and run unit and UI tests in existing Xcode projects. Each session gets its own Git worktree, so several agents can work in parallel. Studio includes the FlowDeck CLI, which exposes the same tooling with structured output for terminals and CI.

## So agents can...

- build and launch an iOS or macOS app and read the resulting errors and logs
- tap, type, scroll, and take screenshots in the simulator to check a UI change
- run unit and UI tests and diagnose failures without a human relaying results
- work in parallel sessions, each isolated in its own Git worktree
