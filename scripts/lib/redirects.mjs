import path from "node:path";
import { readFile } from "node:fs/promises";

export const REDIRECT_MANIFEST_FILENAME = "redirects.json";
export const REDIRECT_MANIFEST_VERSION = 1;
export const ALLOWED_STATIC_REDIRECT_DESTINATIONS = Object.freeze([]);

const REDIRECT_STATUS_CODES = new Set([301, 308, 410]);
const MANIFEST_KEYS = new Set(["version", "redirects"]);
const REDIRECT_KEYS = new Set([
  "sourcePath",
  "destinationPath",
  "statusCode",
  "note",
]);
const SITE_ORIGIN = "https://agentfirst.directory";

function isObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function hasOwn(value, key) {
  return Object.prototype.hasOwnProperty.call(value, key);
}

function addUnknownKeyErrors(value, allowedKeys, label, errors) {
  for (const key of Object.keys(value)) {
    if (!allowedKeys.has(key)) {
      errors.push(`${label}: unknown field "${key}"`);
    }
  }
}

export function isCanonicalSitePath(value) {
  if (
    typeof value !== "string"
    || !value.startsWith("/")
    || value.startsWith("//")
    || value.includes("?")
    || value.includes("#")
    || value.includes("\\")
  ) {
    return false;
  }

  try {
    const url = new URL(value, SITE_ORIGIN);
    return url.origin === SITE_ORIGIN
      && url.pathname === value
      && url.search === ""
      && url.hash === "";
  } catch {
    return false;
  }
}

function parseRedirectEntry(entry, index, sourceName, errors) {
  const label = `${sourceName}: redirects[${index}]`;

  if (!isObject(entry)) {
    errors.push(`${label} must be an object`);
    return null;
  }

  addUnknownKeyErrors(entry, REDIRECT_KEYS, label, errors);

  const sourcePath = entry.sourcePath;
  const destinationPath = entry.destinationPath;
  const statusCode = entry.statusCode;
  const note = hasOwn(entry, "note") ? entry.note : null;

  if (!isCanonicalSitePath(sourcePath)) {
    errors.push(
      `${label}.sourcePath must be a canonical absolute same-site path without an origin, query, or hash`,
    );
  }

  if (!REDIRECT_STATUS_CODES.has(statusCode)) {
    errors.push(`${label}.statusCode must be one of 301, 308, or 410`);
  }

  if (!hasOwn(entry, "destinationPath")) {
    errors.push(`${label}.destinationPath is required and must be a path or null`);
  } else if (statusCode === 410) {
    if (destinationPath !== null) {
      errors.push(`${label}.destinationPath must be null for statusCode 410`);
    }
  } else if (statusCode === 301 || statusCode === 308) {
    if (!isCanonicalSitePath(destinationPath)) {
      errors.push(
        `${label}.destinationPath must be a canonical absolute same-site path without an origin, query, or hash`,
      );
    } else if (destinationPath === sourcePath) {
      errors.push(`${label}.destinationPath must differ from sourcePath`);
    }
  }

  if (note !== null && (typeof note !== "string" || note.trim().length === 0)) {
    errors.push(`${label}.note must be a non-empty string or null`);
  }

  if (
    !isCanonicalSitePath(sourcePath)
    || !REDIRECT_STATUS_CODES.has(statusCode)
    || !hasOwn(entry, "destinationPath")
    || (statusCode === 410 && destinationPath !== null)
    || (
      (statusCode === 301 || statusCode === 308)
      && (!isCanonicalSitePath(destinationPath) || destinationPath === sourcePath)
    )
    || (note !== null && (typeof note !== "string" || note.trim().length === 0))
  ) {
    return null;
  }

  return {
    manifestIndex: index,
    sourcePath,
    destinationPath,
    statusCode,
    note,
  };
}

function validateGraph(redirects, sourceName, errors) {
  const firstIndexBySource = new Map();

  for (const redirect of redirects) {
    const priorIndex = firstIndexBySource.get(redirect.sourcePath);
    if (priorIndex !== undefined) {
      errors.push(
        `${sourceName}: redirects[${redirect.manifestIndex}].sourcePath duplicates redirects[${priorIndex}].sourcePath`,
      );
    } else {
      firstIndexBySource.set(redirect.sourcePath, redirect.manifestIndex);
    }
  }

  const sourcePaths = new Set(firstIndexBySource.keys());
  for (const redirect of redirects) {
    if (redirect.destinationPath && sourcePaths.has(redirect.destinationPath)) {
      errors.push(
        `${sourceName}: redirects[${redirect.manifestIndex}].destinationPath is also a manifest source; redirect chains and cycles are not allowed`,
      );
    }
  }
}

