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

function sqlNotInCondition(columnName, values) {
  if (values.length === 0) {
    return "1 = 1";
  }

  return `${columnName} NOT IN (${values.map((value) => sqlString(value)).join(", ")})`;
}

export async function generateSyncSql(rootDir = process.cwd()) {
  const { categories, tools, errors } = await validateContent(rootDir);
  const missingSubmitterErrors = tools
    .filter((tool) => typeof tool.submittedBy !== "string" || tool.submittedBy.trim().length === 0)
    .map((tool) => `${tool.sourcePath}: submitter must be set in tool-submitters.json`);
  const validationErrors = [...errors, ...missingSubmitterErrors];

  if (validationErrors.length > 0) {
    const error = new Error("Content validation failed");
    error.validationErrors = validationErrors;
    throw error;
  }

  const missingToolCondition = sqlNotInCondition(
    "slug",
    tools.map((tool) => tool.slug),
  );
  const missingCategoryCondition = sqlNotInCondition(
    "slug",
    categories.map((category) => category.slug),
  );

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
${categoryUpserts}

${toolUpserts}

UPDATE tools
SET is_published = 0,
    synced_at = CURRENT_TIMESTAMP
WHERE ${missingToolCondition};

UPDATE categories
SET is_active = 0,
    synced_at = CURRENT_TIMESTAMP
WHERE ${missingCategoryCondition}
  AND NOT EXISTS (
    SELECT 1
    FROM tools
    WHERE tools.category_slug = categories.slug
      AND tools.is_published = 1
  );
`.trimStart();
}
