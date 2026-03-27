import { validateContent } from "./content.mjs";

function sqlString(value) {
  if (value === undefined || value === null) {
    return "NULL";
  }

  return `'${String(value).replaceAll("'", "''")}'`;
}

function sqlInteger(value) {
  return Number.isInteger(value) ? String(value) : "NULL";
}

export async function generateSyncSql(rootDir = process.cwd()) {
  const { categories, tools, errors } = await validateContent(rootDir);

  if (errors.length > 0) {
    const error = new Error("Content validation failed");
    error.validationErrors = errors;
    throw error;
  }

  const categoryRows = categories
    .map(
      (category) =>
        `(${sqlString(category.slug)}, ${sqlString(category.label)}, ${sqlInteger(
          category.sortOrder,
        )}, ${sqlString(category.sourcePath)})`,
    )
    .join(",\n");

  const toolRows = tools
    .map(
      (tool) =>
        `(${sqlString(tool.slug)}, ${sqlString(tool.name)}, ${sqlString(
          tool.description,
        )}, ${sqlString(tool.body)}, ${sqlString(tool.category)}, ${sqlString(
          JSON.stringify(tool.tags),
        )}, ${sqlString(tool.websiteUrl)}, ${sqlString(tool.githubUrl)}, ${sqlString(
          tool.pricing,
        )}, ${sqlString(tool.submittedBy)}, ${sqlString(tool.logoUrl)}, ${sqlString(
          tool.ogImageUrl,
        )}, ${sqlInteger(tool.sortOrder)}, ${sqlString(tool.sourcePath)})`,
    )
    .join(",\n");

  const categoryUpserts = categories
    .map(
      (category) => `
INSERT INTO categories (slug, label, sort_order, source_path, is_active, synced_at)
VALUES (${sqlString(category.slug)}, ${sqlString(category.label)}, ${sqlInteger(
        category.sortOrder,
      )}, ${sqlString(category.sourcePath)}, 1, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET
  label = excluded.label,
  sort_order = excluded.sort_order,
  source_path = excluded.source_path,
  is_active = 1,
  synced_at = CURRENT_TIMESTAMP;`,
    )
    .join("\n");

  const toolUpserts = tools
    .map(
      (tool) => `
INSERT INTO tools (slug, name, description, body_md, category_slug, tags_json, website_url, github_url, pricing, submitted_by_github, logo_url, og_image_url, sort_order, source_path, is_published, synced_at)
VALUES (${sqlString(tool.slug)}, ${sqlString(tool.name)}, ${sqlString(
        tool.description,
      )}, ${sqlString(tool.body)}, ${sqlString(tool.category)}, ${sqlString(
        JSON.stringify(tool.tags),
      )}, ${sqlString(tool.websiteUrl)}, ${sqlString(tool.githubUrl)}, ${sqlString(
        tool.pricing,
      )}, ${sqlString(tool.submittedBy)}, ${sqlString(tool.logoUrl)}, ${sqlString(
        tool.ogImageUrl,
      )}, ${sqlInteger(tool.sortOrder)}, ${sqlString(tool.sourcePath)}, 1, CURRENT_TIMESTAMP)
ON CONFLICT(slug) DO UPDATE SET
  name = excluded.name,
  description = excluded.description,
  body_md = excluded.body_md,
  category_slug = excluded.category_slug,
  tags_json = excluded.tags_json,
  website_url = excluded.website_url,
  github_url = excluded.github_url,
  pricing = excluded.pricing,
  submitted_by_github = excluded.submitted_by_github,
  logo_url = excluded.logo_url,
  og_image_url = excluded.og_image_url,
  sort_order = excluded.sort_order,
  source_path = excluded.source_path,
  is_published = 1,
  synced_at = CURRENT_TIMESTAMP;`,
    )
    .join("\n");

  return `
CREATE TEMP TABLE repo_categories (
  slug TEXT PRIMARY KEY,
  label TEXT NOT NULL,
  sort_order INTEGER,
  source_path TEXT NOT NULL
);

CREATE TEMP TABLE repo_tools (
  slug TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  body_md TEXT NOT NULL,
  category_slug TEXT NOT NULL,
  tags_json TEXT NOT NULL,
  website_url TEXT NOT NULL,
  github_url TEXT,
  pricing TEXT NOT NULL,
  submitted_by_github TEXT NOT NULL,
  logo_url TEXT,
  og_image_url TEXT,
  sort_order INTEGER,
  source_path TEXT NOT NULL
);

${categoryRows ? `INSERT INTO repo_categories (slug, label, sort_order, source_path) VALUES\n${categoryRows};` : ""}

${toolRows ? `INSERT INTO repo_tools (slug, name, description, body_md, category_slug, tags_json, website_url, github_url, pricing, submitted_by_github, logo_url, og_image_url, sort_order, source_path) VALUES\n${toolRows};` : ""}

${categoryUpserts}

${toolUpserts}

UPDATE tools
SET is_published = 0,
    synced_at = CURRENT_TIMESTAMP
WHERE slug NOT IN (SELECT slug FROM repo_tools);

UPDATE categories
SET is_active = 0,
    synced_at = CURRENT_TIMESTAMP
WHERE slug NOT IN (SELECT slug FROM repo_categories)
  AND NOT EXISTS (
    SELECT 1
    FROM tools
    WHERE tools.category_slug = categories.slug
      AND tools.is_published = 1
  );

DROP TABLE repo_categories;
DROP TABLE repo_tools;
`.trimStart();
}
