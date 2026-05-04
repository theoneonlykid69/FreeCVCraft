import { Redis } from '@upstash/redis'
import { Ratelimit } from '@upstash/ratelimit'

/**
 * Rate limiter using Upstash Redis.
 * Free tier at https://console.upstash.com — create a Redis database and copy
 * UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN to .env.local.
 *
 * Returns null when env vars are missing (dev without Upstash configured).
 * All requests pass through when null — set up Upstash before deploying to prod.
 */
function buildRatelimiter(): Ratelimit | null {
  if (
    !process.env.UPSTASH_REDIS_REST_URL ||
    !process.env.UPSTASH_REDIS_REST_TOKEN
  ) {
    return null
  }

  return new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(5, '1 d'),
    analytics: false,
    prefix: 'craftcv:ratelimit',
  })
}

export const ratelimiter = buildRatelimiter()
