<!-- version: 1.0 | date: 2024-01-15 | change: Initial release -->

# QA Reviewer Hooks

The QA Reviewer is a read-only analysis agent. Its primary hook use case is logging review outcomes so there is an auditable record of every QA pass or failure.

---

## Recommended Hook

### Log QA Outcome
**Hook type:** `Stop`  
**Purpose:** Records the QA session completion in the audit log. In a more advanced setup, this could also write the QA verdict (PASS / FAIL) to a structured log file.

```json
{
  "Stop": [
    {
      "hooks": [
        {
          "type": "command",
          "command": "echo \"[$(date -u +%Y-%m-%dT%H:%M:%SZ)] QA Reviewer: review session complete\" >> ~/claude-logs/orchestrator.log"
        }
      ]
    }
  ]
}
```

---

## Advanced: Structured QA Log

If you want a machine-readable QA log, replace the `echo` command with a script that extracts the overall assessment and appends it to a JSON log:

```bash
#!/bin/bash
# save as ~/scripts/log-qa-result.sh
DATE=$(date -u +%Y-%m-%dT%H:%M:%SZ)
echo "{\"timestamp\": \"$DATE\", \"agent\": \"qa-reviewer\", \"status\": \"complete\"}" >> ~/claude-logs/qa-results.jsonl
```

```json
{
  "Stop": [
    {
      "hooks": [
        {
          "type": "command",
          "command": "bash ~/scripts/log-qa-result.sh"
        }
      ]
    }
  ]
}
```

---

## Notes

- The QA Reviewer should never mutate files or call external services — it reads and reports only.
- If a QA FAIL is returned, the orchestrator's decision rules handle the routing back to the relevant agent. No hook is needed for this — it is handled in the agent instructions.
