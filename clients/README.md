# Clients

One subfolder per client. Each folder is the single source of truth for that client's context, scope decisions, and communications.

## Setup

When a new client enters the system:

1. Copy `_template/` and rename it: `[client-name]/` (lowercase, hyphens, no spaces — e.g., `acme-corp/`)
2. Fill in `brief.md` from the intake file
3. Run the Orchestrator chain
4. Save each agent output to the relevant file in the folder

## Folder naming

| Pattern | Example |
|---------|---------|
| New client — company name | `acme-corp/` |
| Individual / sole trader | `jane-smith/` |
| Retainer client | `acme-corp/` (same folder — add new subfolders per project) |

## Files in each client folder

| File | Contains |
|------|---------|
| `brief.md` | The original brief — never edited after pasting |
| `brd.md` | Scope and BRD output from the BRD Builder |
| `proposal.md` | Proposal draft — update with each version |
| `comms.md` | Log of all client-facing communications |

## Retainer clients

For ongoing clients, add a subfolder per project inside their folder:

```
acme-corp/
├── brief.md          ← original new business brief
├── context.md        ← standing context (industry, preferences, history)
├── project-website-2024/
│   ├── brd.md
│   ├── proposal.md
│   └── comms.md
└── project-q1-campaign/
    ├── brd.md
    ├── proposal.md
    └── comms.md
```

## Archiving

When a project closes, move the client folder to `archive/`. Do not delete.
