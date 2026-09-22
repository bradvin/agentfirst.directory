# D1 Publish Pipeline

## Summary

This repo is the canonical source of truth for approved categories, tools, and URL retirements. A merge to `main` must validate the approved content, write the full approved dataset into Cloudflare D1 immediately, purge affected Cloudflare cache URLs, and notify IndexNow about changed HTML URLs so the live site reflects the approved change without a site redeploy.

Implementation order for the overall system:

1. Complete this publish pipeline in the content repo.
2. Migrate `bradvin/agentfirst.directory-site` to read from D1 at runtime.
3. Remove the site repo submodule dependency after the runtime path is live.

## Source Of Truth Contract

Approved categories live at:

- `categories/<slug>.json`

Approved tools live at:

- `tools/<slug>.md`

Versioned redirects and gone responses live at:

- `redirects.json`

The manifest currently uses schema version `1`. Each entry has `sourcePath`, `destinationPath`, and `statusCode`, plus an optional `note`. Status `301` and `308` entries require a distinct destination path. Status `410` entries require `destinationPath: null`.

Manifest paths are canonical absolute same-site paths, not full URLs, and cannot contain a query or hash. Sources must be unique and cannot shadow a current tool or category. Redirect chains and cycles are invalid. A `/tools/<slug>` or `/category/<slug>` destination must resolve to a current source record; any future static destination must be added to the explicit validator allowlist.

Submitter attribution is stored in `tool-submitters.json`, not in tool frontmatter. The approval workflow must derive each changed tool's submitter from the PR author and write that mapping back to the PR branch before merge.

This repo is the only authoring source of truth. D1 is a published runtime mirror, not the place where content is edited.

Schema migrations are staged before the full content sync. `0003_add_tool_classification.sql` adds a nullable `TEXT` column with an enum `CHECK` and no semantic default, so existing rows are not mislabeled during deployment. The immediately following full sync must populate every published tool; a published row with a null or invalid classification is an integrity failure.

`0004_add_editorial_seo_metadata.sql` adds category definitions, tool evidence and entity metadata, review provenance, indexability, content-specific modification timestamps, and redirect storage. Authored `reviewed_at` and `published_at` values remain nullable; the pipeline must not synthesize a review date. `content_modified_at` is pipeline-managed and changes only when authored or visible record data changes, while `synced_at` records every sync.

## CI And Merge Behavior

On `pull_request`:

- validate content only
- fail on invalid schema or invalid references

On approved tool PRs:

- sync changed tool slugs into `tool-submitters.json` using the PR author login
- enrich missing `logoUrl` and `ogImageUrl` values
- commit those generated changes back to same-repo PR branches
- comment with the exact commands for fork PRs when the workflow cannot push

On `push` to `main` with category, tool, or redirect-manifest changes:

1. validate content again
2. generate an ordered set of byte-bounded full-sync SQL files from all approved content
3. execute every SQL file in filename order, stopping immediately if one fails
4. upsert categories into D1
5. upsert tools into D1
6. upsert redirects and retirements into D1
7. mark missing tools unpublished
8. mark missing categories inactive when they are no longer used
9. mark redirect rows missing from the manifest inactive
10. compute affected URLs from the pushed diff
11. purge the affected Cloudflare cache URLs
12. submit the indexable HTML subset to IndexNow; a transient IndexNow failure is logged but does not fail the completed publish or purge

Non-content changes such as docs or workflow edits must not trigger the D1 publish workflow automatically.

Use full-sync behavior, not diff-based DB writes, so the database cannot drift from the approved repo state.

## Validation Rules

Validation must fail on any of the following:

- duplicate category slug
- duplicate tool slug
- invalid category reference from a tool
- invalid URL fields
- missing markdown body
- missing or invalid tool classification
- missing required category SEO and scope guidance
- malformed evidence items or evidence without an access date
- invalid entity, verification, image-dimension, date, array, or indexability metadata
- an author-supplied `contentModifiedAt` field
- a missing or unsupported redirect-manifest version
- invalid redirect status/path combinations, duplicate sources, chains, or cycles
- a redirect source that shadows current content or a destination that does not resolve to current content
- missing or invalid submitter metadata in `tool-submitters.json` during publish validation

Validation should also continue enforcing the existing filename-to-slug alignment and required fields for tools and categories.

## D1 Sync Behavior

The D1 sync step must:

- upsert all categories from `categories/`
- upsert all tools from `tools/`
- insert or update each tool's required classification
- preserve `is_published = 1` for approved tools in the repo
- set `is_published = 0` for tools missing from the repo
- preserve `is_active = 1` for approved categories in the repo
- set `is_active = 0` for categories missing from the repo when they are not referenced by active tools
- upsert all entries from `redirects.json` with `is_active = 1`
- preserve a redirect's `updated_at` on no-op syncs and advance it when its authored fields change
- set `is_active = 0` for redirect rows missing from the current manifest
- publish authored category scope, evidence, tool entity, comparison, and provenance fields
- initialize `content_modified_at` for a new or migrated record and advance it only when substantive fields change
- advance `synced_at` on every sync without using it as a public content modification date

### SQL batching

