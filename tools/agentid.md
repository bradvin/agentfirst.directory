---
slug: "agentid"
name: "AgentID"
description: "OpenID Connect sign-in for AI agents using their own verified inbox identities"
category: "agent-identity-communication"
tags:
  - "identity"
  - "authentication"
  - "openid-connect"
  - "email"
websiteUrl: "https://www.agentid.com/"
pricing: "free"
classification: "agent-native"
entityType: "service"
developerName: "AgentMail"
docsUrl: "https://www.agentid.com/docs"
verificationLevel: "documentation-reviewed"
interfaces:
  - "OpenID Connect"
  - "HTTP API"
  - "CLI"
deploymentModes:
  - "hosted"
classificationRationaleMd: "AgentID authenticates AI agents as distinct principals backed by their own inboxes. Its documented subject, actor_type, email, and optional owner claims make agent identity a core product capability rather than generic API compatibility."
bestForMd: "Application developers accepting agent-owned accounts through an existing OIDC authentication stack, and agent builders who need agents to sign in with their own identities."
limitationsMd: "The free pricing applies to applications accepting AgentID sign-ins; agents use AgentMail inbox identities. Human-owner name and email scopes require a registered client and the agent key's App: Share Owner permission or human-owner approval. Tokens last ten minutes with no refresh tokens; applications manage their own sessions, and revoking an agent key does not terminate an application's existing session."
evidenceSources:
  - title: "AgentID product page — agent sign-in and integration"
    url: "https://www.agentid.com/"
    claim: "AgentID is a product of AgentMail that lets agents sign in with their own email identities, uses one-time signatures, and provides CLI-assisted integration with existing authentication stacks."
    accessedAt: "2026-10-02"
    sourceType: "official-product-page"
  - title: "AgentID documentation — OIDC endpoints, scopes, claims, and lifetimes"
    url: "https://www.agentid.com/docs"
    claim: "The hosted OIDC provider documents authorization, token, userinfo, and client-registration endpoints; stable inbox subjects; verified email and agent actor-type claims; permission-gated owner scopes; ten-minute tokens without refresh tokens; and separate key and application-session lifecycles."
    accessedAt: "2026-10-02"
    sourceType: "official-documentation"
  - title: "AgentID first-party integration reference and product announcements"
    url: "https://www.agentid.com/llms-full.txt"
    claim: "The reference describes open and registered clients, the AgentMail inbox identity model, supported authentication-provider integrations, and free application integration without usage pricing or per-sign-in fees."
    accessedAt: "2026-10-02"
    sourceType: "official-documentation"
---

AgentID is AgentMail's hosted OpenID Connect provider for AI agents. An agent signs in as its own inbox identity rather than using a human's account. Applications receive a stable subject and an explicit agent actor-type claim; the email scope adds the agent's verified inbox address. Registered applications can request human-owner details through additional permission-controlled scopes.

Applications can integrate through an existing OIDC stack, with setup guides for Clerk, Supabase, Auth0, Better Auth, and Auth.js. The AgentID CLI assists application registration and configuration. Accepting AgentID sign-ins is free for applications.

## So agents can...

- Sign in to participating applications under their own identities without borrowing a human account.
- Present the same inbox subject across applications for the lifetime of that inbox.
- Supply a verified inbox address for the application to associate with the agent's account.
- Disclose human-owner details to registered applications when the required scopes and permissions are granted.
