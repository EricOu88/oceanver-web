'use client'

import { useState, useMemo, useRef } from 'react'
import Link from 'next/link'
import {
  Search,
  ChevronDown,
  Home,
  Building2,
  ShoppingCart,
  Headphones,
  MessageSquare,
  X,
  Flame,
  ArrowRight,
  Phone,
} from 'lucide-react'
import { allCategories, FAQSubCategory, FAQItem } from './xfinity-faq-data'

// Tab 配置
const tabConfig: Record<string, {
  icon: React.ReactNode
  gradient: string
  lightGradient: string
  color: string
  lightBg: string
}> = {
  'residential-pre-sales': {
    icon: <><Home size={18} /><ShoppingCart size={16} /></>,
    gradient: 'from-blue-600 to-indigo-600',
    lightGradient: 'from-blue-50 to-indigo-50',
    color: 'text-blue-600',
    lightBg: 'bg-blue-50',
  },
  'residential-after-sales': {
    icon: <><Home size={18} /><Headphones size={16} /></>,
    gradient: 'from-emerald-600 to-teal-600',
    lightGradient: 'from-emerald-50 to-teal-50',
    color: 'text-emerald-600',
    lightBg: 'bg-emerald-50',
  },
  'business-pre-sales': {
    icon: <><Building2 size={18} /><ShoppingCart size={16} /></>,
    gradient: 'from-purple-600 to-violet-600',
    lightGradient: 'from-purple-50 to-violet-50',
    color: 'text-purple-600',
    lightBg: 'bg-purple-50',
  },
  'business-after-sales': {
    icon: <><Building2 size={18} /><Headphones size={16} /></>,
    gradient: 'from-orange-600 to-amber-600',
    lightGradient: 'from-orange-50 to-amber-50',
    color: 'text-orange-600',
    lightBg: 'bg-orange-50',
  },
}

