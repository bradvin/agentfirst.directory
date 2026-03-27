import { writeFile } from "node:fs/promises";
import { computePurgeUrls } from "./lib/purge-urls.mjs";

const before = process.env.GITHUB_EVENT_BEFORE || process.env.GITHUB_BEFORE;
const head = process.env.GITHUB_SHA || process.env.HEAD_SHA;
const baseUrl = process.env.SITE_BASE_URL || "https://agentfirst.directory";
const outputPath = process.argv[2];

if (!head) {
  console.error("GITHUB_SHA or HEAD_SHA is required.");
  process.exit(1);
}

const urls = await computePurgeUrls({
  baseCommit: before,
  headCommit: head,
  baseUrl,
});

const payload = `${JSON.stringify(urls, null, 2)}\n`;

if (outputPath) {
  await writeFile(outputPath, payload, "utf8");
} else {
  process.stdout.write(payload);
}
