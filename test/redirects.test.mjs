import test from "node:test";
import assert from "node:assert/strict";
import os from "node:os";
import path from "node:path";
import {
  cp,
  mkdtemp,
  mkdir,
  readFile,
  rm,
  writeFile,
} from "node:fs/promises";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { withoutGitRepositoryOverrides } from "../scripts/lib/git-environment.mjs";
import { DatabaseSync } from "node:sqlite";
import {
  loadRedirectManifest,
  parseRedirectManifest,
  validateRedirectManifest,
} from "../scripts/lib/redirects.mjs";
import {
  generateSyncSql,
  generateSyncSqlStatements,
} from "../scripts/lib/sync-sql.mjs";
import { computePurgeUrls } from "../scripts/lib/purge-urls.mjs";

const execFileAsync = promisify(execFile);
const fixtureRoot = path.resolve("test/fixtures/valid");
const validateScript = path.resolve("scripts/validate-content.mjs");
const siteOrigin = "https://agentfirst.directory";
const activeRecords = {
  tools: [{ slug: "local-ci" }, { slug: "paperclip" }],
  categories: [{ slug: "orchestrators" }],
};
const staticPurgeUrls = [
  `${siteOrigin}/`,
  `${siteOrigin}/api/tools.json`,
  `${siteOrigin}/data/agent-first-tools.csv`,
  `${siteOrigin}/feed.xml`,
  `${siteOrigin}/llms-full.txt`,
  `${siteOrigin}/llms.txt`,
  `${siteOrigin}/open-source-ai-agent-tools`,
  `${siteOrigin}/research/state-of-agent-first-infrastructure`,
  `${siteOrigin}/sitemap-categories.xml`,
  `${siteOrigin}/sitemap-index.xml`,
  `${siteOrigin}/sitemap-pages.xml`,
  `${siteOrigin}/sitemap-tools.xml`,
];

function manifest(redirects, extra = {}) {
  return {
    version: 1,
    redirects,
    ...extra,
  };
}

function redirect(sourcePath, destinationPath, statusCode = 301, extra = {}) {
  return {
    sourcePath,
    destinationPath,
    statusCode,
    ...extra,
  };
}

function errorText(result) {
  return result.errors.join("\n");
}

async function readMigration(name) {
  return readFile(path.resolve("migrations", name), "utf8");
}

async function applyMigrations(db) {
  for (const migration of [
    "0001_initial.sql",
    "0002_add_tool_submitter.sql",
    "0003_add_tool_classification.sql",
    "0004_add_editorial_seo_metadata.sql",
  ]) {
    db.exec(await readMigration(migration));
  }
}

test("valid manifest normalizes deterministic order and supports explicit static destinations", () => {
  const result = validateRedirectManifest(
    manifest([
      redirect("/retired", null, 410),
      redirect("/old-tool", "/tools/local-ci", 308, { note: "Renamed." }),
      redirect("/old-category", "/category/orchestrators"),
      redirect("/old-about", "/about"),
    ]),
    {
      ...activeRecords,
      allowedStaticDestinations: ["/about"],
    },
  );

  assert.deepEqual(result.errors, []);
  assert.equal(result.version, 1);
  assert.deepEqual(
    result.redirects.map((entry) => entry.sourcePath),
    ["/old-about", "/old-category", "/old-tool", "/retired"],
  );
  assert.deepEqual(result.redirects.at(-1), {
    sourcePath: "/retired",
    destinationPath: null,
    statusCode: 410,
    note: null,
  });
});

test("source and destination paths must be canonical same-site pathnames", () => {
  const invalidPaths = [
    "tools/old",
    "https://agentfirst.directory/tools/old",
    "//example.com/tools/old",
    "/tools/old?preview=1",
    "/tools/old#section",
    "/tools/old/../other",
    "/tools\\old",
  ];

  for (const [index, invalidPath] of invalidPaths.entries()) {
    const invalidSource = validateRedirectManifest(
      manifest([redirect(invalidPath, "/tools/local-ci")]),
      activeRecords,
    );
    assert.match(
      errorText(invalidSource),
      /sourcePath must be a canonical absolute same-site path/,
      `source case ${index}`,
    );

    const invalidDestination = validateRedirectManifest(
      manifest([redirect(`/legacy-${index}`, invalidPath)]),
      activeRecords,
    );
    assert.match(
      errorText(invalidDestination),
      /destinationPath must be a canonical absolute same-site path/,
      `destination case ${index}`,
    );
  }
});

