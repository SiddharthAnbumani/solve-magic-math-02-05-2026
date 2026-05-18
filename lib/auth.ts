import { createHmac, timingSafeEqual } from 'crypto'

const SECRET = process.env.CRM_AUTH_SECRET ?? 'mm-crm-internal-2026'
export const COOKIE_NAME = 'crm_auth'

const PINS: Record<string, string> = {
  '141100': 'solve',
  '020526': 'admin',
}

export function validatePin(pin: string): string | null {
  return PINS[pin] ?? null
}

export function createToken(username: string): string {
  const sig = createHmac('sha256', SECRET).update(username).digest('base64url')
  return `${username}.${sig}`
}

export function verifyToken(token: string | undefined): string | null {
  if (!token) return null
  try {
    const i = token.indexOf('.')
    if (i === -1) return null
    const username = token.slice(0, i)
    const expected = createToken(username)
    if (token.length !== expected.length) return null
    return timingSafeEqual(Buffer.from(token), Buffer.from(expected)) ? username : null
  } catch {
    return null
  }
}
