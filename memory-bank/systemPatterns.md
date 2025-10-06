# System Patterns

## Architectural Patterns

### 1. Next.js 15 App Router Pattern
- **File-based routing** with `app/` directory
- **Route groups** for organization `(auth)/`
- **Server Components** by default
- **Client Components** with `'use client'` directive
- **API Routes** in `app/api/` directory

### 2. Component Architecture

#### shadcn/ui Integration
```typescript
// Base component pattern
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        // ... more variants
      }
    }
  }
)
```

#### ReUI Pattern Implementation
```typescript
// Prop-based component design
interface ComponentProps {
  className?: string
  variant?: 'default' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export function Component({ className, variant = 'default', size = 'md', children }: ComponentProps) {
  return (
    <div className={cn(componentVariants({ variant, size }), className)}>
      {children}
    </div>
  )
}
```

### 3. Authentication Pattern

#### Supabase Auth Flow
```typescript
// Client-side auth
const { data: { user } } = await supabase.auth.getUser()

// Server-side auth
const supabase = createClient()
const { data: { user } } = await supabase.auth.getUser()

// Middleware protection
export async function middleware(request: NextRequest) {
  // Auth check and redirect logic
}
```

#### Protected Route Pattern
```typescript
// Route protection
if (request.nextUrl.pathname.startsWith('/dashboard') && !user) {
  return NextResponse.redirect(new URL('/login', request.url))
}
```

### 4. API Route Patterns

#### OpenRouter Integration
```typescript
// Streaming response pattern
export async function POST(request: NextRequest) {
  const stream = await streamChatWithAI(body)
  
  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
    },
  })
}
```

#### Error Handling Pattern
```typescript
try {
  const result = await operation()
  return NextResponse.json({ success: true, data: result })
} catch (error) {
  console.error('API Error:', error)
  return NextResponse.json(
    { error: 'Internal server error' },
    { status: 500 }
  )
}
```

#### Unsplash API Integration Pattern
```typescript
// API route pattern for external services
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const action = searchParams.get('action')

    switch (action) {
      case 'search': {
        const query = searchParams.get('query')
        const params: SearchPhotosParams = {
          query: query!,
          page: parseInt(searchParams.get('page') || '1'),
          per_page: parseInt(searchParams.get('per_page') || '10'),
          orientation: searchParams.get('orientation') as 'landscape' | 'portrait' | 'squarish',
          order_by: searchParams.get('order_by') as 'latest' | 'oldest' | 'popular' | 'relevant',
        }

        const result = await searchPhotos(query!, params)
        return NextResponse.json(result)
      }

      case 'random': {
        const params: RandomPhotosParams = {
          count: parseInt(searchParams.get('count') || '1'),
          query: searchParams.get('query'),
          orientation: searchParams.get('orientation') as 'landscape' | 'portrait' | 'squarish',
        }

        const result = await getRandomPhotos(params)
        return NextResponse.json(result)
      }

      case 'photo': {
        const id = searchParams.get('id')
        if (!id) {
          return NextResponse.json(
            { error: 'Photo ID required' },
            { status: 400 }
          )
        }

        const result = await getPhoto(id)
        return NextResponse.json(result)
      }

      default:
        return NextResponse.json(
          { error: 'Invalid action. Use: search, random, photo' },
          { status: 400 }
        )
    }
  } catch (error) {
    console.error('Unsplash API Error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    )
  }
}
```

#### Unsplash Photo Attribution Pattern
```typescript
// Required attribution for Unsplash photos
function PhotoAttribution({ photo }: { photo: UnsplashPhoto }) {
  return (
    <div className="photo-credit">
      <a
        href={photo.links.html}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        Photo by {photo.user.name} on Unsplash
      </a>
    </div>
  )
}

// Usage in components
<img
  src={photo.urls.regular}
  alt={photo.description || 'Unsplash photo'}
  className="w-full h-64 object-cover rounded-lg"
/>
<PhotoAttribution photo={photo} />
```

