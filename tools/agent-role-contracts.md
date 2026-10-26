---
slug: "agent-role-contracts"
name: "Agent Role Contracts"
description: "Offline preflight checks for AI-agent role, task-scope, review-separation, and handoff declarations."
category: "agent-frameworks-standards"
tags:
  - "agent-governance"
  - "declaration-validation"
  - "nodejs"
  - "cli"
websiteUrl: "https://github.com/suirindo/agent-role-contracts"
githubUrl: "https://github.com/suirindo/agent-role-contracts"
pricing: "open-source"
classification: "agent-enabling"
entityType: "software-source-code"
verificationLevel: "documentation-reviewed"
developerName: "Netsujo"
docsUrl: "https://github.com/suirindo/agent-role-contracts/blob/main/docs/QUICKSTART.md"
licenseUrl: "https://github.com/suirindo/agent-role-contracts/blob/main/LICENSE"
interfaces:
  - "CLI"
  - "JavaScript API"
deploymentModes:
  - "local"
classificationRationaleMd: "ARC is builder tooling designed around AI-agent roles, declared authority, routed review, tasks, and handoffs. It materially enables agent-workflow builders to reject contradictory declarations before routing work."
inclusionRationaleMd: "The maintained schemas and offline checker define first-class agent role, scope, review, and handoff abstractions. The concrete outcome is deterministic preflight rejection of mismatched workflow declarations."
bestForMd: "Builders of coding-agent and multi-role workflows who want repeatable checks of declared scope, role separation, and subject freshness."
notBestForMd: "Teams seeking an agent runtime, identity provider, sandbox, or runtime authorization enforcement."
limitationsMd: "PASS means consistency of the supplied declarations under the checks run. ARC does not authenticate executors or reviewers, enforce runtime permissions, execute actions, or verify artifact bytes or evidence authenticity. Node.js 22.5 or newer is required."
unknownsMd: "Independent production adoption and the incremental benefit over a particular team's existing controls are not established by the repository documentation."
evidenceSources:
  - title: "Agent Role Contracts README"
    url: "https://github.com/suirindo/agent-role-contracts/blob/main/README.md"
    claim: "Documents offline CLI and JavaScript declaration checks, out-of-scope task and declared self-review diagnostics, stale subject binding, Node.js requirements, and the boundary between PASS and execution authority."
    accessedAt: "2026-10-27"
    sourceType: "official-repository"
  - title: "Agent Role Contracts MIT license"
    url: "https://github.com/suirindo/agent-role-contracts/blob/main/LICENSE"
    claim: "The project is distributed under the MIT license."
    accessedAt: "2026-10-27"
    sourceType: "official-license"
---

Agent Role Contracts is a Node.js CLI and library for validating declarations about AI-agent roles, authority, tasks, reviews, and handoffs before execution. Its stable v1.0.0 package is published as `@netsujo/agent-role-contracts`.

## So agents can...

- Have requested task scope checked against declared role authority before work is routed.
- Receive specific diagnostics when implementation and review collapse into the same declared role.
- Have changed task/action declarations rejected against a stale subject binding.

These outcomes concern declarations. The execution environment remains responsible for authenticating identities, enforcing actual permissions, validating evidence, and approving execution.
