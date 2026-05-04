'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ThemeToggle } from '@/components/ThemeToggle'
import {
  TOOLS,
  PRICING_TIERS,
  CATEGORIES,
  type PricingTier,
  type ToolCategory,
} from '@/lib/tools-data'
import {
  FileText,
  ExternalLink,
  Star,
  ArrowRight,
} from 'lucide-react'

const PRICING_COLORS: Record<PricingTier, string> = {
  'Fully Free':               'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300',
  'Free with Limits':         'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
  'Free Trial (No CC)':       'bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300',
  'Free Trial (CC Required)': 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300',
}

const PRICING_ICONS: Record<PricingTier, string> = {
  'Fully Free':               '✅',
  'Free with Limits':         '⚡',
  'Free Trial (No CC)':       '🎁',
  'Free Trial (CC Required)': '💳',
}

export default function FreeToolsPage() {
  const [activePricing, setActivePricing] = useState<PricingTier | null>(null)
  const [activeCategory, setActiveCategory] = useState<ToolCategory | null>(null)

  const ourTools = useMemo(() => TOOLS.filter((t) => t.ours), [])
  const externalTools = useMemo(
    () =>
      TOOLS.filter((t) => {
        if (t.ours) return false
        if (activePricing && t.pricing !== activePricing) return false
        if (activeCategory && t.category !== activeCategory) return false
        return true
      }),
    [activePricing, activeCategory]
  )

  return (
    <div className="flex flex-col min-h-screen">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-md px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
            <FileText className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-bold text-lg tracking-tight">FreeCVCraft</span>
        </Link>
        <div className="flex items-center gap-1">
          <Link href="/free-tools">
            <Button variant="ghost" size="sm" className="text-primary font-semibold">Free Tools</Button>
          </Link>
          <ThemeToggle />
          <Link href="/generate">
            <Button size="sm" className="gap-1.5 ml-1">
              Try for Free <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-12 sm:px-6">
        {/* Hero */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 gap-1.5 px-3 py-1 text-sm font-medium">
            <Star className="h-3.5 w-3.5 text-primary" />
            Curated · No Affiliate Bias · Always Free to Browse
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            The Best Free Tools for{' '}
            <span className="text-primary">Job Seekers</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every tool here has a free tier. We label exactly what&apos;s free, what has limits, and what
            requires a trial — so you know before you click.
          </p>
        </div>

        {/* Our Tools featured strip */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Star className="h-4 w-4 text-primary" />
            <h2 className="font-bold text-lg">Our Tools</h2>
            <Badge className="text-xs">Built by us</Badge>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ourTools.map((tool) => (
              <div
                key={tool.name}
                className="rounded-xl border-2 border-primary/30 bg-primary/5 p-5 flex flex-col gap-3 hover:border-primary/60 transition-colors"
              >
                <div>
                  <p className="font-semibold leading-snug">{tool.name}</p>
                  <p className="text-sm text-muted-foreground mt-1">{tool.description}</p>
                </div>
                <div className="flex items-center gap-2 mt-auto pt-1 flex-wrap">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${PRICING_COLORS[tool.pricing]}`}>
                    {PRICING_ICONS[tool.pricing]} {tool.pricing}
                  </span>
                  <Badge variant="secondary" className="text-xs">{tool.category}</Badge>
                </div>
                <Link
                  href={tool.url}
                  target={tool.url.startsWith('http') ? '_blank' : undefined}
                  rel={tool.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <Button size="sm" className="w-full gap-1.5">
                    {tool.url.startsWith('http') ? (
                      <>Visit <ExternalLink className="h-3.5 w-3.5" /></>
                    ) : (
                      <>Open Tool <ArrowRight className="h-3.5 w-3.5" /></>
                    )}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Filters */}
        <section className="mb-6 space-y-3">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-sm font-medium text-muted-foreground mr-1">Pricing:</span>
            <button
              onClick={() => setActivePricing(null)}
              className={`text-sm px-3 py-1 rounded-full border transition-colors ${
                activePricing === null
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              All
            </button>
            {PRICING_TIERS.map((tier) => (
              <button
                key={tier}
                onClick={() => setActivePricing(activePricing === tier ? null : tier)}
                className={`text-sm px-3 py-1 rounded-full border transition-colors ${
                  activePricing === tier
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                {PRICING_ICONS[tier]} {tier}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-sm font-medium text-muted-foreground mr-1">Category:</span>
            <button
              onClick={() => setActiveCategory(null)}
              className={`text-sm px-3 py-1 rounded-full border transition-colors ${
                activeCategory === null
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              All
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                className={`text-sm px-3 py-1 rounded-full border transition-colors ${
                  activeCategory === cat
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Tools table */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-lg">
              External Tools{' '}
              <span className="text-muted-foreground font-normal text-base">
                ({externalTools.length})
              </span>
            </h2>
          </div>

          {externalTools.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground">
              No tools match those filters. Try removing a filter.
            </div>
          ) : (
            <div className="rounded-xl border overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-muted/60 border-b">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold">Tool</th>
                    <th className="text-left px-4 py-3 font-semibold hidden md:table-cell">Category</th>
                    <th className="text-left px-4 py-3 font-semibold hidden sm:table-cell">Pricing</th>
                    <th className="px-4 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {externalTools.map((tool, i) => (
                    <tr
                      key={tool.name}
                      className={`border-b last:border-0 hover:bg-muted/30 transition-colors ${
                        i % 2 === 0 ? '' : 'bg-muted/10'
                      }`}
                    >
                      <td className="px-4 py-3">
                        <p className="font-medium">{tool.name}</p>
                        <p className="text-muted-foreground text-xs mt-0.5 max-w-xs">{tool.description}</p>
                        <div className="flex gap-1.5 mt-1.5 sm:hidden flex-wrap">
                          <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${PRICING_COLORS[tool.pricing]}`}>
                            {PRICING_ICONS[tool.pricing]} {tool.pricing}
                          </span>
                          <Badge variant="secondary" className="text-xs">{tool.category}</Badge>
                        </div>
                      </td>
                      <td className="px-4 py-3 hidden md:table-cell">
                        <Badge variant="secondary" className="text-xs whitespace-nowrap">{tool.category}</Badge>
                      </td>
                      <td className="px-4 py-3 hidden sm:table-cell">
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full whitespace-nowrap ${PRICING_COLORS[tool.pricing]}`}>
                          {PRICING_ICONS[tool.pricing]} {tool.pricing}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <a href={tool.url} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" variant="outline" className="gap-1.5 whitespace-nowrap">
                            Visit <ExternalLink className="h-3 w-3" />
                          </Button>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        <p className="text-center text-xs text-muted-foreground mt-10">
          Pricing info is accurate as of {new Date().getFullYear()} but may change. Always verify on the tool&apos;s own site.
          FreeCVCraft is not affiliated with any external tools listed unless marked &quot;Built by us&quot;.
        </p>
      </main>

      {/* Footer */}
      <footer className="border-t px-6 py-8 mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center">
              <FileText className="h-3.5 w-3.5 text-primary-foreground" />
            </div>
            <span className="font-semibold text-foreground">FreeCVCraft</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <Link href="/generate" className="hover:text-foreground transition-colors">Generator</Link>
            <Link href="/free-tools" className="hover:text-foreground transition-colors text-primary font-medium">Free Tools</Link>
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
          </div>
          <p>© {new Date().getFullYear()} FreeCVCraft</p>
        </div>
      </footer>
    </div>
  )
}
