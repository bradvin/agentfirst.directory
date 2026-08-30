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
pricing: "freemium"
classification: "agent-enabling"
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
