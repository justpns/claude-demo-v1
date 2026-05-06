import { NextRequest, NextResponse } from 'next/server'
import { registerSchema } from '@/lib/validations'
import { appendLead } from '@/lib/sheets'
import { sendDay0Email } from '@/lib/email'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const parsed = registerSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.errors[0]?.message ?? 'Invalid input' },
        { status: 400 }
      )
    }

    const { name, email, role } = parsed.data
    const source = (body.source as string) ?? 'direct'

    await appendLead({
      email,
      name,
      role,
      source,
      registeredAt: new Date().toISOString(),
    })

    await sendDay0Email(email, name, role)

    return NextResponse.json({ success: true, message: 'Registration successful' })
  } catch (err) {
    console.error('[register] error:', err)
    return NextResponse.json(
      { success: false, error: 'Registration failed. Please try again.' },
      { status: 500 }
    )
  }
}
