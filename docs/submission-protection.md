# Proposed submission merge and publication protection

**Proposal only.** No live rules, environments, credentials or submission-review
runtime are installed by these files. The existing submission-review pause remains.
This supplements the v0.3 editorial policy; it is not a semantic classifier or a
review producer. Source PR145 and website PR47 must be considered together.

## Authority and boundaries

`bradvin/agentfirst.directory` owns listings (`tools/`), categories, redirects,
submitter identities, import/generation scripts and D1 publication. The website
repository renders that D1 data and deploys the Worker; it does not own submission
acceptance. Both repositories receive the same small verifier with different
repository/baseline config. Keep the verifier and synthetic tests identical.

Technical CI (`validate`) remains independently required. Native protected-main
rules require independent `@bradvin` code-owner approval for **every file**,
dismiss approval on pushes, and require approval after the last push. No bypass
actors are proposed. A Brad-authored or Brad-last-pushed PR is deliberately blocked
until Brad separately approves another trusted reviewer design; do not silently
add a bot, the submitter, or a second identity. Review never means deployment consent.

The supplemental `submission-policy` status validates the **latest** published
review by trusted human `bradvin`, its `APPROVED` state and exact PR head. On the
content repository, any tools/categories/redirects/submitters/scripts/migrations
change (including an old name on rename) also needs the packet below. The one
control-plane-only exception is `scripts/submission-gate.mjs`, which changes no
listing transformation and still requires native trusted code-owner approval.
Other changes, including website-only changes, skip only the semantic packet: native trusted
approval and all technical checks still apply. Missing file coverage refuses.

## Trusted policy review procedure (still paused)

After a separately authorized restart, the trusted reviewer must actually read the
product and source evidence, not rubber-stamp an intake label. Complete the full
canonical `docs/editorial-policy.md` process in order: v0.3 fit decision first;
stop on failed/unclear fit; then inspect **all** evidence (not a sample or intake
label); verify factual accuracy and relevant technical validation; finally make a
separate publication decision. Keep the full per-listing review record in the PR.
A `record` link identifies that record; the verifier does not fetch external evidence
or prove what a human read. The following is a **synthetic format example**, not
approval of any actual submission:

```text
<!-- agentfirst-policy-approval -->
{"repository":"bradvin/agentfirst.directory","pr":999,"head":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa","policy":"v0.3","fit":"pass-fit","evidence":"verified","accuracy":"verified","technical":"passed","decision":"approve-publication","record":"https://github.com/bradvin/agentfirst.directory/pull/999#issuecomment-1"}
```

Submit this exact marker plus JSON as the body of an independent **APPROVE** review
on the current head. Packet covers every changed listing; record must do the same.
No prose outside the JSON. No `unclear-fit`, hold, not-reviewed, failed, old-head,
old-policy, contributor/bot/self review or generic LGTM admits a listing. For a
non-listing PR a normal independent trusted APPROVE review suffices.

A trusted reviewer must revoke with **REQUEST_CHANGES** or dismiss approval, not
only an informal comment: native protection is the merge-time revocation boundary.
After any approval/change/dismissal, comment `/recheck-submission-policy` on the PR
(or edit an existing exact-command comment) to recompute the status. Rechecks may
be requested by anyone but do not confer approval. Open/reopen/head updates also
recompute. No review-event workflow executes contributor code, and no scheduler or
private runtime is added. Without a recheck, a new approval stays blocked; a
revocation is blocked by native review even if a supplemental status is stale.
The publication guard always reads current reviews again.

## Trust and fork safety

The status workflow uses `pull_request_target` / `issue_comment`, checks out only
protected `main`, has no production secrets, installs no project dependencies,
and never checks out, imports or executes PR code or artifacts. Filenames and
review bodies are data only; API requests are paginated and coverage is checked.
Head movement and API uncertainty issue no new success. Once the current head is
known, a pending status is written **before** paginated checks, so a later read
failure cannot leave that recheck green. If GitHub is unavailable before even that
lookup/write, an older status cannot be atomically withdrawn; native review and
production approval remain mandatory. `statuses: write` is limited to
this workflow's needs; other new jobs use read-only permissions.

A GitHub Actions status context is **not an isolated cryptographic authority**:
a same-repository workflow with status-write permission can imitate it. The
mandatory native CODEOWNERS review over all workflow/config/data files is therefore
part of the enforcement design, not optional. A contributor changing the check in
the same PR cannot unilaterally merge or obtain production credentials with the
proposed native protections active. This is not protection against a malicious
trusted owner/admin approving a bypass. If owner-independent status authenticity
is required, use a separately approved dedicated GitHub App/required-workflow
issuer; none is provisioned or claimed here.

