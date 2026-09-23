---
slug: "provenant"
name: "Provenant"
description: "Agent action authorization with mandates, policy checks, human approvals, and an audit ledger"
category: "api-access-orchestration-layers"
tags: ["authorization", "agent-governance", "human-approval", "mcp", "api"]
websiteUrl: "https://provenant.identiqube.com/"
logoUrl: "https://www.google.com/s2/favicons?sz=64&domain_url=https%3A%2F%2Fprovenant.identiqube.com%2F"
ogImageUrl: "https://provenant.identiqube.com/og-image.png"
pricing: "freemium"
classification: "agent-native"
entityType: "service"
developerName: "IdentiQube"
docsUrl: "https://provenant.identiqube.com/documentation/connect"
pricingUrl: "https://provenant.identiqube.com/pricing"
interfaces: ["REST API", "TypeScript SDK", "Python SDK", "MCP"]
deploymentModes: ["hosted", "self-hosted"]
classificationRationaleMd: "Agents, their mandates, and proposed actions are core product entities. The service evaluates what an agent is authorized to do and can mediate downstream execution."
bestForMd: "Agent builders who need reusable authorization and human approval around actions such as sending messages, changing records, and calling business APIs."
limitationsMd: "Controls apply to integrated actions. For gateway enforcement, independent downstream credentials must be kept out of the agent runtime, and a trusted integration must map business actions to policy descriptors. The control plane is commercially licensed; Apache-2.0 licensing applies to the SDKs and examples."
evidenceSources:
  - title: "Provenant core concepts"
    url: "https://provenant.identiqube.com/documentation/concepts"
    claim: "Documents agents, mandates, policies, approval decisions, budgets and ledger records as the governance model."
    accessedAt: "2026-09-11"
    sourceType: "official-documentation"
  - title: "Connect an agent to Provenant"
    url: "https://provenant.identiqube.com/documentation/connect"
    claim: "Documents SDK and API integration, MCP tool calls, and gateway execution with downstream credentials."
    accessedAt: "2026-09-11"
    sourceType: "official-documentation"
  - title: "Provenant pricing"
    url: "https://provenant.identiqube.com/pricing"
    claim: "Publishes Free and paid plans, with a self-hosted option."
    accessedAt: "2026-09-11"
    sourceType: "official-pricing"
  - title: "Provenant public examples"
    url: "https://github.com/IdentiQube/Provenant-examples"
    claim: "Maintained integration examples and Apache-2.0 licensing for the examples."
    accessedAt: "2026-09-11"
    sourceType: "official-repository"
verificationLevel: "documentation-reviewed"
---

Provenant evaluates routed agent actions against explicit mandates and policies. Decisions allow an action, hold it for human approval, or deny it, with a reason and an audit record. Budgets provide an additional control for actions with a declared value.

## So agents can...

- Request authorization before sending a message, updating a record, or invoking a business API.
- Hold actions that require a person's approval and check the existing action's status.
- Route execution through a gateway that holds downstream credentials and applies configured controls.

SDK authorization calls require the integrating application to honor the decision. Gateway enforcement requires the credential and action-description boundaries documented above.
