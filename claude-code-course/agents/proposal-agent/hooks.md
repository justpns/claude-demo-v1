<!-- version: 1.0 | date: 2024-01-15 | change: Initial release -->

# Proposal Agent Hooks

The Proposal Agent produces the primary client-facing document. Hooks here focus on logging and preventing accidental delivery of an unreviewed draft.

---

## Recommended Hook

### Block Direct Sending
**Hook type:** `PreToolUse`  
**Purpose:** If the Proposal Agent ever attempts to send an email or write to an external file, this hook can intercept and log a warning. This is a guardrail — the orchestrator should handle routing, but this adds a safety net.

```json
{
  "PreToolUse": [
    {
      "matcher": "Bash",
      "hooks": [
        {
          "type": "command",
          "command": "echo \"[$(date -u +%Y-%m-%dT%H:%M:%SZ)] PROPOSAL AGENT: Bash tool called — verify this is not sending output externally\" >> ~/claude-logs/orchestrator.log"
        }
      ]
    }
  ]
}
```

### Log Proposal Completion
**Hook type:** `Stop`

```json
{
  "Stop": [
    {
      "hooks": [
        {
          "type": "command",
          "command": "echo \"[$(date -u +%Y-%m-%dT%H:%M:%SZ)] Proposal Agent: draft complete — pending QA review\" >> ~/claude-logs/orchestrator.log"
        }
      ]
    }
  ]
}
```

---

## Notes

- The most important governance rule for this agent: **no proposal goes to a client without QA review and explicit user approval.** The orchestrator enforces this in its decision rules, and these hooks provide an additional log trail.
