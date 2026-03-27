---
slug: "gitagent"
name: "GitAgent"
description: "Git-native open standard for defining and running AI agents"
category: "orchestrators"
tags:
  - "orchestration"
  - "git-native"
  - "agent-framework"
websiteUrl: "https://www.gitagent.sh/"
githubUrl: "https://github.com/open-gitagent/gitagent"
logoUrl: "https://www.google.com/s2/favicons?sz=64&domain_url=https%3A%2F%2Fwww.gitagent.sh%2F"
ogImageUrl: "https://gitagent.sh/og-banner-2.png"
pricing: "open-source"
submittedBy: "bradvin"
sortOrder: 20
---

GitAgent is a Git-native standard for defining AI agents as version-controlled files inside a repository. The current project positions itself as a framework-agnostic way to define, version, validate, run, and export agents across runtimes like Claude, OpenAI, CrewAI, and others.

## Features

- Agent definitions stored as plain files in git rather than a hosted vendor dashboard
- Framework-agnostic standard that can export to multiple agent runtimes and toolchains
- CLI workflow for scaffolding, validating, running, and exporting agent definitions
- Version control, branching, pull requests, and code review applied directly to agent configuration
- Open-source specification, adapters, and examples under an MIT license

## So agents can...

- Be defined once in a portable format and reused across different runtimes or vendors
- Evolve through the same review and CI workflows teams already use for code
- Package identity, skills, tools, and operational metadata into a reproducible repository structure
