// Synthetic fixtures only: no submission PRs or production services are accessed.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { readFile, mkdtemp, writeFile, rm } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const load = () => import('../scripts/submission-gate.mjs');
const head = 'a'.repeat(40);
const repository = 'bradvin/agentfirst.directory';
const pr = { number: 999, head: { sha: head }, base: { ref: 'main', repo: { full_name: repository } }, user: { login: 'synthetic-contributor' }, changed_files: 1 };
const attestation = { repository, pr: 999, head, policy: 'v0.3', fit: 'pass-fit', evidence: 'verified', accuracy: 'verified', technical: 'passed', decision: 'approve-publication', record: 'https://github.com/bradvin/agentfirst.directory/pull/999#issuecomment-1' };
const review = (patch = {}, packet = attestation) => ({ id: 1, state: 'APPROVED', commit_id: head, user: { login: 'bradvin', type: 'User' }, body: `<!-- agentfirst-policy-approval -->\n${JSON.stringify(packet)}`, ...patch });

test('current exact-head trusted approval admits a listing; absent, stale, untrusted, self and incomplete approval refuse', async () => {
  const { evaluateApproval } = await load();
  const input = { repository, pr, files: [{ filename: 'tools/synthetic.md' }], reviews: [review()] };
  assert.equal(evaluateApproval(input).approved, true);
  for (const reviews of [[], [review({ commit_id: 'b'.repeat(40) })], [review({ user: { login: 'synthetic-contributor', type: 'User' } })], [review({ state: 'DISMISSED' })], [review({ state: 'CHANGES_REQUESTED' })], [review({}, { ...attestation, decision: 'hold' })], [review({}, { ...attestation, fit: 'unclear-fit' })], [review({}, { ...attestation, evidence: 'not reviewed' })], [review({}, { ...attestation, head: 'b'.repeat(40) })], [review({}, { ...attestation, policy: 'v0.2' })], [review({ body: 'Looks good' })]]) {
    assert.equal(evaluateApproval({ ...input, reviews }).approved, false, JSON.stringify(reviews));
  }
  assert.equal(evaluateApproval({ ...input, pr: { ...pr, user: { login: 'bradvin' } } }).approved, false);
  assert.equal(evaluateApproval({ ...input, reviews: [review(), review({ id: 2, state: 'CHANGES_REQUESTED' })] }).approved, false);
});

test('non-submission exemption skips semantic attestation, not native trusted review; incomplete path listing refuses', async () => {
  const { evaluateApproval } = await load();
  const input = { repository, pr, files: [{ filename: 'docs/policy.md' }], reviews: [review({ body: 'Reviewed code and policy' })] };
  assert.equal(evaluateApproval(input).approved, true);
  assert.equal(evaluateApproval({ ...input, reviews: [] }).approved, false);
  assert.equal(evaluateApproval({ ...input, files: [{ filename: 'scripts/submission-gate.mjs' }] }).approved, true, 'Control-plane-only change still needs trusted code review, not fabricated listing evidence');
  assert.equal(evaluateApproval({ ...input, files: [] }).approved, false);
  for (const filename of ['tools/new.md', 'categories/new.json', 'tool-submitters.json', 'redirects.json', 'scripts/import.mjs', 'migrations/001.sql']) {
    assert.equal(evaluateApproval({ ...input, files: [{ filename }] }).approved, false, filename);
  }
});

