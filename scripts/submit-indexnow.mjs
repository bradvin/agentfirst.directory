import { readFile } from "node:fs/promises";
import { submitIndexNow } from "./lib/indexnow.mjs";

const inputPath = process.argv[2];

if (!inputPath) {
  console.error("Usage: node ./scripts/submit-indexnow.mjs <urls-json-file>");
  process.exit(1);
}

let urls;
try {
  urls = JSON.parse(await readFile(inputPath, "utf8"));
} catch (error) {
  console.error(`Could not read IndexNow URL list: ${error.message}`);
  process.exit(1);
}

try {
  const result = await submitIndexNow({
    urls,
    siteBaseUrl: process.env.SITE_BASE_URL || "https://agentfirst.directory",
  });
  console.log(
    `IndexNow accepted ${result.submittedUrlCount} URL${result.submittedUrlCount === 1 ? "" : "s"} with HTTP ${result.status}.`,
  );
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
