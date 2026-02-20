'use client'

import { useState } from 'react'
import { ChevronDown, Home, Building2, ShoppingCart, Wrench } from 'lucide-react'
import {
  xfinityResidentialPreSale,
  xfinityResidentialAfterSale,
  xfinityBusinessPreSale,
  xfinityBusinessAfterSale,
} from './data'

export default function XfinityFAQPage() {
  const [openSection, setOpenSection] = useState<'residential' | 'business' | null>('residential')
  const [openSubSection, setOpenSubSection] = useState<string | null>(null)
  const [openQuestion, setOpenQuestion] = useState<string | null>(null)

  const toggleSection = (section: 'residential' | 'business') => {
    setOpenSection(openSection === section ? null : section)
    setOpenSubSection(null)
    setOpenQuestion(null)
  }

  const toggleSubSection = (subSectionId: string) => {
    setOpenSubSection(openSubSection === subSectionId ? null : subSectionId)
    setOpenQuestion(null)
  }

  const toggleQuestion = (questionId: string) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId)
  }

  const FAQSubSection = ({
    title,
    icon,
    faqs,
    subSectionId,
  }: {
    title: string
    icon: React.ReactNode
    faqs: Array<{ question: string; answer: string }>
    subSectionId: string
  }) => {
    const isOpen = openSubSection === subSectionId

    return (
      <div className="mb-4">
        <button
          onClick={() => toggleSubSection(subSectionId)}
          className="w-full flex items-center justify-between p-5 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all text-left border border-slate-200"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
              {icon}
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">{title}</h3>
              <p className="text-sm text-slate-600 mt-0.5">{faqs.length} 个常见问题</p>
            </div>
          </div>
          <ChevronDown
            size={20}
            className={`text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {isOpen && (
          <div className="mt-3 ml-4 space-y-2">
            {faqs.map((faq, idx) => {
              const qId = `${subSectionId}-${idx}`
              const isQOpen = openQuestion === qId
              return (
                <div
                  key={qId}
                  className="border border-slate-200 rounded-lg overflow-hidden bg-white"
                >
                  <button
                    onClick={() => toggleQuestion(qId)}
                    className="w-full p-4 flex items-start justify-between gap-4 hover:bg-slate-50 transition-colors text-left"
                  >
                    <span className="flex-1 font-semibold text-slate-900 pr-4 text-sm">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-slate-400 shrink-0 transition-transform ${isQOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {isQOpen && (
                    <div className="px-4 pb-4 pt-0 text-slate-700 leading-relaxed text-sm">
                      {faq.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </div>
    )
  }

  const MainSection = ({
    title,
    icon,
    preSaleFaqs,
    afterSaleFaqs,
    sectionKey,
  }: {
    title: string
    icon: React.ReactNode
    preSaleFaqs: Array<{ question: string; answer: string }>
    afterSaleFaqs: Array<{ question: string; answer: string }>
    sectionKey: 'residential' | 'business'
  }) => {
    const isOpen = openSection === sectionKey

    return (
      <div className="mb-8">
        <button
          onClick={() => toggleSection(sectionKey)}
          className="w-full flex items-center justify-between p-6 bg-white rounded-2xl hover:bg-slate-50 transition-all text-left border-2 border-slate-200 shadow-sm"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
              {icon}
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900">{title}</h2>
              <p className="text-sm text-slate-600 mt-1">
                售前 {preSaleFaqs.length} 个问题 · 售后 {afterSaleFaqs.length} 个问题
              </p>
            </div>
          </div>
          <ChevronDown
            size={24}
            className={`text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {isOpen && (
          <div className="mt-4 space-y-4">
            <FAQSubSection
              title="A. 售前问题"
              icon={<ShoppingCart size={20} />}
              faqs={preSaleFaqs}
              subSectionId={`${sectionKey}-pre`}
            />
            <FAQSubSection
              title="B. 售后问题"
              icon={<Wrench size={20} />}
              faqs={afterSaleFaqs}
              subSectionId={`${sectionKey}-after`}
            />
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <div className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
          Xfinity 常见问题（FAQ）
        </h2>
        <p className="text-slate-600">
          住家与商业宽带常见问题，帮助您更好地了解 Xfinity 服务
        </p>
      </div>

      <MainSection
        title="1. 住家宽带"
        icon={<Home size={28} />}
        preSaleFaqs={xfinityResidentialPreSale}
        afterSaleFaqs={xfinityResidentialAfterSale}
        sectionKey="residential"
      />

      <MainSection
        title="2. 商业宽带"
        icon={<Building2 size={28} />}
        preSaleFaqs={xfinityBusinessPreSale}
        afterSaleFaqs={xfinityBusinessAfterSale}
        sectionKey="business"
      />

      <div className="mt-12 p-6 bg-blue-50 rounded-2xl border border-blue-200 text-center">
        <p className="text-slate-800 font-semibold mb-3">还有其他问题？</p>
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
