---
slug: "tale"
name: "Tale"
description: "Open-source collaborative project management for teams and AI agents"
seoTitle: "Tale: Collaborative Project Management for Teams and Agents"
seoDescription: "Coordinate people and AI agents on shared project boards with task delegation, persistent sandbox workspaces, deliverables, and a separate human review step."
agentSummary: "Tale organizes human and agent work through shared projects, task ownership, acceptance criteria, and review. Configured agents execute tasks in sandbox workspaces, return reports and files, and continue work from task feedback. Teams can equip supported runtimes with skills and permitted tools, while people decide whether the delivered result meets the task's completion criteria."
category: "orchestrators"
tags:
  - "project-management"
  - "team-collaboration"
  - "multi-agent"
  - "task-delegation"
  - "human-review"
  - "self-hosted"
websiteUrl: "https://tale.dev"
githubUrl: "https://github.com/tale-project/tale"
logoUrl: "https://tale.dev/favicon-light.png"
ogImageUrl: "https://tale.dev/og.png"
pricing: "open-source"
classification: "agent-native"
entityType: "web-application"
developerName: "Tale"
verificationLevel: "documentation-reviewed"
reviewedBy: "foo-bender"
reviewedAt: "2026-10-04"
docsUrl: "https://docs.tale.dev"
pricingUrl: "https://tale.dev/pricing"
licenseUrl: "https://github.com/tale-project/tale/blob/main/LICENSE"
interfaces:
  - "web application"
  - "agent runtimes"
deploymentModes:
  - "self-hosted"
  - "managed cloud"
classificationRationaleMd: "Agents are configured project workers with task assignments, runtime and equipment choices, sandbox execution, returned deliverables, and continued work from task feedback. Agent work is part of the shared project lifecycle rather than a generic API integration."
inclusionRationaleMd: "Tale coordinates project agents across tasks and runs, retains workspace files and task history, and separates runtime completion from human acceptance. Equipped manager agents can start other project agents on tasks within documented delegation limits; agents return their work to review and cannot mark their own tasks Done."
bestForMd: "Teams coordinating people and configured agents around ongoing company work, with shared task context, deliverables, revisions, and human acceptance."
limitationsMd: "Execution requires compatible provider credentials, configured agent equipment, and available sandbox capacity. Project agents normally reuse their workspace across tasks; this is not a dedicated virtual machine for every task. Delegation is bounded: an agent started by another agent cannot delegate onward. Subscription credentials work only with compatible runtimes, and direct provider calls bypass Tale's gateway metering and spending caps."
unknownsMd: "This submission is based on first-party documentation and source licensing. It does not establish independent performance, security, or scaling benchmarks."
evidenceSources:
  - title: "Tale projects overview"
    url: "https://docs.tale.dev/platform/projects/overview"
    claim: "Projects keep reference files, instructions, conversations, and tasks together, with owners, reviewers, acceptance criteria, and a shared task board."
    accessedAt: "2026-10-03"
    sourceType: "official-documentation"
  - title: "Create and manage project agents"
    url: "https://docs.tale.dev/platform/projects/project-agents"
    claim: "Project agents combine a runtime, model, instructions, and allowed equipment. An equipped agent can start other agents on tasks, subject to project, caller, task, and delegation-depth restrictions."
    accessedAt: "2026-10-03"
    sourceType: "official-documentation"
  - title: "Delegate a task to an agent"
    url: "https://docs.tale.dev/platform/projects/task-automation"
    claim: "Assignment and execution are separate. Agents return reports and deliverables to In review; a person accepts the result as Done, and the agent cannot mark its own task Done. Task mentions can guide active work or start a continuation for revisions."
    accessedAt: "2026-10-03"
    sourceType: "official-documentation"
  - title: "Choose an agent runtime"
    url: "https://docs.tale.dev/platform/agents/harnesses"
    claim: "Supported harnesses execute sessions in sandboxes, project agents reuse persistent workspaces, equipped skill bundles are staged as files, and task output is collected as deliverables. Credential compatibility and direct subscription calls have documented limits."
    accessedAt: "2026-10-03"
    sourceType: "official-documentation"
  - title: "Manage sandbox capacity"
    url: "https://docs.tale.dev/platform/admin/sandboxes"
    claim: "Project-agent and workflow sessions consume configured concurrency capacity. Project agents reuse their workspaces; idle capacity reclamation preserves their files, while explicit workspace destruction removes them."
    accessedAt: "2026-10-03"
    sourceType: "official-documentation"
  - title: "Tale Community and Enterprise pricing"
    url: "https://tale.dev/pricing"
    claim: "The MIT-licensed Community edition is free to self-host. Enterprise adds professional operation and support, with cloud or self-hosted deployment; both editions include the same product features."
    accessedAt: "2026-10-03"
    sourceType: "official-pricing"
  - title: "Tale repository licence"
    url: "https://github.com/tale-project/tale/blob/main/LICENSE"
    claim: "Tale's public source repository uses the MIT License."
    accessedAt: "2026-10-03"
    sourceType: "official-license"
---

Tale is an open-source project workspace for people and AI agents. A team defines tasks with context, owners, and completion criteria; configured project agents perform the work and return reports and deliverables for review. Task comments keep direction and revision requests attached to the work.

## So agents can...

- Work from assigned project tasks using a configured runtime, skills, and permitted tools.
- Reuse persistent workspace files across tasks and return produced files as task deliverables.
- Continue work after task feedback while retaining the task's discussion and run history.
- Hand ready tasks to other project agents when explicitly equipped for delegation, within the documented limits.
- Return results to a human review step that is separate from the runtime finishing its turn.

See the [task execution and review guide](https://docs.tale.dev/platform/projects/task-automation) for the assignment, execution, revision, and acceptance workflow.
