---
slug: "tessamonials"
name: "Tessamonials"
description: "Voice and text customer interviews with scoped agent access to campaigns, feedback, and testimonials"
seoTitle: "Tessamonials: Customer Interview Workflows for AI Agents"
seoDescription: "Let AI assistants prepare interview campaigns, read customer feedback and transcripts, and manage testimonials through a scoped, role-aware MCP connector."
agentSummary: "Tessamonials lets connected AI assistants prepare customer interview campaigns and invitations, retrieve stored feedback, transcripts and summaries, and manage testimonials. The hosted service conducts contextual voice or text interviews and retains results for review. Company roles and OAuth scopes govern access; creating an invitation, sending its email, approving a testimonial, and publishing it are separate operations."
category: "marketing-seo"
tags:
  - "mcp"
  - "customer-research"
  - "voice-interviews"
  - "customer-feedback"
  - "testimonials"
websiteUrl: "https://tessamonials.com/"
logoUrl: "https://tessamonials.com/images/favicon-48.png?v=2"
logoWidth: 48
logoHeight: 48
ogImageUrl: "https://tessamonials.com/images/og-image-7d2d306a588fac6a94066dd5635c7a5f.png?vsn=d"
ogImageWidth: 1200
ogImageHeight: 630
pricing: "free"
classification: "agent-enabling"
entityType: "web-api"
developerName: "Second Coffee, LLC"
docsUrl: "https://tessamonials.com/docs/mcp"
pricingUrl: "https://tessamonials.com/terms"
interfaces:
  - "Streamable HTTP MCP with OAuth 2.0 and PKCE"
  - "Web application"
deploymentModes:
  - "hosted"
evidenceSources:
  - title: "Tessamonials MCP connector documentation"
    url: "https://tessamonials.com/docs/mcp"
    claim: "Documents the hosted endpoint, OAuth/PKCE, 21 tools, company roles and scopes, paused campaign creation, revision-checked updates, separate invitation creation/email and testimonial approval/publication, and retrieval of stored interview evidence without new Tessa model calls."
    accessedAt: "2026-10-21"
    sourceType: "official-documentation"
  - title: "Tessamonials product overview"
    url: "https://tessamonials.com/"
    claim: "Describes customer interviews by voice or text, contextual follow-up questions, customer feedback and testimonial drafts, and the lifetime allowance of 25 connected voice interviews per Company excluding text chats and member tests."
    accessedAt: "2026-10-21"
    sourceType: "official-product-page"
  - title: "Tessamonials terms of service"
    url: "https://tessamonials.com/terms"
    claim: "Identifies Second Coffee, LLC as operator; says the hosted service is currently without charge, limits each Company to 25 lifetime connected voice interviews, and prohibits fabricated testimonials and certain sensitive-data uses."
    accessedAt: "2026-10-21"
    sourceType: "official-legal"
  - title: "Tessamonials participant consent notice"
    url: "https://tessamonials.com/consent"
    claim: "Explains default approval of saved testimonial drafts and revisions, participant unapproval and withdrawal, separate customer publication, retention with active consent, and runtime-side audio deletion after transcript import."
    accessedAt: "2026-10-21"
    sourceType: "official-legal"
  - title: "Tessamonials privacy policy"
    url: "https://tessamonials.com/privacy"
    claim: "Describes voice and AI provider processing, transcript and testimonial retention, runtime-side audio deletion, company-controlled publication, and separate deletion timing for provider systems, backups and customer-held copies."
    accessedAt: "2026-10-21"
    sourceType: "official-legal"
verificationLevel: "documentation-reviewed"
classificationRationaleMd: "Connected agents can conduct a substantive customer-research workflow: configure campaigns, prepare recipient context and invitations, and retrieve stored answers, findings, transcripts and campaign summaries for analysis. Tessamonials owns the contextual interview process and persistent research evidence, not just a generic MCP wrapper. Company roles, scoped access, revision checks and separate send/publish operations constrain the agent's work."
inclusionRationaleMd: "Marketing & SEO is the closest existing category because agents can research customer needs and evaluate testimonial material from reviewable interview evidence. The documented workflow exposes source transcripts, findings, counts and consent states rather than only promotional copy. This is a customer-research and testimonial workflow, not an SEO measurement service, general voice-agent runtime, or autonomous-agent orchestrator."
bestForMd: "Teams using AI assistants to prepare customer-research campaigns, analyze collected interview evidence, and curate testimonials while keeping invitation delivery and public visibility explicit."
notBestForMd: "Teams seeking a general telephony or voice-agent runtime, recorded audio/video testimonials, an SEO ranking monitor, or unlimited free voice interviewing."
limitationsMd: "OAuth scopes and company membership/roles apply on every call; write access is not universally subject to human approval. Owners/admins can launch or pause campaigns, researchers can otherwise change data and send invitations, and viewers are read-only. Creating an invitation does not send email; queued email is not confirmed delivery. Saved in-interview testimonials and revisions are approved for use by default; participants can unapprove them, with that choice persisting until reapproval. The MCP approval tool can approve the exact current draft on a participant's behalf; approval starts hidden and publication is separate. The team chooses which approved testimonials and pages to show. The service is currently without charge, but each Company has only 25 connected voice interviews for its lifetime; text chats and member tests do not count and the allowance does not reset. Interview content is processed by voice/AI providers and connected assistants may retain their own copies. Runtime-side audio is deleted after transcript import, not retained as an audio testimonial; provider deletion timing can differ. New campaigns default to 90-day interview retention, but active testimonial consent retains associated sensitive interview data until withdrawal or authorized deletion. Withdrawal removes active public display and sensitive data, not necessarily external copies or backups immediately. Terms restrict regulated health/payment-card data and place responsibility for consent and truthful endorsements on customers."
unknownsMd: "No authenticated MCP session, tool execution, end-to-end interview, invitation delivery, publication, independent security audit, or participation/performance benchmark was tested for this listing. Public documentation and an unauthenticated OAuth challenge do not establish those outcomes. No public backend source license or self-hosted feature parity was established."
---

Tessamonials runs contextual customer interviews by voice or text and stores feedback, transcripts, findings and testimonial drafts for a team to review. Its hosted MCP endpoint is https://tessamonials.com/mcp. Connected assistants work within the user's company memberships, OAuth scopes and role permissions.

## So agents can...

- prepare a paused interview campaign, revise its questions with conflict checks, and add recipient context before invitations are sent
- retrieve completed interviews, paginated transcripts, stored findings and campaign summaries as evidence for customer research
- distinguish preparing a personal invitation link from the separate call that queues its email
- inspect testimonial consent states and manage approved testimonial visibility separately from approval

This listing is documentation-reviewed. Testimonial approval is not a claim of independently verified endorsements: saved in-interview drafts are approved by default, participants can unapprove or withdraw, and the customer controls publication. The product's illustrative example testimonials are not evidence of measured customer results.
