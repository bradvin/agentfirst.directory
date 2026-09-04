---
slug: "local-ci"
name: "Local CI"
description: "Source-available local GitHub Actions runner designed for AI-agent development loops"
category: "agent-testing-qa"
tags:
  - "local-ci"
  - "agent-ci"
  - "github-actions"
  - "developer-tools"
websiteUrl: "https://local-ci.dev/"
githubUrl: "https://github.com/redwoodjs/local-ci"
logoUrl: "https://avatars.githubusercontent.com/u/45050444?v=4"
pricing: "source-available"
classification: "agent-enabling"
entityType: "software-application"
developerName: "RedwoodJS Inc"
docsUrl: "https://local-ci.dev/"
licenseUrl: "https://github.com/redwoodjs/local-ci/blob/main/LICENSE"
interfaces:
  - "command-line interface"
  - "NDJSON event stream"
  - "agent skill"
deploymentModes:
  - "local Docker"
  - "remote Docker"
  - "local macOS virtual machines"
evidenceSources:
  - title: "Local CI product site — local GitHub Actions runner workflow"
    url: "https://local-ci.dev/"
    claim: "The current product site documents local GitHub Actions execution, local caches, pause-on-failure, and retry-in-place workflows for coding agents."
    accessedAt: "2026-09-03"
    sourceType: "official-product-page"
  - title: "Local CI repository — requirements, interfaces, and Agent CI migration"
    url: "https://github.com/redwoodjs/local-ci"
    claim: "The maintained repository documents the CLI and NDJSON interface, Docker requirement, platform caveats, and the rename from Agent CI to Local CI."
    accessedAt: "2026-09-03"
    sourceType: "official-repository"
  - title: "Local CI license — FSL-1.1-MIT"
    url: "https://github.com/redwoodjs/local-ci/blob/main/LICENSE"
    claim: "RedwoodJS Inc publishes Local CI under FSL-1.1-MIT, which restricts competing use and grants an MIT future license after two years."
    accessedAt: "2026-09-03"
    sourceType: "official-license"
verificationLevel: "documentation-reviewed"
classificationRationaleMd: "The software shortens an agent's development feedback loop by executing existing GitHub Actions workflows locally; it enables agents but does not itself plan or carry out general user goals."
bestForMd: "Coding-agent workflows that need repeatable local pre-flight checks, fast dependency-cache reuse, and the ability to inspect and retry a failed CI step before pushing."
limitationsMd: "A running Docker provider is required for ordinary jobs. macOS jobs require Apple Silicon plus Tart and sshpass, and Windows jobs are not supported. The canonical product and package are now Local CI; the Agent CI package remains a compatibility alias only during the 0.x line."
unknownsMd: "No workflow-compatibility claim was hands-on tested for this record."
sortOrder: 40
---

Local CI, formerly Agent CI, is a local GitHub Actions runner built for AI-agent development workflows. It focuses on running workflows on your machine with near-instant cache reuse, pausing on failures so an agent can fix the issue in place, and retrying without pushing commits to trigger remote CI.

## Features

- Local execution of GitHub Actions workflows with bind-mounted caches for fast reruns
- Pause-on-failure flow that preserves container state so fixes can be applied before retrying
- Retry support for failed steps instead of restarting the whole workflow from scratch
- Emulation layer around the official GitHub Actions runner binary rather than a full custom reimplementation
- Guidance for integrating local CI runs into agent instruction files like `AGENTS.md` or `CLAUDE.md`

## So agents can...

- Run CI checks locally before pushing code and cut feedback loops from minutes to seconds
- Inspect and fix failing workflow steps without losing the environment state
- Treat GitHub Actions as part of an iterative local agent workflow instead of a remote-only gate
