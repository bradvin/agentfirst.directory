import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  createIndexNowPayload,
  filterIndexNowUrls,
  INDEXNOW_ENDPOINT,
  INDEXNOW_KEY,
  submitIndexNow,
} from "../scripts/lib/indexnow.mjs";

const SITE_ORIGIN = "https://agentfirst.directory";

test("IndexNow payload uses the public root key and de-duplicates same-host URLs", () => {
  const payload = createIndexNowPayload([
    `${SITE_ORIGIN}/tools/example`,
    `${SITE_ORIGIN}/tools/example`,
    `${SITE_ORIGIN}/category/orchestrators`,
  ]);

  assert.deepEqual(payload, {
    host: "agentfirst.directory",
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_ORIGIN}/${INDEXNOW_KEY}.txt`,
    urlList: [
      `${SITE_ORIGIN}/tools/example`,
      `${SITE_ORIGIN}/category/orchestrators`,
    ],
  });
});

test("IndexNow payload rejects invalid keys, empty lists, and cross-host URLs", () => {
  assert.throws(
    () => createIndexNowPayload([`${SITE_ORIGIN}/`], { key: "short" }),
    /key must be 8–128/,
  );
  assert.throws(() => createIndexNowPayload([]), /At least one IndexNow URL/);
  assert.throws(
    () => createIndexNowPayload(["https://example.com/tools/example"]),
    /must belong to https:\/\/agentfirst\.directory/,
  );
});

test("IndexNow filtering keeps canonical HTML URLs and excludes cached machine and media surfaces", () => {
  const urls = filterIndexNowUrls([
    `${SITE_ORIGIN}/`,
    `${SITE_ORIGIN}/tools/example`,
    `${SITE_ORIGIN}/category/orchestrators`,
    `${SITE_ORIGIN}/open-source-ai-agent-tools`,
    `${SITE_ORIGIN}/research/state-of-agent-first-infrastructure`,
    `${SITE_ORIGIN}/api/tools.json`,
    `${SITE_ORIGIN}/data/agent-first-tools.csv`,
    `${SITE_ORIGIN}/feed.xml`,
    `${SITE_ORIGIN}/llms.txt`,
    `${SITE_ORIGIN}/llms-full.txt`,
    `${SITE_ORIGIN}/media/tools/example/card`,
    `${SITE_ORIGIN}/media/tools/example/hero-small`,
    `${SITE_ORIGIN}/media/tools/example/hero`,
    `${SITE_ORIGIN}/sitemap-index.xml`,
  ]);

  assert.deepEqual(urls, [
    `${SITE_ORIGIN}/`,
    `${SITE_ORIGIN}/tools/example`,
    `${SITE_ORIGIN}/category/orchestrators`,
    `${SITE_ORIGIN}/open-source-ai-agent-tools`,
    `${SITE_ORIGIN}/research/state-of-agent-first-infrastructure`,
  ]);
});

test("IndexNow submission posts the JSON batch and accepts pending key verification", async () => {
  const requests = [];
  const result = await submitIndexNow({
    urls: [
      `${SITE_ORIGIN}/tools/example`,
      `${SITE_ORIGIN}/api/tools.json`,
      `${SITE_ORIGIN}/media/tools/example/card`,
      `${SITE_ORIGIN}/sitemap-tools.xml`,
    ],
    fetchImpl: async (url, options) => {
      requests.push({ url, options });
      return new Response(null, { status: 202 });
    },
  });

  assert.equal(result.status, 202);
  assert.equal(result.submittedUrlCount, 1);
  assert.equal(requests.length, 1);
  assert.equal(requests[0].url, INDEXNOW_ENDPOINT);
  assert.equal(requests[0].options.method, "POST");
  assert.equal(requests[0].options.headers["content-type"], "application/json; charset=utf-8");
  assert.deepEqual(JSON.parse(requests[0].options.body), {
    host: "agentfirst.directory",
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_ORIGIN}/${INDEXNOW_KEY}.txt`,
    urlList: [`${SITE_ORIGIN}/tools/example`],
  });
});

test("IndexNow submission surfaces non-success responses", async () => {
  await assert.rejects(
    submitIndexNow({
      urls: [`${SITE_ORIGIN}/tools/example`],
      fetchImpl: async () => new Response("invalid key", { status: 403 }),
    }),
    /HTTP 403: invalid key/,
  );
});

test("publish workflow purges first and keeps IndexNow non-blocking", async () => {
  const workflow = await readFile(".github/workflows/publish-d1.yml", "utf8");
  const purgeStep = workflow.indexOf("- name: Purge Cloudflare cache");
  const indexNowStep = workflow.indexOf("- name: Submit changed URLs to IndexNow");

  assert(purgeStep >= 0);
  assert(indexNowStep > purgeStep);
  assert.match(
    workflow.slice(indexNowStep, indexNowStep + 320),
    /continue-on-error: true/,
  );
});
