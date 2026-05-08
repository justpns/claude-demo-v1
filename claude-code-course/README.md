# Claude Code for Non-Coders — Course Repository

**Repository owner:** Course facilitator  
**Course format:** 4-hour live workshop (in-person or Zoom)  
**Delivery cadence:** Multiple rounds per month

This repository is the single source of truth for all agent definitions, course materials, demo inputs, and participant resources used in the *Claude Code for Non-Coders* workshop. It is structured so that individual files can be updated, versioned, and traced between rounds without breaking anything that is already working.

---

## Who This Is For

| Audience | Purpose |
|----------|---------|
| **Facilitator** | Manage agent files, course materials, and round-by-round updates |
| **Course participants** | Reference the participant kit and demo inputs during exercises |
| **Future collaborators** | Understand the system architecture and versioning rules before contributing |

---

## Versioning System

### Agent files (CLAUDE.md / SKILL.md)
Every agent file carries a version header at the top of the file:

```
<!-- version: 1.0 | date: 2024-01-15 | change: Initial release -->
```

Bump the version number every time the file is meaningfully changed before a new round. Use semantic versioning: `1.0` → `1.1` for minor changes, `1.0` → `2.0` for structural rewrites.

### Exported PDFs
Every exported PDF uses the version number in the filename:

```
slides-v1.0.pdf
slides-v1.1.pdf
workbook-v1.0.pdf
workbook-v2.0.pdf
```

**Never overwrite a versioned PDF.** Always commit with a new filename. Participants from previous rounds may reference older versions.

### The rule
> If it goes into a Claude.ai Project or gets handed to a participant, it must have a version number.

---

## Current Versions

| File | Version | Last Updated | Notes |
|------|---------|--------------|-------|
| `agents/orchestrator/CLAUDE.md` | v1.0 | 2024-01-15 | Initial release |
| `agents/context-analyst/SKILL.md` | v1.0 | 2024-01-15 | Initial release |
| `agents/brd-builder/SKILL.md` | v1.0 | 2024-01-15 | Initial release |
| `agents/proposal-agent/SKILL.md` | v1.0 | 2024-01-15 | Initial release |
| `agents/client-comms/SKILL.md` | v1.0 | 2024-01-15 | Initial release |
| `agents/qa-reviewer/SKILL.md` | v1.0 | 2024-01-15 | Initial release |
| `course-materials/slides` | v1.0 | 2024-01-15 | slides-v1.0.pdf |
| `course-materials/workbook` | v1.0 | 2024-01-15 | workbook-v1.0.pdf |
| `course-materials/facilitator-script/script-v1.0.md` | v1.0 | 2024-01-15 | Initial release |

*Update this table every time any file above is versioned up.*

---

## How to Update Between Rounds

Follow these steps in order every time you change a file before a new round:

1. **Edit the file** — make your changes in the relevant `.md` file in this repo.
2. **Bump the version header** — update the `<!-- version: -->` comment at the top of the file. Minor wording fix = bump the minor number (1.0 → 1.1). Structural change = bump the major number (1.0 → 2.0).
3. **Export PDF with new version filename** — if the file is used as a PDF handout or slide deck, export and save it as `filename-vX.X.pdf`. Do not delete the old PDF.
4. **Update the Current Versions table** — edit the table above in this README to reflect the new version number and date.
5. **Add a CHANGELOG entry** — open `CHANGELOG.md` and add a new entry under the current date using the format described there.
6. **Commit with a clear message** — follow the commit message conventions below.
7. **Push to origin** — `git push origin claude/setup-course-github-repo-fTdCF` (or your current working branch).

---

## Commit Message Conventions

All commits must use one of the following prefixes:

| Prefix | When to use | Example |
|--------|------------|---------|
| `feat:` | New file, new section, new agent | `feat: add proposal-agent SKILL.md v1.0` |
| `fix:` | Correcting a bug or error in an existing file | `fix: corrected tone instruction in client-comms SKILL.md` |
| `chore:` | Housekeeping — version bumps, README updates, CHANGELOG entries | `chore: bump orchestrator CLAUDE.md to v1.2` |
| `test:` | Adding or updating demo inputs or exercise content | `test: add brief-04.md for round 3 demo` |

Always reference the version number in the commit message when bumping agent files:
```
chore: bump brd-builder SKILL.md v1.0 → v1.1, clarified scope boundary rules
```

---

## Quick-Start: First-Time Setup

Follow these steps to get up and running for your first round:

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_ORG/claude-code-course.git
cd claude-code-course
```

### 2. Open claude.ai Projects
- Go to [claude.ai](https://claude.ai) and navigate to **Projects**.
- Create a new Project named `Claude Code Course — Round 1`.
- Upload the following files to the Project knowledge base:
  - `agents/orchestrator/CLAUDE.md`
  - `agents/context-analyst/SKILL.md`
  - `agents/brd-builder/SKILL.md`
  - `agents/proposal-agent/SKILL.md`
  - `agents/client-comms/SKILL.md`
  - `agents/qa-reviewer/SKILL.md`

### 3. Run the Orchestrator on a demo brief
- Open a new conversation in the Project.
- Paste the contents of `demo-inputs/brief-01.md` as your first message.
- The Orchestrator will route the brief through the agent chain automatically.
- Review the outputs against the expected chain output in `second-brain/templates/chain-output-example.md`.

---

## Running a New Round

Before each new delivery of the workshop:

1. **Duplicate the Claude.ai Project** — in claude.ai, duplicate your most recent round's Project and rename it `Claude Code Course — Round [N]`.
2. **Confirm file versions match this README** — compare the version headers in every uploaded agent file against the Current Versions table above. If they are out of sync, re-upload the correct files.
3. **Run the pre-round checklist:**
   - [ ] All agent SKILL.md / CLAUDE.md files are the version shown in the README Current Versions table
   - [ ] Demo briefs (brief-01 through brief-03) have been reviewed and are accurate
   - [ ] Participant kit files (`starter-CLAUDE.md`, `exercise-sheet.md`) are printed or shared
   - [ ] Facilitator script is open and reviewed
   - [ ] CHANGELOG.md is up to date with any changes made since the last round
4. **Deliver the workshop.**
5. **After the round** — note any changes needed, update files, bump versions, and commit before the next round.

---

## Repository Structure

```
claude-code-course/
├── agents/                  # All agent definition files
│   ├── hooks-overview.md    # Explains what hooks are and how they work
│   ├── orchestrator/        # Master orchestrator agent
│   ├── context-analyst/     # Reads and classifies incoming briefs
│   ├── brd-builder/         # Builds BRDs and scopes
│   ├── proposal-agent/      # Drafts proposals and pricing
│   ├── client-comms/        # Handles client-facing communication
│   └── qa-reviewer/         # Reviews outputs before delivery
├── second-brain/            # Persistent memory and decision log
├── course-materials/        # Slides, workbook, facilitator script
├── demo-inputs/             # Sample briefs used during live demos
├── participant-kit/         # Files handed to participants
└── archive/                 # Old versions of files (never delete)
```
