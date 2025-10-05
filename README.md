# Next.js 15 AI-Powered Boilerplate

A comprehensive, production-ready Next.js 15 boilerplate featuring cutting-edge AI integration, robust authentication, and a modern, accessible UI system. Built with TypeScript, this boilerplate provides everything developers need to rapidly build scalable web applications with AI capabilities, secure user management, and professional email communications.

## 🌟 Why Choose This Boilerplate?

This boilerplate stands out by combining the latest web technologies with practical AI integration, making it perfect for developers who want to build modern applications without reinventing the wheel. Whether you're building a SaaS platform, AI-powered tool, or complex web application, this foundation provides the stability and features you need to succeed.

## 🚀 Core Features

### 🤖 Advanced AI Integration
- **OpenRouter AI** with 5 premium free models including Llama 3.1, Gemini Flash, Phi-3, and Mistral
- **Real-time streaming chat** interface with model switching capabilities
- **AI model selector** with categorized models (General, Coding, Fast, Creative)
- **Streaming responses** with Server-Sent Events for smooth user experience
- **Stop generation** functionality for responsive control
- **Professional chat UI** with message bubbles, timestamps, and model indicators

### 🔐 Enterprise-Grade Authentication
- **Supabase Auth** with complete user management system
- **Email/password authentication** with secure signup and login flows
- **Automatic email verification** and password reset functionality
- **Protected routes** with middleware-based authentication
- **Server-side and client-side** auth utilities for comprehensive coverage
- **Session management** with automatic token refresh

### 🎨 Modern, Accessible UI System
- **shadcn/ui components** with professional design system
- **ReUI patterns** for scalable component architecture
- **Heroicons** for consistent, beautiful iconography
- **Tailwind CSS** with custom theme and CSS variables
- **WCAG AA compliant** accessibility throughout
- **Dark mode ready** with proper contrast ratios
- **Responsive design** that works on all devices

### 📧 Professional Email Service
- **Resend integration** with HTML email templates
- **Welcome emails** for new user onboarding
- **Password reset** emails with secure links
- **Notification system** for user communications
- **ByVeya branding** in all email templates
- **Professional styling** with responsive design

### 🔔 Enhanced User Experience
- **Toast notifications** with react-hot-toast
- **Loading states** and error handling throughout
- **Form validation** with user-friendly messages
- **Progressive enhancement** for optimal performance
- **Offline-ready** architecture patterns

## 🛠️ Comprehensive Tech Stack

### Core Framework & Language
- **Next.js 15** - Latest React framework with App Router for optimal performance
- **TypeScript** - Strict type checking for robust, maintainable code
- **React 18** - Modern React with concurrent features and hooks

### UI & Styling System
- **Tailwind CSS** - Utility-first CSS framework with custom design tokens
- **shadcn/ui** - High-quality, accessible component library
- **ReUI** - Scalable component patterns and prop-based design
- **Heroicons** - Beautiful, consistent iconography (React components)
- **Radix UI** - Unstyled, accessible UI primitives
- **Motion** - Smooth animations and transitions
- **CSS Variables** - Dynamic theming and dark mode support

### Backend & Database
- **Supabase** - Open-source Firebase alternative
  - PostgreSQL database with real-time capabilities
  - Row Level Security (RLS) for data protection
  - Built-in authentication and user management
  - Server-side rendering support
  - RESTful API and real-time subscriptions

### AI & External Services
- **OpenRouter** - Unified API for multiple AI models
  - 5 premium free models (Llama 3.1 8B/70B, Gemini Flash 1.5, Phi-3 Medium, Mistral 7B)
  - Streaming responses with Server-Sent Events
  - Model categorization and selection
  - Cost-effective AI integration
- **Resend** - Modern email service
  - HTML email templates with responsive design
  - Professional branding and deliverability
  - Analytics and tracking capabilities

### Development Tools & Quality
- **ESLint** - Code linting with Next.js recommended rules
- **TypeScript Compiler** - Strict type checking and IntelliSense
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - Automatic CSS vendor prefixing
- **Memory Bank** - AI-powered development context management

### Additional Libraries
- **react-hot-toast** - Beautiful toast notifications
- **Class Variance Authority** - Component variant management
- **Tailwind Merge** - Intelligent class merging
- **Tailwind Animate** - CSS animation utilities

## 📦 Quick Start Installation

### Prerequisites
Before getting started, ensure you have the following installed:
- **Node.js 18+** - Required for Next.js 15
- **Git** - For version control
- **A code editor** - VS Code recommended with TypeScript support

