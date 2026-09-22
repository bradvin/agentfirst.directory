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

test("editorial SEO migration adds constrained content and provenance columns", async () => {
  const db = new DatabaseSync(":memory:");
  db.exec(await readMigration("0001_initial.sql"));
  db.exec(await readMigration("0002_add_tool_submitter.sql"));
  db.exec(await readMigration("0003_add_tool_classification.sql"));
  db.exec(await readMigration("0004_add_editorial_seo_metadata.sql"));

  const categoryColumns = new Set(
    db.prepare("PRAGMA table_info(categories)").all().map((column) => column.name),
  );
  const toolColumns = new Set(
    db.prepare("PRAGMA table_info(tools)").all().map((column) => column.name),
  );

  for (const columnName of [
    "seo_title",
    "description_md",
    "definition_md",
    "sources_json",
    "reviewed_at",
    "published_at",
    "content_modified_at",
    "is_indexable",
  ]) {
    assert(categoryColumns.has(columnName), `missing category column ${columnName}`);
  }

  for (const columnName of [
    "entity_type",
    "docs_url",
    "interfaces_json",
    "evidence_json",
    "verification_level",
    "reviewed_at",
    "published_at",
    "content_modified_at",
    "is_indexable",
  ]) {
    assert(toolColumns.has(columnName), `missing tool column ${columnName}`);
  }

  assert.throws(
    () => db.exec("INSERT INTO categories (slug, label, source_path, is_indexable) VALUES ('bad', 'Bad', 'bad.json', 2)"),
    /CHECK constraint failed/,
  );
});

test("sync SQL upserts repo content and retires missing rows", async () => {
  const db = new DatabaseSync(":memory:");
  db.exec(await readMigration("0001_initial.sql"));
  db.exec(await readMigration("0002_add_tool_submitter.sql"));
  db.exec(await readMigration("0003_add_tool_classification.sql"));
  db.exec(await readMigration("0004_add_editorial_seo_metadata.sql"));

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

  const orchestratorEditorial = db
    .prepare(`
      SELECT seo_title, description_md, definition_md, scope_md, inclusion_md,
        exclusion_md, selection_guide_md, use_cases_json, sources_json,
        is_indexable, content_modified_at
      FROM categories
      WHERE slug = 'orchestrators'
    `)
    .get();

  const paperclipEditorial = db
    .prepare(`
      SELECT logo_width, logo_height, entity_type, docs_url, interfaces_json,
        deployment_modes_json, evidence_json, classification_rationale_md,
        inclusion_rationale_md, best_for_md, not_best_for_md, limitations_md,
        unknowns_md, is_indexable, content_modified_at
      FROM tools
      WHERE slug = 'paperclip'
    `)
    .get();

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

  assert.deepEqual(
    {
      ...orchestratorEditorial,
      use_cases_json: JSON.parse(orchestratorEditorial.use_cases_json),
      sources_json: JSON.parse(orchestratorEditorial.sources_json),
      content_modified_at: Boolean(orchestratorEditorial.content_modified_at),
    },
    {
      seo_title: "AI agent orchestration platforms",
      description_md: "Control planes and runtimes that coordinate agents, tasks, state, governance, and human review.",
      definition_md: "Orchestrators coordinate agent work across multiple runs, roles, workers, or workflows.",
      scope_md: "This category covers coordination rather than a single agent implementation.",
      inclusion_md: "Include products that assign, schedule, route, or supervise agent work.",
      exclusion_md: "Exclude generic workflow schedulers with no material agent coordination layer.",
      selection_guide_md: "Compare supported runtimes, state, failure handling, budgets, and approvals.",
      use_cases_json: [
        "Coordinate long-running agent work",
        "Apply budgets and approval controls",
      ],
      sources_json: [
        {
          title: "Paperclip repository",
          url: "https://github.com/paperclipai/paperclip",
          claim: "The repository documents an orchestration system for teams of AI agents.",
          accessedAt: "2026-09-03",
          sourceType: "official-repository",
        },
      ],
      is_indexable: 1,
      content_modified_at: true,
    },
  );

  assert.deepEqual(
    {
      ...paperclipEditorial,
      interfaces_json: JSON.parse(paperclipEditorial.interfaces_json),
      deployment_modes_json: JSON.parse(paperclipEditorial.deployment_modes_json),
      evidence_json: JSON.parse(paperclipEditorial.evidence_json),
      content_modified_at: Boolean(paperclipEditorial.content_modified_at),
    },
    {
      logo_width: 64,
      logo_height: 64,
      entity_type: "software-source-code",
      docs_url: "https://docs.paperclip.ing",
      interfaces_json: ["web application"],
      deployment_modes_json: ["self-hosted"],
      evidence_json: [
        {
          title: "Paperclip repository",
          url: "https://github.com/paperclipai/paperclip",
          claim: "The repository documents orchestration, governance, and budget controls for agent teams.",
          accessedAt: "2026-09-03",
          sourceType: "official-repository",
        },
      ],
      classification_rationale_md: "Agents are the workers coordinated by the product's core control plane.",
      inclusion_rationale_md: "The orchestration and governance capabilities materially support long-running agent work.",
      best_for_md: "Teams that need a shared control plane for agent work.",
      not_best_for_md: "A single short-lived agent call that needs no coordination.",
      limitations_md: "Deployment and integration requirements should be checked in the current documentation.",
      unknowns_md: "No independent benchmark is asserted by this fixture.",
      is_indexable: 1,
      content_modified_at: true,
    },
  );
});

