import test from "node:test";
import assert from "node:assert/strict";
import os from "node:os";
import path from "node:path";
import { cp, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { DatabaseSync } from "node:sqlite";
import { generateSyncSql } from "../scripts/lib/sync-sql.mjs";

const fixtureRoot = path.resolve("test/fixtures/valid");

async function readMigration(name) {
  return readFile(path.resolve("migrations", name), "utf8");
}

test("classification migration is nullable, has no default, and enforces the enum", async () => {
  const db = new DatabaseSync(":memory:");
  db.exec(await readMigration("0001_initial.sql"));
  db.exec(await readMigration("0002_add_tool_submitter.sql"));
  db.exec(await readMigration("0003_add_tool_classification.sql"));

  const column = db
    .prepare("PRAGMA table_info(tools)")
    .all()
    .find((candidate) => candidate.name === "classification");
  assert.deepEqual(
    { type: column.type, notnull: column.notnull, defaultValue: column.dflt_value },
    { type: "TEXT", notnull: 0, defaultValue: null },
  );

  db.exec(`
    INSERT INTO categories (slug, label, source_path)
    VALUES ('orchestrators', 'Orchestrators', 'categories/orchestrators.json');
  `);

  const insert = db.prepare(`
    INSERT INTO tools (
      slug, name, description, body_md, category_slug, tags_json,
      website_url, pricing, source_path, classification
    ) VALUES (?, 'Tool', 'Description', 'Body', 'orchestrators', '[]',
      'https://example.com', 'free', 'tools/tool.md', ?)
  `);

  for (const [slug, classification] of [
    ["native", "agent-native"],
    ["enabling", "agent-enabling"],
    ["protocol", "agent-internet-protocol"],
    ["staged", null],
  ]) {
    insert.run(slug, classification);
  }

  assert.throws(
    () => insert.run("invalid", "agent-compatible"),
    /CHECK constraint failed/,
  );
});

test("sync SQL upserts repo content and retires missing rows", async () => {
  const db = new DatabaseSync(":memory:");
  db.exec(await readMigration("0001_initial.sql"));
  db.exec(await readMigration("0002_add_tool_submitter.sql"));
  db.exec(await readMigration("0003_add_tool_classification.sql"));

  db.exec(`
    INSERT INTO categories (slug, label, sort_order, source_path, is_active, synced_at)
    VALUES
      ('orchestrators', 'Old Label', 1, 'categories/orchestrators.json', 0, '2024-01-01T00:00:00Z'),
      ('legacy-category', 'Legacy Category', 999, 'categories/legacy-category.json', 1, '2024-01-01T00:00:00Z');

    INSERT INTO tools (slug, name, description, body_md, category_slug, tags_json, website_url, github_url, pricing, logo_url, og_image_url, sort_order, source_path, is_published, synced_at, submitted_by_github, classification)
    VALUES
      ('paperclip', 'Old Paperclip', 'Old description', 'Old body', 'orchestrators', '["old"]', 'https://old.example.com', NULL, 'paid', NULL, NULL, 1, 'tools/paperclip.md', 0, '2024-01-01T00:00:00Z', 'olduser', 'agent-enabling'),
      ('legacy-tool', 'Legacy Tool', 'Legacy description', 'Legacy body', 'legacy-category', '["legacy"]', 'https://legacy.example.com', NULL, 'paid', NULL, NULL, 1, 'tools/legacy-tool.md', 1, '2024-01-01T00:00:00Z', 'legacyuser', NULL);
  `);

  db.exec(await generateSyncSql(fixtureRoot));

  const categories = db
    .prepare("SELECT slug, label, is_active FROM categories ORDER BY slug")
    .all()
    .map((row) => ({ ...row }));
  const tools = db
    .prepare("SELECT slug, name, category_slug, is_published, submitted_by_github, classification FROM tools ORDER BY slug")
    .all()
    .map((row) => ({ ...row }));

  assert.deepEqual(categories, [
    { slug: "legacy-category", label: "Legacy Category", is_active: 0 },
    { slug: "orchestrators", label: "Orchestrators", is_active: 1 },
    { slug: "voice-multimodal-interfaces", label: "Voice & Multimodal", is_active: 1 },
  ]);

  assert.deepEqual(tools, [
    {
      slug: "legacy-tool",
      name: "Legacy Tool",
      category_slug: "legacy-category",
      is_published: 0,
      submitted_by_github: "legacyuser",
      classification: null,
    },
    {
      slug: "paperclip",
      name: "Paperclip",
      category_slug: "orchestrators",
      is_published: 1,
      submitted_by_github: "bradvin",
      classification: "agent-native",
    },
    {
      slug: "vapi",
      name: "Vapi",
      category_slug: "voice-multimodal-interfaces",
      is_published: 1,
      submitted_by_github: "bradvin",
      classification: "agent-native",
    },
  ]);
});

test("sync SQL fails when a tool is missing submitter metadata", async () => {
  const tempRoot = await mkdtemp(path.join(os.tmpdir(), "agentfirst-sync-sql-"));

  try {
    await cp(fixtureRoot, tempRoot, { recursive: true });
    await writeFile(
      path.join(tempRoot, "tool-submitters.json"),
      `${JSON.stringify({ vapi: "bradvin" }, null, 2)}\n`,
      "utf8",
    );

    await assert.rejects(
      generateSyncSql(tempRoot),
      (error) =>
        Array.isArray(error.validationErrors)
        && error.validationErrors.includes(
          "tools/paperclip.md: submitter must be set in tool-submitters.json",
        ),
    );
  } finally {
    await rm(tempRoot, { recursive: true, force: true });
  }
});
