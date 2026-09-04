import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { readToolSubmitters } from "./tool-submitters.mjs";

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const PRICING_VALUES = new Set([
  "open-source",
  "source-available",
  "freemium",
  "free",
  "paid",
  "unknown",
]);
const SOURCE_TYPE_VALUES = new Set([
  "official-documentation",
  "official-repository",
  "official-license",
  "official-pricing",
  "official-product-page",
  "official-product-announcement",
  "official-specification",
  "official-legal",
  "official-release-notes",
]);
const CLASSIFICATION_VALUES = new Set([
  "agent-native",
  "agent-enabling",
  "agent-internet-protocol",
]);
const ENTITY_TYPE_VALUES = new Set([
  "software-application",
  "web-application",
  "software-source-code",
  "web-api",
  "service",
  "technical-standard",
  "protocol",
]);
const VERIFICATION_LEVEL_VALUES = new Set([
  "documentation-reviewed",
  "vendor-confirmed",
  "hands-on-tested",
]);
const ISO_DATE_PATTERN = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}(?::\d{2}(?:\.\d+)?)?(?:Z|[+-]\d{2}:\d{2}))?$/;

function getCategoryDir(rootDir) {
  return path.join(rootDir, "categories");
}

function getToolDir(rootDir) {
  return path.join(rootDir, "tools");
}

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries
      .sort((left, right) => left.name.localeCompare(right.name))
      .map(async (entry) => {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          return walk(fullPath);
        }

        return [fullPath];
      }),
  );

  return files.flat();
}

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function isOptionalInteger(value) {
  return value === undefined || Number.isInteger(value);
}

function validateOptionalString(value, fieldName, errors, sourcePath) {
  if (value !== undefined && !isNonEmptyString(value)) {
    errors.push(`${sourcePath}: ${fieldName} must be a non-empty string when present`);
  }
}

function validatePositiveInteger(value, fieldName, errors, sourcePath) {
  if (value !== undefined && (!Number.isInteger(value) || value <= 0)) {
    errors.push(`${sourcePath}: ${fieldName} must be a positive integer when present`);
  }
}

function validateOptionalBoolean(value, fieldName, errors, sourcePath) {
  if (value !== undefined && typeof value !== "boolean") {
    errors.push(`${sourcePath}: ${fieldName} must be a boolean when present`);
  }
}

function validateOptionalEnum(value, fieldName, allowedValues, errors, sourcePath) {
  if (value !== undefined && !allowedValues.has(value)) {
    errors.push(
      `${sourcePath}: ${fieldName} must be one of ${Array.from(allowedValues).join(", ")} when present`,
    );
  }
}

function validateStringArray(value, fieldName, errors, sourcePath) {
  if (value === undefined) {
    return;
  }

  if (!Array.isArray(value)) {
    errors.push(`${sourcePath}: ${fieldName} must be an array when present`);
    return;
  }

  if (value.some((item) => !isNonEmptyString(item))) {
    errors.push(`${sourcePath}: ${fieldName} must contain only non-empty strings`);
  }
}

function validateRequiredStringArray(value, fieldName, errors, sourcePath) {
  if (!Array.isArray(value) || value.length === 0) {
    errors.push(`${sourcePath}: ${fieldName} must be a non-empty array`);
    return;
  }

  if (value.some((item) => !isNonEmptyString(item))) {
    errors.push(`${sourcePath}: ${fieldName} must contain only non-empty strings`);
  }
}

function validateDate(value, fieldName, errors, sourcePath) {
  if (value === undefined) {
    return;
  }

  const timestamp = isNonEmptyString(value)
    ? Date.parse(value.length === 10 ? `${value}T00:00:00Z` : value)
    : Number.NaN;
  const invalidDateOnly = value?.length === 10
    && !Number.isNaN(timestamp)
    && new Date(timestamp).toISOString().slice(0, 10) !== value;

  if (!isNonEmptyString(value) || !ISO_DATE_PATTERN.test(value) || Number.isNaN(timestamp) || invalidDateOnly) {
    errors.push(`${sourcePath}: ${fieldName} must be an ISO 8601 date or timestamp when present`);
  }
}

function validateEvidenceSources(value, fieldName, errors, sourcePath) {
  if (value === undefined) {
    return;
  }

  if (!Array.isArray(value)) {
    errors.push(`${sourcePath}: ${fieldName} must be an array when present`);
    return;
  }

  for (const [index, source] of value.entries()) {
    const itemField = `${fieldName}[${index}]`;

    if (!source || typeof source !== "object" || Array.isArray(source)) {
      errors.push(`${sourcePath}: ${itemField} must be an object`);
      continue;
    }

    if (!isNonEmptyString(source.title)) {
      errors.push(`${sourcePath}: ${itemField}.title is required`);
    }

    if (!isNonEmptyString(source.claim)) {
      errors.push(`${sourcePath}: ${itemField}.claim is required`);
    }

    if (!isNonEmptyString(source.url)) {
      errors.push(`${sourcePath}: ${itemField}.url is required`);
    } else {
      validateUrl(source.url, `${itemField}.url`, errors, sourcePath);
    }

    if (!isNonEmptyString(source.accessedAt)) {
      errors.push(`${sourcePath}: ${itemField}.accessedAt is required`);
    } else {
      validateDate(source.accessedAt, `${itemField}.accessedAt`, errors, sourcePath);
    }
    validateOptionalEnum(
      source.sourceType,
      `${itemField}.sourceType`,
      SOURCE_TYPE_VALUES,
      errors,
      sourcePath,
    );
  }
}

