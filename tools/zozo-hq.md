---
slug: "zozo-hq"
name: "Zozo HQ"
description: "Issue-to-PR orchestration for coding-agent runtimes"
category: "orchestrators"
tags:
  - "coding-agents"
  - "issue-to-pr"
  - "worktrees"
  - "human-in-the-loop"
websiteUrl: "https://zozohq.com"
docsUrl: "https://docs.zozohq.com/guide/"
pricing: "freemium"
classification: "agent-native"
entityType: "software-application"
interfaces:
  - "Web dashboard"
  - "GitHub repositories and issues"
  - "Matched Jira Cloud and Bitbucket Cloud projects"
deploymentModes:
  - "local"
  - "managed hosting"
evidenceSources:
  - title: "Zozo HQ product overview and hosting"
    url: "https://zozohq.com"
    claim: "Zozo assigns dependency-ready issues to coding-agent runs in isolated worktrees, supports clarification and journal-based recovery, separates PR delivery from merge policy, and offers a free Local Stack plus paid hosting."
    accessedAt: "2026-10-24"
    sourceType: "official-product-page"
  - title: "Zozo Atlassian projects"
    url: "https://docs.zozohq.com/guide/atlassian-projects"
    claim: "Projects use GitHub or the matched Bitbucket Cloud repository and Jira Cloud tracker platform; mixed GitHub-plus-Jira projects, Server/Data Center editions, and Atlassian prototyping sessions are not supported."
    accessedAt: "2026-10-24"
    sourceType: "official-documentation"
  - title: "Connect OpenCode with OpenRouter"
    url: "https://docs.zozohq.com/guide/task-connect-opencode"
    claim: "OpenCode uses OpenRouter API access, requires a usable OpenCode runtime in the Stack image, and incurs model usage separately from Zozo hosting."
    accessedAt: "2026-10-24"
    sourceType: "official-documentation"
verificationLevel: "documentation-reviewed"
classificationRationaleMd: "Zozo owns material parts of the coding-agent lifecycle: it assigns ready issues, creates isolated worktrees, retains an append-only run journal, pauses for human clarification, and handles PR delivery with a separate review or merge policy. The agent runtime performs the implementation rather than merely advising a human editor."
bestForMd: "Developers who want issue-driven coding-agent execution with isolated work, recoverable run state, and explicit human clarification and PR gates."
limitationsMd: "Claude Code, Codex, or OpenCode must be available as a usable runtime. OpenCode reaches models through OpenRouter; OpenRouter is not itself an execution runtime. Model access is billed separately. Atlassian support is the matched Jira Cloud plus Bitbucket Cloud workflow, not arbitrary tracker/repository combinations, and Atlassian prototyping sessions are refused. Free Local Stack availability does not establish an open-source license."
unknownsMd: "This submission reviews public product documentation, not independent hands-on testing, security auditing, or performance benchmarking."
---

Zozo HQ coordinates issue-to-PR work across coding-agent runtimes. Dependency-ready issues receive isolated worktrees and branches. Runs can pause for a human clarification and resume with retained state; an append-only journal supports inspection and recovery.

Supported runtimes include Claude Code, Codex, and OpenCode with OpenRouter model access, subject to runtime availability in the deployed Stack. Projects use GitHub or matched Jira Cloud and Bitbucket Cloud workflows.

A free Local Stack is available. Managed hosting starts at $40 USD per month before tax, with model access billed separately.

## So agents can...

- Receive implementation work once its issue dependencies are ready.
- Work in an isolated worktree while Zozo retains run events and recovery state.
- Request a human clarification instead of silently guessing a blocked decision.
- Deliver a pull request under a separate human-review or configured merge policy.