test("status codes enforce non-self destinations and explicit null retirement targets", () => {
  const result = validateRedirectManifest(
    manifest([
      redirect("/missing-destination", null, 301),
      redirect("/self", "/self", 308),
      redirect("/gone-with-target", "/tools/local-ci", 410),
      redirect("/unsupported", "/tools/local-ci", 302),
      { sourcePath: "/omitted", statusCode: 410 },
    ]),
    activeRecords,
  );
  const errors = errorText(result);

  assert.match(errors, /redirects\[0\]\.destinationPath must be a canonical/);
  assert.match(errors, /redirects\[1\]\.destinationPath must differ from sourcePath/);
  assert.match(errors, /redirects\[2\]\.destinationPath must be null for statusCode 410/);
  assert.match(errors, /redirects\[3\]\.statusCode must be one of 301, 308, or 410/);
  assert.match(errors, /redirects\[4\]\.destinationPath is required/);
});

test("duplicate sources, redirect chains, and redirect cycles are rejected", () => {
  const duplicate = validateRedirectManifest(
    manifest([
      redirect("/duplicate", "/tools/local-ci"),
      redirect("/duplicate", "/tools/paperclip", 308),
    ]),
    activeRecords,
  );
  assert.match(errorText(duplicate), /sourcePath duplicates redirects\[0\]\.sourcePath/);

  const graph = validateRedirectManifest(
    manifest([
      redirect("/chain-a", "/chain-b"),
      redirect("/chain-b", "/tools/local-ci"),
      redirect("/cycle-a", "/cycle-b"),
      redirect("/cycle-b", "/cycle-a"),
    ]),
    { ...activeRecords, resolveDestinations: false },
  );

  assert.equal(
    graph.errors.filter((error) => error.includes("redirect chains and cycles are not allowed")).length,
    3,
  );
});

test("destinations resolve to current records and redirect sources cannot shadow them", () => {
  const result = validateRedirectManifest(
    manifest([
      redirect("/legacy-tool", "/tools/missing"),
      redirect("/legacy-category", "/category/missing"),
      redirect("/legacy-static", "/about"),
      redirect("/tools/local-ci", "/tools/paperclip"),
    ]),
    activeRecords,
  );
  const errors = errorText(result);

  assert.match(errors, /does not resolve to a current active tool/);
  assert.match(errors, /does not resolve to a current active category/);
  assert.match(errors, /not an active tool\/category or an explicitly allowed static destination/);
  assert.match(errors, /sourcePath conflicts with a current active tool or category/);
});

test("manifest version, shape, unknown fields, and JSON syntax are validated", () => {
  const malformed = parseRedirectManifest("{ nope", { sourceName: "redirects.json" });
  assert.match(errorText(malformed), /invalid JSON/);

  const wrongShape = validateRedirectManifest({
    version: 2,
    redirects: "not-an-array",
    extra: true,
  });
  assert.match(errorText(wrongShape), /unknown field "extra"/);
  assert.match(errorText(wrongShape), /version must be 1/);
  assert.match(errorText(wrongShape), /redirects must be an array/);

  const unknownEntryField = validateRedirectManifest(
    manifest([
      redirect("/legacy", "/tools/local-ci", 301, { typo: true }),
    ]),
    activeRecords,
  );
  assert.match(errorText(unknownEntryField), /unknown field "typo"/);
});

test("missing manifests fail both module and validate-content CLI validation", async () => {
  const tempRoot = await mkdtemp(path.join(os.tmpdir(), "agentfirst-redirect-missing-"));

  try {
    const loaded = await loadRedirectManifest(tempRoot);
    assert.deepEqual(loaded.errors, ["redirects.json: file is required"]);

    await cp(fixtureRoot, tempRoot, { recursive: true });
    await rm(path.join(tempRoot, "redirects.json"));

    await assert.rejects(
      execFileAsync(process.execPath, [validateScript, tempRoot]),
      (error) => {
        assert.match(error.stderr, /redirects\.json: file is required/);
        return true;
      },
    );
  } finally {
    await rm(tempRoot, { recursive: true, force: true });
  }
});

