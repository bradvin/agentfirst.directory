# Tool review guide

Tool authors may suggest `seoTitle`, `seoDescription`, and `agentSummary` in tool frontmatter. All three are optional, including for existing listings. The editorial reviewer owns the final public wording and may revise, omit, or remove a suggestion before approval.

Review each field against the tool's cited first-party evidence and the existing profile. Keep the title specific to the tool and its agent-facing use (usually about 50–60 characters). Make the description a concise, factual reason to inspect the profile (usually about 140–160 characters). Make the agent summary one short plain-text paragraph about what the tool enables an agent to do (roughly 40–70 words). These are editorial drafting targets, not hard validation limits or automatic truncation rules. Avoid unsupported superlatives, promotional claims, repeated keywords, markdown, and HTML. A valid value must be a non-empty string after surrounding whitespace is trimmed.

`seoTitle` replaces the generated page title only. `seoDescription` replaces the generated meta, Open Graph, Twitter, and WebPage description only. These two fields fall back independently, so reviewers can approve one without the other. `agentSummary` appears as a paragraph before the existing short description; it does not replace the description used in tool entities, exports, feeds, or LLM summaries.

During rollout, approve these fields one tool at a time when the wording is ready. An omitted or removed field is published as `NULL`, and the site retains its established fallback or layout. A change to any field counts as a substantive tool edit for the content modification timestamp.
