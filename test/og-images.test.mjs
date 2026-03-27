import test from "node:test";
import assert from "node:assert/strict";
import os from "node:os";
import path from "node:path";
import { cp, mkdtemp, readFile, rm } from "node:fs/promises";
import {
  buildGoogleFaviconUrl,
  enrichToolAssets,
  enrichOgImages,
  extractSocialImageUrl,
  normalizeCliArgs,
  upsertLogoUrl,
  upsertOgImageUrl,
} from "../scripts/lib/og-images.mjs";

test("extractSocialImageUrl resolves relative og:image URLs", () => {
  const html = `
    <html>
      <head>
        <meta property="og:image" content="/images/card.png" />
      </head>
    </html>
  `;

  assert.equal(
    extractSocialImageUrl(html, "https://example.com/products/tool"),
    "https://example.com/images/card.png",
  );
});

test("extractSocialImageUrl falls back to twitter:image", () => {
  const html = `
    <html>
      <head>
        <meta name="twitter:image" content="https://cdn.example.com/social.png" />
      </head>
    </html>
  `;

  assert.equal(
    extractSocialImageUrl(html, "https://example.com"),
    "https://cdn.example.com/social.png",
  );
});

test("upsertOgImageUrl inserts ogImageUrl after logoUrl", () => {
  const raw = `---
slug: "agentphone"
websiteUrl: "https://agentphone.to/"
logoUrl: "https://example.com/logo.png"
sortOrder: 20
---

Body text.
`;

  const updated = upsertOgImageUrl(raw, "https://example.com/social.png");

  assert.match(
    updated,
    /logoUrl: "https:\/\/example\.com\/logo\.png"\nogImageUrl: "https:\/\/example\.com\/social\.png"\nsortOrder:/,
  );
});

test("upsertOgImageUrl replaces an existing ogImageUrl", () => {
  const raw = `---
slug: "agentphone"
ogImageUrl: "https://old.example.com/social.png"
---

Body text.
`;

  const updated = upsertOgImageUrl(raw, "https://new.example.com/social.png");

  assert.match(updated, /ogImageUrl: "https:\/\/new\.example\.com\/social\.png"/);
  assert.doesNotMatch(updated, /old\.example\.com/);
});

test("buildGoogleFaviconUrl uses the website URL as the domain_url source", () => {
  assert.equal(
    buildGoogleFaviconUrl("https://agentphone.to/"),
    "https://www.google.com/s2/favicons?sz=64&domain_url=https%3A%2F%2Fagentphone.to%2F",
  );
});

test("upsertLogoUrl inserts logoUrl after githubUrl or websiteUrl", () => {
  const raw = `---
slug: "agentphone"
websiteUrl: "https://agentphone.to/"
githubUrl: "https://github.com/example/agentphone"
sortOrder: 20
---

Body text.
`;

  const updated = upsertLogoUrl(
    raw,
    "https://www.google.com/s2/favicons?sz=64&domain_url=https%3A%2F%2Fagentphone.to%2F",
  );

  assert.match(
    updated,
    /githubUrl: "https:\/\/github\.com\/example\/agentphone"\nlogoUrl: "https:\/\/www\.google\.com\/s2\/favicons\?sz=64&domain_url=https%3A%2F%2Fagentphone\.to%2F"\nsortOrder:/,
  );
});

test("normalizeCliArgs parses write, refresh, and slug options", () => {
  const options = normalizeCliArgs([
    "--write",
    "--refresh",
    "--slug",
    "agentphone",
    "--slug",
    "paperclip",
    "--root-dir",
    "fixtures",
  ]);

  assert.deepEqual(options, {
    write: true,
    refresh: true,
    slugs: ["agentphone", "paperclip"],
    rootDir: path.resolve("fixtures"),
  });
});

test("enrichOgImages updates missing ogImageUrl values when write is enabled", async () => {
  const fixtureRoot = path.resolve("test/fixtures/valid");
  const tempRoot = await mkdtemp(path.join(os.tmpdir(), "agentfirst-og-images-"));
  const logs = [];
  const logger = {
    log(message) {
      logs.push(message);
    },
    error(message) {
      logs.push(message);
    },
  };

  await cp(fixtureRoot, tempRoot, { recursive: true });

  try {
    const summary = await enrichOgImages({
      rootDir: tempRoot,
      write: true,
      fetchImpl: async (url) => ({
        ok: true,
        url,
        headers: new Headers({ "content-type": "text/html; charset=utf-8" }),
        async text() {
          return `
            <html>
              <head>
                <meta property="og:image" content="https://cdn.example.com/preview.png" />
              </head>
            </html>
          `;
        },
      }),
      logger,
    });

    const updatedTool = await readFile(path.join(tempRoot, "tools/vapi.md"), "utf8");
    assert.equal(summary.updated, 2);
    assert.match(updatedTool, /ogImageUrl: "https:\/\/cdn\.example\.com\/preview\.png"/);
    assert(logs.some((message) => message.startsWith("update vapi:")));
  } finally {
    await rm(tempRoot, { recursive: true, force: true });
  }
});

test("enrichToolAssets fills missing logoUrl and ogImageUrl", async () => {
  const fixtureRoot = path.resolve("test/fixtures/valid");
  const tempRoot = await mkdtemp(path.join(os.tmpdir(), "agentfirst-tool-assets-"));

  await cp(fixtureRoot, tempRoot, { recursive: true });

  try {
    const summary = await enrichToolAssets({
      rootDir: tempRoot,
      write: true,
      fetchImpl: async (url) => ({
        ok: true,
        url,
        headers: new Headers({ "content-type": "text/html; charset=utf-8" }),
        async text() {
          return `
            <html>
              <head>
                <meta property="og:image" content="https://cdn.example.com/social.png" />
              </head>
            </html>
          `;
        },
      }),
      logger: {
        log() {},
        error() {},
      },
    });

    const updatedTool = await readFile(path.join(tempRoot, "tools/vapi.md"), "utf8");

    assert.equal(summary.logoUpdated, 1);
    assert.equal(summary.ogUpdated, 2);
    assert.match(
      updatedTool,
      new RegExp(
        `logoUrl: "${buildGoogleFaviconUrl("https://vapi.ai").replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`,
      ),
    );
    assert.match(updatedTool, /ogImageUrl: "https:\/\/cdn\.example\.com\/social\.png"/);
  } finally {
    await rm(tempRoot, { recursive: true, force: true });
  }
});
