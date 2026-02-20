/**
 * AI 聊天 API 接口
 */

import { NextRequest, NextResponse } from 'next/server'
import { composeAnswer } from '@/ai/answer/composeAnswer'
import { logEvent } from '@/ai/logging/logEvent'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { message, sessionId, currentUrl } = body
    
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Invalid message' },
        { status: 400 }
      )
    }
    
    // 从当前 URL 提取 provider（如果提供）
    let contextProvider: string | null = null
    if (currentUrl && typeof currentUrl === 'string') {
      // 从 URL 路径中提取 provider
      // 例如：/internet/xfinity/faq -> xfinity
      //      /internet/att/fiber -> att
      //      /internet/spectrum -> spectrum
      const urlMatch = currentUrl.match(/\/(internet|cellphone)\/(xfinity|att|spectrum|verizon|tmobile|frontier|ultra|genmobile)/i)
      if (urlMatch && urlMatch[2]) {
        contextProvider = urlMatch[2].toLowerCase()
        // 标准化 provider 名称
        if (contextProvider === 'at&t' || contextProvider === 'at and t') {
          contextProvider = 'att'
        }
      }
    }
    
    // 生成答案（传入上下文 provider）
    let result
    try {
      result = await composeAnswer(message, contextProvider)
    } catch (composeError) {
      console.error('composeAnswer error:', composeError)
      const isDev = process.env.NODE_ENV === 'development'
      const errorMessage = composeError instanceof Error ? composeError.message : 'Unknown error'
      return NextResponse.json(
        {
          error: isDev ? errorMessage : 'Internal server error',
          answer: '这个问题需要人工确认，我建议你加微信，我可以帮你具体查一下。',
          transferToHuman: true,
          ...(isDev && composeError instanceof Error && { stack: composeError.stack }),
        },
        { status: 500 }
      )
    }
    
    // 记录日志（如果失败不影响响应）
    try {
      await logEvent({
        question: message,
        decision: result.decision,
        hits: result.used_doc_ids.map(id => ({ id, score: 0 })), // 简化，实际应该从检索结果获取
        answer: result.answer,
        used_doc_ids: result.used_doc_ids,
        transferToHuman: result.transferToHuman,
        sessionId: sessionId || 'unknown',
      })
    } catch (logError) {
      // 日志记录失败不影响 API 响应
      console.warn('Log event failed:', logError)
    }
    
    // 返回结果（开发环境包含 debug 信息）
    const isDev = process.env.NODE_ENV === 'development'
    
    // 确保 result 存在
    if (!result) {
      console.error('composeAnswer returned undefined')
      return NextResponse.json(
        {
          error: isDev ? 'composeAnswer returned undefined' : 'Internal server error',
          answer: '这个问题需要人工确认，我建议你加微信，我可以帮你具体查一下。',
          transferToHuman: true,
        },
        { status: 500 }
      )
    }
    
    return NextResponse.json({
      answer: result.answer,
      citations: result.citations,
      transferToHuman: result.transferToHuman,
      ...(isDev && {
        debug: {
          decision: result.decision,
          maxScore: result.debug?.maxScore || result.debug?.topScore,
          detectedProvider: result.debug?.detectedProvider || null,
          topHitProvider: result.debug?.topHitProvider,
          providerGateDroppedCount: result.debug?.providerGateDroppedCount || 0,
          topK: result.debug?.topK || [],
          blockReason: result.debug?.blockReason || null,
        },
      }),
    })
  } catch (error) {
    console.error('AI Chat API Error:', error)
    
    // 提供更详细的错误信息（开发环境）
    const isDev = process.env.NODE_ENV === 'development'
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    const errorStack = error instanceof Error ? error.stack : undefined
    
    if (isDev) {
      console.error('Error details:', {
        message: errorMessage,
        stack: errorStack,
        error: error,
      })
    }
    
    return NextResponse.json(
      { 
        error: isDev ? errorMessage : 'Internal server error',
        answer: '这个问题需要人工确认，我建议你加微信，我可以帮你具体查一下。',
        transferToHuman: true,
        ...(isDev && { stack: errorStack }),
      },
      { status: 500 }
    )
  }
}
