import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/ThemeToggle"
import {
  Zap,
  Palette,
  Star,
  ArrowRight,
  Copy,
  FileText,
  Sparkles,
  CheckCircle2,
} from "lucide-react"

const EXAMPLE_LETTER = `Having spent the past six years building full-stack applications that serve millions of users, I know that Acme Corp's mission to democratize developer tooling isn't just a tagline — it's the kind of challenge that gets me out of bed every morning.

At my current role at TechStart, I led the rebuild of our core API infrastructure, reducing response times by 60% and cutting infrastructure costs by $200K annually. I thrive in fast-moving environments where shipping quality code quickly matters, and where the work directly impacts real users.

What excites me most about this role is the opportunity to work on open-source tooling that developers rely on daily. I've contributed to several open-source projects and believe deeply in that culture.

I'd love to bring that same energy and technical depth to your team. Looking forward to connecting.`

const FEATURES = [
  {
    icon: <Zap className="h-5 w-5 text-primary" />,
    title: "Instant AI Generation",
    desc: "Get a professionally written cover letter in under 10 seconds, powered by the latest AI.",
  },
  {
    icon: <Palette className="h-5 w-5 text-primary" />,
    title: "Choose Your Tone",
    desc: "Professional, casual, or confident. Match the company culture and make the right impression.",
  },
  {
    icon: <Star className="h-5 w-5 text-primary" />,
    title: "Always Free",
    desc: "No hidden fees, no credit card, no sign-up. Generate up to 5 per day, free forever.",
  },
]

const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Enter job details",
    desc: "Tell us the job title and company you're applying to.",
  },
  {
    step: "2",
    title: "Describe yourself",
    desc: "Share a brief summary of your experience and skills.",
  },
  {
    step: "3",
    title: "Copy & apply",
    desc: "Get your result instantly. Copy, paste, and send your application.",
  },
]

const STATS = [
  { value: "50K+", label: "Letters Generated" },
  { value: "<10s", label: "Average Speed" },
  { value: "100%", label: "Free Forever" },
]

