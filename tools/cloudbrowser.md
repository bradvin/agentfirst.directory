---
slug: "cloudbrowser"
name: "Cloudbrowser"
description: "Persistent desktop Chrome browsers for AI agents, with CDP and permission-controlled Live View."
category: "web-browser-interaction-tools"
tags:
  - "browser-automation"
  - "chrome"
  - "cdp"
  - "persistent-sessions"
  - "human-in-the-loop"
websiteUrl: "https://cloudbrowser.tv/"
logoUrl: "https://cloudbrowser.tv/icon.svg"
pricing: "freemium"
classification: "agent-enabling"
entityType: "service"
developerName: "Cloudbrowser"
docsUrl: "https://cloudbrowser.tv/docs"
pricingUrl: "https://cloudbrowser.tv/pricing"
interfaces:
  - "REST API"
  - "Go CLI"
  - "Chrome DevTools Protocol"
  - "Live View"
deploymentModes:
  - "hosted"
verificationLevel: "documentation-reviewed"
classificationRationaleMd: "Cloudbrowser provisions separate persistent desktop Chrome environments that agents control over CDP. A developer can manage those environments through a CLI or REST API and grant an authorized person separate viewing or input permissions."
bestForMd: "Agent developers who need persistent Chrome profiles for parallel or recurring work and want a person to be able to observe or assist in the same browser."
limitationsMd: "Use a separate agent or CDP client to drive the browser. Forking requires a paused source. Resume restarts Chrome, so in-memory page state is lost and destination websites can still expire their sessions."
evidenceSources:
  - title: "Cloudbrowser quickstart"
    url: "https://cloudbrowser.tv/docs"
    claim: "Registration is open to accounts with verified email addresses. The quickstart documents REST lifecycle calls, workspace API keys, and creating a browser with the Go CLI."
    accessedAt: "2026-11-24"
    sourceType: "official-documentation"
  - title: "Cloudbrowser browser lifecycle"
    url: "https://cloudbrowser.tv/docs/browsers"
    claim: "Pause persists the Chrome profile on disk and resume restarts Chrome. Forking copies an already paused profile to an independent browser."
    accessedAt: "2026-11-24"
    sourceType: "official-documentation"
  - title: "Cloudbrowser access boundaries"
    url: "https://cloudbrowser.tv/docs/security"
    claim: "The owner can issue separate browser-scoped CDP and Live View links. Live View is read-only by default, with optional input permission for signed-in recipients."
    accessedAt: "2026-11-24"
    sourceType: "official-documentation"
  - title: "Cloudbrowser connection guide"
    url: "https://cloudbrowser.tv/docs/connections"
    claim: "A CDP client can attach to Chrome using a browser-scoped link. The connection guide documents the Playwright connection workflow."
    accessedAt: "2026-11-24"
    sourceType: "official-documentation"
  - title: "Cloudbrowser CLI reference"
    url: "https://cloudbrowser.tv/docs/cli"
    claim: "The published Go CLI installs on macOS, Linux, and Windows and manages browser lifecycle and connection links."
    accessedAt: "2026-11-24"
    sourceType: "official-documentation"
  - title: "Cloudbrowser usage and billing"
    url: "https://cloudbrowser.tv/docs/billing"
    claim: "The recurring Free plan covers one browser-hour per UTC calendar month with one running browser at a time. Browsers pause at the allowance limit. Paid plans provide higher runtime and concurrency."
    accessedAt: "2026-11-24"
    sourceType: "official-documentation"
---

Cloudbrowser provides hosted desktop Chrome for AI agents. Developers assign agents separate browsers, manage them through a REST API or Go CLI, and connect a CDP client to the browser. An authorized person can use Live View to observe or assist with the same task.

## So agents can...

- Resume a browser using the Chrome profile saved before pause, subject to the destination website's session expiry.
- Work in separate browser environments for parallel tasks or start an independent browser from a paused profile.
- Share a live desktop with an authorized person using read-only or read-and-write access.

The Free plan is available after email verification and includes one browser-hour per UTC calendar month and one running browser at a time.
