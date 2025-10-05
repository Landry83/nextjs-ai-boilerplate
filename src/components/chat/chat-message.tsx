'use client'

import { Card } from '@/components/ui/card'
import { ChatMessageData } from './chat-interface'
import { getModelById } from '@/lib/ai-models'
import { User as PhosphorUser } from 'phosphor-react'
import { IconRobot as TablerBot } from '@tabler/icons-react'
import { cn } from '@/lib/utils'

interface ChatMessageProps {
  message: ChatMessageData
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user'
  const model = message.model ? getModelById(message.model) : null

  return (
    <div className={cn(
      'flex gap-3',
      isUser ? 'justify-end' : 'justify-start'
    )}>
      <div className={cn(
        'flex gap-3 max-w-[80%]',
        isUser ? 'flex-row-reverse' : 'flex-row'
      )}>
        {/* Avatar */}
        <div className={cn(
          'flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center',
          isUser 
            ? 'bg-primary text-primary-foreground' 
            : 'bg-muted text-muted-foreground'
        )}>
          {isUser ? (
            <PhosphorUser className="w-4 h-4" />
          ) : (
            <TablerBot className="w-4 h-4" />
          )}
        </div>

        {/* Message Content */}
        <div className="space-y-1">
          <Card className={cn(
            'p-4 shadow-sm',
            isUser 
              ? 'bg-primary text-primary-foreground' 
              : 'bg-muted/50'
          )}>
            <div className="prose prose-sm max-w-none">
              <div className="whitespace-pre-wrap break-words">
                {message.content}
              </div>
            </div>
          </Card>

          {/* Message Metadata */}
          <div className={cn(
            'flex items-center gap-2 text-xs text-muted-foreground',
            isUser ? 'justify-end' : 'justify-start'
          )}>
            <time dateTime={message.timestamp.toISOString()}>
              {message.timestamp.toLocaleTimeString([], { 
                hour: '2-digit', 
                minute: '2-digit' 
              })}
            </time>
            {model && (
              <>
                <span>•</span>
                <span className="font-medium">{model.name}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
