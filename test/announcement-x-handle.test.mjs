import test from "node:test";
import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { cp, mkdtemp, readFile, readdir, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { promisify } from "node:util";
import matter from "gray-matter";
import { loadContent, parseToolFile, readTools, validateContent } from "../scripts/lib/content.mjs";
import { enrichOgImages, enrichToolAssets } from "../scripts/lib/og-images.mjs";
import { generateSyncSql } from "../scripts/lib/sync-sql.mjs";

const execFileAsync = promisify(execFile);
const fixtureRoot = path.resolve("test/fixtures/valid");
const toolPath = "tools/paperclip.md";

async function withFixture(run) {
  const root = await mkdtemp(path.join(os.tmpdir(), "agentfirst-x-handle-"));
  try {
    await cp(fixtureRoot, root, { recursive: true });
    return await run(root);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
}

async function setHandle(root, value) {
  const file = path.join(root, toolPath);
  const parsed = matter(await readFile(file, "utf8"));
  // gray-matter caches parsed data by source; never mutate a cached fixture object.
  const data = { ...parsed.data };
  if (value === undefined) delete data.announcementXHandle;
  else data.announcementXHandle = value;
  await writeFile(file, matter.stringify(parsed.content, data));
}

async function migratedDatabase({ beforeAnnouncement } = {}) {
  const db = new DatabaseSync(":memory:");
  for (const file of (await readdir("migrations")).filter((name) => name.endsWith(".sql")).sort()) {
    if (file === "0007_add_announcement_x_handle.sql") beforeAnnouncement?.(db);
    db.exec(await readFile(path.resolve("migrations", file), "utf8"));
  }
  return db;
}

for (const [value, expected] of [
  [undefined, undefined], ["", undefined], [" \t\n ", undefined],
  ["Mixed_Case9", "Mixed_Case9"], ["  @Mixed_Case9 \t", "Mixed_Case9"],
  ["a", "a"], ["@_", "_"], ["123456789012345", "123456789012345"],
  ["Abcde12345_6789", "Abcde12345_6789"],
  ["@Abcde12345_6789", "Abcde12345_6789"],
]) {
  test(`announcement handle accepts ${JSON.stringify(value)} without changing case or GitHub attribution`, async () => {
    await withFixture(async (root) => {
      await setHandle(root, value);
      const result = await validateContent(root);
      assert.deepEqual(result.errors, []);
      const tool = result.tools.find((tool) => tool.slug === "paperclip");
      assert.equal(tool.announcementXHandle, expected);
      assert.equal(tool.submittedBy, "bradvin");
      const source = (await readTools(root)).find((tool) => tool.slug === "paperclip");
      assert.equal(source.announcementXHandle, expected, "announcement-facing source must be canonical too");
      assert.equal(source.submittedBy, undefined);
    });
  });
}

for (const value of [
  null, false, true, 42, 0, [], {}, ["valid"], { handle: "valid" },
  "@", "@@valid", "@ valid", "with space", "two\nlines", "has-dash", "has.dot",
  "é", "Ｆｏｏ", "name!", "1234567890123456", "@1234567890123456",
  "https://x.com/Valid", "http://twitter.com/Valid", "https://www.x.com/Valid?x=1",
  "x.com/Valid", "twitter.com/Valid", "//x.com/Valid", "mailto:Valid", "https://example.com",
  "x.com", "@valid/", "name\u200b", "foo'bar",
]) {
  test(`announcement handle rejects ${JSON.stringify(value)}`, async () => {
    await withFixture(async (root) => {
      await setHandle(root, value);
      const result = await validateContent(root);
      assert(result.errors.some((error) => error.startsWith(`${toolPath}: announcementXHandle `)),
        `expected announcementXHandle error, got ${JSON.stringify(result.errors)}`);
      await assert.rejects(generateSyncSql(root), /Content validation failed/);
    });
  });
}

test("announcement handle is never inferred from or used as submitter attribution", async () => {
  await withFixture(async (root) => {
    await setHandle(root, "@Different_X");
    await rm(path.join(root, "tool-submitters.json"));
    const { tools } = await loadContent(root);
    assert.equal(tools.find((tool) => tool.slug === "paperclip").submittedBy, undefined);
    assert.equal(tools.find((tool) => tool.slug === "paperclip").announcementXHandle, "Different_X");
    assert.equal(tools.find((tool) => tool.slug === "vapi").announcementXHandle, undefined);
    await assert.rejects(generateSyncSql(root), (error) =>
      error.validationErrors.includes(`${toolPath}: submitter must be set in tool-submitters.json`));
  });
});

test("announcement handle migration adds nullable TEXT with no default or backfill", async () => {
  const db = await migratedDatabase({
    beforeAnnouncement(db) {
      db.exec(`
        INSERT INTO categories (slug, label, source_path) VALUES ('existing', 'Existing', 'existing.json');
        INSERT INTO tools (slug, name, description, body_md, category_slug, tags_json,
          website_url, pricing, source_path, submitted_by_github)
        VALUES ('existing', 'Existing', 'Description', 'Body', 'existing', '[]',
          'https://example.com', 'free', 'tools/existing.md', 'OriginalGitHub');
      `);
    },
  });
  try {
    const existing = db.prepare("SELECT announcement_x_handle, submitted_by_github FROM tools WHERE slug = 'existing'").get();
    assert.deepEqual({ ...existing }, { announcement_x_handle: null, submitted_by_github: "OriginalGitHub" });
    const column = db.prepare("PRAGMA table_info(tools)").all()
      .find((column) => column.name === "announcement_x_handle");
    assert(column, "announcement_x_handle must exist");
    assert.deepEqual({ type: column.type, notnull: column.notnull, defaultValue: column.dflt_value },
      { type: "TEXT", notnull: 0, defaultValue: null });
    db.exec(await generateSyncSql(fixtureRoot));
    assert(db.prepare("SELECT announcement_x_handle FROM tools").all()
      .every((row) => row.announcement_x_handle === null));
  } finally {
    db.close();
  }
});

async function assertSqlRoundTrip(db, root) {
  const read = () => db.prepare(`SELECT announcement_x_handle, submitted_by_github, content_modified_at
    FROM tools WHERE slug = 'paperclip'`).get();
  const old = "2000-01-01 00:00:00";
  const resetTime = () => db.prepare("UPDATE tools SET content_modified_at = ? WHERE slug = 'paperclip'").run(old);

  // Supplied on the initial insert, not only on subsequent updates.
  await setHandle(root, "  @Mixed_Case9 \t");
  db.exec(await generateSyncSql(root));
  assert.equal(read().announcement_x_handle, "Mixed_Case9");
  assert.equal(read().submitted_by_github, "bradvin");
  assert.equal(db.prepare("SELECT announcement_x_handle FROM tools WHERE slug = 'vapi'").get().announcement_x_handle, null);

  resetTime();
  await setHandle(root, "Mixed_Case9");
  db.exec(await generateSyncSql(root));
  assert.equal(read().content_modified_at, old, "equivalent canonical input is a no-op");

  resetTime();
  await setHandle(root, "mixed_Case9");
  db.exec(await generateSyncSql(root));
  assert.equal(read().announcement_x_handle, "mixed_Case9");
  assert.notEqual(read().content_modified_at, old, "case-only edit is tracked");

  for (const value of [" ", undefined]) {
    await setHandle(root, "@Another_X");
    db.exec(await generateSyncSql(root));
    resetTime();
    await setHandle(root, value);
    db.exec(await generateSyncSql(root));
    assert.equal(read().announcement_x_handle, null, "blank or removal clears to NULL");
    assert.equal(read().submitted_by_github, "bradvin");
    assert.notEqual(read().content_modified_at, old, "clearing is tracked");
    resetTime();
    db.exec(await generateSyncSql(root));
    assert.equal(read().content_modified_at, old, "absent handle remains a no-op");
  }
}

test("announcement handle SQL inserts, updates, clears and tracks changes without attribution conflation", async () => {
  const db = await migratedDatabase();
  try {
    await withFixture((root) => assertSqlRoundTrip(db, root));
  } finally {
    db.close();
  }
});

test("content SQL round-trips against the website migration when its checkout is available", async (t) => {
  const migrationDir = path.resolve("../agentfirst.directory-site-x-announcement/migrations");
  try {
    await readFile(path.join(migrationDir, "0007_add_announcement_x_handle.sql"), "utf8");
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
    t.skip("companion website migration checkout is not available");
    return;
  }
  const db = new DatabaseSync(":memory:");
  try {
    for (const file of (await readdir(migrationDir)).filter((name) => name.endsWith(".sql")).sort()) {
      db.exec(await readFile(path.join(migrationDir, file), "utf8"));
    }
    await withFixture((root) => assertSqlRoundTrip(db, root));
  } finally {
    db.close();
  }
});

for (const enrich of [enrichOgImages, enrichToolAssets]) {
  test(`${enrich.name} preserves authored announcement handle and does not infer it from social metadata`, async () => {
    await withFixture(async (root) => {
      await setHandle(root, "  @Mixed_Case9  ");
      const before = await readFile(path.join(root, toolPath), "utf8");
      const authoredLine = before.split("\n").find((line) => line.startsWith("announcementXHandle:"));
      const summary = await enrich({
        rootDir: root, write: true, refresh: true, refreshOg: true, refreshLogo: true,
        fetchImpl: async (url) => ({
          ok: true, url, headers: new Headers({ "content-type": "text/html" }),
          async text() {
            return '<meta name="twitter:site" content="@DoNotInfer"><meta property="og:image" content="https://example.com/card.png">';
          },
        }),
        logger: { log() {}, error() {} },
      });
      assert.equal(summary.failed, 0);
      const after = await readFile(path.join(root, toolPath), "utf8");
      assert(after.includes(`${authoredLine}\n`), "generator must retain authored bytes");
      assert.equal(parseToolFile(after, toolPath).announcementXHandle, "Mixed_Case9");
      const result = await validateContent(root);
      assert.deepEqual(result.errors, []);
      assert.equal(result.tools.find((tool) => tool.slug === "vapi").announcementXHandle, undefined);
    });
  });
}

test("submitter metadata generator preserves the announcement handle while stripping submittedBy", async () => {
  await withFixture(async (root) => {
    await setHandle(root, "@Mixed_Case9");
    const file = path.join(root, toolPath);
    const original = await readFile(file, "utf8");
    await writeFile(file, original.replace("---\n", '---\nsubmittedBy: "spoofed"\n'));
    await execFileAsync(process.execPath, [path.resolve("scripts/sync-tool-submitters.mjs"),
      "--root-dir", root, "--base-root-dir", fixtureRoot,
      "--submitted-by", "different-pr-author", "--slug", "paperclip", "--slug", "vapi"]);
    assert.equal(await readFile(file, "utf8"), original);
    const { tools } = await loadContent(root);
    assert.equal(tools.find((tool) => tool.slug === "paperclip").announcementXHandle, "Mixed_Case9");
    assert.equal(tools.find((tool) => tool.slug === "paperclip").submittedBy, "bradvin");
    assert.equal(tools.find((tool) => tool.slug === "vapi").announcementXHandle, undefined);
  });
});
