---
slug: "hronaut"
name: "Hronaut"
description: "Visible persistent local browser and MCP workspace for coding agents"
category: "web-browser-interaction-tools"
tags:
  - "browser"
  - "mcp"
  - "persistent-workspaces"
  - "human-handoff"
  - "local-first"
websiteUrl: "https://hronaut.dev"
githubUrl: "https://github.com/hronaut/hronaut"
logoUrl: "https://www.google.com/s2/favicons?sz=64&domain_url=https://hronaut.dev"
pricing: "source-available"
classification: "agent-enabling"
entityType: "software-application"
developerName: "Hronaut"
docsUrl: "https://hronaut.dev/setup"
licenseUrl: "https://github.com/hronaut/hronaut/blob/main/LICENSE"
interfaces:
  - "desktop application"
  - "local Streamable HTTP MCP server"
deploymentModes:
  - "local"
evidenceSources:
  - title: "Hronaut repository — persistent local browser and agent workspaces"
    url: "https://github.com/hronaut/hronaut"
    claim: "The maintained repository documents a visible persistent Electron browser, durable agent workspaces that remain available after an AI session ends, isolated local browser profiles, and a local Streamable HTTP MCP endpoint."
    accessedAt: "2026-09-08"
    sourceType: "official-repository"
  - title: "Hronaut setup guide — local MCP connection and first run"
    url: "https://hronaut.dev/setup"
    claim: "The official setup guide documents connecting compatible coding agents to Hronaut's local MCP endpoint and verifying the connection with an isolated example workspace."
    accessedAt: "2026-09-08"
    sourceType: "official-documentation"
  - title: "Hronaut authenticated browser workflow — human takeover"
    url: "https://hronaut.dev/authenticated-browser-agents"
    claim: "The official workflow documentation describes pausing agent access so a person can handle login, 2FA, CAPTCHA, payment, or another human-only step in the same visible browser workspace before resuming."
    accessedAt: "2026-09-08"
    sourceType: "official-documentation"
  - title: "Hronaut license — PolyForm Noncommercial"
    url: "https://github.com/hronaut/hronaut/blob/main/LICENSE"
    claim: "The repository publishes Hronaut under the PolyForm Noncommercial License 1.0.0; uses not permitted by that license require a commercial subscription license."
    accessedAt: "2026-09-08"
    sourceType: "official-license"
verificationLevel: "documentation-reviewed"
classificationRationaleMd: "Hronaut materially empowers coding agents by keeping a visible local browser workspace alive independently of an individual agent session, preserving scoped browser state across compatible local MCP sessions, and providing a same-tab human takeover boundary for authentication and other manual steps."
bestForMd: "Coding-agent workflows that need a visible local browser for authenticated localhost QA, debugging, or multi-session work while keeping browser state scoped to named workspaces and allowing a person to resume the same tab."
limitationsMd: "Hronaut is a local desktop application with a loopback MCP endpoint, so cloud-only agents cannot reach it without an additional user-controlled bridge. Site behavior, client compatibility, and login persistence remain dependent on the target site and local environment; Windows packages are unsigned and macOS packages are not notarized."
unknownsMd: "No independent benchmark of browser reliability, task success, or cross-site compatibility was found in the reviewed first-party sources."
sortOrder: 25
---

Hronaut is a visible persistent Electron browser for coding agents. It keeps the browser and its named workspaces available independently of an individual AI session, and exposes browser control and inspection through a local Streamable HTTP MCP server.

## So agents can...

- Reuse named, isolated browser workspaces across compatible local MCP sessions while preserving tabs and supported site state
- Inspect and test authenticated or localhost applications in a visible browser without connecting the agent to the person's everyday browser profile
- Pause for login, 2FA, CAPTCHA, payment, or another human-only step so a person can take over the same tab and then resume the workflow
