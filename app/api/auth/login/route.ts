import { NextRequest, NextResponse } from 'next/server'
import { validatePin, createToken, COOKIE_NAME } from '@/lib/auth'

export async function POST(req: NextRequest) {
  const { pin } = await req.json()
  const username = validatePin(String(pin ?? '').trim())

  if (!username) {
    return NextResponse.json({ error: 'Invalid PIN' }, { status: 401 })
  }

  const token = createToken(username)
  const res = NextResponse.json({ success: true })
  res.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  })
  return res
}
