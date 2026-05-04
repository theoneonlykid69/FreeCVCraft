'use client'

import { useEffect } from 'react'

interface AdUnitProps {
  /** Ad slot ID from your AdSense dashboard */
  slot: string
  format?: 'auto' | 'horizontal' | 'rectangle' | 'vertical'
  className?: string
}

const PUBLISHER_ID = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID

/**
 * Google AdSense ad unit component.
 *
 * In development (or when NEXT_PUBLIC_ADSENSE_PUBLISHER_ID is not set),
 * renders a visible placeholder so you can see ad placement during development.
 *
 * In production, renders the real AdSense <ins> element.
 *
 * Setup steps:
 * 1. Apply for AdSense at https://adsense.google.com once your site is live
 * 2. Wait for approval (1–7 days)
 * 3. Get your Publisher ID (ca-pub-XXXXXXXXXXXXXXXXX) from the dashboard
 * 4. Add NEXT_PUBLIC_ADSENSE_PUBLISHER_ID=ca-pub-XXXXXXXXXXXXXXXXX to .env.local
 * 5. Add the AdSense auto-ads <Script> tag in app/layout.tsx (see comment there)
 * 6. Create ad units in AdSense → copy the slot ID → use it in <AdUnit slot="..." />
 */
export function AdUnit({ slot, format = 'auto', className = '' }: AdUnitProps) {
  const isDev = process.env.NODE_ENV === 'development'
  const isConfigured =
    !!PUBLISHER_ID && PUBLISHER_ID !== 'ca-pub-XXXXXXXXXXXXXXXXX'

  useEffect(() => {
    if (!isDev && isConfigured) {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ;((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
          {}
        )
      } catch (e) {
        console.error('AdSense push error:', e)
      }
    }
  }, [isDev, isConfigured])

  // Show placeholder in dev or when AdSense is not yet configured
  if (isDev || !isConfigured) {
    return (
      <div
        className={`flex items-center justify-center rounded-xl border-2 border-dashed border-border bg-muted/40 text-xs text-muted-foreground ${className}`}
        style={{ minHeight: 90 }}
      >
        Ad placeholder · {format} · {isDev ? 'dev mode' : 'configure NEXT_PUBLIC_ADSENSE_PUBLISHER_ID'}
      </div>
    )
  }

  return (
    <ins
      className={`adsbygoogle block ${className}`}
      data-ad-client={PUBLISHER_ID}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive="true"
    />
  )
}
