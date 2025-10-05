import { NextRequest, NextResponse } from 'next/server'
import { chatWithAI, streamChatWithAI, type ChatRequest } from '@/lib/openrouter'

export async function POST(request: NextRequest) {
  try {
    const body: ChatRequest = await request.json()
    
    // Validate required fields
    if (!body.messages || !body.model) {
      return NextResponse.json(
        { error: 'Missing required fields: messages and model' },
        { status: 400 }
      )
    }

    // Check if streaming is requested
    const url = new URL(request.url)
    const stream = url.searchParams.get('stream') === 'true'

    if (stream) {
      const streamResponse = await streamChatWithAI(body)
      
      const encoder = new TextEncoder()
      const stream = new ReadableStream({
        async start(controller) {
          try {
            for await (const chunk of streamResponse) {
              const content = chunk.choices[0]?.delta?.content
              if (content) {
                controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content })}\n\n`))
              }
            }
            controller.enqueue(encoder.encode('data: [DONE]\n\n'))
            controller.close()
          } catch (error) {
            controller.error(error)
          }
        },
      })

      return new Response(stream, {
        headers: {
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          'Connection': 'keep-alive',
        },
      })
    } else {
      const response = await chatWithAI(body)
      return NextResponse.json(response)
    }
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
