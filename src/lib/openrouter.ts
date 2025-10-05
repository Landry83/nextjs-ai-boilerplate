import OpenAI from 'openai'
import { FREE_MODELS, type AIModel } from './ai-models'

const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.OPENROUTER_API_KEY,
  defaultHeaders: {
    'HTTP-Referer': process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    'X-Title': 'Next.js 15 Boilerplate',
  },
})

export interface ChatMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
}

export interface ChatRequest {
  messages: ChatMessage[]
  model: string
  temperature?: number
  max_tokens?: number
}

export interface ChatResponse {
  content: string
  model: string
  usage?: {
    prompt_tokens: number
    completion_tokens: number
    total_tokens: number
  }
}

export async function chatWithAI(request: ChatRequest): Promise<ChatResponse> {
  try {
    const response = await openai.chat.completions.create({
      model: request.model,
      messages: request.messages,
      temperature: request.temperature || 0.7,
      max_tokens: request.max_tokens || 1000,
    })

    const message = response.choices[0]?.message
    if (!message?.content) {
      throw new Error('No response from AI model')
    }

    return {
      content: message.content,
      model: request.model,
      usage: response.usage ? {
        prompt_tokens: response.usage.prompt_tokens,
        completion_tokens: response.usage.completion_tokens,
        total_tokens: response.usage.total_tokens,
      } : undefined,
    }
  } catch (error) {
    console.error('OpenRouter API error:', error)
    throw new Error('Failed to get response from AI model')
  }
}

export async function streamChatWithAI(request: ChatRequest) {
  try {
    const stream = await openai.chat.completions.create({
      model: request.model,
      messages: request.messages,
      temperature: request.temperature || 0.7,
      max_tokens: request.max_tokens || 1000,
      stream: true,
    })

    return stream
  } catch (error) {
    console.error('OpenRouter streaming error:', error)
    throw new Error('Failed to stream response from AI model')
  }
}

export { FREE_MODELS, type AIModel }
