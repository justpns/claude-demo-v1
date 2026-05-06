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
            'w-full px-4 py-3 bg-zinc-900 border rounded-lg text-zinc-100 placeholder-zinc-500 text-sm transition-colors',
            'focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500',
            error ? 'border-red-500' : 'border-zinc-700 hover:border-zinc-600',
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-xs text-red-400">{error}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
export default Input
