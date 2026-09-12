---
slug: "agentgrid"
name: "AgentGrid"
description: "Desktop workspace for coordinating coding agents with visible workers, shared context, and review loops"
category: "orchestrators"
tags:
  - "coding-agents"
  - "multi-agent"
  - "mcp"
  - "desktop"
websiteUrl: "https://agentgrid.sh"
pricing: "freemium"
classification: "agent-native"
entityType: "software-application"
developerName: "AgentGrid"
verificationLevel: "documentation-reviewed"
docsUrl: "https://agentgrid.sh/docs"
pricingUrl: "https://agentgrid.sh/pricing"
interfaces:
  - "desktop application"
  - "MCP"
deploymentModes:
  - "local desktop"
classificationRationaleMd: "Coding agents are the workers being coordinated: a compatible master agent starts workers on installed harnesses, inspects their output, and sends follow-ups through AgentGrid's orchestration tools."
bestForMd: "Developers coordinating Claude Code, Codex, or other supported coding harnesses who want worker conversations, notes, terminals, and browser previews in one workspace."
limitationsMd: "The desktop app is closed source and requires an AgentGrid account. Coding harnesses require their own setup and provider access; provider costs and usage limits remain separate. Master orchestration support varies by harness. The free tier allows 3 projects and up to 10 parallel agents per project."
evidenceSources:
  - title: "AgentGrid introduction"
    url: "https://agentgrid.sh/docs"
    claim: "AgentGrid documents a desktop canvas containing coding agents, notes, terminals, browser panes, and source control, with spaces tied to project folders."
    accessedAt: "2026-09-12"
    sourceType: "official-documentation"
  - title: "Orchestrating agents"
    url: "https://agentgrid.sh/docs/guides/orchestrating-agents"
    claim: "Compatible master agents can start workers on installed harnesses, wait for results, read worker output, send follow-ups, associate other panes before reading them, and rediscover or resume workers after restart."
    accessedAt: "2026-09-12"
    sourceType: "official-documentation"
  - title: "AgentGrid installation"
    url: "https://agentgrid.sh/docs/getting-started/installation"
    claim: "AgentGrid provides desktop installation instructions for macOS, Windows, and Linux; downloads are public, while opening the desktop workspace requires an AgentGrid account and coding-harness setup."
    accessedAt: "2026-09-12"
    sourceType: "official-documentation"
  - title: "AgentGrid pricing"
    url: "https://agentgrid.sh/pricing"
    claim: "AgentGrid has ongoing Free and paid Pro plans. Free includes 3 projects and up to 10 parallel agents each; users bring their existing AI subscriptions or API keys."
    accessedAt: "2026-09-12"
    sourceType: "official-pricing"
  - title: "AgentGrid organization profile"
    url: "https://github.com/agent-grid/.github/blob/main/profile/README.md"
    claim: "The AgentGrid team identifies the desktop app as closed source and distinguishes its licensing from the organization's public repositories."
    accessedAt: "2026-09-12"
    sourceType: "official-repository"
---

AgentGrid is a desktop workspace for macOS, Windows, and Linux. A master coding agent coordinates visible workers, while people can inspect their conversations alongside notes, terminals, and browser previews.

## So agents can...

- Delegate implementation and review tasks to workers using installed coding harnesses, including Claude Code and Codex.
- Wait for results, inspect worker output, and send corrections to the same worker while preserving its context.
- Read explicitly associated notes, terminals, and other panes to gather context for the task.
- Rediscover their team after resume and recover eligible sessions through the documented restart workflow.

See the [orchestration guide](https://agentgrid.sh/docs/guides/orchestrating-agents) for the master/worker workflow and harness-specific limits.
