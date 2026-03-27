import { readFile } from "node:fs/promises";

const [, , inputFile] = process.argv;

if (!inputFile) {
  console.error("Usage: node ./scripts/purge-cloudflare-cache.mjs <urls-json-file>");
  process.exit(1);
}

const zoneId = process.env.CLOUDFLARE_ZONE_ID;
const apiToken = process.env.CLOUDFLARE_API_TOKEN;

if (!zoneId || !apiToken) {
  console.error("CLOUDFLARE_ZONE_ID and CLOUDFLARE_API_TOKEN are required.");
  process.exit(1);
}

const urls = JSON.parse(await readFile(inputFile, "utf8"));

if (!Array.isArray(urls) || urls.some((url) => typeof url !== "string")) {
  console.error("Purge file must contain a JSON array of URL strings.");
  process.exit(1);
}

const response = await fetch(
  `https://api.cloudflare.com/client/v4/zones/${zoneId}/purge_cache`,
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ files: urls }),
  },
);

const body = await response.json().catch(() => null);

if (!response.ok || !body?.success) {
  console.error("Cloudflare cache purge failed.");
  if (body) {
    console.error(JSON.stringify(body, null, 2));
  } else {
    console.error(`HTTP ${response.status}`);
  }
  process.exit(1);
}

console.log(`Purged ${urls.length} Cloudflare cache URLs.`);
