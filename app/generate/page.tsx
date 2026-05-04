'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { AdUnit } from '@/components/AdUnit'
import { ThemeToggle } from '@/components/ThemeToggle'
import { cn } from '@/lib/utils'
import {
  Copy,
  Check,
  Loader2,
  ArrowLeft,
  AlertCircle,
  FileText,
  Sparkles,
} from 'lucide-react'

type GenerationType = 'cover_letter' | 'resume_summary'

const TABS: {
  value: GenerationType
  label: string
  placeholder: string
}[] = [
  {
    value: 'cover_letter',
    label: 'Cover Letter',
    placeholder:
      'e.g. 5 years in software development, led teams of 10, expertise in React and Node.js. Passionate about building products users love.',
  },
  {
    value: 'resume_summary',
    label: 'Resume Summary',
    placeholder:
      'e.g. Marketing manager with 8 years of experience driving 40% revenue growth. Skilled in digital strategy, brand management, and team leadership.',
  },
]

export default function GeneratePage() {
  const [activeTab, setActiveTab] = useState<GenerationType>('cover_letter')
  const [jobTitle, setJobTitle] = useState('')
  const [company, setCompany] = useState('')
  const [background, setBackground] = useState('')
  const [tone, setTone] = useState('professional')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  const currentTab = TABS.find((t) => t.value === activeTab)!

  const handleTabChange = (value: GenerationType) => {
    setActiveTab(value)
    setResult('')
    setError('')
  }

  const handleGenerate = async () => {
    if (!jobTitle.trim() || !background.trim()) {
      setError('Please fill in the job title and your background.')
      return
    }

    setLoading(true)
    setError('')
    setResult('')

    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: activeTab, jobTitle, company, background, tone }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.')
        return
      }

      setResult(data.result)
    } catch {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleCopy = async () => {
    if (!result) return
    await navigator.clipboard.writeText(result)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Header */}
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-md px-6 py-3 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center">
            <FileText className="h-3.5 w-3.5 text-primary-foreground" />
          </div>
          <span className="font-bold text-base tracking-tight">FreeCVCraft</span>
        </div>
        <ThemeToggle />
      </header>

      <main className="flex-1 px-4 py-8 md:py-12">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              Career Document Generator
            </h1>
            <p className="text-muted-foreground text-sm">
              Fill in your details — get a polished result in seconds. Always free.
            </p>
          </div>

          {/* Top ad */}
          <div className="mb-6">
            <AdUnit slot="1122334455" format="horizontal" className="w-full" />
          </div>

          {/* Tab switcher */}
          <div className="flex gap-1 mb-6 bg-muted p-1 rounded-xl w-fit">
            {TABS.map((tab) => (
              <button
                key={tab.value}
                onClick={() => handleTabChange(tab.value)}
                className={cn(
                  'px-5 py-2 rounded-lg text-sm font-medium transition-all',
                  activeTab === tab.value
                    ? 'bg-background shadow-sm text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Two-column layout */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Input form */}
            <Card className="border-border/60 shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-base font-semibold">Your Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="jobTitle">
                    Job Title <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="jobTitle"
                    placeholder="e.g. Senior Software Engineer"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    placeholder="e.g. Google, Acme Corp"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="background">
                    Your Background <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="background"
                    placeholder={currentTab.placeholder}
                    value={background}
                    onChange={(e) => setBackground(e.target.value)}
                    rows={5}
                    className="resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tone">Tone</Label>
                  <Select value={tone} onValueChange={(v) => v && setTone(v)}>
                    <SelectTrigger id="tone">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="professional">
                        Professional — Formal and polished
                      </SelectItem>
                      <SelectItem value="casual">
                        Casual — Conversational and warm
                      </SelectItem>
                      <SelectItem value="confident">
                        Confident — Assertive and bold
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {error && (
                  <div className="flex items-start gap-2 text-sm text-destructive bg-destructive/10 rounded-lg p-3">
                    <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <Button
                  onClick={handleGenerate}
                  disabled={loading}
                  className="w-full shadow-sm"
                  size="lg"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Generate {currentTab.label}
                    </>
                  )}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  5 free generations per day · No sign-up required
                </p>
              </CardContent>
            </Card>

            {/* Result panel */}
            <Card className="min-h-[420px] flex flex-col border-border/60 shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between shrink-0 pb-4">
                <CardTitle className="text-base font-semibold">
                  {result ? currentTab.label : 'Your result will appear here'}
                </CardTitle>
                {result && (
                  <Button variant="outline" size="sm" onClick={handleCopy}>
                    {copied ? (
                      <>
                        <Check className="mr-1.5 h-3.5 w-3.5 text-green-500" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="mr-1.5 h-3.5 w-3.5" />
                        Copy
                      </>
                    )}
                  </Button>
                )}
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                {result ? (
                  <div className="text-sm leading-relaxed whitespace-pre-wrap text-foreground/90 flex-1">
                    {result}
                  </div>
                ) : loading ? (
                  <div className="flex-1 flex flex-col items-center justify-center gap-3 text-muted-foreground">
                    <div className="relative">
                      <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    </div>
                    <p className="text-sm">
                      Writing your {currentTab.label.toLowerCase()}...
                    </p>
                  </div>
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center gap-3 text-muted-foreground">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{ background: 'oklch(0.511 0.262 276.966 / 0.1)' }}
                    >
                      <FileText className="h-7 w-7 text-primary" />
                    </div>
                    <p className="text-sm text-center leading-relaxed">
                      Fill in your details and click
                      <br />
                      <strong className="text-foreground">Generate</strong> to get started
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Bottom ad */}
          <div className="mt-8">
            <AdUnit slot="5566778899" format="horizontal" className="w-full" />
          </div>
        </div>
      </main>

      <footer className="border-t px-6 py-6 text-center text-sm text-muted-foreground">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/" className="hover:text-foreground transition-colors font-medium">
            FreeCVCraft
          </Link>
          <span>·</span>
          <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
          <span>·</span>
          <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Use</Link>
          <span>·</span>
          <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
        </div>
      </footer>
    </div>
  )
}
