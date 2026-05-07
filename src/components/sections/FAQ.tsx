'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'Do I need to know how to code?',
    a: 'Absolutely not. This workshop was designed specifically for people who don\'t code. You\'ll be working with natural language instructions and AI-directed workflows. If you can write a clear email, you can build in this workshop.',
  },
  {
    q: 'What is "vibe coding"?',
    a: 'Vibe coding is the practice of describing what you want to achieve — the outcome, the constraints, the vibe — and letting AI figure out the how. You direct the system rather than write the implementation. It\'s closer to being a creative director than a programmer.',
  },
  {
    q: 'What is Claude Code?',
    a: 'Claude Code is Anthropic\'s AI coding assistant. In this workshop, we use it as an AI workflow engine — not to write code, but to orchestrate complex tasks, chain automations, and build functional systems through natural language. You don\'t need to understand the code it generates.',
  },
  {
    q: 'What tools do I need before the workshop?',
    a: 'Just a laptop and a Claude.ai account (free tier is fine) and a Google account. We\'ll handle the rest on the day. No software to install in advance.',
  },
  {
    q: 'Will I actually build something during the workshop?',
    a: 'Yes — that\'s the entire point. Every module ends with something deployed. You won\'t watch demos; you\'ll build the thing. By end of day, you\'ll have 3–4 working AI workflows you built and deployed yourself.',
  },
  {
    q: 'How long is the workshop?',
    a: 'It\'s a full-day workshop, approximately 8 hours including breaks. We run from 9:00 AM to 5:00 PM. Come hungry to build — it\'s an active day.',
  },
  {
    q: 'Is the workshop recorded?',
    a: 'Portions of the workshop materials are available to attendees after the event. However, the hands-on build sessions are live and in-person — there\'s no substitute for building alongside others in the room.',
  },
  {
    q: 'What is the refund policy?',
    a: 'Full refunds are available up to 7 days before the workshop. Within 7 days, your registration can be transferred to a future workshop date. We want you to show up ready, not reluctant.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 px-6 bg-slate-50 border-t border-slate-100">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-xs uppercase tracking-widest text-violet-600 font-semibold mb-4">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Questions, answered.
          </h2>
        </motion.div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="border border-slate-200 bg-white shadow-sm rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-medium text-slate-900 text-sm leading-snug">{faq.q}</span>
                <svg
                  className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`}
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
                    transition={{ duration: 0.22, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                      {faq.a}
                    </p>
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
