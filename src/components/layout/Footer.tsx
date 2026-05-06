export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/60 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
            <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-sm font-medium text-zinc-400">Claude Code Workshop</span>
        </div>
        <p className="text-xs text-zinc-600 text-center">
          © 2025 Claude Code Workshop by Panusorn Srijamorn. All rights reserved.
        </p>
        <p className="text-xs text-zinc-600">Bangkok, Thailand</p>
      </div>
    </footer>
  )
}
