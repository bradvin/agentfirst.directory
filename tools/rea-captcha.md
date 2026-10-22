---
slug: "rea-captcha"
name: "rea-captcha"
description: "Same-session CAPTCHA handoff and fresh-evidence resume for browser agents"
seoTitle: "rea-captcha: CAPTCHA Handoff for Browser Agents"
seoDescription: "See how rea-captcha pauses an existing Browser Use or Playwright session for authorized verification, checks fresh evidence, and resumes the same task."
agentSummary: "rea-captcha adds a bounded verification-recovery layer to browser-agent workflows. It works with a caller-owned Browser Use or Playwright/CDP session, pauses when a supported challenge appears, coordinates an authorized test action or human handoff, and returns control only after current page or adapter evidence reports clearance."
category: "web-browser-interaction-tools"
tags:
  - "browser"
  - "browser-use"
  - "playwright"
  - "captcha"
  - "human-in-the-loop"
  - "mcp"
  - "cdp"
websiteUrl: "https://rea-captcha.vercel.app"
githubUrl: "https://github.com/masakaai/rea-captcha"
pricing: "open-source"
classification: "agent-enabling"
entityType: "software-source-code"
developerName: "MASAKA AI"
docsUrl: "https://rea-captcha.vercel.app/browser-use-captcha-handoff.html"
licenseUrl: "https://github.com/masakaai/rea-captcha/blob/main/LICENSE"
interfaces:
  - "TypeScript SDK"
  - "Python Browser Use plugin"
  - "stdio MCP server"
  - "Playwright/CDP adapter"
deploymentModes:
  - "local"
  - "application-embedded"
verificationLevel: "documentation-reviewed"
evidenceSources:
  - title: "rea-captcha repository — agent integrations and trust boundary"
    url: "https://github.com/masakaai/rea-captcha"
    claim: "The maintained repository documents a TypeScript SDK, local stdio MCP server, Browser Use plugin, and adapters that reuse a caller-owned browser session rather than launching or replacing it."
    accessedAt: "2026-10-16"
    sourceType: "official-repository"
  - title: "Browser Use handoff guide — pause, reinspection, and failure behavior"
    url: "https://github.com/masakaai/rea-captcha/blob/main/docs/browser-use.md"
    claim: "The guide documents pausing before the next Browser Use step, retaining the existing BrowserSession, bounded human waiting, uncached page reinspection, and failure instead of resume when evidence is unavailable or the wait expires."
    accessedAt: "2026-10-16"
    sourceType: "official-documentation"
  - title: "rea-captcha case matrix — authorized test and human boundaries"
    url: "https://github.com/masakaai/rea-captcha/blob/main/docs/cases.md"
    claim: "The case documentation limits automated provider flows to documented non-production test keys or exact authorized origins and assigns unknown or production interactive challenges to human handling."
    accessedAt: "2026-10-16"
    sourceType: "official-documentation"
  - title: "rea-captcha MIT license"
    url: "https://github.com/masakaai/rea-captcha/blob/main/LICENSE"
    claim: "The rea-captcha core repository is published under the MIT License."
    accessedAt: "2026-10-16"
    sourceType: "official-license"
classificationRationaleMd: "rea-captcha materially enables an external browser agent to recover from a verification interruption inside its current session. It supplies detection, bounded handoff, fresh-evidence gating, and resume controls, but it is not itself the planning or navigation agent."
inclusionRationaleMd: "The browser-facing capability is substantive: Browser Use and Playwright workflows can retain their current task context, pause for authorized verification, and continue only after the configured evidence boundary reports that the block cleared."
bestForMd: "Browser Use or Playwright/CDP workflows that already own a useful authenticated session and need an explicit, bounded human-in-the-loop recovery contract when verification interrupts a multi-step task."
notBestForMd: "Teams seeking a hosted CAPTCHA solver, stealth browser, proxy service, credential-transfer system, or automatic completion of arbitrary third-party production challenges."
limitationsMd: "Production interactive challenges remain human work. Provider automation is restricted to documented test credentials, owned flows require exact authorized origins, and same-session actions need a configured Browser Use or Playwright/CDP integration; stateless MCP mode analyzes evidence but does not control a browser."
unknownsMd: "No independent task-success, compatibility, or production reliability benchmark was reviewed for this record. Site behavior and the calling agent's browser integration still determine whether a handoff can be observed and resumed."
---

rea-captcha is an open-source verification-recovery controller for browser-agent workflows. It stays with the browser session that the caller already owns, separates completion of a handoff from proof that the protected state changed, and fails closed when current evidence cannot confirm clearance.

## So agents can...

- Detect a supported verification interruption without discarding the current browser task
- Pause for an authorized test action or human takeover in the same session
- Reinspect current page or adapter evidence before resuming the blocked workflow
- Time out or stop instead of silently continuing when verification remains unresolved