test("no-op sync preserves content modification timestamps while visible edits advance them", async () => {
  const db = new DatabaseSync(":memory:");
  for (const migration of [
    "0001_initial.sql",
    "0002_add_tool_submitter.sql",
    "0003_add_tool_classification.sql",
    "0004_add_editorial_seo_metadata.sql",
  ]) {
    db.exec(await readMigration(migration));
  }

  db.exec(await generateSyncSql(fixtureRoot));
  const oldTimestamp = "2000-01-01 00:00:00";
  db.prepare("UPDATE tools SET content_modified_at = ?, synced_at = ? WHERE slug = 'paperclip'")
    .run(oldTimestamp, oldTimestamp);
  db.prepare("UPDATE categories SET content_modified_at = ?, synced_at = ? WHERE slug = 'orchestrators'")
    .run(oldTimestamp, oldTimestamp);

  db.exec(await generateSyncSql(fixtureRoot));

  const unchangedTool = db
    .prepare("SELECT content_modified_at, synced_at FROM tools WHERE slug = 'paperclip'")
    .get();
  const unchangedCategory = db
    .prepare("SELECT content_modified_at, synced_at FROM categories WHERE slug = 'orchestrators'")
    .get();
  assert.equal(unchangedTool.content_modified_at, oldTimestamp);
  assert.equal(unchangedCategory.content_modified_at, oldTimestamp);
  assert.notEqual(unchangedTool.synced_at, oldTimestamp);
  assert.notEqual(unchangedCategory.synced_at, oldTimestamp);

  const tempRoot = await mkdtemp(path.join(os.tmpdir(), "agentfirst-sync-change-"));
  try {
    await cp(fixtureRoot, tempRoot, { recursive: true });

    const toolPath = path.join(tempRoot, "tools/paperclip.md");
    const toolSource = await readFile(toolPath, "utf8");
    await writeFile(toolPath, toolSource.replace("Paperclip coordinates", "Paperclip visibly coordinates"), "utf8");

    const categoryPath = path.join(tempRoot, "categories/orchestrators.json");
    const category = JSON.parse(await readFile(categoryPath, "utf8"));
    category.descriptionMd = `${category.descriptionMd} Updated.`;
    await writeFile(categoryPath, `${JSON.stringify(category, null, 2)}\n`, "utf8");

    db.exec(await generateSyncSql(tempRoot));
  } finally {
    await rm(tempRoot, { recursive: true, force: true });
  }

  const changedTool = db
    .prepare("SELECT content_modified_at FROM tools WHERE slug = 'paperclip'")
    .get();
  const changedCategory = db
    .prepare("SELECT content_modified_at FROM categories WHERE slug = 'orchestrators'")
    .get();
  assert.notEqual(changedTool.content_modified_at, oldTimestamp);
  assert.notEqual(changedCategory.content_modified_at, oldTimestamp);
});

