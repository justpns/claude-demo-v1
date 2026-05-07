import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:opacity-50 disabled:pointer-events-none',
          variant === 'primary' && 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:from-violet-500 hover:to-indigo-500 hover:shadow-lg hover:shadow-violet-500/25 active:scale-[0.98]',
          variant === 'secondary' && 'border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300',
          variant === 'ghost' && 'text-slate-600 hover:text-slate-900 hover:bg-slate-100',
          size === 'sm' && 'text-sm px-4 py-2',
          size === 'md' && 'text-sm px-5 py-2.5',
          size === 'lg' && 'text-base px-7 py-3.5',
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
export default Button
