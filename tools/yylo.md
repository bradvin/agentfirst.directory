---
slug: "yylo"
name: "YYLO"
description: "Command-line orchestrator for coding agents with typed task, validation, merge, and release-readiness boundaries and receipt-backed repository changes"
category: "orchestrators"
tags:
  - "coding-agents"
  - "cli"
  - "git-worktrees"
  - "task-management"
  - "merge-queue"
websiteUrl: "https://github.com/yylo-dev/yylo"
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
    claim: "The documentation describes task start freezing the protected target SHA and creating a dedicated branch/worktree for implementation, preflight and finish gating, and a merge queue that owns risk-based review with zero, one, or two sequential reviewers depending on risk."
    accessedAt: "2026-09-08"
    sourceType: "official-documentation"
  - title: "YYLO CLI npm package"
    url: "https://www.npmjs.com/package/@yylo/cli"
    claim: "The npm package @yylo/cli distributes the yylo and yy commands for orchestrating coding agents."
    accessedAt: "2026-09-08"
    sourceType: "official-product-page"
verificationLevel: "documentation-reviewed"
classificationRationaleMd: "YYLO is agent-native because coding agents are the actors it coordinates: it launches agent runs, routes typed tasks into dedicated worktrees, and gates protected merges behind a queued, risk-based review process."
inclusionRationaleMd: "Agents work on assigned tasks in isolated exact-base worktrees, produce receipt-backed commits with bounded logs, and land changes through a fenced merge queue, keeping agent-built repository changes reviewable and recoverable."
bestForMd: "Developers and project operators who want coding agents to work in isolated task worktrees with a typed lifecycle, validation evidence, and risk-based merge review."
notBestForMd: "Teams seeking a hosted multi-tenant control plane, a visual dashboard, or orchestration of non-coding business agents."
limitationsMd: "Provider credentials and model availability remain external, coding-agent support relies on separately installed agents such as Pi or Codex, and tagging, publication, deployment, and production mutation require separate authority."
unknownsMd: "No independent benchmark of orchestration reliability or scale has been reviewed for this listing."
---

YYLO is a command-line orchestrator for coding agents, repeatable workflows, and receipt-backed repository changes. Developers can run a quick agent loop, while project operators assign typed tasks that create dedicated branch/worktree environments, collect validation evidence, and land changes through a fenced merge queue with risk-based review.

## So agents can...

- Work on an assigned task in a dedicated, exact-base worktree instead of the shared checkout
- Produce receipt-backed commits with bounded logs and terminal-state evidence
- Land changes through a merge queue that sizes review to risk, from no semantic reviewer to two sequential reviewers
