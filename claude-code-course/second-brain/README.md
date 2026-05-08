<!-- version: 1.0 | date: 2024-01-15 | change: Initial release -->

# Second Brain

The second brain is the persistent memory layer of the agent system. It stores outputs, decisions, and client notes across sessions so that context is never lost between rounds or between conversations.

---

## Folder Structure

```
second-brain/
├── README.md              # This file
├── templates/
│   └── chain-output-example.md   # Reference example of a full agent chain output
├── decisions/
│   └── .gitkeep           # Stores BRDs and scoping decisions (one file per client/project)
└── client-notes/
    └── .gitkeep           # Stores notes on specific clients (one file per client)
```

---

## How to Use the Second Brain

### During a live session
After running a brief through the agent chain, save the key outputs:
- Copy the BRD output to `decisions/brd-YYYY-MM-DD-[client-name].md`
- Copy any client-specific context notes to `client-notes/[client-name].md`

### Uploading to Claude.ai Projects
When you upload files to a Claude.ai Project knowledge base, upload the relevant second-brain files alongside the agent SKILL.md files. This gives the agents persistent context about previous decisions and client history.

Which files to upload:
- Always: all agent SKILL.md and CLAUDE.md files
- Per-client: the relevant `client-notes/[client-name].md` file
- Per-project: the relevant `decisions/brd-[project].md` file

### Keeping it clean
- One file per client in `client-notes/`. Update the same file each time you work with that client — do not create duplicate files.
- One file per distinct project in `decisions/`. If a client has multiple projects, create a separate decisions file for each.
- Archive old files to `archive/` when a project closes — do not delete them.

---

## File Naming Conventions

| Folder | Convention | Example |
|--------|-----------|---------|
| `decisions/` | `brd-YYYY-MM-DD-client-name.md` | `brd-2024-03-15-acme-corp.md` |
| `client-notes/` | `client-name.md` | `acme-corp.md` |

Use lowercase, hyphens instead of spaces, no special characters.
