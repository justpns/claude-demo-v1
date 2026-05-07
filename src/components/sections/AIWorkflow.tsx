'use client'

import { motion } from 'framer-motion'

const before = [
  'Write a spec doc and hand it to the dev team',
  'Wait through sprint planning and backlog prioritization',
  'Review builds across 3+ revision cycles',
  'Depend on engineers for every small change',
  'Watch competitors move while you wait',
]

const after = [
  'Describe the outcome you want in plain English',
  'Claude Code structures and chains the workflow',
  'Review the output the same afternoon',
  'Deploy without writing a single line of code',
  'Move to the next problem before lunch',
]

const steps = [
  {
    n: '01',
    title: 'Describe',
    description: 'You explain what you want to achieve — not how to build it. Outcome, constraints, context. Plain English.',
    color: 'text-violet-600',
    border: 'border-violet-200',
    bg: 'bg-violet-50',
  },
  {
    n: '02',
    title: 'Orchestrate',
    description: 'Claude Code chains the tasks, structures the logic, and handles the complexity. You stay in the director\'s chair.',
    color: 'text-indigo-600',
    border: 'border-indigo-200',
    bg: 'bg-indigo-50',
  },
  {
    n: '03',
    title: 'Deploy',
    description: 'Your workflow goes live. No engineers. No waiting. Real output — shipped the same day you conceived the idea.',
    color: 'text-cyan-600',
    border: 'border-cyan-200',
    bg: 'bg-cyan-50',
  },
]

export default function AIWorkflow() {
  return (
    <section className="py-24 px-6 border-t border-slate-100">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-violet-600 font-semibold mb-4">A new way to work</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Stop typing prompts.
            <br />
            <span className="text-slate-400">Start directing systems.</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-xl mx-auto">
            Most people use AI like a smarter search engine. That&apos;s why they get mediocre results.
            What you&apos;re about to learn is different.
          </p>
        </motion.div>

        {/* Vibe coding definition */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16 max-w-3xl mx-auto p-6 bg-violet-50 border border-violet-200 rounded-2xl"
        >
          <p className="text-xs uppercase tracking-widest text-violet-600 font-semibold mb-3">What is vibe coding?</p>
          <p className="text-slate-800 text-lg leading-relaxed">
            <strong className="text-violet-700">Vibe coding</strong> is the practice of describing what you want to achieve — the outcome, the constraints, the vibe — and letting AI figure out the how. You&apos;re the <em>director</em>. AI is the executor. Syntax doesn&apos;t matter. Intent does.
          </p>
        </motion.div>

        {/* Before / After comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid md:grid-cols-2 gap-4 mb-16"
        >
          {/* Before */}
          <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Before</p>
            </div>
            <ul className="space-y-3">
              {before.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-500">
                  <svg className="w-4 h-4 text-red-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="p-6 bg-violet-50/50 border border-violet-200 rounded-2xl">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2 h-2 rounded-full bg-violet-500" />
              <p className="text-sm font-semibold text-violet-600 uppercase tracking-wider">After vibe coding</p>
            </div>
            <ul className="space-y-3">
              {after.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                  <svg className="w-4 h-4 text-violet-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* 3-step flow */}
        <div className="grid md:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.12 }}
              className={`p-6 ${step.bg} border ${step.border} rounded-2xl`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-xs font-mono font-bold ${step.color}`}>{step.n}</span>
                <div className="h-px flex-1 bg-slate-200" />
              </div>
              <h3 className={`text-xl font-bold mb-3 ${step.color}`}>{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <a href="#curriculum" className="text-sm text-violet-600 hover:text-violet-700 transition-colors">
            See exactly what you&apos;ll build in the curriculum →
          </a>
        </motion.div>

      </div>
    </section>
  )
}
