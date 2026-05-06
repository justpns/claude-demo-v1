'use client'

import { motion } from 'framer-motion'

export default function Instructor() {
  return (
    <section id="instructor" className="py-24 px-6 border-t border-zinc-800/60">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-violet-400 font-semibold mb-4">Your instructor</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-50 tracking-tight">
            Built by a practitioner, not a professor.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-8 md:p-10"
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Avatar */}
            <div className="shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-violet-900/40">
                PS
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-bold text-zinc-50 mb-1">Panusorn Srijamorn</h3>
              <p className="text-violet-400 text-sm font-medium mb-5">Head of Technology · Business Consultant · AI & Automation Specialist</p>

              <div className="space-y-4 text-zinc-400 text-sm leading-relaxed">
                <p>
                  Panusorn specializes in AI, Automation, and Digital Transformation — helping brands design, build, and optimize digital solutions that deliver measurable growth. With years of experience leading cross-functional teams in a Performance Creative Agency, he bridges the gap between business vision and technical execution.
                </p>
                <p>
                  Sometimes that means AI systems that think smarter, sometimes automation flows that work harder, and sometimes business strategies that scale bigger.
                </p>
                <p>
                  For Panusorn, growth isn&apos;t just about numbers — it&apos;s about momentum, creativity, and pushing boundaries. Whether it&apos;s optimizing a funnel, building a chatbot that feels human, or exploring the next reef, he&apos;s always chasing depth and possibility.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {['AI Systems', 'Marketing Automation', 'Digital Transformation', 'Funnel Optimization', 'Chatbot Development', 'Growth Strategy'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-zinc-800 border border-zinc-700 rounded-full text-xs text-zinc-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
