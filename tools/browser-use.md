---
slug: "browser-use"
name: "Browser Use"
description: "Stealth browser automation with persistent sessions for agents"
category: "web-browser-interaction-tools"
tags:
  - "browser"
  - "stealth"
  - "automation"
websiteUrl: "https://browser-use.com"
githubUrl: "https://github.com/browser-use/browser-use"
pricing: "freemium"
classification: "agent-native"
entityType: "software-application"
developerName: "Browser Use"
docsUrl: "https://docs.browser-use.com/"
pricingUrl: "https://browser-use.com/pricing"
licenseUrl: "https://github.com/browser-use/browser-use/blob/main/LICENSE"
interfaces:
  - "Python SDK"
  - "command-line interface"
  - "cloud REST API"
  - "Chrome DevTools Protocol"
deploymentModes:
  - "local"
  - "self-hosted"
  - "managed cloud"
  - "on-premises (custom plan)"
evidenceSources:
  - title: "Browser Use open-source documentation — local and self-hosted agent library"
    url: "https://docs.browser-use.com/open-source/introduction"
    claim: "Browser Use documents a Python AI browser-automation library that can connect an LLM and run locally or self-hosted."
    accessedAt: "2026-09-03"
    sourceType: "official-documentation"
  - title: "Browser Use repository — SDK, CLI, cloud, and production caveats"
    url: "https://github.com/browser-use/browser-use"
    claim: "The maintained repository documents the Python agent and CLI, optional cloud service, supported local use, and resource-management reasons for using managed infrastructure at scale."
    accessedAt: "2026-09-03"
    sourceType: "official-repository"
  - title: "Browser Use pricing — cloud rates, concurrency, and deployment tiers"
    url: "https://browser-use.com/pricing"
    claim: "The cloud pricing page publishes pay-as-you-go and subscription tiers, browser and proxy rates, concurrency limits, four-hour session timeouts, and custom on-premises deployment."
    accessedAt: "2026-09-03"
    sourceType: "official-pricing"
  - title: "Browser Use profiles guide — persistence requirement"
    url: "https://docs.browser-use.com/cloud/guides/authentication"
    claim: "Cloud profiles persist cookies and browser storage, but changes are saved only when the session is explicitly stopped rather than left open or allowed to time out."
    accessedAt: "2026-09-03"
    sourceType: "official-documentation"
  - title: "Browser Use license — MIT"
    url: "https://github.com/browser-use/browser-use/blob/main/LICENSE"
    claim: "The open-source Browser Use repository is published under the MIT License."
    accessedAt: "2026-09-03"
    sourceType: "official-license"
verificationLevel: "documentation-reviewed"
classificationRationaleMd: "Browser Use supplies the model-driven browser agent loop itself, accepting goals and selecting browser actions through an LLM rather than only exposing a neutral browser-control primitive."
bestForMd: "Developers building agents that must navigate dynamic sites, complete multi-page workflows, reuse authenticated state, or scale browser sessions through either an open-source local runtime or managed cloud."
limitationsMd: "Local production use must account for Chrome memory and concurrency. Cloud sessions have a four-hour timeout, and profile changes persist only when the session is explicitly stopped. CAPTCHA handling and stronger fingerprinting are positioned as cloud capabilities rather than guarantees of the local library."
unknownsMd: "First-party speed, accuracy, stealth, proxy-coverage, and CAPTCHA claims were not independently benchmarked or hands-on tested for this record; success remains site- and model-dependent."
logoUrl: "https://www.google.com/s2/favicons?sz=64&domain_url=https://browser-use.com"
ogImageUrl: "https://browser-use.com/og/browser-use-og.png"
sortOrder: 20
---

Browser Use combines an open-source browser agent library with managed cloud infrastructure. Its current cloud offering emphasizes stealth browsers, persistent sessions and profiles, residential proxies, CAPTCHA solving, and both natural-language tasks and raw browser sessions.

## Features

- Natural-language browser tasks that return structured data
- Stealth browsers with anti-detect fingerprinting and automatic CAPTCHA solving
- Residential proxies in 195+ countries with session-level location control
- Persistent sessions and profiles for login state and multi-step workflows
- Raw browser sessions over CDP for lower-level automation when needed

## So agents can...

- Fill forms, log in, and complete multi-page workflows on JavaScript-heavy sites
- Keep authenticated browser state across runs instead of starting fresh each time
- Handle protected sites that would otherwise block standard headless automation
