<!-- version: 1.0 | date: 2024-01-15 | change: Initial release -->

# Context Analyst Hooks

The Context Analyst is a read-only analysis agent — it does not write files or call external services. Hooks for this agent are optional and lightweight.

---

## Recommended Hook

### Log Analysis Completion
**Hook type:** `Stop`  
**Purpose:** Writes a timestamped entry to the log when the Context Analyst finishes its analysis. Useful for timing the chain.

```json
{
  "Stop": [
    {
      "hooks": [
        {
          "type": "command",
          "command": "echo \"[$(date -u +%Y-%m-%dT%H:%M:%SZ)] Context Analyst: analysis complete\" >> ~/claude-logs/orchestrator.log"
        }
      ]
    }
  ]
}
```

---

## Notes

- Because the Context Analyst only reads and classifies, there is no risk of data mutation. Hooks here are purely for observability.
- If you want to save the Context Analysis output to a file automatically, add a `PostToolUse` hook that appends the result to a dated file in `second-brain/decisions/`.
