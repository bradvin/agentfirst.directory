---
slug: "openrig"
name: "OpenRig"
description: "Local control plane for persistent Claude Code and Codex teams with durable work ownership, review, proof, and restore state"
agentSummary: "OpenRig lets a lead coding agent route work to named Claude Code and Codex seats without a person relaying messages between terminals. Its local control plane retains task ownership, proof, transcripts, and restore state, while the shipped starter separates implementation from an independent check before a person decides whether to publish the change."
seoTitle: "OpenRig Persistent Teams for Claude Code and Codex"
seoDescription: "Run named Claude Code and Codex seats as a local team with durable task ownership, independent checks, proof records, and explicit restore outcomes."
category: "orchestrators"
tags:
  - "coding-agents"
  - "multi-agent"
  - "orchestration"
  - "local-first"
  - "tmux"
websiteUrl: "https://openrig.dev"
githubUrl: "https://github.com/mvschwarz/openrig"
pricing: "open-source"
classification: "agent-native"
entityType: "software-application"
developerName: "Mike Schwarz"
docsUrl: "https://github.com/mvschwarz/openrig/blob/v0.6.4/docs/reference/getting-started.md"
licenseUrl: "https://github.com/mvschwarz/openrig/blob/v0.6.4/LICENSE"
interfaces:
  - "CLI"
  - "terminal UI"
  - "MCP"
deploymentModes:
  - "local self-hosted"
evidenceSources:
  - title: "OpenRig product page"
    url: "https://openrig.dev"
    claim: "OpenRig documents persistent coding-agent teams, direct specialist messaging, durable task ownership, and a terminal UI for seeing team structure and work."
    accessedAt: "2026-10-02"
    sourceType: "official-product-page"
  - title: "OpenRig v0.6.4 README"
    url: "https://github.com/mvschwarz/openrig/blob/v0.6.4/README.md"
    claim: "The tagged README documents the local CLI and TUI, named Claude Code and Codex seats, queue-backed work, reviewed starter workflow, snapshot and restore behavior, supported operating systems, and runtime prerequisites."
    accessedAt: "2026-10-02"
    sourceType: "official-documentation"
  - title: "OpenRig v0.6.4 getting-started guide"
    url: "https://github.com/mvschwarz/openrig/blob/v0.6.4/docs/reference/getting-started.md"
    claim: "The tagged guide defines an outcome owner and independent checker, durable queue ownership, review of the exact candidate, and the boundary between OpenRig orchestration and provider permission or sandbox controls."
    accessedAt: "2026-10-02"
    sourceType: "official-documentation"
  - title: "OpenRig v0.6.4 release"
    url: "https://github.com/mvschwarz/openrig/releases/tag/v0.6.4"
    claim: "The stable release identifies CLI and TUI as supported interfaces, places the web UI in maintenance mode, and records current restore, sandbox, reboot, and platform limitations."
    accessedAt: "2026-10-02"
    sourceType: "official-product-announcement"
  - title: "OpenRig v0.6.4 Apache 2.0 license"
    url: "https://github.com/mvschwarz/openrig/blob/v0.6.4/LICENSE"
    claim: "The reviewed OpenRig release is licensed under Apache License 2.0 and identifies Mike Schwarz as the copyright holder."
    accessedAt: "2026-10-02"
    sourceType: "official-license"
verificationLevel: "documentation-reviewed"
reviewedBy: "foo-bender"
reviewedAt: "2026-10-03"
classificationRationaleMd: "OpenRig is built around coding agents as persistent, named workers: a lead seat routes work to specialist Claude Code and Codex seats while the control plane retains team topology, task ownership, communication, proof, and recovery state."
inclusionRationaleMd: "OpenRig owns a material lifecycle across coding-agent runs. It assigns queue-backed work to named seats, runs workers in separate tmux sessions, retains shared state and evidence, and routes a candidate from an owner to an independent checker before a person decides whether to publish it."
bestForMd: "Developers who already use Claude Code or Codex and want a local, persistent team with explicit roles, durable work ownership, direct cross-harness communication, independent checks, and recoverable seat identities."
notBestForMd: "Teams seeking a managed cloud service, strong multi-tenant security isolation, native Windows support, or automatic code merging and deployment."
limitationsMd: "The reviewed v0.6.4 release requires Node.js 22 or 24 and tmux on macOS or Linux; Apple silicon Macs should use Node.js 22, and WSL2 is untested. Claude Code or Codex accounts must be authenticated separately, and provider model-usage costs still apply. OpenRig provides operational separation, not a security boundary; starter seats share a working directory. Daemon startup and managed launches write provider hooks, trust records and settings, including pre-trusting workspaces; OPENRIG_HOME does not isolate those provider files. Back up relevant settings because there is no complete preservation or rollback guarantee, and rig setup --dry-run does not preview every later effect. Native provider permissions and sandboxes govern execution, while broader command allowances require an explicit choice. Keep the daemon on loopback or a trusted private network, not the public internet. Known release limits include a restore check that can incorrectly flag a working Claude seat, the default Codex sandbox blocking daemon access, and no automatic daemon restart after reboot."
unknownsMd: "This review did not install or run OpenRig. Pi appears in current marketing and repository source but not in the tagged v0.6.4 first-use path, so it is not claimed here. Slack, multi-host operation, restore behavior, and cross-seat handoffs were not independently tested. The website documentation still identifies version 0.5.14, so release-specific claims are pinned to v0.6.4 sources."
---

OpenRig is a local control plane for organizing ordinary Claude Code and Codex sessions into a persistent team. It gives each role a stable seat and address, tracks owned work in a durable queue, and keeps project, proof, transcript, and restore state outside any one agent's context window.

Unlike a desktop workspace, ticket runner, company-governance layer, or credential gateway, OpenRig focuses on the topology of a coding-agent team. Agents communicate through their terminal sessions, route work to named specialists, and return reviewed evidence while the person remains responsible for deciding what should be published or landed.

## So agents can...

- Assign and hand off durable queue work to named Claude Code or Codex seats.
- Ask specialists directly and retain communication, task, project, and proof state beyond one session.
- Route an implementation to an independent checker and record the result without a person relaying messages between terminals.
- Restore the same team addresses after interruption and report whether each seat resumed, rebuilt, started fresh, or failed.
