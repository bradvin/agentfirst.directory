---
slug: "yylo"
name: "YYLO"
description: "Command-line orchestrator for coding agents with typed task, validation, merge, and release-readiness boundaries and receipt-backed repository changes"
agentSummary: "YYLO is for developers and project operators who want coding agents to work through explicit repository boundaries. In Advanced workspaces it creates exact-base task worktrees, collects receipt-backed validation evidence, and lands completed changes through a managed one-task native Git merge whose verified Git result is recorded with separate, retryable Ledger projection; tests and semantic review remain explicit external project checks. Agent providers and release or deployment authority remain external."
seoTitle: "YYLO: Typed Task Orchestration for Coding Agents"
seoDescription: "Explore YYLO's Advanced-mode workflow for isolated coding-agent task worktrees, receipt-backed validation, and managed native Git delivery for repository changes."
category: "orchestrators"
tags:
  - "coding-agents"
  - "cli"
  - "git-worktrees"
  - "task-management"
  - "native-git"
websiteUrl: "https://yylo.dev"
githubUrl: "https://github.com/yylo-dev/yylo"
pricing: "open-source"
classification: "agent-native"
entityType: "software-application"
developerName: "YYLO"
docsUrl: "https://github.com/yylo-dev/yylo#readme"
licenseUrl: "https://github.com/yylo-dev/yylo/blob/main/LICENSE"
interfaces:
  - "CLI"
deploymentModes:
  - "local"
evidenceSources:
  - title: "YYLO CLI repository README"
    url: "https://github.com/yylo-dev/yylo"
    claim: "The README describes YYLO as a command-line orchestrator for coding agents, repeatable workflows, and receipt-backed repository changes, with typed task, validation, merge, and release-readiness boundaries, and documents agent runs through commands such as yy pi and the agent aliases it lists."
    accessedAt: "2026-09-08"
    sourceType: "official-repository"
  - title: "YYLO CLI typed task and merge flow documentation"
    url: "https://github.com/yylo-dev/yylo#typed-task-and-merge-flow"
    claim: "The documentation describes task start freezing the protected target SHA and creating a dedicated branch/worktree for implementation in Advanced workspaces, finish gating that verifies a clean committed result and queues it without merging (preflight is optional, read-only diagnostics, not a gate), and merge land composing one immutable task source with native Git and expected-old ref protection. Tests and semantic reviews are explicit project checks outside merge, which launches no models, chooses no reviewers, schedules no suites, and maintains no validation cache."
    accessedAt: "2026-09-29"
    sourceType: "official-documentation"
  - title: "YYLO CLI npm registry metadata (published artifact 0.2.10)"
    url: "https://registry.npmjs.org/@yylo/cli"
    claim: "The npm registry metadata for @yylo/cli (MIT) shows the published package with bin commands including yylo, yy, and ypl. Its dist-tags point latest at 0.2.10 and next at 0.2.3-rc.3. The published 0.2.10 artifact embeds a README that is byte-for-byte the current repository README, so the repository-README-derived wording in this listing is the published artifact's own wording. Capability claims in this listing are pinned to this exact published npm 0.2.10 artifact. This registry evidence supports the package, bins, license metadata, dist-tags, and embedded README only; it does not support the product website's version labels, which are cited as their own evidence item below."
    accessedAt: "2026-09-30"
    sourceType: "official-documentation"
  - title: "YYLO product website homepage release identification"
    url: "https://www.yylo.dev/"
    claim: "The website homepage, served as a direct 200 response at this exact URL, presents the YYLO control plane with a Stable 0.2.2 version chip and an install quickstart pinned to @yylo/cli@0.2.2, identifying 0.2.2 as the current stable release on that page. The homepage does not itself describe Simple/Advanced workspace modes, the earlier merge-queue surface, or native Git delivery; those documentation facts are cited separately at the documentation URL below."
    accessedAt: "2026-10-01"
    sourceType: "official-product-page"
  - title: "YYLO documentation version channels and source-candidate behavior"
    url: "https://www.yylo.dev/docs/yylo"
    claim: "The YYLO documentation page, served as a direct 200 response at this exact URL, labels the install channels Stable 0.2.2 and Prerelease 0.2.3-rc.3 (opt in); states that Stable 0.2.2 uses the earlier merge-queue surface and that the native commands documented below it should not be run on that version; presents the Simple/Advanced workspace-mode selection as source behavior that is not a claim about the stable release; and documents the task lifecycle and native Git delivery under its Prerelease 0.2.3-rc.3 heading. These stable-channel labels lag the published registry artifact and that stable channel does not contain the capabilities described in this listing; the listing's version anchor is the npm 0.2.10 artifact whose README is the current repository README. The disagreement between the website's stable-channel text and the registry's latest artifact is disclosed here rather than relied on for any capability claim."
    accessedAt: "2026-10-01"
    sourceType: "official-documentation"
verificationLevel: "documentation-reviewed"
reviewedBy: "foo-bender"
reviewedAt: "2026-10-02"
classificationRationaleMd: "YYLO is agent-native because coding agents are the actors it coordinates: it launches agent runs, routes typed tasks into dedicated Advanced-mode worktrees, and delivers protected changes through a managed one-task native Git merge whose verified Git result is recorded with separate, retryable Ledger projection."
inclusionRationaleMd: "Agents work on assigned tasks in isolated exact-base Advanced-mode worktrees, produce receipt-backed commits with bounded logs, and land changes through managed native Git delivery with expected-old ref protection, keeping agent-built repository changes reviewable and recoverable."
bestForMd: "Developers and project operators who want coding agents to work in isolated Advanced-mode task worktrees with a typed lifecycle, validation evidence, and managed native Git delivery."
notBestForMd: "Teams seeking a hosted multi-tenant control plane, a visual dashboard, or orchestration of non-coding business agents."
limitationsMd: "Provider credentials and model availability remain external, coding-agent support relies on separately installed agents such as Pi or Codex, and tagging, publication, deployment, and production mutation require separate authority."
unknownsMd: "No independent benchmark of orchestration reliability or scale has been reviewed for this listing. First-party version surfaces disagree: the website names 0.2.2 stable and 0.2.3-rc.3 prerelease while npm latest points at 0.2.10. Capability claims in this listing are pinned to the published npm 0.2.10 artifact, whose embedded README is byte-for-byte the current repository README; the website's stable-channel text is treated as stale relative to that artifact and is not relied on for any capability claim."
---

YYLO is a command-line orchestrator for coding agents, repeatable workflows, and receipt-backed repository changes. Developers can run a quick agent loop, while project operators assign typed tasks that, in Advanced workspaces, create dedicated branch/worktree environments, collect validation evidence, and land changes through managed native Git delivery that records the verified Git result with separate, retryable Ledger projection.

## So agents can...

- Work on an assigned task in a dedicated, exact-base worktree instead of the shared checkout (Advanced workspaces; Simple mode keeps one shared checkout for bookkeeping)
- Produce receipt-backed commits with bounded logs and terminal-state evidence
- Land changes through a managed one-task native Git merge with expected-old ref protection — merge launches no models, chooses no reviewers, and schedules no suites; tests and semantic review stay explicit project checks
