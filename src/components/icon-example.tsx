import {
  House,
  UserRound,
  Settings,
  BellRing,
  Search,
  Heart,
  MessageCircle,
  Share2
} from 'lucide-react'

interface IconExampleProps {
  className?: string
}

export function IconExample({ className }: IconExampleProps) {
  return (
    <div className={`flex flex-wrap gap-4 p-4 ${className}`}>
      <div className="flex items-center gap-2">
        <House className="h-6 w-6 text-blue-500" />
        <span>Home</span>
      </div>
      <div className="flex items-center gap-2">
        <UserRound className="h-6 w-6 text-green-500" />
        <span>Profile</span>
      </div>
      <div className="flex items-center gap-2">
        <Settings className="h-6 w-6 text-gray-500" />
        <span>Settings</span>
      </div>
      <div className="flex items-center gap-2">
        <BellRing className="h-6 w-6 text-yellow-500" />
        <span>Notifications</span>
      </div>
      <div className="flex items-center gap-2">
        <Search className="h-6 w-6 text-purple-500" />
        <span>Search</span>
      </div>
      <div className="flex items-center gap-2">
        <Heart className="h-6 w-6 text-red-500" />
        <span>Favourite</span>
      </div>
      <div className="flex items-center gap-2">
        <MessageCircle className="h-6 w-6 text-indigo-500" />
        <span>Chat</span>
      </div>
      <div className="flex items-center gap-2">
        <Share2 className="h-6 w-6 text-teal-500" />
        <span>Share</span>
      </div>
    </div>
  )
}
