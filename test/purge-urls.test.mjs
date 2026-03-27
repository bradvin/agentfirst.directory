import test from "node:test";
import assert from "node:assert/strict";
import os from "node:os";
import path from "node:path";
import { mkdtemp, mkdir, rename, rm, writeFile } from "node:fs/promises";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { computePurgeUrls } from "../scripts/lib/purge-urls.mjs";

const execFileAsync = promisify(execFile);
const BASE_URL = "https://agentfirst.directory";
const STATIC_URLS = [
  `${BASE_URL}/`,
  `${BASE_URL}/sitemap-categories.xml`,
  `${BASE_URL}/sitemap-index.xml`,
  `${BASE_URL}/sitemap-pages.xml`,
  `${BASE_URL}/sitemap-tools.xml`,
];

async function git(repoDir, ...args) {
  const { stdout } = await execFileAsync("git", args, { cwd: repoDir });
  return stdout.trim();
}

async function writeRepoFile(repoDir, relativePath, content) {
  await mkdir(path.dirname(path.join(repoDir, relativePath)), { recursive: true });
  await writeFile(path.join(repoDir, relativePath), content, "utf8");
}

function categoryFile(slug, label) {
  return JSON.stringify({ slug, label, sortOrder: 10 }, null, 2) + "\n";
}

function toolFile({ slug, name, category, body = "Body copy." }) {
  return `---
slug: "${slug}"
name: "${name}"
description: "${name} description"
category: "${category}"
tags:
  - "tag"
websiteUrl: "https://${slug}.example.com"
pricing: "freemium"
submittedBy: "bradvin"
---

${body}
`;
}

async function createRepo() {
  const repoDir = await mkdtemp(path.join(os.tmpdir(), "agentfirst-purge-"));
  await git(repoDir, "init");
  await git(repoDir, "config", "user.name", "Codex");
  await git(repoDir, "config", "user.email", "codex@example.com");
  await writeRepoFile(repoDir, "categories/orchestrators.json", categoryFile("orchestrators", "Orchestrators"));
  await writeRepoFile(
    repoDir,
    "categories/voice-multimodal-interfaces.json",
    categoryFile("voice-multimodal-interfaces", "Voice & Multimodal"),
  );
  await writeRepoFile(
    repoDir,
    "tools/paperclip.md",
    toolFile({ slug: "paperclip", name: "Paperclip", category: "orchestrators" }),
  );
  await git(repoDir, "add", ".");
  await git(repoDir, "commit", "-m", "initial");
  return repoDir;
}

async function commitAll(repoDir, message) {
  await git(repoDir, "add", "-A");
  await git(repoDir, "commit", "-m", message);
  return git(repoDir, "rev-parse", "HEAD");
}

async function collectUrls(mutator) {
  const repoDir = await createRepo();

  try {
    const baseCommit = await git(repoDir, "rev-parse", "HEAD");
    await mutator(repoDir);
    const headCommit = await commitAll(repoDir, "change");
    return await computePurgeUrls({ repoDir, baseCommit, headCommit, baseUrl: BASE_URL });
  } finally {
    await rm(repoDir, { recursive: true, force: true });
  }
}

test("tool edits purge the tool page and its category page", async () => {
  const urls = await collectUrls(async (repoDir) => {
    await writeRepoFile(
      repoDir,
      "tools/paperclip.md",
      toolFile({
        slug: "paperclip",
        name: "Paperclip",
        category: "orchestrators",
        body: "Updated body.",
      }),
    );
  });

  assert.deepEqual(urls, [...STATIC_URLS, `${BASE_URL}/category/orchestrators`, `${BASE_URL}/tools/paperclip`].sort());
});

test("tool deletion purges the deleted tool page and prior category page", async () => {
  const urls = await collectUrls(async (repoDir) => {
    await rm(path.join(repoDir, "tools/paperclip.md"));
  });

  assert.deepEqual(urls, [...STATIC_URLS, `${BASE_URL}/category/orchestrators`, `${BASE_URL}/tools/paperclip`].sort());
});

test("tool rename and category move purge old and new tool and category URLs", async () => {
  const urls = await collectUrls(async (repoDir) => {
    await rename(
      path.join(repoDir, "tools/paperclip.md"),
      path.join(repoDir, "tools/workflows.md"),
    );
    await writeRepoFile(
      repoDir,
      "tools/workflows.md",
      toolFile({
        slug: "workflows",
        name: "Workflows",
        category: "voice-multimodal-interfaces",
      }),
    );
  });

  assert.deepEqual(
    urls,
    [
      ...STATIC_URLS,
      `${BASE_URL}/category/orchestrators`,
      `${BASE_URL}/category/voice-multimodal-interfaces`,
      `${BASE_URL}/tools/paperclip`,
      `${BASE_URL}/tools/workflows`,
    ].sort(),
  );
});

test("category rename purges the old and new category URLs", async () => {
  const urls = await collectUrls(async (repoDir) => {
    await rename(
      path.join(repoDir, "categories/orchestrators.json"),
      path.join(repoDir, "categories/workflow-orchestration.json"),
    );
    await writeRepoFile(
      repoDir,
      "categories/workflow-orchestration.json",
      categoryFile("workflow-orchestration", "Workflow Orchestration"),
    );
    await writeRepoFile(
      repoDir,
      "tools/paperclip.md",
      toolFile({
        slug: "paperclip",
        name: "Paperclip",
        category: "workflow-orchestration",
      }),
    );
  });

  assert.deepEqual(
    urls,
    [
      ...STATIC_URLS,
      `${BASE_URL}/category/orchestrators`,
      `${BASE_URL}/category/workflow-orchestration`,
      `${BASE_URL}/tools/paperclip`,
    ].sort(),
  );
});

test("category deletion purges the deleted category page", async () => {
  const urls = await collectUrls(async (repoDir) => {
    await rm(path.join(repoDir, "categories/voice-multimodal-interfaces.json"));
  });

  assert.deepEqual(
    urls,
    [...STATIC_URLS, `${BASE_URL}/category/voice-multimodal-interfaces`].sort(),
  );
});
