const UNSPLASH_API_BASE = 'https://api.unsplash.com'

export interface UnsplashPhoto {
  id: string
  created_at: string
  updated_at: string
  width: number
  height: number
  color: string
  blur_hash: string
  likes: number
  liked_by_user: boolean
  description: string | null
  user: {
    id: string
    username: string
    name: string
    portfolio_url: string | null
    bio: string | null
    location: string | null
    total_likes: number
    total_photos: number
    total_collections: number
    instagram_username: string | null
    twitter_username: string | null
    profile_image: {
      small: string
      medium: string
      large: string
    }
    links: {
      self: string
      html: string
      photos: string
      likes: string
      portfolio: string
    }
  }
  urls: {
    raw: string
    full: string
    regular: string
    small: string
    thumb: string
  }
  links: {
    self: string
    html: string
    download: string
    download_location: string
  }
}

export interface UnsplashSearchResponse {
  total: number
  total_pages: number
  results: UnsplashPhoto[]
}

export interface SearchPhotosParams {
  query: string
  page?: number
  per_page?: number
  orientation?: 'landscape' | 'portrait' | 'squarish'
  color?: string
  order_by?: 'latest' | 'oldest' | 'popular' | 'relevant'
  [key: string]: string | number | boolean | string[] | undefined
}

export interface RandomPhotosParams {
  query?: string
  count?: number
  orientation?: 'landscape' | 'portrait' | 'squarish'
  collection_ids?: string[]
  featured?: boolean
  [key: string]: string | number | boolean | string[] | undefined
}

export interface ListPhotosParams {
  page?: number
  per_page?: number
  order_by?: 'latest' | 'oldest' | 'popular'
  [key: string]: string | number | boolean | string[] | undefined
}

class UnsplashAPI {
  private accessKey: string

  constructor(accessKey: string) {
    this.accessKey = accessKey
  }

  private async fetchFromUnsplash(endpoint: string, params?: Record<string, string | number | boolean | string[]>): Promise<any> {
    const url = new URL(`${UNSPLASH_API_BASE}${endpoint}`)

    // Add access key as Authorization header
    const headers: Record<string, string> = {
      'Authorization': `Client-ID ${this.accessKey}`,
      'Accept-Version': 'v1',
    }

    // Add query parameters
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          if (Array.isArray(value)) {
            value.forEach(v => url.searchParams.append(key, v.toString()))
          } else {
            url.searchParams.append(key, value.toString())
          }
        }
      })
    }

    const response = await fetch(url.toString(), { headers })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ errors: ['Unknown error'] }))
      throw new Error(`Unsplash API error: ${response.status} - ${errorData.errors?.join(', ') || response.statusText}`)
    }

    return response.json()
  }

  /**
   * Search for photos
   */
  async searchPhotos(params: SearchPhotosParams): Promise<UnsplashSearchResponse> {
    return this.fetchFromUnsplash('/search/photos', params)
  }

  /**
   * Get a random photo or photos
   */
  async getRandomPhotos(params: RandomPhotosParams = {}): Promise<UnsplashPhoto | UnsplashPhoto[]> {
    const result = await this.fetchFromUnsplash('/photos/random', params)
    return result
  }

  /**
   * List photos
   */
  async listPhotos(params: ListPhotosParams = {}): Promise<UnsplashPhoto[]> {
    return this.fetchFromUnsplash('/photos', params)
  }

  /**
   * Get a specific photo by ID
   */
  async getPhoto(id: string): Promise<UnsplashPhoto> {
    return this.fetchFromUnsplash(`/photos/${id}`)
  }

  /**
   * Get photos from a specific user
   */
  async getUserPhotos(username: string, params: { page?: number; per_page?: number; order_by?: 'latest' | 'oldest' | 'popular' } = {}): Promise<UnsplashPhoto[]> {
    return this.fetchFromUnsplash(`/users/${username}/photos`, params)
  }

  /**
   * Track a photo download (required by Unsplash guidelines)
   */
  async trackDownload(downloadLocation: string): Promise<{ url: string }> {
    const response = await fetch(downloadLocation, {
      method: 'GET',
      headers: {
        'Authorization': `Client-ID ${this.accessKey}`,
        'Accept-Version': 'v1',
      },
    })

    if (!response.ok) {
      throw new Error(`Failed to track download: ${response.status}`)
    }

    return response.json()
  }
}

// Create singleton instance
const unsplashAccessKey = process.env.UNSPLASH_ACCESS_KEY

if (!unsplashAccessKey) {
  console.warn('UNSPLASH_ACCESS_KEY not found in environment variables')
}

export const unsplash = unsplashAccessKey ? new UnsplashAPI(unsplashAccessKey) : null

// Utility functions for common operations
export async function searchPhotos(query: string, options: Omit<SearchPhotosParams, 'query'> = {}): Promise<UnsplashSearchResponse> {
  if (!unsplash) {
    throw new Error('Unsplash API not configured')
  }
  return unsplash.searchPhotos({ query, ...options })
}

export async function getRandomPhotos(options: RandomPhotosParams = {}): Promise<UnsplashPhoto | UnsplashPhoto[]> {
  if (!unsplash) {
    throw new Error('Unsplash API not configured')
  }
  return unsplash.getRandomPhotos(options)
}

export async function getPhoto(id: string): Promise<UnsplashPhoto> {
  if (!unsplash) {
    throw new Error('Unsplash API not configured')
  }
  return unsplash.getPhoto(id)
}

export async function listPhotos(options: ListPhotosParams = {}): Promise<UnsplashPhoto[]> {
  if (!unsplash) {
    throw new Error('Unsplash API not configured')
  }
  return unsplash.listPhotos(options)
}
