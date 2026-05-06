'use client'

import { motion } from 'framer-motion'

const outcomes = [
  {
    icon: '⚡',
    title: 'AI Workflow Orchestration',
    description: 'Chain AI tasks into automated pipelines that run without you. Build end-to-end flows from a single prompt.',
    color: 'from-violet-500/20 to-purple-500/5',
    border: 'border-violet-800/40',
    accent: 'text-violet-400',
  },
  {
    icon: '🎯',
    title: 'Context Engineering',
    description: 'Talk to AI like a senior engineer, not a search bar. Get consistent, production-quality output every time.',
    color: 'from-indigo-500/20 to-blue-500/5',
    border: 'border-indigo-800/40',
    accent: 'text-indigo-400',
  },
  {
    icon: '🚀',
    title: 'AI-Powered Product Building',
    description: 'Go from idea to working prototype in hours. No engineers, no sprints — just you, Claude, and a goal.',
    color: 'from-blue-500/20 to-cyan-500/5',
    border: 'border-blue-800/40',
    accent: 'text-blue-400',
  },
  {
    icon: '🎣',
    title: 'Lead Capture Systems',
    description: 'Build smart forms that qualify leads automatically and trigger the right response based on their answers.',
    color: 'from-cyan-500/20 to-teal-500/5',
    border: 'border-cyan-800/40',
    accent: 'text-cyan-400',
  },
  {
    icon: '📬',
    title: 'AI Follow-Up Workflows',
    description: 'Automate nurture sequences that feel human. Personalized emails at the right time, without touching a keyboard.',
    color: 'from-teal-500/20 to-emerald-500/5',
    border: 'border-teal-800/40',
    accent: 'text-teal-400',
  },
  {
    icon: '📅',
    title: 'Scheduling Automation',
    description: 'Eliminate the coordination tax. AI handles booking, reminders, and rescheduling so you never chase a calendar again.',
    color: 'from-emerald-500/20 to-green-500/5',
    border: 'border-emerald-800/40',
    accent: 'text-emerald-400',
  },
]

export default function WhatYouLearn() {
  return (
    <section className="py-24 px-6 border-t border-zinc-800/60">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-violet-400 font-semibold mb-4">What you&apos;ll build</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-50 tracking-tight mb-4">
            Six outcomes. One day. Zero code.
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-lg">
            Every module ends with something deployed — not a tutorial finished.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {outcomes.map((outcome, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className={`relative p-6 bg-gradient-to-br ${outcome.color} border ${outcome.border} rounded-2xl overflow-hidden group hover:border-opacity-80 transition-all duration-300`}
            >
              <div className="mb-4">
                <span className="text-3xl">{outcome.icon}</span>
              </div>
              <h3 className={`font-semibold text-base mb-2 ${outcome.accent}`}>{outcome.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{outcome.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
