---
slug: "altorank"
name: "AltoRank"
description: "Open-source SEO content software with a hosted MCP server for readiness audits, Search Console, keyword research and drafts into a review queue"
category: "marketing-seo"
tags:
  - "seo"
  - "mcp"
  - "content"
  - "search-console"
  - "keyword-research"
  - "self-hosted"
websiteUrl: "https://altorank.co"
githubUrl: "https://github.com/AltoRank/altorank"
pricing: "open-source"
classification: "agent-enabling"
entityType: "web-application"
developerName: "SUPALABS SRL"
docsUrl: "https://altorank.co/docs/mcp/"
pricingUrl: "https://altorank.co/pricing/"
licenseUrl: "https://github.com/AltoRank/altorank/blob/main/LICENSE"
interfaces:
  - "hosted MCP server"
  - "REST API"
  - "agent skills"
  - "web dashboard"
deploymentModes:
  - "hosted"
  - "self-hosted with Docker and PostgreSQL"
evidenceSources:
  - title: "AltoRank MCP documentation — hosted endpoint, transport and authentication"
    url: "https://altorank.co/docs/mcp/"
    claim: "The documentation gives the hosted endpoint https://app.altorank.co/api/mcp over Streamable HTTP with OAuth, the Claude Code command to add it, and readiness tools that run against any public domain."
    accessedAt: "2026-10-16"
    sourceType: "official-documentation"
  - title: "AltoRank repository README — self-hosting, MCP server and approval model"
    url: "https://github.com/AltoRank/altorank"
    claim: "The README states AltoRank can be self-hosted free under AGPL-3.0 or used as the hosted app, that agents research and draft through the MCP server and agent API, and that no MCP tool or agent API call can approve an article."
    accessedAt: "2026-10-16"
    sourceType: "official-repository"
  - title: "AltoRank licence"
    url: "https://github.com/AltoRank/altorank/blob/main/LICENSE"
    claim: "The repository is licensed under the GNU Affero General Public License v3.0."
    accessedAt: "2026-10-16"
    sourceType: "official-license"
  - title: "AltoRank pricing — self-host free, hosted plans and trial"
    url: "https://altorank.co/pricing/"
    claim: "The pricing page lists self-hosting as free and hosted plans at €69 and €199 a month, with a 7-day free trial on hosted plans."
    accessedAt: "2026-10-16"
    sourceType: "official-pricing"
verificationLevel: "documentation-reviewed"
classificationRationaleMd: "AltoRank is a web application for SEO content that people run day to day; its hosted MCP server and agent API let agents run readiness audits, read Search Console data, research keywords and write drafts, so it enables agent work rather than being agent-only."
bestForMd: "Site owners and agencies who want an agent to research keywords and write SEO drafts that a named person reviews, on a self-hosted install or the hosted app."
notBestForMd: "Teams that want an agent to publish content with no review step, or an SEO data API without a content workflow."
limitationsMd: "The hosted MCP server needs an AltoRank account and OAuth sign-in. Drafts and keyword suggestions use plan quota and research credits. No tool approves, publishes or deletes content."
unknownsMd: "No independent benchmark of draft quality has been reviewed."
---

AltoRank is open-source SEO content software (AGPL-3.0). It checks whether search engines and AI assistants can read a site, researches what the site's buyers search for, and drafts articles with sources into a review queue. Every publish is attributed to a named person, by a click or by a rule they set. It runs as a hosted app or self-hosted with Docker Compose (Next.js + Supabase).

## Features

- Hosted MCP server at `https://app.altorank.co/api/mcp` (Streamable HTTP, OAuth), listed in the official MCP registry as `co.altorank/altorank`
- Readiness audits and JSON-LD proposals for any public domain
- Stored Google Search Console performance, coverage and URL inspection data
- Keyword research and SEO drafts with an idempotency key per draft
- Claude Code plugin and SKILL.md in the repository

## So agents can...

- Check a site's search and AI-crawler readiness before writing content
- Read Search Console numbers without calling Google directly
- Write SEO drafts into a person's review queue and hand back the editor link
