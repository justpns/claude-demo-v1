# CHANGELOG

This file records every meaningful change made to the repository between rounds. It is the authoritative audit trail for the course.

## Format

Each entry follows this structure:

```
## [vX.X] — YYYY-MM-DD — Round N (or "Pre-launch")

### Changed
- File: `path/to/file.md` bumped from vX.X to vX.X — one-line description of what changed and why

### Added
- File: `path/to/newfile.md` vX.X — one-line description

### Fixed
- File: `path/to/file.md` — description of the bug or error corrected

### Removed / Archived
- File: `path/to/file.md` moved to `archive/` — reason
```

Only add entries for files that actually changed. Do not add entries for files that were reviewed but unchanged.

---

## [v1.0] — 2024-01-15 — Pre-launch

### Added
- `README.md` — root repository documentation, versioning rules, and round management process
- `CHANGELOG.md` — this file
- `.gitignore` — standard ignores for macOS, PDF exports, and editor files
- `agents/hooks-overview.md` v1.0 — explanation of Claude Code hooks for course participants
- `agents/orchestrator/CLAUDE.md` v1.0 — Business-AI Workflow Orchestrator master agent definition
- `agents/orchestrator/hooks.md` v1.0 — orchestrator-specific hook configuration notes
- `agents/context-analyst/SKILL.md` v1.0 — Context Analyst Agent skill definition
- `agents/context-analyst/hooks.md` v1.0 — context analyst hook notes
- `agents/brd-builder/SKILL.md` v1.0 — BRD / Scope Builder Agent skill definition
- `agents/brd-builder/hooks.md` v1.0 — BRD builder hook notes
- `agents/proposal-agent/SKILL.md` v1.0 — Proposal & Pricing Support Agent skill definition
- `agents/proposal-agent/hooks.md` v1.0 — proposal agent hook notes
- `agents/client-comms/SKILL.md` v1.0 — Client Communication Agent skill definition
- `agents/client-comms/hooks.md` v1.0 — client comms hook notes
- `agents/qa-reviewer/SKILL.md` v1.0 — QA / Governance Reviewer Agent skill definition
- `agents/qa-reviewer/hooks.md` v1.0 — QA reviewer hook notes
- `second-brain/README.md` v1.0 — second brain usage guide
- `second-brain/templates/chain-output-example.md` v1.0 — reference example of a full agent chain output
- `course-materials/facilitator-script/script-v1.0.md` v1.0 — full 4-hour facilitator run-of-show
- `demo-inputs/brief-index.md` — index of all demo briefs
- `demo-inputs/brief-01.md` — Demo Brief 1: marketing agency scenario
- `demo-inputs/brief-02.md` — Demo Brief 2: professional services scenario
- `demo-inputs/brief-03.md` — Demo Brief 3: e-commerce scenario
- `participant-kit/starter-CLAUDE.md` v1.0 — starter CLAUDE.md for participant projects
- `participant-kit/exercise-sheet.md` v1.0 — hands-on exercise instructions

---

<!-- Add new entries above this line, in reverse chronological order (newest first) -->
