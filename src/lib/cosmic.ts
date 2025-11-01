import { createBucketClient } from '@cosmicjs/sdk'

export const cosmic = createBucketClient({
  bucketSlug: import.meta.env.VITE_COSMIC_BUCKET_SLUG as string,
  readKey: import.meta.env.VITE_COSMIC_READ_KEY as string,
})

// Simple error helper for Cosmic SDK
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

export async function getLandingPage() {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'landing-page',
        slug: 'prompt-engineering-landing-page'
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.object
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch landing page')
  }
}

export async function getPromptPackages() {
  try {
    const response = await cosmic.objects
      .find({
        type: 'prompt-packages'
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects || []
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch prompt packages')
  }
}