export default function XfinityFAQClient() {
  const [activeTab, setActiveTab] = useState<string>('residential-pre-sales')
  const [searchQuery, setSearchQuery] = useState('')
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())
  const [expandedSubCategories, setExpandedSubCategories] = useState<Set<string>>(new Set())
  const subCategoryRefs = useRef<Record<string, HTMLElement | null>>({})

  const activeCategory = allCategories.find(c => c.id === activeTab) || allCategories[0]
  const config = tabConfig[activeTab]

  // 搜索过滤
  const filteredSubCategories = useMemo(() => {
    if (!searchQuery.trim()) return activeCategory.subCategories

    const query = searchQuery.toLowerCase()
    return activeCategory.subCategories
      .map(subCat => ({
        ...subCat,
        items: subCat.items.filter(
          item =>
            item.question.toLowerCase().includes(query) ||
            item.answer.toLowerCase().includes(query)
        ),
      }))
      .filter(subCat => subCat.items.length > 0)
  }, [searchQuery, activeCategory])

  const totalQuestions = activeCategory.subCategories.reduce(
    (sum, sub) => sum + sub.items.length,
    0
  )

  const filteredCount = filteredSubCategories.reduce(
    (sum, sub) => sum + sub.items.length,
    0
  )

  const toggleItem = (id: string) => {
    setOpenItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const toggleSubCategory = (id: string) => {
    setExpandedSubCategories(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const scrollToSubCategory = (subCatId: string) => {
    setExpandedSubCategories(prev => new Set([...prev, subCatId]))
    // 延迟执行滚动，确保 DOM 已更新
    setTimeout(() => {
      const element = subCategoryRefs.current[subCatId]
      if (element && typeof window !== 'undefined') {
        const headerOffset = 200
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        })
      }
    }, 50)
  }

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
    setSearchQuery('')
    setOpenItems(new Set())
    setExpandedSubCategories(new Set())
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const clearSearch = () => {
    setSearchQuery('')
  }

  const renderFAQItem = (item: FAQItem, index: number, subCatId: string) => {
    const itemId = `${subCatId}-${index}`
    const isOpen = openItems.has(itemId)

    return (
      <div key={itemId} className="border-b border-slate-100 last:border-b-0">
        <button
          onClick={() => toggleItem(itemId)}
          className={`w-full flex items-start justify-between p-4 md:p-5 text-left transition-colors group ${
            isOpen ? config.lightBg : 'hover:bg-slate-50'
          }`}
          aria-expanded={isOpen}
        >
          <div className="flex items-start gap-3 flex-1 pr-4">
            {item.isHot && (
              <Flame size={16} className="text-orange-500 flex-shrink-0 mt-1" />
            )}
            <h3 className={`font-semibold text-base leading-relaxed ${
              isOpen ? config.color : 'text-slate-800 group-hover:text-slate-900'
            }`}>
              {item.question}
            </h3>
          </div>
          <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all ${
            isOpen ? `bg-gradient-to-br ${config.gradient} text-white` : 'bg-slate-100 text-slate-500'
          }`}>
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            />
          </div>
        </button>
        <div
          className={`grid transition-all duration-300 ${
            isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <div className="px-4 md:px-5 pb-4 md:pb-5">
              <div className={`rounded-xl p-4 ${config.lightBg} border border-slate-200/50`}>
                <p className="text-slate-700 leading-relaxed whitespace-pre-line text-sm md:text-base">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderSubCategory = (subCat: FAQSubCategory, index: number) => {
    // 默认不展开，只有用户点击或搜索时才展开
    const isExpanded = expandedSubCategories.has(subCat.id) || searchQuery.trim() !== ''

    return (
      <section
        key={subCat.id}
        id={subCat.id}
        ref={el => { subCategoryRefs.current[subCat.id] = el }}
        className="scroll-mt-52"
      >
        <button
          onClick={() => toggleSubCategory(subCat.id)}
          className={`w-full flex items-center justify-between p-4 rounded-xl mb-3 transition-all ${
            isExpanded
              ? `bg-gradient-to-r ${config.gradient} text-white shadow-lg`
              : 'bg-white border border-slate-200 hover:border-slate-300 hover:shadow-md'
          }`}
        >
          <div className="flex items-center gap-3">
            <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${
              isExpanded ? 'bg-white/20' : `${config.lightBg} ${config.color}`
            }`}>
              {index + 1}
            </span>
            <h2 className={`font-bold text-base ${isExpanded ? '' : 'text-slate-800'}`}>
              {subCat.title}
            </h2>
            <span className={`text-sm ${isExpanded ? 'text-white/80' : 'text-slate-400'}`}>
              ({subCat.items.length} 个问题)
            </span>
          </div>
          <ChevronDown
            size={20}
            className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''} ${
              isExpanded ? '' : 'text-slate-400'
            }`}
          />
        </button>

        <div
          className={`transition-all duration-300 overflow-hidden ${
            isExpanded ? 'max-h-[5000px] opacity-100 mb-6' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            {subCat.items.map((item, idx) => renderFAQItem(item, idx, subCat.id))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-6 py-6 md:py-10">
      {/* ============ Hero ============ */}
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-4xl font-black text-slate-900 mb-3 leading-tight">
          Xfinity 宽带 常见问题
          <span className="block text-lg md:text-xl font-bold text-blue-600 mt-2">
            中文办理 | 无 SSN 可办
          </span>
        </h1>
        <p className="text-slate-500 text-base md:text-lg">
          住家 & 商业宽带 · 售前售后全解答
        </p>
      </div>

      {/* ============ 四大 Tab ============ */}
      <div className="mb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
          {allCategories.map(category => {
            const catConfig = tabConfig[category.id]
            const isActive = activeTab === category.id
            const questionsCount = category.subCategories.reduce(
              (sum, sub) => sum + sub.items.length,
              0
            )

            return (
              <button
                key={category.id}
                onClick={() => handleTabChange(category.id)}
                className={`relative p-3 md:p-4 rounded-xl transition-all duration-300 text-left ${
                  isActive
                    ? `bg-gradient-to-br ${catConfig.gradient} text-white shadow-lg scale-[1.02]`
                    : 'bg-white border-2 border-slate-200 hover:border-slate-300 hover:shadow-md'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className={isActive ? 'text-white' : catConfig.color}>
                    {catConfig.icon}
                  </span>
                </div>
                <div className={`font-bold text-sm md:text-base ${isActive ? '' : 'text-slate-800'}`}>
                  {category.shortTitle}
                </div>
                <div className={`text-xs mt-1 ${isActive ? 'text-white/80' : 'text-slate-400'}`}>
                  {questionsCount} 个问题
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* ============ 搜索框 ============ */}
      <div className="mb-8">
        <div className="relative">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder={`在「${activeCategory.shortTitle}」中搜索问题...`}
            className="w-full pl-12 pr-12 py-3.5 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all text-base"
          />
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <X size={20} />
            </button>
          )}
        </div>
        {searchQuery && (
          <p className="text-center text-slate-500 mt-3">
            找到 <span className={`font-bold ${config.color}`}>{filteredCount}</span> 个相关问题
          </p>
        )}
      </div>

      {/* ============ 分类标题 ============ */}
      <div className={`flex items-center gap-4 mb-6 p-5 rounded-2xl bg-gradient-to-r ${config.gradient}`}>
        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white">
          {config.icon}
        </div>
        <div className="text-white">
          <h2 className="text-xl md:text-2xl font-black">{activeCategory.title}</h2>
          <p className="text-white/80 text-sm">
            {activeCategory.description} · {totalQuestions} 个问题
          </p>
        </div>
      </div>

      {/* ============ 快速跳转（非搜索时显示） ============ */}
      {!searchQuery && (
        <div className="mb-8 p-4 bg-slate-50 rounded-xl border border-slate-200">
          <div className="text-sm font-medium text-slate-600 mb-3">快速跳转：</div>
          <div className="flex flex-wrap gap-2">
            {activeCategory.subCategories.map((subCat, index) => (
              <button
                key={subCat.id}
                onClick={() => scrollToSubCategory(subCat.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${config.lightBg} ${config.color} hover:opacity-80`}
              >
                <span className="w-5 h-5 rounded bg-white/80 flex items-center justify-center text-xs">
                  {index + 1}
                </span>
                {subCat.title}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ============ FAQ 内容 ============ */}
      <div className="space-y-4">
        {filteredSubCategories.map((subCat, index) => renderSubCategory(subCat, index))}
      </div>

      {/* 无结果 */}
      {searchQuery && filteredCount === 0 && (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-bold text-slate-700 mb-2">没有找到相关问题</h3>
          <p className="text-slate-500 mb-6">试试换个关键词，或者直接联系我们</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-colors"
          >
            <MessageSquare size={18} />
            联系中文顾问
          </Link>
        </div>
      )}

      {/* ============ 底部 CTA ============ */}
      <div className="mt-12 p-6 md:p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl relative overflow-hidden">
        {/* 装饰 */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl" />

        <div className="relative text-center">
          <h3 className="text-xl md:text-2xl font-black text-white mb-2">
            还有其他问题？
          </h3>
          <p className="text-slate-400 mb-6 text-sm md:text-base">
            我们提供免费地址覆盖查询和中文办理服务
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg"
            >
              <MessageSquare size={18} />
              联系中文顾问
            </Link>
            <Link
              href="/internet/xfinity"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-xl font-bold transition-all"
            >
              查看 Xfinity 宽带套餐
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* ============ 联系方式 ============ */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            <Phone size={18} className="text-blue-600" />
          </div>
          <div>
            <div className="text-sm text-slate-500">电话咨询</div>
            <div className="font-bold text-slate-800">510-849-6191</div>
          </div>
        </div>
        <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200">
          <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
            <MessageSquare size={18} className="text-emerald-600" />
          </div>
          <div>
            <div className="text-sm text-slate-500">微信咨询</div>
            <div className="font-bold text-slate-800">扫码添加顾问</div>
          </div>
        </div>
        <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200">
          <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
            <Home size={18} className="text-purple-600" />
          </div>
          <div>
            <div className="text-sm text-slate-500">服务范围</div>
            <div className="font-bold text-slate-800">全美中文说明与远程协助</div>
          </div>
        </div>
      </div>
    </div>
  )
}
