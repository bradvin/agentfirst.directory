---
slug: "steerlatch"
name: "SteerLatch"
description: "Connect an MCP-compatible AI assistant to a Mac or Windows computer for approved file, browser, and desktop actions."
seoTitle: "SteerLatch: AI desktop control with local permission"
seoDescription: "Connect MCP-compatible assistants to a Mac or Windows PC. Inspect local consent, STOP, and revocation controls before authorizing actions."
agentSummary: "SteerLatch bridges an MCP-compatible AI assistant to a locally installed Mac or Windows agent. It can interact with files, a browser, the screen, the mouse and keyboard, and a terminal subject to local permissions. The user can revoke access and use STOP, which does not undo completed work. The initial allowance is 1,000 one-time calls before paid plans."
category: "web-browser-interaction-tools"
tags:
  - "mcp"
  - "desktop-automation"
  - "browser-control"
  - "macos"
  - "windows"
  - "local-consent"
websiteUrl: "https://www.steerlatch.com/en/"
pricing: "paid"
classification: "agent-enabling"
entityType: "software-application"
developerName: "CEM Tech & Conseil"
docsUrl: "https://www.steerlatch.com/en/docs/"
interfaces:
  - "MCP"
  - "Mac desktop agent"
  - "Windows desktop agent"
deploymentModes:
  - "local"
  - "hosted"
classificationRationaleMd: "SteerLatch is infrastructure built to let an external MCP-compatible AI act on the owner's computer. It is the desktop action and permission layer, not the model or the planning agent."
inclusionRationaleMd: "The product gives agents materially new local-browser and desktop interactions beyond a generic website API: navigation, clicks, typing, files, screenshots, and terminal commands, subject to device-level approval and revocation."
bestForMd: "People testing bounded, explicit AI-led tasks on their own Mac or Windows PC, including browser workflows and file organization."
limitationsMd: "It is not a hosted browser fleet or a sandbox with guaranteed containment. Terminal commands have the user's permissions. STOP is an interruption control, not an undo function. Relevant data requested by an AI can reach that AI provider; no end-to-end encryption is claimed. App directory approval in individual AI products is separate from MCP compatibility."
unknownsMd: "Compatibility and permission behavior should be checked with the actual AI client, device, and operating-system settings."
verificationLevel: "documentation-reviewed"
evidenceSources:
  - title: "Official SteerLatch English product page"
    url: "https://www.steerlatch.com/en/"
    claim: "The product describes MCP-compatible AI access to Mac and Windows devices, browser navigation, screenshots, mouse and keyboard, files, and terminal actions, with local control, STOP and revocation. It advertises 1,000 free calls once per account."
    accessedAt: "2026-11-14"
    sourceType: "official-product-page"
  - title: "Official SteerLatch help and connection guide"
    url: "https://www.steerlatch.com/en/docs/"
    claim: "The guide describes installing the local Mac or Windows agent, connecting an AI via the OAuth MCP endpoint, granting permissions, and STOP and revocation controls; it distinguishes client compatibility from approval in an AI provider's directory."
    accessedAt: "2026-11-14"
    sourceType: "official-documentation"
---
SteerLatch connects MCP-compatible AI assistants to a locally installed agent on a user's Mac or Windows computer. It exposes browser and desktop interactions, along with file and command tools, under device-level permission controls.

## So agents can...

- Navigate web pages and operate interfaces with permitted clicks and typing.
- Read, edit, and organize files or use a terminal on the user's machine within the configured permissions.
- Inspect the active screen and continue multi-step workflows while the owner retains local STOP and revocation controls.

## Safety and access boundaries

The product is not a contained virtual computer. Terminal access can have lasting effects under the user's privileges, and STOP does not reverse actions already taken. Files remain on the computer, but information an AI requests can pass through the relay to that AI provider. The Mac and Windows installers, local permission prompts, and the OAuth connection instructions are described in the [official help page](https://www.steerlatch.com/en/docs/).

A one-time allowance of 1,000 calls does not constitute an unlimited ongoing free tier. Check the [current product site](https://www.steerlatch.com/en/) for commercial terms and the client's current compatibility.
