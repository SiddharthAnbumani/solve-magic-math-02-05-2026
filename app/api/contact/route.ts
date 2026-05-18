import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { parentName, phone, email, program, centre, message } = body

    if (!parentName?.trim() || !phone?.trim()) {
      return NextResponse.json({ error: 'Name and phone are required.' }, { status: 400 })
    }

    // Forward to the CRM backend
    const crmUrl = `${process.env.CRM_API_URL || 'https://solve-magic-maths-crm-node.onrender.com'}/api/leads`
    const crmRes = await fetch(crmUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        applicantName: parentName.trim(),
        phone: phone.trim(),
        email: email?.trim() || '',
        course: program || 'Not Sure Yet',
        branch: centre || '',
        notes: message?.trim() || '',
        status: 'pending',
      }),
    })

    if (!crmRes.ok) {
      const err = await crmRes.json().catch(() => ({}))
      console.error('CRM error:', err)
      // Still return success to user — don't block submission on CRM failures
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('/api/contact error:', err)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