### Step-by-Step Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/nextjs-boilerplate.git
   cd nextjs-boilerplate
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Environment Configuration**
   ```bash
   # Copy the example environment file
   cp env.example .env.local
   ```
   
   Edit `.env.local` with your service credentials (see [Environment Setup](#environment-setup) below)

4. **Start Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Access Your Application**
   Open [http://localhost:3000](http://localhost:3000) in your browser

### First-Time Setup Checklist
- [ ] Repository cloned successfully
- [ ] Dependencies installed without errors
- [ ] Environment variables configured
- [ ] Development server running
- [ ] Application accessible in browser
- [ ] Supabase project created and configured
- [ ] OpenRouter API key obtained
- [ ] Resend account set up

## 🔧 Comprehensive Environment Setup

This boilerplate requires several external services for full functionality. Each service is optional but recommended for the complete experience.

### Required Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# ===========================================
# SUPABASE CONFIGURATION (Required for Auth)
# ===========================================
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here

# ===========================================
# OPENROUTER CONFIGURATION (Required for AI)
# ===========================================
OPENROUTER_API_KEY=sk-or-v1-your_openrouter_api_key_here

# ===========================================
# RESEND CONFIGURATION (Required for Email)
# ===========================================
RESEND_API_KEY=re_your_resend_api_key_here

# ===========================================
# APPLICATION CONFIGURATION
# ===========================================
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development

# ===========================================
# OPTIONAL: DEBUGGING & DEVELOPMENT
# ===========================================
NEXT_PUBLIC_DEBUG=false
```

### Service-Specific Setup Guides

#### 🚀 Supabase Setup (Authentication & Database)
Supabase provides your backend infrastructure, user authentication, and database.

1. **Create Account**: Visit [supabase.com](https://supabase.com) and sign up
2. **Create Project**:
   - Project Name: `nextjs-boilerplate`
   - Database Password: Choose a strong password
   - Region: Select closest to your users
3. **Get API Keys**:
   - Go to Settings → API
   - Copy `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - Copy `anon public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Copy `service_role` key → `SUPABASE_SERVICE_ROLE_KEY`
4. **Configure Authentication**:
   - Settings → Authentication
   - Site URL: `http://localhost:3000` (development)
   - Add redirect URLs: `http://localhost:3000/auth/callback`

#### 🤖 OpenRouter Setup (AI Integration)
OpenRouter provides access to multiple AI models with a single API.

1. **Create Account**: Visit [openrouter.ai](https://openrouter.ai)
2. **Generate API Key**:
   - Go to Keys section
   - Click "Create Key"
   - Name: `Next.js Boilerplate`
   - Copy the API key → `OPENROUTER_API_KEY`
3. **Free Tier**: Includes access to 5 premium models at no cost

#### 📧 Resend Setup (Email Service)
Resend handles professional email communications.

1. **Create Account**: Visit [resend.com](https://resend.com)
2. **Verify Domain** (Production):
   - Go to Domains
   - Add your domain and verify DNS
3. **Get API Key**:
   - Go to API Keys
   - Click "Create API Key"
   - Copy key → `RESEND_API_KEY`
4. **Development**: Use `onboarding@resend.dev` for testing

### Environment Validation

The application includes environment validation to ensure all required services are properly configured. Check your console for any missing configuration warnings.

## 🏗️ Detailed Project Architecture

This boilerplate follows a well-organized, scalable architecture designed for maintainability and developer experience.

### Core Application Structure

```
src/
├── app/                          # Next.js 15 App Router Directory
│   ├── (auth)/                   # Route Group for Authentication Pages
│   │   ├── login/
│   │   │   ├── page.tsx         # Login form with Supabase auth
│   │   │   └── loading.tsx      # Loading state for login
│   │   └── signup/
│   │       ├── page.tsx         # Registration form
│   │       └── loading.tsx      # Loading state for signup
│   ├── api/                      # API Routes (Server Components)
│   │   ├── ai/
│   │   │   ├── route.ts         # AI chat endpoint with streaming
│   │   │   └── utils.ts         # AI processing utilities
│   │   └── email/
│   │       └── route.ts         # Email sending endpoint
│   ├── chat/                     # AI Chat Interface (Protected)
│   │   ├── page.tsx             # Main chat page with auth check
│   │   ├── layout.tsx           # Chat-specific layout
│   │   └── loading.tsx          # Loading state
│   ├── dashboard/                # User Dashboard (Protected)
│   │   ├── page.tsx             # Dashboard with navigation
│   │   └── layout.tsx           # Dashboard layout wrapper
│   ├── globals.css               # Global Tailwind + custom styles
│   ├── layout.tsx                # Root layout with providers
│   ├── page.tsx                  # Landing/home page
│   ├── loading.tsx               # App-level loading state
│   └── not-found.tsx             # 404 error page
├── components/                   # Reusable React Components
│   ├── ai/                       # AI-specific components
│   │   ├── model-selector.tsx    # AI model selection dropdown
│   │   ├── ai-chat-demo.tsx      # AI chat demonstration
│   │   └── model-info.tsx        # Model information display
│   ├── chat/                     # Chat interface components
│   │   ├── chat-interface.tsx    # Main chat container
│   │   ├── chat-message.tsx      # Individual message component
│   │   ├── chat-input.tsx        # Message input with controls
│   │   └── chat-header.tsx       # Chat header with model selector
│   ├── ui/                       # shadcn/ui component library
│   │   ├── button.tsx            # Customizable button variants
│   │   ├── input.tsx             # Form input with validation
│   │   ├── card.tsx              # Content containers
│   │   ├── toast.tsx             # Toast notification system
│   │   ├── toaster.tsx           # Toast provider
│   │   ├── animated-group.tsx    # Animation wrapper
│   │   └── text-effect.tsx       # Text animation effects
│   ├── header.tsx                # Site navigation header
│   ├── hero-section.tsx          # Landing page hero
│   ├── logo.tsx                  # Brand logo component
│   ├── reui-example.tsx          # ReUI pattern demonstrations
│   └── icon-example.tsx          # Heroicons showcase
├── lib/                          # Utility Libraries & Services
│   ├── supabase/
│   │   ├── client.ts             # Client-side Supabase client
│   │   └── server.ts             # Server-side Supabase client
│   ├── ai-models.ts              # AI model configurations & metadata
│   ├── openrouter.ts             # OpenRouter API client & utilities
│   ├── email.ts                  # Email service with templates
│   ├── utils.ts                  # General utility functions (cn, etc.)
│   └── validations.ts            # Form validation schemas
├── hooks/                        # Custom React Hooks
│   ├── use-toast.ts              # Toast notification hook
│   └── use-local-storage.ts      # Local storage management
└── types/                        # TypeScript Type Definitions
    ├── api.ts                    # API response types
    ├── auth.ts                   # Authentication types
    ├── ai.ts                     # AI model and chat types
    └── index.ts                  # Consolidated type exports
```

### Configuration & Assets

```
├── memory-bank/                  # AI-powered development context
│   ├── activeContext.md          # Current project state
│   ├── progress.md               # Development progress tracking
│   ├── systemPatterns.md         # Architectural patterns
│   └── techContext.md            # Technology documentation
├── public/                       # Static assets
│   ├── favicon.ico               # Site favicon
│   ├── robots.txt                # Search engine crawling rules
│   └── sitemap.xml               # Site structure for SEO
├── styles/                       # Additional stylesheets
│   └── custom.css                # Custom CSS overrides
└── docs/                         # Documentation
    ├── API.md                    # API documentation
    ├── DEPLOYMENT.md             # Deployment guides
    └── TROUBLESHOOTING.md        # Common issues & solutions
```

### Key Architectural Patterns

#### 🏛️ Component Architecture
- **Atomic Design**: Components organized by complexity and reusability
- **Composition over Inheritance**: Flexible component composition
- **Prop-based Design**: ReUI patterns for consistent APIs
- **TypeScript First**: Strict typing for all component props

#### 🔄 State Management
- **React Hooks**: Local state management with custom hooks
- **Server State**: Supabase for server-side data management
- **Real-time Updates**: Supabase subscriptions for live data
- **Optimistic Updates**: Immediate UI feedback with error handling

#### 🛡️ Security & Authentication
- **Middleware Protection**: Route-level authentication checks
- **Server-side Validation**: API route protection
- **Environment Security**: Secure credential management
- **Row Level Security**: Database-level access control

## 🤖 Advanced AI Integration

This boilerplate features a comprehensive AI system powered by OpenRouter, providing access to multiple premium AI models with real-time streaming capabilities.

### AI Model Ecosystem

#### 🚀 Available Models (All Free Tier)

| Model | Provider | Category | Best For | Context Window |
|-------|----------|----------|----------|----------------|
| **Llama 3.1 8B** | Meta | General | Balanced performance, everyday tasks | 8K tokens |
| **Llama 3.1 70B** | Meta | Advanced | Complex reasoning, detailed analysis | 8K tokens |
| **Gemini Flash 1.5** | Google | Fast | Quick responses, real-time chat | 1M tokens |
| **Phi-3 Medium** | Microsoft | Efficient | Coding, technical tasks | 4K tokens |
| **Mistral 7B** | Mistral AI | Coding | Programming assistance, code review | 32K tokens |

#### 🎯 Model Selection Strategy

- **General Purpose**: Llama 3.1 8B - Versatile for most conversational tasks
- **Complex Tasks**: Llama 3.1 70B - Deep analysis and reasoning
- **Speed Focused**: Gemini Flash 1.5 - Fast responses for real-time interaction
- **Technical Work**: Phi-3 Medium - Code generation and debugging
- **Programming**: Mistral 7B - Code review, refactoring, and technical writing

### Real-Time Chat Interface

#### ✨ Key Features
- **Streaming Responses**: Server-Sent Events for smooth, real-time AI responses
- **Model Switching**: Change AI models mid-conversation instantly
- **Message History**: Persistent conversation context within sessions
- **Stop Generation**: Cancel AI responses at any time
- **Auto-scroll**: Automatically scroll to latest messages
- **Timestamp Display**: Message timestamps with model indicators

#### 🎨 User Experience
- **Professional UI**: Clean, modern chat interface with message bubbles
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Keyboard Shortcuts**: Enter to send, intuitive navigation
- **Loading States**: Visual feedback during AI processing
- **Error Recovery**: Graceful handling of network issues

### AI Integration Examples

#### Basic Chat Usage
```typescript
import { chatWithAI } from '@/lib/openrouter'

const response = await chatWithAI({
  messages: [
    { role: 'user', content: 'Explain quantum computing in simple terms' }
  ],
  model: 'meta-llama/llama-3.1-8b-instruct:free',
  temperature: 0.7,
  max_tokens: 1000
})
```

#### Streaming Chat Implementation
```typescript
// Client-side streaming (React component)
const handleSendMessage = async (message: string) => {
  const response = await fetch('/api/ai?stream=true', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      messages: [{ role: 'user', content: message }],
      model: selectedModel,
      stream: true
    })
  })

  const reader = response.body?.getReader()
  // Handle streaming response...
}
```

#### Model Selection Component
```tsx
import { ModelSelector } from '@/components/ai/model-selector'

function ChatInterface() {
  const [selectedModel, setSelectedModel] = useState('meta-llama/llama-3.1-8b-instruct:free')

  return (
    <ModelSelector
      selectedModel={selectedModel}
      onModelChange={setSelectedModel}
      categories={['general', 'coding', 'fast']}
    />
  )
}
```

### AI Service Architecture

#### 🔧 Backend Services
- **OpenRouter Client**: Centralized API client with error handling
- **Model Configuration**: Dynamic model metadata and capabilities
- **Streaming Handler**: Server-Sent Events implementation
- **Rate Limiting**: Built-in request throttling and error recovery

#### 🎯 Frontend Integration
- **Chat Components**: Modular chat interface components
- **State Management**: React hooks for chat state
- **Real-time Updates**: Optimistic updates with error handling
- **Accessibility**: WCAG AA compliant chat interface

## 🔐 Enterprise Authentication System

This boilerplate implements a comprehensive authentication system using Supabase Auth, providing enterprise-grade security with a seamless user experience.

### Authentication Features

#### 🔑 Core Authentication Methods
- **Email/Password**: Secure registration and login with bcrypt hashing
- **Email Verification**: Automatic verification emails with secure tokens
- **Password Reset**: Secure password recovery with time-limited tokens
- **Session Management**: Automatic token refresh and session persistence
- **Social Auth Ready**: Extensible architecture for OAuth providers

#### 🛡️ Security Features
- **Row Level Security (RLS)**: Database-level access control
- **JWT Tokens**: Secure, stateless authentication tokens
- **Middleware Protection**: Route-level authentication guards
- **Server-Side Validation**: API endpoint protection
- **CSRF Protection**: Cross-site request forgery prevention
- **Secure Headers**: HTTP security headers configuration

#### 🎯 User Experience
- **Seamless Registration**: One-click account creation with instant feedback
- **Email Verification**: Professional verification emails with ByVeya branding
- **Password Recovery**: Secure reset flow with email notifications
- **Auto-redirect**: Smart redirects after authentication actions
- **Error Handling**: User-friendly error messages and recovery options

### Authentication Flow Architecture

#### 📋 Complete User Journey

1. **Registration Process**
   ```typescript
   // User submits registration form
   const { data, error } = await supabase.auth.signUp({
     email: userEmail,
     password: userPassword,
     options: {
       emailRedirectTo: `${origin}/auth/callback`
     }
   })
   ```

2. **Email Verification**
   - User receives professional verification email
   - Secure token-based verification process
   - Automatic redirect to dashboard upon verification

3. **Authentication State Management**
   ```typescript
   // Client-side auth state
   const { data: { user } } = await supabase.auth.getUser()

   // Server-side auth validation
   const { data: { user } } = await supabase.auth.getUser()
   ```

4. **Protected Route Access**
   ```typescript
   // Middleware protection (middleware.ts)
   export async function middleware(request: NextRequest) {
     const { data: { user } } = await supabase.auth.getUser()
     if (!user && !request.nextUrl.pathname.startsWith('/login')) {
       return NextResponse.redirect(new URL('/login', request.url))
     }
   }
   ```

### Authentication Components

#### 🎨 UI Components
- **Login Form**: Professional login interface with validation
- **Signup Form**: Comprehensive registration with password strength
- **Password Reset**: Secure password recovery flow
- **Auth Layout**: Consistent authentication page layout

#### 🔧 Utility Functions
- **Auth Helpers**: Client and server-side authentication utilities
- **Session Hooks**: React hooks for authentication state
- **Redirect Logic**: Smart post-authentication navigation
- **Error Handling**: Comprehensive error management

### Database Security

#### 🗄️ Supabase RLS Policies
```sql
-- Enable RLS on user profiles table
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Users can only access their own profile
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = user_id);

-- Users can update their own profile
CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = user_id);
```

#### 🔐 Security Best Practices
- **Password Policies**: Enforced strong password requirements
- **Rate Limiting**: Protection against brute force attacks
- **Token Expiry**: Automatic token rotation and expiry
- **Audit Logging**: Authentication event tracking
- **Secure Cookies**: HttpOnly, Secure, SameSite cookie settings

## 📧 Professional Email Service

This boilerplate features a comprehensive email system powered by Resend, providing professional, branded email communications with HTML templates and automated workflows.

### Email Service Features

#### 📬 Core Email Capabilities
- **Transactional Emails**: Welcome, verification, and notification emails
- **Password Reset**: Secure password recovery with time-limited tokens
- **Custom Templates**: Professional HTML templates with ByVeya branding
- **Responsive Design**: Mobile-optimized email layouts
- **Analytics Ready**: Email delivery tracking and analytics
- **Error Handling**: Comprehensive error handling and retry logic

#### 🎨 Email Template System
- **Welcome Email**: Professional onboarding emails for new users
- **Verification Email**: Secure account verification with branded design
- **Password Reset**: Secure password recovery with clear instructions
- **Notification Emails**: Custom notifications for user activities
- **Branded Templates**: Consistent ByVeya branding across all emails

### Email Architecture

#### 🔧 Email Service Implementation
```typescript
// Email service configuration
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// Send welcome email
export async function sendWelcomeEmail(email: string, name: string) {
  const { data, error } = await resend.emails.send({
    from: 'ByVeya <welcome@byveya.com>',
    to: email,
    subject: 'Welcome to ByVeya - Your journey starts here!',
    html: generateWelcomeTemplate(name),
  })

  return { data, error }
}
```

#### 📧 Email Template Examples

**Welcome Email Template Structure:**
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to ByVeya</title>
</head>
<body style="font-family: Arial, sans-serif; margin: 0; padding: 0;">
  <div style="max-width: 600px; margin: 0 auto;">
    <!-- ByVeya Header -->
    <div style="background: #1a365d; color: white; padding: 20px; text-align: center;">
      <h1>ByVeya</h1>
      <p>Modern web development solutions</p>
    </div>

    <!-- Welcome Content -->
    <div style="padding: 30px; background: #ffffff;">
      <h2>Welcome, {{name}}!</h2>
      <p>Thank you for joining ByVeya. Your account has been successfully created.</p>
      <div style="text-align: center; margin: 30px 0;">
        <a href="{{dashboardUrl}}" style="background: #4f46e5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px;">
          Access Your Dashboard
        </a>
      </div>
    </div>

    <!-- Footer -->
    <div style="background: #f8f9fa; padding: 20px; text-align: center; color: #666;">
      <p>© 2025 ByVeya. All rights reserved.</p>
      <p><a href="https://byveya.com">byveya.com</a></p>
    </div>
  </div>
</body>
</html>
```

### Email API Integration

#### 🚀 API Endpoints
```typescript
// POST /api/email - Send email
export async function POST(request: Request) {
  const { type, to, name, customData } = await request.json()

  try {
    switch (type) {
      case 'welcome':
        await sendWelcomeEmail(to, name)
        break
      case 'password-reset':
        await sendPasswordResetEmail(to, name, customData.resetToken)
        break
      case 'notification':
        await sendNotificationEmail(to, name, customData.message)
        break
    }

    return Response.json({ success: true })
  } catch (error) {
    console.error('Email sending failed:', error)
    return Response.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
```

### Email Best Practices

#### 📊 Deliverability
- **Domain Verification**: Proper SPF, DKIM, and DMARC setup
- **List Hygiene**: Clean email lists and unsubscribe handling
- **Content Guidelines**: Professional content and clear calls-to-action
- **Mobile Optimization**: Responsive design for all email clients

#### 🔒 Security & Compliance
- **Data Protection**: Secure handling of user email addresses
- **Privacy Compliance**: GDPR and privacy regulation compliance
- **Rate Limiting**: Protection against email abuse
- **Audit Logging**: Email sending activity tracking

#### 📈 Analytics & Monitoring
- **Delivery Tracking**: Email delivery and open rate monitoring
- **Error Monitoring**: Failed email delivery alerts
- **Performance Metrics**: Email service health monitoring
- **User Engagement**: Email interaction analytics

## 🎨 Advanced UI Component System

This boilerplate features a sophisticated UI system combining shadcn/ui, ReUI patterns, and custom components, all built with accessibility and performance in mind.

### Component Architecture

#### 🧩 shadcn/ui Foundation
shadcn/ui provides the foundation with professionally designed, accessible components that follow modern design principles.

**Core Components:**
- **Button System**: 6 variants (default, secondary, outline, ghost, destructive, link) with loading states
- **Form Controls**: Input, Textarea, Select, Checkbox, Radio with validation
- **Data Display**: Card, Table, Badge, Avatar with responsive layouts
- **Feedback**: Toast, Alert, Progress, Skeleton for user communication
- **Navigation**: Tabs, Breadcrumbs, Pagination for complex interfaces
- **Overlays**: Dialog, Sheet, Tooltip, Popover for modal interactions

**Component Usage Example:**
```tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function UserProfile({ user }) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>User Profile</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={user.avatar} />
            <AvatarFallback>{user.name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{user.name}</p>
            <p className="text-sm text-muted-foreground">{user.email}</p>
          </div>
        </div>
        <Button className="w-full">Edit Profile</Button>
      </CardContent>
    </Card>
  )
}
```

#### 🏗️ ReUI Pattern Integration
ReUI provides scalable component patterns and prop-based design that promotes consistency and maintainability.

**Pattern Features:**
- **Prop-based Design**: Consistent API patterns across all components
- **Composition**: Flexible component composition for complex UIs
- **AI-Optimized**: Components designed for AI-driven development workflows
- **Customization**: Easy theming and customization options
- **Performance**: Optimized rendering and bundle size

**ReUI Pattern Example:**
```tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  fullWidth?: boolean
  children: React.ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  fullWidth = false,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && 'w-full',
        loading && 'opacity-50 cursor-not-allowed',
        className
      )}
      disabled={loading}
      {...props}
    >
      {loading && <Spinner className="mr-2" />}
      {children}
    </button>
  )
}
```

#### 🎯 Heroicons Integration
Professional iconography with consistent visual language and accessibility features.

**Icon Features:**
- **Two Variants**: Outline (24x24) and Solid (20x20) for different contexts
- **Accessibility**: Proper ARIA attributes and screen reader support
- **Performance**: Optimized SVG icons with minimal bundle impact
- **Consistency**: Unified visual language across the application

**Icon Usage:**
```tsx
import {
  HomeIcon,
  UserIcon,
  CogIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline'

export function Navigation() {
  return (
    <nav className="flex space-x-4">
      <HomeIcon className="h-6 w-6" />
      <UserIcon className="h-6 w-6" />
      <CogIcon className="h-6 w-6" />
      <ChatBubbleLeftRightIcon className="h-6 w-6" />
    </nav>
  )
}
```

### Design System

#### 🎨 Theme Configuration
CSS variables and Tailwind configuration for consistent theming:

```css
/* CSS Variables for theming */
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96%;
  /* ... more variables */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... dark mode overrides */
}
```

#### 📱 Responsive Design
Mobile-first responsive design with breakpoint system:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

#### ♿ Accessibility Features
- **WCAG AA Compliance**: All components meet accessibility standards
- **Keyboard Navigation**: Full keyboard support for all interactions
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Focus Management**: Visible focus indicators and logical tab order
- **Color Contrast**: All text meets WCAG AA contrast requirements

### Component Showcase

#### 🚀 Advanced Components
- **ModelSelector**: AI model selection with categorization
- **ChatInterface**: Real-time chat with streaming support
- **Toast System**: Professional notification system
- **Form Components**: Validated forms with error handling
- **Data Tables**: Sortable, filterable data displays

## 🚀 Production Deployment

This boilerplate is optimized for production deployment with comprehensive guides for multiple platforms and enterprise-grade deployment strategies.

### Platform Recommendations

#### 🏆 Vercel (Recommended)
Vercel provides the best experience for Next.js applications with automatic optimizations and global CDN.

**Quick Deployment:**
1. **Connect Repository**: Import your GitHub repository to Vercel
2. **Configure Environment**: Set environment variables in Vercel dashboard
3. **Automatic Deployment**: Deploy automatically on every push to main branch
4. **Custom Domain**: Add your custom domain with SSL certificate

**Vercel Configuration:**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install",
  "framework": "nextjs",
  "nodeVersion": "18.x"
}
```

**Environment Variables in Vercel:**
- Set all required environment variables in the Vercel dashboard
- Use the same variable names as in `.env.local`
- Enable preview deployments for staging environments

#### ☁️ Alternative Platforms

##### **Railway**
Great for full-stack applications with integrated databases.

**Railway Deployment:**
1. **Connect Repository**: Link your GitHub repository
2. **Automatic Deployment**: Deploys on every push
3. **Environment Variables**: Set in Railway dashboard
4. **Database Integration**: Built-in PostgreSQL databases

##### **Render**
Cost-effective with generous free tier and managed services.

**Render Deployment:**
1. **Create Web Service**: Connect your repository
2. **Build Settings**: Configure Node.js 18+ and build command
3. **Environment**: Set environment variables
4. **Custom Domain**: Add domain with automatic SSL

##### **Netlify**
Excellent for static sites with form handling and edge functions.

**Netlify Deployment:**
1. **Connect Repository**: Import from GitHub
2. **Build Settings**: Configure build command and publish directory
3. **Environment Variables**: Set in site settings
4. **Forms & Functions**: Enable form handling and edge functions

##### **AWS Amplify**
Enterprise-grade with advanced features and scalability.

**Amplify Deployment:**
1. **Connect Repository**: Link GitHub repository
2. **Build Configuration**: Set up build settings and environment
3. **Custom Domain**: Configure with Route 53 integration
4. **Advanced Features**: Enable SSR, API routes, and real-time features

### Environment-Specific Configurations

#### 🌍 Production Environment Setup
```env
# Production Environment Variables
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://yourdomain.com

# Supabase Production Project
NEXT_PUBLIC_SUPABASE_URL=https://your-prod-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_prod_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_prod_service_role_key

# OpenRouter (Production API Key)
OPENROUTER_API_KEY=sk-or-v1-your_prod_openrouter_key

# Resend (Production API Key)
RESEND_API_KEY=re_your_prod_resend_key
```

#### 🧪 Staging Environment
```env
# Staging Environment Variables
NODE_ENV=staging
NEXT_PUBLIC_APP_URL=https://staging.yourdomain.com

# Supabase Staging Project
NEXT_PUBLIC_SUPABASE_URL=https://your-staging-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_staging_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_staging_service_role_key
```

### Deployment Checklist

#### Pre-Deployment
- [ ] **Environment Variables**: All production environment variables configured
- [ ] **Domain Setup**: Custom domain configured with SSL
- [ ] **Supabase Project**: Production Supabase project created and configured
- [ ] **API Keys**: Production API keys for OpenRouter and Resend
- [ ] **Email Domain**: Domain verified in Resend for email sending
- [ ] **Database**: Database schema migrated and seeded
- [ ] **Testing**: All features tested in staging environment

#### Deployment Steps
- [ ] **Repository**: Code pushed to main branch with proper versioning
- [ ] **Build Process**: Application builds successfully in production
- [ ] **Environment**: Production environment variables verified
- [ ] **Domain**: DNS records configured correctly
- [ ] **SSL**: SSL certificate installed and valid
- [ ] **Monitoring**: Error tracking and analytics configured

#### Post-Deployment
- [ ] **Smoke Testing**: Critical user flows tested in production
- [ ] **Performance**: Core Web Vitals and Lighthouse scores verified
- [ ] **SEO**: Meta tags, sitemap, and robots.txt configured
- [ ] **Analytics**: Google Analytics or similar tracking installed
- [ ] **Monitoring**: Application monitoring and error tracking active

### Performance Optimization

#### 🚀 Build Optimizations
- **Static Generation**: Pages pre-rendered at build time
- **Image Optimization**: Next.js Image component with automatic optimization
- **Code Splitting**: Automatic code splitting for optimal loading
- **Bundle Analysis**: Bundle analyzer for size optimization

#### 📊 Performance Monitoring
- **Core Web Vitals**: Monitoring of LCP, FID, and CLS
- **Lighthouse Scores**: Regular performance audits
- **Bundle Size**: Monitoring of JavaScript bundle sizes
- **API Performance**: Response time monitoring for API routes

### Security Considerations

#### 🔒 Production Security
- **HTTPS Only**: All traffic served over HTTPS
- **Secure Headers**: Security headers configured
- **CORS Policy**: Proper CORS configuration for API routes
- **Rate Limiting**: API rate limiting implemented
- **Input Validation**: All user inputs validated and sanitized

#### 🔐 Data Protection
- **Environment Variables**: Sensitive data never exposed in client code
- **API Security**: Proper authentication for all API endpoints
- **Database Security**: Row Level Security enabled in Supabase
- **Audit Logging**: User actions and system events logged

## 📚 Development Workflow

This boilerplate includes comprehensive development tools and workflows designed for efficient, collaborative development.

### Development Scripts

#### Core Scripts
```bash
# Development
npm run dev          # Start development server with hot reload
npm run build        # Production build with optimizations
npm run start        # Start production server locally
npm run preview      # Preview production build locally

# Code Quality
npm run lint         # Run ESLint for code linting
npm run lint:fix     # Auto-fix ESLint errors
npm run type-check   # TypeScript type checking
npm run format       # Code formatting with Prettier

# Testing (when implemented)
npm run test         # Run test suite
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Generate test coverage report

# Database & Deployment
npm run db:push      # Push database schema changes
npm run db:studio    # Open Supabase Studio
npm run deploy       # Deploy to production
```

#### Advanced Scripts
```bash
# Memory Bank Management
npm run memory:update # Update memory bank with current context

# Code Analysis
npm run analyze       # Bundle size analysis
npm run lighthouse    # Lighthouse performance audit

# Cleanup
npm run clean         # Clean build artifacts and caches
npm run reset         # Reset development environment
```

### Development Environment Setup

#### 🛠️ Recommended VS Code Extensions
- **TypeScript Importer**: Auto import TypeScript definitions
- **Tailwind CSS IntelliSense**: Tailwind class autocompletion
- **ESLint**: Code linting and auto-fix
- **Prettier**: Code formatting
- **Auto Rename Tag**: HTML/JSX tag synchronization

#### 🔧 VS Code Settings
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "typescript.preferences.importModuleSpecifier": "relative",
  "tailwindCSS.includeLanguages": {
    "typescript": "javascript",
    "typescriptreact": "javascript"
  }
}
```

### Component Development

#### Adding shadcn/ui Components
   ```bash
# Add a new shadcn/ui component
npx shadcn@latest add button
npx shadcn@latest add input
npx shadcn@latest add card

# Add multiple components at once
npx shadcn@latest add button input card
```

#### Creating Custom Components
1. **Create Component File**:
   ```tsx
   // src/components/ui/custom-button.tsx
   import { cn } from "@/lib/utils"

   interface CustomButtonProps {
     variant?: 'primary' | 'secondary'
     children: React.ReactNode
   }

   export function CustomButton({ variant = 'primary', children }: CustomButtonProps) {
     return (
       <button className={cn(
         "px-4 py-2 rounded-md font-medium transition-colors",
         variant === 'primary' && "bg-blue-600 text-white hover:bg-blue-700",
         variant === 'secondary' && "bg-gray-200 text-gray-900 hover:bg-gray-300"
       )}>
         {children}
       </button>
     )
   }
   ```

2. **Export from Barrel File**:
   ```tsx
   // src/components/ui/index.ts
   export { CustomButton } from './custom-button'
   ```

#### ReUI Pattern Implementation
```tsx
// Following ReUI prop-based design patterns
interface ComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  children: React.ReactNode
}

