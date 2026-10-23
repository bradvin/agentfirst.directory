---
slug: "deed-page"
name: "deed.page"
description: "Permanent static hosting for AI agents: one HTTP request or MCP call publishes files to a live URL at an agent-chosen slug, with no account"
seoTitle: "deed.page: Permanent Static Hosting for AI Agents"
seoDescription: "See how deed.page lets AI agents publish files to a permanent URL with one HTTP request or MCP call, without an account. Review interfaces, plan limits, and evidence."
agentSummary: "deed.page lets an agent publish generated files to a permanent HTTPS URL at a slug the agent chooses, through a REST API or a hosted MCP server. The first publish returns a token the agent keeps for later updates, version restores, custom domains, and deletion. Check the linked pricing file for current plan limits before relying on it."
category: "storage-media-hosting"
tags:
  - "static-hosting"
  - "web-publishing"
  - "mcp"
  - "custom-domains"
websiteUrl: "https://deed.page"
githubUrl: "https://github.com/f-o-x11/deed-page-skill"
logoUrl: "https://deed.page/icon.svg"
pricing: "freemium"
classification: "agent-native"
entityType: "service"
developerName: "deed.page"
docsUrl: "https://deed.page/docs"
pricingUrl: "https://deed.page/pricing.md"
licenseUrl: "https://deed.page/terms"
interfaces:
  - "REST API"
  - "MCP"
  - "installable agent skill"
deploymentModes:
  - "hosted"
evidenceSources:
  - title: "deed.page product page"
    url: "https://deed.page"
    claim: "The product page positions deed.page as permanent static hosting for AI agents, where one PUT or POST publishes files to a live HTTPS URL without an account, email code, or claim link."
    accessedAt: "2026-10-23"
    sourceType: "official-product-page"
  - title: "deed.page documentation"
    url: "https://deed.page/docs"
    claim: "The documentation describes the agent-facing publish API, the token returned by the first publish, updates, version history and restore, custom domains, analytics, webhooks, and the MCP endpoint."
    accessedAt: "2026-10-23"
    sourceType: "official-documentation"
  - title: "deed.page machine-readable pricing"
    url: "https://deed.page/pricing.md"
    claim: "The pricing file lists a no-cost Free plan alongside paid Hobby and Pro plans, with plan-specific site counts, per-site size caps, publish rates, retained versions, and custom-domain limits."
    accessedAt: "2026-10-23"
    sourceType: "official-pricing"
  - title: "deed.page agent card"
    url: "https://deed.page/.well-known/agent.json"
    claim: "The first-party agent card describes deed.page as permanent static hosting for AI agents and lists its agent-facing publishing skills and MCP endpoint."
    accessedAt: "2026-10-23"
    sourceType: "official-documentation"
  - title: "deed.page well-known skills index"
    url: "https://deed.page/.well-known/skills/index.json"
    claim: "The first-party skills index exposes a deed-page skill for publishing a folder or files to a permanent URL."
    accessedAt: "2026-10-23"
    sourceType: "official-documentation"
  - title: "Official deed.page agent skill repository"
    url: "https://github.com/f-o-x11/deed-page-skill"
    claim: "The repository distributes the MIT-licensed deed.page agent skill and plugin manifests; it is evidence for the agent workflow, not a claim that the hosted service source is available."
    accessedAt: "2026-10-23"
    sourceType: "official-repository"
verificationLevel: "documentation-reviewed"
classificationRationaleMd: "deed.page is agent-native because its product page, documentation, agent card, and installable skill make an agent the actor that publishes and manages a site, with no human account or claim step in the flow."
inclusionRationaleMd: "Agents can turn generated files into a permanent public URL at a slug they choose, then update, roll back, attach a domain to, or delete that site through documented REST and MCP interfaces."
bestForMd: "Agents and agent builders that need a lasting public URL for generated sites, reports, or documents without a person creating an account first."
notBestForMd: "Workloads that need server-side code, private file storage, team workspaces, or self-hosted product source."
limitationsMd: "Static files only. The Free plan has lower site-count, per-site size, publish-rate, and version caps than paid plans, one request body is capped at 4 MB with larger sites uploaded through a manifest, and site passwords are on paid plans only. Free-plan sites are public."
unknownsMd: "No independent reliability benchmark, hosted-product source availability, or brand-asset reuse licence has been established for this listing."
---

deed.page is static hosting built for AI agents. An agent sends files in one HTTP request or MCP tool call and gets back a live, permanent HTTPS URL at a slug it picks, plus a token for managing the site later. No account or email is needed to publish.

## Features

- Permanent sites by default, on an agent-chosen subdomain
- Hosted MCP server and REST API covering publish, update, versions, custom domains, analytics, and webhooks
- Version history with restore on every plan, subject to plan limits
- Optional site passwords on paid plans

## So agents can...

- Publish generated websites, reports, and documents to a shareable URL that does not expire
- Update or roll back a site they published using the token from the first publish
- Attach a custom domain and read cookieless visit counts, subject to plan limits
