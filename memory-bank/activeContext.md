# Active Context

## Current Project: Next.js 15 Boilerplate

### Project Overview
A comprehensive Next.js 15 boilerplate with modern tools and best practices, including AI integration, authentication, and beautiful UI components.

### Current Status
✅ **COMPLETED**: Full boilerplate implementation with all requested features
- Next.js 15 with TypeScript and App Router
- shadcn/ui + ReUI component integration
- Heroicons for consistent iconography
- OpenRouter AI integration with multiple free models
- Supabase backend and authentication
- Resend email service with templates
- Toast notifications with react-hot-toast
- **NEW**: AI Chat Interface with real-time streaming
- Comprehensive documentation

### Key Features Implemented
1. **AI Integration**: OpenRouter with 5 free models (Llama, Gemini, Phi-3, Mistral)
2. **AI Chat Interface**: Real-time streaming chat with model selection
3. **Authentication**: Complete Supabase auth flow with protected routes
4. **UI Components**: shadcn/ui base components + ReUI patterns
5. **Email Service**: Professional templates with ByVeya branding
6. **Notifications**: Toast system integrated with design system
7. **Documentation**: README, SETUP guide, and memory bank

### Technology Stack
- **Frontend**: Next.js 15, TypeScript, Tailwind CSS
- **UI**: shadcn/ui, ReUI, Heroicons
- **Backend**: Supabase (database, auth, real-time)
- **AI**: OpenRouter (multiple free models)
- **Email**: Resend with HTML templates
- **Notifications**: react-hot-toast
- **Styling**: Tailwind CSS with CSS variables

### File Structure
```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Auth pages (login, signup)
│   ├── api/               # API routes (ai, email)
│   ├── chat/              # AI Chat interface
│   ├── dashboard/         # Protected dashboard
│   └── layout.tsx         # Root layout with providers
├── components/            # React components
│   ├── ai/                # AI model selector
│   ├── chat/              # Chat interface components
│   ├── ui/                # shadcn/ui components
│   └── examples/          # Component examples
├── lib/                   # Utilities
│   ├── supabase/          # Supabase clients
│   ├── ai-models.ts       # AI model configs
│   ├── openrouter.ts      # OpenRouter client
│   └── email.ts           # Email service
└── hooks/                 # Custom hooks
```

### Environment Variables Required
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `OPENROUTER_API_KEY`
- `RESEND_API_KEY`
- `NEXT_PUBLIC_APP_URL`

### Next Steps
- Test all integrations
- Deploy to production
- Add additional features as needed
- Maintain and update dependencies

### Development Notes
- All components follow ReUI patterns with prop-based design
- AI models are categorized by use case (general, coding, fast, creative)
- Authentication uses Supabase middleware for route protection
- Email templates include professional HTML with ByVeya branding
- Toast notifications are styled to match the design system
- WCAG AA compliance maintained throughout
