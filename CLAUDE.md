# CLAUDE.md — Claude Code for Non-Coders

## 1. Project Overview

**Course:** Claude Code for Non-Coders — Build AI-Powered Workflows Using Pure Vibe Coding  
**Goal:** Generate qualified leads for a hands-on Bangkok workshop  
**Audience:** PMs, BAs, UX/UI designers, marketers, founders, ops leads, consultants  
**Price:** 999 THB (one-time)  
**Stack:** Next.js 14 · TypeScript · Tailwind CSS · Framer Motion · React Hook Form · Zod · Resend · Google Sheets API

---

## 2. Design Philosophy

- **Dark AI-native aesthetic** — zinc-950 base, violet/indigo accents, glass cards, subtle glows
- **Outcomes over features** — every section answers "what will I be able to do?"
- **Conversion before decoration** — visual hierarchy serves the funnel, never distracts from it
- **Animation serves clarity** — motion reveals content, doesn't entertain

---

## 3. UI Style Guide

**Color palette:**
| Role | Token |
|---|---|
| Page background | `bg-zinc-950` |
| Card background | `bg-zinc-900` or `bg-zinc-900/60` |
| Border | `border-zinc-800` / `border-zinc-800/60` |
| Primary text | `text-zinc-50` |
| Body / muted text | `text-zinc-400` |
| Subtle text | `text-zinc-500` / `text-zinc-600` |
| Accent gradient (CTA) | `from-violet-600 to-indigo-600` |
| Accent label / eyebrow | `text-violet-400` |
| Success | `text-emerald-400` / `bg-emerald-950/40` |
| Error | `text-red-400` / `bg-red-950/30` |

**Typography:**
- Font: Inter via `var(--font-inter)`
- H1: `text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight`
- H2: `text-3xl sm:text-4xl font-bold tracking-tight text-zinc-50`
- Eyebrow: `text-xs uppercase tracking-widest text-violet-400 font-semibold`
- Body: `text-sm` or `text-base text-zinc-400 leading-relaxed`
- Card title: `font-semibold text-sm` or `text-base`

**Special classes (globals.css):**
- `.gradient-text` — animated purple→indigo→cyan gradient on heading text
- `.gradient-mesh` — radial violet/blue glow background for Hero
- `.dot-grid` — subtle dot pattern overlay

**Glow accent pattern:**
```tsx
<div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
```

---

## 4. Component Conventions

- `'use client'` required on: any section using framer-motion, useState, useEffect, or event handlers
- **Server components** (no directive): `page.tsx`, `layout.tsx`, `Footer.tsx`, all UI atoms
- One file per section → `src/components/sections/[Name].tsx`
- UI atoms live in `src/components/ui/` — extend existing Button, Badge, Input; don't rebuild
- Always use `cn()` from `src/lib/utils.ts` for conditional Tailwind classes
- No inline style attributes — Tailwind only

---

## 5. Mobile-First Rules

- Default layout: single column stack
- `sm:` (640px) → two columns
- `lg:` (1024px) → three or four columns
- Container widths: `max-w-6xl` (full layout) · `max-w-4xl` (hero/instructor) · `max-w-3xl` (curriculum) · `max-w-xl` (form/CTA)
- Minimum touch targets: `py-3` on primary buttons, `py-2.5` on secondary
- All sections use `px-6` horizontal padding

---

## 6. Conversion-Focused UX Rules

- **One primary CTA above the fold** — always links to `#register`
- **Sticky nav CTA** — appears after 500px scroll (see `Navbar.tsx`)
- **Section order is fixed:** Hero → PainPoints → WhatYouLearn → ForWho → HowItWorks → Curriculum → Instructor → Pricing → FAQ → FinalCTA
- Each section must answer one question before the user scrolls away
- Never add a section without a conversion purpose
- All CTAs resolve to `#register` (primary) or `#curriculum` (secondary)

---

## 7. AI Workflow Architecture

**Registration flow:**
```
POST /api/register
  → Zod validate
  → appendLead() [Google Sheets]
  → sendDay0Email() [Resend]
  → return { success: true }
```

**Email sequence (cron):**
```
GET /api/cron/email-sequence  [daily 3AM UTC, header: x-cron-secret]
  → getAllLeads()
  → for each lead: check daysSince(registeredAt)
      day >= 1 && !day1Sent  → sendDay1Email() → markEmailSent(row, 'G')
      day >= 3 && !day3Sent  → sendDay3Email() → markEmailSent(row, 'H')
      day >= 7 && !day7Sent  → sendDay7Email() → markEmailSent(row, 'I')
      workshopDate - 1 day   → sendDayMinus1Email() → markEmailSent(row, 'J')
```

**Google Sheets schema (Sheet1, columns A–J):**
`Email | Name | Role | Source | Registered At | Day0 | Day1 | Day3 | Day7 | Day-1`

**Critical rule:** Never instantiate `new Resend()` at module level — always call `getResend()` inside functions or Next.js will fail at build time.

---

## 8. Lead Capture Flow

1. User fills form (name, email, role) → `POST /api/register`
2. `appendLead()` creates Sheets row (Day0 = TRUE, others FALSE)
3. `sendDay0Email()` fires immediately — confirmation + workshop details, role-personalized
4. Cron runs daily → sends nurture sequence based on days elapsed
5. UTM params (`?utm_source=`) auto-captured from URL and stored in `source` column

