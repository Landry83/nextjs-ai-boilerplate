'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { supabase } from '@/lib/supabase/client'
import { toast } from 'react-hot-toast'
import { UserIcon, CogIcon, ArrowRightOnRectangleIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
import { ModelSelector } from '@/components/ai/model-selector'
import { IconExample } from '@/components/icon-example'
import { ReUIExample } from '@/components/reui-example'

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null)
  const [selectedModel, setSelectedModel] = useState('meta-llama/llama-3.1-8b-instruct:free')
  const router = useRouter()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
    }
    getUser()
  }, [])

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      toast.error('Error signing out')
    } else {
      toast.success('Successfully signed out')
      router.push('/')
    }
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Loading...</h2>
          <p>Please wait while we load your dashboard.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => router.push('/chat')}
                className="flex items-center gap-2"
              >
                <ChatBubbleLeftRightIcon className="h-4 w-4" />
                AI Chat
              </Button>
              <div className="flex items-center space-x-2">
                <UserIcon className="h-5 w-5 text-gray-500" />
                <span className="text-sm text-gray-700">{user.email}</span>
              </div>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <ArrowRightOnRectangleIcon className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* AI Model Selector */}
            <div className="lg:col-span-1">
              <ModelSelector
                selectedModel={selectedModel}
                onModelChange={setSelectedModel}
              />
            </div>

            {/* User Info Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserIcon className="h-5 w-5" />
                  User Information
                </CardTitle>
                <CardDescription>
                  Your account details and preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <p className="text-sm text-gray-900">{user.email}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">User ID</label>
                  <p className="text-sm text-gray-900 font-mono">{user.id}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Last Sign In</label>
                  <p className="text-sm text-gray-900">
                    {user.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleString() : 'N/A'}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Component Examples */}
          <div className="mt-8 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Heroicons Examples</CardTitle>
                <CardDescription>
                  Demonstration of Heroicons integration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <IconExample />
              </CardContent>
            </Card>

            <ReUIExample />
          </div>
        </div>
      </main>
    </div>
  )
}
