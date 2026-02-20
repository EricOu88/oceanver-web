'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react'

export interface FAQItem {
  question: string
  answer: string
  id?: string
}

export interface FAQCategory {
  id: string
  title: string
  icon?: React.ReactNode
  items: FAQItem[]
}

interface ProviderFAQProps {
  providerName: string
  preSaleCategories: FAQCategory[]
  afterSaleCategories: FAQCategory[]
  serviceType?: string // 可选：服务类型，默认为"宽带"，可以是"手机"等
}

export default function ProviderFAQ({
  providerName,
  preSaleCategories,
  afterSaleCategories,
  serviceType = '宽带',
}: ProviderFAQProps) {
  const [openCategory, setOpenCategory] = useState<string | null>(null)
  const [openQuestion, setOpenQuestion] = useState<string | null>(null)

  const toggleCategory = (categoryId: string) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId)
    setOpenQuestion(null)
  }

  const toggleQuestion = (questionId: string) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId)
  }

  const FAQSection = ({
    title,
    icon,
    categories,
    type,
  }: {
    title: string
    icon: React.ReactNode
    categories: FAQCategory[]
    type: 'pre' | 'after'
  }) => (
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        {icon}
        <h2 className="text-2xl md:text-3xl font-black text-slate-900">{title}</h2>
      </div>

      <div className="space-y-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="border border-slate-200 rounded-2xl overflow-hidden bg-white hover:shadow-md transition-shadow"
          >
            <button
              onClick={() => toggleCategory(category.id)}
              className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                {category.icon && <span className="text-blue-600">{category.icon}</span>}
                <h3 className="font-bold text-lg text-slate-900">{category.title}</h3>
                <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                  {category.items.length} 个问题
                </span>
              </div>
              <ChevronDown
                size={20}
                className={`text-slate-400 transition-transform ${
                  openCategory === category.id ? 'rotate-180' : ''
                }`}
              />
            </button>

            {openCategory === category.id && (
              <div className="border-t border-slate-100 bg-slate-50/50">
                <div className="p-5 space-y-3">
                  {category.items.map((item, index) => {
                    const questionId = `${category.id}-q${index}`
                    return (
                      <div
                        key={questionId}
                        className="bg-white rounded-xl border border-slate-200 overflow-hidden"
                      >
                        <button
                          onClick={() => toggleQuestion(questionId)}
                          className="w-full flex items-start justify-between p-4 text-left hover:bg-blue-50/50 transition-colors"
                        >
                          <span className="font-semibold text-slate-900 pr-4 flex-1">
                            {item.question}
                          </span>
                          <ChevronDown
                            size={18}
                            className={`text-slate-400 flex-shrink-0 transition-transform ${
                              openQuestion === questionId ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        {openQuestion === questionId && (
                          <div className="px-4 pb-4 pt-2 border-t border-slate-100">
                            <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                              {item.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <div className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
          {providerName} 常见问题（FAQ）
        </h2>
        <p className="text-slate-600">
          售前与售后常见问题，帮助您更好地了解 {providerName} {serviceType}服务
        </p>
      </div>

      <FAQSection
        title="售前常见问题"
        icon={<HelpCircle className="text-blue-600" size={28} />}
        categories={preSaleCategories}
        type="pre"
      />

      <FAQSection
        title="售后常见问题"
        icon={<MessageSquare className="text-green-600" size={28} />}
        categories={afterSaleCategories}
        type="after"
      />

      <div className="mt-12 p-6 bg-blue-50 rounded-2xl border border-blue-200 text-center">
        <p className="text-slate-800 font-semibold mb-3">
          还有其他问题？
        </p>
        <p className="text-slate-600 text-sm mb-4">
          我们的中文顾问可以为您提供一对一的专业解答
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-colors"
        >
          联系中文顾问
        </a>
      </div>
    </div>
  )
}
