'use client'

import { motion } from 'framer-motion'

const roles = [
  { title: 'Product Managers', description: 'Ship faster without waiting for dev capacity', emoji: '📦' },
  { title: 'Business Analysts', description: 'Turn data insights into automated reporting flows', emoji: '📊' },
  { title: 'UX / UI Designers', description: 'Prototype AI-powered interfaces and test in hours', emoji: '🎨' },
  { title: 'Marketers & Growth', description: 'Build lead capture and nurture systems that run 24/7', emoji: '📈' },
  { title: 'Founders & CEOs', description: 'Validate ideas and build MVPs without hiring a team', emoji: '🚀' },
  { title: 'Operations Leads', description: 'Automate the coordination tax eating your calendar', emoji: '⚙️' },
  { title: 'Consultants', description: 'Deliver AI-powered deliverables your clients can\'t get elsewhere', emoji: '💼' },
  { title: 'Everyone else', description: 'If you have workflows that feel manual and repetitive — this is for you', emoji: '✦' },
]

export default function ForWho() {
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
          <p className="text-xs uppercase tracking-widest text-violet-400 font-semibold mb-4">Who this is for</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-50 tracking-tight mb-4">
            Built for builders without code.
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto text-lg">
            If you can think in outcomes and communicate clearly, you can build AI workflows. No prior technical experience required.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {roles.map((role, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="p-5 bg-zinc-900/60 border border-zinc-800/70 rounded-xl hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-200"
            >
              <span className="text-2xl block mb-3">{role.emoji}</span>
              <h3 className="font-semibold text-zinc-100 text-sm mb-1.5">{role.title}</h3>
              <p className="text-zinc-500 text-xs leading-relaxed">{role.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 p-6 bg-violet-950/30 border border-violet-800/30 rounded-2xl text-center"
        >
          <p className="text-violet-300 font-medium mb-1">Not a coder? That&apos;s the point.</p>
          <p className="text-zinc-400 text-sm">This workshop was designed specifically for people who think in outcomes, not syntax. If you can describe what you want — you can build it.</p>
        </motion.div>
      </div>
    </section>
  )
}
