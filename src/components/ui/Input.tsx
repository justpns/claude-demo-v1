import { cn } from '@/lib/utils'
import { InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          ref={ref}
          className={cn(
            'w-full px-4 py-3 bg-white border rounded-lg text-slate-900 placeholder-slate-400 text-sm transition-colors',
            'focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-500',
            error ? 'border-red-400 focus:border-red-400 focus:ring-red-400/30' : 'border-slate-300 hover:border-slate-400',
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-xs text-red-600">{error}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
export default Input
