import test from "node:test";
import assert from "node:assert/strict";
import os from "node:os";
import path from "node:path";
import { cp, mkdtemp, readFile, readdir, rm, writeFile } from "node:fs/promises";
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

test("all real categories have complete authored editorial profiles", async () => {
  const categoryDir = path.resolve("categories");
  const categoryFiles = (await readdir(categoryDir))
    .filter((fileName) => fileName.endsWith(".json"))
    .sort();
  const requiredStringFields = [
    "seoTitle",
    "descriptionMd",
    "definitionMd",
    "scopeMd",
    "inclusionMd",
    "exclusionMd",
    "selectionGuideMd",
  ];

  assert(categoryFiles.length > 0, "at least one real category must exist");

  for (const fileName of categoryFiles) {
    const category = JSON.parse(await readFile(path.join(categoryDir, fileName), "utf8"));

    for (const fieldName of requiredStringFields) {
      assert.equal(
        typeof category[fieldName],
        "string",
        `${fileName}: ${fieldName} must be a string`,
      );
      assert(category[fieldName].trim(), `${fileName}: ${fieldName} must not be empty`);
    }

    assert(Array.isArray(category.useCases), `${fileName}: useCases must be an array`);
    assert(
      category.useCases.length >= 2 && category.useCases.length <= 4,
      `${fileName}: useCases must contain 2–4 entries`,
    );
    assert(
      category.useCases.every((useCase) => typeof useCase === "string" && useCase.trim()),
      `${fileName}: useCases entries must be non-empty strings`,
    );

    assert(Array.isArray(category.sources), `${fileName}: sources must be an array`);
    assert(
      category.sources.length >= 1 && category.sources.length <= 3,
      `${fileName}: sources must contain 1–3 entries`,
    );
    for (const [sourceIndex, source] of category.sources.entries()) {
      const sourceLabel = `${fileName}: sources[${sourceIndex}]`;
      for (const fieldName of ["title", "url", "claim", "sourceType"]) {
        assert.equal(
          typeof source[fieldName],
          "string",
          `${sourceLabel}.${fieldName} must be a string`,
        );
        assert(source[fieldName].trim(), `${sourceLabel}.${fieldName} must not be empty`);
      }
      assert.doesNotThrow(() => new URL(source.url), `${sourceLabel}.url must be valid`);
      assert.match(source.url, /^https:\/\//, `${sourceLabel}.url must use HTTPS`);
      assert.match(
        source.accessedAt,
        /^\d{4}-\d{2}-\d{2}$/,
        `${sourceLabel}.accessedAt must be an ISO date`,
      );
    }
  }
});

test("all real tools have complete citation-ready editorial profiles", async () => {
  const result = await validateContent(path.resolve("."));
  const requiredStringFields = [
    "entityType",
    "developerName",
    "docsUrl",
    "verificationLevel",
    "classificationRationaleMd",
    "bestForMd",
    "limitationsMd",
  ];

  assert.deepEqual(result.errors, []);
  assert(result.tools.length > 0, "at least one real tool must exist");

  for (const tool of result.tools) {
    for (const fieldName of requiredStringFields) {
      assert.equal(typeof tool[fieldName], "string", `${tool.slug}: ${fieldName} must be a string`);
      assert(tool[fieldName].trim(), `${tool.slug}: ${fieldName} must not be empty`);
    }

    for (const fieldName of ["interfaces", "deploymentModes", "evidenceSources"]) {
      assert(Array.isArray(tool[fieldName]), `${tool.slug}: ${fieldName} must be an array`);
      assert(tool[fieldName].length > 0, `${tool.slug}: ${fieldName} must not be empty`);
    }

    for (const [sourceIndex, source] of tool.evidenceSources.entries()) {
      const sourceLabel = `${tool.slug}: evidenceSources[${sourceIndex}]`;
      for (const fieldName of ["title", "url", "claim", "accessedAt", "sourceType"]) {
        assert.equal(typeof source[fieldName], "string", `${sourceLabel}.${fieldName} must be a string`);
        assert(source[fieldName].trim(), `${sourceLabel}.${fieldName} must not be empty`);
      }
      assert.doesNotThrow(() => new URL(source.url), `${sourceLabel}.url must be valid`);
      assert.match(source.url, /^https:\/\//, `${sourceLabel}.url must use HTTPS`);
      assert.match(
        source.accessedAt,
        /^\d{4}-\d{2}-\d{2}$/,
        `${sourceLabel}.accessedAt must be an ISO date`,
      );
    }
  }
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

test("category editorial metadata is validated", async () => {
  const result = await withFixture(async (rootDir) => {
    const filePath = path.join(rootDir, "categories/orchestrators.json");
    const category = JSON.parse(await readFile(filePath, "utf8"));
    category.useCases = "not-an-array";
    category.sources = [
      {
        title: "",
        claim: "",
        url: "ftp://example.com/source",
        accessedAt: "2026-02-30",
      },
      {
        title: "Official documentation",
        claim: "A second fixture claim.",
        url: "https://example.com/docs",
      },
    ];
    category.reviewedAt = "last week";
    category.isIndexable = 1;
    category.contentModifiedAt = "2026-09-03";
    await writeFile(filePath, `${JSON.stringify(category, null, 2)}\n`, "utf8");
  });

  for (const expected of [
    "useCases must be a non-empty array",
    "sources[0].title is required",
    "sources[0].claim is required",
    "sources[0].url must use http or https",
    "sources[0].accessedAt must be an ISO 8601 date",
    "sources[1].accessedAt is required",
    "reviewedAt must be an ISO 8601 date",
    "reviewedBy and reviewedAt must be set together",
    "isIndexable must be a boolean",
    "contentModifiedAt is managed by the publish pipeline",
  ]) {
    assert(result.errors.some((error) => error.includes(expected)), `missing error containing: ${expected}`);
  }
});

test("complete category editorial fields are required", async () => {
  const requiredStringFields = [
    "seoTitle",
    "descriptionMd",
    "definitionMd",
    "scopeMd",
    "inclusionMd",
    "exclusionMd",
    "selectionGuideMd",
  ];
  const result = await withFixture(async (rootDir) => {
    const filePath = path.join(rootDir, "categories/orchestrators.json");
    const category = JSON.parse(await readFile(filePath, "utf8"));

    for (const fieldName of requiredStringFields) {
      delete category[fieldName];
    }
    category.useCases = [];
    await writeFile(filePath, `${JSON.stringify(category, null, 2)}\n`, "utf8");
  });

  for (const fieldName of requiredStringFields) {
    assert(
      result.errors.some((error) => error.includes(`${fieldName} is required`)),
      `missing required-field error for ${fieldName}`,
    );
  }
  assert(result.errors.some((error) => error.includes("useCases must be a non-empty array")));
});

test("tool entity, evidence, and editorial metadata is validated", async () => {
  const result = await withFixture(async (rootDir) => {
    const filePath = path.join(rootDir, "tools/paperclip.md");
    const original = await readFile(filePath, "utf8");
    await writeFile(
      filePath,
      original
        .replace("logoWidth: 64", "logoWidth: 0")
        .replace('entityType: "software-source-code"', 'entityType: "desktop-widget"')
        .replace('docsUrl: "https://docs.paperclip.ing"', 'docsUrl: "file:///tmp/docs"')
        .replace('interfaces:\n  - "web application"', 'interfaces: "web application"')
        .replace('evidenceSources:\n  - title: "Paperclip repository"', 'evidenceSources:\n  - title: ""')
        .replace('    url: "https://github.com/paperclipai/paperclip"', '    url: "not-a-url"')
        .replace('    claim: "The repository documents orchestration, governance, and budget controls for agent teams."', '    claim: ""')
        .replace('    sourceType: "official-repository"', '    sourceType: "vendor-blog"')
        .replace("isIndexable: true", 'verificationLevel: "self-attested"\nreviewedAt: "2026-02-30"\nisIndexable: "yes"\ncontentModifiedAt: "2026-09-03"'),
      "utf8",
    );
  });

  for (const expected of [
    "logoWidth must be a positive integer",
    "entityType must be one of",
    "docsUrl must use http or https",
    "interfaces must be an array",
    "evidenceSources[0].title is required",
    "evidenceSources[0].claim is required",
    "evidenceSources[0].url must be a valid URL",
    "evidenceSources[0].sourceType must be one of",
    "verificationLevel must be one of",
    "reviewedAt must be an ISO 8601 date",
    "isIndexable must be a boolean",
    "contentModifiedAt is managed by the publish pipeline",
  ]) {
    assert(result.errors.some((error) => error.includes(expected)), `missing error containing: ${expected}`);
  }
});

test("valid optional review provenance and noindex flags are accepted", async () => {
  const result = await withFixture(async (rootDir) => {
    const categoryPath = path.join(rootDir, "categories/orchestrators.json");
    const category = JSON.parse(await readFile(categoryPath, "utf8"));
    category.reviewedBy = "fixture-reviewer";
    category.reviewedAt = "2026-09-03";
    category.publishedAt = "2026-09-01T12:30:00Z";
    category.isIndexable = false;
    await writeFile(categoryPath, `${JSON.stringify(category, null, 2)}\n`, "utf8");

    const toolPath = path.join(rootDir, "tools/paperclip.md");
    const tool = await readFile(toolPath, "utf8");
    await writeFile(
      toolPath,
      tool.replace(
        "isIndexable: true",
        'verificationLevel: "documentation-reviewed"\nreviewedBy: "fixture-reviewer"\nreviewedAt: "2026-09-03"\npublishedAt: "2026-09-01T12:30:00Z"\nisIndexable: false',
      ),
      "utf8",
    );
  });

  assert.deepEqual(result.errors, []);
});

test("submitter metadata is optional during PR validation", async () => {
  const result = await withFixture(async (rootDir) => {
    await rm(path.join(rootDir, "tool-submitters.json"), { force: true });
  });

  assert.equal(result.errors.length, 0);
});

test("invalid submitter metadata does not fail validation", async () => {
  const tempRoot = await createFixtureCopy();

  try {
    await writeFile(
      path.join(tempRoot, "tool-submitters.json"),
      `${JSON.stringify({ paperclip: "bad-user-", vapi: "bradvin" }, null, 2)}\n`,
      "utf8",
    );

    const result = await validateContent(tempRoot);
    assert.equal(result.errors.length, 0);
  } finally {
    await rm(tempRoot, { recursive: true, force: true });
  }
});

test("source-available pricing is accepted", async () => {
  const result = await withFixture(async (rootDir) => {
    const filePath = path.join(rootDir, "tools/paperclip.md");
    const original = await readFile(filePath, "utf8");
    await writeFile(filePath, original.replace('"open-source"', '"source-available"'), "utf8");
  });

  assert.deepEqual(result.errors, []);
});

test("unknown pricing is accepted", async () => {
  const result = await withFixture(async (rootDir) => {
    const filePath = path.join(rootDir, "tools/paperclip.md");
    const original = await readFile(filePath, "utf8");
    await writeFile(filePath, original.replace('"open-source"', '"unknown"'), "utf8");
  });

  assert.deepEqual(result.errors, []);
});

test("invalid pricing is rejected", async () => {
  const result = await withFixture(async (rootDir) => {
    const filePath = path.join(rootDir, "tools/paperclip.md");
    const original = await readFile(filePath, "utf8");
    await writeFile(filePath, original.replace('"open-source"', '"enterprise"'), "utf8");
  });

  assert(result.errors.some((error) => error.includes("pricing must be one of")));
});

test("missing classification is rejected", async () => {
  const result = await withFixture(async (rootDir) => {
    const filePath = path.join(rootDir, "tools/paperclip.md");
    const original = await readFile(filePath, "utf8");
    await writeFile(
      filePath,
      original.replace('classification: "agent-native"\n', ""),
      "utf8",
    );
  });

  assert(result.errors.some((error) => error.includes("classification must be one of")));
});

test("invalid classification is rejected", async () => {
  const result = await withFixture(async (rootDir) => {
    const filePath = path.join(rootDir, "tools/paperclip.md");
    const original = await readFile(filePath, "utf8");
    await writeFile(
      filePath,
      original.replace('classification: "agent-native"', 'classification: "agent-compatible"'),
      "utf8",
    );
  });

  assert(result.errors.some((error) => error.includes("classification must be one of")));
});

for (const classification of [
  "agent-native",
  "agent-enabling",
  "agent-internet-protocol",
]) {
  test(`classification value ${classification} is accepted`, async () => {
    const result = await withFixture(async (rootDir) => {
      const filePath = path.join(rootDir, "tools/paperclip.md");
      const original = await readFile(filePath, "utf8");
      await writeFile(
        filePath,
        original.replace('classification: "agent-native"', `classification: "${classification}"`),
        "utf8",
      );
    });

    assert.equal(result.errors.length, 0);
  });
}

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
