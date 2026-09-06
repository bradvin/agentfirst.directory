---
slug: "pixelvault"
name: "PixelVault"
description: "Agent-first image hosting with permanent URLs, built for AI coding agents"
category: "storage-media-hosting"
tags:
  - "image-hosting"
  - "storage"
  - "media"
websiteUrl: "https://pixelvault.dev"
pricing: "free"
classification: "agent-enabling"
entityType: "web-api"
developerName: "RumboLabs"
docsUrl: "https://pixelvault.dev/docs/"
pricingUrl: "https://pixelvault.dev/pricing/"
interfaces:
  - "REST API"
  - "command-line interface"
  - "remote MCP server"
  - "local MCP server"
  - "OpenAPI specification"
  - "web dashboard"
deploymentModes:
  - "hosted"
  - "local MCP bridge"
evidenceSources:
  - title: "PixelVault documentation — upload API and agent interfaces"
    url: "https://pixelvault.dev/docs/"
    claim: "PixelVault documents a hosted image API that returns CDN URLs, plus a CLI, OpenAPI discovery, remote MCP server, local MCP bridge, private signed URLs, transforms, collections, and project export."
    accessedAt: "2026-09-03"
    sourceType: "official-documentation"
  - title: "PixelVault pricing — current quotas and planned paid tiers"
    url: "https://pixelvault.dev/pricing/"
    claim: "The pricing page lists a free tier with storage, upload, bandwidth, private-image, and file-size limits; it marks the $9 Starter and $29 Pro tiers as coming soon and documents possible cleanup of inactive free-tier images."
    accessedAt: "2026-09-03"
    sourceType: "official-pricing"
  - title: "PixelVault local MCP repository — local-file upload bridge"
    url: "https://github.com/pixelvault-dev/mcp-local/blob/main/README.md"
    claim: "The maintained local MCP package runs over stdio, reads image files from local paths, sends them to the hosted PixelVault API, and is published under the MIT License."
    accessedAt: "2026-09-03"
    sourceType: "official-repository"
verificationLevel: "documentation-reviewed"
classificationRationaleMd: "PixelVault gives existing agents durable image storage, URLs, transforms, and media-management tools but does not run an agent reasoning loop, so it is agent-enabling."
bestForMd: "Coding and content agents that need to turn generated files, screenshots, or remote images into shareable CDN URLs and optionally manage private links, transforms, batches, or CI artifacts."
limitationsMd: "Keyless uploads expire after 30 days; permanent uploads require an account key. The hosted MCP server cannot read a local filesystem, so local files require base64 or the separate local MCP bridge. Free-tier quotas and inactivity cleanup apply, and private access depends on managing signed URLs correctly."
unknownsMd: "Starter and Pro are announced but marked coming soon, so only the current free tier is reflected in the pricing label. Recheck the pricing page before treating paid plans as available. CDN reliability, transform quality, and security claims were not independently tested."
logoUrl: "https://www.google.com/s2/favicons?sz=64&domain_url=https://pixelvault.dev"
ogImageUrl: "https://pixelvault.dev/og-image.png"
sortOrder: 10
---

PixelVault is an agent-first image host built on Cloudflare's edge. Agents upload an image and get back a CDN-served URL — keyless for a temporary link, or with an API key for a permanent one — plus URL imports, on-the-fly transforms, and discovery surfaces (llms.txt, OpenAPI, an MCP server, and an agent-skills catalog) so an agent can find and use it without human setup.

## Features

- Keyless anonymous uploads (temporary links); with an API key, permanent uploads and remote URL imports — all on a single `POST /v1/images` call
- Permanent `img.pixelvault.dev/{project}/{image}.{ext}` URLs (with an API key) served from the global edge with zero egress cost
- On-the-fly transforms (resize, format negotiation) via URL query params
- MCP server plus `/llms.txt`, `/openapi.json`, and an agent-skills discovery catalog for automatic agent onboarding
- Private signed URLs, collections, and a CI screenshot-hosting workflow with a GitHub Action

## So agents can...

- Turn a generated or captured image into a shareable URL in one call — keyless for a temporary link, or with an API key for a permanent one
- Rehost and reference remote images by URL (with an API key) without downloading and re-uploading bytes themselves
- Resize or reformat an image on demand by editing the URL instead of running an image pipeline
- Host CI screenshots and build artifacts behind private signed links for later inspection
