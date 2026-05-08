<!-- version: 1.0 | date: 2024-01-15 | change: Initial release -->

# Orchestrator Hooks

These hooks are recommended for the Business-AI Workflow Orchestrator. They log the start and completion of each orchestration run so you have an audit trail.

---

## Recommended Hooks

### 1. Log Session Start
**Hook type:** `PreToolUse`  
**Purpose:** Records when the orchestrator begins processing a new brief.

```json
{
  "PreToolUse": [
    {
      "matcher": "*",
      "hooks": [
        {
          "type": "command",
          "command": "echo \"[$(date -u +%Y-%m-%dT%H:%M:%SZ)] Orchestrator: new tool call\" >> ~/claude-logs/orchestrator.log"
        }
      ]
    }
  ]
}
```

### 2. Log Session Stop
**Hook type:** `Stop`  
**Purpose:** Records when the orchestrator completes a run. Use this to confirm the chain finished.

```json
{
  "Stop": [
    {
      "hooks": [
        {
          "type": "command",
          "command": "echo \"[$(date -u +%Y-%m-%dT%H:%M:%SZ)] Orchestrator: session complete\" >> ~/claude-logs/orchestrator.log"
        }
      ]
    }
  ]
}
```

---

## Setup Instructions

1. Create the log directory: `mkdir -p ~/claude-logs`
2. Add the hook configuration to your project's `.claude/settings.json`.
3. Run a test brief through the orchestrator and confirm log entries appear in `~/claude-logs/orchestrator.log`.

---

## Notes

- These are minimal logging hooks. For production use, replace the `echo` commands with a call to a logging service or append to a structured JSON log.
- The orchestrator hooks fire on every tool call, not just at the start and end of a full chain. That is by design — it gives you a full trace of every action taken during an orchestration run.
