---
slug: "ux3-product-design-harness"
name: "UX3 Product Design Harness"
description: "Product-review contracts and validators for bounded decisions by AI agents"
seoTitle: "UX3 Product Design Harness: Agent Review Contracts"
seoDescription: "Review product decisions with an AI agent using three flows, explicit evidence gaps, validated review contracts and bounded handoffs. Free MIT-licensed skill."
agentSummary: "UX3 Product Design Harness gives an existing AI agent a structured product-review workflow. The agent inspects User Flow, Evidence Flow and Business Flow, then returns one verdict, the weakest flow and a bounded next action. Canonical validators check output consistency, and a continue handoff requires a matching context pack. Humans remain accountable for decisions."
category: "agent-frameworks-standards"
tags:
  - "agent-skills"
  - "product-design"
  - "product-management"
  - "decision-contracts"
  - "human-in-the-loop"
websiteUrl: "https://cis2042.github.io/ux3-product-design-harness/"
githubUrl: "https://github.com/cis2042/ux3-product-design-harness"
logoUrl: "https://cis2042.github.io/ux3-product-design-harness/assets/ux3-logo.jpeg"
logoWidth: 200
logoHeight: 200
ogImageUrl: "https://cis2042.github.io/ux3-product-design-harness/assets/product-design-harness-cover.svg"
ogImageWidth: 1280
ogImageHeight: 720
pricing: "open-source"
classification: "agent-enabling"
entityType: "software-source-code"
developerName: "cis2042"
docsUrl: "https://github.com/cis2042/ux3-product-design-harness/blob/main/docs/HARNESS.md"
licenseUrl: "https://github.com/cis2042/ux3-product-design-harness/blob/main/LICENSE"
interfaces:
  - "SKILL.md"
  - "JSON Schema review and context-pack contracts"
  - "Python validation CLI"
deploymentModes:
  - "local"
evidenceSources:
  - title: "Canonical installable skill instructions"
    url: "https://github.com/cis2042/ux3-product-design-harness/blob/813a69973c16e7da2c4c32bc128a71be22c3f198/skills/product-design-harness/SKILL.md"
    claim: "The maintained agent skill defines three Flow reviews, Quick Gate/Standard Gate/Council modes, canonical verdicts, evidence references and execution boundaries."
    accessedAt: "2026-10-23"
    sourceType: "official-repository"
  - title: "Canonical review and handoff validator"
    url: "https://github.com/cis2042/ux3-product-design-harness/blob/813a69973c16e7da2c4c32bc128a71be22c3f198/scripts/check_review.py"
    claim: "The validator checks JSON Schema and semantic consistency, enforces worst-lane verdict and deterministic weakest-flow consistency, and requires matching identity, evidence and controls for a continue context pack."
    accessedAt: "2026-10-23"
    sourceType: "official-repository"
  - title: "Validated execution-boundary helper"
    url: "https://github.com/cis2042/ux3-product-design-harness/blob/813a69973c16e7da2c4c32bc128a71be22c3f198/scripts/jev_gate.py"
    claim: "Offline routing remains advisory and cannot bypass review. Boundary extraction requires a canonical review and preserves its allowed actions, prohibitions, human approval gates and stop conditions."
    accessedAt: "2026-10-23"
    sourceType: "official-repository"
  - title: "MIT license"
    url: "https://github.com/cis2042/ux3-product-design-harness/blob/813a69973c16e7da2c4c32bc128a71be22c3f198/LICENSE"
    claim: "The maintained source is available under the MIT License, including permission to use, modify and redistribute subject to its notice requirements."
    accessedAt: "2026-10-23"
    sourceType: "official-license"
verificationLevel: "documentation-reviewed"
classificationRationaleMd: "The skill materially enables agent-led product review through maintained review contracts, deterministic validators and bounded context-pack handoffs. Its value is the review and permission contract that the agent follows, rather than a generic integration badge."
inclusionRationaleMd: "An agent can turn a feature, experiment, launch or feedback decision into a validated verdict and a restricted next action, while preserving explicit evidence gaps and human-owned controls across a handoff."
bestForMd: "Product teams using an existing AI agent to assess whether a feature, experiment or launch has enough evidence for its next bounded action."
notBestForMd: "A hosted agent runtime, a multi-agent execution orchestrator, or automatic authorization to deploy a product."
limitationsMd: "Requires the complete resources directory, an existing compatible agent, and Python 3 plus jsonschema for validation. Validators check structure and internal consistency, not evidence truth. The helper does not enforce host runtime permissions or grant listed human approvals."
unknownsMd: "Independent commercial outcomes and compatibility across every agent runtime have not been verified for this listing. Agent-provider inference and optional external research may incur separate costs."
---

UX3 Product Design Harness is an MIT-licensed skill for reviewing product decisions with an existing AI agent. The workflow connects User Flow, Evidence Flow and Business Flow, then emits `continue`, `verify` or `stop_reframe` with the weakest flow, evidence gaps and explicit execution boundaries.

The maintained package includes prompts, decision rules, schemas, templates, validators, documentation and worked examples. Install the complete skill folder so its referenced resources remain available. The product review contract carries allowed actions, prohibitions, escalation conditions, stop conditions and accountable human controls.

## So agents can...

- Review a proposed feature before a team commits more engineering effort.
- Convert an uncertain claim into one bounded verification step.
- Produce a context pack whose scope and controls match a validated continue review.
- Preserve human-owned decisions and evidence limitations in the handoff to execution.

The framework supplies review contracts and validators; the operator's runtime performs execution and enforces permissions. A valid review does not prove that its supplied evidence is true or replace the accountable owner's decision.

For installation and examples, use the [canonical repository](https://github.com/cis2042/ux3-product-design-harness). To discuss adoption in a team's product workflow, the author's existing contact is [LinkedIn](https://www.linkedin.com/in/cis2042/).
