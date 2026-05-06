import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'purple' | 'blue' | 'green'
  className?: string
}

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border',
        variant === 'default' && 'bg-zinc-900 border-zinc-700 text-zinc-300',
        variant === 'purple' && 'bg-violet-950/50 border-violet-800/50 text-violet-300',
        variant === 'blue' && 'bg-blue-950/50 border-blue-800/50 text-blue-300',
        variant === 'green' && 'bg-emerald-950/50 border-emerald-800/50 text-emerald-300',
        className
      )}
    >
      {children}
    </span>
  )
}
