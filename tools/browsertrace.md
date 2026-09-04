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
logoUrl: "https://avatars.githubusercontent.com/u/78432083?v=4"
ogImageUrl: "https://aaronlab.github.io/browsertrace/social-preview.png"
pricing: "open-source"
classification: "agent-enabling"
entityType: "software-application"
developerName: "aaronlab"
docsUrl: "https://aaronlab.github.io/browsertrace/"
licenseUrl: "https://github.com/aaronlab/browsertrace/blob/main/LICENSE"
interfaces:
  - "Python SDK"
  - "command-line interface"
  - "local web application"
  - "JSON API"
  - "standalone HTML export"
deploymentModes:
  - "local"
evidenceSources:
  - title: "BrowserTrace repository — capture model, commands, and local storage"
    url: "https://github.com/aaronlab/browsertrace"
    claim: "The maintained repository documents a Python 3.11+ local debugger with a CLI, web UI, SQLite and filesystem storage, JSON access, run comparison, and redacted HTML exports."
    accessedAt: "2026-09-03"
    sourceType: "official-repository"
  - title: "BrowserTrace integrations — primary and secondary adapter scope"
    url: "https://aaronlab.github.io/browsertrace/integrations.html"
    claim: "Browser Use is the primary integration, while Stagehand, Skyvern, Playwright plus LLM, and custom computer-use flows are documented as secondary or generic integrations."
    accessedAt: "2026-09-03"
    sourceType: "official-documentation"
  - title: "BrowserTrace license — MIT"
    url: "https://github.com/aaronlab/browsertrace/blob/main/LICENSE"
    claim: "BrowserTrace is published under the MIT License."
    accessedAt: "2026-09-03"
    sourceType: "official-license"
verificationLevel: "documentation-reviewed"
classificationRationaleMd: "BrowserTrace records and presents evidence from another browser agent's execution so developers or agents can diagnose failures; it is observability and debugging support rather than an autonomous task agent."
bestForMd: "Developers debugging failed Browser Use runs who need the browser state, action, model input/output, status, and error in one local timeline, with secondary support for other browser-agent workflows."
limitationsMd: "Python 3.11+ is required. Browser Use is the primary integration and the others are secondary; public-safe exports intentionally omit prompts, screenshots, and URLs, and BrowserTrace does not upload trace files for the user."
unknownsMd: "The repository describes hosted team features as coming soon, so they are not treated as current capabilities. No independent integration-coverage or performance benchmark was found in the reviewed sources."
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