function validateRecordResolution(
  redirects,
  {
    sourceName,
    tools,
    categories,
    allowedStaticDestinations,
  },
  errors,
) {
  const activeToolPaths = new Set(
    tools
      .filter((tool) => typeof tool?.slug === "string")
      .map((tool) => `/tools/${tool.slug}`),
  );
  const activeCategoryPaths = new Set(
    categories
      .filter((category) => typeof category?.slug === "string")
      .map((category) => `/category/${category.slug}`),
  );
  const activeRecordPaths = new Set([...activeToolPaths, ...activeCategoryPaths]);
  const staticDestinations = new Set(allowedStaticDestinations);

  for (const redirect of redirects) {
    const label = `${sourceName}: redirects[${redirect.manifestIndex}]`;

    if (activeRecordPaths.has(redirect.sourcePath)) {
      errors.push(`${label}.sourcePath conflicts with a current active tool or category`);
    }

    if (!redirect.destinationPath) {
      continue;
    }

    if (redirect.destinationPath.startsWith("/tools/")) {
      if (!activeToolPaths.has(redirect.destinationPath)) {
        errors.push(`${label}.destinationPath does not resolve to a current active tool`);
      }
      continue;
    }

    if (redirect.destinationPath.startsWith("/category/")) {
      if (!activeCategoryPaths.has(redirect.destinationPath)) {
        errors.push(`${label}.destinationPath does not resolve to a current active category`);
      }
      continue;
    }

    if (!staticDestinations.has(redirect.destinationPath)) {
      errors.push(
        `${label}.destinationPath is not an active tool/category or an explicitly allowed static destination`,
      );
    }
  }
}

export function validateRedirectManifest(
  manifest,
  {
    sourceName = REDIRECT_MANIFEST_FILENAME,
    tools = [],
    categories = [],
    allowedStaticDestinations = ALLOWED_STATIC_REDIRECT_DESTINATIONS,
    resolveDestinations = true,
  } = {},
) {
  const errors = [];

  if (!isObject(manifest)) {
    return {
      version: null,
      redirects: [],
      errors: [`${sourceName}: manifest must be a JSON object`],
    };
  }

  addUnknownKeyErrors(manifest, MANIFEST_KEYS, sourceName, errors);

  if (manifest.version !== REDIRECT_MANIFEST_VERSION) {
    errors.push(`${sourceName}: version must be ${REDIRECT_MANIFEST_VERSION}`);
  }

  if (!Array.isArray(manifest.redirects)) {
    errors.push(`${sourceName}: redirects must be an array`);
    return { version: manifest.version ?? null, redirects: [], errors };
  }

  const redirects = manifest.redirects
    .map((entry, index) => parseRedirectEntry(entry, index, sourceName, errors))
    .filter(Boolean);

  validateGraph(redirects, sourceName, errors);

  if (resolveDestinations) {
    validateRecordResolution(
      redirects,
      {
        sourceName,
        tools,
        categories,
        allowedStaticDestinations,
      },
      errors,
    );
  }

  return {
    version: manifest.version ?? null,
    redirects: [...redirects]
      .sort((left, right) => left.sourcePath.localeCompare(right.sourcePath))
      .map(({ manifestIndex, ...redirect }) => redirect),
    errors,
  };
}

export function parseRedirectManifest(raw, options = {}) {
  const sourceName = options.sourceName ?? REDIRECT_MANIFEST_FILENAME;

  try {
    return validateRedirectManifest(JSON.parse(raw), options);
  } catch (error) {
    return {
      version: null,
      redirects: [],
      errors: [`${sourceName}: invalid JSON: ${error.message}`],
    };
  }
}

export async function loadRedirectManifest(rootDir = process.cwd(), options = {}) {
  const manifestPath = path.join(rootDir, REDIRECT_MANIFEST_FILENAME);

  try {
    const raw = await readFile(manifestPath, "utf8");
    return parseRedirectManifest(raw, {
      ...options,
      sourceName: REDIRECT_MANIFEST_FILENAME,
    });
  } catch (error) {
    if (error.code === "ENOENT") {
      return {
        version: null,
        redirects: [],
        errors: [`${REDIRECT_MANIFEST_FILENAME}: file is required`],
      };
    }

    throw error;
  }
}
