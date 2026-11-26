---
slug: fastscribe
name: FastScribe
description: Transcribes supported public video links and returns timestamped text or subtitles to MCP clients.
category: storage-media-hosting
tags: [transcription, video, subtitles, mcp]
websiteUrl: https://fastscribe.org/
pricing: freemium
classification: agent-enabling
entityType: service
developerName: FastScribe
docsUrl: https://fastscribe.org/help/mcp-server
pricingUrl: https://fastscribe.org/pricing
interfaces: [Streamable HTTP MCP]
deploymentModes: [hosted]
evidenceSources:
  - title: FastScribe MCP connection and tool reference
    url: https://fastscribe.org/help/mcp-server
    claim: The official reference documents a hosted MCP endpoint, supported video sources, bearer-token setup, the four available tools, and timestamped, text and SRT output.
    accessedAt: "2026-11-26"
    sourceType: official-documentation
  - title: FastScribe audio transcription pricing
    url: https://fastscribe.org/pricing
    claim: FastScribe offers credit packages and subscriptions, and social-video transcription consumes credits.
    accessedAt: "2026-11-26"
    sourceType: official-pricing
limitationsMd: Creating a transcription job consumes account credits and requires a bearer token. The MCP transcription tool accepts supported public video links.
---

FastScribe exposes a remote MCP server that an agent can use to turn a supported public video URL into a transcript. Its pricing and limits tool can be called before the user connects an account.

## So agents can...

- Check the current credit rules and supported input types before starting a transcription.
- Send a public video link for transcription at the user's request.
- Retrieve a transcript as plain text, timestamped segments or SRT subtitles with an account token.
