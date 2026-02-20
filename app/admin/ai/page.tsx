/**
 * AI 客服管理页面
 * 
 * 查看缺口列表和最近问答记录
 */

'use client'

import { useEffect, useState } from 'react'
import { readLogs } from '@/ai/logging/logEvent'
import { analyzeMissingQuestions } from '@/ai/admin/missingQuestions'
import type { LogEvent } from '@/ai/logging/logEvent'
import type { MissingQuestion } from '@/ai/admin/missingQuestions'

export default function AIAdminPage() {
  const [logs, setLogs] = useState<LogEvent[]>([])
  const [missingQuestions, setMissingQuestions] = useState<MissingQuestion[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadData()
  }, [])

  async function loadData() {
    setLoading(true)
    try {
      const [logsData, missingData] = await Promise.all([
        fetch('/api/admin/ai/logs').then(r => r.json()),
        fetch('/api/admin/ai/missing').then(r => r.json()),
      ])
      setLogs(logsData.logs || [])
      setMissingQuestions(missingData.missingQuestions || [])
    } catch (error) {
      console.error('Failed to load admin data:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div className="p-8">加载中...</div>
  }

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">AI 客服管理面板</h1>

      {/* 缺口问题列表 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Top 缺口问题（建议新增 QA）</h2>
        <div className="bg-white rounded-lg shadow p-6">
          {missingQuestions.length === 0 ? (
            <p className="text-gray-500">暂无缺口问题</p>
          ) : (
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">问题</th>
                  <th className="text-left p-2">出现次数</th>
                  <th className="text-left p-2">最后出现</th>
                  <th className="text-left p-2">状态</th>
                </tr>
              </thead>
              <tbody>
                {missingQuestions.slice(0, 20).map((q, i) => (
                  <tr key={i} className="border-b">
                    <td className="p-2">{q.question}</td>
                    <td className="p-2">{q.count}</td>
                    <td className="p-2">{new Date(q.lastSeen).toLocaleString()}</td>
                    <td className="p-2">
                      {q.hasNegativeFeedback && (
                        <span className="text-red-600">👎 负面反馈</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>

      {/* 最近问答记录 */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">最近 200 条问答记录</h2>
        <div className="bg-white rounded-lg shadow p-6">
          {logs.length === 0 ? (
            <p className="text-gray-500">暂无记录</p>
          ) : (
            <div className="space-y-4">
              {logs.map((log, i) => (
                <div key={i} className="border-b pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <p className="font-semibold">Q: {log.question}</p>
                      <p className="text-gray-600 mt-1">A: {log.answer}</p>
                    </div>
                    <div className="ml-4 text-sm text-gray-500">
                      <div>决策: {log.decision}</div>
                      <div>转人工: {log.transferToHuman ? '是' : '否'}</div>
                      <div>{new Date(log.timestamp || '').toLocaleString()}</div>
                    </div>
                  </div>
                  {log.used_doc_ids.length > 0 && (
                    <div className="text-xs text-gray-400">
                      使用文档: {log.used_doc_ids.join(', ')}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
