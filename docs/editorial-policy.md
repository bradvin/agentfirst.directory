# Policy v0.3: Run, Equip and Enable

This is the canonical repository policy for contributors and reviewers. It implements the current v0.3 contract in [policy issue #125](https://github.com/bradvin/agentfirst.directory/issues/125). Historical policy versions and listing assessments remain history, not current acceptance decisions. [Contributor instructions](../README.md#how-to-add-a-tool) and the [review guide](tool-review-guide.md) apply this contract.

Agent First lists maintained tools, services, runtimes and standards specifically designed for agents or for people building, running and working with agents. Agent workflows must be a defining purpose, not merely a possible use. AI labels, APIs and MCP compatibility alone do not establish eligibility. Human interfaces and operators are allowed; API-only delivery, upstream providers and nonexclusive agent use are not exclusions.

## 1. Listing unit

One identifiable, maintained tool, product or service, including an installable runtime or maintained software library, specifically designed for agents or people building, running and working with agents; or one maintained agent-first protocol or interoperability standard defining a concrete agent interaction or portable agent representation.

Identify the exact offering, product mode or named standard, not just the vendor/project family. A vendor does not qualify every feature because one mode qualifies. One product is not entitled to a listing per endpoint, skill, connector or transport. A standard and its runtime, SDK, reference CLI or hosted implementation are distinct units; one does not automatically qualify or justify duplicate listings for the others.

A stable identity and adoption boundary are required: someone can install, provision, subscribe to or deliberately use the maintained offering; for a standard, builders can implement its published contract. Commercial status, a separate domain or bill, novelty, popularity and exclusive agent use are not requirements. Open-source code and libraries can qualify independently through Equip without being runtimes.

## 2. Mandatory first gate: product fit before evidence

Complete at least one sentence without relying on labels, using the small positioning packet in section 4:

- **Run:** A person running agents adopts **[specific offering]** to **[run agents]**. The offering itself is responsible for **[concrete execution, state or authority behavior]**, with meaningful customer control.
- **Equip:** A person adopts **[specific offering]** so their agent can **[concrete task or improvement]**. It is specifically designed for this workflow through **[named product features]**, rather than merely being accessible to an agent.
- **Enable:** A builder adopts **[named protocol or standard]** so **[agent/agent system as a first-class participant]** can **[concrete interaction or portable representation]** across **[system boundary]**, using **[defined shared contract]**.

“Built for agents” branding alone cannot complete these sentences. Record the primary path and any separately justified secondary path.

### Run

The offering runs agents for the customer and gives the customer meaningful control over agent execution, state or authority. Supplied or bring-your-own agents can qualify. Customers can direct operating scope and exercise a consequential execution/control boundary, rather than merely submit a job and receive its finished output. Runtimes and control planes may manage runs, persistent state, access, scheduling, isolation or intervention. No single UI control is mandatory; choosing an output template or approving a finished business result is not sufficient on its own.

A specialist platform can qualify through Run. Internal agents producing finished business outcomes do not automatically qualify the vendor. If the positioning only describes approve/edit/skip outputs and leaves customer control over execution, state or authority unknown, hold for that fact; do not infer either its presence or absence.

### Equip

The offering provides a concrete capability specifically designed for an agent workflow. This includes tools and data access, discovery, memory, context capture, structured feedback, testing, permissions and human–agent collaboration. Name what the agent can do better or newly accomplish and the product features designed to support it.

It does not have to run the agent, provision infrastructure or control execution. Resource, state or authority ownership is not required. Using upstream services, producing structured instructions or combining connectors does not automatically disqualify it. Maintained agent-focused libraries, catalogues, data services and human-operated feedback/context tools can qualify. A human buyer or operator does not make such a tool a generic human-first app.

### Enable

The listing is a maintained protocol or interoperability standard intentionally designed for agents or agent systems as first-class participants. Current first-party positioning must identify the agent role, concrete need and shared interaction or representation it defines. Examples include resource payments, agent-to-agent communication, agent-to-application interaction, identity/authorization and portable agent definitions across runtimes.

A shared, implementable contract is its contribution; running agents or managing resources is not required. Exclusive agent use, popularity, formal standards-body recognition and multiple existing independent implementations are not prerequisites. An agent-definition standard is not merely an individual instruction file or skill pack. After fit passes, verify the public specification and claimed interoperability; positioning alone proves neither implementation nor conformance.

## 3. Exclusions and boundaries

Exclude generic products whose only agent-specific contribution is a compatibility interface, marketing label or repackaged API. A dashboard, token vault, generic retry option, large tool count, new name or landing page alone does not establish agent-specific design. Assess named features and the concrete workflow together; upstream providers are allowed.

Do not reject a maintained agent-focused tool solely because it is a connector, catalogue, library, feedback tool or data service. A maintained tool generating structured agent instructions is not thereby a prompt pack. Enable is not a wrapper exception: the named standard itself must define the intentionally agent-focused shared contract.

Outside the main-listing scope:

- Standalone skills, prompt packs, templates and one-off snippets/scripts.
- Individual endpoints/adapters without an identifiable maintained offering that independently qualifies; generic connector bundles whose only agent relationship is compatibility.
- General SaaS/developer tools with only agent compatibility or an added integration, however extensive.
- Finished AI business-outcome apps without a qualifying customer-operated agent or agent-service boundary.
- Generic protocols/standards with only incidental agent compatibility; generic frameworks/libraries without an agent-specific capability. Generic HTTP, JSON and ordinary authentication standards do not qualify merely because agents use them.
- Products claiming Enable solely because they use or implement MCP, x402 or another protocol. Usage is not protocol authorship or a substitute for Run/Equip fit.

When a standard and harness share branding or contradictory positioning, identify the exact unit or hold for clarification; never blend their capabilities. Existing inclusion, competitors' inclusion and owner association confer no exception. Apply the same test to all authors and vendors.

Category rules select among eligible listings; they cannot override this policy. For example, the coding-agent **orchestrators category** requires a material lifecycle across runs, with task assignment/isolation, retained/shared state or validation evidence and a separate completion, review or landing gate. That scoped category boundary is not an extra requirement for all Run tools, or grounds to reject a valid Equip library, feedback tool or connector.

## 4. Small positioning packet, not evidence hunting

Use only:

- Identity, proposed listing unit and specific mode.
- A short explanation (target maximum 150 words) of adopter and concrete agent workflow: execution/control for Run; task/improvement and named agent-specific features for Equip; agent participant, interaction/representation, system boundary and shared contract for Enable.
- The submitted description/overview.
- If needed, at most two short first-party positioning excerpts (target combined maximum 300 words), with URLs and section names.

A relevant mode page or introductory repository/docs overview is allowed; a corporate homepage headline is not the sole authority and docs-only products are not excluded. Do not inspect claim-evidence arrays, detailed API/MCP docs, code, pricing, licensing or validators to make or rescue fit. Do not browse repeatedly for favorable wording. Meaningful contradictions in positioning produce a hold, not cherry-picking.

First-gate claims remain claims. A sophisticated false description is resolved in later evidence review; fit eligibility does not prove the capability works.

## 5. Outcomes and stop ordering

- **`pass-fit`:** record Run, Equip or Enable, the unit/mode and a one-sentence rationale identifying its route-specific behavior/features/contract. Only now proceed to claim evidence, listing accuracy/classification and technical validation. Fit is positioning eligibility only, not acceptance or `meets policy`.
- **`fail-fit`:** the described shape is outside scope. State the exact exclusion and stop with **evidence not reviewed**. Recommend nonacceptance of a new submission; do not request extra connector evidence to rescue fit, enrich metadata or commit listing changes.
- **`unclear-fit`:** a material missing fact or contradiction prevents a decision. State it and ask a bounded clarification. Stop with **evidence not reviewed**; do not enrich metadata or commit listing changes. No default approval, guessed capability or silent conversion to rejection.

Availability is a separate field. An inaccessible page alone is not a negative fit finding. If another permitted canonical overview establishes fit, record fit separately from the availability blocker; otherwise hold. Missing information is not proof that the capability is absent. An old reviewer label or the author's identity is not evidence of eligibility.

For published entries, fail/hold findings are reassessment findings only, not removal commands or claims about product quality. This policy does not authorize any listing edits/removals or reassessments.

## 6. Full review only after `pass-fit`

1. **Claim/evidence review:** verify material claims against current first-party sources, including contradictions. Distinguish stable, prerelease, repository-only and mode-specific capabilities. Do not infer runtime behavior from marketing. For Enable, verify a current public specification sufficiently defines the contract for an independent implementation. Distinguish drafts from released features and specifications from reference tools. Do not assert conformance, security or working interoperability without relevant evidence.
2. **Listing accuracy and taxonomy:** check identity, canonical URLs, category, description, interfaces, mode/deployment, claimed pricing/licensing, attribution and dates. Check duplicates/near substitutes; competition is not an exclusion. Do not invent reviewer provenance.
3. **Technical validation:** run repository content/schema/generated-data checks against the exact revision. Validation proves neither fit nor capability. State when functional testing was not performed; no unauthorized signups, credential grants, charges or production actions.
4. **Decision:** `eligible — corrections required`, `hold — evidence unresolved`, `meets policy`, or `does not meet policy`, with exact blockers and stage. Eligibility and listing accuracy are separate. `meets policy` is not merge/deploy approval or a security/performance endorsement.

### Classification and schema compatibility

Run/Equip/Enable are **inclusion routes**, not new frontmatter fields, categories or classification enum values. Record them in the review record, not the listing schema. Existing classifications remain separate and are assigned only after fit:

- `agent-native`: agents are core actors, runtimes, entities or participants in the offering.
- `agent-enabling`: purpose-built agent tooling/infrastructure materially enables agent workflows, including data, context, feedback, collaboration and maintained libraries; runtime/infrastructure ownership is not required.
- `agent-internet-protocol`: an open protocol or interaction standard designed for agent participation.

These are not quality tiers or automatic one-to-one mappings from routes. Preserve the existing classification, entity, evidence and verification contracts. Every submitted tool still needs complete first-party `evidenceSources` for structural validation; do not consult them until fit passes. Schema checks are not the semantic first gate.

## 7. Required review record

Record policy version; product/slug; exact source revision and access date; unit/mode; customer/operator and agent workflow; primary Run/Equip/Enable and any separately justified secondary route; execution/control for Run, task/improvement plus named features for Equip, or agent participant plus shared contract for Enable; permitted positioning sources/excerpts; fit outcome and reason; availability/source gaps; stage reached; evidence consulted or **evidence not reviewed**; validation actually run/results; unresolved facts; final recommendation and approval boundary.

Preserve older records as distinguishable history. A rule change invalidates affected old decisions; replay them before claiming calibration complete. Do not leave an old rejection rationale beside a superseding pass as though both were current.

## Repository checks and activation boundary

[Hypothetical calibration cases](../test/fixtures/editorial-policy-v03.json) supply bounded positioning packets and expected human-review outcomes, not actual vendor verdicts. Tests check documentation wiring, fixture consistency and existing content-validation compatibility. They do **not** execute a semantic fit evaluator or prove a deployed reviewer observes stop ordering.

This repository owns structural content validation, not an installed submission-review producer/verifier. Adoption of v0.3 in that external reviewer requires separate authorization and implementation: consume this canonical policy and version, project only the permitted positioning packet, preserve unknowns, record route-specific reasons, enforce fail/unclear stops before evidence/enrichment/acceptance, verify the same contract and bind results to the candidate revision without duplicating historical comments. Replaying these fixtures through that actual producer and verifier is a future activation gate.

Repository PR readiness is not installed-runtime rollout. No merge, deployment, listing migration, submission review/restart, schedule resume or private reviewer/configuration change is authorized by this document. [The companion website](https://github.com/bradvin/agentfirst.directory-site) owns rendered public and machine-readable guidance; it must agree with this canonical path and semantics. Neither a companion merge nor a fabricated companion commit pin is assumed.
