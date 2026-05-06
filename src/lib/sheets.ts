import { google } from 'googleapis'
import type { LeadRecord } from '@/types'

const SHEET_RANGE = 'Sheet1!A:K'
const HEADERS = [
  'Email', 'Name', 'Role', 'Source', 'Registered At',
  'Day 0 Sent', 'Day 1 Sent', 'Day 3 Sent', 'Day 7 Sent', 'Day -1 Sent',
]

function getSheets() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })
  return google.sheets({ version: 'v4', auth })
}

export async function appendLead(lead: Omit<LeadRecord, 'day0Sent' | 'day1Sent' | 'day3Sent' | 'day7Sent' | 'dayMinus1Sent'>) {
  const sheets = getSheets()
  const sheetId = process.env.GOOGLE_SHEET_ID!

  // Ensure header row exists
  const existing = await sheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: 'Sheet1!A1:K1',
  })

  if (!existing.data.values?.length) {
    await sheets.spreadsheets.values.update({
      spreadsheetId: sheetId,
      range: 'Sheet1!A1:K1',
      valueInputOption: 'USER_ENTERED',
      requestBody: { values: [HEADERS] },
    })
  }

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: SHEET_RANGE,
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[
        lead.email,
        lead.name,
        lead.role ?? '',
        lead.source,
        lead.registeredAt,
        'TRUE',  // day0 sent immediately
        'FALSE',
        'FALSE',
        'FALSE',
        'FALSE',
      ]],
    },
  })
}

export async function getAllLeads(): Promise<{ rowIndex: number; record: LeadRecord }[]> {
  const sheets = getSheets()
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEET_ID!,
    range: SHEET_RANGE,
  })

  const rows = response.data.values ?? []
  const dataRows = rows[0]?.[0] === 'Email' ? rows.slice(1) : rows

  return dataRows
    .map((row, i) => ({
      rowIndex: rows[0]?.[0] === 'Email' ? i + 2 : i + 1,
      record: {
        email: row[0] ?? '',
        name: row[1] ?? '',
        role: row[2] ?? '',
        source: row[3] ?? '',
        registeredAt: row[4] ?? '',
        day0Sent: row[5] === 'TRUE',
        day1Sent: row[6] === 'TRUE',
        day3Sent: row[7] === 'TRUE',
        day7Sent: row[8] === 'TRUE',
        dayMinus1Sent: row[9] === 'TRUE',
      } as LeadRecord,
    }))
    .filter(({ record }) => !!record.email)
}

export async function markEmailSent(rowIndex: number, column: 'G' | 'H' | 'I' | 'J') {
  const sheets = getSheets()
  await sheets.spreadsheets.values.update({
    spreadsheetId: process.env.GOOGLE_SHEET_ID!,
    range: `Sheet1!${column}${rowIndex}`,
    valueInputOption: 'USER_ENTERED',
    requestBody: { values: [['TRUE']] },
  })
}
