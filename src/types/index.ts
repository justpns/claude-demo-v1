export interface LeadFormData {
  name: string
  email: string
  role?: string
}

export interface LeadRecord extends LeadFormData {
  source: string
  registeredAt: string
  day0Sent: boolean
  day1Sent: boolean
  day3Sent: boolean
  day7Sent: boolean
  dayMinus1Sent: boolean
}

export type RegisterApiResponse =
  | { success: true; message: string }
  | { success: false; error: string }
