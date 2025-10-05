import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export interface EmailTemplate {
  to: string
  subject: string
  html: string
  text?: string
}

export interface WelcomeEmailData {
  to: string
  name: string
}

export interface PasswordResetEmailData {
  to: string
  resetLink: string
}

export interface NotificationEmailData {
  to: string
  title: string
  message: string
  actionUrl?: string
  actionText?: string
}

// Welcome email template
export async function sendWelcomeEmail(data: WelcomeEmailData) {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome!</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #2563eb;">Welcome to Next.js 15 Boilerplate!</h1>
          <p>Hi ${data.name},</p>
          <p>Thank you for signing up! We're excited to have you on board.</p>
          <p>Your account has been successfully created and you can now access all the features of our platform.</p>
          <div style="margin: 30px 0;">
            <a href="${process.env.NEXT_PUBLIC_APP_URL}/dashboard" 
               style="background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
              Go to Dashboard
            </a>
          </div>
          <p>If you have any questions, feel free to reach out to our support team.</p>
          <p>Best regards,<br>The Team</p>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
          <p style="font-size: 12px; color: #666;">
            Built by <a href="https://byveya.com" style="color: #2563eb;">ByVeya</a>
          </p>
        </div>
      </body>
    </html>
  `

  const text = `
    Welcome to Next.js 15 Boilerplate!
    
    Hi ${data.name},
    
    Thank you for signing up! We're excited to have you on board.
    
    Your account has been successfully created and you can now access all the features of our platform.
    
    Visit your dashboard: ${process.env.NEXT_PUBLIC_APP_URL}/dashboard
    
    If you have any questions, feel free to reach out to our support team.
    
    Best regards,
    The Team
    
    Built by ByVeya (https://byveya.com)
  `

  return await resend.emails.send({
    from: 'noreply@byveya.com',
    to: data.to,
    subject: 'Welcome to Next.js 15 Boilerplate!',
    html,
    text,
  })
}

// Password reset email template
export async function sendPasswordResetEmail(data: PasswordResetEmailData) {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Password Reset</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #2563eb;">Password Reset Request</h1>
          <p>You requested a password reset for your account.</p>
          <p>Click the button below to reset your password:</p>
          <div style="margin: 30px 0;">
            <a href="${data.resetLink}" 
               style="background-color: #dc2626; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
              Reset Password
            </a>
          </div>
          <p>If you didn't request this password reset, please ignore this email.</p>
          <p>This link will expire in 24 hours for security reasons.</p>
          <p>Best regards,<br>The Team</p>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
          <p style="font-size: 12px; color: #666;">
            Built by <a href="https://byveya.com" style="color: #2563eb;">ByVeya</a>
          </p>
        </div>
      </body>
    </html>
  `

  const text = `
    Password Reset Request
    
    You requested a password reset for your account.
    
    Click the link below to reset your password:
    ${data.resetLink}
    
    If you didn't request this password reset, please ignore this email.
    
    This link will expire in 24 hours for security reasons.
    
    Best regards,
    The Team
    
    Built by ByVeya (https://byveya.com)
  `

  return await resend.emails.send({
    from: 'noreply@byveya.com',
    to: data.to,
    subject: 'Password Reset Request',
    html,
    text,
  })
}

// Notification email template
export async function sendNotificationEmail(data: NotificationEmailData) {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${data.title}</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #2563eb;">${data.title}</h1>
          <p>${data.message}</p>
          ${data.actionUrl && data.actionText ? `
            <div style="margin: 30px 0;">
              <a href="${data.actionUrl}" 
                 style="background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
                ${data.actionText}
              </a>
            </div>
          ` : ''}
          <p>Best regards,<br>The Team</p>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
          <p style="font-size: 12px; color: #666;">
            Built by <a href="https://byveya.com" style="color: #2563eb;">ByVeya</a>
          </p>
        </div>
      </body>
    </html>
  `

  const text = `
    ${data.title}
    
    ${data.message}
    
    ${data.actionUrl && data.actionText ? `${data.actionText}: ${data.actionUrl}` : ''}
    
    Best regards,
    The Team
    
    Built by ByVeya (https://byveya.com)
  `

  return await resend.emails.send({
    from: 'noreply@byveya.com',
    to: data.to,
    subject: data.title,
    html,
    text,
  })
}

export { resend }
