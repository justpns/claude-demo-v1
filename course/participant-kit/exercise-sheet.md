<!-- version: 1.0 | date: 2024-01-15 | change: Initial release -->

# Exercise Sheet — Claude Code for Non-Coders

**Workshop date:** [date]  
**Your name:** ___________________________

Keep this sheet. It is your record of what you built today and your starting point for the week ahead.

---

## Exercise 1 — Read and Critique (Hour 2)

Open `agents/brd-builder/SKILL.md` and `agents/proposal-agent/SKILL.md`.

Read both files carefully. Then answer:

**1a. In the BRD Builder, what does the instruction do particularly well?**

_______________________________________________
_______________________________________________
_______________________________________________

**1b. In the Proposal Agent, what would you change or add for your specific business context?**

_______________________________________________
_______________________________________________
_______________________________________________

**1c. Looking at the "Rules" section of either file — what rule would you add that is specific to your industry or client type?**

_______________________________________________
_______________________________________________
_______________________________________________

---

## Exercise 2 — Write Your Own Agent Instruction (Hour 3)

Use `participant-kit/starter-CLAUDE.md` as your template.

Write a SKILL.md for one agent relevant to your business. Use the space below for your notes, or write directly in the template file.

**Which agent are you defining?** (Circle or write)

- Intake / Brief Reader  
- Scope Builder  
- Proposal Writer  
- Client Email Writer  
- QA Reviewer  
- Something else: _______________________

**Agent name (your version):** ___________________________

**Role statement** — Complete this sentence in plain English:  
*"You are the [name]. Your job is to..."*

_______________________________________________
_______________________________________________
_______________________________________________

**Inputs** — What does this agent receive?

_______________________________________________
_______________________________________________

**Output format** — What sections should every output have?

1. _______________________________________________
2. _______________________________________________
3. _______________________________________________
4. _______________________________________________

**Rules** — What must this agent never do? What must it always do?

- Always: _______________________________________
- Always: _______________________________________
- Never: ________________________________________
- Never: ________________________________________

**Tone** — Describe the voice in 2–3 words:

_______________________________________________

---

## Exercise 3 — Update Your Agent and Log It (Hour 4)

Make one small change to the SKILL.md you wrote in Exercise 2.

**What did you change?**

_______________________________________________
_______________________________________________

**New version number:** 1.___

**Your CHANGELOG entry** (one line, what changed and why):

_______________________________________________
_______________________________________________

---

## Your Action Plan for This Week

Complete this before you leave:

**Day 1 (tomorrow):** I will ___________________________

**By end of week:** I will ___________________________

**First real brief I'll run through the system:** ___________________________

**One thing I want to test that we didn't cover today:** ___________________________

---

## Quick Reference

### Version header format
```
<!-- version: 1.0 | date: YYYY-MM-DD | change: Description -->
```

### Commit message format
```
feat: add [agent name] SKILL.md v1.0
fix: corrected [specific thing] in [agent name]
chore: bump [agent name] v1.0 → v1.1
test: add brief-04 for [scenario]
```

### The update-between-rounds checklist
1. Edit the file
2. Bump the version header
3. Export PDF with new version filename
4. Update README Current Versions table
5. Add CHANGELOG entry
6. Commit with clear message
7. Push

### Key files to remember
| File | Purpose |
|------|---------|
| `agents/orchestrator/CLAUDE.md` | The master agent — upload to Claude.ai Project |
| `agents/*/SKILL.md` | Each specialist agent |
| `participant-kit/starter-CLAUDE.md` | Your template |
| `second-brain/decisions/` | Where to save BRD outputs |
| `second-brain/client-notes/` | Where to save client context |
| `CHANGELOG.md` | Log every change here |