export function Component({
  variant = 'default',
  size = 'md',
  loading = false,
  className,
  children,
  ...props
}: ComponentProps) {
  return (
    <div
      className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
      {...props}
    >
      {loading && <Spinner />}
      {children}
    </div>
  )
}
```

### Code Quality Standards

#### TypeScript Configuration
- **Strict Mode**: All strict TypeScript checks enabled
- **Path Mapping**: Absolute imports with `@/` alias
- **Type Definitions**: Comprehensive type safety throughout
- **Interface Patterns**: Consistent interface naming and structure

#### Code Style Guidelines
```typescript
// ✅ Good: Explicit typing and clear naming
interface UserProfile {
  id: string
  name: string
  email: string
  avatar?: string
  createdAt: Date
}

function createUser(profile: UserProfile): Promise<User> {
  // Implementation
}

// ❌ Bad: Any types and unclear naming
function createUser(profile: any): Promise<any> {
  // Implementation
}
```

#### File Organization
```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   ├── forms/        # Form components
│   ├── layout/       # Layout components
│   └── features/     # Feature-specific components
├── lib/
│   ├── utils/        # Utility functions
│   ├── validations/  # Validation schemas
│   ├── constants/    # Application constants
│   └── types/        # TypeScript definitions
├── hooks/            # Custom React hooks
├── stores/           # State management (if needed)
└── styles/           # Additional stylesheets
```

### Testing Strategy

#### Unit Testing (Planned)
```typescript
// Example test structure
import { render, screen } from '@testing-library/react'
import { CustomButton } from '@/components/ui/custom-button'

