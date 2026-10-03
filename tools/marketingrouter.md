---
slug: "marketingrouter"
name: "MarketingRouter"
description: "A REST API for agents to prepare Meta ads, request customer funding and owner approval, and monitor campaign spend and attributed results."
seoTitle: "MarketingRouter: Meta Advertising API for AI Agents"
seoDescription: "Review MarketingRouter's API for Meta ad creative, prepaid customer funding, owner-approved campaigns and performance reporting, including its limits and fees."
agentSummary: "MarketingRouter lets agents prepare Meta campaigns, generate and revise creative, request prepaid customer funding, and read campaign results through a REST API. Owners approve scoped agent access, complete checkout and authorize campaign spending. Machine-readable guides describe idempotent operations, current capabilities and readiness checks. Live delivery requires advertiser activation, verified funds, the required tracking and Meta review."
category: "marketing-seo"
tags:
  - "meta-ads"
  - "paid-advertising"
  - "campaign-management"
  - "creative-generation"
  - "rest-api"
websiteUrl: "https://marketingrouter.com"
logoUrl: "https://marketingrouter.com/brand/marketingrouter-mark.png"
pricing: "paid"
classification: "agent-native"
entityType: "web-api"
developerName: "MarketingRouter"
docsUrl: "https://marketingrouter.com/docs"
pricingUrl: "https://marketingrouter.com/docs-markdown/funding"
interfaces:
  - "REST API"
  - "OpenAPI"
deploymentModes:
  - "hosted"
evidenceSources:
  - title: "Agent connection and scoped authorization"
    url: "https://marketingrouter.com/docs-markdown/authentication"
    claim: "An agent requests scoped access, presents an owner approval link and polls for its own key without needing an agent inbox."
    accessedAt: "2026-10-03"
    sourceType: "official-documentation"
  - title: "Creative generation and revision"
    url: "https://marketingrouter.com/docs-markdown/creatives"
    claim: "Agents can generate and revise ad text and images, inspect previews and explicitly publish a selected creative for campaign use."
    accessedAt: "2026-10-03"
    sourceType: "official-documentation"
  - title: "Campaign preparation and approval"
    url: "https://marketingrouter.com/docs-markdown/campaigns"
    claim: "The API separates non-delivering draft preparation from approval of the exact plan and live delivery."
    accessedAt: "2026-10-03"
    sourceType: "official-documentation"
  - title: "Prepaid advertising funding and service fees"
    url: "https://marketingrouter.com/docs-markdown/funding"
    claim: "Customer deposits create credit from verified net proceeds; deposits start at $25 and the campaign service fee is 5% of actual ad spend. Payment costs and taxes are separate."
    accessedAt: "2026-10-03"
    sourceType: "official-pricing"
  - title: "Campaign performance reporting"
    url: "https://marketingrouter.com/docs-markdown/reporting"
    claim: "Agents can filter campaign reports and read weighted totals and daily delivery data."
    accessedAt: "2026-10-03"
    sourceType: "official-documentation"
verificationLevel: "documentation-reviewed"
classificationRationaleMd: "Scoped agent identity, owner approval links, idempotent writes and machine-readable operation states form the documented advertising workflow."
inclusionRationaleMd: "The API extends agent workflows from creative preparation into funded, approved Meta campaigns and ongoing performance reads and controls."
bestForMd: "Agents representing a business that wants API-managed Meta advertising with a human approving payment and spending authority."
notBestForMd: "Unsupervised card charging, advertising on other networks, or teams requiring a supported MCP interface."
limitationsMd: "Meta is the current channel. Live operation requires account activation and required agreements, verified prepaid funds, sufficient allocation, tracking where required, owner approval and network review. Live daily-budget activation and automatic card refills are unavailable; use bounded lifetime budgets."
unknownsMd: "Successful end-to-end paid delivery and acquisition performance have not been independently verified for this listing. Account and network restrictions can affect availability."
---

MarketingRouter is a hosted API for agents that manage Meta advertising for a business. Owners oversee agent access, checkout and campaign authorization in a web console.

## So agents can...

- Discover current capabilities, OpenAPI schemas and focused Markdown guides.
- Prepare a brand's advertising setup and create or connect its Facebook Page with owner authorization.
- Generate, revise and select ad copy and image variants.
- Request a customer-funded deposit and follow its verified payment state without receiving card details.
- Prepare a campaign, present its approval link, and reconcile delivery after owner approval.
- Filter performance reports and request campaign controls within approved limits.

Deposits fund advertising credit after verified processing costs and applicable tax. MarketingRouter's campaign service fee is 5% of actual ad spend. Funding does not launch an ad or authorize a higher budget.
