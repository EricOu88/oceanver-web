import { NextResponse } from 'next/server'
import { readLogs } from '@/ai/logging/logEvent'

export async function GET() {
  try {
    const logs = await readLogs(200)
    return NextResponse.json({ logs })
  } catch (error) {
    console.error('Failed to read logs:', error)
    return NextResponse.json({ logs: [] }, { status: 500 })
  }
}
