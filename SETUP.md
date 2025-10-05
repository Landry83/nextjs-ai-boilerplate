# Setup Guide

This guide will walk you through setting up each service required for the Next.js 15 Boilerplate.

## 📋 Prerequisites

- Node.js 18+ installed
- Git installed
- A code editor (VS Code recommended)

## 🔧 Service Setup

### 1. Supabase Setup

Supabase provides your backend, database, and authentication.

#### Step 1: Create Supabase Account
1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project"
3. Sign up with GitHub, Google, or email

#### Step 2: Create New Project
1. Click "New Project"
2. Choose your organization
3. Enter project details:
   - **Name**: `nextjs-boilerplate` (or your preferred name)
   - **Database Password**: Generate a strong password
   - **Region**: Choose closest to your users
4. Click "Create new project"

#### Step 3: Get Project Credentials
1. Go to **Settings** → **API**
2. Copy the following values:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role** key → `SUPABASE_SERVICE_ROLE_KEY`

#### Step 4: Configure Authentication
1. Go to **Authentication** → **Settings**
2. Configure **Site URL**: `http://localhost:3000` (for development)
3. Add **Redirect URLs**:
   - `http://localhost:3000/auth/callback`
   - `https://yourdomain.com/auth/callback` (for production)

#### Step 5: Enable Email Authentication
1. Go to **Authentication** → **Settings**
2. Ensure **Enable email confirmations** is checked
3. Configure **SMTP settings** (optional, for custom email provider)

### 2. OpenRouter Setup

OpenRouter provides access to multiple AI models.

#### Step 1: Create OpenRouter Account
1. Go to [openrouter.ai](https://openrouter.ai)
2. Click "Sign Up"
3. Create account with email or GitHub

#### Step 2: Get API Key
1. Go to **Keys** section
2. Click "Create Key"
3. Give it a name (e.g., "Next.js Boilerplate")
4. Copy the API key → `OPENROUTER_API_KEY`

#### Step 3: Add Credits (Optional)
- Free models don't require credits
- Paid models require credits
- Add credits via **Billing** section

### 3. Resend Setup

Resend handles email communications.

#### Step 1: Create Resend Account
1. Go to [resend.com](https://resend.com)
2. Click "Get Started"
3. Sign up with email

#### Step 2: Verify Domain (Production)
1. Go to **Domains**
2. Add your domain
3. Follow DNS verification steps
4. For development, you can use Resend's test domain

#### Step 3: Get API Key
1. Go to **API Keys**
2. Click "Create API Key"
3. Give it a name (e.g., "Next.js Boilerplate")
4. Copy the API key → `RESEND_API_KEY`

#### Step 4: Configure Sender
1. Go to **Domains**
2. Use `onboarding@resend.dev` for testing
3. For production, use your verified domain

## 🔐 Environment Variables

Create a `.env.local` file in your project root:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here

# OpenRouter Configuration
OPENROUTER_API_KEY=your_openrouter_api_key_here

# Resend Configuration
RESEND_API_KEY=your_resend_api_key_here

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 🚀 First Run

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open browser**: Navigate to `http://localhost:3000`

4. **Test features**:
   - Sign up for a new account
   - Check email for verification
   - Sign in to dashboard
   - Test AI model selector
   - Try sending emails

## 🧪 Testing Each Service

### Test Supabase Connection
1. Go to `/signup`
2. Create a test account
3. Check Supabase dashboard → **Authentication** → **Users**

### Test OpenRouter Integration
1. Go to `/dashboard`
2. Select different AI models
3. Test the model selector component

### Test Resend Email
1. Sign up for a new account
2. Check your email for welcome message
3. Test password reset functionality

## 🔧 Troubleshooting

### Common Issues

#### Supabase Connection Error
- Check `NEXT_PUBLIC_SUPABASE_URL` format
- Ensure `NEXT_PUBLIC_SUPABASE_ANON_KEY` is correct
- Verify project is not paused

#### OpenRouter API Error
- Check `OPENROUTER_API_KEY` is valid
- Ensure you have sufficient credits for paid models
- Verify model IDs are correct

#### Resend Email Not Sending
- Check `RESEND_API_KEY` is valid
- Verify sender domain is configured
- Check spam folder for test emails

#### Authentication Issues
- Clear browser cookies and localStorage
- Check Supabase project settings
- Verify redirect URLs are configured

### Debug Mode

Enable debug logging by adding to `.env.local`:

```env
NEXT_PUBLIC_DEBUG=true
```

## 📚 Additional Resources

- [Supabase Documentation](https://supabase.com/docs)
- [OpenRouter Documentation](https://openrouter.ai/docs)
- [Resend Documentation](https://resend.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/docs)

## 🆘 Support

If you encounter issues:

1. Check the troubleshooting section above
2. Review service documentation
3. Check GitHub issues
4. Contact support for the specific service

---

**Need help?** Contact [ByVeya](https://byveya.com) for professional setup assistance.
