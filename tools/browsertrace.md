---
slug: "browsertrace"
name: "BrowserTrace"
description: "Local failure timeline debugger for AI browser-agent runs"
category: "web-browser-interaction-tools"
tags:
  - "browser"
  - "debugging"
  - "observability"
websiteUrl: "https://aaronlab.github.io/browsertrace/"
githubUrl: "https://github.com/aaronlab/browsertrace"
logoUrl: "https://www.google.com/s2/favicons?sz=64&domain_url=https%3A%2F%2Faaronlab.github.io%2Fbrowsertrace%2F"
ogImageUrl: "https://aaronlab.github.io/browsertrace/social-preview.png"
pricing: "open-source"
sortOrder: 45
---

BrowserTrace is an open-source local debugger for AI browser-agent failures. It records each run as a step timeline with screenshot, URL, action, model input/output, status, and error context, then exports standalone HTML traces with public-safe redaction. The project is built around Browser Use, Stagehand, Skyvern, Playwright + LLM scripts, and custom computer-use agents.

## Features

- Local step timeline for AI browser-agent runs, including screenshots, URLs, actions, model I/O, status, and errors
- `browsertrace doctor`, `browsertrace demo`, `browsertrace list`, `browsertrace show`, and self-contained HTML export commands
- Public-safe export mode that omits model I/O, screenshots, and URLs for issue or PR attachments
- Browser Use, Stagehand, Skyvern, Playwright + LLM, and custom computer-use agent examples or wrappers
- Local-first SQLite trace store with no hosted account required

## Allows you to create agents that...

- Produce inspectable failure artifacts when a browser task breaks
- Debug model decisions alongside the exact browser state an agent saw
- Share sanitized traces with maintainers or teammates without exposing private prompts, screenshots, or URLs
