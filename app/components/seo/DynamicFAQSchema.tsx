/**
 * 动态 FAQ Schema 组件
 * 根据页面类型和内容自动生成 FAQ Schema
 */

import { generateFAQSchema } from '@/lib/seo-utils'

interface FAQItem {
  question: string
  answer: string
  id?: string
}

interface DynamicFAQSchemaProps {
  questions: FAQItem[]
}

export default function DynamicFAQSchema({ questions }: DynamicFAQSchemaProps) {
  if (!questions || questions.length === 0) {
    return null
  }

  // 限制问题数量（3-6 个）
  const limitedQuestions = questions.slice(0, 6)
  
  const schema = generateFAQSchema(limitedQuestions)

  if (!schema) {
    return null
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
