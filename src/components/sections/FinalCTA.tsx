'use client'

import { motion } from 'framer-motion'
import RegisterForm from '@/components/RegisterForm'

export default function FinalCTA() {
  return (
    <section id="register" className="pt-6 pb-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-600/6 rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <RegisterForm />
        </motion.div>
      </div>
    </section>
  )
}
