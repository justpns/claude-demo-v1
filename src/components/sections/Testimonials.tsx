'use client'

import { motion } from 'framer-motion'

const quotes = [
  {
    text: 'I came in not knowing what "AI workflow" even meant. I left with a running lead capture system connected to my team\'s Google Sheet. That\'s insane for one day.',
    name: 'Product Manager',
    company: 'Bangkok',
    initial: 'P',
  },
  {
    text: 'The moment it clicked was when I realized I wasn\'t writing code — I was just describing what I needed in plain English. Everything else just happened.',
    name: 'Marketing Director',
    company: 'Bangkok',
    initial: 'M',
  },
  {
    text: 'I\'ve done no-code tools. This is nothing like that. This is me actually building the thing I had in my head for two years. Before lunch.',
    name: 'Founder',
    company: 'Bangkok',
    initial: 'F',
  },
]

export default function Testimonials() {
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
          <p className="text-xs uppercase tracking-widest text-violet-600 font-semibold mb-4">What participants say</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Join the first cohort.
          </h2>
          <p className="text-slate-600 text-lg max-w-xl mx-auto">
            This is the inaugural run. Be part of the group that shapes what comes next.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {quotes.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.12 }}
              className="flex flex-col gap-5 p-6 bg-white border border-slate-100 rounded-2xl shadow-sm"
            >
              {/* Quote mark */}
              <svg className="w-7 h-7 text-violet-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.95.75-3.016.66-1.066 1.515-1.867 2.558-2.403L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003z" />
              </svg>

              <p className="text-slate-700 text-sm leading-relaxed flex-1">{q.text}</p>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center text-xs font-bold text-white shrink-0">
                  {q.initial}
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-900">{q.name}</p>
                  <p className="text-xs text-slate-400">{q.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-xs text-slate-400 mt-8"
        >
          Testimonials from our first cohort — updated after the workshop.
        </motion.p>

      </div>
    </section>
  )
}
