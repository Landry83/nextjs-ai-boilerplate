# Technology Context

## Core Technologies

### Next.js 15
- **Version**: 15.0.3
- **Features**: App Router, Server Components, Streaming
- **TypeScript**: Strict mode enabled
- **Performance**: Automatic optimizations, code splitting
- **Deployment**: Vercel-optimized, works with any platform

### TypeScript
- **Version**: ^5
- **Configuration**: Strict mode with comprehensive type checking
- **Features**: Type safety, IntelliSense, compile-time error detection
- **Integration**: Full Next.js 15 support

### Tailwind CSS
- **Version**: ^3.4.1
- **Configuration**: Custom theme with CSS variables
- **Features**: Utility-first, responsive design, dark mode support
- **Integration**: shadcn/ui compatible configuration

## UI Framework Stack

### shadcn/ui
- **Version**: Latest (3.4.0)
- **Style**: New York (recommended)
- **Components**: Button, Input, Card, Toast, and more
- **Features**: Copy-paste components, customizable, accessible
- **Integration**: Tailwind CSS + Radix UI primitives

### ReUI
- **Pattern**: Copy-and-paste component library
- **Foundation**: React + Motion + Tailwind CSS
- **Design**: AI-optimized prop system
- **Features**: Zero dependencies, flexible customization
- **Integration**: Built on shadcn/ui fundamentals

### Heroicons
- **Version**: @heroicons/react
- **Types**: Outline and solid variants
- **Features**: SVG icons, accessible, consistent
- **Usage**: React components with Tailwind classes

## Backend & Database

### Supabase
- **Client**: @supabase/supabase-js
- **SSR**: @supabase/ssr for Next.js integration
- **Features**: 
  - PostgreSQL database
  - Real-time subscriptions
  - Row Level Security (RLS)
  - Authentication with multiple providers
  - Storage for files
- **Configuration**: Environment-based setup

### Authentication Flow
```typescript
// Client-side
const { data: { user } } = await supabase.auth.getUser()

// Server-side
const supabase = createClient()
const { data: { user } } = await supabase.auth.getUser()

// Middleware protection
export async function middleware(request: NextRequest) {
  // Auth check and redirect logic
}
```

## AI Integration

### OpenRouter
- **SDK**: OpenAI compatible client
- **Models**: Multiple free models available
- **Features**:
  - Streaming responses
  - Model selection
  - Error handling
  - Rate limiting
- **Configuration**: API key-based authentication

### Available AI Models
1. **Meta Llama 3.1 8B** - General purpose, coding tasks
2. **Meta Llama 3.1 70B** - Complex reasoning, advanced tasks
3. **Google Gemini Flash 1.5** - Fast responses, general use
4. **Microsoft Phi-3 Medium** - Efficient, balanced performance
5. **Mistral 7B** - Coding-focused, technical tasks

### AI Integration Pattern
```typescript
// Model configuration
export const FREE_MODELS: AIModel[] = [
  {
    id: 'meta-llama/llama-3.1-8b-instruct:free',
    name: 'Llama 3.1 8B',
    description: 'Meta\'s Llama 3.1 model, excellent for general chat and coding tasks',
    provider: 'Meta',
    category: 'general',
    cost: 'free'
  }
  // ... more models
]

// API usage
const response = await chatWithAI({
  messages: [{ role: 'user', content: 'Hello!' }],
  model: 'meta-llama/llama-3.1-8b-instruct:free'
})
```

## Email Service

### Resend
- **SDK**: resend package
- **Features**:
  - Transactional emails
  - HTML templates
  - Professional styling
  - ByVeya branding
- **Templates**: Welcome, password reset, notifications

### Email Service Pattern
```typescript
// Email templates
export async function sendWelcomeEmail(data: WelcomeEmailData) {
  const html = `<!-- Professional HTML template -->`
  
  return await resend.emails.send({
    from: 'noreply@byveya.com',
    to: data.to,
    subject: 'Welcome!',
    html,
  })
}
```

## Notifications

### react-hot-toast
- **Version**: Latest
- **Features**:
  - Toast notifications
  - Custom styling
  - Success/error states
  - Design system integration
- **Configuration**: Theme-aware styling

### Toast Integration
```typescript
// Success notification
toast.success('Operation completed!')

// Error notification
toast.error('Something went wrong!')

// Custom styling
<Toaster
  position="top-right"
  toastOptions={{
    style: {
      background: 'hsl(var(--background))',
      color: 'hsl(var(--foreground))',
    }
  }}
/>
```

## Development Tools

### ESLint
- **Configuration**: Next.js recommended rules
- **Features**: Code quality, consistency, error detection
- **Integration**: VS Code compatible

### PostCSS
- **Configuration**: Tailwind CSS + Autoprefixer
- **Features**: CSS processing, vendor prefixes
- **Integration**: Automatic with Tailwind

## Environment Configuration

### Required Environment Variables
```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# OpenRouter
OPENROUTER_API_KEY=your_openrouter_api_key

# Resend
RESEND_API_KEY=your_resend_api_key

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Environment Setup
1. **Development**: `.env.local` file
2. **Production**: Platform-specific environment variables
3. **Security**: Never commit sensitive keys
4. **Validation**: Runtime environment checks

## Performance Optimizations

### Next.js Optimizations
- **Server Components**: Default rendering strategy
- **Code Splitting**: Automatic route-based splitting
- **Image Optimization**: Next.js Image component
- **Bundle Analysis**: Built-in bundle analyzer

### Supabase Optimizations
- **Connection Pooling**: Automatic connection management
- **Caching**: Built-in query caching
- **Real-time**: Efficient subscription management
- **RLS**: Database-level security

### Tailwind Optimizations
- **Purge**: Unused CSS removal
- **JIT**: Just-in-time compilation
- **Tree Shaking**: Unused utility removal
- **Custom Properties**: CSS variable usage

## Security Considerations

### Authentication Security
- **Supabase RLS**: Row-level security
- **JWT Tokens**: Secure session management
- **CSRF Protection**: Built-in Next.js protection
- **Input Validation**: Client and server-side

### API Security
- **Environment Variables**: Sensitive data protection
- **Rate Limiting**: OpenRouter API limits
- **Error Handling**: Secure error messages
- **CORS**: Proper cross-origin configuration

### Data Security
- **Encryption**: Supabase database encryption
- **Backups**: Automatic database backups
- **Access Control**: Role-based permissions
- **Audit Logs**: Supabase audit logging

## Deployment Considerations

### Platform Support
- **Vercel**: Recommended, optimized for Next.js
- **Netlify**: Full support with edge functions
- **Railway**: Easy deployment with database
- **AWS**: Amplify or custom EC2 setup

### Environment Setup
- **Production URLs**: Update Supabase redirect URLs
- **Domain Verification**: Resend domain setup
- **SSL Certificates**: Automatic with most platforms
- **CDN**: Automatic with Vercel/Netlify

### Monitoring
- **Error Tracking**: Built-in Next.js error handling
- **Performance**: Web Vitals monitoring
- **Analytics**: Optional integration
- **Logging**: Structured logging patterns
