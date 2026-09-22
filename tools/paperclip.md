---
slug: "paperclip"
name: "Paperclip"
description: "Open-source orchestration for teams of AI agents"
category: "orchestrators"
tags:
  - "orchestration"
  - "multi-agent"
  - "governance"
websiteUrl: "https://paperclip.ing"
githubUrl: "https://github.com/paperclipai/paperclip"
pricing: "open-source"
classification: "agent-native"
entityType: "software-application"
developerName: "Paperclip"
docsUrl: "https://docs.paperclip.ing"
licenseUrl: "https://github.com/paperclipai/paperclip/blob/master/LICENSE"
interfaces:
  - "web application"
  - "REST API"
  - "command-line interface"
  - "agent adapters"
deploymentModes:
  - "self-hosted local"
  - "self-hosted server"
evidenceSources:
  - title: "Paperclip repository — company-style multi-agent orchestration"
    url: "https://github.com/paperclipai/paperclip"
    claim: "Paperclip's maintained repository documents a self-hosted Node server and React interface for organizing external agents around company goals, org charts, budgets, governance, heartbeats, and tickets."
    accessedAt: "2026-09-03"
    sourceType: "official-repository"
  - title: "Paperclip core concepts — organizations, agents, budgets, and heartbeats"
    url: "https://github.com/paperclipai/paperclip/blob/master/docs/start/core-concepts.md"
    claim: "The core-concepts guide defines the organization hierarchy, manager relationships, budget accounting, issue coordination, and scheduled heartbeat execution model."
    accessedAt: "2026-09-03"
    sourceType: "official-documentation"
  - title: "Paperclip adapter overview — external agent runtimes"
    url: "https://github.com/paperclipai/paperclip/blob/master/docs/adapters/overview.md"
    claim: "The adapter documentation explains that Paperclip invokes external runtimes on heartbeats and captures their output and cost, with built-in adapters for several coding-agent and command runtimes."
    accessedAt: "2026-09-03"
    sourceType: "official-documentation"
  - title: "Paperclip specification — evolving application contract"
    url: "https://github.com/paperclipai/paperclip/blob/master/doc/SPEC.md"
    claim: "The repository's application specification documents the intended data and execution model while marking portions of the design as draft."
    accessedAt: "2026-09-03"
    sourceType: "official-specification"
  - title: "Paperclip repository license — MIT"
    url: "https://github.com/paperclipai/paperclip/blob/master/LICENSE"
    claim: "The maintained Paperclip repository is published under the MIT License."
    accessedAt: "2026-09-03"
    sourceType: "official-license"
verificationLevel: "documentation-reviewed"
classificationRationaleMd: "Paperclip is designed around persistent agent identities, reporting lines, goals, delegated tickets, budgets, and scheduled work cycles; those operating primitives make it agent-native even though the actual model runtimes are supplied separately."
bestForMd: "Teams coordinating several bring-your-own agent runtimes that need an auditable work queue, organizational ownership, budgets, governance, and a shared control surface."
limitationsMd: "Paperclip is explicitly not an agent framework and does not provide models or agent subscriptions. Operators must supply and secure the runtimes, credentials, prompts, and deployment; remote access requires an authenticated network mode rather than the trusted loopback default."
unknownsMd: "The reviewed materials include evolving and draft specifications, and some adapters are marked experimental. This review did not independently test enforcement, cost accounting, multi-company isolation, or production hardening."
logoUrl: "https://www.google.com/s2/favicons?sz=64&domain_url=https://paperclip.ing"
ogImageUrl: "https://paperclip.ing/og.jpg"
sortOrder: 20
---

Paperclip is open-source orchestration for zero-human companies. It provides a Node.js server and React UI for coordinating teams of AI agents with org charts, goals, budgets, governance, and ticketed work instead of ad hoc chat sessions.

## Features

- Bring-your-own-agent orchestration across runtimes like Codex, Claude Code, Cursor, OpenClaw, Bash, and HTTP workers
- Org charts, roles, reporting lines, and goal alignment so agent work traces back to company objectives
- Scheduled heartbeats and event-driven coordination for ongoing autonomous work
- Cost controls, monthly budgets, and audit-friendly ticketing with traced conversations and tool calls
- Multi-company isolation, governance controls, approvals, and mobile-ready management

## So agents can...

- Coordinate as a team with clear roles, goals, and reporting structure instead of acting as isolated workers
- Resume long-running operational work on heartbeats without losing context
- Operate within budgets and governance controls while still delegating across many specialized agents
