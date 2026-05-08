# Business-AI Workflow System

Agent definitions, intake templates, client records, and output templates for a six-agent business workflow system built on Claude.

---

## How the System Works

New work arrives via email, form, call, or retainer request. You paste it into the right intake template, feed it to the Orchestrator in Claude.ai, and the agent chain produces a scoped BRD, proposal draft, and client-ready email. You review, adjust, export to Word/PDF, and send.

```
Intake → Orchestrator → Context Analyst → BRD Builder → Proposal Agent → QA Reviewer → Client Comms → You review → Send
```

---

## Repository Structure

```
├── agents/              ← Agent definitions — upload these to Claude.ai Projects
│   ├── orchestrator/    ← The master agent (CLAUDE.md)
│   ├── context-analyst/ ← Reads and classifies briefs
│   ├── brd-builder/     ← Produces scope and BRD
│   ├── proposal-agent/  ← Drafts proposals and pricing
│   ├── client-comms/    ← Writes client-facing emails
│   └── qa-reviewer/     ← Reviews outputs before delivery
│
├── intake/              ← Paste new work here before running the chain
│   ├── from-email.md
│   ├── from-form.md
│   └── from-call.md
│
├── clients/             ← One subfolder per client
│   └── _template/       ← Copy this for each new client
│
├── templates/           ← Reusable document structures
│   ├── proposal.md
│   └── email-library.md
│
├── course/              ← Course delivery materials (Claude Code for Non-Coders)
│
└── archive/             ← Closed projects — never delete
```

---

## Running a New Brief

1. **Choose your intake template** based on how the brief arrived (`intake/from-email.md`, `from-form.md`, or `from-call.md`)
2. **Paste the raw input** into the template — do not edit or summarise it
3. **Add your pre-read notes** and any flags for the Orchestrator
4. **Open your Claude.ai Project** and paste the completed intake file as your first message
5. **Review the chain output** — check the QA verdict before reading the proposal
6. **Create a client folder**: copy `clients/_template/` to `clients/[client-name]/`
7. **Save each output** to the relevant file in the client folder
8. **Export to Word/PDF** — use the naming convention: `[client-name]-proposal-v1.0.pdf`
9. **Send** — after your final read

---

## Claude.ai Project Setup

Each Claude.ai Project needs these files in its knowledge base:

**Always upload:**
- `agents/orchestrator/CLAUDE.md`
- `agents/context-analyst/SKILL.md`
- `agents/brd-builder/SKILL.md`
- `agents/proposal-agent/SKILL.md`
- `agents/client-comms/SKILL.md`
- `agents/qa-reviewer/SKILL.md`
- `templates/proposal.md`
- `templates/email-library.md`

**Add per-client (when relevant):**
- `clients/[client-name]/brief.md`
- `clients/[client-name]/brd.md` (for revision cycles)

---

## Versioning

Every agent file carries a version header:
```
<!-- version: 1.0 | date: YYYY-MM-DD | change: Description -->
```

Every exported PDF uses a version number in the filename:
```
acme-corp-proposal-v1.0.pdf
acme-corp-proposal-v1.1.pdf
```

Never overwrite a versioned PDF. Always create a new file.

When you update an agent file: bump the version header → add a CHANGELOG entry → commit.

### Commit conventions

| Prefix | Use for |
|--------|---------|
| `feat:` | New agent file, new template, new client folder |
| `fix:` | Correcting an error in an existing file |
| `chore:` | Version bumps, README updates, CHANGELOG entries |
| `test:` | Adding or updating demo briefs |

---

## Current Agent Versions

| Agent | File | Version |
|-------|------|---------|
| Orchestrator | `agents/orchestrator/CLAUDE.md` | v2.0 |
| Context Analyst | `agents/context-analyst/SKILL.md` | v2.0 |
| BRD Builder | `agents/brd-builder/SKILL.md` | v2.0 |
| Proposal Agent | `agents/proposal-agent/SKILL.md` | v2.0 |
| Client Comms | `agents/client-comms/SKILL.md` | v2.0 |
| QA Reviewer | `agents/qa-reviewer/SKILL.md` | v2.0 |

*Update this table every time you bump a version.*
