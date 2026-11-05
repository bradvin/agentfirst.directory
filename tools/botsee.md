---
slug: "botsee"
name: "BotSee"
description: "Agent-native API and CLI for repeatable AI-search visibility analysis"
seoTitle: "BotSee: AI Visibility Measurement for Agent Workflows"
seoDescription: "BotSee lets agent workflows run structured AI-search visibility analyses and retrieve competitors, keywords, cited sources, and raw responses for review."
agentSummary: "BotSee provides a Claude Code plugin and a direct Python CLI for Codex and comparable agents. An agent can define a site, customer types, personas, and questions; run an analysis; and retrieve structured competitor, keyword, source, and raw-response data for review."
category: "marketing-seo"
reviewedBy: "foo-bender"
reviewedAt: "2026-10-08"
tags:
  - "ai-visibility"
  - "marketing"
  - "seo"
  - "research"
  - "cli"
websiteUrl: "https://botsee.io"
pricing: "paid"
classification: "agent-native"
entityType: "web-api"
developerName: "BotSee"
docsUrl: "https://botsee.io/docs"
interfaces:
  - "REST API"
  - "Claude Code plugin"
  - "Python CLI"
deploymentModes:
  - "hosted"
evidenceSources:
  - title: "BotSee API documentation"
    url: "https://botsee.io/docs"
    claim: "BotSee documents a Claude Code plugin, a direct Python CLI for Codex and other agents, and commands to configure a site, run analyses, and retrieve structured results."
    accessedAt: "2026-10-02"
    sourceType: "official-documentation"
  - title: "BotSee Claude Code plugin README"
    url: "https://github.com/RivalSee/botsee-skill"
    claim: "This public repository implements the CLI/plugin client and documents structured competitors, keywords, sources, and raw responses. Its MIT license covers the client, not the private hosted analysis backend."
    accessedAt: "2026-10-02"
    sourceType: "official-repository"
verificationLevel: "documentation-reviewed"
classificationRationaleMd: "Agents are first-class participants in the documented plugin and CLI workflow: they configure a buyer-question benchmark, trigger an analysis, and retrieve the resulting records programmatically."
inclusionRationaleMd: "The product provides a substantive, documented measurement workflow for agent-led marketing and AI-search research rather than a generic API wrapper."
bestForMd: "Technical marketers and agent builders who need a repeatable, reviewable AI-search visibility benchmark instead of manual prompting and spreadsheet collection."
notBestForMd: "Teams seeking a conventional SEO suite, a passive real-time monitoring feed, or an autonomous publishing system."
limitationsMd: "Analyses consume credits and results reflect the configured questions, personas, and providers; review returned evidence before making marketing decisions. The privacy policy states that brand information, questions, and descriptions are shared with third-party AI services. Free results are public; paid results default to public unless made private through account settings. Account data is retained indefinitely while active; analytics data is retained indefinitely but may be replaced when analyses are regenerated. Deletion requests are handled within 30 days. The policy promises encryption in transit, not end-to-end encryption or a verified encryption-at-rest guarantee. See https://botsee.io/privacy."
unknownsMd: "No independent benchmark of accuracy, coverage, or cross-provider repeatability was reviewed for this listing."
---

BotSee is a hosted AI-visibility measurement tool with a Claude Code plugin and direct Python CLI for coding-agent workflows. It uses a repeatable site, customer-type, persona, and question structure, then returns structured data about competitors, keywords, cited sources, and AI responses.

## So agents can...

- build a defined buyer-question benchmark before running AI-search research
- run an analysis through the documented plugin or CLI and retrieve structured records
- inspect competitor mentions, keyword signals, cited sources, and raw responses before recommending a content or distribution action
