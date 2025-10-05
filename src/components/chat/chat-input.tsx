'use client'

import { useState, useRef, KeyboardEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Send, Square } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ChatInputProps {
  onSendMessage: (message: string) => void
  isLoading: boolean
  isStreaming: boolean
  onStopGeneration: () => void
}

export function ChatInput({ 
  onSendMessage, 
  isLoading, 
  isStreaming, 
  onStopGeneration 
}: ChatInputProps) {
  const [message, setMessage] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = () => {
    if (message.trim() && !isLoading) {
      onSendMessage(message)
      setMessage('')
      inputRef.current?.focus()
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  const canSend = message.trim().length > 0 && !isLoading
  const showStopButton = isStreaming

  return (
    <div className="flex gap-2">
      <div className="flex-1 relative">
        <Input
          ref={inputRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          disabled={isLoading}
          className="pr-12"
          aria-label="Chat message input"
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2">
          {showStopButton ? (
            <Button
              size="sm"
              variant="outline"
              onClick={onStopGeneration}
              className="h-8 w-8 p-0"
              aria-label="Stop generation"
            >
              <Square className="w-4 h-4" />
            </Button>
          ) : (
            <Button
              size="sm"
              onClick={handleSubmit}
              disabled={!canSend}
              className="h-8 w-8 p-0"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
