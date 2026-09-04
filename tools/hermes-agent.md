---
slug: "hermes-agent"
name: "Hermes Agent"
description: "Open-source autonomous agent platform with memory, skills, subagents, and messaging gateways"
category: "agent-frameworks-standards"
tags:
  - "agent-platform"
  - "open-source"
  - "memory"
  - "skills"
  - "subagents"
websiteUrl: "https://hermes-agent.nousresearch.com/"
githubUrl: "https://github.com/NousResearch/hermes-agent"
pricing: "open-source"
classification: "agent-native"
entityType: "software-source-code"
developerName: "Nous Research"
docsUrl: "https://hermes-agent.nousresearch.com/docs/"
licenseUrl: "https://github.com/NousResearch/hermes-agent/blob/main/LICENSE"
interfaces:
  - "CLI"
  - "desktop application"
  - "messaging gateways"
  - "OpenAI-compatible HTTP API"
  - "ACP"
deploymentModes:
  - "local"
  - "self-hosted"
  - "Docker"
evidenceSources:
  - title: "Hermes Agent documentation"
    url: "https://hermes-agent.nousresearch.com/docs/"
    claim: "Nous Research documents Hermes as an autonomous agent with memory, skills, delegation, messaging, scheduled automations, MCP support, and local or remote installation paths."
    accessedAt: "2026-09-03"
    sourceType: "official-documentation"
  - title: "Hermes Agent features overview"
    url: "https://hermes-agent.nousresearch.com/docs/user-guide/features/overview/"
    claim: "Hermes exposes toolsets, persistent memory, skills, MCP integrations, an OpenAI-compatible API server, ACP editor integration, and batch processing."
    accessedAt: "2026-09-03"
    sourceType: "official-documentation"
  - title: "Hermes Agent platform support"
    url: "https://hermes-agent.nousresearch.com/docs/getting-started/platform-support"
    claim: "The support matrix distinguishes tier-one macOS, Windows, Linux, WSL2, and Docker support from best-effort Android and Nix support and unsupported install methods."
    accessedAt: "2026-09-03"
    sourceType: "official-documentation"
  - title: "Hermes Agent license"
    url: "https://github.com/NousResearch/hermes-agent/blob/main/LICENSE"
    claim: "The Hermes Agent source repository is licensed under the MIT License."
    accessedAt: "2026-09-03"
    sourceType: "official-license"
classificationRationaleMd: "Hermes is itself the autonomous agent runtime: it maintains memory, invokes tools, learns skills, delegates to subagents, and operates through terminal, desktop, API, editor, and messaging surfaces."
bestForMd: "Persistent self-hosted assistants that need reusable skills, tool calling, cross-session memory, subagents, scheduled work, and access from multiple messaging or developer interfaces."
limitationsMd: "Official support is strongest on Apple Silicon macOS, current Windows, Linux or WSL2, and Docker; Android and Nix are best effort, while Intel macOS, PyPI installs, and Homebrew installs are unsupported."
verificationLevel: "documentation-reviewed"
---

Hermes Agent is an open-source autonomous agent platform from Nous Research for running persistent agents across local and remote environments. It combines long-term memory, reusable skills, tool calling, subagents, and messaging integrations so agents can operate continuously instead of only inside a single chat or terminal session.

## Features

- Persistent memory and workspace context so agents can carry state across sessions
- Reusable skills system for packaging task-specific instructions, scripts, and workflows
- Subagents and multiple runtimes for delegating work across different execution environments
- Messaging gateway integrations so agents can work through chat surfaces like Slack, Telegram, and other channels
- Tooling for browser control, code execution, document analysis, and environment automation

## So agents can...

- Keep working over time with memory, project context, and recoverable task state
- Hand off specialized work to subagents while a main agent coordinates the broader job
- Operate through chat, local tooling, and remote environments as part of one continuous workflow
