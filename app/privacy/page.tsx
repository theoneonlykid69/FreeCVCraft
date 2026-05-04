import Link from "next/link"
import { FileText, ArrowLeft } from "lucide-react"
import { ThemeToggle } from "@/components/ThemeToggle"

const LAST_UPDATED = "May 4, 2025"
const SITE_NAME = "FreeCVCraft"
// TODO: Replace with your actual domain once purchased
const SITE_DOMAIN = "freecvcraft.com"
const CONTACT_EMAIL = `privacy@${SITE_DOMAIN}`

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
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
          <span className="font-bold text-base tracking-tight">{SITE_NAME}</span>
        </div>
        <ThemeToggle />
      </header>

      <main className="flex-1 px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-10">Last updated: {LAST_UPDATED}</p>

          <div className="prose-like space-y-8 text-sm leading-relaxed text-foreground/80">

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">1. Overview</h2>
              <p>
                {SITE_NAME} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates {SITE_DOMAIN} (the &quot;Service&quot;).
                This Privacy Policy explains what information we collect, how we use it, and your rights
                regarding your data. We are committed to protecting your privacy.
              </p>
              <p>
                <strong>We do not require you to create an account.</strong> No email address, name, or
                personal profile is collected or stored by {SITE_NAME}.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">2. Information We Collect</h2>
              <p>When you use our generator tool, you voluntarily provide:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Job title and target company name</li>
                <li>A summary of your professional background</li>
                <li>Your preferred writing tone</li>
              </ul>
              <p>
                This information is sent to our AI provider (OpenAI) solely to generate your document.
                <strong> We do not store, log, or retain this input after your request is fulfilled.</strong>
              </p>
              <p>
                We also automatically collect standard server log data including your IP address and
                browser type for security and rate-limiting purposes. This data is not linked to any
                personal identity and is not shared.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">3. Cookies and Advertising</h2>
              <p>
                {SITE_NAME} uses <strong>Google AdSense</strong> to display advertisements. Google AdSense
                uses cookies and similar tracking technologies to serve ads based on your prior visits to
                this website and other websites. These cookies are set by Google, not by {SITE_NAME}.
              </p>
              <p>
                You can opt out of personalized advertising by visiting{" "}
                <a
                  href="https://www.google.com/settings/ads"
                  className="text-primary underline underline-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google&apos;s Ad Settings
                </a>{" "}
                or{" "}
                <a
                  href="https://www.aboutads.info"
                  className="text-primary underline underline-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  aboutads.info
                </a>.
              </p>
              <p>
                We also use a strictly necessary cookie to remember your cookie consent preference. No
                other first-party cookies are set.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">4. Third-Party Services</h2>
              <p>We use the following third-party services:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>OpenAI</strong> — processes the text you submit to generate your document.
                  OpenAI&apos;s privacy policy applies to data processed through their API.
                </li>
                <li>
                  <strong>Google AdSense</strong> — serves advertisements on our site. Google&apos;s
                  privacy policy governs their data practices.
                </li>
                <li>
                  <strong>Upstash Redis</strong> — used exclusively for anonymous IP-based rate limiting
                  (max 5 requests/day). No personal data is stored.
                </li>
                <li>
                  <strong>Vercel</strong> — our hosting provider. Standard server logs may be retained
                  per Vercel&apos;s data retention policies.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">5. Children&apos;s Privacy</h2>
              <p>
                {SITE_NAME} is not directed at children under the age of 13. We do not knowingly collect
                any personal information from children. If you believe a child has provided personal
                information, please contact us and we will promptly delete it.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">6. Data Retention</h2>
              <p>
                We do not maintain a user database. The text you enter into the generator is transmitted
                to OpenAI in real time and is not stored on our servers. Your IP address used for rate
                limiting is stored in Upstash Redis and automatically expires after 24 hours.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">7. Your Rights</h2>
              <p>
                Depending on your location, you may have rights under GDPR, CCPA, or other applicable laws,
                including the right to access, correct, or delete personal data. Since we collect minimal
                data, most requests can be fulfilled simply by declining cookies. For any data-related
                inquiries, contact us at{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary underline underline-offset-2">
                  {CONTACT_EMAIL}
                </a>.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">8. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this page
                with an updated &quot;Last updated&quot; date. Continued use of the Service after changes
                constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">9. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary underline underline-offset-2">
                  {CONTACT_EMAIL}
                </a>.
              </p>
            </section>

          </div>
        </div>
      </main>

      <footer className="border-t px-6 py-6 text-center text-sm text-muted-foreground">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/" className="hover:text-foreground transition-colors font-medium">{SITE_NAME}</Link>
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
