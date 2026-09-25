# CLAUDE.md

Claude-specific operating layer for this repository. `AGENTS.md` is the shared, tool-agnostic contract (scope rule, quality bar, decision matrix, review workflows, comment style); read it before any review, triage, or edit. This file covers only what Claude needs on top of it and the invariants that most often go wrong.

## What this repository is

A curated awesome list for **multi-agent AI safety**: securing systems of interacting AI agents. `README.md` is the product. There is no application code; `scripts/check-consistency.mjs` and markdownlint exist only to keep the list consistent. Most tasks end in a two-line README diff or a maintainer decision.

## Routing

| Task                                            | Go to                                                                            |
| ----------------------------------------------- | -------------------------------------------------------------------------------- |
| Add a resource                                  | `add-entry` skill (`.claude/skills/add-entry/SKILL.md`)                          |
| Process the monthly "Resource radar" issue      | `curation-sweep` skill (`.claude/skills/curation-sweep/SKILL.md`)                |
| Borderline scope, or a PR/issue adding entries  | `entry-reviewer` subagent (`.claude/agents/entry-reviewer.md`)                   |
| PR review, issue triage, broken-link reports    | `AGENTS.md` workflows and decision matrix                                        |
| Contributor-facing rules                        | `CONTRIBUTING.md`, `.github/PULL_REQUEST_TEMPLATE.md`                            |
| Style and placement precedent                   | Neighbouring entries in the target README section; recent `Add ...` commits      |

When several candidates need vetting (a sweep, a multi-entry PR), run one `entry-reviewer` per candidate in parallel. Do not spawn agents for a single, clearly in-scope entry.

## Invariants

- **Scope is decisive.** Primary subject must be multi-agent. Single-agent agentic safety (prompt-injection defence, guardrails, sandboxing, individual-agent benchmarks) is out of scope however good; point to "Related repositories".
- **Entry format**, matched exactly, separator is a plain hyphen:
  `- **[Name](https://link)** - One-sentence description ending with a full stop. *Type / topic*`
  Tags: two, italic, ` / `-separated; the first is a capitalised resource type (`Paper`, `Survey`, `Simulator`, `Protocol`, ...), the second lowercase apart from proper nouns. en-GB spelling. No hype words, no unsupported ranking or adoption claims, do not start with "A"/"An".
- **Header line** `As of <Month D, YYYY>, the curated sections below contain N entries ...`: every entry added or removed updates **both** the count and the date (today, US-style month-day as already written). `npm run check` fails on a count mismatch; the date is enforced only by precedent.
- **Links are verified, never guessed.** Fetch every URL. Papers use `https://arxiv.org/abs/<id>` (not PDF) or the official publisher page. If a fetch fails or is blocked, report the entry as unverified; do not add it on inference.
- One best-fit section per resource; never duplicate across sections. `npm run check` catches duplicate URLs only, so also grep for the resource name.
- Section order: foundational and survey work first, then specific work. Do not move existing entries unless asked.

## Commands and CI

```bash
npm ci             # once per container
npm run validate   # lint + check; must pass before any commit
```

- `npm run lint` runs markdownlint on **every root `*.md`** (including this file and `AGENTS.md`) and `.github/*.md`, not `.claude/`. Config: `.markdownlint.jsonc`.
- `npm run check` verifies the header count, Contents anchors, and duplicate URLs.
- `npm run format` (Prettier check) is not part of `validate` or CI and already reports existing files; do not run `prettier --write`.
- CI: `validate.yml` on markdown changes; `link-check.yml` (lychee, README only, fails PRs on broken links, opens a `link-rot` issue weekly); `resource-radar.yml` opens the monthly sweep issue; `claude.yml` responds to `@claude` mentions.

## Boundaries

Edit only what the task requires; review and triage tasks are read-only unless an edit is requested. Stop and ask before touching any of these:

- Sections (create, rename, remove, reorder), the Contents table, or bulk entry removal
- The badge row, intro prose, Related repositories, licence text, or `LICENSE`
- `.github/` (workflows, templates, `CODEOWNERS`) and `scripts/`
- Contribution rules or scope decisions beyond a single entry

Prefer a maintainer edit over asking a contributor for trivial fixes (wording, tags, canonical URL, placement).

## Done means

1. `npm run validate` passes, and you report its result.
2. The diff contains only intended lines (an entry change is usually the entry plus the header line).
3. Commits use short imperative subjects matching history, e.g. `Add Emergence World to simulation testbeds`.
4. For reviews and triage, reply with: decision (accept / maintainer edit / request changes / close / park), 1–3 reasons, the exact entry line if relevant, a short maintainer comment in the `AGENTS.md` style, and any remaining uncertainty.
