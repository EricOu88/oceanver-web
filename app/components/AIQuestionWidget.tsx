'use client'

import React from 'react'
import { useEffect, useState, useCallback, useRef } from 'react'
import { MessageCircle, X, Send, Bot } from 'lucide-react'
import {
  hotQuestions,
  type QuestionAnswer,
} from '@/lib/ai-question-data'

interface Message {
  id: string
  type: 'user' | 'bot'
  content: string  // 严格类型：只能是字符串
  timestamp: Date
  debug?: {
    decision?: string
    maxScore?: number
    detectedProvider?: string | null
    topHitProvider?: string
    providerGateDroppedCount?: number
    blockReason?: string | null
    topK?: Array<{
      id: string
      score: number
      question: string
      provider: string
      source_url?: string
    }>
  }
}

// 工具函数：安全提取字符串内容（防止对象被直接渲染）
// 这个函数必须确保在所有情况下都返回字符串，绝不返回对象
function safeExtractString(value: any, fallback: string = '这个问题需要人工确认，我建议你加微信，我可以帮你具体查一下。'): string {
  // ============================================
  // 情况1：直接是字符串 ✅
  // ============================================
  if (typeof value === 'string') {
    return value
  }
  
  // ============================================
  // 情况2：是对象（如 MatchResult {answer, shouldBlock, shouldGuide}）
  // ============================================
  if (value && typeof value === 'object') {
    // 检查是否是数组（数组也是对象）
    if (Array.isArray(value)) {
      console.error('[ERROR] Array passed to safeExtractString:', value)
      return fallback
    }
    
    // 检查是否有 answer 字段
    if ('answer' in value) {
      const answerValue = value.answer
      if (typeof answerValue === 'string') {
        return answerValue
      } else if (answerValue === null || answerValue === undefined) {
        return fallback
      } else {
        // answer 字段存在但不是字符串，尝试转换
        try {
          const converted = String(answerValue)
          console.warn('[WARN] answer field is not string, converted:', typeof answerValue, '->', converted)
          return converted
        } catch (e) {
          console.error('[ERROR] Failed to convert answer field to string:', answerValue, e)
          return fallback
        }
      }
    }
    
    // 如果对象中没有 answer 字段，记录错误并使用 fallback
    const keys = Object.keys(value)
    console.error('[ERROR] Object missing answer field. Keys:', keys, 'Value:', value)
    
    // 如果对象有 shouldBlock 或 shouldGuide 字段，说明这是 MatchResult 类型
    if ('shouldBlock' in value || 'shouldGuide' in value) {
      console.error('[ERROR] MatchResult object detected without answer field:', value)
    }
    
    return fallback
  }
  
  // ============================================
  // 情况3：null, undefined
  // ============================================
  if (value === null || value === undefined) {
    return fallback
  }
  
  // ============================================
  // 情况4：其他类型（number, boolean, symbol 等），尝试转换为字符串
  // ============================================
  try {
    const converted = String(value)
    // 再次检查转换后的结果不是 '[object Object]'
    if (converted === '[object Object]') {
      console.error('[ERROR] String(value) returned [object Object]:', value)
      return fallback
    }
    return converted
  } catch (e) {
    console.error('[ERROR] Failed to convert to string:', value, e)
    return fallback
  }
}