describe('CustomButton', () => {
  it('renders with correct text', () => {
    render(<CustomButton>Click me</CustomButton>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('applies correct variant styles', () => {
    render(<CustomButton variant="secondary">Click me</CustomButton>)
    expect(screen.getByRole('button')).toHaveClass('bg-gray-200')
  })
})
```

#### Integration Testing
- **API Routes**: Test API endpoints with mocked databases
- **Authentication Flow**: End-to-end authentication testing
- **AI Integration**: Test AI chat functionality with mocked responses

#### E2E Testing (Planned)
- **User Journeys**: Complete user workflow testing
- **Cross-browser**: Testing across different browsers
- **Mobile Testing**: Responsive design verification

## 🔒 Enterprise Security

This boilerplate implements comprehensive security measures following industry best practices and regulatory requirements.

### Authentication Security

#### 🔐 Multi-Layer Authentication
- **JWT Tokens**: Secure, stateless authentication with automatic refresh
- **Session Management**: Secure session handling with HttpOnly cookies
- **Password Policies**: Enforced strong password requirements and complexity rules
- **Rate Limiting**: Protection against brute force attacks and credential stuffing
- **Account Lockout**: Temporary account suspension after failed attempts

#### 🛡️ Authorization & Access Control
- **Row Level Security (RLS)**: Database-level access control in Supabase
- **Middleware Protection**: Route-level authentication guards
- **Role-Based Access**: Extensible role system for different user permissions
- **API Security**: Secure API endpoints with proper authentication checks

### Data Protection

#### 🔏 Data Encryption
- **At Rest**: Database encryption with Supabase's enterprise-grade security
- **In Transit**: TLS 1.3 encryption for all data transmission
- **Client-Side**: Secure handling of sensitive data in browser storage
- **Environment Variables**: Secure credential management with encryption

#### 🗄️ Database Security
```sql
-- Example RLS policies
-- Users can only access their own data
CREATE POLICY "users_own_data" ON user_profiles
  FOR ALL USING (auth.uid() = user_id);

-- Public read access for published content
CREATE POLICY "public_read" ON articles
  FOR SELECT USING (published = true);

-- Admin-only access for sensitive operations
CREATE POLICY "admin_only" ON admin_logs
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM user_roles
      WHERE user_id = auth.uid() AND role = 'admin'
    )
  );
```

### Application Security

#### 🌐 Web Security
- **Content Security Policy (CSP)**: Strict CSP headers to prevent XSS attacks
- **Cross-Origin Resource Sharing (CORS)**: Properly configured CORS policies
- **Security Headers**: Comprehensive security headers (HSTS, X-Frame-Options, etc.)
- **Input Validation**: Server-side and client-side input sanitization
- **SQL Injection Prevention**: Parameterized queries and ORM protection

#### 🔧 API Security
- **Request Validation**: Comprehensive input validation for all API endpoints
- **Rate Limiting**: API rate limiting to prevent abuse
- **Error Handling**: Secure error responses that don't leak sensitive information
- **Audit Logging**: Comprehensive logging of security events and user actions

### Compliance & Privacy

#### 📋 Regulatory Compliance
- **GDPR Ready**: Data protection and privacy compliance features
- **CCPA Compliant**: California Consumer Privacy Act compliance
- **Data Minimization**: Only collect necessary user data
- **Right to Deletion**: User account deletion functionality
- **Data Portability**: User data export capabilities

#### 🔒 Privacy by Design
- **Privacy-First Architecture**: Privacy considerations built into every feature
- **Data Retention Policies**: Automatic data cleanup and retention management
- **Consent Management**: User consent tracking for data processing
- **Anonymization**: Data anonymization for analytics and logging

### Security Monitoring

#### 📊 Security Monitoring
- **Real-time Alerts**: Immediate notification of security incidents
- **Log Analysis**: Automated analysis of security logs and events
- **Intrusion Detection**: Monitoring for suspicious activities
- **Vulnerability Scanning**: Regular security vulnerability assessments

#### 🚨 Incident Response
- **Security Playbook**: Documented incident response procedures
- **Automated Response**: Automated responses to common security threats
- **Forensic Analysis**: Comprehensive logging for security investigations
- **Recovery Procedures**: Well-defined recovery and remediation processes

## ♿ Accessibility Excellence

This boilerplate is built with accessibility as a core principle, ensuring all users can effectively use the application.

### WCAG 2.1 AA Compliance

#### 🎯 Accessibility Standards Met
- **Perceivable**: Information and user interface components must be presentable to users in ways they can perceive
- **Operable**: User interface components and navigation must be operable
- **Understandable**: Information and the operation of user interface must be understandable
- **Robust**: Content must be robust enough to be interpreted reliably by a wide variety of user agents

#### 📱 Accessible Components
- **Semantic HTML**: Proper use of semantic elements and ARIA attributes
- **Keyboard Navigation**: Full keyboard accessibility for all interactive elements
- **Screen Reader Support**: Comprehensive screen reader compatibility
- **Color Contrast**: All text meets WCAG AA contrast requirements (4.5:1 minimum)
- **Focus Management**: Visible focus indicators and logical tab order

### Accessibility Features

#### 🔍 Screen Reader Support
```tsx
// Accessible button with screen reader support
<button
  aria-label="Close dialog"
  aria-describedby="close-description"
>
  <XIcon aria-hidden="true" />
  <span id="close-description" className="sr-only">
    Close this dialog window
  </span>
</button>
```

#### ⌨️ Keyboard Navigation
- **Tab Order**: Logical tab sequence through all interactive elements
- **Keyboard Shortcuts**: Custom keyboard shortcuts for power users
- **Skip Links**: Skip navigation links for screen reader users
- **Focus Trapping**: Proper focus management in modals and dialogs

#### 🎨 Visual Accessibility
- **Color Blindness**: Support for all types of color vision deficiency
- **High Contrast**: Enhanced contrast options for better visibility
- **Font Scaling**: Responsive typography that scales with user preferences
- **Motion Sensitivity**: Reduced motion options for users with vestibular disorders

### Accessibility Testing

#### 🧪 Testing Tools
- **Lighthouse Accessibility**: Automated accessibility auditing
- **WAVE Evaluation Tool**: Web accessibility evaluation
- **NVDA Screen Reader**: Screen reader compatibility testing
- **Keyboard-only Testing**: Testing without mouse interaction

#### 📋 Accessibility Checklist
- [ ] **Color Contrast**: All text meets WCAG AA standards
- [ ] **Alt Text**: All images have descriptive alt text
- [ ] **Semantic HTML**: Proper heading hierarchy and semantic elements
- [ ] **Keyboard Navigation**: All functions accessible via keyboard
- [ ] **Screen Reader**: Content readable by screen readers
- [ ] **Focus Indicators**: Visible focus indicators on all elements
- [ ] **Error Handling**: Form errors clearly communicated
- [ ] **Language**: Document language properly set

## 📖 Comprehensive API Documentation

This boilerplate provides a complete set of APIs for AI chat, email services, and future extensibility.

### 🤖 AI Chat API

The AI Chat API provides streaming and non-streaming access to multiple AI models through OpenRouter.

#### Endpoint: `POST /api/ai`

**Streaming Chat (Recommended)**
```typescript
const response = await fetch('/api/ai?stream=true', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    messages: [
      { role: 'user', content: 'Explain quantum computing' }
    ],
    model: 'meta-llama/llama-3.1-8b-instruct:free',
    temperature: 0.7,
    max_tokens: 1000,
    stream: true
  })
})

