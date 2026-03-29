import { validateContent } from "./lib/content.mjs";

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

const { categories, tools, errors } = await validateContent(rootDir, { requireSubmitters });

if (errors.length > 0) {
  console.error("Content validation failed:\n");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(
  `Content validation passed for ${categories.length} categories and ${tools.length} tools.`,
);
