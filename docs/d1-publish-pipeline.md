# D1 Publish Pipeline

## Summary

This repo is the canonical source of truth for approved categories and tools. A merge to `main` must validate the approved content, write the full approved dataset into Cloudflare D1 immediately, and purge affected Cloudflare cache URLs so the live site reflects the approved change without a site redeploy.

Implementation order for the overall system:

1. Complete this publish pipeline in the content repo.
2. Migrate `bradvin/agentfirst.directory-site` to read from D1 at runtime.
3. Remove the site repo submodule dependency after the runtime path is live.

## Source Of Truth Contract

Approved categories live at:

- `categories/<slug>.json`

Approved tools live at:

- `tools/<slug>.md`

Tool files must include `submittedBy` as the GitHub username of the submitter.

This repo is the only authoring source of truth. D1 is a published runtime mirror, not the place where content is edited.

## CI And Merge Behavior

On `pull_request`:

- validate content only
- fail on invalid schema or invalid references

On `push` to `main`:

1. validate content again
2. generate a full-sync payload from all approved files
3. upsert categories into D1
4. upsert tools into D1
5. mark missing tools unpublished
6. mark missing categories inactive when they are no longer used
7. compute affected URLs from the pushed diff
8. purge the affected Cloudflare cache URLs

Use full-sync behavior, not diff-based DB writes, so the database cannot drift from the approved repo state.

## Validation Rules

Validation must fail on any of the following:

- duplicate category slug
- duplicate tool slug
- invalid category reference from a tool
- invalid URL fields
- missing markdown body
- invalid `submittedBy`

Validation should also continue enforcing the existing filename-to-slug alignment and required fields for tools and categories.

## D1 Sync Behavior

The D1 sync step must:

- upsert all categories from `categories/`
- upsert all tools from `tools/`
- preserve `is_published = 1` for approved tools in the repo
- set `is_published = 0` for tools missing from the repo
- preserve `is_active = 1` for approved categories in the repo
- set `is_active = 0` for categories missing from the repo when they are not referenced by active tools

Required runtime schema:

```sql
categories(
  slug,
  label,
  sort_order,
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
  submitted_by_github,
  logo_url,
  og_image_url,
  sort_order,
  source_path,
  is_published,
  synced_at
)
```

## Cache Purge Behavior

After D1 sync succeeds, purge these URLs every time:

- `/`
- `/sitemap-index.xml`
- `/sitemap-pages.xml`
- `/sitemap-tools.xml`
- `/sitemap-categories.xml`

Additionally purge:

- each changed or deleted tool page: `/tools/<slug>`
- each affected category page: `/category/<slug>`

Category purging must consider both old and new category values so category moves do not leave stale cached pages behind.

The purge step should target URLs, not purge the whole zone.

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
- The database remains aligned to the approved repo state after repeated edits, moves, and deletions.

## Assumptions

- No content PR preview environment is required.
- This repo remains the only authoring source of truth.
- D1 is the runtime published store.
- The site repo will be migrated to read from D1 after this publish pipeline is complete.
