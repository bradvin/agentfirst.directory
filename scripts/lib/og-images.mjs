import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const SOCIAL_META_KEYS = [
  "og:image:secure_url",
  "og:image:url",
  "og:image",
  "twitter:image",
];

function normalizeCliArgs(argv) {
  const options = {
    write: false,
    refresh: false,
    slugs: [],
    rootDir: process.cwd(),
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];

    if (arg === "--write") {
      options.write = true;
      continue;
    }

    if (arg === "--refresh") {
      options.refresh = true;
      continue;
    }

    if (arg === "--slug") {
      const value = argv[index + 1];
      if (!value) {
        throw new Error("--slug requires a value");
      }
      options.slugs.push(value);
      index += 1;
      continue;
    }

    if (arg === "--root-dir") {
      const value = argv[index + 1];
      if (!value) {
        throw new Error("--root-dir requires a value");
      }
      options.rootDir = path.resolve(value);
      index += 1;
      continue;
    }

    if (arg === "--help" || arg === "-h") {
      options.help = true;
      continue;
    }

    throw new Error(`Unknown argument: ${arg}`);
  }

  return options;
}

function parseMetaTags(html) {
  const tags = html.match(/<meta\b[^>]*>/gi) ?? [];

  return tags.map((tag) => {
    const attributes = {};
    const attributePattern = /([a-zA-Z:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+))/g;

    for (const match of tag.matchAll(attributePattern)) {
      const [, key, doubleQuoted, singleQuoted, bare] = match;
      attributes[key.toLowerCase()] = doubleQuoted ?? singleQuoted ?? bare ?? "";
    }

    return attributes;
  });
}

function resolveImageUrl(value, baseUrl) {
  if (!value) {
    return null;
  }

  try {
    const url = new URL(value, baseUrl);
    if (!["http:", "https:"].includes(url.protocol)) {
      return null;
    }

    return url.toString();
  } catch {
    return null;
  }
}

export function extractSocialImageUrl(html, baseUrl) {
  const tags = parseMetaTags(html);

  for (const key of SOCIAL_META_KEYS) {
    const match = tags.find((tag) => tag.property?.toLowerCase() === key || tag.name?.toLowerCase() === key);
    const url = resolveImageUrl(match?.content, baseUrl);
    if (url) {
      return url;
    }
  }

  return null;
}

export function buildGoogleFaviconUrl(websiteUrl) {
  const url = new URL("https://www.google.com/s2/favicons");
  url.searchParams.set("sz", "64");
  url.searchParams.set("domain_url", websiteUrl);
  return url.toString();
}

export function upsertFrontmatterField(rawContent, fieldName, fieldValue, anchorFields = []) {
  const frontmatterMatch = rawContent.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!frontmatterMatch) {
    throw new Error("Tool file is missing YAML frontmatter");
  }

  const [fullMatch, frontmatterBody] = frontmatterMatch;
  const lines = frontmatterBody.split("\n");
  const formattedLine = `${fieldName}: "${fieldValue}"`;
  const existingIndex = lines.findIndex((line) => line.startsWith(`${fieldName}:`));

  if (existingIndex >= 0) {
    lines[existingIndex] = formattedLine;
  } else {
    const anchorIndex = anchorFields
      .map((field) => lines.findIndex((line) => line.startsWith(field)))
      .find((index) => index >= 0);
    const insertIndex = anchorIndex >= 0 ? anchorIndex + 1 : lines.length;
    lines.splice(insertIndex, 0, formattedLine);
  }

  return rawContent.replace(fullMatch, `---\n${lines.join("\n")}\n---\n`);
}

export function upsertOgImageUrl(rawContent, ogImageUrl) {
  return upsertFrontmatterField(rawContent, "ogImageUrl", ogImageUrl, [
    "logoUrl:",
    "githubUrl:",
    "websiteUrl:",
  ]);
}

export function upsertLogoUrl(rawContent, logoUrl) {
  return upsertFrontmatterField(rawContent, "logoUrl", logoUrl, [
    "githubUrl:",
    "websiteUrl:",
  ]);
}

