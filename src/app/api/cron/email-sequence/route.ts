import { NextRequest, NextResponse } from 'next/server'
import { getAllLeads, markEmailSent } from '@/lib/sheets'
import { sendDay1Email, sendDay3Email, sendDay7Email, sendDayMinus1Email } from '@/lib/email'

function daysSince(isoDate: string): number {
  const registered = new Date(isoDate)
  const now = new Date()
  const ms = now.getTime() - registered.getTime()
  return Math.floor(ms / (1000 * 60 * 60 * 24))
}

function daysUntilWorkshop(): number | null {
  const workshopDate = process.env.NEXT_PUBLIC_WORKSHOP_DATE
  if (!workshopDate) return null
  const workshop = new Date(workshopDate)
  const now = new Date()
  const ms = workshop.getTime() - now.getTime()
  return Math.floor(ms / (1000 * 60 * 60 * 24))
}

export async function GET(req: NextRequest) {
  // Protect against unauthorized triggers
  const secret = req.headers.get('x-cron-secret') ?? req.nextUrl.searchParams.get('secret')
  if (secret !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const leads = await getAllLeads()
  const workshopDaysAway = daysUntilWorkshop()

  const results = { day1: 0, day3: 0, day7: 0, dayMinus1: 0, errors: 0 }

  for (const { rowIndex, record } of leads) {
    const days = daysSince(record.registeredAt)

    try {
      // Day 1 email
      if (days >= 1 && !record.day1Sent) {
        await sendDay1Email(record.email, record.name)
        await markEmailSent(rowIndex, 'G')
        results.day1++
      }

      // Day 3 email
      if (days >= 3 && !record.day3Sent) {
        await sendDay3Email(record.email, record.name)
        await markEmailSent(rowIndex, 'H')
        results.day3++
      }

      // Day 7 email
      if (days >= 7 && !record.day7Sent) {
        await sendDay7Email(record.email, record.name)
        await markEmailSent(rowIndex, 'I')
        results.day7++
      }

      // Day -1 email (day before workshop)
      if (workshopDaysAway === 1 && !record.dayMinus1Sent) {
        await sendDayMinus1Email(record.email, record.name)
        await markEmailSent(rowIndex, 'J')
        results.dayMinus1++
      }
    } catch (err) {
      console.error(`[cron] failed for ${record.email}:`, err)
      results.errors++
    }
  }

  return NextResponse.json({ success: true, processed: leads.length, ...results })
}
