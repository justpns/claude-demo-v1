'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Learn the mental model',
    description: 'Stop thinking like a user. Start thinking like a director. We\'ll teach you how AI thinks, how to give it context, and how to chain instructions into systems — not single prompts.',
    tag: 'Morning session',
  },
  {
    number: '02',
    title: 'Build your first workflow',
    description: 'Hands-on from minute one. You\'ll build a real, working AI workflow — lead capture, email automation, or scheduling — with guidance but no hand-holding. Real output. Real deployment.',
    tag: 'Afternoon session',
  },
  {
    number: '03',
    title: 'Ship before you leave',
    description: 'Every attendee walks away with 3–4 deployed workflows. Not prototypes. Not demos. Things that run while you sleep. And the skills to build the next one without us.',
    tag: 'End of day',
  },
]

export default function HowItWorks() {
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
          <p className="text-xs uppercase tracking-widest text-violet-600 font-semibold mb-4">How it works</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            One day. Three phases. Real output.
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-[2.75rem] left-[calc(16.67%-1px)] right-[calc(16.67%-1px)] h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.12 }}
                className="relative"
              >
                <div className="flex lg:flex-col gap-5">
                  {/* Step number circle */}
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-xs font-bold text-violet-600 font-mono">
                    {step.number}
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 mb-2 font-medium uppercase tracking-wider">{step.tag}</p>
                    <h3 className="font-bold text-slate-900 text-lg mb-3 leading-snug">{step.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
