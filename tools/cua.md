---
slug: "cua"
name: "Cua"
description: "Background desktop control and cross-OS sandboxes for computer-use agents"
category: "agent-compute-sandbox-environments"
tags:
  - "computer-use"
  - "gui-sandboxes"
  - "desktop-automation"
  - "cross-platform"
websiteUrl: "https://cua.ai/"
githubUrl: "https://github.com/trycua/cua"
pricing: "freemium"
classification: "agent-enabling"
entityType: "service"
developerName: "Cua AI, Inc."
docsUrl: "https://cua.ai/docs"
pricingUrl: "https://cua.ai/#pricing"
licenseUrl: "https://github.com/trycua/cua/blob/main/LICENSE.md"
interfaces:
  - "Python SDK"
  - "TypeScript SDK"
  - "MCP server"
  - "CLI"
deploymentModes:
  - "local"
  - "Cua Cloud"
  - "on-premises"
evidenceSources:
  - title: "Cua Driver"
    url: "https://cua.ai/cua-driver"
    claim: "Cua documents background window-targeted input on macOS, Windows, and Linux through MCP, a daemon, or one-shot CLI commands, with foreground fallback for software that requires focus."
    accessedAt: "2026-09-26"
    sourceType: "official-product-page"
  - title: "How Cua sandboxes work"
    url: "https://cua.ai/docs/concepts/how-sandboxes-work"
    claim: "The documentation describes isolated computers that combine code and GUI control, local and Fleet execution, supported runtimes, lifecycle trade-offs, and current snapshot limitations."
    accessedAt: "2026-09-26"
    sourceType: "official-documentation"
  - title: "Cua product and pricing overview"
    url: "https://cua.ai/"
    claim: "Cua documents computer-use workloads across Linux, Windows, macOS, and Android, plus separately priced hosted Fleet capacity for parallel training, evaluation, and data generation."
    accessedAt: "2026-09-26"
    sourceType: "official-product-page"
  - title: "Cua repository license"
    url: "https://github.com/trycua/cua/blob/main/LICENSE.md"
    claim: "The linked Cua repository is licensed under the MIT License."
    accessedAt: "2026-09-26"
    sourceType: "official-license"
classificationRationaleMd: "Cua supplies computer-use drivers, sandboxes, fleets, and evaluation infrastructure that agents consume; it enables agent execution rather than acting as the autonomous agent."
bestForMd: "Teams building or evaluating computer-use agents that need background native-app control, isolated desktops, or parallel runs across multiple operating systems."
limitationsMd: "Background input is not universal: some applications require foreground focus. Local sandboxes consume operator CPU, memory, disk, and compatible virtualization; hosted Fleet capacity is separately billed. Cua's current sandbox documentation also says snapshot and fork operations are not implemented for local sandboxes or Fleet creation paths in cua-sandbox 0.7.0."
verificationLevel: "documentation-reviewed"
---

Cua combines a background driver for native applications with isolated desktops for computer-use agents. The open-source driver connects over MCP or CLI on macOS, Windows, and Linux, while Cua Sandbox and hosted Fleet cover environments across Linux, Windows, macOS, and Android.

## So agents can...

- Send clicks, typing, and scrolling to a chosen window without taking over the system cursor
- Run shell or Python code and GUI actions inside the same isolated computer
- Execute training, evaluation, and data-generation workloads in parallel across local sandboxes or hosted fleets
