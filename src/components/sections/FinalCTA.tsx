'use client'

import { motion } from 'framer-motion'
import RegisterForm from '@/components/RegisterForm'

export default function FinalCTA() {
  return (
    <section id="register" className="py-24 px-6 border-t border-zinc-800/60 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-xs uppercase tracking-widest text-violet-400 font-semibold mb-4">Reserve your seat</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-50 tracking-tight mb-4">
            Stop watching. Start building.
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            One day. Real workflows. Deployed before you leave.
            <br />
            <strong className="text-zinc-200 font-medium">999 THB</strong> · Limited seats available.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <RegisterForm />
        </motion.div>
      </div>
    </section>
  )
}
