export interface AIModel {
  id: string
  name: string
  description: string
  provider: string
  category: 'general' | 'coding' | 'creative' | 'fast'
  cost: 'free' | 'paid'
}

export const FREE_MODELS: AIModel[] = [
  {
    id: 'meta-llama/llama-3.1-8b-instruct:free',
    name: 'Llama 3.1 8B',
    description: 'Meta\'s Llama 3.1 model, excellent for general chat and coding tasks',
    provider: 'Meta',
    category: 'general',
    cost: 'free'
  },
  {
    id: 'meta-llama/llama-3.1-70b-instruct:free',
    name: 'Llama 3.1 70B',
    description: 'Meta\'s larger Llama 3.1 model, better reasoning and complex tasks',
    provider: 'Meta',
    category: 'general',
    cost: 'free'
  },
  {
    id: 'google/gemini-flash-1.5:free',
    name: 'Gemini Flash 1.5',
    description: 'Google\'s fast model, great for quick responses and general use',
    provider: 'Google',
    category: 'fast',
    cost: 'free'
  },
  {
    id: 'microsoft/phi-3-medium-128k-instruct:free',
    name: 'Phi-3 Medium',
    description: 'Microsoft\'s efficient model, good balance of speed and capability',
    provider: 'Microsoft',
    category: 'general',
    cost: 'free'
  },
  {
    id: 'mistralai/mistral-7b-instruct:free',
    name: 'Mistral 7B',
    description: 'Mistral\'s 7B model, excellent for coding and technical tasks',
    provider: 'Mistral',
    category: 'coding',
    cost: 'free'
  }
]

export const getModelById = (id: string): AIModel | undefined => {
  return FREE_MODELS.find(model => model.id === id)
}

export const getModelsByCategory = (category: AIModel['category']): AIModel[] => {
  return FREE_MODELS.filter(model => model.category === category)
}