function validateReviewProvenance(record, errors, sourcePath) {
  const hasReviewer = record.reviewedBy !== undefined;
  const hasReviewDate = record.reviewedAt !== undefined;

  if (hasReviewer !== hasReviewDate) {
    errors.push(`${sourcePath}: reviewedBy and reviewedAt must be set together`);
  }
}

function validateUrl(value, fieldName, errors, sourcePath) {
  if (value === undefined || value === null || value === "") {
    return;
  }

  try {
    const parsed = new URL(value);
    if (!["http:", "https:"].includes(parsed.protocol)) {
      errors.push(`${sourcePath}: ${fieldName} must use http or https`);
    }
  } catch {
    errors.push(`${sourcePath}: ${fieldName} must be a valid URL`);
  }
}

export function parseCategoryFile(raw, sourcePath) {
  const slugFromPath = path.basename(sourcePath, ".json");
  return {
    ...JSON.parse(raw),
    sourcePath,
    slugFromPath,
  };
}

export function parseToolFile(raw, sourcePath) {
  const parsed = matter(raw);
  const slugFromPath = path.basename(sourcePath, ".md");
  return {
    ...parsed.data,
    body: parsed.content.trim(),
    sourcePath,
    slugFromPath,
  };
}

export async function readCategories(rootDir = process.cwd()) {
  const categoryDir = getCategoryDir(rootDir);
  const files = (await walk(categoryDir)).filter((file) => file.endsWith(".json"));
  const categories = [];

  for (const file of files) {
    const raw = await readFile(file, "utf8");
    categories.push(parseCategoryFile(raw, path.relative(rootDir, file)));
  }

  return categories;
}

export async function readTools(rootDir = process.cwd()) {
  const toolDir = getToolDir(rootDir);
  const files = (await walk(toolDir)).filter((file) => file.endsWith(".md"));
  const tools = [];

  for (const file of files) {
    const raw = await readFile(file, "utf8");
    tools.push(parseToolFile(raw, path.relative(rootDir, file)));
  }

  return tools;
}

export async function loadContent(rootDir = process.cwd()) {
  const categories = await readCategories(rootDir);
  const toolSubmitters = await readToolSubmitters(rootDir);
  const tools = (await readTools(rootDir)).map((tool) => ({
    ...tool,
    submittedBy: toolSubmitters[tool.slug],
  }));
  return { categories, tools, toolSubmitters };
}

