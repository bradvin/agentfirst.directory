const REPOSITORY_SCOPING_VARIABLES = Object.freeze([
  "GIT_ALTERNATE_OBJECT_DIRECTORIES",
  "GIT_COMMON_DIR",
  "GIT_DIR",
  "GIT_INDEX_FILE",
  "GIT_NAMESPACE",
  "GIT_OBJECT_DIRECTORY",
  "GIT_PREFIX",
  "GIT_WORK_TREE",
]);

/**
 * Keep credentials and ordinary Git configuration while ensuring an explicit
 * cwd selects the repository. CI runners may export repository-scoping Git
 * variables for their checkout; those must not leak into commands targeting a
 * separate fixture or worktree.
 */
export function withoutGitRepositoryOverrides(environment = process.env) {
  const isolatedEnvironment = { ...environment };

  for (const variable of REPOSITORY_SCOPING_VARIABLES) {
    delete isolatedEnvironment[variable];
  }

  return isolatedEnvironment;
}
