/**
 * 通用 FAQ Schema 组件
 * 用于为 FAQ 详情页和列表页生成符合 Google 要求的 FAQPage Schema (JSON-LD)
 * 
 * 使用方式：
 * 1. 单个问题：<FAQPageSchema question="问题" answer="答案" />
 * 2. 多个问题：<FAQPageSchema questions={[{question: "...", answer: "..."}]} />
 */

import { generateFAQSchema } from '@/lib/seo-utils'

interface FAQItem {
  question: string
  answer: string
  id?: string
}

interface FAQPageSchemaProps {
  // 方式1：单个问题（用于详情页）
  question?: string
  answer?: string
  
  // 方式2：多个问题（用于列表页）
  questions?: FAQItem[]
}

export default function FAQPageSchema({ question, answer, questions }: FAQPageSchemaProps) {
  // 如果提供了单个问题和答案，转换为数组格式
  let faqItems: FAQItem[] = []
  
  if (question && answer) {
    faqItems = [{ question, answer }]
  } else if (questions && questions.length > 0) {
    faqItems = questions
  } else {
    // 如果没有提供任何数据，不渲染 Schema
    return null
  }

  // 使用 seo-utils 中的函数生成 Schema
  const schema = generateFAQSchema(faqItems)

  if (!schema) {
    return null
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 0) }}
    />
  )
}
