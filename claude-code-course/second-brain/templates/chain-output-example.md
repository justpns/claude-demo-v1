<!-- version: 1.0 | date: 2024-01-15 | change: Initial release -->

# Chain Output Example — Reference Template

This file shows what a complete, successful run of the agent chain looks like. Use it during live demos to set participant expectations, and as a reference when checking your own chain outputs.

---

## Input Brief (example)

> We're a 12-person marketing agency. We need a new website — our current one is 4 years old and doesn't reflect our work. We'd like something modern, fast, and easy to update ourselves. We have a rough budget of around $25k and want to launch before our annual conference in September.

---

## Context Analysis

**Client Profile**
- Client name / company: Unknown (12-person marketing agency)
- Industry: Marketing / Creative services
- Client type: Unknown — treat as new client
- Decision-maker signals: "We" language suggests a leadership team. No single decision-maker identified.

**Project Classification**
- Project type: Website redesign
- Scope size: Medium (estimate 6–10 weeks)
- Complexity: Medium — modern design expectations, self-editing CMS requirement, fixed deadline
- Urgency: Moderate — September deadline gives approximately 6 months from brief date (January)

**Brief Quality Assessment**
- Completeness: 3/5
- Missing information: Number of pages, existing brand assets, preferred CMS, hosting arrangements, whether copywriting is included
- Ambiguities: "Easy to update ourselves" — need to clarify CMS preference and team's technical level

**Recommended Next Step:** Proceed to BRD Builder. Note missing information for the Open Questions section.

---

## BRD / Scope

**Project Overview**
A full redesign of a 12-person marketing agency's website. The new site must modernise the visual presentation of their portfolio, perform well on page speed metrics, and be manageable by a non-technical internal team via a CMS.

**Business Objectives**
- Reflect current work quality and agency positioning *[stated]*
- Improve site performance (speed, mobile experience) *[inferred from "modern, fast"]*
- Enable internal content updates without developer dependency *[stated]*
- Launch before the annual conference in September *[stated]*

**In Scope**
1. Discovery and information architecture (IA) planning
2. UX wireframes for key page templates
3. Visual design — up to 3 design concepts, 2 rounds of revisions
4. CMS implementation (platform TBD, pending client input)
5. Development of up to 8 page templates
6. Basic SEO setup (meta titles, descriptions, sitemap)
7. Content migration for up to 20 pages (client provides final copy)
8. Browser and device testing
9. Launch support (2 weeks post-launch)

**Out of Scope**
1. Copywriting — client is responsible for all page copy
2. Photography or video production
3. Ongoing maintenance beyond the 2-week post-launch support period
4. Paid advertising or SEO optimisation beyond basic technical setup
5. E-commerce functionality

**Assumptions**
- Client will provide all final copy and approved brand assets (logo, fonts, colours) within 2 weeks of project kickoff
- The chosen CMS platform is within the project budget
- A maximum of 20 pages are migrated — additional pages are a change request

**Open Questions**
1. Preferred CMS? (WordPress, Webflow, Squarespace, other?)
2. How many pages does the current site have?
3. Is there an existing brand guide?
4. What is the exact conference date in September?

---

## Proposal Draft

**Executive Summary**
We propose a full website redesign for your agency — a modern, fast, self-editable site that genuinely reflects the quality of your work, delivered before your September conference.

**Our Understanding of Your Needs**
Your current website is four years old and no longer represents who you are. You need a site that makes a strong first impression, loads quickly, and can be kept up to date by your own team without calling a developer every time.

**Proposed Approach**

*Phase 1 — Discovery & Design (Weeks 1–3)*
Kickoff call, review of current site and brand assets, IA and wireframes, 3 design concepts, 2 revision rounds.

*Phase 2 — Development (Weeks 4–8)*
CMS setup and configuration, development of agreed page templates, content migration (up to 20 pages, client-supplied copy).

*Phase 3 — Testing & Launch (Weeks 9–10)*
Cross-browser and mobile testing, pre-launch review, go-live, 2-week post-launch support.

**Deliverables**
1. Information architecture document
2. Wireframes for key page templates
3. Visual design files (final approved version)
4. Fully developed website on chosen CMS
5. Basic SEO setup
6. Content migration (up to 20 pages)
7. 2 weeks post-launch support

**Pricing**

| Phase | Investment |
|-------|-----------|
| Phase 1 — Discovery & Design | $8,500 |
| Phase 2 — Development | $13,500 |
| Phase 3 — Testing & Launch | $2,500 |
| **Total** | **$24,500** |

*Within your stated budget of $25,000. CMS licensing costs (if any) are additional and billed at cost.*

**What We Need From You**
- Project sign-off and 30% deposit to begin
- Approved brand assets within 2 weeks of kickoff
- Final copy for all pages before Phase 2 begins
- Nominated internal point of contact for approvals

---

## QA Review

**Overall Assessment: PASS WITH NOTES**

**Issues Found**
- Minor: Proposal does not state the conference date assumption. Recommend adding: *"This timeline assumes a conference date no earlier than 10 September."*
- Minor: CMS platform is listed as TBD in scope but not flagged in the proposal. Add a note that platform selection will be confirmed in Phase 1.

**Reviewer Sign-Off**
> QA review complete. This output is approved for client communication, subject to the two minor notes above being addressed. Reviewed by QA Agent.

---

## Client Email

**Subject:** Proposal: Website Redesign — [Your Agency Name]

---

Hi [Name],

Thanks for the brief — it's a project we'd love to work on.

I've put together a proposal based on what you shared. It covers a full redesign delivered in three phases, built around your September conference deadline, and comes in at $24,500 — within the budget you mentioned.

A couple of things I'd like to confirm before we lock in the scope:
- Do you have a CMS preference, or are you open to a recommendation?
- What's the exact conference date? I want to make sure we build in enough runway.

The proposal is below. Have a read and let me know if you'd like to jump on a call to talk through it — happy to make time this week.

[PROPOSAL CONTENT INLINE]

Looking forward to your thoughts.

[Your name]

---

## Orchestrator Notes

- Chain completed successfully: Context Analysis → BRD → Proposal → QA → Client Email
- QA returned PASS WITH NOTES — two minor items noted but not blocking
- No clarification loop required — brief had sufficient information to proceed
- User approval required before sending the client email
