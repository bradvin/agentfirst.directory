# Tool review guide

## Product fit comes first

Before reviewing any evidence, record `pass-fit`, `fail-fit`, or `unclear-fit`, with the intended user, core job, and why the product is or is not built for agents. Use only its product description and operating model, plus canonical homepage positioning if necessary. Do not inspect evidence arrays, docs, MCP details, implementation, pricing, licence, or validation at this stage.

- `pass-fit`: only now perform full first-party evidence, schema, and contradiction review. Passing fit is necessary, not acceptance.
- `fail-fit`: stop with nonacceptance. Do not review evidence, enrich metadata, or commit listing changes.
- `unclear-fit`: hold for product-positioning clarification. Do not review evidence or proceed with metadata or listing commits.

A human-first app with REST, MCP, or SDK access is not rescued by integration depth or tool count. An AI agent serving humans is not, by itself, a tool built for agents. Agent-oriented infrastructure, protocols, and agent-builder tools may pass when designed for agent operation; exclusive agent use or agent-only origins are not required. `agent-enabling` and category guidance about internal autonomous agents cannot bypass this gate.

Historical reassessments and public corrections require separate owner approval. This guidance authorizes no existing-listing changes.

## Review after `pass-fit`

Tool authors may suggest `seoTitle`, `seoDescription`, and `agentSummary` in tool frontmatter. All three are optional, including for existing listings. The editorial reviewer owns the final public wording and may revise, omit, or remove a suggestion before approval.

Review each field against the tool's cited first-party evidence and the existing profile. Keep the title specific to the tool and its agent-facing use (usually about 50–60 characters). Make the description a concise, factual reason to inspect the profile (usually about 140–160 characters). Make the agent summary one short plain-text paragraph about what the tool enables an agent to do (roughly 40–70 words). These are editorial drafting targets, not hard validation limits or automatic truncation rules. Avoid unsupported superlatives, promotional claims, repeated keywords, markdown, and HTML. A valid value must be a non-empty string after surrounding whitespace is trimmed.

`seoTitle` replaces the generated page title only. `seoDescription` replaces the generated meta, Open Graph, Twitter, and WebPage description only. These two fields fall back independently, so reviewers can approve one without the other. `agentSummary` appears as a paragraph before the existing short description; it does not replace the description used in tool entities, exports, feeds, or LLM summaries.

During rollout, approve these fields one tool at a time when the wording is ready. An omitted or removed field is published as `NULL`, and the site retains its established fallback or layout. A change to any field counts as a substantive tool edit for the content modification timestamp.

## Optional announcement tag

`announcementXHandle` is a separate, opt-in announcement-tagging value. Do not require it for acceptance or substitute a GitHub submitter, repository owner, product name, or scraped social account. Confirm it was explicitly supplied for tagging; existing tools need no backfill.

Accept outer whitespace and one optional leading `@`; publish the bare, case-preserved handle matching ASCII `[A-Za-z0-9_]{1,15}`. Omission and empty/whitespace-only strings mean no tag. Reject URLs (even X/Twitter profile URLs), `null`, other non-string types, extra `@` signs, punctuation, embedded whitespace, non-ASCII characters, and overlength handles. A lone `@` is invalid, not blank. Quote numeric-looking handles in YAML to keep them strings.

The D1 value is nullable `announcement_x_handle`; removing or blanking the source clears it to `NULL`. Changes, including case-only edits or removal, advance `content_modified_at`; equivalent `@`/bare inputs do not. Metadata generation must preserve the field independently of `submittedBy`. No announcement-posting implementation exists in this repository: downstream posting must consume this explicit field and omit a tag when it is absent, never fall back to GitHub attribution. This field does not itself authorize or trigger a post.