export async function validateContent(rootDir = process.cwd()) {
  const { categories, tools } = await loadContent(rootDir);
  const errors = [];
  const categorySlugs = new Set();
  const toolSlugs = new Set();

  for (const category of categories) {
    if (category.contentModifiedAt !== undefined) {
      errors.push(
        `${category.sourcePath}: contentModifiedAt is managed by the publish pipeline and must not be set`,
      );
    }

    if (!isNonEmptyString(category.slug)) {
      errors.push(`${category.sourcePath}: slug is required`);
    } else {
      if (!SLUG_PATTERN.test(category.slug)) {
        errors.push(`${category.sourcePath}: slug must be kebab-case`);
      }

      if (category.slug !== category.slugFromPath) {
        errors.push(
          `${category.sourcePath}: slug must match filename (${category.slugFromPath})`,
        );
      }
    }

    if (!isNonEmptyString(category.label)) {
      errors.push(`${category.sourcePath}: label is required`);
    }

    if (!isOptionalInteger(category.sortOrder)) {
      errors.push(`${category.sourcePath}: sortOrder must be an integer when present`);
    }

    for (const fieldName of [
      "seoTitle",
      "descriptionMd",
      "definitionMd",
      "scopeMd",
      "inclusionMd",
      "exclusionMd",
      "selectionGuideMd",
    ]) {
      if (!isNonEmptyString(category[fieldName])) {
        errors.push(`${category.sourcePath}: ${fieldName} is required`);
      }
    }

    validateOptionalString(category.reviewedBy, "reviewedBy", errors, category.sourcePath);
    validateRequiredStringArray(category.useCases, "useCases", errors, category.sourcePath);
    validateEvidenceSources(category.sources, "sources", errors, category.sourcePath);
    validateDate(category.reviewedAt, "reviewedAt", errors, category.sourcePath);
    validateDate(category.publishedAt, "publishedAt", errors, category.sourcePath);
    validateReviewProvenance(category, errors, category.sourcePath);
    validateOptionalBoolean(category.isIndexable, "isIndexable", errors, category.sourcePath);

    if (categorySlugs.has(category.slug)) {
      errors.push(`${category.sourcePath}: duplicate category slug "${category.slug}"`);
    }

    categorySlugs.add(category.slug);
  }

  for (const tool of tools) {
    if (tool.contentModifiedAt !== undefined) {
      errors.push(
        `${tool.sourcePath}: contentModifiedAt is managed by the publish pipeline and must not be set`,
      );
    }

    if (!isNonEmptyString(tool.slug)) {
      errors.push(`${tool.sourcePath}: slug is required`);
    } else {
      if (!SLUG_PATTERN.test(tool.slug)) {
        errors.push(`${tool.sourcePath}: slug must be kebab-case`);
      }

      if (tool.slug !== tool.slugFromPath) {
        errors.push(`${tool.sourcePath}: slug must match filename (${tool.slugFromPath})`);
      }
    }

    if (!isNonEmptyString(tool.name)) {
      errors.push(`${tool.sourcePath}: name is required`);
    }

    if (!isNonEmptyString(tool.description)) {
      errors.push(`${tool.sourcePath}: description is required`);
    }

    if (!isNonEmptyString(tool.body)) {
      errors.push(`${tool.sourcePath}: markdown body is required`);
    }

    if (!isNonEmptyString(tool.category)) {
      errors.push(`${tool.sourcePath}: category is required`);
    } else if (!categorySlugs.has(tool.category)) {
      errors.push(`${tool.sourcePath}: category "${tool.category}" does not exist in categories/`);
    }

    if (!Array.isArray(tool.tags) || tool.tags.length === 0) {
      errors.push(`${tool.sourcePath}: tags must be a non-empty array`);
    } else {
      for (const tag of tool.tags) {
        if (!isNonEmptyString(tag)) {
          errors.push(`${tool.sourcePath}: tags must contain only non-empty strings`);
          break;
        }
      }
    }

    if (!isNonEmptyString(tool.websiteUrl)) {
      errors.push(`${tool.sourcePath}: websiteUrl is required`);
    }

    if (!PRICING_VALUES.has(tool.pricing)) {
      errors.push(
        `${tool.sourcePath}: pricing must be one of ${Array.from(PRICING_VALUES).join(", ")}`,
      );
    }

    if (!CLASSIFICATION_VALUES.has(tool.classification)) {
      errors.push(
        `${tool.sourcePath}: classification must be one of ${Array.from(CLASSIFICATION_VALUES).join(", ")}`,
      );
    }

    if (!isOptionalInteger(tool.sortOrder)) {
      errors.push(`${tool.sourcePath}: sortOrder must be an integer when present`);
    }

    for (const fieldName of [
      "developerName",
      "classificationRationaleMd",
      "inclusionRationaleMd",
      "bestForMd",
      "notBestForMd",
      "limitationsMd",
      "unknownsMd",
      "reviewedBy",
    ]) {
      validateOptionalString(tool[fieldName], fieldName, errors, tool.sourcePath);
    }

    for (const fieldName of [
      "logoWidth",
      "logoHeight",
      "ogImageWidth",
      "ogImageHeight",
    ]) {
      validatePositiveInteger(tool[fieldName], fieldName, errors, tool.sourcePath);
    }

    validateOptionalEnum(tool.entityType, "entityType", ENTITY_TYPE_VALUES, errors, tool.sourcePath);
    validateOptionalEnum(
      tool.verificationLevel,
      "verificationLevel",
      VERIFICATION_LEVEL_VALUES,
      errors,
      tool.sourcePath,
    );
    validateStringArray(tool.interfaces, "interfaces", errors, tool.sourcePath);
    validateStringArray(tool.deploymentModes, "deploymentModes", errors, tool.sourcePath);
    validateEvidenceSources(tool.evidenceSources, "evidenceSources", errors, tool.sourcePath);
    validateDate(tool.reviewedAt, "reviewedAt", errors, tool.sourcePath);
    validateDate(tool.publishedAt, "publishedAt", errors, tool.sourcePath);
    validateReviewProvenance(tool, errors, tool.sourcePath);
    validateOptionalBoolean(tool.isIndexable, "isIndexable", errors, tool.sourcePath);

    validateUrl(tool.websiteUrl, "websiteUrl", errors, tool.sourcePath);
    validateUrl(tool.githubUrl, "githubUrl", errors, tool.sourcePath);
    validateUrl(tool.logoUrl, "logoUrl", errors, tool.sourcePath);
    validateUrl(tool.ogImageUrl, "ogImageUrl", errors, tool.sourcePath);
    validateUrl(tool.docsUrl, "docsUrl", errors, tool.sourcePath);
    validateUrl(tool.pricingUrl, "pricingUrl", errors, tool.sourcePath);
    validateUrl(tool.licenseUrl, "licenseUrl", errors, tool.sourcePath);

    if (toolSlugs.has(tool.slug)) {
      errors.push(`${tool.sourcePath}: duplicate tool slug "${tool.slug}"`);
    }

    toolSlugs.add(tool.slug);
  }

  return {
    categories,
    tools,
    errors,
  };
}
