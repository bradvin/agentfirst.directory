---
slug: "verified-hiring-signals"
name: "Verified Hiring Signals"
description: "Check a supplied company's recent public job openings with dated source evidence"
seoTitle: "Verified Hiring Signals: Dated Jobs for Agent Research"
seoDescription: "Check one company's recent public jobs through an Apify Actor. Returns structured evidence, source dates, coverage and uncertainty for agent workflows."
agentSummary: "Verified Hiring Signals checks a supplied company website and its linked public careers or ATS sources. It returns structured recent job evidence, source URLs, observed dates and coverage so an account research agent can cite what it found. A source failure or unsupported ATS remains unknown; one snapshot does not establish hiring velocity."
category: "specialized-search-discovery-engines"
tags:
  - "hiring-data"
  - "company-research"
  - "evidence"
websiteUrl: "https://apify.com/impressionable_lupine/company-recent-job-openings"
pricing: "paid"
classification: "agent-enabling"
entityType: "service"
developerName: "Boatify Rentals LLC"
docsUrl: "https://github.com/Hijazin/agent-intelligence-skills/blob/main/references/one-company-hiring-check.md"
pricingUrl: "https://apify.com/impressionable_lupine/company-recent-job-openings"
interfaces:
  - "Apify Actor API"
  - "Apify-hosted MCP tools"
deploymentModes:
  - "hosted"
evidenceSources:
  - title: "Verified Hiring Signals Actor listing"
    url: "https://apify.com/impressionable_lupine/company-recent-job-openings"
    claim: "The publisher's Apify listing describes the supplied-company hiring check, input and output schemas, limitations, and pay-per-report billing."
    accessedAt: "2026-10-09"
    sourceType: "official-product-page"
  - title: "Publisher's one-company Hiring check guide"
    url: "https://github.com/Hijazin/agent-intelligence-skills/blob/main/references/one-company-hiring-check.md"
    claim: "The publisher documents a capped one-company task, archived source-backed example, API and MCP call, and interpretation limits."
    accessedAt: "2026-10-09"
    sourceType: "official-repository"
  - title: "Publisher's machine-readable capability index"
    url: "https://github.com/Hijazin/agent-intelligence-skills/blob/main/capabilities.json"
    claim: "The maintained routing index specifies hiring input fields, a $0.03 verified-report event, source verification scope and request bounds."
    accessedAt: "2026-10-09"
    sourceType: "official-repository"
verificationLevel: "documentation-reviewed"
classificationRationaleMd: "The Actor supplies structured, source-linked hiring evidence to an agent conducting account or recruiting research. It is an agent-enabling data service rather than an autonomous agent."
inclusionRationaleMd: "It checks company-linked careers and supported ATS sources, normalizes recent dated jobs and reports partial or unknown coverage. This is more specific than exposing raw scraped pages through a generic API."
bestForMd: "Agents checking recent public jobs at a known company and needing citations, date meaning and source-coverage status in a predictable JSON report."
notBestForMd: "Finding companies from a geography or industry query, identifying decision-makers, proving purchase intent, or measuring hiring velocity from a single run."
limitationsMd: "One supplied company per run. Unsupported or blocked sources, undated jobs and incomplete coverage remain unknown. A republished date may not be the first posting date. The stated $0.03 charge applies to an eligible report event; callers must check current Apify terms and authorize their own capped run."
unknownsMd: "No independent precision benchmark, buyer purchase or repeat-demand result is established by the publisher's archived examples. Current coverage varies by company and source."
---

Verified Hiring Signals answers a narrow question: which recently dated public jobs can be verified for a supplied company? An agent supplies the company website and a lookback window. The Actor follows supported public careers or ATS links, then returns normalized job evidence with source URLs, date meaning, observation time and coverage status.

Use the dated archived example and one-company task in the linked guide to inspect the output before purchasing a new run. The archive records an owner-funded test, not an independent buyer or a guarantee of current openings. Empty or unknown results should not be interpreted as proof that the company is not hiring.
