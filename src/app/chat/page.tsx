import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { ChatInterface } from '@/components/chat/chat-interface'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default async function ChatPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Link href="/dashboard">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              AI Chat
            </h1>
            <p className="text-muted-foreground">
              Chat with our AI models powered by OpenRouter
            </p>
          </div>
          
          <ChatInterface userId={user.id} />
          
          {/* Footer */}
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>
              Built by{' '}
              <a 
                href="https://byveya.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                ByVeya
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
