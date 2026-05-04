# CraftCV — Free AI Cover Letter & Resume Summary Generator

A free, AI-powered site that generates cover letters and resume summaries.
Monetized via Google AdSense. No user accounts or subscriptions.

## Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** + **shadcn/ui**
- **OpenAI GPT-4o-mini** — fast, cheap AI generation
- **Upstash Redis** — IP-based rate limiting (5/day per IP)
- **Google AdSense** — passive ad revenue
- **Vercel** — hosting (free tier)

---

## Local Development Setup

### 1. Copy the environment variables template

```bash
cp .env.local.example .env.local
```

### 2. Fill in `.env.local`

| Variable | Where to get it |
|----------|----------------|
| `OPENAI_API_KEY` | https://platform.openai.com/api-keys |
| `UPSTASH_REDIS_REST_URL` | https://console.upstash.com -> Create Redis DB -> REST API tab |
| `UPSTASH_REDIS_REST_TOKEN` | Same page as above |
| `NEXT_PUBLIC_ADSENSE_PUBLISHER_ID` | Apply at https://adsense.google.com after site is live |

**Note:** Upstash vars are optional for local dev. If not set, rate limiting is disabled.

### 3. Run the dev server

```bash
npm run dev
```

Open http://localhost:3000

> AdSense ads will NOT load on localhost — that is expected.
> You will see a dashed placeholder box where ads will appear in production.

---

## Google AdSense Setup (step-by-step)

1. Deploy the site to Vercel first (site must be live with real content)
2. Apply at https://adsense.google.com using your Google account
3. Enter your live site URL when prompted
4. Wait for approval — typically 1 to 7 days
5. Once approved, go to AdSense -> Ads -> By ad unit -> Display ads -> Create new
6. Copy your Publisher ID (ca-pub-XXXXXXXXXXXXXXXXX)
7. Copy each Ad unit slot ID (10-digit number)
8. Add to Vercel environment variables:
   - NEXT_PUBLIC_ADSENSE_PUBLISHER_ID = ca-pub-XXXXXXXXXXXXXXXXX
9. Replace placeholder slot IDs in app/page.tsx and app/generate/page.tsx:
   <AdUnit slot="YOUR_REAL_SLOT_ID" format="horizontal" />
10. Redeploy — ads will start showing automatically

---

## Deployment (Vercel)

1. Push this repo to GitHub
2. Go to https://vercel.com -> New Project -> Import your repo
3. Add environment variables in Vercel dashboard:
   - OPENAI_API_KEY
   - UPSTASH_REDIS_REST_URL
   - UPSTASH_REDIS_REST_TOKEN
   - NEXT_PUBLIC_ADSENSE_PUBLISHER_ID (add after AdSense approval)
4. Click Deploy

---

## Rate Limiting (Upstash Redis)

- Free tier at https://upstash.com — 10,000 requests/day
- Rate limit: 5 generations per IP per day
- Keys auto-expire after 24 hours (sliding window)
- To reset an IP during testing: go to Upstash dashboard -> Data Browser
  -> delete the key craftcv:ratelimit:{ip}

---

## Cost Estimate

| Service           | Cost                                       |
|-------------------|--------------------------------------------|
| Vercel (hosting)  | Free                                       |
| Upstash Redis     | Free tier                                  |
| OpenAI GPT-4o-mini | ~$0.15/1M tokens (~$5-20/month at scale) |
| **Total**         | **~$5-20/month**                           |
