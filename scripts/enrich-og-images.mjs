import {
  enrichOgImages,
  formatHelpText,
  normalizeCliArgs,
} from "./lib/og-images.mjs";

let options;

try {
  options = normalizeCliArgs(process.argv.slice(2));
} catch (error) {
  console.error(error.message);
  console.error("");
  console.error(formatHelpText());
  process.exit(1);
}

if (options.help) {
  console.log(formatHelpText());
  process.exit(0);
}

const summary = await enrichOgImages(options);

if (summary.failed > 0) {
  process.exitCode = 1;
}
