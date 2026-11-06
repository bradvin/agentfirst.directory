---
slug: "cloudbrowser"
name: "Cloudbrowser"
description: "Persistent, isolated cloud Chrome sessions for AI agents, controlled over the Chrome DevTools Protocol."
category: "web-browser-interaction-tools"
tags:
  - "cloud-browser"
  - "browser-automation"
  - "persistent-session"
  - "cdp"
websiteUrl: "https://cloudbrowser.tv"
pricing: "free"
classification: "agent-enabling"
entityType: "web-application"
developerName: "Cloudbrowser"
docsUrl: "https://cloudbrowser.tv/docs"
pricingUrl: "https://cloudbrowser.tv/pricing"
interfaces:
  - "REST API"
  - "Chrome DevTools Protocol"
deploymentModes:
  - "hosted"
evidenceSources:
  - title: "Cloudbrowser homepage"
    url: "https://cloudbrowser.tv/"
    claim: "Cloudbrowser describes isolated Chrome browsers for AI agents, saved browser profiles, CDP connections, live view, and pause, resume, and fork workflows."
    accessedAt: "2026-11-06"
    sourceType: "official-product-page"
  - title: "Cloudbrowser documentation"
    url: "https://cloudbrowser.tv/docs"
    claim: "The documentation describes REST endpoints for Sandbox0 Chrome, verified-email account access, and connecting an agent to an existing Chrome session through a scoped CDP link."
    accessedAt: "2026-11-06"
    sourceType: "official-documentation"
  - title: "Cloudbrowser pricing"
    url: "https://cloudbrowser.tv/pricing"
    claim: "The pricing page lists a no-cost plan with one browser-hour per month and one running browser at a time."
    accessedAt: "2026-11-06"
    sourceType: "official-pricing"
classificationRationaleMd: "Cloudbrowser is built for agent builders: agents control hosted Chrome sessions over CDP, while isolated profiles and lifecycle controls support work across separate tasks. The browser runtime is the product's core job, not a secondary API integration."
bestForMd: "Agent builders who need a remote Chrome session for website workflows and want to reuse an isolated browser profile between tasks."
limitationsMd: "The published Free plan includes one browser-hour per month and one running browser at a time. Sessions on third-party websites may expire or require reauthentication. Lifecycle actions and paid-plan availability depend on the current account and runtime configuration."
unknownsMd: "The directory has not independently tested Cloudbrowser's persistence, lifecycle behavior, or reliability. Paid plan activation is not represented here; confirm current availability in the product console."
---

Cloudbrowser provides hosted Chrome sessions for AI agents. Each browser has an isolated profile, and agents connect to a session through the Chrome DevTools Protocol. People can observe the desktop through Live View. Cloudbrowser also documents pause, resume, and fork workflows; lifecycle access depends on the plan and supported runtime path.

## So agents can...

- Run browser tasks in a remote Chrome session rather than sharing one local desktop.
- Continue work with a saved browser profile across tasks, subject to the website's own session expiry and reauthentication rules.
- Use isolated browser copies for separate tasks and pause a session when it is not needed.
