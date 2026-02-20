import { NextResponse } from 'next/server'
import { analyzeMissingQuestions } from '@/ai/admin/missingQuestions'

export async function GET() {
  try {
    const missingQuestions = await analyzeMissingQuestions()
    return NextResponse.json({ missingQuestions })
  } catch (error) {
    console.error('Failed to analyze missing questions:', error)
    return NextResponse.json({ missingQuestions: [] }, { status: 500 })
  }
}
