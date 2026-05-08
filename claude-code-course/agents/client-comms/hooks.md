<!-- version: 1.0 | date: 2024-01-15 | change: Initial release -->

# Client Comms Hooks

The Client Communication Agent is the last agent in the chain before content reaches a client. Hooks here are focused on preventing premature sending and creating an approval checkpoint.

---

## Recommended Hook

### Require Approval Before Any External Action
**Hook type:** `PreToolUse`  
**Purpose:** If this agent ever attempts to call a tool that could send an email or make an external API call, this hook logs a warning and can be configured to block the action pending user confirmation.

```json
{
  "PreToolUse": [
    {
      "matcher": "*",
      "hooks": [
        {
          "type": "command",
          "command": "echo \"[$(date -u +%Y-%m-%dT%H:%M:%SZ)] CLIENT COMMS: tool call intercepted — human approval required before sending\" >> ~/claude-logs/orchestrator.log"
        }
      ]
    }
  ]
}
```

### Log Communication Draft Ready
**Hook type:** `Stop`

```json
{
  "Stop": [
    {
      "hooks": [
        {
          "type": "command",
          "command": "echo \"[$(date -u +%Y-%m-%dT%H:%M:%SZ)] Client Comms: draft ready for human review\" >> ~/claude-logs/orchestrator.log"
        }
      ]
    }
  ]
}
```

---

## The Golden Rule

> Nothing leaves this agent without a human reading it first.

This is enforced in the Orchestrator's decision rules. These hooks add an auditable log trail. In a future version of this system, the `PreToolUse` hook could be extended to call an approval API before allowing any sending action.
