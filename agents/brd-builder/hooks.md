<!-- version: 1.0 | date: 2024-01-15 | change: Initial release -->

# BRD Builder Hooks

The BRD Builder produces a structured document. The most useful hook here is one that automatically saves the BRD output to the `second-brain/decisions/` folder for future reference.

---

## Recommended Hook

### Auto-Save BRD Output
**Hook type:** `Stop`  
**Purpose:** Saves the BRD output to a dated file in the decisions folder, creating a persistent record of every BRD produced.

This requires a small wrapper script. Save the following as `~/scripts/save-brd.sh`:

```bash
#!/bin/bash
DATE=$(date +%Y-%m-%d)
OUTFILE=~/claude-code-course/second-brain/decisions/brd-${DATE}.md
echo "# BRD — Generated $(date)" >> "$OUTFILE"
echo "" >> "$OUTFILE"
# Pipe the last assistant output here via your preferred method
echo "BRD saved to $OUTFILE"
```

Then reference it in your `settings.json`:

```json
{
  "Stop": [
    {
      "hooks": [
        {
          "type": "command",
          "command": "bash ~/scripts/save-brd.sh"
        }
      ]
    }
  ]
}
```

---

## Notes

- This is an advanced hook. For the course, the manual approach (copy-paste the BRD output to a `.md` file in `second-brain/decisions/`) is perfectly acceptable.
- Auto-saving is most valuable when you are running many briefs per day and need a searchable archive.