test("sync SQL deterministically upserts manifest rows and deactivates removed rows", async () => {
  const tempRoot = await mkdtemp(path.join(os.tmpdir(), "agentfirst-redirect-sync-"));
  const db = new DatabaseSync(":memory:");

  try {
    await cp(fixtureRoot, tempRoot, { recursive: true });
    await writeFile(
      path.join(tempRoot, "redirects.json"),
      `${JSON.stringify(manifest([
        redirect("/tools/old-paperclip", "/tools/paperclip", 301, { note: "Renamed." }),
        redirect("/tools/retired", null, 410),
      ]), null, 2)}\n`,
      "utf8",
    );
    await applyMigrations(db);
    db.exec(`
      INSERT INTO url_redirects (
        source_path, destination_path, status_code, is_active, note, updated_at
      ) VALUES
        ('/tools/legacy', '/tools/paperclip', 301, 1, NULL, '2000-01-01 00:00:00'),
        ('/tools/old-paperclip', '/tools/vapi', 308, 0, 'Old.', '2000-01-01 00:00:00');
    `);

    const statements = await generateSyncSqlStatements(tempRoot);
    const redirectStatements = statements.filter((statement) =>
      statement.startsWith("INSERT INTO url_redirects"));
    assert.equal(redirectStatements.length, 2);
    assert.match(redirectStatements[0], /'\/tools\/old-paperclip'/);
    assert.match(redirectStatements[1], /'\/tools\/retired'/);
    assert.match(statements.at(-1), /^UPDATE url_redirects/);

    db.exec(await generateSyncSql(tempRoot));

    const rows = db
      .prepare(`
        SELECT source_path, destination_path, status_code, is_active, note
        FROM url_redirects
        ORDER BY source_path
      `)
      .all()
      .map((row) => ({ ...row }));
    assert.deepEqual(rows, [
      {
        source_path: "/tools/legacy",
        destination_path: "/tools/paperclip",
        status_code: 301,
        is_active: 0,
        note: null,
      },
      {
        source_path: "/tools/old-paperclip",
        destination_path: "/tools/paperclip",
        status_code: 301,
        is_active: 1,
        note: "Renamed.",
      },
      {
        source_path: "/tools/retired",
        destination_path: null,
        status_code: 410,
        is_active: 1,
        note: null,
      },
    ]);

    const oldTimestamp = "2000-01-01 00:00:00";
    db.prepare("UPDATE url_redirects SET updated_at = ?").run(oldTimestamp);
    db.exec(await generateSyncSql(tempRoot));
    assert.deepEqual(
      db.prepare("SELECT source_path, updated_at FROM url_redirects ORDER BY source_path").all()
        .map((row) => ({ ...row })),
      [
        { source_path: "/tools/legacy", updated_at: oldTimestamp },
        { source_path: "/tools/old-paperclip", updated_at: oldTimestamp },
        { source_path: "/tools/retired", updated_at: oldTimestamp },
      ],
    );

    const manifestPath = path.join(tempRoot, "redirects.json");
    const changedManifest = JSON.parse(await readFile(manifestPath, "utf8"));
    changedManifest.redirects[0].note = "Updated note.";
    await writeFile(manifestPath, `${JSON.stringify(changedManifest, null, 2)}\n`, "utf8");
    db.exec(await generateSyncSql(tempRoot));
    assert.notEqual(
      db.prepare("SELECT updated_at FROM url_redirects WHERE source_path = '/tools/old-paperclip'").get().updated_at,
      oldTimestamp,
    );
  } finally {
    db.close();
    await rm(tempRoot, { recursive: true, force: true });
  }
});

async function git(repoDir, ...args) {
  const { stdout } = await execFileAsync("git", ["-C", repoDir, ...args], {
    env: withoutGitRepositoryOverrides(),
  });
  return stdout.trim();
}

test("redirect-only changes purge old and new source/destination URLs", async () => {
  const repoDir = await mkdtemp(path.join(os.tmpdir(), "agentfirst-redirect-purge-"));

  try {
    await git(repoDir, "init");
    await git(repoDir, "config", "user.name", "Codex");
    await git(repoDir, "config", "user.email", "codex@example.com");
    await writeFile(
      path.join(repoDir, "redirects.json"),
      `${JSON.stringify(manifest([
        redirect("/tools/legacy", "/tools/paperclip"),
      ]), null, 2)}\n`,
      "utf8",
    );
    await git(repoDir, "add", ".");
    await git(repoDir, "commit", "-m", "initial redirects");
    const baseCommit = await git(repoDir, "rev-parse", "HEAD");

    await writeFile(
      path.join(repoDir, "redirects.json"),
      `${JSON.stringify(manifest([
        redirect("/tools/legacy", "/tools/local-ci", 308),
        redirect("/tools/retired", null, 410),
      ]), null, 2)}\n`,
      "utf8",
    );
    await git(repoDir, "add", ".");
    await git(repoDir, "commit", "-m", "update redirects");
    const headCommit = await git(repoDir, "rev-parse", "HEAD");

    const urls = await computePurgeUrls({
      repoDir,
      baseCommit,
      headCommit,
      baseUrl: siteOrigin,
    });
    const redirectUrls = urls.filter((url) => !staticPurgeUrls.includes(url));

    assert.deepEqual(redirectUrls, [
      `${siteOrigin}/tools/legacy`,
      `${siteOrigin}/tools/local-ci`,
      `${siteOrigin}/tools/paperclip`,
      `${siteOrigin}/tools/retired`,
    ]);
  } finally {
    await rm(repoDir, { recursive: true, force: true });
  }
});

test("redirect changes trigger the publish workflow", async () => {
  const workflow = await readFile(path.resolve(".github/workflows/publish-d1.yml"), "utf8");
  assert.match(workflow, /- "redirects\.json"/);
});
