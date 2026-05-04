import type { Metadata } from "next"
import { Geist } from "next/font/google"
import Script from "next/script"
import { Providers } from "@/components/Providers"
import { CookieBanner } from "@/components/CookieBanner"
import "./globals.css"

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Free AI Cover Letter & Resume Summary Generator | FreeCVCraft",
  description:
    "Generate a professional cover letter or resume summary in seconds with AI. Free, no sign-up required. Choose your tone and copy instantly.",
  keywords: [
    "cover letter generator",
    "resume summary generator",
    "AI cover letter",
    "free cover letter writer",
    "resume objective generator",
  ],
  openGraph: {
    title: "Free AI Cover Letter & Resume Summary Generator | FreeCVCraft",
    description:
      "Generate a professional cover letter in seconds. Free, no sign-up required.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Providers>
          {children}
          <CookieBanner />
        </Providers>
      </body>

      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7243353622393380"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
    </html>
  )
}
