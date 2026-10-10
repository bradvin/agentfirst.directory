---
slug: "saver-verifier"
name: "SAVER Verifier"
description: "Source-backed factual claim verification for autonomous AI agents."
seoTitle: "SAVER Verifier: Source-Backed Verification for AI Agents"
seoDescription: "See how SAVER Verifier gives autonomous agents source-backed factual verification with cited web evidence before they act, pay, or decide."
agentSummary: "SAVER Verifier gives autonomous agents an independent verification step for external factual claims. Agents can submit a claim through a documented API, receive a source-backed result with cited web evidence, and use that verification before acting, paying, or making a decision. Access is pay-per-call through x402 using USDC on Base."
category: "agent-verification-trust"
tags: ["verification", "x402", "evidence", "agents"]
websiteUrl: "https://saververify.com"
pricing: "paid"
classification: "agent-enabling"
entityType: "web-api"
developerName: "SAVER-SI"
docsUrl: "https://github.com/SAVER-SI/saver-verifier"
interfaces: ["REST API", "x402"]
deploymentModes: ["hosted"]
verificationLevel: "documentation-reviewed"
classificationRationaleMd: "SAVER Verifier provides a documented verification step that agents can invoke before taking downstream actions. Its output is designed to support agent decisions with cited web evidence rather than serving only as generic search."
bestForMd: "Autonomous agents that need an independent, source-backed evidence signal when assessing external factual claims before making downstream decisions."
notBestForMd: "General-purpose web search, software testing, deterministic validation of private data, wallet-policy enforcement, transaction simulation, token-contract security analysis, sanctions screening, or use as an automatic authorization to act or pay."
limitationsMd: "Verification can return supported, contradicted, mixed, or insufficient_evidence outcomes. Confidence, citations, and underlying evidence should be evaluated before downstream use; a SAVER result is an evidence signal, not definitive permission to act or pay. SAVER does not enforce wallet policy, simulate transactions, analyze token-contract security, or perform sanctions screening. The service requires payment of 0.20 USDC per verification through x402 on Base."
unknownsMd: "No independent benchmark of verification accuracy, latency, or production-scale reliability is included in this submission."
evidenceSources:
  - title: "SAVER Verifier public repository"
    url: "https://github.com/SAVER-SI/saver-verifier"
    claim: "Documents SAVER Verifier as source-backed factual claim verification for autonomous AI agents, including the verification endpoint, x402 payment flow, pricing, and cited evidence workflow."
    accessedAt: "2026-10-09"
    sourceType: "official-repository"
  - title: "SAVER Verifier x402 discovery"
    url: "https://api.saververify.com/.well-known/x402"
    claim: "Publishes the paid POST /verify resource, 0.20 USDC price, Base Mainnet network, and x402 payment metadata."
    accessedAt: "2026-10-09"
    sourceType: "official-documentation"
---

SAVER Verifier is a hosted verification service for autonomous AI agents. An agent submits an external factual claim to the `/verify` endpoint and receives a source-backed result with cited web evidence.

## So agents can...

- Verify external claims before acting or making a decision.
- Attach cited web evidence to downstream agent reasoning.
- Use an independent evidence check as one input before payments or other consequential actions.



