---
slug: "composio"
name: "Composio"
description: "Delegated auth and just-in-time SaaS tool calling for agents"
category: "saas-tool-integration-platforms"
tags:
  - "saas-integrations"
  - "integrations"
  - "mcp"
websiteUrl: "https://composio.dev"
githubUrl: "https://github.com/ComposioHQ/composio"
pricing: "freemium"
logoUrl: "https://www.google.com/s2/favicons?sz=64&domain_url=https%3A%2F%2Fcomposio.dev"
sortOrder: 10
---

Composio is an agent integration layer for authenticated SaaS actions. Its current platform positions around delegated auth, just-in-time tool loading, remote workbenches, and parallel execution across a large connector catalog.

## Features

- Secure delegated auth for OAuth, API keys, token refresh, and account lifecycle management
- Just-in-time tool discovery so the agent only loads the tools it needs for the current task
- Parallel tool execution and workflow memory through system-level meta tools
- Remote bash and persistent workbench sandboxes for file processing and code-backed actions
- MCP support plus SDKs and framework integrations for production agent workflows

## So agents can...

- Update CRM records, create tickets, send emails, and post to Slack without custom auth code for each app
- Ask users to connect accounts during a workflow, then continue the task once access is granted
- Chain cross-app actions in one run while keeping large tool responses out of the model context window
