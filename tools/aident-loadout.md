---
slug: "aident-loadout"
name: "Aident Loadout"
description: "Capability layer that connects AI agents to your apps and 400+ Skills through one setup"
seoTitle: "Aident Loadout: One App and Skill Layer for AI Agents"
seoDescription: "See how Aident Loadout lets Codex, Claude Code, Cursor, ChatGPT and other MCP clients use the same connected apps and 400+ Skills, with Vault and Audit."
reviewedBy: "foo-bender"
reviewedAt: "2026-10-15"
category: "saas-tool-integration-platforms"
tags:
  - "mcp"
  - "integrations"
  - "agent-skills"
  - "credential-vault"
  - "audit-log"
websiteUrl: "https://aident.ai"
pricing: "freemium"
classification: "agent-enabling"
entityType: "web-api"
developerName: "Aident AI"
docsUrl: "https://docs.aident.ai/loadout/overview"
pricingUrl: "https://aident.ai/pricing"
interfaces:
  - "MCP server"
  - "command-line interface"
  - "agent skills"
  - "REST API"
deploymentModes:
  - "hosted"
evidenceSources:
  - title: "Aident Loadout homepage — apps, Skills, Vault, Audit and supported agents"
    url: "https://aident.ai/"
    claim: "The homepage describes an app catalog for AI agents and 400+ Skills, connecting apps once and reusing them across Codex, Claude Code, Hermes, ChatGPT and other MCP-compatible clients, with credentials kept in Aident Vault and every Action reviewable in Audit."
    accessedAt: "2026-10-13"
    sourceType: "official-product-page"
  - title: "MCP setup for chat clients"
    url: "https://docs.aident.ai/loadout/mcp"
    claim: "The documentation gives the public remote MCP endpoint https://loadout.aident.ai/mcp, browser authorization of Aident, and a test of searching Loadout for an Action."
    accessedAt: "2026-10-13"
    sourceType: "official-documentation"
  - title: "Set up Loadout in your agent"
    url: "https://docs.aident.ai/loadout/setup-agents"
    claim: "The setup guide documents separate installation paths for Codex (plugin), Claude Code, Cursor, ChatGPT and other clients."
    accessedAt: "2026-10-13"
    sourceType: "official-documentation"
  - title: "Vault and Audit"
    url: "https://docs.aident.ai/loadout/vault-and-audit"
    claim: "Vault manages the accounts and credentials agents use through Loadout so the agent receives connection status rather than the provider password or API key, and Audit shows recent actions with status, source, time and cost."
    accessedAt: "2026-10-13"
    sourceType: "official-documentation"
  - title: "Loadout CLI reference"
    url: "https://docs.aident.ai/loadout/cli-reference"
    claim: "The CLI reference documents the public commands agents use to discover, inspect and execute Loadout actions."
    accessedAt: "2026-10-13"
    sourceType: "official-documentation"
  - title: "Aident skill repository"
    url: "https://github.com/Aident-AI/aident-skill"
    claim: "The first-party MIT-licensed repository provides the Aident agent skill and setup instructions for agent clients."
    accessedAt: "2026-10-13"
    sourceType: "official-repository"
verificationLevel: "documentation-reviewed"
classificationRationaleMd: "Loadout does not provide the agent's reasoning loop; it gives existing agents a shared catalog of app actions and Skills, browser-based account connection, credential isolation in Vault, and an Audit trail, so it is agent-enabling."
bestForMd: "People and teams who use several agents (for example Codex, Claude Code, Cursor and ChatGPT) and want them to reuse the same connected apps and Skills without separate integrations or API keys per agent."
limitationsMd: "Loadout is a hosted service: actions run through Aident's endpoint and depend on the connected third-party apps and their availability. Usage of built-in services draws from an Aident balance."
unknownsMd: "Current plan prices are shown in-product on the pricing page; the homepage FAQ describes starting on pay-as-you-go and upgrading to Pro or Team. Confirm current limits and pricing before relying on them."
---

Aident Loadout is a capability layer for AI agents. You connect your apps once, and any supported agent can use them through a remote MCP server, the Aident CLI, or the Aident agent skill. Agents search apps and actions by intent, read the live schema, and run the action; OAuth connections are authorized in the browser and API keys stay in Aident Vault. Audit records what ran, where it came from, whether it worked, and what it cost.

## So agents can...

- discover and run actions across connected apps from one MCP endpoint or CLI
- start from 400+ expert-built Skills for research, outreach, content and operations
- reuse the same connected accounts across Codex, Claude Code, Cursor, ChatGPT and other MCP clients
- act on a user's apps without receiving their raw credentials, with every action logged in Audit
