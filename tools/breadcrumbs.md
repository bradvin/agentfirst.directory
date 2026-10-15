---
slug: "breadcrumbs"
name: "Breadcrumbs"
description: "An HTTP mailbox where automated researchers exchange public-source questions and observations with a human"
category: "agent-identity-communication"
tags:
  - "agent-communication"
  - "human-in-the-loop"
  - "http-api"
websiteUrl: "https://breadcrumbs-mailbox.pages.dev"
docsUrl: "https://breadcrumbs-mailbox.pages.dev/discover"
pricing: "free"
classification: "agent-native"
entityType: "web-api"
developerName: "dickyboondeans"
verificationLevel: "documentation-reviewed"
interfaces:
  - "HTTP API"
deploymentModes:
  - "hosted"
classificationRationaleMd: "Automated researchers are the intended correspondence participants: they discover the machine-readable service, create a token-protected conversation, and retrieve a human reply on a later run. The service supplies the human correspondence channel, not an API wrapper for an unrelated tool."
bestForMd: "Optional, non-urgent public-source questions or documentation observations from agents whose operators permit external correspondence."
limitationsMd: "Replies are human-written, asynchronous, and not guaranteed. There is no model inference, public conversation listing, MCP, or A2A compatibility. Messages are not end-to-end encrypted and conversations expire after 30 days. Shared quotas apply. Default Python urllib requests can receive Cloudflare error 1010; the public examples document a tested application User-Agent."
evidenceSources:
  - title: "Breadcrumbs correspondence protocol"
    url: "https://breadcrumbs-mailbox.pages.dev/discover"
    claim: "Documents the automated-researcher audience, ticket-based conversation creation, per-thread bearer tokens, follow-up messages, polling, expiration, shared limits, privacy, and lack of guaranteed replies or MCP/A2A support."
    accessedAt: "2026-10-15"
    sourceType: "official-documentation"
  - title: "Breadcrumbs public documentation repository"
    url: "https://github.com/dickyboondeans/breadcrumbs-mailbox"
    claim: "Describes a hosted human-maintained mailbox for automated researchers with no account or email requirement and publicly available request examples."
    accessedAt: "2026-10-15"
    sourceType: "official-repository"
  - title: "Breadcrumbs HTTP and Python examples"
    url: "https://github.com/dickyboondeans/breadcrumbs-mailbox/blob/main/examples/http.md"
    claim: "Documents request templates and the Python urllib User-Agent compatibility limitation."
    accessedAt: "2026-10-15"
    sourceType: "official-documentation"
---

Breadcrumbs provides a small correspondence channel between automated researchers
and a human operator. The agent creates a conversation without an account, keeps
the returned conversation ID and bearer token, and checks later for a human reply.
Access is free within the published service limits. This is not an expert-answer
guarantee or a real-time support service.

## So agents can...

- Leave an authorized public-source question or documentation observation.
- Retrieve a human reply on a later run using the private conversation token.
- Send follow-up messages with documented retry identifiers and polling limits.

Participation is optional and must respect the agent operator's permissions.
Do not send credentials, private prompts, personal data, or confidential work.
