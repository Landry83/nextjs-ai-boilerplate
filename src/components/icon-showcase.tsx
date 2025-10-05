import React from 'react'
import {
  // Lucide React Icons
  House,
  UserRound,
  Settings,
  BellRing,
  Search,
  Heart,
  MessageCircle,
  Share2,
  Send,
  Square,
  RotateCcw,
  User,
  Bot,
  Eye,
  EyeOff,
  Check,
  Sparkles,
  Code,
  Zap,
  Palette,
  ArrowLeft,
  Database,
  Code2
} from 'lucide-react'

// Phosphor Icons
import {
  House as PhosphorHouse,
  User as PhosphorUser,
  Gear as PhosphorSettings,
  Bell as PhosphorBell,
  MagnifyingGlass as PhosphorSearch,
  Heart as PhosphorHeart,
  ChatCircle as PhosphorChat,
  ShareNetwork as PhosphorShare,
  PaperPlaneRight as PhosphorSend,
  Square as PhosphorSquare,
  ArrowCounterClockwise as PhosphorRotate,
  Check as PhosphorCheck,
  Sparkle as PhosphorSparkle,
  Code as PhosphorCode,
  Lightning as PhosphorLightning,
  Palette as PhosphorPalette,
  ArrowLeft as PhosphorArrowLeft,
  Database as PhosphorDatabase
} from 'phosphor-react'

// Tabler Icons
import {
  IconHome as TablerHome,
  IconUser as TablerUser,
  IconSettings as TablerSettings,
  IconBell as TablerBell,
  IconSearch as TablerSearch,
  IconHeart as TablerHeart,
  IconMessageCircle as TablerMessage,
  IconShare as TablerShare,
  IconSend as TablerSend,
  IconSquare as TablerSquare,
  IconRefresh as TablerRefresh,
  IconCheck as TablerCheck,
  IconSparkles as TablerSparkle,
  IconCode as TablerCode,
  IconBolt as TablerBolt,
  IconPalette as TablerPalette,
  IconArrowLeft as TablerArrowLeft,
  IconDatabase as TablerDatabase
} from '@tabler/icons-react'

interface IconShowcaseProps {
  className?: string
}

const iconLibraries = {
  lucide: {
    name: 'Lucide React',
    icons: [
      { Icon: House, name: 'Home' },
      { Icon: UserRound, name: 'Profile' },
      { Icon: Settings, name: 'Settings' },
      { Icon: BellRing, name: 'Notifications' },
      { Icon: Search, name: 'Search' },
      { Icon: Heart, name: 'Favourite' },
      { Icon: MessageCircle, name: 'Chat' },
      { Icon: Share2, name: 'Share' },
      { Icon: Send, name: 'Send' },
      { Icon: Square, name: 'Stop' },
      { Icon: RotateCcw, name: 'Refresh' },
      { Icon: User, name: 'User' },
      { Icon: Bot, name: 'AI Bot' },
      { Icon: Eye, name: 'Show' },
      { Icon: EyeOff, name: 'Hide' },
      { Icon: Check, name: 'Check' },
      { Icon: Sparkles, name: 'Magic' },
      { Icon: Code, name: 'Code' },
      { Icon: Zap, name: 'Fast' },
      { Icon: Palette, name: 'Creative' },
      { Icon: ArrowLeft, name: 'Back' },
      { Icon: Database, name: 'Database' },
      { Icon: Code2, name: 'Next.js' }
    ]
  },
  phosphor: {
    name: 'Phosphor Icons',
    icons: [
      { Icon: PhosphorHouse, name: 'Home' },
      { Icon: PhosphorUser, name: 'Profile' },
      { Icon: PhosphorSettings, name: 'Settings' },
      { Icon: PhosphorBell, name: 'Notifications' },
      { Icon: PhosphorSearch, name: 'Search' },
      { Icon: PhosphorHeart, name: 'Favourite' },
      { Icon: PhosphorChat, name: 'Chat' },
      { Icon: PhosphorShare, name: 'Share' },
      { Icon: PhosphorSend, name: 'Send' },
      { Icon: PhosphorSquare, name: 'Stop' },
      { Icon: PhosphorRotate, name: 'Refresh' },
      { Icon: PhosphorCheck, name: 'Check' },
      { Icon: PhosphorSparkle, name: 'Magic' },
      { Icon: PhosphorCode, name: 'Code' },
      { Icon: PhosphorLightning, name: 'Fast' },
      { Icon: PhosphorPalette, name: 'Creative' },
      { Icon: PhosphorArrowLeft, name: 'Back' },
      { Icon: PhosphorDatabase, name: 'Database' }
    ]
  },
  tabler: {
    name: 'Tabler Icons',
    icons: [
      { Icon: TablerHome, name: 'Home' },
      { Icon: TablerUser, name: 'Profile' },
      { Icon: TablerSettings, name: 'Settings' },
      { Icon: TablerBell, name: 'Notifications' },
      { Icon: TablerSearch, name: 'Search' },
      { Icon: TablerHeart, name: 'Favourite' },
      { Icon: TablerMessage, name: 'Chat' },
      { Icon: TablerShare, name: 'Share' },
      { Icon: TablerSend, name: 'Send' },
      { Icon: TablerSquare, name: 'Stop' },
      { Icon: TablerRefresh, name: 'Refresh' },
      { Icon: TablerCheck, name: 'Check' },
      { Icon: TablerSparkle, name: 'Magic' },
      { Icon: TablerCode, name: 'Code' },
      { Icon: TablerBolt, name: 'Fast' },
      { Icon: TablerPalette, name: 'Creative' },
      { Icon: TablerArrowLeft, name: 'Back' },
      { Icon: TablerDatabase, name: 'Database' }
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
          <h3 className="text-lg font-semibold text-foreground border-b pb-2">
            {library.name}
          </h3>
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
