export type PricingTier =
  | 'Fully Free'
  | 'Free with Limits'
  | 'Free Trial (No CC)'
  | 'Free Trial (CC Required)'

export type ToolCategory =
  | 'CV / Resume'
  | 'Cover Letter'
  | 'Job Search'
  | 'Interview Prep'
  | 'AI Writing'
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
  'CV / Resume',
  'Cover Letter',
  'Job Search',
  'Interview Prep',
  'AI Writing',
  'Productivity',
]

export const TOOLS: Tool[] = [
  // ── Our Tools ─────────────────────────────────────────────────────────────
  {
    name: 'FreeCVCraft — Cover Letter',
    description: 'AI-generated cover letters in seconds. No signup, no limits on reading.',
    url: '/generate',
    category: 'Cover Letter',
    pricing: 'Fully Free',
    ours: true,
  },
  {
    name: 'FreeCVCraft — Resume Summary',
    description: 'Generate a sharp resume objective or professional summary instantly.',
    url: '/generate',
    category: 'CV / Resume',
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

  // ── CV / Resume ────────────────────────────────────────────────────────────
  {
    name: 'Canva Resume Builder',
    description: 'Beautiful resume templates you can edit in the browser — no design skills needed.',
    url: 'https://www.canva.com/resumes/',
    category: 'CV / Resume',
    pricing: 'Free with Limits',
  },
  {
    name: 'Novoresume',
    description: 'Clean, ATS-friendly resume builder with one free resume slot.',
    url: 'https://novoresume.com',
    category: 'CV / Resume',
    pricing: 'Free with Limits',
  },
  {
    name: 'Kickresume',
    description: 'AI-assisted resume and cover letter builder with professional templates.',
    url: 'https://www.kickresume.com',
    category: 'CV / Resume',
    pricing: 'Free with Limits',
  },
  {
    name: 'Enhancv',
    description: 'Modern resume builder focused on storytelling and impact.',
    url: 'https://enhancv.com',
    category: 'CV / Resume',
    pricing: 'Free with Limits',
  },
  {
    name: 'VisualCV',
    description: 'Create and track your resume with analytics on who views it.',
    url: 'https://www.visualcv.com',
    category: 'CV / Resume',
    pricing: 'Free with Limits',
  },
  {
    name: 'Resume.io',
    description: 'Fast, guided resume builder with polished templates.',
    url: 'https://resume.io',
    category: 'CV / Resume',
    pricing: 'Free Trial (No CC)',
  },
  {
    name: 'Google Docs Resume Templates',
    description: 'Free resume templates built right into Google Docs — fully editable.',
    url: 'https://docs.google.com/templates',
    category: 'CV / Resume',
    pricing: 'Fully Free',
  },

  // ── Cover Letter ───────────────────────────────────────────────────────────
  {
    name: 'Cover Letter Now',
    description: 'Step-by-step cover letter builder with pre-written phrases.',
    url: 'https://www.cover-letter-now.com',
    category: 'Cover Letter',
    pricing: 'Free with Limits',
  },
  {
    name: 'MyPerfectResume',
    description: 'Cover letter and resume builder with guided prompts.',
    url: 'https://www.myperfectresume.com',
    category: 'Cover Letter',
    pricing: 'Free Trial (No CC)',
  },

  // ── Job Search ─────────────────────────────────────────────────────────────
  {
    name: 'Indeed',
    description: 'The world\'s largest job board — search millions of listings for free.',
    url: 'https://www.indeed.com',
    category: 'Job Search',
    pricing: 'Fully Free',
  },
  {
    name: 'LinkedIn Jobs',
    description: 'Job listings, company research, and professional networking in one place.',
    url: 'https://www.linkedin.com/jobs',
    category: 'Job Search',
    pricing: 'Free with Limits',
  },
  {
    name: 'Glassdoor',
    description: 'Job listings with real salary data and company reviews from employees.',
    url: 'https://www.glassdoor.com',
    category: 'Job Search',
    pricing: 'Fully Free',
  },
  {
    name: 'Otta',
    description: 'Curated job matches at top tech and startup companies — no spam.',
    url: 'https://otta.com',
    category: 'Job Search',
    pricing: 'Fully Free',
  },
  {
    name: 'Wellfound (AngelList)',
    description: 'Startup and tech jobs with transparent salary and equity info.',
    url: 'https://wellfound.com',
    category: 'Job Search',
    pricing: 'Fully Free',
  },
  {
    name: 'Huntr',
    description: 'Visual job application tracker — kanban board for your job search.',
    url: 'https://huntr.co',
    category: 'Job Search',
    pricing: 'Free with Limits',
  },
  {
    name: 'Jobscan',
    description: 'Scan your resume against a job description to optimize for ATS.',
    url: 'https://www.jobscan.co',
    category: 'Job Search',
    pricing: 'Free with Limits',
  },

  // ── Interview Prep ─────────────────────────────────────────────────────────
  {
    name: 'Pramp',
    description: 'Free peer-to-peer mock interviews for software engineering roles.',
    url: 'https://www.pramp.com',
    category: 'Interview Prep',
    pricing: 'Fully Free',
  },
  {
    name: 'Big Interview',
    description: 'Practice answering common interview questions with video recording.',
    url: 'https://biginterview.com',
    category: 'Interview Prep',
    pricing: 'Free Trial (No CC)',
  },

  // ── AI Writing ─────────────────────────────────────────────────────────────
  {
    name: 'ChatGPT',
    description: 'General-purpose AI assistant — great for drafting, editing, and brainstorming.',
    url: 'https://chat.openai.com',
    category: 'AI Writing',
    pricing: 'Free with Limits',
  },
  {
    name: 'Claude.ai',
    description: 'Anthropic\'s AI — strong at writing, summarizing, and long documents.',
    url: 'https://claude.ai',
    category: 'AI Writing',
    pricing: 'Free with Limits',
  },
  {
    name: 'Grammarly',
    description: 'AI-powered grammar, tone, and clarity checker for all your writing.',
    url: 'https://www.grammarly.com',
    category: 'AI Writing',
    pricing: 'Free with Limits',
  },
  {
    name: 'Hemingway Editor',
    description: 'Paste your text to get instant readability and clarity feedback.',
    url: 'https://hemingwayapp.com',
    category: 'AI Writing',
    pricing: 'Fully Free',
  },
  {
    name: 'QuillBot',
    description: 'AI paraphrasing, summarizing, and grammar checking tool.',
    url: 'https://quillbot.com',
    category: 'AI Writing',
    pricing: 'Free with Limits',
  },

  // ── Productivity ───────────────────────────────────────────────────────────
  {
    name: 'Google Docs',
    description: 'Free collaborative word processor — perfect for writing and sharing resumes.',
    url: 'https://docs.google.com',
    category: 'Productivity',
    pricing: 'Fully Free',
  },
  {
    name: 'Notion',
    description: 'All-in-one workspace — track your job applications, notes, and goals.',
    url: 'https://www.notion.so',
    category: 'Productivity',
    pricing: 'Free with Limits',
  },
  {
    name: 'Trello',
    description: 'Kanban boards for tracking job applications through each stage.',
    url: 'https://trello.com',
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
    name: 'Loom',
    description: 'Record quick video introductions to attach to applications and stand out.',
    url: 'https://www.loom.com',
    category: 'Productivity',
    pricing: 'Free with Limits',
  },
]
