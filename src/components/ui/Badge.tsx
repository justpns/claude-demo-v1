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
        variant === 'default' && 'bg-slate-100 border-slate-200 text-slate-600',
        variant === 'purple' && 'bg-violet-50 border-violet-200 text-violet-700',
        variant === 'blue' && 'bg-blue-50 border-blue-200 text-blue-700',
        variant === 'green' && 'bg-emerald-50 border-emerald-200 text-emerald-700',
        className
      )}
    >
      {children}
    </span>
  )
}