function publicationFixture() {
  const commit = 'c'.repeat(40), baseline = 'b'.repeat(40), tree = 'd'.repeat(40);
  const merged = { ...pr, state: 'closed', merged_at: '2026-01-01T00:00:00Z', merge_commit_sha: commit };
  const calls = [];
  const responses = {
    [`repos/${repository}/git/ref/heads/main`]: { object: { sha: commit } },
    [`repos/${repository}/commits/${commit}/pulls?per_page=100&page=1`]: [merged],
    [`repos/${repository}/pulls/999`]: merged,
    [`repos/${repository}/pulls/999/files?per_page=100&page=1`]: [{ filename: 'tools/synthetic.md' }],
    [`repos/${repository}/pulls/999/reviews?per_page=100&page=1`]: [review()],
    [`repos/${repository}/git/commits/${head}`]: { tree: { sha: tree } },
  };
  const api = async (path, body) => { calls.push({ path, body }); if (!(path in responses)) throw new Error(`Unexpected API ${path}`); return responses[path]; };
  const git = args => {
    if (args.join(' ') === 'rev-parse HEAD') return commit;
    if (args[0] === 'merge-base') return '';
    if (args[0] === 'rev-list' && args.includes('--first-parent')) return commit;
    if (args[0] === 'rev-list') return `${commit} ${baseline}`;
    if (args[0] === 'rev-parse') return tree;
    throw new Error('Unexpected git command');
  };
  return { input: { api, repository, ref: 'refs/heads/main', sha: commit, baseline, git }, responses, calls, commit, merged };
}

test('publication audits reviewed exact squash trees, rejects direct/stale/unapproved/foreign ref before publication', async () => {
  const { checkPublication } = await load();
  const good = publicationFixture();
  assert.deepEqual(await checkPublication(good.input), { approved: true, commits: 1 });
  for (const ref of ['refs/heads/feature', 'refs/tags/main', undefined]) await assert.rejects(checkPublication({ ...good.input, ref }), /protected main/);
  for (const mutate of [
    f => { f.responses[`repos/${repository}/git/ref/heads/main`].object.sha = head; },
    f => { f.responses[`repos/${repository}/commits/${f.commit}/pulls?per_page=100&page=1`] = []; },
    f => { f.responses[`repos/${repository}/pulls/999/reviews?per_page=100&page=1`] = []; },
    f => { f.responses[`repos/${repository}/git/commits/${head}`].tree.sha = head; },
    f => { f.input.git = args => args[0] === 'merge-base' ? (() => { throw new Error('No baseline ancestry'); })() : good.input.git(args); },
  ]) {
    const f = publicationFixture(); mutate(f);
    let published = false;
    await assert.rejects(async () => { await checkPublication(f.input); published = true; });
    assert.equal(published, false);
    assert.equal(f.calls.some(c => c.body), false, 'Publication guard is read-only');
  }
});

test('earlier unapproved commit cannot be laundered by later approved main commit', async () => {
  const { checkPublication } = await load();
  const f = publicationFixture(), early = 'e'.repeat(40), originalGit = f.input.git;
  f.input.git = args => args.includes('--first-parent') ? `${early}\n${f.commit}` : originalGit(args);
  f.responses[`repos/${repository}/commits/${early}/pulls?per_page=100&page=1`] = [];
  await assert.rejects(checkPublication(f.input), /provenance/);
});

test('PR status is written to the inspected current head; changed head and API failure never issue success', async () => {
  const { checkPR } = await load();
  const f = publicationFixture(); f.merged.state = 'open';
  f.responses[`repos/${repository}/statuses/${head}`] = {};
  await checkPR({ ...f.input, number: 999 });
  assert.equal(f.calls.at(-1).body.state, 'success');
  assert.equal(f.calls.at(-1).path, `repos/${repository}/statuses/${head}`);
  const stale = publicationFixture(); let reads = 0;
  stale.responses[`repos/${repository}/statuses/${head}`] = {};
  await assert.rejects(checkPR({ repository, number: 999, api: async (path, body) => {
    const value = await stale.input.api(path, body);
    if (path === `repos/${repository}/pulls/999`) return { ...value, state: 'open', head: { sha: ++reads === 1 ? head : 'f'.repeat(40) } };
    return value;
  } }), /Head changed/);
  assert.equal(stale.calls.some(c => c.body?.state === 'success'), false);
  assert.equal(stale.calls.find(c => c.body)?.body.state, 'pending');
  await assert.rejects(checkPR({ repository, number: 999, api: async () => { throw new Error('API unavailable'); } }), /API unavailable/);
  const unavailable = publicationFixture(); unavailable.merged.state = 'open';
  unavailable.responses[`repos/${repository}/statuses/${head}`] = {};
  await assert.rejects(checkPR({ repository, number: 999, api: async (path, body) => {
    if (path.includes('/reviews?')) throw new Error('Review API unavailable');
    return unavailable.input.api(path, body);
  } }), /Review API unavailable/);
  assert.equal(unavailable.calls.find(c => c.body)?.body.state, 'pending');
  assert.equal(unavailable.calls.some(c => c.body?.state === 'success'), false);
});

