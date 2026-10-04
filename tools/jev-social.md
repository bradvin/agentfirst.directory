---
slug: "jev-social"
name: "Jev Social"
description: "Local social research agent with typed Jev decisions and browser-grounded evidence"
agentSummary: "Jev Social is for local social research where an agent should choose the next bounded browser operation from observed results. Jev selects supported read-only searches and page inspections, while socai executes them in the user's Chrome and returns evidence to the loop. Runs preserve operation history and can finish with partial results when access is blocked."
seoTitle: "Jev Social: Browser-Grounded Social Research Agent"
seoDescription: "Inspect how Jev Social chooses bounded Instagram, TikTok, and LinkedIn research steps, runs them through socai in Chrome, and preserves evidence."
category: "web-browser-interaction-tools"
tags:
  - "browser"
  - "social-research"
  - "jev"
  - "socai"
websiteUrl: "https://socai-io.github.io/jev-social/"
githubUrl: "https://github.com/socai-io/jev-social"
logoUrl: "https://socai-io.github.io/jev-social/favicon.svg"
ogImageUrl: "https://raw.githubusercontent.com/socai-io/jev-social/main/docs/banner.png"
pricing: "open-source"
classification: "agent-native"
entityType: "software-application"
developerName: "socai"
docsUrl: "https://github.com/socai-io/jev-social#readme"
licenseUrl: "https://github.com/socai-io/jev-social/blob/699c04890a7930827f8dfa2ba9eef6378c7b5fdf/LICENSE"
interfaces:
  - "command-line interface"
  - "local web application"
deploymentModes:
  - "local"
verificationLevel: "documentation-reviewed"
reviewedBy: "foo-bender"
reviewedAt: "2026-09-25"
classificationRationaleMd: "Jev is the core decision actor: it repeatedly selects one bounded social-browser operation from targets observed in prior results, while socai executes the selected operation in Chrome. Removing that decision loop would fundamentally change the product into direct manual CLI use."
bestForMd: "Local Instagram, TikTok, or LinkedIn research where an agent should choose which observed profile, post, comments, or video to inspect and preserve the evidence behind its report."
notBestForMd: "General-purpose browser automation, unattended account operation, or research that requires bypassing login, CAPTCHA, rate limits, or access controls."
limitationsMd: "Requires Node.js 20+, an OpenRouter key with Jev access, a current socai CLI, and a browser session that can access the selected platform. Available operations and results depend on the installed CLI, live site, login state, and network; access gates produce partial output rather than being bypassed."
unknownsMd: "No independent end-to-end accuracy or speed benchmark was found. The published 63.969-second report is explicitly one recorded local run, not a comparative benchmark."
evidenceSources:
  - title: "Jev Social README — decision loop, interfaces, setup, and runtime limits"
    url: "https://github.com/socai-io/jev-social/blob/699c04890a7930827f8dfa2ba9eef6378c7b5fdf/README.md"
    claim: "The maintained repository documents Jev selecting changing read-only operations, socai executing them in the user's Chrome, a local web application and CLI, supported Instagram, TikTok, and LinkedIn operations, setup requirements, and partial-result behavior."
    accessedAt: "2026-09-21"
    sourceType: "official-repository"
  - title: "Jev Social action construction — observed targets and bounded operations"
    url: "https://github.com/socai-io/jev-social/blob/699c04890a7930827f8dfa2ba9eef6378c7b5fdf/src/actions.js"
    claim: "The source builds the next Jev choice set from platform capabilities and previously captured evidence, validates selected targets, removes attempted operations, and includes a bounded finish action."
    accessedAt: "2026-09-21"
    sourceType: "official-repository"
  - title: "Recorded Jev Social evidence report"
    url: "https://github.com/socai-io/jev-social/blob/699c04890a7930827f8dfa2ba9eef6378c7b5fdf/docs/example-report.md"
    claim: "The repository preserves one dated local Instagram run with four source rows, explicit verification limits, and a measured 63.969-second runtime labeled as a single run rather than a benchmark."
    accessedAt: "2026-09-21"
    sourceType: "official-repository"
  - title: "Jev Social MIT license"
    url: "https://github.com/socai-io/jev-social/blob/699c04890a7930827f8dfa2ba9eef6378c7b5fdf/LICENSE"
    claim: "The Jev Social source repository is published under the MIT License."
    accessedAt: "2026-09-21"
    sourceType: "official-license"
---

Jev Social is a local social research agent. Jev chooses each next read-only operation from a typed set of currently observed targets; socai performs the browser work and returns posts, comments, media, and source links to the loop.

## So agents can...

- search Instagram, TikTok, or LinkedIn and choose which observed result to inspect next
- read selected profiles, posts, and comments without generating arbitrary browser actions or shell commands
- preserve preview cards, source links, operation history, and an evidence report for review
