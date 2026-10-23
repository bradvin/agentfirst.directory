---
slug: "curlshot"
name: "CurlShot"
description: "Screenshot API with an MCP server that lets agents capture web pages as images, PDFs or videos"
seoTitle: "CurlShot: Web Page Screenshots for AI Agents via MCP and API"
seoDescription: "See how CurlShot lets AI agents capture rendered web pages as images or PDFs through an MCP take_screenshot tool, an OpenAPI 3.1 file and llms.txt docs."
agentSummary: "CurlShot renders a public web page in a headless browser and returns an image, PDF or scrolling video. Agents can call it through a stateless MCP endpoint whose take_screenshot tool takes a URL and returns PNG, JPEG or WebP files up to 6 MB as inline image content, or through a plain HTTP API described in OpenAPI 3.1 that also accepts HTML, Markdown, cookies and headers. Check the pricing page for current monthly limits before relying on it."
category: "storage-media-hosting"
tags:
  - "screenshot"
  - "mcp"
  - "rendering"
  - "pdf"
  - "rest-api"
websiteUrl: "https://curlshot.com"
pricing: "freemium"
classification: "agent-enabling"
verificationLevel: "documentation-reviewed"
entityType: "web-api"
developerName: "CurlShot"
docsUrl: "https://curlshot.com/docs"
pricingUrl: "https://curlshot.com/pricing"
interfaces:
  - "API"
  - "MCP"
deploymentModes:
  - "hosted"
classificationRationaleMd: "CurlShot's first-party docs describe an MCP server with a take_screenshot tool that returns a PNG, JPEG or WebP render of up to 6 MB as image content, so a model that reads images can see a web page it was asked about. PDF and video results come back as resource content, and files over 6 MB come back only as a download link. It is a hosted rendering service used by agents, not an autonomous agent itself."
bestForMd: "Agents and agent builders that need to see how a public web page actually renders (full page, mobile viewport, single element or PDF) without running their own headless browser."
limitationsMd: "The MCP tool only takes a public URL plus capture options; HTML or Markdown input and cookies or headers for pages behind a login are available only through the HTTP API. Over MCP, only PNG, JPEG and WebP files up to 6 MB arrive as inline image content: PDF, MP4, WebM and GIF arrive as resource content, and any file over 6 MB arrives as a text summary with a download link that an agent cannot inspect as an image. The service refuses private and local network addresses. Banner and ad blocking works on most sites but not all, and some sites block automated browsers. It captures pages; it does not perform multi-step browser interaction on an agent's behalf."
unknownsMd: "No independent benchmark of render reliability or latency was found in the reviewed sources."
evidenceSources:
  - title: "CurlShot docs: Using the API from AI agents"
    url: "https://curlshot.com/docs/guides/ai-agents"
    claim: "The MCP endpoint https://curlshot.com/api/mcp uses stateless streamable HTTP with JSON-RPC 2.0. take_screenshot requires url and refuses arguments outside its listed options; PNG, JPEG and WebP results come back as base64 image content with a download link, PDF and video results as resource content, and files over 6 MB as a text part with only the download link."
    accessedAt: "2026-10-16"
    sourceType: "official-documentation"
  - title: "CurlShot llms.txt"
    url: "https://curlshot.com/llms.txt"
    claim: "The CurlShot HTTP API accepts a URL, HTML or Markdown and returns PNG, JPEG, WebP, PDF, MP4, WebM or GIF; it lists an OpenAPI 3.1 description, llms-full.txt and the MCP tools take_screenshot and list_devices."
    accessedAt: "2026-10-16"
    sourceType: "official-documentation"
  - title: "CurlShot pricing"
    url: "https://curlshot.com/pricing.md"
    claim: "A free plan includes 100 screenshots a month with no card; paid plans start at $19 a month, and failed renders and cache hits are not counted."
    accessedAt: "2026-10-16"
    sourceType: "official-pricing"
  - title: "CurlShot FAQ"
    url: "https://curlshot.com/faq.md"
    claim: "Private and local network addresses are refused, pages behind a login need cookies or headers, and banner blocking works on most sites but not every one."
    accessedAt: "2026-10-16"
    sourceType: "official-documentation"
---

CurlShot is a hosted screenshot API. One HTTP request renders a URL, HTML or Markdown in a headless browser (with optional cookies and headers) and returns a PNG, JPEG, WebP, PDF or a scrolling MP4, WebM or GIF. The MCP tool `take_screenshot` covers the URL case only. It covers full-page capture, device presets, dark mode, single elements by CSS selector, cookie-banner and ad blocking, caching, async jobs with signed webhooks and bulk runs.

## So agents can...

- Look at a rendered public web page by calling `take_screenshot` over MCP and receiving a PNG, JPEG or WebP of up to 6 MB inline (PDF and video come back as resource content; larger files as a download link)
- Check how a page renders on phone, tablet or desktop presets (`list_devices`)
- Save a web page as a PDF or capture one element for a report or review step
- Discover the API from machine-readable sources: OpenAPI 3.1, llms.txt, llms-full.txt and markdown versions of every docs page
