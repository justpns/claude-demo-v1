'use client'

import { motion } from 'framer-motion'

const includes = [
  'Full-day hands-on workshop (8 hours)',
  '8 structured modules with live builds',
  '3–4 deployed AI workflows you built yourself',
  'Workflow templates and starter kits',
  'Lifetime access to workshop materials',
  'Private community access post-workshop',
  'Direct access to instructor during the day',
  'Personalised workflow review session',
]

export default function Pricing() {
  return (
    <section className="py-24 px-6 border-t border-zinc-800/60">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-xs uppercase tracking-widest text-violet-400 font-semibold mb-4">Investment</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-50 tracking-tight">
            One price. Full access.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-700 rounded-2xl overflow-hidden"
        >
          {/* Top accent bar */}
          <div className="h-0.5 w-full bg-gradient-to-r from-violet-500 via-indigo-500 to-blue-500" />

          <div className="p-8">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-5xl font-bold text-zinc-50">999</span>
              <span className="text-2xl font-semibold text-zinc-300">THB</span>
            </div>
            <p className="text-zinc-500 text-sm mb-8">One-time payment · No recurring fees</p>

            <ul className="space-y-3 mb-8">
              {includes.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                  <svg className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#register"
              className="block w-full text-center px-6 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-violet-500/25 active:scale-[0.99]"
            >
              Reserve Your Spot Now
            </a>

            <p className="text-center text-xs text-zinc-600 mt-4">
              Seats are limited. Registration closes when full.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