const reader = response.body?.getReader()
// Handle streaming response with Server-Sent Events
```

**Non-Streaming Chat**
```typescript
const response = await fetch('/api/ai', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    messages: [
      { role: 'user', content: 'Hello, how are you?' }
    ],
    model: 'meta-llama/llama-3.1-8b-instruct:free',
    temperature: 0.7,
    max_tokens: 500
  })
})

const data = await response.json()
console.log(data.choices[0].message.content)
```

#### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `messages` | Array | ✅ | Array of chat messages with `role` and `content` |
| `model` | String | ✅ | AI model ID (see available models below) |
| `temperature` | Number | ❌ | Controls randomness (0.0 - 2.0, default: 0.7) |
| `max_tokens` | Number | ❌ | Maximum tokens to generate (default: 1000) |
| `stream` | Boolean | ❌ | Enable streaming response (default: false) |
| `top_p` | Number | ❌ | Nucleus sampling parameter (0.0 - 1.0) |
| `frequency_penalty` | Number | ❌ | Reduce repetition (-2.0 - 2.0) |

#### Available Models

| Model ID | Provider | Context | Best For |
|----------|----------|---------|----------|
| `meta-llama/llama-3.1-8b-instruct:free` | Meta | 8K | General purpose |
| `meta-llama/llama-3.1-70b-instruct:free` | Meta | 8K | Complex tasks |
| `google/gemini-flash-1.5:free` | Google | 1M | Fast responses |
| `microsoft/phi-3-medium-128k-instruct:free` | Microsoft | 4K | Coding |
| `mistralai/mistral-7b-instruct:free` | Mistral | 32K | Technical |

#### Response Format

**Success Response (Non-streaming):**
```json
{
  "success": true,
  "data": {
    "id": "chatcmpl-abc123",
    "object": "chat.completion",
    "created": 1677858242,
  "model": "meta-llama/llama-3.1-8b-instruct:free",
    "choices": [{
      "message": {
        "role": "assistant",
        "content": "Hello! I'm doing well, thank you for asking."
      },
      "finish_reason": "stop",
      "index": 0
    }],
    "usage": {
      "prompt_tokens": 13,
      "completion_tokens": 7,
      "total_tokens": 20
    }
  }
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "Invalid API key or model not available",
  "code": "AUTHENTICATION_ERROR"
}
```

### 📧 Email API

Professional email service with HTML templates and ByVeya branding.

#### Endpoint: `POST /api/email`

```typescript
const response = await fetch('/api/email', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    type: 'welcome',
    to: 'user@example.com',
    name: 'John Doe',
    customData: {
      dashboardUrl: 'https://app.example.com/dashboard'
    }
  })
})