**Email sequence:**
| Email | Trigger | Subject theme |
|---|---|---|
| Day 0 | Immediate | Confirmation + workshop details |
| Day 1 | 24h after | AI mindset shift |
| Day 3 | 72h after | Sneak peek at what you'll build |
| Day 7 | 7 days after | One week countdown |
| Day -1 | Day before workshop | Final checklist |

---

## 9. Design References

**Visual inspiration:** Anthropic · Linear · Vercel · Notion

**Principles from these references:**
- Generous whitespace — sections breathe, never crowded
- Fine borders (`border-zinc-800`) — structure without weight
- Dark glass cards — `bg-zinc-900/60 border border-zinc-800 rounded-xl`
- Gradient accents run violet → indigo → blue → cyan → teal across sections
- Minimal icons — inline SVG only, `strokeWidth={2}` or `2.5`
- Typography does the heavy lifting, not decoration

---

## 10. Tone of Voice

- **Direct and confident** — no hedging, no passive voice
- **Outcome-first** — "You'll deploy X" not "You'll learn about X"
- **Short sentences** — one idea per sentence
- **No jargon without definition** — if you use "vibe coding," define it
- **Power words:** deploy · ship · build · automate · run · real · zero · live

**Copy patterns:**
- Headlines: `[Outcome]. [Short qualifier].` → "Build AI-Powered Workflows. No code required."
- Eyebrows: lowercase phrase describing context → "What you'll build" / "Who this is for"
- CTAs: verb + outcome + price → "Reserve Your Spot — 999 THB"

---

## 11. Animation Guidelines

**Standard scroll entrance (use everywhere):**
```tsx
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5 }}
```

**Staggered grid items:**
```tsx
transition={{ duration: 0.4, delay: i * 0.07 }}  // fast (6+ items)
transition={{ duration: 0.45, delay: i * 0.12 }} // slow (3 items)
```

**Accordion expand/collapse (AnimatePresence):**
```tsx
initial={{ height: 0, opacity: 0 }}
animate={{ height: 'auto', opacity: 1 }}
exit={{ height: 0, opacity: 0 }}
transition={{ duration: 0.25, ease: 'easeInOut' }}
```

**Rules:**
- Use `whileInView` for all scroll-triggered sections, never bare `animate`
- `viewport={{ once: true }}` always — no replaying on scroll-up
- Button press feedback: `active:scale-[0.98]`
- No spring physics, no layout animations, no 3D transforms

---

## 12. Spacing System

| Context | Value |
|---|---|
| Section vertical padding | `py-24` |
| Hero section | `pt-24 pb-16` |
| Section horizontal padding | `px-6` |
| Section divider | `border-t border-zinc-800/60` |
| Heading block → content | `mb-16` |
| Eyebrow → h2 | `mb-4` |
| h2 → subtext | `mb-4` |
| Subtext → content | implicit via `mb-16` on wrapper |
| Large card padding | `p-8` |
| Medium card padding | `p-6` |
| Small card padding | `p-5` |
| Column gap (cards) | `gap-4` or `gap-5` |
| Large section gap | `gap-8` |

---

## 13. CTA Philosophy

- **Primary:** `bg-gradient-to-r from-violet-600 to-indigo-600` + arrow icon + price in label
- **Secondary:** `border border-zinc-700 text-zinc-300` — no icon, no price
- **Navbar CTA:** same as primary but smaller (`text-sm px-4 py-2`)
- Every primary CTA shows the price: `"Reserve Your Spot — 999 THB →"`
- Loading state: spinner icon + "Registering..." — disable all form fields
- Success state: replace entire form with emerald success card — **never redirect**
- Never show two primary CTAs in the same viewport

---

## 14. Section Structure

Every section follows this skeleton exactly:

```tsx
'use client'  // if uses motion

export default function SectionName() {
  return (
    <section id="[optional-anchor]" className="py-24 px-6 border-t border-zinc-800/60">
      <div className="max-w-[size] mx-auto">

        {/* Heading block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-violet-400 font-semibold mb-4">Eyebrow</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-50 tracking-tight mb-4">Heading</h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">Optional subtext</p>
        </motion.div>

        {/* Content grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* items */}
        </div>

      </div>
    </section>
  )
}
```

**Anchor IDs** (only where nav links point): `curriculum` · `instructor` · `faq` · `register`

---

## 15. Form Structure

**Fields:** name (required, min 2 chars) · email (required, valid format) · role (optional select)

**Validation:** Zod schema in `src/lib/validations.ts` — update schema first, form second

**States:** `idle` → `loading` → `success` | `error`

**Error patterns:**
- Field error: inline via `<Input error={errors.field?.message} />`
- Server error: red banner `bg-red-950/30 border border-red-800/40` above submit button
- Never show both field and server errors simultaneously

**Success state:** Replace form with emerald card — checkmark icon + "You're registered! 🎉" + inbox prompt

**API contract:**
```ts
POST /api/register
Body: { name: string, email: string, role?: string, source: string }
Response: { success: true, message: string } | { success: false, error: string }
```

---

## 16. Accessibility Rules

- All interactive elements: `focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950`
- Color contrast: `text-zinc-50` on `bg-zinc-950` passes WCAG AA — don't go below `text-zinc-400` for body
- Form labels: always `<label>` with matching `htmlFor` — never placeholder-only
- Disabled states: `disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none`
- Semantic structure: `<nav>` · `<main>` · `<section>` · `<footer>` · h1 only once per page · h2 per section · h3 for cards
- Reduced motion: add to `globals.css` when shipping:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, ::before, ::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
  }
  ```
