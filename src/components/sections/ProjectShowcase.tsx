'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    icon: '🎣',
    title: 'Lead Capture Machine',
    description: 'A smart form that qualifies leads automatically and triggers the right response based on their answers.',
    includes: [
      'Multi-field intake form with role detection',
      'AI scoring logic — qualifies intent on submission',
      'Google Sheet CRM + instant email trigger',
    ],
    modules: 'Modules 03 + 04',
    color: 'border-violet-100',
    tag: 'bg-violet-50 text-violet-700 border border-violet-200',
  },
  {
    icon: '📬',
    title: 'Role-Aware Email Sequence',
    description: 'A 5-email nurture chain that adjusts tone, content, and timing based on the lead\'s job role.',
    includes: [
      'Personalized copy per role (PM, Founder, Marketer)',
      'Day 0 / 1 / 3 / 7 / -1 timing logic',
      'Resend integration — fires automatically, zero manual sends',
    ],
    modules: 'Module 05',
    color: 'border-indigo-100',
    tag: 'bg-indigo-50 text-indigo-700 border border-indigo-200',
  },
  {
    icon: '📅',
    title: 'Auto-Scheduling Bot',
    description: 'A calendar booking flow with AI-powered availability matching, confirmation emails, and reminders.',
    includes: [
      'Booking link with smart slot detection',
      'Automated confirmation + 24h reminder',
      'Conflict handling and rescheduling logic',
    ],
    modules: 'Module 06',
    color: 'border-blue-100',
    tag: 'bg-blue-50 text-blue-700 border border-blue-200',
  },
  {
    icon: '⚡',
    title: 'AI Intake & Routing Flow',
    description: 'An end-to-end intake system: form submission → AI scorer → automatic routing based on lead quality.',
    includes: [
      'Intake form with open-ended intent field',
      'Claude scores and classifies the response',
      'Routes high-intent leads to priority follow-up',
    ],
    modules: 'Modules 03 + 07',
    color: 'border-cyan-100',
    tag: 'bg-cyan-50 text-cyan-700 border border-cyan-200',
  },
]

export default function ProjectShowcase() {
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
          <p className="text-xs uppercase tracking-widest text-violet-600 font-semibold mb-4">Live project showcase</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Real workflows. Built in one day.
          </h2>
          <p className="text-slate-600 text-lg max-w-xl mx-auto">
            Every project below is built from scratch during the workshop. No templates. No starter code. Just you, Claude Code, and a goal.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.09 }}
              className={`p-6 bg-white border ${project.color} rounded-2xl flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow duration-200`}
            >
              <div className="flex items-start justify-between gap-3">
                <span className="text-3xl">{project.icon}</span>
                <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${project.tag}`}>
                  {project.modules}
                </span>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 text-base mb-2">{project.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{project.description}</p>
              </div>

              <ul className="space-y-2 pt-2 border-t border-slate-100">
                {project.includes.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-slate-500">
                    <span className="text-violet-500 shrink-0 mt-0.5">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-xs text-slate-400 mt-8"
        >
          Demo builds from our workshop curriculum — built from scratch, deployed the same day.
        </motion.p>

      </div>
    </section>
  )
}
