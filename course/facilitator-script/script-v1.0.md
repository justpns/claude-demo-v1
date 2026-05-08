<!-- version: 1.0 | date: 2024-01-15 | change: Initial release -->

# Facilitator Script — Claude Code for Non-Coders
## 4-Hour Workshop Run-of-Show

**Format:** In-person or Zoom  
**Duration:** 4 hours (includes two breaks)  
**Participants:** Business professionals with no coding background

---

## Pre-Workshop Checklist (30 min before start)

- [ ] Claude.ai Project is set up with all agent files uploaded (check versions against README)
- [ ] Demo briefs (brief-01 through brief-03) are open and ready to paste
- [ ] Participant kit files shared (exercise sheet PDF or printed copies)
- [ ] Screen share tested (Zoom) or projector connected (in-person)
- [ ] Slides open at title slide
- [ ] Chat / Q&A channel open (Zoom: enable chat; in-person: whiteboard available)
- [ ] Timer or clock visible to you but not participants

---

## Hour 1 — Welcome & The Big Picture (60 min)

### 0:00 — Welcome and Introductions (10 min)

> "Welcome to Claude Code for Non-Coders. My name is [name]. In the next four hours, you are going to build a working AI agent system — not from scratch, not with code — just from clear instructions. Let's start with a quick round of introductions: name, what you do, and one word for how you feel about AI right now."

Facilitate quick introductions (keep to 30 seconds each). Note the "one word" answers on the whiteboard — you will return to them at the end.

### 0:10 — Why This Workshop Exists (10 min)

> "Most AI tools are designed to give you a single answer to a single question. That's useful. But the real value comes when you connect AI agents together into a workflow — so that one agent's output becomes the next agent's input. That's what we're building today."

Key points to cover:
- The difference between a chatbot and an agent
- Why non-coders can build powerful agent systems (natural language is the programming language)
- What you will have built by the end of this session

### 0:20 — The Agent System Overview (15 min)

Walk through the architecture diagram on the slide. Explain each agent:
- **Orchestrator** — the manager that routes work
- **Context Analyst** — reads the brief and classifies it
- **BRD Builder** — defines what the project is
- **Proposal Agent** — writes the proposal and pricing
- **Client Comms Agent** — wraps everything in a client-ready email
- **QA Reviewer** — checks outputs before they go anywhere

> "Think of this as hiring six specialists who each do one thing brilliantly, and a manager who coordinates them. Except these specialists are available 24/7, never argue, and do exactly what you tell them."

### 0:35 — Live Demo: Brief-01 Through the Full Chain (25 min)

**This is the moment that changes minds. Move slowly and narrate every step.**

1. Open the Claude.ai Project (screen shared)
2. Paste `demo-inputs/brief-01.md` as the first message
3. Walk through each agent output as it appears
4. Pause after each output to point out: "Notice what the [agent name] did — it [specific observation]"
5. Show the full chain output at the end
6. Compare to `second-brain/templates/chain-output-example.md`

Common questions to anticipate:
- "Can it get things wrong?" → Yes, that's why QA is in the chain. Show a QA flag.
- "How does it know to route it?" → The orchestrator's instructions define the sequence.
- "Can I change how it works?" → Yes, that's what we're doing this afternoon.

---

## BREAK 1 — 10 minutes (at 1:00)

Announce break. Keep slides on the architecture diagram.

---

## Hour 2 — Building Your Agent Instructions (60 min)

### 1:10 — How Agent Instructions Work (15 min)

> "The SKILL.md and CLAUDE.md files you saw in the demo are just text documents — like a very precise job description. There is no code. The quality of your agent system is directly proportional to the quality of those instructions."

Cover:
- The anatomy of a SKILL.md file (Role, Inputs, Output format, Rules, Tone)
- Why structure matters (Claude follows structure; vague instructions produce vague outputs)
- The version header — why it exists and how to update it

Show: Open `agents/context-analyst/SKILL.md` on screen. Walk through each section.

### 1:25 — Participant Exercise 1: Read and Critique (20 min)

Participants open `participant-kit/exercise-sheet.md` — Exercise 1.

**Exercise:** Read the `brd-builder/SKILL.md` and the `proposal-agent/SKILL.md`. Identify:
1. One thing the instruction does well
2. One thing you would change or add for your own business context

