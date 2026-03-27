import { validateContent } from "./lib/content.mjs";

const { categories, tools, errors } = await validateContent();

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
