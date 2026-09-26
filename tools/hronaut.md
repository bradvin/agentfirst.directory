---
slug: "hronaut"
name: "Hronaut"
description: "Visible, persistent local browser workspaces for coding agents over MCP"
category: "web-browser-interaction-tools"
tags:
  - "browser"
  - "mcp"
  - "local-first"
  - "persistent-session"
  - "human-in-the-loop"
  - "coding-agents"
websiteUrl: "https://hronaut.dev"
githubUrl: "https://github.com/hronaut/hronaut"
logoUrl: "https://www.google.com/s2/favicons?sz=64&domain_url=https://hronaut.dev"
ogImageUrl: "https://hronaut.dev/hronaut-social-card-v1-11-56.png"
pricing: "paid"
classification: "agent-enabling"
entityType: "software-application"
developerName: "Hronom"
docsUrl: "https://hronaut.dev/setup"
pricingUrl: "https://hronaut.dev/#pricing"
licenseUrl: "https://github.com/hronaut/hronaut/blob/main/LICENSE"
interfaces:
  - "Streamable HTTP MCP"
  - "Electron desktop application"
deploymentModes:
  - "local"
evidenceSources:
  - title: "Hronaut official website"
    url: "https://hronaut.dev/"
    claim: "Hronaut describes a local visible browser workspace for coding agents, with a 10-day trial followed by paid named-user plans and no automatic conversion from the trial."
    accessedAt: "2026-09-17"
    sourceType: "official-product-page"
  - title: "Hronaut public repository — browser and MCP boundaries"
    url: "https://github.com/hronaut/hronaut/blob/v2.4.21/README.md"
    claim: "The public repository documents a visible persistent Electron browser, durable agent workspaces over MCP, named local browser context, human takeover, and authoritative postcondition read-back."
    accessedAt: "2026-09-17"
    sourceType: "official-repository"
  - title: "Hronaut v2.4.21 release"
    url: "https://github.com/hronaut/hronaut/releases/tag/v2.4.21"
    claim: "This release documents workspace metadata repairs, retryable Memory Saver and page recovery, and partitioned-cookie isolation during workspace data copies. The desktop artifacts are not platform code-signed or Apple-notarized."
    accessedAt: "2026-09-17"
    sourceType: "official-release-notes"
  - title: "Hronaut subscription and trial license"
    url: "https://github.com/hronaut/hronaut/blob/main/LICENSE"
    claim: "The source-available license permits one 10-day trial starting with the first agent tool call, then requires $4/month or $24/year per named user for up to three active devices. The trial requires no payment card and does not automatically convert to paid use."
    accessedAt: "2026-09-17"
    sourceType: "official-license"
  - title: "Hronaut setup guide"
    url: "https://hronaut.dev/setup"
    claim: "The guide explains starting the desktop app, copying the current client configuration from Home, connecting over loopback Streamable HTTP MCP, and verifying a first task in an isolated workspace."
    accessedAt: "2026-09-17"
    sourceType: "official-documentation"
verificationLevel: "documentation-reviewed"
classificationRationaleMd: "Hronaut materially empowers an external coding agent by supplying a persistent local visible browser workspace, MCP execution boundary, scoped browser context, and human takeover controls; it is not itself the planning agent."
inclusionRationaleMd: "The agent-facing value is substantive: an agent can operate a named browser workspace through MCP and resume after a session boundary while a person retains visible control of consequential steps."
bestForMd: "Coding agents that need a named visible local browser workspace, persistent tabs between sessions, human takeover during sign-in, 2FA, or consequential writes, and authoritative read-back after browser actions."
notBestForMd: "Teams seeking a hosted browser fleet, stealth or CAPTCHA-solving service, unattended cloud execution or a general-purpose agent memory layer."
limitationsMd: "Hronaut runs web pages in its own local Electron/Chromium application; it is not a hosted browser service, native desktop controller or orchestration platform. It does not automatically inherit another browser's authenticated profile or enterprise device-trust extensions. Compatibility depends on the calling MCP client and site. The source-available product requires a subscription after its limited trial, and current desktop artifacts are unsigned/not Apple-notarized."
unknownsMd: "Compatibility with a specific coding-agent client depends on that client's local Streamable HTTP MCP support and the active Hronaut profile configuration."
isIndexable: true
---

Hronaut is a visible, persistent Electron browser that exposes durable local agent workspaces through MCP. Each workspace keeps its own browser profile and site data, while people can watch, pause, approve, or take over a task when a manual step is required.

## So agents can...

- Navigate and interact with websites through a visible local browser workspace
- Reuse named browser context and tabs across compatible agent sessions
- Pause for human sign-in, 2FA, CAPTCHA, payment, or other consequential steps
- Continue only after a caller verifies the authoritative external result

## Example starting workflow

Start Hronaut, copy the configuration for a compatible local MCP client from Home, then ask the agent to create an isolated workspace named `first-check`, open `https://example.com`, take a semantic snapshot and report the page heading. Keep the task within that workspace. This is a suggested first check from the setup documentation, not an independently benchmarked integration.

For authenticated work, a person signs in inside the Hronaut workspace and handles any 2FA or consequential step. The caller checks the live context and result before continuing. See the [setup guide](https://hronaut.dev/setup) and [starter workflows](https://github.com/hronaut/hronaut/blob/v2.4.21/STARTER_WORKFLOWS.md).

## Trial and subscription

One 10-day trial starts with the first agent tool call; no card or automatic billing is required for the trial. Ongoing use is $4/month or $24/year per named user, with up to three active devices per seat. Source inspection is permitted under the [Hronaut Subscription and Trial License](https://github.com/hronaut/hronaut/blob/main/LICENSE).
