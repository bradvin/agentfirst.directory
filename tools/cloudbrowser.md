---
slug: "cloudbrowser"
name: "Cloudbrowser"
description: "Persistent isolated Chrome cloud browsers for agent tasks, with CDP and permission-controlled Live View."
category: "web-browser-interaction-tools"
tags:
  - "browser-automation"
  - "chrome"
  - "cdp"
  - "persistent-sessions"
  - "human-in-the-loop"
websiteUrl: "https://cloudbrowser.tv/"
logoUrl: "https://cloudbrowser.tv/icon.svg"
pricing: "unknown"
classification: "agent-enabling"
entityType: "service"
developerName: "Cloudbrowser"
docsUrl: "https://cloudbrowser.tv/docs"
pricingUrl: "https://cloudbrowser.tv/pricing"
interfaces:
  - "REST API"
  - "Chrome DevTools Protocol"
  - "Live View"
deploymentModes:
  - "hosted"
verificationLevel: "documentation-reviewed"
classificationRationaleMd: "Cloudbrowser provisions isolated persistent Chrome runtimes for agent tasks. Browser execution, profile persistence and scoped control are the core operating model; the human Console observes and manages those runtimes."
bestForMd: "Invited agent developers who need separate Chrome profiles for parallel tasks and a human observation or recovery surface."
limitationsMd: "Invitation-only private preview; runtime access needs an invited account and a workspace API key. Fork requires a paused source. Resume restarts Chrome rather than preserving process memory, and websites may expire sessions. The Go CLI is proposed, and documented third-party connection examples are not verified end-to-end integrations."
unknownsMd: "The public pricing page labels its plans as a preview and says billing is not enabled. It lists a Free allowance and planned Basic/Pro prices, but does not establish currently purchasable paid subscriptions. Storage allowances and retention terms remain under design. No independent performance benchmark is asserted."
evidenceSources:
  - title: "Cloudbrowser quickstart"
    url: "https://cloudbrowser.tv/docs"
    claim: "The private preview documents REST endpoints against Sandbox0 Chrome, workspace API keys, invitation-gated Console access and a scoped CDP connection workflow; the Go CLI remains proposed."
    accessedAt: "2026-11-01"
    sourceType: "official-documentation"
  - title: "Cloudbrowser browser lifecycle"
    url: "https://cloudbrowser.tv/docs/browsers"
    claim: "The lifecycle documentation describes isolated parallel browsers, retained profiles, explicit pause/resume and forking only from a paused source; live JavaScript memory is not promised."
    accessedAt: "2026-11-01"
    sourceType: "official-documentation"
  - title: "Cloudbrowser access boundaries"
    url: "https://cloudbrowser.tv/docs/security"
    claim: "The private-preview documentation distinguishes full-control CDP grants from Live View grants and states that the viewer gateway enforces view-only versus input permission."
    accessedAt: "2026-11-01"
    sourceType: "official-documentation"
  - title: "Cloudbrowser connection examples"
    url: "https://cloudbrowser.tv/docs/connections"
    claim: "The documentation provides CDP connection examples, labels third-party end-to-end integrations as unverified, and requires fresh runtime grants after pause/resume."
    accessedAt: "2026-11-01"
    sourceType: "official-documentation"
  - title: "Cloudbrowser pricing preview"
    url: "https://cloudbrowser.tv/pricing"
    claim: "The pricing page states that billing is not enabled, presents the Free/Basic/Pro plan design, explains that ordinary resume restarts Chrome, and leaves storage allowances and retention terms under design."
    accessedAt: "2026-11-01"
    sourceType: "official-pricing"
---

Cloudbrowser is hosted Chrome browser infrastructure for AI agent developers, built on Sandbox0 Chrome. The intended workflow gives separate tasks isolated persistent browser profiles, lets an agent control a browser over CDP, and provides a human Live View with separate viewing and input permissions.

## So agents can...

- Continue browser work using retained cookies and local storage, subject to the destination website's session policy.
- Run parallel tasks in separate Chrome runtimes rather than sharing one desktop browser profile.
- Pause compute between tasks and fork a paused profile into an independent browser.
- Let an authorized person observe or interact through Live View without handing over the workspace API key.

Access is invitation-only. The REST API and CDP workflow are documented; the Go CLI examples are a proposed interface. Resume restarts Chrome, so in-memory page state is not guaranteed to survive. Public plan prices are a pricing preview while billing remains disabled.