## Publication guard

Publish D1 and Deploy Worker have a separate, credential-free preflight job. The
production job depends on it, is main-only, explicitly checks out immutable
`github.sha`, and uses the protected `production` environment. Arbitrary-ref manual
D1 dispatch is refused before the credentialed job. Technical tests remain in the
production pipeline and fail before remote writes.

The preflight requires checkout HEAD to equal the current remote main SHA and
walks **every first-parent commit after the recorded grandfathered baseline**.
Each must have exactly one merged-main PR association, be a squash commit, have a
current trusted exact-head approval (plus packet for listing-impact changes), and
have exactly the approved PR-head tree. Direct-main commits, rebase/merge commits,
branch not updated before squash, stale head, API errors, missing history and an
unapproved earlier commit all refuse. A later harmless PR cannot launder an earlier
unapproved listing. Only squash merges are supported. Nothing advances the
baseline automatically; changing it requires explicit owner review and is not a
way to skip unapproved submissions. Existing baseline content is grandfathered,
not re-reviewed or retrospectively certified. Deleted PR branches are supported
only while GitHub can still retrieve the reviewed commit; missing objects refuse.

GitHub review/branch API reads are not transactional. Native stale-dismissed,
last-push approval and strict checks are the merge-time safety boundary; rechecks
are not claimed atomic. Production environment approval is a separate owner gate.
A later main update does not mutate an already pinned deployment checkout.

## Proposed activation plan — separate explicit approval required

`.github/proposed-main-ruleset.json` is a review artifact, **not an installer**.
It describes a new additive main ruleset (active only if deliberately applied),
preserving existing strict `validate` and no-force rules. No settings API is called
by CI. Actions app integration ID 15368 must be verified in the target repository
before application; this does not distinguish individual Actions workflows.

Before any merge (which would otherwise trigger current production workflows):

1. Obtain explicit Brad approval for the exact settings, merge and eventual
   deployment actions separately. Suspend/hold current automatic production
   publication under approved operations, without restarting submission review.
2. Create protected `production` environments in **both** repositories: main-only
   deployment branch policy, required independent Brad approval, prevent self-review
   and disallow admin bypass. Move all Cloudflare/Stats production credentials from
   repository/organization-wide scope into these environments and remove broad
   copies. Merely adding `environment: production` does not isolate existing secrets.
   Verify Actions token defaults are read-only and no unreviewed alternate workflow,
   manual API path or credential can publish. These code files alone cannot prove
   that operational property. Do not merge while credentials remain exposed to
   arbitrary-ref dispatch or unreviewed code.
3. Stage native PR/CODEOWNERS rules without requiring a check that does not yet
   exist on trusted main. Install the verifier via the separately approved bootstrap
   squash merge only after independent exact-head review, branch update and
   credential isolation. Current baseline SHA remains fixed. Bootstrap is not an
   exemption from approval, tests or deployment consent. A non-listing bootstrap
   needs trusted code review, not fabricated listing-policy packets.
4. After trusted-base workflow availability is proven, apply the additive proposed
   ruleset with both required checks; configure repository squash-only merges
   (`allow_squash_merge=true`, `allow_merge_commit=false`, `allow_rebase_merge=false`).
   Do not replace/delete existing rules or weaken `validate`. Verify effective rules
   for main, exact check sources, code-owner recognition and no bypass actors.
5. Use authorized disposable synthetic PRs to verify missing/stale/untrusted/hold
   refusal, passing exact-head trusted review, fork recheck and denied non-main
   dispatch. Do not use or review the paused real submission queue to test gates.
6. Only after separate deployment consent, approve the production environment for
   the exact audited main revision. Keep submission restart/private reviewer
   installation/migration/schedule approvals separate.

If settings/environment support or permissions are absent, hold activation and
publication. The website's existing missing-required-check completion blocker
remains until authorized settings activation; this proposal does not waive it.

## Verification scope

`node --test test/submission-gate.test.mjs` exercises the verifier with synthetic
PR/review/API/history fixtures, including ordinary passing controls and refusal
paths. The wiring test checks job dependencies, fixed checkout and credential
separation; it is not proof of live GitHub settings/environment enforcement. Local
Git and GitHub Actions behavior, full technical suites and an independent
exact-candidate security review are required before calling the proposal ready.
No real submission PRs are queried or reviewed by these tests.
