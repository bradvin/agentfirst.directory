import test from "node:test";
import assert from "node:assert/strict";
import os from "node:os";
import path from "node:path";
import { cp, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { validateContent } from "../scripts/lib/content.mjs";

const fixturesRoot = path.resolve("test/fixtures/valid");

async function createFixtureCopy() {
  const tempRoot = await mkdtemp(path.join(os.tmpdir(), "agentfirst-content-"));
  await cp(fixturesRoot, tempRoot, { recursive: true });
  return tempRoot;
}

async function withFixture(mutator) {
  const tempRoot = await createFixtureCopy();
  try {
    if (mutator) {
      await mutator(tempRoot);
    }

    return await validateContent(tempRoot);
  } finally {
    await rm(tempRoot, { recursive: true, force: true });
  }
}

test("valid content fixture passes validation", async () => {
  const result = await withFixture();

  assert.equal(result.errors.length, 0);
  assert.equal(result.categories.length, 2);
  assert.equal(result.tools.length, 2);
});

test("duplicate category slug is rejected", async () => {
  const result = await withFixture(async (rootDir) => {
    const original = await readFile(path.join(rootDir, "categories/orchestrators.json"), "utf8");
    await writeFile(path.join(rootDir, "categories/duplicate.json"), original, "utf8");
  });

  assert(result.errors.some((error) => error.includes('duplicate category slug "orchestrators"')));
});

test("duplicate tool slug is rejected", async () => {
  const result = await withFixture(async (rootDir) => {
    const original = await readFile(path.join(rootDir, "tools/paperclip.md"), "utf8");
    await writeFile(path.join(rootDir, "tools/duplicate.md"), original, "utf8");
  });

  assert(result.errors.some((error) => error.includes('duplicate tool slug "paperclip"')));
});

test("filename mismatch is rejected", async () => {
  const result = await withFixture(async (rootDir) => {
    const filePath = path.join(rootDir, "categories/orchestrators.json");
    const original = await readFile(filePath, "utf8");
    await writeFile(filePath, original.replace('"orchestrators"', '"workflow-orchestration"'), "utf8");
  });

  assert(result.errors.some((error) => error.includes("slug must match filename (orchestrators)")));
});

test("missing markdown body is rejected", async () => {
  const result = await withFixture(async (rootDir) => {
    const filePath = path.join(rootDir, "tools/paperclip.md");
    const original = await readFile(filePath, "utf8");
    const [frontmatter] = original.split("\n---\n\n");
    await writeFile(filePath, `${frontmatter}\n---\n`, "utf8");
  });

  assert(result.errors.some((error) => error.includes("markdown body is required")));
});

test("invalid category references are rejected", async () => {
  const result = await withFixture(async (rootDir) => {
    const filePath = path.join(rootDir, "tools/paperclip.md");
    const original = await readFile(filePath, "utf8");
    await writeFile(filePath, original.replace('"orchestrators"', '"missing-category"'), "utf8");
  });

  assert(result.errors.some((error) => error.includes('category "missing-category" does not exist')));
});

test("invalid URL fields are rejected", async () => {
  const result = await withFixture(async (rootDir) => {
    const filePath = path.join(rootDir, "tools/paperclip.md");
    const original = await readFile(filePath, "utf8");
    await writeFile(
      filePath,
      original
        .replace('websiteUrl: "https://paperclip.ing"', 'websiteUrl: "ftp://paperclip.ing"')
        .replace(
          'githubUrl: "https://github.com/paperclipai/paperclip"',
          'githubUrl: "not-a-url"',
        ),
      "utf8",
    );
  });

  assert(result.errors.some((error) => error.includes("websiteUrl must use http or https")));
  assert(result.errors.some((error) => error.includes("githubUrl must be a valid URL")));
});

test("invalid submittedBy is rejected", async () => {
  const result = await withFixture(async (rootDir) => {
    const filePath = path.join(rootDir, "tools/paperclip.md");
    const original = await readFile(filePath, "utf8");
    await writeFile(filePath, original.replace('"bradvin"', '"bad-user-"'), "utf8");
  });

  assert(result.errors.some((error) => error.includes("submittedBy must be a valid GitHub username")));
});

test("invalid pricing is rejected", async () => {
  const result = await withFixture(async (rootDir) => {
    const filePath = path.join(rootDir, "tools/paperclip.md");
    const original = await readFile(filePath, "utf8");
    await writeFile(filePath, original.replace('"open-source"', '"enterprise"'), "utf8");
  });

  assert(result.errors.some((error) => error.includes("pricing must be one of")));
});

test("empty tags are rejected", async () => {
  const result = await withFixture(async (rootDir) => {
    const filePath = path.join(rootDir, "tools/paperclip.md");
    const original = await readFile(filePath, "utf8");
    await writeFile(
      filePath,
      original.replace('tags:\n  - "orchestration"\n  - "multi-agent"', "tags: []"),
      "utf8",
    );
  });

  assert(result.errors.some((error) => error.includes("tags must be a non-empty array")));
});
