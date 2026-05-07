import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Claude Code for Non-Coders — Build AI Workflows Without Writing Code',
  description:
    'A hands-on workshop for PMs, marketers, founders, and operators. Learn AI workflow orchestration and vibe coding — no coding experience required. 999 THB.',
  keywords: ['AI workshop', 'vibe coding', 'Claude Code', 'no-code AI', 'AI workflow', 'Bangkok', 'Thailand'],
  openGraph: {
    title: 'Claude Code for Non-Coders',
    description: 'Build AI-Powered Workflows Using Pure Vibe Coding. No code required.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-slate-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