const result = await response.json()
```

#### Email Types

| Type | Description | Required Fields |
|------|-------------|-----------------|
| `welcome` | New user welcome email | `to`, `name` |
| `password-reset` | Password reset with secure link | `to`, `name`, `resetToken` |
| `verification` | Email verification | `to`, `name`, `verificationUrl` |
| `notification` | Custom notification | `to`, `name`, `subject`, `message` |

#### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `type` | String | ✅ | Email template type |
| `to` | String | ✅ | Recipient email address |
| `name` | String | ✅ | Recipient name |
| `subject` | String | ❌ | Custom subject (for notifications) |
| `message` | String | ❌ | Custom message (for notifications) |
| `customData` | Object | ❌ | Additional template data |

#### Response Format

**Success Response:**
```json
{
  "success": true,
  "data": {
    "id": "msg_abc123",
  "to": "user@example.com",
    "status": "sent"
  }
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "Failed to send email",
  "details": "Invalid email address"
}
```

### 🔐 Authentication APIs

#### User Registration
```typescript
const { data, error } = await supabase.auth.signUp({
  email: 'user@example.com',
  password: 'securepassword123',
  options: {
    data: {
      name: 'John Doe'
    }
  }
})
```

#### User Login
```typescript
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'user@example.com',
  password: 'securepassword123'
})
```

#### Password Reset
```typescript
const { error } = await supabase.auth.resetPasswordForEmail('user@example.com', {
  redirectTo: 'https://app.example.com/reset-password'
})
```

#### Session Management
```typescript
// Get current session
const { data: { session } } = await supabase.auth.getSession()

