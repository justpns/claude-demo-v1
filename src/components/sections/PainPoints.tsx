'use client'

import { motion } from 'framer-motion'

const pains = [
  { emoji: '👀', text: 'You watch developers ship AI features while you write the requirements doc.' },
  { emoji: '🧱', text: 'You\'ve tried no-code tools but hit a ceiling every single time.' },
  { emoji: '⏳', text: 'You spend hours on tasks that an AI workflow could handle in seconds.' },
  { emoji: '💡', text: 'You have ideas for AI-powered products but can\'t execute without an engineer.' },
  { emoji: '🤷', text: 'You know AI is the future — you just haven\'t found your entry point yet.' },
  { emoji: '🔄', text: 'You\'re still manually doing work that your competitors are automating.' },
]

export default function PainPoints() {
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
          <p className="text-xs uppercase tracking-widest text-violet-400 font-semibold mb-4">Sound familiar?</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-50 tracking-tight">
            You don&apos;t need to learn to code.
            <br />
            <span className="text-zinc-400">You need to learn to direct.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="flex gap-4 p-5 bg-zinc-900/50 border border-zinc-800/70 rounded-xl hover:border-zinc-700 transition-colors"
            >
              <span className="text-2xl shrink-0 mt-0.5">{pain.emoji}</span>
              <p className="text-zinc-400 text-sm leading-relaxed">{pain.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-zinc-300 text-lg max-w-2xl mx-auto">
            This workshop closes that gap. You leave with working AI workflows, not PowerPoint slides about AI potential.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
