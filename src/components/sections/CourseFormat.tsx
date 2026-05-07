'use client'

import { motion } from 'framer-motion'

const WORKSHOP_DATE = process.env.NEXT_PUBLIC_WORKSHOP_DATE_DISPLAY ?? 'Coming Soon'
const WORKSHOP_TIME = process.env.NEXT_PUBLIC_WORKSHOP_TIME ?? '9:00 AM – 5:00 PM (ICT)'
const WORKSHOP_LOCATION = process.env.NEXT_PUBLIC_WORKSHOP_LOCATION ?? 'Bangkok, Thailand'

const details = [
  { label: 'Date', value: WORKSHOP_DATE },
  { label: 'Time', value: WORKSHOP_TIME },
  { label: 'Duration', value: 'Full day — 8 hours' },
  { label: 'Location', value: WORKSHOP_LOCATION },
  { label: 'Format', value: 'In-person · Hands-on builds' },
  { label: 'Class size', value: 'Limited seats' },
]

const toBring = [
  'Laptop (any OS)',
  'Claude.ai account (free tier is fine)',
  'Google account (for Sheets integration)',
  'One workflow problem from your actual work',
]

const tags = ['AI Systems', 'Marketing Automation', 'Digital Transformation', 'Funnel Optimization', 'Chatbot Development', 'Growth Strategy']

export default function CourseFormat() {
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
          <p className="text-xs uppercase tracking-widest text-violet-400 font-semibold mb-4">Course format</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-50 tracking-tight mb-4">
            What the day looks like.
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Everything you need to know before you register. No surprises.
          </p>
        </motion.div>

        {/* Two-column logistics card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid md:grid-cols-2 gap-5 mb-12"
        >
          {/* Workshop details */}
          <div className="p-6 bg-zinc-900/60 border border-zinc-800 rounded-2xl">
            <p className="text-xs uppercase tracking-widest text-violet-400 font-semibold mb-5">Workshop details</p>
            <div className="space-y-4">
              {details.map(({ label, value }) => (
                <div key={label} className="flex gap-4">
                  <span className="text-xs text-zinc-600 uppercase tracking-wider font-medium w-20 shrink-0 pt-0.5">{label}</span>
                  <span className="text-sm text-zinc-200 font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What to bring */}
          <div className="p-6 bg-zinc-900/60 border border-zinc-800 rounded-2xl">
            <p className="text-xs uppercase tracking-widest text-violet-400 font-semibold mb-5">What to bring</p>
            <ul className="space-y-3">
              {toBring.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                  <svg className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-5 border-t border-zinc-800">
              <p className="text-xs text-zinc-500 leading-relaxed">
                The last item is the most important. Bring a real problem — we&apos;ll solve it live together before the day ends.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Instructor bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-8 bg-zinc-900/60 border border-zinc-800 rounded-2xl"
        >
          <p className="text-xs uppercase tracking-widest text-violet-400 font-semibold mb-6">Your instructor</p>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center text-xl font-bold text-white shadow-lg shadow-violet-900/40">
              PS
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-zinc-50 mb-0.5">Panusorn Srijamorn</h3>
              <p className="text-violet-400 text-sm font-medium mb-4">Head of Technology · Business Consultant · AI & Automation Specialist</p>
              <div className="space-y-3 text-zinc-400 text-sm leading-relaxed">
                <p>
                  Panusorn specializes in AI, Automation, and Digital Transformation — helping brands design, build, and optimize digital solutions that deliver measurable growth. With years of experience leading cross-functional teams in a Performance Creative Agency, he bridges the gap between business vision and technical execution.
                </p>
                <p>
                  Sometimes that means AI systems that think smarter, sometimes automation flows that work harder, and sometimes business strategies that scale bigger. He&apos;s always chasing depth and possibility.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mt-5">
                {tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-zinc-800 border border-zinc-700 rounded-full text-xs text-zinc-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <a
            href="#register"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white text-base font-semibold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-violet-500/25 active:scale-[0.98]"
          >
            Reserve Your Spot — 999 THB
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  )
}
