'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FREE_MODELS, type AIModel } from '@/lib/ai-models'
import {
  Check,
  Sparkles,
  Code,
  Zap,
  Palette
} from 'lucide-react'

interface ModelSelectorProps {
  selectedModel: string
  onModelChange: (modelId: string) => void
  className?: string
}

const categoryIcons = {
  general: Sparkles,
  coding: Code,
  fast: Zap,
  creative: Palette,
}

const categoryColors = {
  general: 'text-blue-500',
  coding: 'text-green-500',
  fast: 'text-yellow-500',
  creative: 'text-purple-500',
}

export function ModelSelector({ selectedModel, onModelChange, className }: ModelSelectorProps) {
  const [selectedCategory, setSelectedCategory] = useState<AIModel['category'] | 'all'>('all')

  const filteredModels = selectedCategory === 'all' 
    ? FREE_MODELS 
    : FREE_MODELS.filter(model => model.category === selectedCategory)

  return (
    <div className={className}>
      <Card>
        <CardHeader>
          <CardTitle>Choose AI Model</CardTitle>
          <CardDescription>
            Select from our collection of free AI models. Each model has different strengths.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory('all')}
            >
              All Models
            </Button>
            {Object.entries(categoryIcons).map(([category, Icon]) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category as AIModel['category'])}
                className="flex items-center gap-1"
              >
                <Icon className="h-4 w-4" />
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}
          </div>

          {/* Model Grid */}
          <div className="grid gap-3 md:grid-cols-2">
            {filteredModels.map((model) => {
              const Icon = categoryIcons[model.category]
              const isSelected = selectedModel === model.id
              
              return (
                <Card
                  key={model.id}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    isSelected ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => onModelChange(model.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Icon className={`h-4 w-4 ${categoryColors[model.category]}`} />
                          <h3 className="font-semibold text-sm">{model.name}</h3>
                          {isSelected && (
                            <Check className="h-4 w-4 text-primary" />
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">
                          {model.provider}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {model.description}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-xs font-medium text-green-600">
                        {model.cost === 'free' ? 'Free' : 'Paid'}
                      </span>
                      <span className="text-xs text-muted-foreground capitalize">
                        {model.category}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {filteredModels.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No models found for the selected category.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
