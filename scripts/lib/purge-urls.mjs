import { readFile } from "node:fs/promises";
import path from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { parseCategoryFile, parseToolFile } from "./content.mjs";
import { withoutGitRepositoryOverrides } from "./git-environment.mjs";
import { parseRedirectManifest } from "./redirects.mjs";

const execFileAsync = promisify(execFile);
const DEFAULT_BASE_URL = "https://agentfirst.directory";
const STATIC_PATHS = [
  "/",
  "/api/tools.json",
  "/data/agent-first-tools.csv",
  "/feed.xml",
  "/llms.txt",
  "/llms-full.txt",
  "/open-source-ai-agent-tools",
  "/research/state-of-agent-first-infrastructure",
  "/sitemap-index.xml",
  "/sitemap-pages.xml",
  "/sitemap-tools.xml",
  "/sitemap-categories.xml",
];
const EMPTY_TREE_SHA = "4b825dc642cb6eb9a060e54bf8d69288fbee4904";

function normalizeBaseUrl(baseUrl) {
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
}

function addPath(urls, baseUrl, pathname) {
  urls.add(new URL(pathname, `${baseUrl}/`).toString());
}

function parseNameStatus(stdout) {
  return stdout
    .split("\n")
    .filter(Boolean)
    .map((line) => line.split("\t"))
    .map((parts) => {
      const [status, firstPath, secondPath] = parts;
      return {
        status,
        oldPath: status.startsWith("R") || status.startsWith("C") ? firstPath : status.startsWith("A") ? null : firstPath,
        newPath: status.startsWith("D") ? null : status.startsWith("R") || status.startsWith("C") ? secondPath : firstPath,
      };
    });
}

async function runGit(repoDir, args) {
  const { stdout } = await execFileAsync("git", ["-C", repoDir, ...args], {
    env: withoutGitRepositoryOverrides(),
  });
  return stdout;
}

async function readGitObject(repoDir, commit, filePath) {
  if (!commit) {
    return null;
  }

  try {
    return await runGit(repoDir, ["show", `${commit}:${filePath}`]);
  } catch (error) {
    if (error.code === 128) {
      return null;
    }

    throw error;
  }
}

async function readWorkingTreeObject(repoDir, filePath) {
  try {
    return await readFile(path.join(repoDir, filePath), "utf8");
  } catch (error) {
    if (error.code === "ENOENT") {
      return null;
    }

    throw error;
  }
}

function parseCategoryPayload(raw, filePath) {
  if (!raw) {
    return null;
  }

  return parseCategoryFile(raw, filePath);
}

function parseToolPayload(raw, filePath) {
  if (!raw) {
    return null;
  }

  return parseToolFile(raw, filePath);
}

function parseRedirectPayload(raw, filePath) {
  if (!raw) {
    return [];
  }

  const { redirects, errors } = parseRedirectManifest(raw, {
    sourceName: filePath,
    resolveDestinations: false,
  });

  if (errors.length > 0) {
    throw new Error(`Cannot compute purge URLs:\n${errors.map((error) => `- ${error}`).join("\n")}`);
  }

  return redirects;
}

export async function computePurgeUrls({
  repoDir = process.cwd(),
  baseCommit,
  headCommit,
  baseUrl = DEFAULT_BASE_URL,
} = {}) {
  if (!headCommit) {
    throw new Error("headCommit is required");
  }

  const diffBase = !baseCommit || /^0+$/.test(baseCommit) ? EMPTY_TREE_SHA : baseCommit;
  const normalizedBaseUrl = normalizeBaseUrl(baseUrl);
  const urls = new Set();

  for (const staticPath of STATIC_PATHS) {
    addPath(urls, normalizedBaseUrl, staticPath);
  }

  const diffOutput = await runGit(repoDir, [
    "diff",
    "--name-status",
    "--find-renames",
    diffBase,
    headCommit,
    "--",
    "categories",
    "redirects.json",
    "tools",
  ]);

  for (const entry of parseNameStatus(diffOutput)) {
    if (entry.oldPath === "redirects.json" || entry.newPath === "redirects.json") {
      const oldRedirects = entry.oldPath
        ? parseRedirectPayload(
          await readGitObject(repoDir, diffBase, entry.oldPath),
          `${diffBase}:${entry.oldPath}`,
        )
        : [];
      const newRedirects = entry.newPath
        ? parseRedirectPayload(
          await readGitObject(repoDir, headCommit, entry.newPath),
          `${headCommit}:${entry.newPath}`,
        )
        : [];

      for (const redirect of [...oldRedirects, ...newRedirects]) {
        addPath(urls, normalizedBaseUrl, redirect.sourcePath);
        if (redirect.destinationPath) {
          addPath(urls, normalizedBaseUrl, redirect.destinationPath);
        }
      }
    }

    if (entry.oldPath?.startsWith("categories/") || entry.newPath?.startsWith("categories/")) {
      const oldCategory = entry.oldPath
        ? parseCategoryPayload(await readGitObject(repoDir, diffBase, entry.oldPath), entry.oldPath)
        : null;
      const newCategory = entry.newPath
        ? parseCategoryPayload(await readGitObject(repoDir, headCommit, entry.newPath), entry.newPath)
        : null;

      for (const slug of [oldCategory?.slug, newCategory?.slug]) {
        if (slug) {
          addPath(urls, normalizedBaseUrl, `/category/${slug}`);
        }
      }
    }

    if (entry.oldPath?.startsWith("tools/") || entry.newPath?.startsWith("tools/")) {
      const oldToolRaw = entry.oldPath
        ? await readGitObject(repoDir, diffBase, entry.oldPath)
        : null;
      const newToolRaw = entry.newPath
        ? await readWorkingTreeObject(repoDir, entry.newPath)
        : null;
      const oldTool = entry.oldPath ? parseToolPayload(oldToolRaw, entry.oldPath) : null;
      const newTool = entry.newPath ? parseToolPayload(newToolRaw, entry.newPath) : null;

      for (const slug of [oldTool?.slug, newTool?.slug]) {
        if (slug) {
          addPath(urls, normalizedBaseUrl, `/tools/${slug}`);
          addPath(urls, normalizedBaseUrl, `/media/tools/${slug}/card`);
          addPath(urls, normalizedBaseUrl, `/media/tools/${slug}/hero-small`);
          addPath(urls, normalizedBaseUrl, `/media/tools/${slug}/hero`);
        }
      }

      for (const categorySlug of [oldTool?.category, newTool?.category]) {
        if (categorySlug) {
          addPath(urls, normalizedBaseUrl, `/category/${categorySlug}`);
        }
      }
    }
  }

  return Array.from(urls).sort();
}
