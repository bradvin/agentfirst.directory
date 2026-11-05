---
slug: eye-art-polyphemus
name: Eye.Art Polyphemus
description: Hosted MCP for agents to create and edit images, match visuals to webpages, generate SVG, and explore prompt directions
seoTitle: "Eye.Art Polyphemus: Image Creation and Editing for Agents"
seoDescription: "Create and edit images, request webpage-matched visuals, and generate editable SVG through Eye.Art Polyphemus, a hosted MCP with documented retention limits."
reviewedBy: "foo-bender"
reviewedAt: "2026-10-03"
category: storage-media-hosting
tags: [image-generation, image-editing, visual-assets, svg, mcp]
websiteUrl: https://eye.art/polyphemus
logoUrl: "https://www.google.com/s2/favicons?sz=64&domain_url=https%3A%2F%2Feye.art%2Fpolyphemus"
pricing: free
classification: agent-enabling
entityType: service
developerName: Eye.Art
docsUrl: https://eye.art/polyphemus/api
interfaces: [Streamable HTTP MCP]
deploymentModes: [hosted]
evidenceSources: [{title: "Eye.Art Polyphemus API guide", url: "https://eye.art/polyphemus/api", claim: "The guide documents a no-key remote MCP endpoint with image creation, editing, SVG, prompt ideas, job status, and conversation tools.", accessedAt: "2026-10-02", sourceType: "official-documentation"}, {title: "Eye.Art MCP connector repository", url: "https://github.com/jacobwell/eye-art-mcp", claim: "The first-party connector metadata identifies the hosted Streamable HTTP endpoint and describes its capabilities, limits, retention, and connection setup.", accessedAt: "2026-10-02", sourceType: "official-repository"}]
verificationLevel: documentation-reviewed
classificationRationaleMd: "The hosted MCP gives agents substantive visual-asset capabilities: create images, edit supplied references, request webpage-matched visuals, produce editable SVG, and poll long-running jobs."
inclusionRationaleMd: "Agents can create and revise visual assets through one conversational MCP endpoint, preserve references across turns, and retrieve completed image jobs without local model installation."
bestForMd: "Agent workflows that need original images, focused reference edits, webpage-matched visuals, or editable SVG from a hosted service."
notBestForMd: "Local-only or zero-retention workflows, raster-to-vector tracing, guaranteed completion times, or unlimited anonymous generation."
limitationsMd: "Anonymous image generation is limited to 20 per hour per caller network identity. Prompts, images, references, and conversations may be retained for up to 30 days. Some workflows may take several minutes. SVG creates vector geometry and does not trace raster images."
unknownsMd: "No uptime SLA or independent reliability benchmark is published. The MCP initialize and tools/list handshake was checked on 2026-10-01; this entry does not claim a successful production image-generation test."
---
Eye.Art Polyphemus is a hosted image-making MCP for agents. It accepts a prompt, a reference image, or sanitized webpage excerpts and can return raster artwork or editable SVG. Related calls can share conversation context; queued image jobs expose status for later retrieval.

## So agents can...

- Create original raster images and small visual assets from a prompt.
- Edit a supplied PNG, JPEG, or WebP reference while specifying what should change and what should stay.
- Request visuals that match a webpage's palette, layout, and copy space.
- Generate editable SVG geometry for icons, line art, diagrams, and flat scenes.
- Continue related visual turns with conversation context and poll queued jobs.

Page source and image references are sent to Eye.Art for processing; inspect and sanitize source excerpts before sending. Prompts, references, outputs, and conversation data may be retained for up to 30 days. Anonymous image generation is limited to 20 requests per hour per caller network identity.
