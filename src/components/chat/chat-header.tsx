'use client'

import { Button } from '@/components/ui/button'
import { ModelSelector } from '@/components/ai/model-selector'
import { FREE_MODELS, type AIModel } from '@/lib/ai-models'
import { IconRefresh as TablerRefresh } from '@tabler/icons-react'

interface ChatHeaderProps {
  selectedModel: AIModel
  onModelChange: (model: AIModel) => void
  onClearChat: () => void
  messageCount: number
}

export function ChatHeader({
  selectedModel,
  onModelChange,
  onClearChat,
  messageCount
}: ChatHeaderProps) {
  const handleModelChange = (modelId: string) => {
    const model = FREE_MODELS.find(m => m.id === modelId)
    if (model) {
      onModelChange(model)
    }
  }

  return (
    <div className="border-b p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div>
            <h2 className="text-lg font-semibold text-foreground">
              Chat
            </h2>
            <p className="text-sm text-muted-foreground">
              {messageCount === 0
                ? 'No messages yet'
                : `${messageCount} message${messageCount === 1 ? '' : 's'}`
              }
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <ModelSelector
            selectedModel={selectedModel.id}
            onModelChange={handleModelChange}
            className="min-w-[200px]"
          />
          
          {messageCount > 0 && (
            <Button
              variant="outline"
              size="sm"
              onClick={onClearChat}
              className="text-muted-foreground hover:text-foreground"
            >
              <TablerRefresh className="w-4 h-4 mr-2" />
              Clear
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
