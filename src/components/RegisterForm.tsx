'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema, type RegisterInput } from '@/lib/validations'
import type { RegisterApiResponse } from '@/types'
import Input from '@/components/ui/Input'

const ROLES = [
  'Product Manager',
  'Business Analyst',
  'UX / UI Designer',
  'Marketing / Growth',
  'Founder / CEO',
  'Operations',
  'Consultant',
  'Other',
]

export default function RegisterForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  })

  const onSubmit = async (data: RegisterInput) => {
    setStatus('loading')
    setErrorMessage('')

    const source = typeof window !== 'undefined'
      ? new URLSearchParams(window.location.search).get('utm_source') ?? 'direct'
      : 'direct'

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, source }),
      })

      const json: RegisterApiResponse = await res.json()

      if (json.success) {
        setStatus('success')
      } else {
        setStatus('error')
        setErrorMessage(json.error ?? 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-emerald-950/40 border border-emerald-800/50 rounded-2xl p-8 text-center">
        <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="font-bold text-zinc-50 text-xl mb-2">You&apos;re registered! 🎉</h3>
        <p className="text-zinc-400 text-sm leading-relaxed">
          Check your inbox — a confirmation email is on its way. We&apos;ll see you at the workshop.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-8 text-left space-y-4"
    >
      <div>
        <label className="block text-xs font-medium text-zinc-400 mb-1.5">
          Full Name <span className="text-red-400">*</span>
        </label>
        <Input
          {...register('name')}
          placeholder="Your name"
          error={errors.name?.message}
          disabled={status === 'loading'}
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-zinc-400 mb-1.5">
          Email Address <span className="text-red-400">*</span>
        </label>
        <Input
          {...register('email')}
          type="email"
          placeholder="you@company.com"
          error={errors.email?.message}
          disabled={status === 'loading'}
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-zinc-400 mb-1.5">
          Your Role <span className="text-zinc-600 font-normal">(optional)</span>
        </label>
        <select
          {...register('role')}
          disabled={status === 'loading'}
          className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 hover:border-zinc-600 rounded-lg text-zinc-100 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <option value="">Select your role</option>
          {ROLES.map((role) => (
            <option key={role} value={role}>{role}</option>
          ))}
        </select>
      </div>

      {status === 'error' && (
        <p className="text-red-400 text-sm bg-red-950/30 border border-red-800/40 rounded-lg px-4 py-3">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-violet-500/25 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:from-violet-600 disabled:hover:to-indigo-600"
      >
        {status === 'loading' ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Registering...
          </>
        ) : (
          <>
            Reserve My Spot — 999 THB
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </>
        )}
      </button>

      <p className="text-center text-xs text-zinc-600">
        By registering you agree to receive workshop communications. No spam, ever.
      </p>
    </form>
  )
}
