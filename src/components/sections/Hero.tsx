'use client'

import { motion } from 'framer-motion'
import Badge from '@/components/ui/Badge'

const WORKSHOP_DATE = process.env.NEXT_PUBLIC_WORKSHOP_DATE_DISPLAY ?? 'Coming Soon'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-mesh dot-grid overflow-hidden px-6 pt-24 pb-16">
      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <Badge variant="purple">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            Workshop · Bangkok · {WORKSHOP_DATE}
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-zinc-50 leading-[1.08] mb-4"
        >
          Build AI-Powered
          <br />
          <span className="gradient-text">Workflows.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl sm:text-3xl font-semibold text-zinc-400 mb-6 tracking-tight"
        >
          No code required.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          <strong className="text-zinc-200 font-medium">Claude Code for Non-Coders</strong> is the hands-on workshop where PMs, marketers, founders, and operators learn to orchestrate AI like a pro — using pure vibe coding.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
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
          <a
            href="#curriculum"
            className="inline-flex items-center gap-2 px-8 py-4 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-zinc-100 text-base font-semibold rounded-xl transition-all duration-200 hover:bg-zinc-900"
          >
            See What You&apos;ll Build
          </a>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-zinc-500"
        >
          {[
            { icon: '⚡', text: 'Hands-on, not lectures' },
            { icon: '✦', text: 'Build on Day 1' },
            { icon: '◎', text: 'Zero coding required' },
            { icon: '→', text: 'Deploy before you leave' },
          ].map(({ icon, text }) => (
            <span key={text} className="flex items-center gap-2">
              <span className="text-violet-400">{icon}</span>
              {text}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-zinc-600"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
