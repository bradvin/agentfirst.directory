---
slug: "cua"
name: "Cua"
description: "Computer-use drivers, cross-OS fleets, and isolated agent sandboxes"
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
  - title: "Cua developer documentation"
    url: "https://cua.ai/docs"
    claim: "The documentation describes Cua Driver, disposable GUI sandboxes, and Cua-Bench for computer-use automation and evaluation."
    accessedAt: "2026-09-03"
    sourceType: "official-documentation"
  - title: "Cua product and pricing overview"
    url: "https://cua.ai/"
    claim: "Cua documents cross-OS local and cloud fleets, MCP and CLI driver surfaces, on-premises availability, and usage-based Cua Fleet pricing."
    accessedAt: "2026-09-03"
    sourceType: "official-product-page"
  - title: "Cua repository license"
    url: "https://github.com/trycua/cua/blob/main/LICENSE.md"
    claim: "The linked Cua repository is licensed under the MIT License."
    accessedAt: "2026-09-03"
    sourceType: "official-license"
classificationRationaleMd: "Cua supplies computer-use drivers, sandboxes, fleets, and evaluation infrastructure that agents consume; it enables agent execution rather than acting as the autonomous agent."
bestForMd: "Computer-use training, evaluation, data generation, and reproducible GUI automation that needs isolated or cross-OS environments."
limitationsMd: "Managed Cua Fleet usage is separately priced, while local and on-premises operation make the operator responsible for model access, host capacity, credentials, network controls, and isolation appropriate to the automated applications."
verificationLevel: "documentation-reviewed"
---

Cua provides open-source computer-use infrastructure for controlling native desktop applications and provisioning isolated GUI environments across Linux, Windows, macOS, and Android. Managed fleets are available alongside the MIT-licensed software.

## So agents can...

- Click, type, scroll, inspect accessibility trees, and capture screens
- Boot disposable desktops and reproduce failures from snapshots
- Run parallel computer-use evaluations across operating systems
