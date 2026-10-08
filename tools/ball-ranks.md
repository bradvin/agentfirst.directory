---
slug: "ball-ranks"
name: "Ball Ranks"
description: "NFL and NBA fantasy rankings and player projections exposed through REST and MCP"
agentSummary: "Ball Ranks supplies structured NFL and NBA fantasy rankings and player projections for assistants and automated research. Builders can retrieve season boards, football weekly rankings, and individual player projections through REST or four read-only MCP tools. Model Zero supports free access; Model One requires Premium. Responses include player identifiers and model-data versions for reviewing results."
seoTitle: "Ball Ranks: NFL and NBA Fantasy Data for Agent Workflows"
seoDescription: "Inspect Ball Ranks' read-only REST and MCP access to fantasy rankings and player projections, including supported sports, model access, and request limits."
reviewedBy: "foo-bender"
reviewedAt: "2026-10-08"
category: "specialized-search-discovery-engines"
tags: ["fantasy-sports", "nfl", "nba", "rankings", "mcp", "api"]
websiteUrl: "https://ballranks.com"
logoUrl: "https://ballranks.com/images/ball-ranks-mark.svg"
pricing: "freemium"
classification: "agent-enabling"
entityType: "web-api"
developerName: "Ball Ranks"
docsUrl: "https://ballranks.com/developers"
pricingUrl: "https://ballranks.com/premium"
interfaces: ["REST API", "MCP"]
deploymentModes: ["hosted"]
verificationLevel: "documentation-reviewed"
classificationRationaleMd: "Ball Ranks gives agents a documented data interface for retrieving current fantasy football and basketball rankings and projections instead of requiring them to scrape pages or infer structured results."
inclusionRationaleMd: "The first-party developer documentation defines four read-only ranking and projection tools, their response data, authentication tiers, and direct use from Streamable HTTP MCP clients."
bestForMd: "Agent builders who need structured NFL or NBA fantasy rankings and player projections inside assistants and automated research workflows."
notBestForMd: "Live scores, schedules, injury reporting, news, historical box scores, or general player biographies."
limitationsMd: "Anonymous access returns Model Zero data and is limited to 10 requests daily. Higher limits need an API key, and Model One requires an active Premium membership."
unknownsMd: "No independent data-accuracy or cross-client compatibility benchmark was performed for this directory submission."
evidenceSources:
  - title: "Ball Ranks developer documentation"
    url: "https://ballranks.com/developers"
    claim: "Documents the REST API and hosted Streamable HTTP MCP server, four read-only ranking and projection capabilities, supported sports, authentication tiers, and rate limits."
    accessedAt: "2026-10-08"
    sourceType: "official-documentation"
  - title: "Ball Ranks Premium"
    url: "https://ballranks.com/premium"
    claim: "Documents the paid Premium offering that unlocks Model One rankings and projections."
    accessedAt: "2026-10-08"
    sourceType: "official-pricing"
---

Ball Ranks exposes current fantasy football and basketball rankings and player projections through a public REST API and a hosted MCP server. Both interfaces are read-only.

## So agents can...

- Retrieve upcoming-week and season rankings for supported fantasy formats.
- Look up one player's rank or projected fantasy output without scraping a web page.
- Use the same data through REST calls or four focused MCP tools.