// Listen for auth changes
supabase.auth.onAuthStateChange((event, session) => {
  console.log(event, session)
})
```

### 🔧 Utility APIs (Planned)

#### Health Check
```typescript
// GET /api/health
{
  "status": "healthy",
  "timestamp": "2024-01-01T00:00:00Z",
  "services": {
    "database": "connected",
    "ai": "available",
    "email": "operational"
  }
}
```

#### Metrics (Future)
```typescript
// GET /api/metrics
{
  "requests": 1250,
  "errors": 12,
  "avgResponseTime": 245,
  "activeUsers": 89
}
```

## 🧠 Memory Bank System

This boilerplate includes a sophisticated Memory Bank system for AI-powered development context management, enabling intelligent development assistance and project continuity.

### Memory Bank Architecture

#### 📁 Memory Bank Structure
```
memory-bank/
├── activeContext.md     # Current project state and context
├── progress.md         # Development progress tracking
├── systemPatterns.md   # Architectural patterns and decisions
├── techContext.md      # Technology stack and implementation details
└── sessionLogs/        # Individual development session records
```

#### 🎯 Memory Bank Features
- **Context Preservation**: Maintains project context across development sessions
- **AI-Assisted Development**: Provides context-aware AI assistance
- **Progress Tracking**: Comprehensive development progress documentation
- **Pattern Recognition**: Learns and suggests architectural patterns
- **Knowledge Base**: Accumulates project-specific knowledge over time

### Memory Bank Integration

#### Automatic Updates
The memory bank automatically updates through development workflows:

```bash
# Update memory bank after significant changes
npm run memory:update