Cloudflare D1 limits an individual SQL statement to [100,000 bytes](https://developers.cloudflare.com/d1/platform/limits/). The publish workflow therefore renders the full ordered sync as `batch-0001.sql`, `batch-0002.sql`, and so on, with each file capped at 80,000 UTF-8 bytes. It packs complete generated statements only; it never splits SQL text on semicolons or divides one statement across files.

Run the CI-oriented generator with an explicit output directory:

```sh
npm run sync:d1:batches -- /tmp/agentfirst-d1-sync-batches
```

The existing compatibility command remains available and writes the complete sync SQL to standard output:

```sh
npm run sync:d1:sql > /tmp/agentfirst-d1-sync.sql
```

The workflow executes numbered batch files in lexical order under fail-fast shell settings. Category upserts remain first, followed by tool and redirect upserts, then tool/category retirement and redirect-deactivation statements. If a later batch fails, earlier files may already have been applied; the full sync is idempotent and can be rerun, while its ordering prevents deactivation statements from running before all upserts have been attempted. Generation fails before publishing if even one complete statement exceeds the 80,000-byte file limit.

Required runtime schema:

```sql
categories(
  slug,
  label,
  sort_order,
  seo_title,
  description_md,
  definition_md,
  scope_md,
  inclusion_md,
  exclusion_md,
  selection_guide_md,
  use_cases_json,
  sources_json,
  reviewed_by,
  reviewed_at,
  published_at,
  content_modified_at,
  is_indexable,
  source_path,
  is_active,
  synced_at
)

tools(
  slug,
  name,
  description,
  body_md,
  category_slug,
  tags_json,
  website_url,
  github_url,
  pricing,
  classification,
  submitted_by_github,
  logo_url,
  og_image_url,
  logo_width,
  logo_height,
  og_image_width,
  og_image_height,
  entity_type,
  developer_name,
  docs_url,
  pricing_url,
  license_url,
  interfaces_json,
  deployment_modes_json,
  evidence_json,
  verification_level,
  classification_rationale_md,
  inclusion_rationale_md,
  best_for_md,
  not_best_for_md,
  limitations_md,
  unknowns_md,
  reviewed_by,
  reviewed_at,
  published_at,
  content_modified_at,
  is_indexable,
  sort_order,
  source_path,
  is_published,
  synced_at
)

url_redirects(
  source_path,
  destination_path,
  status_code,
  is_active,
  note,
  created_at,
  updated_at
)
```

## Cache Purge Behavior

After D1 sync succeeds, purge these URLs every time:

- `/`
- `/api/tools.json`
- `/data/agent-first-tools.csv`
- `/feed.xml`
- `/llms.txt`
- `/llms-full.txt`
- `/research/state-of-agent-first-infrastructure`
- `/sitemap-index.xml`
- `/sitemap-pages.xml`
- `/sitemap-tools.xml`
- `/sitemap-categories.xml`

Additionally purge:

- each changed or deleted tool page: `/tools/<slug>`
- each changed or deleted tool's derived media: `/media/tools/<slug>/card`, `/hero-small`, and `/hero`
- each affected category page: `/category/<slug>`
- every old and new source/destination path affected by a `redirects.json` change

Category purging must consider both old and new category values so category moves do not leave stale cached pages behind.

The purge step should target URLs, not purge the whole zone.

## IndexNow Behavior

After the cache purge, submit only the canonical HTML subset of the computed URL list:

- `/`
- affected `/tools/<slug>` URLs, including deletions
- affected `/category/<slug>` URLs
- `/research/state-of-agent-first-infrastructure`

Do not submit APIs, data exports, feeds, LLM text files, media variants, or sitemaps to IndexNow. The batch uses the public root verification file at `https://agentfirst.directory/51e9d2d62bf357523274a20c53e380c6.txt`. IndexNow is an auxiliary notification: non-success responses remain visible in workflow logs but do not block the already completed content sync or cache purge.

## Required Secrets

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`
- `CLOUDFLARE_D1_DATABASE_NAME`
- `CLOUDFLARE_ZONE_ID`

## Token Permissions

The Cloudflare API token used by this repo must have:

- D1 edit permission on the Cloudflare account
- cache purge permission on the `agentfirst.directory` zone

No Pages deploy permission is required for this repo because the site deploy remains owned by the site repo and Cloudflare Pages Git integration.

## Acceptance Criteria

- Merged content appears in D1 immediately after the `main` branch workflow runs.
- No site redeploy is required for content changes to become visible.
- Affected pages and sitemap routes refresh after purge.
- Derived data, feed, LLM, research, and tool-media routes refresh after purge.
- IndexNow receives only the canonical HTML subset of changed URLs.
- Repeated no-op syncs preserve `content_modified_at` while still advancing `synced_at`.
- Every generated D1 sync batch is at most 80,000 UTF-8 bytes and preserves complete statement order.
- Redirect changes publish from the versioned manifest, deactivate removed rows, and purge both sides of each changed mapping.
- The database remains aligned to the approved repo state after repeated edits, moves, and deletions.

## Assumptions

- No content PR preview environment is required.
- This repo remains the only authoring source of truth.
- D1 is the runtime published store.
- The site repo will be migrated to read from D1 after this publish pipeline is complete.