export async function fetchSocialImageForTool(tool, fetchImpl = fetch) {
  const response = await fetchImpl(tool.websiteUrl, {
    redirect: "follow",
    headers: {
      "user-agent": "agentfirst.directory og image enricher/1.0",
      accept: "text/html,application/xhtml+xml",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("text/html") && !contentType.includes("application/xhtml+xml")) {
    throw new Error(`Unsupported content type: ${contentType || "unknown"}`);
  }

  const html = await response.text();
  return extractSocialImageUrl(html, response.url);
}

export async function enrichOgImages({
  rootDir = process.cwd(),
  write = false,
  refresh = false,
  slugs = [],
  fetchImpl = fetch,
  logger = console,
} = {}) {
  const { readTools } = await import("./content.mjs");
  const tools = await readTools(rootDir);
  const slugFilter = new Set(slugs);
  const selectedTools = slugFilter.size > 0
    ? tools.filter((tool) => slugFilter.has(tool.slug))
    : tools;

  const summary = {
    checked: 0,
    updated: 0,
    unchanged: 0,
    skipped: 0,
    missing: 0,
    failed: 0,
  };

  for (const tool of selectedTools) {
    const shouldSkip = !refresh && typeof tool.ogImageUrl === "string" && tool.ogImageUrl.trim().length > 0;
    if (shouldSkip) {
      summary.skipped += 1;
      logger.log(`skip ${tool.slug}: existing ogImageUrl present`);
      continue;
    }

    summary.checked += 1;

    try {
      const discoveredUrl = await fetchSocialImageForTool(tool, fetchImpl);

      if (!discoveredUrl) {
        summary.missing += 1;
        logger.log(`missing ${tool.slug}: no social image metadata found`);
        continue;
      }

      if (tool.ogImageUrl === discoveredUrl) {
        summary.unchanged += 1;
        logger.log(`ok ${tool.slug}: ${discoveredUrl}`);
        continue;
      }

      if (write) {
        const filePath = path.join(rootDir, tool.sourcePath);
        const rawContent = await readFile(filePath, "utf8");
        const nextContent = upsertOgImageUrl(rawContent, discoveredUrl);
        await writeFile(filePath, nextContent, "utf8");
      }

      summary.updated += 1;
      logger.log(`${write ? "update" : "would-update"} ${tool.slug}: ${discoveredUrl}`);
    } catch (error) {
      summary.failed += 1;
      logger.error(`fail ${tool.slug}: ${error.message}`);
    }
  }

  logger.log(
    `summary checked=${summary.checked} updated=${summary.updated} unchanged=${summary.unchanged} skipped=${summary.skipped} missing=${summary.missing} failed=${summary.failed}`,
  );

  return summary;
}

export async function enrichToolAssets({
  rootDir = process.cwd(),
  write = false,
  refreshOg = false,
  refreshLogo = false,
  slugs = [],
  fetchImpl = fetch,
  logger = console,
} = {}) {
  const { readTools } = await import("./content.mjs");
  const tools = await readTools(rootDir);
  const slugFilter = new Set(slugs);
  const selectedTools = slugFilter.size > 0
    ? tools.filter((tool) => slugFilter.has(tool.slug))
    : tools;

  const summary = {
    checked: 0,
    changed: 0,
    logoUpdated: 0,
    ogUpdated: 0,
    skipped: 0,
    missingOg: 0,
    failed: 0,
  };

  for (const tool of selectedTools) {
    const needsLogo = refreshLogo || !tool.logoUrl;
    const needsOg = refreshOg || !tool.ogImageUrl;

    if (!needsLogo && !needsOg) {
      summary.skipped += 1;
      logger.log(`skip ${tool.slug}: logoUrl and ogImageUrl already present`);
      continue;
    }

    summary.checked += 1;

    try {
      const filePath = path.join(rootDir, tool.sourcePath);
      const rawContent = await readFile(filePath, "utf8");
      let nextContent = rawContent;
      let changed = false;

      if (needsLogo) {
        const faviconUrl = buildGoogleFaviconUrl(tool.websiteUrl);
        if (tool.logoUrl !== faviconUrl) {
          nextContent = upsertLogoUrl(nextContent, faviconUrl);
          summary.logoUpdated += 1;
          changed = true;
          logger.log(`${write ? "update" : "would-update"} logo ${tool.slug}: ${faviconUrl}`);
        }
      }

      if (needsOg) {
        const discoveredUrl = await fetchSocialImageForTool(tool, fetchImpl);
        if (!discoveredUrl) {
          summary.missingOg += 1;
          logger.log(`missing og ${tool.slug}: no social image metadata found`);
        } else if (tool.ogImageUrl !== discoveredUrl) {
          nextContent = upsertOgImageUrl(nextContent, discoveredUrl);
          summary.ogUpdated += 1;
          changed = true;
          logger.log(`${write ? "update" : "would-update"} og ${tool.slug}: ${discoveredUrl}`);
        }
      }

      if (changed) {
        summary.changed += 1;
        if (write) {
          await writeFile(filePath, nextContent, "utf8");
        }
      }
    } catch (error) {
      summary.failed += 1;
      logger.error(`fail ${tool.slug}: ${error.message}`);
    }
  }

  logger.log(
    `summary checked=${summary.checked} changed=${summary.changed} logoUpdated=${summary.logoUpdated} ogUpdated=${summary.ogUpdated} skipped=${summary.skipped} missingOg=${summary.missingOg} failed=${summary.failed}`,
  );

  return summary;
}

export function formatHelpText() {
  return [
    "Usage: node ./scripts/enrich-og-images.mjs [options]",
    "",
    "Options:",
    "  --write          Persist discovered ogImageUrl values into tool files",
    "  --refresh        Re-fetch tools that already have ogImageUrl",
    "  --slug <slug>    Limit the run to one or more tool slugs",
    "  --root-dir <dir> Run against a different content repo root",
    "  --help           Show this help text",
    "",
    "Default behavior is a dry run that checks only tools missing ogImageUrl.",
  ].join("\n");
}

export { normalizeCliArgs };
