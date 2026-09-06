---
slug: "symphony"
name: "Symphony"
description: "Open-source orchestration for autonomous implementation runs"
category: "orchestrators"
tags:
  - "orchestration"
  - "autonomous-runs"
  - "engineering"
websiteUrl: "https://github.com/openai/symphony"
githubUrl: "https://github.com/openai/symphony"
pricing: "open-source"
classification: "agent-native"
entityType: "software-source-code"
developerName: "OpenAI"
docsUrl: "https://github.com/openai/symphony/blob/main/SPEC.md"
licenseUrl: "https://github.com/openai/symphony/blob/main/LICENSE"
interfaces:
  - "WORKFLOW.md configuration"
  - "Linear issue-tracker integration"
  - "Codex App Server"
  - "JSON status API"
deploymentModes:
  - "self-hosted"
  - "local workspaces"
  - "remote worker hosts"
evidenceSources:
  - title: "OpenAI Symphony article — issue tracker as agent control plane"
    url: "https://openai.com/index/open-source-codex-orchestration-symphony/"
    claim: "OpenAI describes Symphony as a minimal orchestrator that maps project-management tasks to isolated Codex workspaces and lets teams manage deliverables instead of supervising individual coding sessions."
    accessedAt: "2026-09-03"
    sourceType: "official-product-announcement"
  - title: "Symphony service specification — orchestration contract and boundaries"
    url: "https://github.com/openai/symphony/blob/main/SPEC.md"
    claim: "The draft language-neutral specification defines polling, bounded concurrency, per-issue workspaces, retries, workflow configuration, logs, and Codex App Server integration, while leaving approval and sandbox policy to implementations."
    accessedAt: "2026-09-03"
    sourceType: "official-specification"
  - title: "Symphony Elixir README — prototype reference implementation"
    url: "https://github.com/openai/symphony/blob/main/elixir/README.md"
    claim: "The maintained Elixir reference implementation polls Linear, creates workspaces, runs Codex through App Server, exposes optional status surfaces, and is explicitly labeled prototype software for evaluation rather than a hardened product."
    accessedAt: "2026-09-03"
    sourceType: "official-documentation"
  - title: "Symphony repository license — Apache 2.0"
    url: "https://github.com/openai/symphony/blob/main/LICENSE"
    claim: "The Symphony specification and reference implementation are published under the Apache License 2.0."
    accessedAt: "2026-09-03"
    sourceType: "official-license"
verificationLevel: "documentation-reviewed"
classificationRationaleMd: "Symphony continuously assigns tracked work to autonomous coding-agent runs, maintains their workspaces and retries, and coordinates execution state, so it is an agent-native orchestrator rather than a passive developer library."
bestForMd: "Agent-ready engineering repositories with strong tests and documented workflows that want repeatable, ticket-driven Codex runs for routine implementation, maintenance, migration, or investigation work."
limitationsMd: "The specification is draft, its current tracker profile is Linear, and the reference implementation depends on Codex App Server plus operator-supplied credentials and infrastructure. OpenAI labels the implementation a trusted-environment preview, recommends building a hardened version, and says it does not plan to maintain Symphony as a standalone product."
unknownsMd: "There is no formal conformance suite or production support commitment in the reviewed material. Security posture, sandboxing, remote-host isolation, recovery behavior, and results depend on each implementation and repository harness and were not independently tested."
logoUrl: "https://www.google.com/s2/favicons?sz=64&domain_url=https://github.com/openai/symphony"
ogImageUrl: "https://opengraph.githubassets.com/7818f1c9907170338302b8225650b60ed1f0f67526abccda752be85ccd81a2c6/openai/symphony"
sortOrder: 10
---

Symphony turns project work into isolated, autonomous implementation runs so teams can manage work instead of supervising coding agents. OpenAI positions it as an orchestration layer for trusted engineering environments, with agents handling tasks and returning proof of work.

## Features

- Isolated autonomous implementation runs for engineering tasks
- Orchestration around project boards and queued work instead of one-off prompts
- Proof-of-work outputs such as CI status, PR review feedback, complexity analysis, and walkthrough videos
- Reference implementation plus a published spec for building Symphony in other languages
- Designed for codebases that use harness-style engineering workflows

## So agents can...

- Pick up project work from a shared queue and execute it in isolated runs
- Return structured evidence that a task was completed, reviewed, and safe to land
- Coordinate engineering work at the project level instead of acting as one supervised coding session at a time
