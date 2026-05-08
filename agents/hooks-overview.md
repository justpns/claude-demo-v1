<!-- version: 1.0 | date: 2024-01-15 | change: Initial release -->

# Hooks Overview

## What Are Hooks?

Hooks are automated triggers built into Claude Code that run shell commands at specific points in the agent's lifecycle — before a tool is called, after a tool completes, when a session starts, or when Claude is about to stop. They let you extend Claude's behavior without modifying the agent's core instructions.

Think of hooks as the "glue" between Claude and the rest of your system. They can log outputs, enforce rules, notify external services, or transform data before Claude sees it.

---

## The Four Hook Types

| Hook | When It Fires | Common Use |
|------|--------------|------------|
| `PreToolUse` | Before Claude calls a tool | Validate inputs, block dangerous commands, log intent |
| `PostToolUse` | After a tool returns a result | Log outputs, trigger downstream actions, format results |
| `Notification` | When Claude has a notification | Route alerts to Slack or email |
| `Stop` | When Claude is about to finish | Run quality checks, save outputs, send summaries |

---

## How Hooks Are Configured

Hooks are defined in a `settings.json` file inside your Claude Code project directory. Each hook specifies:
- **event** — which lifecycle event to listen for
- **command** — the shell command to run
- optionally, a **matcher** — a filter to only fire the hook for specific tools

Example structure:
```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "echo 'About to run a Bash command' >> ~/logs/claude-activity.log"
          }
        ]
      }
    ]
  }
}
```

---

## How This Course Uses Hooks

In this course, each agent has its own `hooks.md` file that describes:
1. Which hooks are recommended for that agent
2. What each hook does
3. A copy-paste command ready to drop into your `settings.json`

Hooks are optional — the agents work without them. But hooks are what move you from "Claude does a task" to "Claude is part of a reliable workflow."

---

## Where to Find More

- Each agent folder contains a `hooks.md` file with agent-specific hook recommendations.
- The `agents/orchestrator/hooks.md` file covers the most important hooks for the overall system.
- Claude Code documentation: [docs.anthropic.com](https://docs.anthropic.com)