Pair share (5 min), then take 3–4 responses from the room.

Facilitator tip: The goal is not to produce perfect feedback — it is to get participants reading the files actively and thinking about their own business context.

### 1:45 — Live Demo: Brief-02 With a Modified Instruction (25 min)

1. Show `demo-inputs/brief-02.md`
2. Before running it, modify one instruction in the Proposal Agent SKILL.md (example: change the pricing format from fixed-price to hourly)
3. Run the brief through the chain
4. Show how the proposal output changes based on the instruction change

Key teaching moment: "You just changed the agent's behaviour without touching any code. That's the leverage."

---

## Hour 3 — Customising for Your Business (60 min)

### 2:10 — Participant Exercise 2: Write Your Own Agent Instruction (30 min)

Participants use `participant-kit/starter-CLAUDE.md` as a starting template.

**Exercise:** Write a SKILL.md for one agent that is relevant to your actual business. You can:
- Adapt an existing agent (e.g., change the proposal format for your industry)
- Define a new agent for a task specific to your workflow

Facilitator circulates and assists. Common sticking points:
- "I don't know what to put in Rules" → Ask: "What would a junior staff member get wrong? Write that as a rule."
- "My output format feels complicated" → Say: "Start with 3 sections. You can add more later."
- "What if the AI ignores my instruction?" → "Let's test it. Paste it in and see."

### 2:40 — Live Demo: Brief-03 and the Second Brain (20 min)

1. Run `demo-inputs/brief-03.md` through the chain
2. Show how to save the output to `second-brain/decisions/`
3. Start a new conversation and reference the saved decision — show how context persists

> "This is what separates a one-time AI experiment from a real business system. The second brain is how your agents get smarter about your specific clients over time."

---

## BREAK 2 — 10 minutes (at 3:00)

---

## Hour 4 — Hooks, Versioning, and What Comes Next (60 min)

### 3:10 — Hooks: Making Agents Part of Your Workflow (20 min)

Open `agents/hooks-overview.md` on screen.

> "So far, everything we've done is inside Claude. Hooks are how Claude connects to the rest of your world."

Cover:
- The four hook types (PreToolUse, PostToolUse, Notification, Stop)
- A simple logging hook — show the code in `agents/orchestrator/hooks.md`
- What becomes possible with hooks (save to files, notify Slack, trigger other systems)

Reassurance: "You do not need to understand the code to use hooks. You copy the example, change the file path, and paste it into settings.json. That's it."

### 3:30 — Versioning and the Round-by-Round Process (15 min)

Walk through the README "How to Update Between Rounds" section on screen.

> "Every file has a version header. Every PDF has a version number in its name. Every change gets a CHANGELOG entry. This sounds like overhead — but it means you can run this workshop 50 times and always know exactly what version of every file you ran it with. You can roll back to what was working. You can trace every change."

Show: Open `CHANGELOG.md`. Walk through a hypothetical update: bump a SKILL.md, update the README table, add a CHANGELOG entry.

### 3:45 — Participant Exercise 3: Update Your Agent and Log It (10 min)

**Exercise:** Make one small change to the SKILL.md you wrote in Exercise 2. Bump the version header from 1.0 to 1.1. Write a one-line CHANGELOG entry describing what you changed and why.

This locks in the habit.

### 3:55 — Wrap-Up and What Comes Next (15 min)

Return to the "one word" answers from the opening round.

> "You told me [words from the board] when we started. How has that changed?"

Cover:
- What participants now have: a working agent system definition, versioning habits, a repository structure to use from day one
- What to do this week: clone the repo, set up their Claude.ai Project, run their first real brief
- Where to go deeper: Claude docs, the CHANGELOG to track their own progress

**Close:**
> "The thing that holds most people back is waiting until they understand it perfectly before they start. You don't need to understand it perfectly. You just ran a four-agent chain today without writing a single line of code. Start with brief-01 on a real client brief tomorrow. The rest will follow."

---

## Post-Workshop Facilitator Notes

After each round, note the following before your next commit:

- Which demo went best and why
- Any participant questions that exposed a gap in the materials
- Any agent instructions that need updating based on live feedback
- Version of each file used in this round (cross-check against README)

File your notes in `second-brain/decisions/round-notes-YYYY-MM-DD.md` and commit with the message:
```
chore: post-round notes YYYY-MM-DD
```
