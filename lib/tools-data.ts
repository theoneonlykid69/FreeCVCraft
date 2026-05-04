export type PricingTier =
  | 'Fully Free'
  | 'Free with Limits'
  | 'Free Trial (No CC)'
  | 'Free Trial (CC Required)'

export type ToolCategory =
  | 'Job Search'
  | 'Interview Prep'
  | 'Productivity'

export interface Tool {
  name: string
  description: string
  url: string
  category: ToolCategory
  pricing: PricingTier
  /** true = built by us, shown in the featured strip */
  ours?: boolean
}

export const PRICING_TIERS: PricingTier[] = [
  'Fully Free',
  'Free with Limits',
  'Free Trial (No CC)',
  'Free Trial (CC Required)',
]

export const CATEGORIES: ToolCategory[] = [
  'Job Search',
  'Interview Prep',
  'Productivity',
]

export const TOOLS: Tool[] = [
  // ── Our Tools ─────────────────────────────────────────────────────────────
  {
    name: 'FreeCVCraft — Cover Letter',
    description: 'AI-generated cover letters in seconds. No signup, no credit card, no limits.',
    url: '/generate',
    category: 'Job Search',
    pricing: 'Fully Free',
    ours: true,
  },
  {
    name: 'FreeCVCraft — Resume Summary',
    description: 'Generate a sharp resume objective or professional summary instantly.',
    url: '/generate',
    category: 'Job Search',
    pricing: 'Fully Free',
    ours: true,
  },
  {
    name: 'MissionAssist360',
    description: 'Fleet management SaaS for trucking — invoices, dispatch, and more. Free trial, no credit card needed.',
    url: 'https://missionassist360.com',
    category: 'Productivity',
    pricing: 'Free Trial (No CC)',
    ours: true,
  },

  // ── Job Search ─────────────────────────────────────────────────────────────
  {
    name: 'Indeed',
    description: 'The world\'s largest job board — search millions of listings, no account needed to browse.',
    url: 'https://www.indeed.com',
    category: 'Job Search',
    pricing: 'Fully Free',
  },
  {
    name: 'Glassdoor',
    description: 'Job listings plus real salary data and company reviews from employees.',
    url: 'https://www.glassdoor.com',
    category: 'Job Search',
    pricing: 'Fully Free',
  },
  {
    name: 'Otta',
    description: 'Curated job matches at top tech and startup companies — no recruiter spam.',
    url: 'https://otta.com',
    category: 'Job Search',
    pricing: 'Fully Free',
  },
  {
    name: 'Wellfound (AngelList)',
    description: 'Startup and tech jobs with transparent salary and equity info upfront.',
    url: 'https://wellfound.com',
    category: 'Job Search',
    pricing: 'Fully Free',
  },
  {
    name: 'LinkedIn Jobs',
    description: 'Job listings, company research, and recruiter connections in one place.',
    url: 'https://www.linkedin.com/jobs',
    category: 'Job Search',
    pricing: 'Free with Limits',
  },
  {
    name: 'Jobscan',
    description: 'Scan your resume against any job description to optimize for ATS systems.',
    url: 'https://www.jobscan.co',
    category: 'Job Search',
    pricing: 'Free with Limits',
  },
  {
    name: 'Huntr',
    description: 'Visual kanban board to track every job application through each stage.',
    url: 'https://huntr.co',
    category: 'Job Search',
    pricing: 'Free with Limits',
  },

  // ── Interview Prep ─────────────────────────────────────────────────────────
  {
    name: 'Pramp',
    description: 'Free peer-to-peer mock interviews for software engineering and data roles.',
    url: 'https://www.pramp.com',
    category: 'Interview Prep',
    pricing: 'Fully Free',
  },
  {
    name: 'Interviewing.io',
    description: 'Anonymous technical mock interviews with engineers from top companies.',
    url: 'https://interviewing.io',
    category: 'Interview Prep',
    pricing: 'Free with Limits',
  },
  {
    name: 'Big Interview',
    description: 'Practice common interview questions with video recording and AI feedback.',
    url: 'https://biginterview.com',
    category: 'Interview Prep',
    pricing: 'Free Trial (No CC)',
  },

  // ── Productivity ───────────────────────────────────────────────────────────
  {
    name: 'Hemingway Editor',
    description: 'Paste your cover letter or summary — instantly see readability and clarity issues.',
    url: 'https://hemingwayapp.com',
    category: 'Productivity',
    pricing: 'Fully Free',
  },
  {
    name: 'Grammarly',
    description: 'AI grammar, spelling, and tone checker — polish any text before sending.',
    url: 'https://www.grammarly.com',
    category: 'Productivity',
    pricing: 'Free with Limits',
  },
  {
    name: 'Calendly',
    description: 'Share a link so recruiters can book interviews without the back-and-forth.',
    url: 'https://calendly.com',
    category: 'Productivity',
    pricing: 'Free with Limits',
  },
  {
    name: 'Notion',
    description: 'Track job applications, research companies, and keep notes all in one place.',
    url: 'https://www.notion.so',
    category: 'Productivity',
    pricing: 'Free with Limits',
  },
  {
    name: 'Loom',
    description: 'Record a quick video intro to attach to applications and stand out from the crowd.',
    url: 'https://www.loom.com',
    category: 'Productivity',
    pricing: 'Free with Limits',
  },
]
