---
slug: "proofeditor"
name: "Proof"
description: "Collaborative document editor with provenance and agent editing APIs"
category: "agent-ui-frontends"
tags:
  - "documents"
  - "collaboration"
  - "editor"
  - "api"
  - "agents"
websiteUrl: "https://proofeditor.ai"
githubUrl: "https://github.com/EveryInc/proof-sdk"
logoUrl: "https://www.google.com/s2/favicons?sz=64&domain_url=https://proofeditor.ai"
pricing: "free"
classification: "agent-native"
entityType: "web-application"
developerName: "Every"
docsUrl: "https://www.proofeditor.ai/agent-docs"
licenseUrl: "https://github.com/EveryInc/proof-sdk/blob/main/LICENSE"
interfaces:
  - "web editor"
  - "HTTP agent API"
  - "agent skill"
  - "open-source SDK"
deploymentModes:
  - "hosted"
  - "self-hosted SDK"
evidenceSources:
  - title: "Proof homepage — human and agent document collaboration"
    url: "https://www.proofeditor.ai/"
    claim: "Proof presents a free online editor in which humans and agents share documents, track character-level provenance, exchange comments, and propose suggestions through shareable links."
    accessedAt: "2026-09-03"
    sourceType: "official-product-page"
  - title: "Proof agent docs — document read and edit contract"
    url: "https://www.proofeditor.ai/agent-docs"
    claim: "The hosted agent documentation defines content-negotiated document reads and HTTP endpoints for document state, edits, comments, suggestions, presence, events, revisions, and bearer/share-token authorization."
    accessedAt: "2026-09-03"
    sourceType: "official-documentation"
  - title: "Proof SDK repository — collaborative editor and agent bridge"
    url: "https://github.com/EveryInc/proof-sdk"
    claim: "Every's maintained public repository contains the collaborative markdown editor, realtime collaboration server, provenance model, SQLite store, example app, and agent HTTP bridge, while identifying hosted Proof as the product made by Every."
    accessedAt: "2026-09-03"
    sourceType: "official-repository"
  - title: "Proof SDK license — MIT"
    url: "https://github.com/EveryInc/proof-sdk/blob/main/LICENSE"
    claim: "The published Proof SDK code is licensed under the MIT License."
    accessedAt: "2026-09-03"
    sourceType: "official-license"
verificationLevel: "documentation-reviewed"
classificationRationaleMd: "Proof treats agents as document collaborators with identified presence, authorship, comments, suggestions, and direct edits, so the collaboration model is agent-native rather than a conventional editor with incidental automation."
bestForMd: "Shared writing and review workflows where a human needs to inspect, discuss, accept, or reject an agent's document changes with explicit provenance."
limitationsMd: "Agents need a tokenized share link for mutation, comment, presence, and event capabilities, and must manage bearer/share tokens as credentials. The self-hosted SDK requires Node.js and does not guarantee parity with the hosted service."
unknownsMd: "Proof's homepage establishes free access, but the reviewed sources do not document formal pricing limits or a paid tier; recheck before treating paid plans as available. The hosted docs explicitly warn that the open-source SDK is a point-in-time snapshot that may lag production routes, errors, and behavior."
---

Proof is a collaborative document editor built for humans and agents to work in the same document. Its public product and SDK expose document state, edit, presence, comments, suggestions, and event APIs, with provenance tracking so users can see who wrote what.

## Features

- Shared collaborative markdown docs for humans and agents
- Provenance tracking that distinguishes agent and human edits
- HTTP endpoints for document state, edits, ops, presence, and pending events
- Comments and suggestions for reviewable agent collaboration
- Open-source SDK and collaboration server for self-hosted or embedded use cases

## So agents can...

- Draft and revise plans, reports, specs, and other working documents alongside humans
- Leave suggestions, comments, and presence updates instead of silently overwriting content
- Sync on document state and apply structured edits through a documented HTTP bridge
