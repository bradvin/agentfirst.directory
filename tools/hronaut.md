---
slug: "hronaut"
name: "Hronaut"
description: "A visible local browser with persistent isolated workspaces for coding agents over MCP."
category: "web-browser-interaction-tools"
tags:
  - "browser"
  - "mcp"
  - "persistent-workspaces"
  - "human-handoff"
  - "coding-agents"
websiteUrl: "https://hronaut.dev"
githubUrl: "https://github.com/hronaut/hronaut"
logoUrl: "https://www.google.com/s2/favicons?sz=64&domain_url=https://hronaut.dev"
ogImageUrl: "https://hronaut.dev/hronaut-social-card-v1-11-56.png"
pricing: "source-available"
classification: "agent-enabling"
entityType: "software-application"
developerName: "Hronaut"
docsUrl: "https://hronaut.dev/setup"
pricingUrl: "https://hronaut.dev/#pricing"
licenseUrl: "https://github.com/hronaut/hronaut/blob/main/LICENSE.md"
interfaces:
  - "MCP"
deploymentModes:
  - "local"
evidenceSources:
  - title: "Hronaut public product page"
    url: "https://hronaut.dev/"
    claim: "Hronaut describes a local, visible browser for coding agents with named workspaces, persistent browser context and human control; it supports Windows, macOS and Linux."
    accessedAt: "2026-09-11"
    sourceType: "official-product-page"
  - title: "Hronaut setup guide"
    url: "https://hronaut.dev/setup"
    claim: "Hronaut documents a local loopback Streamable HTTP MCP endpoint and client setup, with visible human takeover for sign-in, 2FA, CAPTCHA and consequential steps."
    accessedAt: "2026-09-11"
    sourceType: "official-documentation"
  - title: "Hronaut source and license"
    url: "https://github.com/hronaut/hronaut"
    claim: "The public repository is inspectable and the product is source-available under the Hronaut Subscription and Trial License."
    accessedAt: "2026-09-11"
    sourceType: "official-repository"
verificationLevel: "documentation-reviewed"
classificationRationaleMd: "Hronaut materially empowers agent-first workflows through a local loopback MCP endpoint, named isolated workspaces, visible browser state and human takeover. It is an execution workspace, not an autonomous agent runtime."
inclusionRationaleMd: "The agent-facing value is substantive: an agent can operate a named browser workspace through MCP and resume after a session boundary while a person retains visible control of consequential steps."
bestForMd: "Agents that need a local, visible browser workspace to preserve scoped browser context between compatible sessions and pause for human-only steps."
notBestForMd: "Teams seeking a hosted browser fleet, stealth or CAPTCHA-solving service, unattended cloud execution or a general-purpose agent memory layer."
limitationsMd: "Hronaut runs locally and its MCP endpoint listens on loopback. It does not claim hosted execution, stealth, CAPTCHA solving, universal identity management or unattended reliability. Current public terms are a 10-day trial from the first agent tool call, then $4/month or $24/year per named user, up to three active devices, under the Hronaut Subscription and Trial License."
unknownsMd: "Compatibility with a specific coding-agent client depends on that client's local Streamable HTTP MCP support and the active Hronaut profile configuration."
isIndexable: true
---

Hronaut is a local, visible browser workspace for coding agents. It keeps named workspaces and browser context available between compatible sessions while leaving the person able to inspect and take over the browser.

## So agents can...

- resume a named, isolated browser workspace after a coding-agent session ends;
- inspect and operate a local browser through MCP while keeping the visible state available to a person;
- pause for sign-in, 2FA, CAPTCHA, payment or another consequential step, then resume after human takeover and state checks.
