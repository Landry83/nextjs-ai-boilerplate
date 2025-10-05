import React from 'react'
import {
  // Lucide React Icons (used in icon-example.tsx)
  House,
  UserRound,
  Settings,
  BellRing,
  Search,
  Heart,
  MessageCircle,
  Share2,
  Check,
  Sparkles,
  Database,
  Code2,
  Mail,
  Zap,
  Palette
} from 'lucide-react'

// Phosphor Icons (used in chat components and model selector)
import {
  User as PhosphorUser,
  Chats as PhosphorChats,
  PaperPlaneRight as PhosphorSend,
  Square as PhosphorSquare,
  Sparkle as PhosphorSparkle,
  Code as PhosphorCode,
  Lightning as PhosphorLightning,
  Palette as PhosphorPalette
} from 'phosphor-react'

// Tabler Icons (used in main page and brand icons)
import {
  IconBrandNextjs as TablerNextjs,
  IconBrandSupabase as TablerSupabase,
  IconBrandOpenai as TablerOpenAI,
  IconMail as TablerMail,
  IconRefresh as TablerRefresh,
  IconRobot as TablerBot,
  IconSend as TablerSend,
  IconCheck as TablerCheck
} from '@tabler/icons-react'

interface IconShowcaseProps {
  className?: string
}

const iconLibraries = {
  lucide: {
    name: 'Lucide React (Examples)',
    description: 'Used in icon-example.tsx component',
    icons: [
      { Icon: House, name: 'Home' },
      { Icon: UserRound, name: 'Profile' },
      { Icon: Settings, name: 'Settings' },
      { Icon: BellRing, name: 'Notifications' },
      { Icon: Search, name: 'Search' },
      { Icon: Heart, name: 'Favourite' },
      { Icon: MessageCircle, name: 'Chat' },
      { Icon: Share2, name: 'Share' },
      { Icon: Check, name: 'Check' },
      { Icon: Sparkles, name: 'Magic' },
      { Icon: Database, name: 'Database' },
      { Icon: Code2, name: 'Next.js' },
      { Icon: Mail, name: 'Email' },
      { Icon: Zap, name: 'Fast' },
      { Icon: Palette, name: 'Creative' }
    ]
  },
  phosphor: {
    name: 'Phosphor Icons (Chat & AI)',
    description: 'Used in chat components and model selector',
    icons: [
      { Icon: PhosphorUser, name: 'User (Chat)' },
      { Icon: PhosphorChats, name: 'AI Integration' },
      { Icon: PhosphorSend, name: 'Send (Chat)' },
      { Icon: PhosphorSquare, name: 'Stop (Chat)' },
      { Icon: PhosphorSparkle, name: 'General AI' },
      { Icon: PhosphorCode, name: 'Code AI' },
      { Icon: PhosphorLightning, name: 'Fast AI' },
      { Icon: PhosphorPalette, name: 'Creative AI' }
    ]
  },
  tabler: {
    name: 'Tabler Icons (Brands & UI)',
    description: 'Used in main page for brand icons and chat features',
    icons: [
      { Icon: TablerNextjs, name: 'Next.js Brand' },
      { Icon: TablerSupabase, name: 'Supabase Brand' },
      { Icon: TablerOpenAI, name: 'OpenRouter AI' },
      { Icon: TablerMail, name: 'Email Service' },
      { Icon: TablerRefresh, name: 'Clear Chat' },
      { Icon: TablerBot, name: 'AI Bot' },
      { Icon: TablerSend, name: 'Send Message' },
      { Icon: TablerCheck, name: 'Model Selected' }
    ]
  }
}

export function IconShowcase({ className }: IconShowcaseProps) {
  return (
    <div className={`space-y-8 p-6 ${className}`}>
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Icon Library Showcase
        </h2>
        <p className="text-muted-foreground">
          Choose from multiple icon libraries for unique, modern designs
        </p>
      </div>

      {Object.entries(iconLibraries).map(([key, library]) => (
        <div key={key} className="space-y-4">
          <div className="border-b pb-2">
            <h3 className="text-lg font-semibold text-foreground">
              {library.name}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {library.description}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {library.icons.map(({ Icon, name }, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-3 rounded-lg border bg-card hover:bg-accent transition-colors"
              >
                <Icon className="h-6 w-6 text-primary mb-2" />
                <span className="text-xs text-center text-muted-foreground">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="mt-8 p-4 bg-muted rounded-lg">
        <h4 className="font-semibold mb-2">Usage Examples:</h4>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p><strong>Lucide React:</strong> <code>import &#123; House &#125; from 'lucide-react'</code></p>
          <p><strong>Phosphor:</strong> <code>import &#123; House &#125; from 'phosphor-react'</code></p>
          <p><strong>Tabler:</strong> <code>import &#123; IconHome &#125; from '@tabler/icons-react'</code></p>
        </div>
      </div>
    </div>
  )
}