### 5. State Management Patterns

#### Client State
```typescript
// Local state with useState
const [selectedModel, setSelectedModel] = useState('default-model')

// Form state management
const [formData, setFormData] = useState({
  email: '',
  password: ''
})
```

#### Server State
```typescript
// Server-side data fetching
async function getData() {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('table')
    .select('*')
  
  if (error) throw error
  return data
}
```

### 6. Styling Patterns

#### Tailwind CSS with CSS Variables
```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  /* ... more variables */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... dark mode variables */
}
```

#### Component Styling
```typescript
// Utility function for class merging
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Usage in components
<div className={cn("base-classes", conditionalClasses, className)}>
```

### 7. Email Service Patterns

#### Template Pattern
```typescript
// Email template structure
export async function sendWelcomeEmail(data: WelcomeEmailData) {
  const html = `
    <!DOCTYPE html>
    <html>
      <head><!-- meta tags --></head>
      <body>
        <!-- Professional HTML template -->
        <div style="max-width: 600px; margin: 0 auto;">
          <!-- Content with ByVeya branding -->
        </div>
      </body>
    </html>
  `
  
  return await resend.emails.send({
    from: 'noreply@byveya.com',
    to: data.to,
    subject: 'Welcome!',
    html,
  })
}
```

### 8. Error Handling Patterns

#### Toast Notifications
```typescript
// Success pattern
toast.success('Operation completed successfully!')

// Error pattern
toast.error('Something went wrong. Please try again.')

// Loading pattern
const [loading, setLoading] = useState(false)
// ... in async function
setLoading(true)
try {
  await operation()
  toast.success('Success!')
} catch (error) {
  toast.error('Error occurred')
} finally {
  setLoading(false)
}
```

### 9. Type Safety Patterns

#### API Response Types
```typescript
interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
}

interface ChatRequest {
  messages: ChatMessage[]
  model: string
  temperature?: number
}
```

#### Component Props Types
```typescript
interface ComponentProps {
  className?: string
  children: React.ReactNode
  variant?: 'default' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}
```

### 10. File Organization Patterns

#### Feature-based Organization
```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Auth feature group
│   ├── api/               # API routes
│   └── dashboard/         # Dashboard feature
├── components/            # Shared components
│   ├── ui/                # Base UI components
│   └── feature/           # Feature-specific components
├── lib/                   # Utilities and services
│   ├── supabase/          # Supabase utilities
│   └── services/          # External services
└── hooks/                 # Custom React hooks
```

#### Import Patterns
```typescript
// Absolute imports with @ alias
import { Button } from '@/components/ui/button'
import { supabase } from '@/lib/supabase/client'
import { cn } from '@/lib/utils'

// Relative imports for local files
import { ModelSelector } from './model-selector'
import { IconExample } from '../icon-example'
```

## Design Principles

### 1. Separation of Concerns
- **UI Components**: Pure presentation logic
- **Business Logic**: Separate utility functions
- **API Routes**: Handle external integrations
- **Middleware**: Cross-cutting concerns

### 2. Reusability
- **Base Components**: shadcn/ui foundation
- **ReUI Patterns**: Copy-paste component approach
- **Utility Functions**: Shared across components
- **Type Definitions**: Centralized type system

### 3. Accessibility First
- **Semantic HTML**: Proper element usage
- **ARIA Attributes**: Screen reader support
- **Keyboard Navigation**: Full keyboard support
- **Color Contrast**: WCAG AA compliance

### 4. Performance Optimization
- **Server Components**: Default rendering strategy
- **Client Components**: Only when necessary
- **Code Splitting**: Automatic with Next.js
- **Image Optimization**: Next.js Image component

### 5. Security Best Practices
- **Environment Variables**: Sensitive data protection
- **Input Validation**: Client and server-side
- **Authentication**: Supabase RLS
- **CSRF Protection**: Built-in Next.js features
