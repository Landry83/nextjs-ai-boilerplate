import { NextRequest, NextResponse } from 'next/server'
import { sendWelcomeEmail, sendPasswordResetEmail, sendNotificationEmail } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { type, ...data } = body

    let result

    switch (type) {
      case 'welcome':
        result = await sendWelcomeEmail(data)
        break
      case 'password-reset':
        result = await sendPasswordResetEmail(data)
        break
      case 'notification':
        result = await sendNotificationEmail(data)
        break
      default:
        return NextResponse.json(
          { error: 'Invalid email type' },
          { status: 400 }
        )
    }

    return NextResponse.json({ success: true, data: result })
  } catch (error) {
    console.error('Email API Error:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