# Memory bank updates include:
# - New features implemented
# - Architectural decisions made
# - Technical challenges solved
# - Code patterns established
# - Development progress milestones
```

#### AI Development Assistance
```typescript
// Memory bank provides context for AI assistance
// Example: AI understands project patterns and can suggest improvements
interface MemoryContext {
  currentPhase: string
  recentChanges: string[]
  establishedPatterns: Pattern[]
  technicalConstraints: Constraint[]
  userPreferences: Preferences
}
```

### Development Session Management

#### Session Logging
Each development session is automatically logged with:
- **Session Start/End**: Timestamp tracking
- **Changes Made**: File modifications and additions
- **Decisions Taken**: Architectural and technical decisions
- **Challenges Faced**: Problems encountered and solutions
- **Lessons Learned**: Insights gained during development

#### Context Continuity
- **Resume Development**: Pick up where you left off with full context
- **Team Collaboration**: Share development context with team members
- **Onboarding**: New developers can quickly understand project state
- **Code Reviews**: Historical context for better code review decisions

## 🤝 Contributing Guidelines

We welcome contributions to improve this boilerplate! Please follow these guidelines:

### Development Process

1. **Fork the Repository**
   ```bash
   git clone https://github.com/yourusername/nextjs-boilerplate.git
   cd nextjs-boilerplate
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/issue-description
   ```

3. **Set Up Development Environment**
   ```bash
   npm install
   cp env.example .env.local
   # Configure your environment variables
   npm run dev
   ```

4. **Follow Code Standards**
   - TypeScript strict mode compliance
   - ESLint rules adherence
   - Component follows ReUI patterns
   - Comprehensive test coverage
   - Accessibility WCAG AA compliance

5. **Update Documentation**
   - Update README for new features
   - Add JSDoc comments for new functions
   - Update API documentation
   - Include usage examples

6. **Test Thoroughly**
   - Unit tests for new components
   - Integration tests for new features
   - Accessibility testing
   - Cross-browser compatibility

7. **Submit Pull Request**
   - Clear, descriptive PR title
   - Detailed description of changes
   - Screenshots for UI changes
   - Link to related issues

### Code Review Process

#### Review Checklist
- [ ] **TypeScript**: Proper typing and no `any` types
- [ ] **Components**: Follow ReUI patterns and shadcn/ui standards
- [ ] **Accessibility**: WCAG AA compliance maintained
- [ ] **Security**: No security vulnerabilities introduced
- [ ] **Performance**: No performance regressions
- [ ] **Testing**: Adequate test coverage
- [ ] **Documentation**: Code and API documentation updated

#### Commit Message Standards
```
feat: add AI chat streaming functionality
fix: resolve authentication middleware issue
docs: update API documentation for email service
style: format code according to ESLint rules
refactor: simplify component state management
test: add unit tests for user registration
```

### Issue Reporting

#### Bug Reports
Please include:
- **Steps to reproduce**: Detailed reproduction steps
- **Expected behavior**: What should happen
- **Actual behavior**: What actually happens
- **Environment**: Browser, OS, Node version
- **Screenshots**: Visual evidence of the issue
- **Console errors**: Browser console output

#### Feature Requests
Please include:
- **Problem**: What problem are you trying to solve?
- **Solution**: Proposed solution and implementation
- **Alternatives**: Alternative approaches considered
- **Use case**: How this feature would be used

## 📄 License & Legal

### MIT License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Third-Party Licenses
This project includes third-party components with their respective licenses:
- **Next.js**: MIT License
- **Supabase**: Apache 2.0 License
- **shadcn/ui**: MIT License
- **Tailwind CSS**: MIT License
- **React**: MIT License

## 🙏 Acknowledgments & Credits

### Core Technologies
- **[Next.js](https://nextjs.org/)** - The React framework that makes everything possible
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful, accessible component library
- **[ReUI](https://reui.dev/)** - Scalable component patterns and architecture
- **[Supabase](https://supabase.com/)** - Open-source Firebase alternative
- **[OpenRouter](https://openrouter.ai/)** - Unified AI model access platform
- **[Resend](https://resend.com/)** - Modern email service with great deliverability
- **[Heroicons](https://heroicons.com/)** - Beautiful, consistent iconography
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework

### Development Tools
- **TypeScript** - JavaScript that scales
- **ESLint** - Code linting and quality assurance
- **Prettier** - Code formatting for consistency
- **Vercel** - Optimal deployment platform for Next.js

### Inspiration & Resources
- **Vercel Templates** - Modern Next.js project structure
- **Supabase Examples** - Authentication and database patterns
- **shadcn/ui Showcase** - Component design inspiration
- **OpenRouter Documentation** - AI integration best practices

## 🏢 About ByVeya

**ByVeya** is a modern web development company specializing in:
- **Full-Stack Web Applications** with cutting-edge technologies
- **AI-Powered Solutions** leveraging the latest AI advancements
- **Scalable Architecture** designed for growth and performance
- **User-Centric Design** with accessibility and usability at the core
- **Enterprise-Grade Security** following industry best practices

### Our Mission
To empower businesses with modern, accessible, and intelligent web applications that drive growth and user engagement.

### Contact & Support
- **Website**: [byveya.com](https://byveya.com)
- **Email**: hello@byveya.com
- **GitHub**: [github.com/byveya](https://github.com/byveya)
- **LinkedIn**: [linkedin.com/company/byveya](https://linkedin.com/company/byveya)

---

**Built with ❤️ by [ByVeya](https://byveya.com)** - Modern web development solutions that scale
