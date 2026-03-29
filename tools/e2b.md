---
slug: "e2b"
name: "E2B"
description: "Secure cloud sandboxes for agent code execution"
category: "agent-compute-sandbox-environments"
tags:
  - "sandboxes"
  - "secure-compute"
  - "code-execution"
websiteUrl: "https://e2b.dev"
githubUrl: "https://github.com/e2b-dev/E2B"
pricing: "freemium"
logoUrl: "https://www.google.com/s2/favicons?sz=64&domain_url=https%3A%2F%2Fe2b.dev"
ogImageUrl: "https://cdn.prod.website-files.com/6717bb6618f6a40d53ac2929/689daedd2d27f81001967356_Share-Image-(1200x630).png"
sortOrder: 20
---

E2B provides secure, isolated cloud sandboxes for running untrusted agent code. Its SDK exposes a Linux environment with filesystem access, command execution, internet access, and secure controller access turned on by default in current SDK versions.

## Features

- Secure Linux sandboxes with filesystem, process, and internet access
- Command execution plus language-aware code execution contexts through the Code Interpreter SDK
- Secure access tokens for direct sandbox controller access and presigned upload and download flows
- Sandbox listing and lifecycle controls for longer-running agent sessions
- Templates and SDKs designed for code execution, browser automation, and tool-using agents

## So agents can...

- Run generated scripts, install dependencies, and inspect outputs without touching the host machine
- Keep working inside isolated execution contexts while debugging code or analyzing data
- Execute risky or user-supplied code with a tighter security boundary than a local runtime
