---
slug: "hol-guard"
name: "HOL Guard"
description: "Open-source runtime security layer that evaluates supported AI-agent actions before execution and records security decisions"
category: "agent-security"
tags:
  - "security"
  - "runtime-policy"
  - "prompt-injection"
  - "secrets"
  - "mcp"
websiteUrl: "https://hol.org/guard"
githubUrl: "https://github.com/hashgraph-online/hol-guard"
pricing: "freemium"
classification: "agent-enabling"
developerName: "HOL"
docsUrl: "https://hol.org/guard"
licenseUrl: "https://github.com/hashgraph-online/hol-guard/blob/main/LICENSE"
evidenceSources:
  - title: "HOL Guard product page"
    url: "https://hol.org/guard"
    claim: "HOL Guard documents local-first runtime controls for supported AI-agent actions including shell commands, secret access, MCP changes, and plugin or skill installation."
    accessedAt: "2026-09-12"
    sourceType: "official-website"
  - title: "HOL Guard repository"
    url: "https://github.com/hashgraph-online/hol-guard"
    claim: "The maintained repository documents the open-source Guard Local runtime, supported coding-agent integrations, runtime policy decisions, and Apache-2.0 license."
    accessedAt: "2026-09-12"
    sourceType: "official-repository"
classificationRationaleMd: "HOL Guard is built specifically to control supported AI-agent actions and local agent tooling before side effects, so it materially enables safer agent-first developer workflows."
bestForMd: "Developers and teams that want runtime checks around supported agent shell actions, secret access, MCP configuration, plugins, skills, and related local tooling."
limitationsMd: "Coverage depends on the agent and event type. HOL Guard is not a network firewall or a universal prompt-injection preventer; the public support matrix defines the current enforcement boundary."
verificationLevel: "documentation-reviewed"
---

HOL Guard is a runtime security layer for AI agents and coding tools. Its open-source local runtime evaluates supported actions and local artifacts, can block known risks or pause ambiguous actions for approval, and records security receipts for later review.

## So agents can...

- run supported tool actions behind local policy checks before side effects
- pause risky or ambiguous actions for human approval
- use MCP servers, skills, plugins, and local credentials with an additional runtime security boundary
