import { validateContent } from "./content.mjs";
import { loadRedirectManifest } from "./redirects.mjs";
import { getMissingToolSubmitterErrors } from "./tool-submitters.mjs";

function sqlString(value) {
  if (value === undefined || value === null) {
    return "NULL";
  }

  return `'${String(value).replaceAll("'", "''")}'`;
}

function sqlInteger(value) {
  return Number.isInteger(value) ? String(value) : "NULL";
}

function sqlBoolean(value) {
  return value === false ? "0" : "1";
}

function sqlJson(value) {
  return sqlString(JSON.stringify(Array.isArray(value) ? value : []));
}

function sqlEvidenceJson(value) {
  const sources = Array.isArray(value)
    ? value.map((source) => ({
        title: source.title,
        url: source.url,
        claim: source.claim,
        accessedAt: source.accessedAt,
        ...(source.sourceType ? { sourceType: source.sourceType } : {}),
      }))
    : [];
  return sqlString(JSON.stringify(sources));
}

function sqlNotInCondition(columnName, values) {
  if (values.length === 0) {
    return "1 = 1";
  }

  return `${columnName} NOT IN (${values.map((value) => sqlString(value)).join(", ")})`;
}

function sqlChangedCondition(tableName, columns) {
  return columns
    .map((columnName) => `${tableName}.${columnName} IS NOT excluded.${columnName}`)
    .join("\n    OR ");
}

const CATEGORY_CONTENT_COLUMNS = [
  "label",
  "sort_order",
  "seo_title",
  "description_md",
  "definition_md",
  "scope_md",
  "inclusion_md",
  "exclusion_md",
  "selection_guide_md",
  "use_cases_json",
  "sources_json",
  "reviewed_by",
  "reviewed_at",
  "published_at",
  "is_indexable",
  "is_active",
];

const TOOL_CONTENT_COLUMNS = [
  "name",
  "description",
  "body_md",
  "category_slug",
  "tags_json",
  "website_url",
  "github_url",
  "pricing",
  "classification",
  "submitted_by_github",
  "logo_url",
  "og_image_url",
  "logo_width",
  "logo_height",
  "og_image_width",
  "og_image_height",
  "entity_type",
  "developer_name",
  "docs_url",
  "pricing_url",
  "license_url",
  "interfaces_json",
  "deployment_modes_json",
  "evidence_json",
  "verification_level",
  "classification_rationale_md",
  "inclusion_rationale_md",
  "best_for_md",
  "not_best_for_md",
  "limitations_md",
  "unknowns_md",
  "reviewed_by",
  "reviewed_at",
  "published_at",
  "is_indexable",
  "sort_order",
  "is_published",
];

