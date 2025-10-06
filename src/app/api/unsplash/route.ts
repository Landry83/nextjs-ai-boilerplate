import { NextRequest, NextResponse } from 'next/server'
import { searchPhotos, getRandomPhotos, getPhoto, listPhotos, type SearchPhotosParams, type RandomPhotosParams, type ListPhotosParams } from '@/lib/unsplash'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const action = searchParams.get('action')

    if (!action) {
      return NextResponse.json(
        { error: 'Missing action parameter. Use: search, random, photo, or list' },
        { status: 400 }
      )
    }

    switch (action) {
      case 'search': {
        const query = searchParams.get('query')
        if (!query) {
          return NextResponse.json(
            { error: 'Query parameter required for search action' },
            { status: 400 }
          )
        }

        const params: SearchPhotosParams = {
          query,
          page: searchParams.get('page') ? parseInt(searchParams.get('page')!) : undefined,
          per_page: searchParams.get('per_page') ? parseInt(searchParams.get('per_page')!) : undefined,
          orientation: searchParams.get('orientation') as 'landscape' | 'portrait' | 'squarish' | undefined,
          color: searchParams.get('color') || undefined,
          order_by: searchParams.get('order_by') as 'latest' | 'oldest' | 'popular' | 'relevant' | undefined,
        }

        const result = await searchPhotos(query, params)
        return NextResponse.json(result)
      }

      case 'random': {
        const params: RandomPhotosParams = {
          query: searchParams.get('query') || undefined,
          count: searchParams.get('count') ? parseInt(searchParams.get('count')!) : undefined,
          orientation: searchParams.get('orientation') as 'landscape' | 'portrait' | 'squarish' | undefined,
          collection_ids: searchParams.get('collection_ids')?.split(','),
          featured: searchParams.get('featured') === 'true',
        }

        const result = await getRandomPhotos(params)
        return NextResponse.json(result)
      }

      case 'photo': {
        const id = searchParams.get('id')
        if (!id) {
          return NextResponse.json(
            { error: 'ID parameter required for photo action' },
            { status: 400 }
          )
        }

        const result = await getPhoto(id)
        return NextResponse.json(result)
      }

      case 'list': {
        const params: ListPhotosParams = {
          page: searchParams.get('page') ? parseInt(searchParams.get('page')!) : undefined,
          per_page: searchParams.get('per_page') ? parseInt(searchParams.get('per_page')!) : undefined,
          order_by: searchParams.get('order_by') as 'latest' | 'oldest' | 'popular' | undefined,
        }

        const result = await listPhotos(params)
        return NextResponse.json(result)
      }

      default:
        return NextResponse.json(
          { error: 'Invalid action. Use: search, random, photo, or list' },
          { status: 400 }
        )
    }
  } catch (error) {
    console.error('Unsplash API Error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    )
  }
}
