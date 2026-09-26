---
slug: "screenpipe"
name: "Screenpipe"
description: "Local screen and audio history that gives AI agents persistent context across apps"
agentSummary: "Screenpipe is suited to assistants that need evidence from a user's prior work across applications. It captures screen, audio, and accessibility context into searchable local history, then exposes that history through a local API and MCP. Raw recordings stay local by default, while configured cloud models, sync, and integrations create separate data boundaries."
seoTitle: "Screenpipe: Cross-App Work Memory for AI Agents"
seoDescription: "See how Screenpipe captures searchable screen and audio history locally, then exposes work context to agents through a REST API and MCP server."
category: "long-term-memory-state-management"
tags:
  - "agent-memory"
  - "work-context"
  - "local-first"
  - "mcp"
websiteUrl: "https://screenpipe.com/"
githubUrl: "https://github.com/screenpipe/screenpipe"
pricing: "freemium"
classification: "agent-enabling"
entityType: "software-application"
developerName: "Screenpipe"
docsUrl: "https://github.com/screenpipe/screenpipe/blob/main/packages/screenpipe-mcp/README.md"
pricingUrl: "https://screenpipe.com/pricing"
licenseUrl: "https://github.com/screenpipe/screenpipe/blob/main/LICENSE.md"
interfaces:
  - "desktop application"
  - "REST API"
  - "MCP server"
deploymentModes:
  - "local desktop"
evidenceSources:
  - title: "Screenpipe product overview"
    url: "https://screenpipe.com/"
    claim: "Screenpipe captures screen and audio history on macOS, Windows and Linux, keeps raw history local by default, and exposes work context to AI agents through a local API and MCP server."
    accessedAt: "2026-09-18"
    sourceType: "official-product-page"
  - title: "Screenpipe MCP server documentation"
    url: "https://github.com/screenpipe/screenpipe/blob/main/packages/screenpipe-mcp/README.md"
    claim: "The MCP server documents screen and audio search, meeting and activity queries, and installation through desktop Settings > Connections or manual configuration with a local API key."
    accessedAt: "2026-09-18"
    sourceType: "official-repository"
  - title: "Screenpipe privacy data flow"
    url: "https://docs.screenpipe.com/privacy-data-flow"
    claim: "Recording history is stored locally by default; configured cloud models, transcription, team sync and integrations can process context remotely. Recording exclusions and retention controls are documented."
    accessedAt: "2026-09-18"
    sourceType: "official-documentation"
  - title: "Screenpipe pricing"
    url: "https://screenpipe.com/pricing"
    claim: "An ongoing free plan has limited searchable history and scheduled workflows; paid plans expand history and other capabilities. Included AI credits reset monthly."
    accessedAt: "2026-09-18"
    sourceType: "official-pricing"
  - title: "Screenpipe Commercial License"
    url: "https://github.com/screenpipe/screenpipe/blob/main/LICENSE.md"
    claim: "The source uses the Screenpipe Commercial License with commercial-use restrictions, rather than an OSI open-source license. Official distributed builds have separate subscription terms."
    accessedAt: "2026-09-18"
    sourceType: "official-license"
verificationLevel: "documentation-reviewed"
reviewedBy: "foo-bender"
reviewedAt: "2026-09-26"
classificationRationaleMd: "Screenpipe maintains a changing, persistent record of a person's cross-app work and makes that history available to agents across sessions. Its substantive contribution is capturing and preserving work context that an agent otherwise lacks, rather than only wrapping an existing API."
bestForMd: "Personal assistants and work agents that need to recall previously seen content, retrieve meeting context, or assemble summaries from recorded activity across applications."
limitationsMd: "Screenpipe must be running and have captured the relevant activity. OS recording permissions, exclusions, retention and plan limits affect coverage. Local storage does not make every workflow local: connected assistants, cloud providers and integrations may receive context, and telemetry has separate controls. Review exposed MCP tools and agent permissions because capabilities extend beyond retrieval. Source-available licensing restricts commercial use."
unknownsMd: "This listing is based on documentation; cross-client compatibility, capture completeness and performance were not independently tested for it."
---

Screenpipe maintains searchable screen and audio history across applications and exposes it to AI assistants through MCP and a local REST API. Raw recording history stays on the device by default, while optional cloud features and connected agents have their own data boundaries. The source is available under the Screenpipe Commercial License.

## So agents can...

- Recall recorded work context across sessions without asking the user to reconstruct it manually
- Retrieve meeting transcripts and screen activity as evidence for summaries and follow-ups
- Use the same captured history from different compatible assistants through MCP or the local API