export default function AIQuestionWidget() {
  // Debug 显示开关：生产环境不显示
  const SHOW_DEBUG = process.env.NODE_ENV !== 'production'
  
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showShake, setShowShake] = useState(false)
  const [mouseY, setMouseY] = useState<number | null>(null)
  const [widgetTop, setWidgetTop] = useState<number | null>(null)
  const [isMounted, setIsMounted] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const widgetRef = useRef<HTMLDivElement>(null)

  // 确保只在客户端渲染后设置样式，避免 hydration mismatch
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // 滚动到底部
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  // 添加消息（严格类型检查）
  const addMessage = useCallback((type: 'user' | 'bot', content: string | any) => {
    // 使用安全提取函数确保 content 是字符串
    const safeContent = safeExtractString(content)
    
    // 运行时双重检查：确保 safeContent 确实是字符串
    if (typeof safeContent !== 'string') {
      console.error('[CRITICAL ERROR] safeExtractString returned non-string:', typeof safeContent, safeContent)
      const fallbackContent = '这个问题需要人工确认，我建议你加微信，我可以帮你具体查一下。'
      const newMessage: Message = {
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        type,
        content: fallbackContent,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, newMessage])
      return
    }
    
    const newMessage: Message = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      type,
      content: safeContent, // 确保是字符串
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, newMessage])
  }, [])

  // 处理发送消息（使用新的 RAG 系统）
  const handleSend = useCallback(async () => {
    if (!inputValue.trim()) return

    const userQuestion = inputValue.trim()
    addMessage('user', userQuestion)
    setInputValue('')
    setIsTyping(true)

    try {
      // 调用新的 AI Chat API
      const response = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userQuestion,
          sessionId: `session-${Date.now()}`,
          currentUrl: typeof window !== 'undefined' ? window.location.pathname : null,
        }),
      })

      // 解析响应（无论状态码如何）
      let data: any
      try {
        data = await response.json()
      } catch (parseError) {
        // 如果 JSON 解析失败，使用默认错误消息
        console.error('Failed to parse API response:', parseError)
        addMessage('bot', '这个问题需要人工确认，我建议你加微信，我可以帮你具体查一下。')
        setIsTyping(false)
        scrollToBottom()
        return
      }

      // 如果 API 返回错误或 HTTP 状态码不是 200，使用错误消息或默认答案
      if (!response.ok || data.error) {
        console.error('API Error:', data.error || `HTTP ${response.status}`)
        // 使用安全提取函数确保 answer 是字符串
        const errorAnswer = safeExtractString(data.answer)
        addMessage('bot', errorAnswer)
        setIsTyping(false)
        scrollToBottom()
        return
      }

      // 添加 AI 回答（包含 debug 信息）
      // 使用安全提取函数确保 answer 是字符串（防止对象被直接渲染）
      const answerContent = safeExtractString(data.answer)
      
      const botMessage: Message & { debug?: any } = {
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        type: 'bot',
        content: answerContent, // 确保是字符串
        timestamp: new Date(),
        debug: data.debug,
      }
      setMessages((prev) => [...prev, botMessage])

      // 开发环境：控制台输出详细调试信息
      if (process.env.NODE_ENV === 'development' && data.debug) {
        const debugInfo = data.debug
        const hitCount = debugInfo.topK?.length || 0
        const maxScore = debugInfo.maxScore || debugInfo.topScore || 0
        const decision = debugInfo.decision || 'UNKNOWN'
        
        console.log('🔍 AI 检索调试信息:', {
          decision,
          hitCount,
          maxScore: maxScore.toFixed(3),
          blockReason: debugInfo.blockReason || null,
          topK: debugInfo.topK,
        })
        
        // 在控制台输出详细信息
        if (debugInfo.topK && debugInfo.topK.length > 0) {
          console.log('📋 Top 命中列表:')
          debugInfo.topK.forEach((hit: any, idx: number) => {
            console.log(`  ${idx + 1}. [${hit.provider}] ${hit.question} (得分: ${hit.score.toFixed(3)})`)
          })
        }
      }

      // 如果需要转人工，显示提示（但不改变 UI 布局）
      if (data.transferToHuman) {
        // 可以在消息中添加特殊标记，前端可以识别并显示"加微信"按钮
        // 当前实现：答案中已包含引导，不需要额外 UI
      }

      setIsTyping(false)
      scrollToBottom()
    } catch (error) {
      console.error('AI Chat Error:', error)
      addMessage('bot', '这个问题需要人工确认，我建议你加微信，我可以帮你具体查一下。')
      setIsTyping(false)
      scrollToBottom()
    }
  }, [inputValue, addMessage, scrollToBottom])

  // 处理热门问题点击（使用新的 RAG 系统）
  const handleHotQuestionClick = useCallback(
    async (hotQuestion: QuestionAnswer) => {
      addMessage('user', hotQuestion.q)
      setIsTyping(true)

      try {
        // 获取当前页面 URL 作为上下文
        const currentUrl = typeof window !== 'undefined' ? window.location.pathname : null
        
        // 调用新的 AI Chat API
        const response = await fetch('/api/ai-chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: hotQuestion.q,
            sessionId: `session-${Date.now()}`,
            currentUrl: currentUrl, // 传递当前页面 URL
          }),
        })

        // 解析响应（无论状态码如何）
        let data: any
        try {
          data = await response.json()
        } catch (parseError) {
          // 如果 JSON 解析失败，使用默认答案
          console.error('Failed to parse API response:', parseError)
          addMessage('bot', hotQuestion.a || '这个问题需要人工确认，我建议你加微信，我可以帮你具体查一下。')
          setIsTyping(false)
          scrollToBottom()
          return
        }

        // 如果 API 返回错误或 HTTP 状态码不是 200，使用错误消息或默认答案
        if (!response.ok || data.error) {
          console.error('API Error:', data.error || `HTTP ${response.status}`)
          // 使用安全提取函数确保 answer 是字符串
          const errorAnswer = safeExtractString(data.answer, hotQuestion.a || '这个问题需要人工确认，我建议你加微信，我可以帮你具体查一下。')
          addMessage('bot', errorAnswer)
          setIsTyping(false)
          scrollToBottom()
          return
        }

        // 添加 AI 回答（包含 debug 信息）
        // 使用安全提取函数确保 answer 是字符串（防止对象被直接渲染）
        const answerContent = safeExtractString(data.answer, hotQuestion.a || '这个问题需要人工确认，我建议你加微信，我可以帮你具体查一下。')
        
        // 运行时双重检查：确保 answerContent 确实是字符串
        if (typeof answerContent !== 'string') {
          console.error('[CRITICAL ERROR] answerContent is not string after safeExtractString:', typeof answerContent, answerContent)
          const fallbackContent = hotQuestion.a || '这个问题需要人工确认，我建议你加微信，我可以帮你具体查一下。'
          const botMessage: Message & { debug?: any } = {
            id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
            type: 'bot',
            content: fallbackContent,
            timestamp: new Date(),
            debug: data.debug,
          }
          setMessages((prev) => [...prev, botMessage])
        } else {
          const botMessage: Message & { debug?: any } = {
            id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
            type: 'bot',
            content: answerContent, // 确保是字符串
            timestamp: new Date(),
            debug: data.debug,
          }
          setMessages((prev) => [...prev, botMessage])
        }

        // 开发环境：控制台输出详细调试信息
        if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development' && data.debug) {
          const debugInfo = data.debug
          const hitCount = debugInfo.topK?.length || 0
          const maxScore = debugInfo.maxScore || debugInfo.topScore || 0
          const decision = debugInfo.decision || 'UNKNOWN'
          
          console.log('🔍 AI 检索调试信息:', {
            decision,
            hitCount,
            maxScore: maxScore.toFixed(3),
            blockReason: debugInfo.blockReason || null,
            topK: debugInfo.topK,
          })
        }

        setIsTyping(false)
        scrollToBottom()
      } catch (error) {
        console.error('AI Chat Error:', error)
        // 如果 API 失败，使用默认答案
        const fallbackAnswer = safeExtractString(hotQuestion.a)
        addMessage('bot', fallbackAnswer)
        setIsTyping(false)
        scrollToBottom()
      }
    },
    [addMessage, scrollToBottom]
  )

  // 打开窗口时显示欢迎消息（如果消息列表为空）
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addMessage(
          'bot',
          '你好，我是鸿达电讯的中文智能客服，可以先帮你解答宽带和手机的问题 🙂'
        )
      }, 300)
    }
  }, [isOpen, messages.length, addMessage])

  // 微动效：每 10 秒晃动提示
  useEffect(() => {
    if (isOpen) return // 打开时不显示晃动

    const interval = setInterval(() => {
      setShowShake(true)
      setTimeout(() => setShowShake(false), 1000)
    }, 10000) // 每 10 秒

    return () => clearInterval(interval)
  }, [isOpen])

  // 自动聚焦输入框
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 100)
    }
  }, [isOpen])

  // 键盘事件处理
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
      if (e.key === 'Enter' && isOpen && !e.shiftKey) {
        e.preventDefault()
        handleSend()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, handleSend])

  // 窗口打开时初始化位置
  useEffect(() => {
    if (isOpen && widgetTop === null && typeof window !== 'undefined') {
      const windowHeight = window.innerHeight
      setWidgetTop(windowHeight - 600 - 24) // 默认在底部
    }
  }, [isOpen, widgetTop])

  // 鼠标跟踪：跟随鼠标上下浮动
  useEffect(() => {
    if (!isOpen) return
    
    const handleMouseMove = (e: MouseEvent) => {
      const windowHeight = window.innerHeight
      const widgetHeight = 600
      const padding = 24
      
      // 计算窗口应该的位置（窗口中心对齐鼠标）
      let topPosition = e.clientY - widgetHeight / 2
      
      // 确保窗口不超出视口
      if (topPosition < padding) {
        topPosition = padding
      } else if (topPosition + widgetHeight > windowHeight - padding) {
        topPosition = windowHeight - widgetHeight - padding
      }
      
      setWidgetTop(topPosition)
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [isOpen])

  // 点击外部关闭
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        widgetRef.current &&
        !widgetRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        // 检查点击是否在按钮上
        const target = event.target as HTMLElement
        if (!target.closest('[data-ai-widget-button]')) {
          setIsOpen(false)
        }
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  // 计算窗口位置
  const getWidgetPosition = () => {
    if (!isOpen) {
      return { bottom: '1.5rem', top: 'auto' }
    }
    
    if (widgetTop !== null) {
      return { top: `${widgetTop}px`, bottom: 'auto' }
    }
    
    // 默认位置：右下角
    return { bottom: '1.5rem', top: 'auto' }
  }

  // 如果未挂载，不渲染任何内容（避免 hydration mismatch）
  if (!isMounted) {
    return null
  }

  // ============================================
  // 运行时安全检查：确保所有 messages 的 content 都是字符串
  // ============================================
  const safeMessages = messages.map((msg, idx) => {
    if (typeof msg.content !== 'string') {
      console.error(`[CRITICAL ERROR] Message ${idx} has non-string content:`, typeof msg.content, msg.content)
      return {
        ...msg,
        content: safeExtractString(msg.content),
      }
    }
    return msg
  })

  return (
    <>
      {/* 悬浮按钮 - 确保在所有设备上可见，不遮挡主要CTA */}
      {!isOpen && (
        <div 
          className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-[9999]"
          suppressHydrationWarning
        >
          {/* 气泡提示 */}
          {showShake && (
            <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-slate-900 text-white text-sm rounded-lg shadow-lg whitespace-nowrap animate-fade-in">
              有什么可以帮您的？
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
            </div>
          )}

          <button
            data-ai-widget-button
            onClick={() => {
              console.log('AI 问答按钮被点击')
              setIsOpen(true)
            }}
            className={`
              relative flex items-center gap-2
              bg-blue-700 hover:bg-blue-800
              text-white px-4 py-3 rounded-full
              shadow-lg hover:shadow-xl
              transition-all duration-300
              hover:scale-105
              focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2
              cursor-pointer
              text-sm md:text-base
              ${showShake ? 'animate-shake' : ''}
            `}
            aria-label="打开 AI 问答"
          >
            <Bot size={20} />
            <span className="font-semibold">AI智能客服在线解答</span>
          </button>
        </div>
      )}

      {/* 对话窗口 - 跟随鼠标上下浮动 */}
      {isOpen && (
        <div
          ref={widgetRef}
          className="fixed right-6 w-[90vw] max-w-md h-[600px] flex flex-col bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-slide-up transition-all duration-200 ease-out z-[9999]"
          style={getWidgetPosition()}
        >
          {/* 头部 */}
          <div className="flex items-center justify-between px-5 py-4 bg-blue-700 text-white">
            <div className="flex items-center gap-2">
              <Bot size={20} />
              <h3 className="font-semibold text-lg">鸿达电讯智能客服</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="关闭"
            >
              <X size={20} />
            </button>
          </div>

          {/* 消息区域 */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-slate-50">
            {/* 热门问题（仅在首次打开时显示） */}
            {messages.length === 0 && (
              <div className="space-y-2 mb-4">
                <p className="text-xs text-slate-500 font-medium mb-2">
                  热门问题：
                </p>
                {hotQuestions.map((hotQ, index) => (
                  <button
                    key={index}
                    onClick={() => handleHotQuestionClick(hotQ)}
                    className="w-full text-left px-4 py-2 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all text-sm text-slate-700"
                  >
                    {hotQ.q}
                  </button>
                ))}
              </div>
            )}

            {/* 消息列表 */}
            {safeMessages.map((message) => {
              return (
                <div key={message.id}>
                  <div
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`
                        max-w-[80%] px-4 py-2 rounded-2xl
                        ${
                          message.type === 'user'
                            ? 'bg-blue-600 text-white'
                            : 'bg-white border border-slate-200 text-slate-800'
                        }
                      `}
                    >
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">
                        {/* 
                          严格检查：确保只渲染字符串，防止对象被直接渲染
                          即使 message.content 理论上应该是字符串，也要再次检查
                        */}
                        {(() => {
                          // 运行时检查：确保 message.content 是字符串
                          if (typeof message.content === 'string') {
                            return message.content
                          }
                          
                          // 如果不是字符串，使用 safeExtractString 提取
                          console.error('[CRITICAL ERROR] message.content is not string:', typeof message.content, message.content)
                          return safeExtractString(message.content)
                        })()}
                      </p>
                    </div>
                  </div>
                  
                  {/* Debug 信息：仅在开发环境显示 */}
                  {SHOW_DEBUG && message.debug && (
                    <div className="flex justify-start mt-1 mb-2">
                      <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded font-mono">
                        [decision={message.debug.decision ?? 'N/A'}
                        maxScore={typeof message.debug.maxScore === 'number' ? message.debug.maxScore.toFixed(3) : 'N/A'}
                        detectedProvider={message.debug.detectedProvider ?? 'N/A'}
                        topHitProvider={message.debug.topHitProvider ?? 'N/A'}
                        dropped={message.debug.providerGateDroppedCount ?? 0}
                        blockReason={message.debug.blockReason ?? 'N/A'}
                        topK={message.debug.topK?.length ?? 0}]
                      </div>
                    </div>
                  )}
                </div>
              )
            })}

            {/* 输入中提示 */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 rounded-2xl px-4 py-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                      style={{ animationDelay: '0.1s' }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                      style={{ animationDelay: '0.2s' }}
                    ></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* 输入区域 */}
          <div className="border-t border-slate-200 bg-white p-4">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault()
                    handleSend()
                  }
                }}
                placeholder="输入您的问题..."
                className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                disabled={isTyping}
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim() || isTyping}
                className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="发送"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-xs text-slate-500 mt-2 text-center">
              提示：点击热门问题快速开始，或直接输入您的问题
            </p>
          </div>
        </div>
      )}
    </>
  )
}
