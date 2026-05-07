'use client'

import { motion } from 'framer-motion'

const outcomes = [
  {
    icon: '⚡',
    title: 'AI Workflow Orchestration',
    description: 'Chain AI tasks into automated pipelines that run without you. Build end-to-end flows from a single prompt.',
    color: 'from-violet-50 to-purple-50/50',
    border: 'border-violet-200',
    accent: 'text-violet-600',
  },
  {
    icon: '🎯',
    title: 'Context Engineering',
    description: 'Talk to AI like a senior engineer, not a search bar. Get consistent, production-quality output every time.',
    color: 'from-indigo-50 to-blue-50/50',
    border: 'border-indigo-200',
    accent: 'text-indigo-600',
  },
  {
    icon: '🚀',
    title: 'AI-Powered Product Building',
    description: 'Go from idea to working prototype in hours. No engineers, no sprints — just you, Claude, and a goal.',
    color: 'from-blue-50 to-cyan-50/50',
    border: 'border-blue-200',
    accent: 'text-blue-600',
  },
  {
    icon: '🎣',
    title: 'Lead Capture Systems',
    description: 'Build smart forms that qualify leads automatically and trigger the right response based on their answers.',
    color: 'from-cyan-50 to-teal-50/50',
    border: 'border-cyan-200',
    accent: 'text-cyan-600',
  },
  {
    icon: '📬',
    title: 'AI Follow-Up Workflows',
    description: 'Automate nurture sequences that feel human. Personalized emails at the right time, without touching a keyboard.',
    color: 'from-teal-50 to-emerald-50/50',
    border: 'border-teal-200',
    accent: 'text-teal-600',
  },
  {
    icon: '📅',
    title: 'Scheduling Automation',
    description: 'Eliminate the coordination tax. AI handles booking, reminders, and rescheduling so you never chase a calendar again.',
    color: 'from-emerald-50 to-green-50/50',
    border: 'border-emerald-200',
    accent: 'text-emerald-600',
  },
]

export default function WhatYouLearn() {
  return (
    <section className="py-24 px-6 bg-slate-50 border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-violet-600 font-semibold mb-4">What you&apos;ll build</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Six outcomes. One day. Zero code.
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-lg">
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
              className={`relative p-6 bg-gradient-to-br ${outcome.color} border ${outcome.border} rounded-2xl overflow-hidden hover:shadow-md transition-shadow duration-200`}
            >
              <div className="mb-4">
                <span className="text-3xl">{outcome.icon}</span>
              </div>
              <h3 className={`font-semibold text-base mb-2 ${outcome.accent}`}>{outcome.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{outcome.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
