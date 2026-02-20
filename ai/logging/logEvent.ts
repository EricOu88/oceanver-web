/**
 * 日志记录系统
 */

import * as fs from 'fs/promises'
import * as path from 'path'
import { RetrievalDecision } from '../retriever/retrieve'

export interface LogEvent {
  question: string
  decision: RetrievalDecision
  hits: Array<{ id: string; score: number }>
  answer: string
  used_doc_ids: string[]
  transferToHuman: boolean
  sessionId: string
  userFeedback?: 'positive' | 'negative'
  timestamp?: string
}

const LOG_FILE = path.join(process.cwd(), 'data', 'ai-logs.jsonl')

export async function logEvent(event: LogEvent): Promise<void> {
  const logEntry = {
    ...event,
    timestamp: event.timestamp || new Date().toISOString(),
  }
  
  const logLine = JSON.stringify(logEntry) + '\n'
  
  try {
    // 确保目录存在
    await fs.mkdir(path.dirname(LOG_FILE), { recursive: true })
    
    // 追加到日志文件
    await fs.appendFile(LOG_FILE, logLine, 'utf-8')
  } catch (error) {
    console.error('Failed to log event:', error)
    // 不抛出错误，避免影响主流程
  }
}

export async function readLogs(limit: number = 200): Promise<LogEvent[]> {
  try {
    const content = await fs.readFile(LOG_FILE, 'utf-8')
    const lines = content.trim().split('\n').filter(line => line.trim())
    const logs = lines.map(line => JSON.parse(line) as LogEvent)
    
    // 按时间戳倒序排列，返回最新的
    logs.sort((a, b) => {
      const timeA = new Date(a.timestamp || 0).getTime()
      const timeB = new Date(b.timestamp || 0).getTime()
      return timeB - timeA
    })
    
    return logs.slice(0, limit)
  } catch (error) {
    // 文件不存在或读取失败，返回空数组
    return []
  }
}
