---
name: curation-sweep
description: Triage the monthly resource-radar issue - sweep the listed sources for new multi-agent AI safety resources, evaluate candidates, and add accepted ones to the list. Use when asked to run a curation sweep, process the radar issue, or find new resources for the list.
---

# Monthly curation sweep

The `resource-radar.yml` workflow opens a monthly issue listing sources to sweep. This skill processes it (or runs the same sweep on demand).

## 1. Collect candidates

Sweep each source from the radar issue checklist:

- arXiv cs.MA recent listings and a search for "multi-agent security"
- Cooperative AI Foundation, ARIA Scaling Trust, Redwood Research
- OWASP GenAI Security Project resources, Cloud Security Alliance blog
- UK AISI Inspect evals, GitHub multi-agent topics

For each, note anything published since the last sweep that looks relevant to multi-agent AI safety.

## 2. Filter hard

Apply the scope rule from AGENTS.md first (multi-agent only), then the CONTRIBUTING.md criteria. Expect to reject most candidates — the list optimises for curation, not coverage. When unsure, launch the `entry-reviewer` agent.

## 3. Add accepted entries

Use the `add-entry` skill for each accepted candidate (it handles link verification, formatting, placement, count update, and validation).

## 4. Close the loop

- Comment on the radar issue with: candidates considered, accepted (with sections), rejected (with one-line reasons).
- Check the issue's checkboxes and close it if fully triaged.
- If any existing entry was found dead or redirected during the sweep, fix or remove it and note that too.
