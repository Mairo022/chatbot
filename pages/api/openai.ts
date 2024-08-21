import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";
import { NextRequest } from "next/server";

const openai = createOpenAI({
  compatibility: 'strict',
  apiKey: process.env.OPENAI_API_KEY
})

export const runtime = 'edge'

export default async function POST(req: NextRequest) {
  const body = await req.json()
  const { messages } = body
  
  const result = await streamText({
    model: openai('gpt-3.5-turbo'),
    messages,
    maxRetries: 0
  })

  return result.toDataStreamResponse()
}
