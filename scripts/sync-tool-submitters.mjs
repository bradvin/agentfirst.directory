import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { removeFrontmatterField } from "./lib/og-images.mjs";
import { readToolSubmitters, writeToolSubmitters } from "./lib/tool-submitters.mjs";

function parseArgs(argv) {
  const options = {
    rootDir: process.cwd(),
    baseRootDir: null,
    submittedBy: "",
    slugs: [],
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];

    if (arg === "--root-dir") {
      const value = argv[index + 1];
      if (!value) {
        throw new Error("--root-dir requires a value");
      }
      options.rootDir = path.resolve(value);
      index += 1;
      continue;
    }

    if (arg === "--submitted-by") {
      const value = argv[index + 1];
      if (!value) {
        throw new Error("--submitted-by requires a value");
      }
      options.submittedBy = value;
      index += 1;
      continue;
    }

    if (arg === "--base-root-dir") {
      const value = argv[index + 1];
      if (!value) {
        throw new Error("--base-root-dir requires a value");
      }
      options.baseRootDir = path.resolve(value);
      index += 1;
      continue;
    }

    if (arg === "--slug") {
      const value = argv[index + 1];
      if (!value) {
        throw new Error("--slug requires a value");
      }
      options.slugs.push(value);
      index += 1;
      continue;
    }

    throw new Error(`Unknown argument: ${arg}`);
  }

  if (!options.submittedBy) {
    throw new Error("--submitted-by is required");
  }

  if (options.slugs.length === 0) {
    throw new Error("At least one --slug value is required");
  }

  options.slugs = Array.from(new Set(options.slugs)).sort();
  return options;
}

const options = parseArgs(process.argv.slice(2));
const toolSubmitters = await readToolSubmitters(options.rootDir);
const baseToolSubmitters = await readToolSubmitters(options.baseRootDir ?? options.rootDir);
let metadataChanged = 0;
let strippedFields = 0;
let removedMetadata = 0;

for (const slug of options.slugs) {
  const filePath = path.join(options.rootDir, "tools", `${slug}.md`);
  let rawContent;

  try {
    rawContent = await readFile(filePath, "utf8");
  } catch (error) {
    if (error.code !== "ENOENT") {
      throw error;
    }

    if (Object.hasOwn(toolSubmitters, slug)) {
      delete toolSubmitters[slug];
      metadataChanged += 1;
      removedMetadata += 1;
    }

    continue;
  }

  const nextContent = removeFrontmatterField(rawContent, "submittedBy");

  if (nextContent !== rawContent) {
    await writeFile(filePath, nextContent, "utf8");
    strippedFields += 1;
  }

  const submittedBy = Object.hasOwn(baseToolSubmitters, slug)
    ? baseToolSubmitters[slug]
    : options.submittedBy;

  if (toolSubmitters[slug] !== submittedBy) {
    toolSubmitters[slug] = submittedBy;
    metadataChanged += 1;
  }
}

await writeToolSubmitters(toolSubmitters, options.rootDir);

console.log(
  `synced ${options.slugs.length} tool submitter${options.slugs.length === 1 ? "" : "s"}; metadataChanged=${metadataChanged} removedMetadata=${removedMetadata} strippedFields=${strippedFields}`,
);
