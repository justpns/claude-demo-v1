'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const modules = [
  {
    number: '01',
    title: 'The Vibe Coding Mindset',
    duration: '60 min',
    description: 'Understand the paradigm shift from using AI as a tool to directing AI as a system. Learn the director\'s mental model, why syntax doesn\'t matter, and how to think in outcomes.',
    topics: ['Why vibe coding beats prompt hacking', 'Thinking in systems, not single commands', 'The director vs. executor framework', 'Common mental model mistakes and how to avoid them'],
  },
  {
    number: '02',
    title: 'Context Engineering Fundamentals',
    duration: '75 min',
    description: 'The single skill that separates power users from casual users. Learn to structure context so AI produces consistently excellent, production-ready output.',
    topics: ['Role, goal, constraint — the context trifecta', 'Layering instructions for complex tasks', 'Managing AI memory and state across a session', 'Templates you can reuse across any project'],
  },
  {
    number: '03',
    title: 'Workflow Orchestration with Claude Code',
    duration: '90 min',
    description: 'Chain individual AI tasks into end-to-end automated pipelines. Build workflows that accept inputs, process them through AI, and return structured outputs — all without writing code.',
    topics: ['Anatomy of an AI workflow', 'Chaining tasks and passing context', 'Handling conditionals and branching logic', 'Live build: your first automated pipeline'],
  },
  {
    number: '04',
    title: 'Lead Capture Systems',
    duration: '75 min',
    description: 'Build a complete lead qualification system. A smart form, an AI that reads responses and classifies intent, a Google Sheet that tracks everything, and triggers for follow-up.',
    topics: ['Designing the capture form', 'AI qualification logic', 'Google Sheets as a lightweight CRM', 'Triggering the right action based on lead score'],
  },
  {
    number: '05',
    title: 'AI Follow-Up Automation',
    duration: '75 min',
    description: 'Build email sequences that feel human but run automatically. Timing, tone personalization based on role, and escalation logic — all driven by AI.',
    topics: ['Sequence architecture and timing strategy', 'Role-aware personalization', 'Writing email copy with AI', 'Connecting to Resend for transactional email delivery'],
  },
  {
    number: '06',
    title: 'Scheduling & Calendar Automation',
    duration: '60 min',
    description: 'Eliminate the back-and-forth of calendar coordination. Build AI-powered booking flows, automated reminders, and rescheduling logic.',
    topics: ['Calendar API basics without code', 'AI-driven scheduling logic', 'Automated reminder sequences', 'Handling conflicts and edge cases'],
  },
  {
    number: '07',
    title: 'Building Your First AI Product',
    duration: '90 min',
    description: 'Bring it all together. Each attendee picks a real problem from their work and builds a complete, deployable AI-powered solution using everything from the day.',
    topics: ['Scoping your problem for a one-day build', 'Combining workflow modules', 'Connecting your product to the web', 'Final deploy and demo'],
  },
  {
    number: '08',
    title: 'What\'s Next',
    duration: '30 min',
    description: 'The AI landscape moves fast. Leave with a roadmap for extending your workflows, a community to grow with, and a clear path to building more ambitious systems.',
    topics: ['Extending and scaling what you built', 'Staying ahead of the AI curve', 'Resources and communities for continued learning', 'Q&A'],
  },
]

export default function Curriculum() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="curriculum" className="py-24 px-6 border-t border-zinc-800/60">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-violet-400 font-semibold mb-4">Curriculum</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-50 tracking-tight mb-4">
            Eight modules. Full day.
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Every module ends with something deployed. Click any module to see what you&apos;ll build inside it.
          </p>
        </motion.div>

        <div className="space-y-3">
          {modules.map((mod, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="border border-zinc-800 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center gap-4 p-5 text-left hover:bg-zinc-900/60 transition-colors"
              >
                <span className="text-xs font-mono text-violet-500 shrink-0 w-7">{mod.number}</span>
                <span className="font-semibold text-zinc-100 flex-1 text-sm">{mod.title}</span>
                <span className="text-xs text-zinc-500 shrink-0 mr-3">{mod.duration}</span>
                <svg
                  className={`w-4 h-4 text-zinc-500 shrink-0 transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 border-t border-zinc-800">
                      <p className="text-zinc-400 text-sm leading-relaxed mt-4 mb-4">{mod.description}</p>
                      <ul className="space-y-1.5">
                        {mod.topics.map((topic, j) => (
                          <li key={j} className="flex items-start gap-2 text-xs text-zinc-500">
                            <span className="text-violet-500 mt-0.5">✦</span>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
