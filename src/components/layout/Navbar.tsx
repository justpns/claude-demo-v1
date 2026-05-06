'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [showCTA, setShowCTA] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      setShowCTA(window.scrollY > 500)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-sm font-semibold text-zinc-200">Claude Code Workshop</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-400">
          <a href="#curriculum" className="hover:text-zinc-100 transition-colors">Curriculum</a>
          <a href="#instructor" className="hover:text-zinc-100 transition-colors">Instructor</a>
          <a href="#faq" className="hover:text-zinc-100 transition-colors">FAQ</a>
        </nav>

        <div
          className={cn(
            'transition-all duration-300',
            showCTA ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1 pointer-events-none'
          )}
        >
          <a
            href="#register"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-violet-500/20"
          >
            Reserve Your Spot
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  )
}
