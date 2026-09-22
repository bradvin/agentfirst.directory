import { validateContent } from "./lib/content.mjs";
import { loadRedirectManifest } from "./lib/redirects.mjs";
import { getMissingToolSubmitterErrors } from "./lib/tool-submitters.mjs";

const args = process.argv.slice(2);
let rootDir = process.cwd();
let requireSubmitters = false;

for (const arg of args) {
  if (arg === "--require-submitters") {
    requireSubmitters = true;
    continue;
  }

  rootDir = arg;
}

const { categories, tools, errors } = await validateContent(rootDir);
const { redirects, errors: redirectErrors } = await loadRedirectManifest(rootDir, {
  categories,
  tools,
});
const validationErrors = requireSubmitters
  ? [...errors, ...redirectErrors, ...getMissingToolSubmitterErrors(tools)]
  : [...errors, ...redirectErrors];

if (validationErrors.length > 0) {
  console.error("Content validation failed:\n");
  for (const error of validationErrors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(
  `Content validation passed for ${categories.length} categories, ${tools.length} tools, `
    + `and ${redirects.length} redirects/retirements.`,
);
