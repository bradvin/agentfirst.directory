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
logoUrl: "https://www.google.com/s2/favicons?sz=64&domain_url=https://pixelvault.dev"
ogImageUrl: "https://pixelvault.dev/og-image.png"
sortOrder: 10
---

PixelVault is an agent-first image host built on Cloudflare's edge. Agents upload an image and get back a permanent, CDN-served URL — with keyless anonymous uploads, URL imports, on-the-fly transforms, and discovery surfaces (llms.txt, OpenAPI, an MCP server, and an agent-skills catalog) so an agent can find and use it without human setup.

## Features

- Keyless anonymous uploads and remote URL imports on a single `POST /v1/images` call
- Permanent `img.pixelvault.dev/{project}/{image}.{ext}` URLs served from the global edge with zero egress cost
- On-the-fly transforms (resize, format negotiation) via URL query params
- MCP server plus `/llms.txt`, `/openapi.json`, and an agent-skills discovery catalog for automatic agent onboarding
- Private signed URLs, collections, and a CI screenshot-hosting workflow with a GitHub Action

## So agents can...

- Turn a generated or captured image into a shareable, permanent URL in one call, with no account or API key required
- Rehost and reference remote images by URL without downloading and re-uploading bytes themselves
- Resize or reformat an image on demand by editing the URL instead of running an image pipeline
- Host CI screenshots and build artifacts behind private signed links for later inspection