test("sync SQL publishes optional provenance without synthesizing review dates", async () => {
  const db = new DatabaseSync(":memory:");
  for (const migration of [
    "0001_initial.sql",
    "0002_add_tool_submitter.sql",
    "0003_add_tool_classification.sql",
    "0004_add_editorial_seo_metadata.sql",
  ]) {
    db.exec(await readMigration(migration));
  }

  db.exec(await generateSyncSql(fixtureRoot));
  const baseTool = db
    .prepare("SELECT reviewed_by, reviewed_at, published_at, verification_level FROM tools WHERE slug = 'paperclip'")
    .get();
  assert.deepEqual({ ...baseTool }, {
    reviewed_by: null,
    reviewed_at: null,
    published_at: null,
    verification_level: null,
  });

  const tempRoot = await mkdtemp(path.join(os.tmpdir(), "agentfirst-sync-provenance-"));
  try {
    await cp(fixtureRoot, tempRoot, { recursive: true });

    const categoryPath = path.join(tempRoot, "categories/orchestrators.json");
    const category = JSON.parse(await readFile(categoryPath, "utf8"));
    category.scopeMd = "Synthetic scope used only by this database sync test.";
    category.reviewedBy = "fixture-reviewer";
    category.reviewedAt = "2026-09-03";
    category.publishedAt = "2026-09-01";
    category.isIndexable = false;
    await writeFile(categoryPath, `${JSON.stringify(category, null, 2)}\n`, "utf8");

    const toolPath = path.join(tempRoot, "tools/paperclip.md");
    const tool = await readFile(toolPath, "utf8");
    await writeFile(
      toolPath,
      tool
        .replace(
          "logoHeight: 64",
          'logoHeight: 64\nogImageUrl: "https://paperclip.ing/social.png"\nogImageWidth: 1200\nogImageHeight: 630\ndeveloperName: "Paperclip"',
        )
        .replace(
          'docsUrl: "https://docs.paperclip.ing"',
          'docsUrl: "https://docs.paperclip.ing"\npricingUrl: "https://paperclip.ing"\nlicenseUrl: "https://github.com/paperclipai/paperclip/blob/master/LICENSE"',
        )
        .replace(
          "isIndexable: true",
          'verificationLevel: "documentation-reviewed"\nreviewedBy: "fixture-reviewer"\nreviewedAt: "2026-09-03"\npublishedAt: "2026-09-01"\nisIndexable: false',
        ),
      "utf8",
    );

    db.exec(await generateSyncSql(tempRoot));
  } finally {
    await rm(tempRoot, { recursive: true, force: true });
  }

  const categoryRow = db
    .prepare(`
      SELECT scope_md, reviewed_by, reviewed_at, published_at, is_indexable
      FROM categories WHERE slug = 'orchestrators'
    `)
    .get();
  const toolRow = db
    .prepare(`
      SELECT og_image_url, og_image_width, og_image_height, developer_name,
        pricing_url, license_url, verification_level, reviewed_by, reviewed_at,
        published_at, is_indexable
      FROM tools WHERE slug = 'paperclip'
    `)
    .get();

  assert.deepEqual({ ...categoryRow }, {
    scope_md: "Synthetic scope used only by this database sync test.",
    reviewed_by: "fixture-reviewer",
    reviewed_at: "2026-09-03",
    published_at: "2026-09-01",
    is_indexable: 0,
  });
  assert.deepEqual({ ...toolRow }, {
    og_image_url: "https://paperclip.ing/social.png",
    og_image_width: 1200,
    og_image_height: 630,
    developer_name: "Paperclip",
    pricing_url: "https://paperclip.ing",
    license_url: "https://github.com/paperclipai/paperclip/blob/master/LICENSE",
    verification_level: "documentation-reviewed",
    reviewed_by: "fixture-reviewer",
    reviewed_at: "2026-09-03",
    published_at: "2026-09-01",
    is_indexable: 0,
  });
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
