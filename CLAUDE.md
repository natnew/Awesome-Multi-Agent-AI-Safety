# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

This repository is a public, maintained awesome list for **multi-agent AI safety** — securing systems of interacting AI agents. It is not an application codebase. The `README.md` is the product. There is no build or runtime, but a lightweight validation suite keeps the list consistent (see [Validation](#validation)).

Claude Code should read this file first, then use `AGENTS.md` as the shared repository operating protocol.

## North Star

* Preserve `README.md` as the canonical public artefact.
* Keep the list selective, durable, technically useful, neutral, and easy to scan.
* Help the maintainer make fast, consistent, low-friction decisions.
* Prefer small, precise edits over broad rewrites.
* Do not broaden the list beyond multi-agent AI safety. Single-agent agentic safety — prompt-injection defence, guardrails, sandboxing, individual-agent benchmarks — is out of scope; route it to "Related repositories".

## Claude's Role

Claude may assist with:

* PR review
* Issue triage, including the monthly resource-radar sweep
* README entry review against the scope rule
* Broken-link investigation
* Duplicate detection
* Section placement
* Neutral description rewrites
* Maintainer comment drafts
* Small safe maintainer edits when explicitly asked
* Improvements to agent instruction files when asked

Claude must not:

* Add entries without checking scope, link quality, duplicates, and placement
* Invent facts about a resource or guess URLs and arXiv IDs
* Preserve promotional claims
* Add ranking, novelty, adoption, or performance claims without strong evidence
* Rewrite the taxonomy without explicit instruction
* Edit unrelated files
* Touch protected areas unless instructed
* Commit without running `npm run validate`
* Ask contributors to make trivial fixes the maintainer can safely make

## Repository Facts

* `AGENTS.md` contains the full tool-agnostic operating protocol.
* `CONTRIBUTING.md` contains contributor-facing rules.
* `.github/PULL_REQUEST_TEMPLATE.md` and `.github/copilot-instructions.md` carry contributor and cross-tool expectations.
* `README.md` contains an intro, a badge row, a running entry count, the Contents table, the curated sections, Contributing, Related repositories, and Licence.
* The curated sections are: Foundations and framing; Threat models and attacks; Agent identity, trust, and interaction infrastructure; Oversight and control of agent populations; Multi-agent environments and simulation testbeds; Multi-agent frameworks and orchestration; Communities, organisations, and ongoing work.
* All curated sections use one bullet style with the same entry format. Match the surrounding section exactly.
* New entries go in the single best-fit section. Never duplicate an entry across sections.
* New categories should normally be handled separately from single-entry changes.
* Protected areas include the badge row, the intro and entry-count line, the Contents table, Related repositories, licence text, `.github/`, and `scripts/`.

## Entry Format

```markdown
- **[Name](https://link)** - One-sentence description ending with a full stop. *tag / tag*
```

* One sentence, technically precise, neutral, en-GB spelling (behaviour, organisation, licence).
* Two italic tags separated by ` / ` (e.g. `*Paper / red teaming*`).
* Prefer primary sources: official repositories, arXiv abstract pages (`https://arxiv.org/abs/<id>`), official docs, benchmark sites, organisation pages.

## Validation

Run before committing any change to the list:

```bash
npm install        # once
npm run lint       # markdownlint over README, CONTRIBUTING, and .github markdown
npm run check      # entry count vs header, Contents anchors, duplicate URLs
npm run validate   # lint + check
```

`scripts/check-consistency.mjs` counts every `- **[` line in sections before "## Contributing" and fails if the header entry count disagrees, so update the count whenever you add or remove an entry. Full link checking runs in CI (lychee) on README changes and weekly.

## Always-Loaded Context

Keep this file short. It is an orientation layer, not a manual.

Use this routing:

* Need general agent rules → read `AGENTS.md`
* Need contribution rules → read `CONTRIBUTING.md`
* Need the scope check applied to entries → read `.claude/agents/entry-reviewer.md`
* Need the verified add procedure → read `.claude/skills/add-entry/SKILL.md`
* Need the curation-sweep procedure → read `.claude/skills/curation-sweep/SKILL.md`
* Need style examples → inspect the target section in `README.md`
* Need contributor expectations → inspect `.github/PULL_REQUEST_TEMPLATE.md`
* Need maintainer precedent → inspect recent issues and merged PRs where available

Do not duplicate long sections from those files here.

## First-Pass Workflow

For any PR, issue, or README task:

1. Read the user request.
2. Read the relevant issue, PR, diff, or target README section.
3. Check the multi-agent scope rule.
4. Check `CONTRIBUTING.md` if the task concerns a submission.
5. Check neighbouring entries for style and placement.
6. Search for duplicates.
7. Verify the link by fetching it.
8. Inspect the resource enough to understand what it is.
9. Choose the smallest useful action.
10. Produce a concise decision, edit, or maintainer comment.

## Entry Checklist

Before recommending acceptance or adding an entry, confirm:

* In scope (multi-agent, not single-agent)
* Technically useful
* Credible source
* Canonical URL
* Durable, reachable link
* No duplicate
* Correct section
* Local format matched, including the two italic tags
* Neutral one-sentence description
* No hype or unsupported claims
* No avoidable tracking parameters
* No unnecessary new section
* Entry count and Contents anchors updated if needed

## Source Preference

Prefer:

* Official repositories and documentation
* Papers and technical reports
* Benchmarks and datasets
* Durable project and organisation pages
* Maintained tools, libraries, and standards

Treat cautiously:

* Launch posts, vendor pages, and thin wrappers
* Newsletter and social posts
* Unmaintained repositories and link farms
* Pages dominated by sales language
* Time-sensitive comparisons

## Description Rules

Descriptions should:

* Start with a capital letter and end with a full stop
* Be one short, specific sentence
* Explain what the resource is and why it matters for multi-agent AI safety, not why it is exciting
* Avoid title case
* Avoid starting with "A" or "An"
* Avoid marketing taglines

Remove or neutralise:

* "best", "latest", "most advanced", "powerful", "revolutionary", "cutting-edge", "game-changing", "industry-leading", "fastest"
* Unsupported performance, adoption, or maturity claims

## Section Placement

| Situation                             | Action                                                |
| ------------------------------------- | ----------------------------------------------------- |
| Exact fit in an existing section      | Place there.                                          |
| Fits two sections                     | Choose the more specific or more discoverable one.    |
| Similar to neighbouring entries       | Place near those entries.                             |
| New theme with one entry              | Park, or place in the nearest broader section.        |
| New theme with several strong entries | Suggest a new section; do not create it unless asked. |
| Unclear placement                     | Explain the options briefly and recommend one.        |

## PR Triage

| Decision        | Use when                                                                                   |
| --------------- | ------------------------------------------------------------------------------------------ |
| Accept as-is    | Scope, link, placement, format, and description are all sound.                             |
| Maintainer edit | Strong resource needing only minor wording, link, placement, tag, or formatting fixes.     |
| Request changes | Multi-agent relevance, evidence, link quality, or placement is materially unclear.         |
| Close           | Out of scope, single-agent only, duplicate, promotional, or broken with no replacement.    |
| Park            | Promising but immature, needs a taxonomy decision, or needs maintainer judgement.          |

## Issue Triage

Suggestion issues:

* Strong, in scope, canonical → draft entry and recommend acceptance.
* Strong but wording or placement needs work → recommend maintainer edit.
* Missing evidence → ask for minimal clarification.
* Duplicate → close with a pointer to the existing entry.
* Out of scope (including single-agent) → close politely.
* Premature or taxonomy-dependent → park.

Broken-link issues:

* Verify the link.
* Find a canonical replacement first, preferring official sources over mirrors.
* Remove only when no durable replacement exists.
* Leave a concise note explaining the action.

## Small Safe Fix Rule

Protect contributor goodwill. When a resource is suitable and the issue is minor, make or recommend a maintainer edit rather than asking the contributor to revise.

Small safe fixes include:

* Tightening a description
* Removing hype
* Fixing punctuation or the italic tags
* Correcting placement
* Replacing a non-canonical URL
* Removing tracking parameters

## Stop and Ask

Stop before:

* Creating, renaming, or removing a section
* Reordering large parts of the README
* Editing the Contents table
* Editing the badge row or visual assets
* Changing contribution rules
* Removing several entries
* Making broad scope decisions
* Editing unrelated files

## Protected Areas

Do not edit unless explicitly instructed:

* Badges and the badge row
* The intro and entry-count line (update the count only as a direct result of an entry change)
* The Contents table
* Related repositories
* Licence text and `LICENSE`
* `.github/` workflows, templates, and `CODEOWNERS`
* `scripts/` validation tooling
* Repository metadata unrelated to the task
* Private, draft, scratch, or local-only files

## Maintainer Comment Templates

Accept:

"Thank you — this looks relevant, the link is canonical, and the placement works. I would accept this."

Maintainer edit:

"Thank you — this is a useful resource. I would accept it with a small maintainer edit to tighten the description and keep the wording neutral."

Request changes:

"Thank you for the suggestion. I think this could fit, but I would ask for a little more context on why this is the canonical source and where it belongs."

Duplicate:

"Thank you — I would close this as a duplicate, since the resource already appears under [section]."

Out of scope:

"Thank you for sharing this. This is strong work, but it sits outside our multi-agent scope; the lists under Related repositories are a better home."

Park:

"Thank you — this may be worth revisiting, but I would park it for now until the list has a clearer section for this category."

## Output Format

For PR or issue review, respond with:

* **Decision**: accept, maintainer edit, request changes, close, or park
* **Reason**: 1–3 bullets
* **Suggested README entry**, if useful
* **Suggested maintainer comment**
* **Validation status** (`npm run validate`), if the list changed
* **Files changed**, if any
* **Remaining uncertainty**, if any

## Editing Rule

Do not modify `README.md`, `CONTRIBUTING.md`, `.github` templates, or other files unless explicitly asked.