const PERKS = [
  "No account or sign-up required",
  "Works for any industry or role",
  "Professional, casual, or confident tone",
  "Cover letters & resume summaries",
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Header */}
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-md px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
            <FileText className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-bold text-lg tracking-tight">FreeCVCraft</span>
        </div>
        <div className="flex items-center gap-1">
          <Link href="/free-tools">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">Free Tools</Button>
          </Link>
          <ThemeToggle />
          <Link href="/generate">
            <Button size="sm" className="gap-1.5 ml-1">
              Try for Free <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24 md:py-32 text-center">
        {/* Gradient blob background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div
            className="absolute left-1/2 top-0 -translate-x-1/2 w-[900px] h-[500px] rounded-full opacity-30 dark:opacity-20"
            style={{
              background:
                "radial-gradient(ellipse at center, oklch(0.511 0.262 276.966 / 0.4) 0%, oklch(0.606 0.258 292.717 / 0.3) 40%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
        </div>

        <Badge
          variant="secondary"
          className="mb-6 gap-1.5 px-3 py-1 text-sm font-medium"
        >
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          100% Free · No Account Needed
        </Badge>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl mx-auto leading-[1.05]">
          Land Your Dream Job
          <br />
          <span
            style={{
              background:
                "linear-gradient(135deg, oklch(0.511 0.262 276.966), oklch(0.606 0.258 292.717))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            with AI-Written Letters
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
          Free AI cover letters and resume summaries. Professional results in
          under 10 seconds — no sign-up, no credit card.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
          <Link href="/generate">
            <Button size="lg" className="px-8 h-12 text-base font-semibold gap-2 shadow-lg shadow-primary/25">
              Generate My Cover Letter <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/generate">
            <Button size="lg" variant="outline" className="px-8 h-12 text-base">
              Try Resume Summary
            </Button>
          </Link>
        </div>

        {/* Perk checklist */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {PERKS.map((p) => (
            <div key={p} className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
              {p}
            </div>
          ))}
        </div>
      </section>

      {/* Stats Bar */}
      <div className="border-y bg-muted/30 px-6 py-8">
        <div className="max-w-3xl mx-auto grid grid-cols-3 gap-6 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="text-3xl md:text-4xl font-extrabold text-primary">
                {s.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <section className="px-6 py-20 max-w-5xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Everything to get hired faster
          </h2>
          <p className="text-muted-foreground text-lg">
            No fluff, no friction — just results.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <Card
              key={f.title}
              className="p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 border-border/60"
            >
              <div className="mb-4 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                {f.icon}
              </div>
              <h3 className="font-semibold text-base mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Example Letter */}
      <section className="bg-muted/40 dark:bg-muted/20 px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">See it in action</h2>
            <p className="text-muted-foreground">
              Real output — generated in seconds
            </p>
          </div>
          <Card className="overflow-hidden shadow-xl">
            {/* Gradient top bar */}
            <div
              className="h-1.5"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.511 0.262 276.966), oklch(0.606 0.258 292.717))",
              }}
            />
            <CardContent className="pt-6">
              <div className="flex flex-wrap items-center gap-2 mb-5">
                <Badge variant="secondary" className="gap-1.5">
                  <FileText className="h-3 w-3" />
                  Senior Software Engineer · Acme Corp
                </Badge>
                <Badge
                  variant="outline"
                  className="text-primary border-primary/30"
                >
                  Professional tone
                </Badge>
              </div>
              <div className="text-sm leading-relaxed whitespace-pre-line text-foreground/80">
                {EXAMPLE_LETTER}
              </div>
              <div className="mt-5 pt-4 border-t flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Sparkles className="h-3 w-3 text-primary" />
                  <span>Generated in 4.2 seconds</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Copy className="h-3 w-3" />
                  <span>Copy with one click</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How it Works */}
      <section className="px-6 py-20 max-w-4xl mx-auto w-full">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Up and running in 3 steps
          </h2>
          <p className="text-muted-foreground text-lg">Seriously, that&apos;s it.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {HOW_IT_WORKS.map((s) => (
            <div key={s.step} className="flex flex-col items-center gap-4">
              <div
                className="w-14 h-14 rounded-2xl text-white font-bold text-xl flex items-center justify-center shadow-lg"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.511 0.262 276.966), oklch(0.606 0.258 292.717))",
                  boxShadow: "0 8px 20px oklch(0.511 0.262 276.966 / 0.35)",
                }}
              >
                {s.step}
              </div>
              <h3 className="font-semibold text-base">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative overflow-hidden px-6 py-20 text-center"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.511 0.262 276.966), oklch(0.606 0.258 292.717) 60%, oklch(0.491 0.27 292.581))",
        }}
      >
        <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.1)_0%,_transparent_60%)]" />
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to land that job?
          </h2>
          <p className="text-indigo-100 mb-8 max-w-md mx-auto leading-relaxed text-lg">
            Join thousands of job seekers who use FreeCVCraft every day. Free,
            instant, no sign-up.
          </p>
          <Link href="/generate">
            <Button
              size="lg"
              className="bg-white text-zinc-900 hover:bg-white/90 px-8 h-12 text-base font-semibold gap-2 shadow-xl"
            >
              Generate My Cover Letter <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t px-6 py-10 mt-auto">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center">
              <FileText className="h-3.5 w-3.5 text-primary-foreground" />
            </div>
            <span className="font-semibold text-foreground">FreeCVCraft</span>
          </div>
          <p>© {new Date().getFullYear()} FreeCVCraft · Free AI Cover Letter Generator</p>
          <div className="flex gap-5">
            <Link href="/free-tools" className="hover:text-foreground transition-colors text-primary font-medium">
              Free Tools
            </Link>
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Use
            </Link>
            <Link href="/contact" className="hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
