'use client'

import { useState, useMemo, useRef } from 'react'
import Link from 'next/link'
import {
  Search,
  ChevronDown,
  ShoppingCart,
  Headphones,
  MessageSquare,
  X,
  Flame,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'
import { faqCategories, FAQItem, getHotQuestions } from './data'

// 分类配置
const categoryConfig: Record<string, {
  icon: React.ReactNode
  color: string
  gradient: string
  lightBg: string
  accentColor: string
}> = {
  'pre-sales': {
    icon: <ShoppingCart size={24} />,
    color: 'text-blue-600',
    gradient: 'from-blue-600 via-blue-500 to-indigo-600',
    lightBg: 'bg-blue-50',
    accentColor: 'blue',
  },
  'after-sales': {
    icon: <Headphones size={24} />,
    color: 'text-emerald-600',
    gradient: 'from-emerald-600 via-emerald-500 to-teal-600',
    lightBg: 'bg-emerald-50',
    accentColor: 'emerald',
  },
}

export default function ATTFamilyFAQClient() {
  const [searchQuery, setSearchQuery] = useState('')
  const [openItems, setOpenItems] = useState<Set<string>>(() => {
    const defaultOpen = new Set<string>()
    faqCategories.forEach((category) => {
      category.items.forEach((item, index) => {
        if (item.isDefaultOpen) {
          defaultOpen.add(`${category.id}-${index}`)
        }
      })
    })
    return defaultOpen
  })
  const [activeCategory, setActiveCategory] = useState<string>('pre-sales')
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})

  const hotQuestions = getHotQuestions()

  // 搜索过滤
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return faqCategories
    const query = searchQuery.toLowerCase()
    return faqCategories
      .map((category) => ({
        ...category,
        items: category.items.filter(
          (item) =>
            item.question.toLowerCase().includes(query) ||
            item.answer.toLowerCase().includes(query)
        ),
      }))
      .filter((category) => category.items.length > 0)
  }, [searchQuery])

  const totalCount = filteredCategories.reduce((sum, cat) => sum + cat.items.length, 0)
  const preSalesCount = faqCategories.find(c => c.id === 'pre-sales')?.items.length || 0
  const afterSalesCount = faqCategories.find(c => c.id === 'after-sales')?.items.length || 0

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const clearSearch = () => {
    setSearchQuery('')
  }

  const scrollToCategory = (categoryId: string) => {
    setActiveCategory(categoryId)
    const element = sectionRefs.current[categoryId]
    if (element) {
      const headerOffset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  const scrollToQuestion = (categoryId: string, questionIndex: number) => {
    const itemId = `${categoryId}-${questionIndex}`
    setOpenItems((prev) => new Set([...prev, itemId]))
    scrollToCategory(categoryId)
  }

  const renderFAQItem = (item: FAQItem, index: number, categoryId: string) => {
    const itemId = `${categoryId}-${index}`
    const isOpen = openItems.has(itemId)
    const config = categoryConfig[categoryId]

    return (
      <div
        key={itemId}
        id={itemId}
        className={`border-b border-slate-100 last:border-b-0 transition-colors ${isOpen ? config.lightBg : ''}`}
      >
        <button
          onClick={() => toggleItem(itemId)}
          className="w-full flex items-start justify-between p-5 md:p-6 text-left hover:bg-slate-50/50 transition-colors group"
          aria-expanded={isOpen}
        >
          <div className="flex items-start gap-3 flex-1 pr-4">
            {item.isHot && (
              <span className="flex-shrink-0 mt-1">
                <Flame size={18} className="text-orange-500" />
              </span>
            )}
            <span className={`font-semibold transition-colors text-base md:text-lg leading-relaxed ${
              isOpen ? config.color : 'text-slate-800 group-hover:text-slate-900'
            }`}>
              {item.question}
            </span>
          </div>
          <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
            isOpen ? `bg-${config.accentColor}-100` : 'bg-slate-100 group-hover:bg-slate-200'
          }`}>
            <ChevronDown
              size={18}
              className={`transition-transform duration-300 ${
                isOpen ? `rotate-180 ${config.color}` : 'text-slate-500'
              }`}
            />
          </div>
        </button>
        <div
          className={`grid transition-all duration-300 ${
            isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
              <div className={`rounded-2xl p-5 md:p-6 ${config.lightBg} border border-slate-200/50`}>
                <p className="text-slate-700 leading-relaxed whitespace-pre-line text-base">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-6 py-6 md:py-10">
      {/* ============ Hero 区域 ============ */}
      <div className="text-center mb-10 md:mb-12">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
          <Sparkles size={16} />
          <span>共 {preSalesCount + afterSalesCount} 个问题</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
          AT&T 家庭合约计划<br className="md:hidden" />
          <span className="text-blue-600">常见问题</span>
        </h1>
        <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto">
          解答你关于套餐、合约、费用、转网的所有疑问
        </p>
      </div>

      {/* ============ 搜索框 ============ */}
      <div className="mb-10">
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur-xl opacity-20" />
          <div className="relative">
            <Search
              size={22}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜索问题：无SSN、套餐、解约、转网..."
              className="w-full pl-14 pr-14 py-4 md:py-5 rounded-2xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all text-base md:text-lg bg-white shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute right-5 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                <X size={18} className="text-slate-500" />
              </button>
            )}
          </div>
        </div>
        {searchQuery && (
          <p className="text-center text-slate-500 mt-4">
            找到 <span className="font-bold text-blue-600 text-lg">{totalCount}</span> 个相关问题
          </p>
        )}
      </div>

      {/* ============ 热门问题快捷入口 ============ */}
      {!searchQuery && (
        <div className="mb-12 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 rounded-3xl p-6 md:p-8 border border-orange-100">
          <div className="flex items-center gap-2 mb-5">
            <Flame size={24} className="text-orange-500" />
            <h2 className="text-xl font-black text-slate-900">热门问题</h2>
            <span className="text-slate-400 text-sm">· 大家最关心的</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {hotQuestions.slice(0, 6).map((item, index) => {
              const originalIndex = faqCategories
                .find(c => c.id === item.categoryId)
                ?.items.findIndex(i => i.question === item.question) || 0

              return (
                <button
                  key={index}
                  onClick={() => scrollToQuestion(item.categoryId, originalIndex)}
                  className="group flex items-center gap-3 p-4 bg-white rounded-xl border border-orange-100 hover:border-orange-300 hover:shadow-md transition-all text-left"
                >
                  <CheckCircle2 size={20} className="text-orange-400 flex-shrink-0" />
                  <span className="text-slate-700 group-hover:text-slate-900 font-medium text-sm md:text-base line-clamp-1">
                    {item.question}
                  </span>
                  <ArrowRight size={16} className="text-slate-300 group-hover:text-orange-500 ml-auto flex-shrink-0 transition-colors" />
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* ============ 分类导航 ============ */}
      {!searchQuery && (
        <div className="mb-10 grid grid-cols-2 gap-4 md:gap-6">
          {faqCategories.map((category) => {
            const config = categoryConfig[category.id]
            const isActive = activeCategory === category.id

            return (
              <button
                key={category.id}
                onClick={() => scrollToCategory(category.id)}
                className={`group relative overflow-hidden rounded-3xl p-5 md:p-8 text-left transition-all duration-500 ${
                  isActive
                    ? `bg-gradient-to-br ${config.gradient} shadow-2xl shadow-${config.accentColor}-200/50 scale-[1.02]`
                    : 'bg-white border-2 border-slate-200 hover:border-slate-300 hover:shadow-xl'
                }`}
              >
                {/* 装饰元素 */}
                <div className={`absolute -right-8 -bottom-8 w-32 h-32 rounded-full transition-all duration-500 ${
                  isActive ? 'bg-white/10' : 'bg-slate-50 group-hover:bg-slate-100'
                }`} />
                <div className={`absolute -right-4 -bottom-4 w-20 h-20 rounded-full transition-all duration-500 ${
                  isActive ? 'bg-white/5' : 'bg-slate-50/50'
                }`} />

                <div className="relative">
                  {/* 图标 */}
                  <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-4 transition-all ${
                    isActive ? 'bg-white/20' : `${config.lightBg} group-hover:scale-110`
                  }`}>
                    <span className={isActive ? 'text-white' : config.color}>
                      {category.id === 'pre-sales'
                        ? <ShoppingCart size={28} />
                        : <Headphones size={28} />
                      }
                    </span>
                  </div>

                  {/* 标题 */}
                  <h3 className={`text-xl md:text-2xl font-black mb-2 transition-colors ${
                    isActive ? 'text-white' : 'text-slate-900'
                  }`}>
                    {category.title}
                  </h3>

                  {/* 副标题 */}
                  <p className={`text-sm md:text-base mb-4 ${
                    isActive ? 'text-white/80' : 'text-slate-500'
                  }`}>
                    {category.subtitle}
                  </p>

                  {/* 问题数量 */}
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    <span>{category.items.length}</span>
                    <span>个问题</span>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      )}

      {/* ============ FAQ 内容 ============ */}
      <div className="space-y-12">
        {filteredCategories.map((category) => {
          const config = categoryConfig[category.id]

          return (
            <section
              key={category.id}
              id={`faq-${category.id}`}
              ref={(el) => {
                sectionRefs.current[category.id] = el
              }}
              className="scroll-mt-24"
            >
              {/* 分类标题 */}
              <div className={`flex items-center gap-4 mb-6 p-5 md:p-6 rounded-2xl bg-gradient-to-r ${config.gradient}`}>
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-white">
                  {category.id === 'pre-sales'
                    ? <ShoppingCart size={28} />
                    : <Headphones size={28} />
                  }
                </div>
                <div className="text-white">
                  <h2 className="text-2xl md:text-3xl font-black">
                    {category.title}
                  </h2>
                  <p className="text-white/80 text-sm md:text-base">
                    {category.subtitle} · {category.items.length} 个问题
                  </p>
                </div>
              </div>

              {/* FAQ 列表 */}
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                {category.items.map((item, index) =>
                  renderFAQItem(item, index, category.id)
                )}
              </div>
            </section>
          )
        })}
      </div>

      {/* 无结果 */}
      {searchQuery && totalCount === 0 && (
        <div className="text-center py-20">
          <div className="text-7xl mb-6">🔍</div>
          <h3 className="text-2xl font-black text-slate-700 mb-3">没有找到相关问题</h3>
          <p className="text-slate-500 mb-8 text-lg">试试换个关键词，或者直接联系我们</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold transition-colors shadow-lg"
          >
            <MessageSquare size={20} />
            联系中文顾问
          </Link>
        </div>
      )}

      {/* ============ 底部 CTA ============ */}
      <div className="mt-16 relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 md:p-12 text-center">
        {/* 装饰 */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl" />

        <div className="relative">
          <h3 className="text-2xl md:text-3xl font-black text-white mb-3">还有其他问题？</h3>
          <p className="text-slate-400 mb-8 text-base md:text-lg max-w-xl mx-auto">
            我们的中文顾问可以为你提供一对一的专业解答，帮你选择最适合的方案
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
            >
              <MessageSquare size={20} />
              联系中文顾问
            </Link>
            <Link
              href="/cellphone/providers"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-2xl font-bold transition-all backdrop-blur"
            >
              查看 AT&T 套餐方案
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