test('production wiring isolates credentials after approval and uses trusted base-only PR evaluator', async () => {
  const gate = await readFile(new URL('../.github/workflows/submission-policy.yml', import.meta.url), 'utf8');
  assert.match(gate, /pull_request_target:/);
  assert.match(gate, /issue_comment:/);
  assert.doesNotMatch(gate, /pull_request_review:|workflow_run:|npm ci|npm install|secrets\./);
  assert.match(gate, /ref: main/);
  assert.match(gate, /persist-credentials: false/);
  const config = JSON.parse(await readFile(new URL('../.github/submission-gate.json', import.meta.url), 'utf8'));
  const filename = config.repository.endsWith('-site') ? 'deploy.yml' : 'publish-d1.yml';
  const production = await readFile(new URL(`../.github/workflows/${filename}`, import.meta.url), 'utf8');
  assert.match(production, /node scripts\/submission-gate.mjs publish/);
  assert.match(production, /environment: production/);
  assert.match(production, /needs: \[.*publication-approval.*\]/);
  const guard = production.slice(production.indexOf('  publication-approval:'), production.indexOf(config.repository.endsWith('-site') ? '  deploy:' : '  publish:'));
  assert.doesNotMatch(guard, /secrets\./);
  assert.match(guard, /fetch-depth: 0/);
  assert.match(guard, /ref: \$\{\{ github.sha \}\}/);
});

test('CLI rejects insecure events, foreign repositories and arbitrary-ref dispatch without network or production calls', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'agentfirst-event-test-'));
  const eventPath = join(directory, 'event.json');
  const config = JSON.parse(await readFile(new URL('../.github/submission-gate.json', import.meta.url), 'utf8'));
  const script = new URL('../scripts/submission-gate.mjs', import.meta.url);
  try {
    await writeFile(eventPath, JSON.stringify({ pull_request: { number: 999 }, issue: { number: 999, pull_request: {} } }));
    const env = { ...process.env, GH_TOKEN: 'synthetic-not-a-real-token', GITHUB_EVENT_PATH: eventPath, GITHUB_REPOSITORY: config.repository, GITHUB_EVENT_NAME: 'pull_request', GITHUB_REF: 'refs/heads/synthetic-untrusted', GITHUB_SHA: head };
    for (const [mode, overrides, error] of [
      ['pr', {}, /Unsupported review event/],
      ['pr', { GITHUB_REPOSITORY: 'synthetic-attacker/repository' }, /Wrong repository/],
      ['pr', { GITHUB_EVENT_NAME: 'workflow_run' }, /Unsupported review event/],
      ['publish', { GITHUB_EVENT_NAME: 'workflow_dispatch' }, /protected main/],
      ['publish', { GITHUB_EVENT_NAME: 'pull_request_target' }, /Unsupported publication event/],
    ]) {
      assert.throws(() => execFileSync(process.execPath, [script.pathname, mode], { env: { ...env, ...overrides }, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }), failure => {
        assert.equal(failure.status, 1); assert.match(failure.stderr, error); return true;
      });
    }
  } finally { await rm(directory, { recursive: true, force: true }); }
});
