import { Resend } from 'resend'

function getResend() {
  return new Resend(process.env.RESEND_API_KEY!)
}

function getFrom() {
  return `${process.env.RESEND_FROM_NAME ?? 'Claude Code Workshop'} <${process.env.RESEND_FROM_EMAIL}>`
}

const WORKSHOP_DATE = process.env.NEXT_PUBLIC_WORKSHOP_DATE_DISPLAY ?? 'Coming Soon'
const WORKSHOP_TIME = process.env.NEXT_PUBLIC_WORKSHOP_TIME ?? 'TBA'
const WORKSHOP_LOCATION = process.env.NEXT_PUBLIC_WORKSHOP_LOCATION ?? 'Bangkok, Thailand'

function baseTemplate(content: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    body { margin: 0; padding: 0; background: #09090b; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
    .wrapper { max-width: 560px; margin: 0 auto; padding: 40px 24px; }
    .logo { font-size: 13px; font-weight: 600; color: #a78bfa; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 40px; }
    .card { background: #18181b; border: 1px solid #27272a; border-radius: 12px; padding: 32px; }
    h1 { margin: 0 0 16px; font-size: 22px; font-weight: 700; color: #fafafa; line-height: 1.3; }
    p { margin: 0 0 16px; font-size: 15px; color: #a1a1aa; line-height: 1.7; }
    .btn { display: inline-block; background: linear-gradient(135deg, #7c3aed, #4f46e5); color: #fff; font-size: 14px; font-weight: 600; padding: 12px 24px; border-radius: 8px; text-decoration: none; margin: 8px 0 16px; }
    .divider { border: none; border-top: 1px solid #27272a; margin: 24px 0; }
    .detail-row { display: flex; gap: 8px; margin-bottom: 10px; font-size: 14px; color: #a1a1aa; }
    .detail-label { color: #71717a; min-width: 80px; }
    .detail-value { color: #e4e4e7; font-weight: 500; }
    .footer { margin-top: 32px; font-size: 12px; color: #52525b; text-align: center; line-height: 1.6; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="logo">Claude Code Workshop</div>
    <div class="card">${content}</div>
    <div class="footer">
      You received this because you registered for the Claude Code for Non-Coders workshop.<br/>
      © 2025 Claude Code Workshop. All rights reserved.
    </div>
  </div>
</body>
</html>`
}

export async function sendDay0Email(to: string, name: string, role?: string) {
  const roleBlurb = role
    ? `As a <strong style="color:#e4e4e7">${role}</strong>, you're going to build things that used to require a dev team.`
    : `You're about to build things that used to require a dev team.`

  const html = baseTemplate(`
    <h1>You're registered. Let's build something. 🚀</h1>
    <p>Hey ${name},</p>
    <p>${roleBlurb} This workshop is designed for exactly where you are right now — curious, capable, and ready to move fast with AI.</p>
    <hr class="divider" />
    <p style="font-size:13px;color:#71717a;margin-bottom:12px;text-transform:uppercase;letter-spacing:0.06em;font-weight:600;">Workshop Details</p>
    <div class="detail-row"><span class="detail-label">Date</span><span class="detail-value">${WORKSHOP_DATE}</span></div>
    <div class="detail-row"><span class="detail-label">Time</span><span class="detail-value">${WORKSHOP_TIME}</span></div>
    <div class="detail-row"><span class="detail-label">Location</span><span class="detail-value">${WORKSHOP_LOCATION}</span></div>
    <hr class="divider" />
    <p>Here's what you'll walk away with:</p>
    <p>✦ AI workflows you built yourself — no code, no engineers<br/>
    ✦ A lead capture system that qualifies and follows up automatically<br/>
    ✦ Context engineering skills that make AI do exactly what you mean<br/>
    ✦ Scheduling and automation flows you can deploy same day</p>
    <p>We'll send you a short primer 24 hours before so you arrive ready to build from minute one.</p>
    <p style="color:#e4e4e7;font-weight:500;">See you there.</p>
    <p style="color:#71717a;font-size:14px;">— Panusorn & the Claude Code Workshop team</p>
  `)

  await getResend().emails.send({
    from: getFrom(),
    to,
    subject: `You're registered — here's what to expect 🎯`,
    html,
  })
}

export async function sendDay1Email(to: string, name: string) {
  const html = baseTemplate(`
    <h1>Before we start: your AI mindset shift</h1>
    <p>Hey ${name},</p>
    <p>Most people think AI is a search engine with better grammar. That's why they get mediocre results.</p>
    <p>What you're about to learn is different. <strong style="color:#e4e4e7">Vibe coding</strong> isn't about writing prompts — it's about thinking in systems. You describe what you want to achieve, and you let the AI figure out the how.</p>
    <p>It's closer to being a director than a programmer.</p>
    <hr class="divider" />
    <p style="color:#e4e4e7;font-weight:600;">One thing to try before the workshop:</p>
    <p>Open Claude (or ChatGPT) and instead of asking it a question, give it a <em>role</em>, a <em>goal</em>, and a <em>constraint</em>. Something like:</p>
    <p style="background:#09090b;border:1px solid #27272a;border-radius:8px;padding:16px;font-size:14px;color:#c084fc;font-family:monospace;line-height:1.6;">"You are a senior marketing strategist. My goal is to generate 10 qualified leads this week from LinkedIn. My constraint is I have 30 minutes a day. Give me a day-by-day action plan."</p>
    <p>Notice how the output changes. That's the beginning of context engineering.</p>
    <p style="color:#e4e4e7;font-weight:500;">See you soon.</p>
    <p style="color:#71717a;font-size:14px;">— Panusorn</p>
  `)

  await getResend().emails.send({
    from: getFrom(),
    to,
    subject: `Before we start: your AI mindset shift`,
    html,
  })
}

export async function sendDay3Email(to: string, name: string) {
  const html = baseTemplate(`
    <h1>A sneak peek at what you'll build</h1>
    <p>Hey ${name},</p>
    <p>Here's a real workflow you'll build during the workshop — from scratch, in under an hour, with zero code:</p>
    <hr class="divider" />
    <p style="color:#e4e4e7;font-weight:600;">The Lead Capture + Follow-Up Machine</p>
    <p>✦ A form that captures name, email, and intent<br/>
    ✦ An AI that qualifies each lead based on their answer<br/>
    ✦ An automatic email sequence that adjusts tone based on their role<br/>
    ✦ A Google Sheet that tracks everything in real time</p>
    <hr class="divider" />
    <p>This isn't a demo you watch. This is something you deploy before you leave the room.</p>
    <p>By the end of the day, you'll have 3–4 working AI workflows. The kind that used to take a developer two sprints.</p>
    <p style="color:#e4e4e7;font-weight:500;">Getting excited? Good. See you ${WORKSHOP_DATE}.</p>
    <p style="color:#71717a;font-size:14px;">— Panusorn</p>
  `)

  await getResend().emails.send({
    from: getFrom(),
    to,
    subject: `A sneak peek at what you'll build in the workshop`,
    html,
  })
}

export async function sendDay7Email(to: string, name: string) {
  const html = baseTemplate(`
    <h1>One week until you ship your first AI workflow</h1>
    <p>Hey ${name},</p>
    <p>One week from now you'll have built and deployed AI workflows that most teams are still writing requirements docs for.</p>
    <p>A quick recap of what's waiting for you:</p>
    <p>
    <strong style="color:#e4e4e7">AI Workflow Orchestration</strong> — chain AI tasks into automated pipelines<br/><br/>
    <strong style="color:#e4e4e7">Context Engineering</strong> — talk to AI like a senior engineer, not a search bar<br/><br/>
    <strong style="color:#e4e4e7">Lead Capture Systems</strong> — build smart forms that qualify and follow up<br/><br/>
    <strong style="color:#e4e4e7">Scheduling Automation</strong> — eliminate manual coordination forever
    </p>
    <hr class="divider" />
    <p style="color:#e4e4e7;font-weight:600;">What to bring:</p>
    <p>✦ A laptop (any OS)<br/>
    ✦ A Claude or ChatGPT account (free tier is fine)<br/>
    ✦ One real workflow problem from your work you'd love to automate</p>
    <p>That last one is the most important. We'll solve it live.</p>
    <p style="color:#e4e4e7;font-weight:500;">See you soon, ${name}.</p>
    <p style="color:#71717a;font-size:14px;">— Panusorn</p>
  `)

  await getResend().emails.send({
    from: getFrom(),
    to,
    subject: `One week until the workshop — here's your prep checklist`,
    html,
  })
}

export async function sendDayMinus1Email(to: string, name: string) {
  const html = baseTemplate(`
    <h1>Tomorrow is the day ✦</h1>
    <p>Hey ${name},</p>
    <p>Tomorrow you'll build your first AI-powered workflow. Here's everything you need to know before you arrive.</p>
    <hr class="divider" />
    <p style="color:#e4e4e7;font-weight:600;">Your checklist:</p>
    <p>
    ☑ Laptop charged and ready<br/>
    ☑ Claude.ai account logged in (claude.ai — free tier works)<br/>
    ☑ Google account handy (for Sheets integration)<br/>
    ☑ One real workflow problem you want to automate<br/>
    ☑ Arrive with curiosity, not anxiety — no code required
    </p>
    <hr class="divider" />
    <div class="detail-row"><span class="detail-label">Date</span><span class="detail-value">${WORKSHOP_DATE}</span></div>
    <div class="detail-row"><span class="detail-label">Time</span><span class="detail-value">${WORKSHOP_TIME}</span></div>
    <div class="detail-row"><span class="detail-label">Location</span><span class="detail-value">${WORKSHOP_LOCATION}</span></div>
    <hr class="divider" />
    <p>If you have any last-minute questions, reply to this email directly. I'll be checking until tonight.</p>
    <p style="color:#e4e4e7;font-weight:500;">See you tomorrow, ${name}. Let's build something real.</p>
    <p style="color:#71717a;font-size:14px;">— Panusorn</p>
  `)

  await getResend().emails.send({
    from: getFrom(),
    to,
    subject: `Tomorrow is the day — your final checklist ✦`,
    html,
  })
}
