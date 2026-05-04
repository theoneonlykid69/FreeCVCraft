import { NextRequest, NextResponse } from "next/server"
import OpenAI from "openai"
import { ratelimiter } from "@/lib/ratelimit"

type GenerationType = "cover_letter" | "resume_summary"

function buildPrompt(
  type: GenerationType,
  jobTitle: string,
  company: string,
  background: string,
  tone: string
): string {
  const toneDesc =
    tone === "casual"
      ? "conversational and warm"
      : tone === "confident"
      ? "assertive and bold"
      : "formal and polished"

  if (type === "cover_letter") {
    return [
      "You are an expert career coach and professional writer. Write a compelling cover letter for:",
      `- Job Title: ${jobTitle}`,
      `- Company: ${company || "the company"}`,
      `- Applicant Background: ${background}`,
      `- Tone: ${toneDesc}`,
      "",
      "Write 3-4 paragraphs. Start directly with a strong opening hook - no date, address, or Dear Hiring Manager. Keep it under 350 words. End with a confident closing paragraph.",
    ].join("\n")
  }

  return [
    "You are an expert resume writer. Write a concise, impactful resume summary for:",
    `- Target Role: ${jobTitle}`,
    `- Target Company: ${company || "not specified"}`,
    `- Background: ${background}`,
    `- Tone: ${toneDesc}`,
    "",
    "Write 2-3 sentences (50-80 words). Write in first person without using the word I. Make it punchy and results-oriented.",
  ].join("\n")
}

export async function POST(request: NextRequest) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OpenAI API key is not configured. Add OPENAI_API_KEY to your .env.local." },
        { status: 500 }
      )
    }

    // Lazy-initialize inside handler so builds without the env var succeed
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

    // IP-based rate limiting: 5 generations per day (skipped in local dev)
    if (ratelimiter && process.env.NODE_ENV !== "development") {
      const ip =
        request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
        request.headers.get("x-real-ip") ||
        "127.0.0.1"

      const { success } = await ratelimiter.limit(ip)

      if (!success) {
        return NextResponse.json(
          { error: "You have reached the daily limit of 5 free generations. Come back tomorrow!" },
          { status: 429 }
        )
      }
    }

    const body = await request.json()
    const { type, jobTitle, company = "", background, tone = "professional" } = body

    if (!jobTitle?.trim() || !background?.trim()) {
      return NextResponse.json(
        { error: "Job title and background are required." },
        { status: 400 }
      )
    }

    if (!["cover_letter", "resume_summary"].includes(type)) {
      return NextResponse.json({ error: "Invalid generation type." }, { status: 400 })
    }

    const prompt = buildPrompt(
      type as GenerationType,
      jobTitle.trim(),
      company.trim(),
      background.trim(),
      tone
    )

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 600,
      temperature: 0.7,
    })

    const result = completion.choices[0]?.message?.content?.trim()

    if (!result) {
      return NextResponse.json(
        { error: "Generation failed. Please try again." },
        { status: 500 }
      )
    }

    return NextResponse.json({ result })
  } catch (err) {
    console.error("[/api/generate] error:", err)
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    )
  }
}
