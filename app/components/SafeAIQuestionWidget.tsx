"use client"
import { useState, useEffect, useRef, useCallback } from 'react'

export default function SafeAIQuestionWidget() {
  // 使用 useState 的初始值确保服务器端和客户端一致
  const [mounted, setMounted] = useState(false)
  const [messages, setMessages] = useState<string[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // 开头问候语
  const welcomeMessages = [
    "👋 您好！我是 Xfinity AI 助手",
    "💡 可以帮您解答：商业宽带、营业执照、安装费用等常见问题",
    "📞 如需人工客服，请告诉我"
  ]

  // 确保只在客户端执行，避免 hydration mismatch
  useEffect(() => {
    // 使用 requestAnimationFrame 确保在浏览器完全准备好后再设置
    if (typeof window !== 'undefined') {
      setMounted(true)
    }
  }, [])

  // 滚动到底部
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])

  useEffect(() => {
    if (mounted) {
      scrollToBottom()
    }
  }, [messages, scrollToBottom, mounted])

  // 初始化问候语（只在 mounted 后且打开时执行，避免 hydration mismatch）
  useEffect(() => {
    if (!mounted) return
    if (isOpen && messages.length === 0) {
      setMessages([...welcomeMessages])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted, isOpen]) // 不包含 messages.length 和 welcomeMessages，避免不必要的重新渲染

  const handleSend = async () => {
    if (!input.trim() || isLoading) return
    
    const question = input.trim()
    setInput('')
    setMessages(prev => [...prev, `👤 您: ${question}`])
    setIsLoading(true)

    try {
      const res = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: question,
          sessionId: `session-${Date.now()}`,
          currentUrl: window.location.pathname,
        })
      })

      const data = await res.json()
      
      // 安全提取字符串，绝不渲染对象
      // 多重检查确保 answer 是字符串
      let answer = '抱歉，系统出现错误，请稍后再试'
      
      if (res.ok && data?.answer) {
        // 情况1：直接是字符串
        if (typeof data.answer === 'string') {
          answer = data.answer
        } 
        // 情况2：是对象，提取 answer 字段
        else if (typeof data.answer === 'object' && data.answer !== null && 'answer' in data.answer) {
          const extractedAnswer = data.answer.answer
          if (typeof extractedAnswer === 'string') {
            answer = extractedAnswer
          } else {
            console.error('[SafeAIWidget] answer.answer is not string:', typeof extractedAnswer)
            answer = '抱歉，系统返回了无效的答案格式'
          }
        }
        // 情况3：其他类型，尝试转换
        else {
          try {
            answer = String(data.answer)
            // 检查是否转换成了 [object Object]
            if (answer === '[object Object]') {
              answer = '抱歉，系统返回了无效的答案格式'
            }
          } catch (e) {
            console.error('[SafeAIWidget] Failed to convert answer to string:', e)
            answer = '抱歉，系统返回了无效的答案格式'
          }
        }
      } else if (data?.error) {
        // 处理错误消息
        if (typeof data.error === 'string') {
          answer = `系统提示：${data.error}`
        } else {
          answer = '系统出现错误，请稍后再试'
        }
      }

      setMessages(prev => [...prev, `🤖 AI: ${answer}`])
    } catch (err) {
      console.error('[SafeAIWidget] API error:', err)
      setMessages(prev => [...prev, `🤖 AI: 网络错误，请检查连接后重试`])
    } finally {
      setIsLoading(false)
    }
  }

  const toggleChat = () => {
    const newIsOpen = !isOpen
    setIsOpen(newIsOpen)
    // 打开时初始化问候语（如果还没有消息）
    if (newIsOpen && messages.length === 0) {
      setMessages(welcomeMessages)
    }
  }

  // SSR 与首次 hydration 必须一致
  // 使用 typeof window 检查确保只在客户端渲染
  if (typeof window === 'undefined' || !mounted) {
    // 服务器端和客户端首次渲染时都返回 null，确保完全一致
    return null
  }

  // 客户端 mounted 后才渲染实际内容
  return (
    <div 
      style={{
        position: 'fixed',
        top: '80px',
        right: '20px',
        zIndex: 10000
      }}
    >
      {!isOpen ? (
        <button
          onClick={toggleChat}
          style={{
            width: 'auto',
            minWidth: '200px',
            maxWidth: 'calc(100vw - 40px)', // 移动端不超出屏幕
            height: '48px',
            padding: '0 20px',
            background: 'linear-gradient(135deg, #0066cc, #004499)',
            color: 'white',
            border: 'none',
            borderRadius: '24px', // 圆角长条
            boxShadow: '0 4px 12px rgba(0,102,204,0.4), 0 2px 4px rgba(0,0,0,0.1)',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            transition: 'all 0.3s ease',
            whiteSpace: 'nowrap',
            fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,102,204,0.5), 0 4px 8px rgba(0,0,0,0.15)'
            e.currentTarget.style.transform = 'scale(1.05)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,102,204,0.4), 0 2px 4px rgba(0,0,0,0.1)'
            e.currentTarget.style.transform = 'scale(1)'
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = 'scale(0.95)'
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)'
          }}
          onTouchStart={(e) => {
            e.currentTarget.style.transform = 'scale(0.95)'
          }}
          onTouchEnd={(e) => {
            e.currentTarget.style.transform = 'scale(1)'
          }}
          title="AI 智能客服在线解答"
        >
          <span style={{ fontSize: '18px', lineHeight: '1' }}>🤖</span>
          <span>AI 智能客服在线解答</span>
        </button>
      ) : (
        <div style={{
          width: '380px',
          maxWidth: 'calc(100vw - 40px)', // 移动端适配
          height: '500px',
          maxHeight: 'calc(100vh - 100px)', // 移动端适配，留出顶部和底部空间
          background: 'white',
          borderRadius: '16px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
          display: 'flex',
          flexDirection: 'column',
          fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif'
        }}>
      {/* 标题栏 */}
      <div style={{
        padding: '18px 20px',
        borderBottom: '1px solid #f0f0f0',
        background: 'linear-gradient(135deg, #f8f9ff, #f0f4ff)',
        borderRadius: '16px 16px 0 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a' }}>
          🤖 Xfinity AI 助手
        </div>
        <button
          onClick={toggleChat}
          style={{
            width: '28px',
            height: '28px',
            border: 'none',
            borderRadius: '50%',
            background: 'rgba(0,0,0,0.1)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '16px'
          }}
        >
          ×
        </button>
      </div>

      {/* 消息区域 */}
      <div style={{
        flex: 1,
        padding: '20px',
        overflowY: 'auto',
        background: '#fafbfc'
      }}>
        {messages.map((msg, i) => {
          // 确保 msg 是字符串（运行时检查）
          const safeMsg = typeof msg === 'string' ? msg : String(msg || '')
          
          return (
            <div
              key={i}
              style={{
                marginBottom: '16px',
                fontSize: '14px',
                lineHeight: '1.5',
                wordBreak: 'break-word'
              }}
            >
              <span style={{ 
                fontWeight: 500, 
                color: safeMsg.startsWith('👤') ? '#0066cc' : '#333',
                marginBottom: '4px',
                display: 'block'
              }}>
                {safeMsg.split(':')[0]}:
              </span>
              <span style={{
                color: safeMsg.startsWith('👤') ? '#1a1a1a' : '#4a5568',
                background: safeMsg.startsWith('🤖') ? '#e6f3ff' : 'transparent',
                padding: safeMsg.startsWith('🤖') ? '8px 12px' : '0',
                borderRadius: '8px',
                display: 'block'
              }}>
                {safeMsg.split(':').slice(1).join(':')}
              </span>
            </div>
          )
        })}
        {isLoading && (
          <div style={{ 
            padding: '12px 16px', 
            color: '#666', 
            fontSize: '14px',
            background: '#f7f9fc',
            borderRadius: '8px'
          }}>
            AI 正在思考中...
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* 输入区域 */}
      <div style={{
        padding: '16px 20px 20px',
        borderTop: '1px solid #f0f0f0',
        background: 'white',
        borderRadius: '0 0 16px 16px'
      }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="输入您的问题，比如：商业宽带需要营业执照吗？"
            disabled={isLoading}
            style={{
              flex: 1,
              padding: '12px 16px',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              outline: 'none',
              fontSize: '14px',
              transition: 'border-color 0.2s'
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()
                handleSend()
              }
            }}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            style={{
              width: '44px',
              height: '44px',
              border: 'none',
              borderRadius: '12px',
              background: input.trim() && !isLoading 
                ? 'linear-gradient(135deg, #0066cc, #004499)' 
                : '#f1f5f9',
              color: input.trim() && !isLoading ? 'white' : '#94a3b8',
              cursor: input.trim() && !isLoading ? 'pointer' : 'not-allowed',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
              transition: 'all 0.2s'
            }}
          >
            {isLoading ? '⏳' : '➤'}
          </button>
        </div>
        <div style={{
          marginTop: '8px',
          fontSize: '12px',
          color: '#64748b',
          textAlign: 'center'
        }}>
          💡 常用问题：营业执照 | 安装时间 | 费用明细
        </div>
      </div>
        </div>
      )}
    </div>
  )
}
