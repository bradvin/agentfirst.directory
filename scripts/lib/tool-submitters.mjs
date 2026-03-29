import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

export const TOOL_SUBMITTERS_FILE = "tool-submitters.json";

export function getToolSubmittersPath(rootDir = process.cwd()) {
  return path.join(rootDir, TOOL_SUBMITTERS_FILE);
}

export async function readToolSubmitters(rootDir = process.cwd()) {
  const filePath = getToolSubmittersPath(rootDir);

  try {
    const raw = await readFile(filePath, "utf8");
    const parsed = JSON.parse(raw);

    if (!parsed || Array.isArray(parsed) || typeof parsed !== "object") {
      throw new Error(`${TOOL_SUBMITTERS_FILE} must contain a JSON object`);
    }

    return parsed;
  } catch (error) {
    if (error.code === "ENOENT") {
      return {};
    }

    throw error;
  }
}

export async function writeToolSubmitters(toolSubmitters, rootDir = process.cwd()) {
  const filePath = getToolSubmittersPath(rootDir);
  const sortedToolSubmitters = Object.fromEntries(
    Object.entries(toolSubmitters).sort(([left], [right]) => left.localeCompare(right)),
  );

  await writeFile(filePath, `${JSON.stringify(sortedToolSubmitters, null, 2)}\n`, "utf8");
}
