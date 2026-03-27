import {
  enrichToolAssets,
  buildGoogleFaviconUrl,
} from "./lib/og-images.mjs";

function parseArgs(argv) {
  const options = {
    write: false,
    refreshOg: false,
    refreshLogo: false,
    rootDir: process.cwd(),
    slugs: [],
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];

    if (arg === "--write") {
      options.write = true;
      continue;
    }

    if (arg === "--refresh-og") {
      options.refreshOg = true;
      continue;
    }

    if (arg === "--refresh-logo") {
      options.refreshLogo = true;
      continue;
    }

    if (arg === "--root-dir") {
      const value = argv[index + 1];
      if (!value) {
        throw new Error("--root-dir requires a value");
      }
      options.rootDir = value;
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

    if (arg === "--help" || arg === "-h") {
      options.help = true;
      continue;
    }

    throw new Error(`Unknown argument: ${arg}`);
  }

  return options;
}

function helpText() {
  return [
    "Usage: node ./scripts/enrich-tool-assets.mjs [options]",
    "",
    "Options:",
    "  --write           Persist discovered values into tool files",
    "  --refresh-og      Re-fetch tools that already have ogImageUrl",
    "  --refresh-logo    Recompute tools that already have logoUrl",
    "  --slug <slug>     Limit the run to one or more tool slugs",
    "  --root-dir <dir>  Run against a different content repo root",
    "  --help            Show this help text",
    "",
    `Missing logoUrl values default to ${buildGoogleFaviconUrl("https://example.com")}`,
  ].join("\n");
}

let options;

try {
  options = parseArgs(process.argv.slice(2));
} catch (error) {
  console.error(error.message);
  console.error("");
  console.error(helpText());
  process.exit(1);
}

if (options.help) {
  console.log(helpText());
  process.exit(0);
}

const summary = await enrichToolAssets(options);

if (summary.failed > 0) {
  process.exitCode = 1;
}
