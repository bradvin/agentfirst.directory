import { readFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const marker = '<!-- agentfirst-policy-approval -->';
const shaPattern = /^[0-9a-f]{40}$/;
const trusted = ['bradvin'];
const contentRepository = 'bradvin/agentfirst.directory';
const repositories = [contentRepository, 'bradvin/agentfirst.directory-site'];
const deny = (reason) => ({ approved: false, reason });

// No classifier: this verifies an identifiable maintainer's explicit attestation.
export function evaluateApproval({ repository, pr, files, reviews }) {
  if (!repositories.includes(repository) || pr.base?.repo?.full_name !== repository || pr.base.ref !== 'main' || !shaPattern.test(pr.head?.sha) || !Number.isSafeInteger(pr.number)) return deny('Invalid repository, base or head');
  if (!Array.isArray(files) || files.length !== pr.changed_files || files.some(f => typeof f.filename !== 'string')) return deny('Incomplete changed-file coverage');
  const listingImpact = repository === contentRepository && files.some(f => [f.filename, f.previous_filename].some(path => path && path !== 'scripts/submission-gate.mjs' && /^(tools\/|categories\/|scripts\/|migrations\/|redirects\.json$|tool-submitters\.json$)/.test(path)));
  const latest = reviews.filter(r => trusted.includes(r.user?.login) && r.user?.type === 'User' && r.state !== 'PENDING').sort((a, b) => b.id - a.id)[0];
  if (!latest || latest.user.login === pr.user?.login || latest.state !== 'APPROVED' || latest.commit_id !== pr.head.sha) return deny('Missing current-head independent trusted APPROVED review');
  if (!listingImpact) return { approved: true, reason: 'Non-listing change; trusted code review verified, semantic attestation not applicable' };
  let packet;
  try {
    if (!latest.body?.startsWith(`${marker}\n`)) return deny('Missing explicit policy attestation');
    packet = JSON.parse(latest.body.slice(marker.length).trim());
  } catch { return deny('Malformed policy attestation'); }
  if (packet.repository !== repository || packet.pr !== pr.number || packet.head !== pr.head.sha || packet.policy !== 'v0.3' || packet.fit !== 'pass-fit' || packet.evidence !== 'verified' || packet.accuracy !== 'verified' || packet.technical !== 'passed' || packet.decision !== 'approve-publication' || typeof packet.record !== 'string' || !packet.record.startsWith(`https://github.com/${repository}/pull/${pr.number}#`)) return deny('Held, failed, stale or incomplete policy attestation');
  return { approved: true, reason: 'Exact-head independent trusted v0.3 full policy/publication attestation verified' };
}

export function githubClient(token, transport = fetch) {
  if (!token) throw new Error('Missing GitHub token');
  return async (path, body) => {
    const response = await transport(`https://api.github.com/${path}`, {
      method: body ? 'POST' : 'GET',
      headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' },
      ...(body ? { body: JSON.stringify(body) } : {}), signal: AbortSignal.timeout(20000),
    });
    if (!response.ok) throw new Error(`GitHub request failed: ${response.status}`);
    return response.json();
  };
}

async function pages(api, path) {
  const result = [];
  for (let page = 1; page <= 100; page++) {
    const batch = await api(`${path}?per_page=100&page=${page}`);
    if (!Array.isArray(batch)) throw new Error('Invalid paginated API response');
    result.push(...batch);
    if (batch.length < 100) return result;
  }
  throw new Error('Pagination limit exceeded');
}

export async function inspectPR(api, repository, number, snapshot) {
  const root = `repos/${repository}/pulls/${number}`;
  const pr = snapshot ?? await api(root);
  const files = await pages(api, `${root}/files`);
  const reviews = await pages(api, `${root}/reviews`);
  return { pr, result: evaluateApproval({ repository, pr, files, reviews }) };
}

export async function checkPR({ api, repository, number }) {
  const pr = await api(`repos/${repository}/pulls/${number}`);
  if (pr.state !== 'open' || !shaPattern.test(pr.head?.sha)) throw new Error('PR is not open or has invalid head');
  const statusPath = `repos/${repository}/statuses/${pr.head.sha}`;
  // Clear an older success before paginated review/file reads. If GitHub cannot
  // accept this pending write, no new success is issued; native review still gates.
  await api(statusPath, { state: 'pending', context: 'submission-policy', description: 'Checking current-head trusted review' });
  const { result } = await inspectPR(api, repository, number, pr);
  const current = await api(`repos/${repository}/pulls/${number}`);
  if (current.head.sha !== pr.head.sha) throw new Error('Head changed during inspection');
  await api(statusPath, { state: result.approved ? 'success' : 'failure', context: 'submission-policy', description: result.reason.slice(0, 140) });
  if (!result.approved) throw new Error(result.reason);
  return result;
}

// Audit the whole first-parent range, so a later harmless PR cannot launder a
// direct commit or an unapproved earlier submission. Only squash merges qualify.
export async function checkPublication({ api, repository, ref, sha, baseline, git }) {
  if (!repositories.includes(repository) || ref !== 'refs/heads/main' || !shaPattern.test(sha) || !shaPattern.test(baseline)) throw new Error('Publication requires the exact protected main revision');
  const current = await api(`repos/${repository}/git/ref/heads/main`);
  if (current.object.sha !== sha || git(['rev-parse', 'HEAD']).trim() !== sha) throw new Error('Publication checkout is not current main');
  git(['merge-base', '--is-ancestor', baseline, sha]);
  const commits = git(['rev-list', '--first-parent', '--reverse', `${baseline}..${sha}`]).trim().split('\n').filter(Boolean);
  if (commits.length === 0 || commits.length > 1000) throw new Error('Missing or excessive post-baseline history');
  for (const commit of commits) {
    if (!shaPattern.test(commit) || git(['rev-list', '--parents', '-n', '1', commit]).trim().split(/\s+/).length !== 2) throw new Error('Only reviewed squash commits may publish');
    const associated = await pages(api, `repos/${repository}/commits/${commit}/pulls`);
    const matches = associated.filter(pr => pr.merged_at && pr.merge_commit_sha === commit && pr.base?.ref === 'main' && pr.base?.repo?.full_name === repository);
    if (matches.length !== 1) throw new Error('Direct or ambiguous main commit has no reviewed merge provenance');
    const { pr, result } = await inspectPR(api, repository, matches[0].number);
    if (!pr.merged_at || pr.merge_commit_sha !== commit || !result.approved) throw new Error(`Publication refused: ${result.reason}`);
    const head = await api(`repos/${repository}/git/commits/${pr.head.sha}`);
    if (head.tree.sha !== git(['rev-parse', `${commit}^{tree}`]).trim()) throw new Error('Approved head tree differs from published squash tree; update branch before review');
  }
  return { approved: true, commits: commits.length };
}

async function main() {
  const root = fileURLToPath(new URL('../', import.meta.url));
  const config = JSON.parse(await readFile(new URL('../.github/submission-gate.json', import.meta.url), 'utf8'));
  if (process.env.GITHUB_REPOSITORY !== config.repository) throw new Error('Wrong repository');
  const api = githubClient(process.env.GH_TOKEN);
  const mode = process.argv[2];
  let result;
  if (mode === 'pr') {
    const event = JSON.parse(await readFile(process.env.GITHUB_EVENT_PATH, 'utf8'));
    const number = process.env.GITHUB_EVENT_NAME === 'pull_request_target' ? event.pull_request?.number : event.issue?.pull_request && event.issue.number;
    if (!['pull_request_target', 'issue_comment'].includes(process.env.GITHUB_EVENT_NAME) || !Number.isSafeInteger(number)) throw new Error('Unsupported review event');
    result = await checkPR({ api, repository: config.repository, number });
  } else if (mode === 'publish') {
    if (!['push', 'workflow_dispatch'].includes(process.env.GITHUB_EVENT_NAME)) throw new Error('Unsupported publication event');
    const environment = Object.fromEntries(Object.entries(process.env).filter(([key]) => !/^GIT_(DIR|COMMON_DIR|WORK_TREE|INDEX_FILE|OBJECT_DIRECTORY|ALTERNATE_OBJECT_DIRECTORIES|NAMESPACE|PREFIX)$/.test(key)));
    const git = args => execFileSync('git', ['-C', root, ...args], { encoding: 'utf8', env: environment });
    result = await checkPublication({ api, repository: config.repository, ref: process.env.GITHUB_REF, sha: process.env.GITHUB_SHA, baseline: config.baseline, git });
  } else throw new Error('Expected pr or publish mode');
  console.log(JSON.stringify(result));
}
if (process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url) main().catch(error => { console.error(error.message); process.exitCode = 1; });