export async function generateSyncSqlStatements(rootDir = process.cwd()) {
  const { categories, tools, errors } = await validateContent(rootDir);
  const { redirects, errors: redirectErrors } = await loadRedirectManifest(rootDir, {
    categories,
    tools,
  });
  const missingSubmitterErrors = getMissingToolSubmitterErrors(tools);
  const validationErrors = [...errors, ...redirectErrors, ...missingSubmitterErrors];

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
  const missingRedirectCondition = sqlNotInCondition(
    "source_path",
    redirects.map((redirect) => redirect.sourcePath),
  );
  const categoryChangedCondition = sqlChangedCondition("categories", CATEGORY_CONTENT_COLUMNS);
  const toolChangedCondition = sqlChangedCondition("tools", TOOL_CONTENT_COLUMNS);

  const categoryUpserts = categories
    .map(
      (category) => `
INSERT INTO categories (
  slug, label, sort_order, seo_title, description_md, definition_md, scope_md,
  inclusion_md, exclusion_md, selection_guide_md, use_cases_json, sources_json,
  reviewed_by, reviewed_at, published_at, is_indexable, source_path, is_active,
  content_modified_at, synced_at
)
VALUES (
  ${sqlString(category.slug)}, ${sqlString(category.label)}, ${sqlInteger(category.sortOrder)},
  ${sqlString(category.seoTitle)}, ${sqlString(category.descriptionMd)}, ${sqlString(category.definitionMd)},
  ${sqlString(category.scopeMd)}, ${sqlString(category.inclusionMd)}, ${sqlString(category.exclusionMd)},
  ${sqlString(category.selectionGuideMd)}, ${sqlJson(category.useCases)}, ${sqlEvidenceJson(category.sources)},
  ${sqlString(category.reviewedBy)}, ${sqlString(category.reviewedAt)}, ${sqlString(category.publishedAt)},
  ${sqlBoolean(category.isIndexable)}, ${sqlString(category.sourcePath)}, 1,
  CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
)
ON CONFLICT(slug) DO UPDATE SET
  label = excluded.label,
  sort_order = excluded.sort_order,
  seo_title = excluded.seo_title,
  description_md = excluded.description_md,
  definition_md = excluded.definition_md,
  scope_md = excluded.scope_md,
  inclusion_md = excluded.inclusion_md,
  exclusion_md = excluded.exclusion_md,
  selection_guide_md = excluded.selection_guide_md,
  use_cases_json = excluded.use_cases_json,
  sources_json = excluded.sources_json,
  reviewed_by = excluded.reviewed_by,
  reviewed_at = excluded.reviewed_at,
  published_at = excluded.published_at,
  is_indexable = excluded.is_indexable,
  source_path = excluded.source_path,
  is_active = 1,
  content_modified_at = CASE
    WHEN categories.content_modified_at IS NULL
      OR ${categoryChangedCondition}
    THEN CURRENT_TIMESTAMP
    ELSE categories.content_modified_at
  END,
  synced_at = CURRENT_TIMESTAMP;`,
    )
    .map((statement) => statement.trim());

  const toolUpserts = tools
    .map(
      (tool) => `
INSERT INTO tools (
  slug, name, description, body_md, category_slug, tags_json, website_url,
  github_url, pricing, classification, submitted_by_github, logo_url, og_image_url,
  logo_width, logo_height, og_image_width, og_image_height, entity_type,
  developer_name, docs_url, pricing_url, license_url, interfaces_json,
  deployment_modes_json, evidence_json, verification_level,
  classification_rationale_md, inclusion_rationale_md, best_for_md,
  not_best_for_md, limitations_md, unknowns_md, reviewed_by, reviewed_at,
  published_at, is_indexable, sort_order, source_path, is_published,
  content_modified_at, synced_at
)
VALUES (
  ${sqlString(tool.slug)}, ${sqlString(tool.name)}, ${sqlString(tool.description)}, ${sqlString(tool.body)},
  ${sqlString(tool.category)}, ${sqlJson(tool.tags)}, ${sqlString(tool.websiteUrl)},
  ${sqlString(tool.githubUrl)}, ${sqlString(tool.pricing)}, ${sqlString(tool.classification)},
  ${sqlString(tool.submittedBy)}, ${sqlString(tool.logoUrl)}, ${sqlString(tool.ogImageUrl)},
  ${sqlInteger(tool.logoWidth)}, ${sqlInteger(tool.logoHeight)}, ${sqlInteger(tool.ogImageWidth)},
  ${sqlInteger(tool.ogImageHeight)}, ${sqlString(tool.entityType)}, ${sqlString(tool.developerName)},
  ${sqlString(tool.docsUrl)}, ${sqlString(tool.pricingUrl)}, ${sqlString(tool.licenseUrl)},
  ${sqlJson(tool.interfaces)}, ${sqlJson(tool.deploymentModes)}, ${sqlEvidenceJson(tool.evidenceSources)},
  ${sqlString(tool.verificationLevel)}, ${sqlString(tool.classificationRationaleMd)},
  ${sqlString(tool.inclusionRationaleMd)}, ${sqlString(tool.bestForMd)}, ${sqlString(tool.notBestForMd)},
  ${sqlString(tool.limitationsMd)}, ${sqlString(tool.unknownsMd)}, ${sqlString(tool.reviewedBy)},
  ${sqlString(tool.reviewedAt)}, ${sqlString(tool.publishedAt)}, ${sqlBoolean(tool.isIndexable)},
  ${sqlInteger(tool.sortOrder)}, ${sqlString(tool.sourcePath)}, 1,
  CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
)
ON CONFLICT(slug) DO UPDATE SET
  name = excluded.name,
  description = excluded.description,
  body_md = excluded.body_md,
  category_slug = excluded.category_slug,
  tags_json = excluded.tags_json,
  website_url = excluded.website_url,
  github_url = excluded.github_url,
  pricing = excluded.pricing,
  classification = excluded.classification,
  submitted_by_github = excluded.submitted_by_github,
  logo_url = excluded.logo_url,
  og_image_url = excluded.og_image_url,
  logo_width = excluded.logo_width,
  logo_height = excluded.logo_height,
  og_image_width = excluded.og_image_width,
  og_image_height = excluded.og_image_height,
  entity_type = excluded.entity_type,
  developer_name = excluded.developer_name,
  docs_url = excluded.docs_url,
  pricing_url = excluded.pricing_url,
  license_url = excluded.license_url,
  interfaces_json = excluded.interfaces_json,
  deployment_modes_json = excluded.deployment_modes_json,
  evidence_json = excluded.evidence_json,
  verification_level = excluded.verification_level,
  classification_rationale_md = excluded.classification_rationale_md,
  inclusion_rationale_md = excluded.inclusion_rationale_md,
  best_for_md = excluded.best_for_md,
  not_best_for_md = excluded.not_best_for_md,
  limitations_md = excluded.limitations_md,
  unknowns_md = excluded.unknowns_md,
  reviewed_by = excluded.reviewed_by,
  reviewed_at = excluded.reviewed_at,
  published_at = excluded.published_at,
  is_indexable = excluded.is_indexable,
  sort_order = excluded.sort_order,
  source_path = excluded.source_path,
  is_published = 1,
  content_modified_at = CASE
    WHEN tools.content_modified_at IS NULL
      OR ${toolChangedCondition}
    THEN CURRENT_TIMESTAMP
    ELSE tools.content_modified_at
  END,
  synced_at = CURRENT_TIMESTAMP;`,
    )
    .map((statement) => statement.trim());

  const redirectUpserts = redirects.map((redirect) => `
INSERT INTO url_redirects (
  source_path, destination_path, status_code, is_active, note, updated_at
)
VALUES (
  ${sqlString(redirect.sourcePath)}, ${sqlString(redirect.destinationPath)},
  ${sqlInteger(redirect.statusCode)}, 1, ${sqlString(redirect.note)}, CURRENT_TIMESTAMP
)
ON CONFLICT(source_path) DO UPDATE SET
  destination_path = excluded.destination_path,
  status_code = excluded.status_code,
  is_active = 1,
  note = excluded.note,
  updated_at = CASE
    WHEN url_redirects.destination_path IS NOT excluded.destination_path
      OR url_redirects.status_code IS NOT excluded.status_code
      OR url_redirects.is_active IS NOT 1
      OR url_redirects.note IS NOT excluded.note
    THEN CURRENT_TIMESTAMP
    ELSE url_redirects.updated_at
  END;`.trim());

  const retireMissingTools = `
UPDATE tools
SET content_modified_at = CASE
      WHEN is_published IS NOT 0 THEN CURRENT_TIMESTAMP
      ELSE content_modified_at
    END,
    is_published = 0,
    synced_at = CURRENT_TIMESTAMP
WHERE ${missingToolCondition};`.trim();

  const retireMissingCategories = `
UPDATE categories
SET content_modified_at = CASE
      WHEN is_active IS NOT 0 THEN CURRENT_TIMESTAMP
      ELSE content_modified_at
    END,
    is_active = 0,
    synced_at = CURRENT_TIMESTAMP
WHERE ${missingCategoryCondition}
  AND NOT EXISTS (
    SELECT 1
    FROM tools
    WHERE tools.category_slug = categories.slug
      AND tools.is_published = 1
  );`.trim();

  const deactivateMissingRedirects = `
UPDATE url_redirects
SET updated_at = CASE
      WHEN is_active IS NOT 0 THEN CURRENT_TIMESTAMP
      ELSE updated_at
    END,
    is_active = 0
WHERE ${missingRedirectCondition};`.trim();

  return [
    ...categoryUpserts,
    ...toolUpserts,
    ...redirectUpserts,
    retireMissingTools,
    retireMissingCategories,
    deactivateMissingRedirects,
  ];
}

export function renderSyncSqlStatements(statements) {
  return `${statements.join("\n\n")}\n`;
}

export async function generateSyncSql(rootDir = process.cwd()) {
  return renderSyncSqlStatements(await generateSyncSqlStatements(rootDir));
}
