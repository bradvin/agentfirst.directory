---
slug: "agentcomputer"
name: "Agent Computer"
description: "Persistent cloud computers for agent code execution and remote workflows"
category: "agent-compute-sandbox-environments"
tags:
  - "sandboxes"
  - "computer-use"
  - "ssh"
websiteUrl: "https://www.agentcomputer.ai/"
logoUrl: "https://www.google.com/s2/favicons?sz=64&domain_url=https%3A%2F%2Fwww.agentcomputer.ai%2F"
ogImageUrl: "https://www.agentcomputer.ai/opengraph-image?eea9f4a0854a102e"
pricing: "paid"
classification: "agent-enabling"
entityType: "service"
developerName: "Agent Computer"
docsUrl: "https://www.agentcomputer.ai/docs"
pricingUrl: "https://www.agentcomputer.ai/pricing"
interfaces:
  - "command-line interface"
  - "TypeScript SDK"
  - "REST API"
  - "SSH"
  - "browser and VNC"
deploymentModes:
  - "hosted bare-metal infrastructure"
  - "private infrastructure (enterprise)"
evidenceSources:
  - title: "Agent Computer documentation — infrastructure and access surfaces"
    url: "https://www.agentcomputer.ai/docs"
    claim: "The official docs describe Firecracker-based cloud computers with persistent NVMe home directories, browser access, SSH, port publishing, a CLI, a TypeScript SDK, and a REST API."
    accessedAt: "2026-09-03"
    sourceType: "official-documentation"
  - title: "Agent Computer API reference — programmatic computer management"
    url: "https://www.agentcomputer.ai/docs/api"
    claim: "The REST API exposes computer creation and lifecycle actions, resizing, command execution, file operations, images, size presets, and authentication resources."
    accessedAt: "2026-09-03"
    sourceType: "official-documentation"
  - title: "Agent Computer pricing — resource-based billing"
    url: "https://www.agentcomputer.ai/pricing"
    claim: "Agent Computer publishes pay-as-you-go CPU, memory, hot-storage, and cold-storage rates plus a custom enterprise tier with private infrastructure options."
    accessedAt: "2026-09-03"
    sourceType: "official-pricing"
verificationLevel: "documentation-reviewed"
classificationRationaleMd: "Agent Computer supplies persistent isolated compute, remote access, and programmatic lifecycle controls that an external agent can use; the infrastructure enables agent execution but is not itself the planning agent."
bestForMd: "Agent and coding workflows that need a persistent remote Linux computer, SSH or API control, browser access, saved filesystem state, and public or access-gated preview ports."
limitationsMd: "Published capacity is subject to host availability, and CPU, memory, and storage are billed separately. Published ports are public by default unless the private option is selected, so callers must choose the exposure mode deliberately."
unknownsMd: "Provisioning, disk, and network performance figures are first-party claims and were not independently benchmarked or hands-on tested for this record."
sortOrder: 30
---

Agent Computer provides persistent cloud computers that AI agents can access over SSH. The current product markets sub-second Ubuntu sandboxes with shared credentials, persistent filesystems, and native support for running coding or computer-use agents inside each machine.

## Features

- Cloud Ubuntu machines that provision in roughly half a second
- Persistent disks so installed packages, files, and state survive restarts
- SSH-based access model for remote agent delegation and execution
- Built-in support for running Claude, Codex, and other computer-use agents inside each sandbox
- Hosted control plane for creating, managing, and reconnecting to agent computers

## So agents can...

- Spin up isolated remote machines for code execution without touching the local host
- Keep long-lived workspaces and credentials available across multi-step agent workflows
- Delegate coding or desktop tasks into a persistent sandbox through a simple SSH interface
