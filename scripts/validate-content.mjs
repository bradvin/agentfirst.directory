import { validateContent } from "./lib/content.mjs";

const rootDir = process.argv[2] ?? process.cwd();
const { categories, tools, errors } = await validateContent(rootDir);

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
