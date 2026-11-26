import assert from 'node:assert/strict';
import { test } from 'node:test';
import { mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';
import { checkPublication } from '../scripts/submission-gate.mjs';

test('real synthetic Git history: exact reviewed squash tree passes, later direct commit refuses', async () => {
  const root = await mkdtemp(join(tmpdir(), 'agentfirst-gate-test-'));
  const env = { ...process.env, GIT_AUTHOR_NAME: 'Synthetic', GIT_AUTHOR_EMAIL: 'synthetic@example.invalid', GIT_COMMITTER_NAME: 'Synthetic', GIT_COMMITTER_EMAIL: 'synthetic@example.invalid' };
  for (const key of ['GIT_DIR', 'GIT_COMMON_DIR', 'GIT_WORK_TREE', 'GIT_INDEX_FILE', 'GIT_OBJECT_DIRECTORY', 'GIT_ALTERNATE_OBJECT_DIRECTORIES', 'GIT_NAMESPACE', 'GIT_PREFIX']) delete env[key];
  const git = args => execFileSync('git', ['-C', root, ...args], { encoding: 'utf8', env, stdio: ['ignore', 'pipe', 'pipe'] });
  try {
    git(['init', '-b', 'main']);
    await writeFile(join(root, 'README.md'), 'Synthetic grandfathered baseline');
    git(['add', '.']); git(['commit', '-m', 'synthetic baseline']);
    const baseline = git(['rev-parse', 'HEAD']).trim();
    await mkdir(join(root, 'tools'));
    await writeFile(join(root, 'tools', 'synthetic.md'), 'Synthetic listing, never submitted');
    git(['add', '.']); git(['commit', '-m', 'synthetic reviewed squash']);
    const sha = git(['rev-parse', 'HEAD']).trim();
    const tree = git(['rev-parse', 'HEAD^{tree}']).trim();
    const repository = 'bradvin/agentfirst.directory';
    const pr = { number: 999, state: 'closed', user: { login: 'synthetic-contributor' }, head: { sha }, base: { ref: 'main', repo: { full_name: repository } }, changed_files: 1, merged_at: '2026-01-01T00:00:00Z', merge_commit_sha: sha };
    const packet = { repository, pr: 999, head: sha, policy: 'v0.3', fit: 'pass-fit', evidence: 'verified', accuracy: 'verified', technical: 'passed', decision: 'approve-publication', record: `https://github.com/${repository}/pull/999#issuecomment-1` };
    const api = async path => {
      if (path.endsWith('/git/ref/heads/main')) return { object: { sha: git(['rev-parse', 'HEAD']).trim() } };
      if (path.includes(`/commits/${sha}/pulls?`)) return [pr];
      if (path.includes('/commits/') && path.includes('/pulls?')) return [];
      if (path.endsWith('/pulls/999')) return pr;
      if (path.includes('/files?')) return [{ filename: 'tools/synthetic.md' }];
      if (path.includes('/reviews?')) return [{ id: 1, user: { login: 'bradvin', type: 'User' }, state: 'APPROVED', commit_id: sha, body: `<!-- agentfirst-policy-approval -->\n${JSON.stringify(packet)}` }];
      if (path.endsWith(`/git/commits/${sha}`)) return { tree: { sha: tree } };
      throw new Error(`Unexpected synthetic endpoint ${path}`);
    };
    const input = { api, repository, ref: 'refs/heads/main', sha, baseline, git };
    assert.deepEqual(await checkPublication(input), { approved: true, commits: 1 });
    await writeFile(join(root, 'tools', 'synthetic.md'), 'Unreviewed synthetic direct change');
    git(['add', '.']); git(['commit', '-m', 'synthetic unapproved direct commit']);
    await assert.rejects(checkPublication({ ...input, sha: git(['rev-parse', 'HEAD']).trim() }), /provenance/);
  } finally { await rm(root, { recursive: true, force: true }); }
});
