'use client'

import dynamic from 'next/dynamic'

// 动态导入 AI 组件，禁用 SSR 以避免 hydration mismatch
const SafeAIQuestionWidget = dynamic(
  () => import('@/app/components/SafeAIQuestionWidget'),
  { 
    ssr: false,
    loading: () => null // 加载时不显示任何内容
  }
)

export default function SafeAIQuestionWidgetWrapper() {
  return <SafeAIQuestionWidget />
}
