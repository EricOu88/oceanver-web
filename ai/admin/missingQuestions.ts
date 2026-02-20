/**
 * 缺口问题分析
 * 
 * 从日志中统计 NO_HIT 和负面反馈的问题
 */

import { readLogs } from '../logging/logEvent'
import { RetrievalDecision } from '../retriever/retrieve'

export interface MissingQuestion {
  question: string
  count: number
  lastSeen: string
  decision: RetrievalDecision
  hasNegativeFeedback: boolean
}

export async function analyzeMissingQuestions(): Promise<MissingQuestion[]> {
  const logs = await readLogs(1000) // 读取最近 1000 条日志
  
  // 统计 NO_HIT 和负面反馈的问题
  const questionMap = new Map<string, MissingQuestion>()
  
  for (const log of logs) {
    if (log.decision === RetrievalDecision.NO_HIT || 
        log.userFeedback === 'negative') {
      const key = log.question.toLowerCase().trim()
      
      if (!questionMap.has(key)) {
        questionMap.set(key, {
          question: log.question,
          count: 0,
          lastSeen: log.timestamp || '',
          decision: log.decision,
          hasNegativeFeedback: log.userFeedback === 'negative',
        })
      }
      
      const entry = questionMap.get(key)!
      entry.count++
      if (log.timestamp && log.timestamp > entry.lastSeen) {
        entry.lastSeen = log.timestamp
      }
      if (log.userFeedback === 'negative') {
        entry.hasNegativeFeedback = true
      }
    }
  }
  
  // 转换为数组并按频率排序
  const missingQuestions = Array.from(questionMap.values())
  missingQuestions.sort((a, b) => {
    // 优先显示有负面反馈的
    if (a.hasNegativeFeedback && !b.hasNegativeFeedback) return -1
    if (!a.hasNegativeFeedback && b.hasNegativeFeedback) return 1
    // 然后按频率排序
    return b.count - a.count
  })
  
  return missingQuestions
}
