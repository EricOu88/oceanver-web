'use client'

import { useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import type { ReactNode } from 'react'
import {
  ArrowRight,
  ChevronDown,
  CircleDollarSign,
  CircleHelp,
  Gauge,
  MapPin,
  Router,
  Search,
  ShieldCheck,
  WifiOff,
  X,
} from 'lucide-react'
import {
  allCategories,
  type FAQItem,
  type FAQSubCategory,
} from './xfinity-faq-data'

const tabConfig: Record<
  string,
  {
    icon: ReactNode
  }
> = {
  billing: {
    icon: <CircleDollarSign size={20} />,
  },
  'wifi-speed': {
    icon: <Gauge size={20} />,
  },
  'outage-line': {
    icon: <WifiOff size={20} />,
  },
  equipment: {
    icon: <Router size={20} />,
  },
  'install-moving': {
    icon: <MapPin size={20} />,
  },
  'account-cancel': {
    icon: <ShieldCheck size={20} />,
  },
}

export default function XfinityFAQClient() {
  const [activeTab, setActiveTab] = useState<string>('billing')
  const [searchQuery, setSearchQuery] = useState('')
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())
  const [expandedSubCategories, setExpandedSubCategories] = useState<
    Set<string>
  >(new Set())

  const subCategoryRefs = useRef<Record<string, HTMLElement | null>>({})

  const activeCategory =
    allCategories.find((category) => category.id === activeTab) ||
    allCategories[0]

  const config = tabConfig[activeCategory.id]

  const filteredSubCategories = useMemo(() => {
    if (!searchQuery.trim()) {
      return activeCategory.subCategories
    }

    const query = searchQuery.toLowerCase()

    return activeCategory.subCategories
      .map((subCategory) => ({
        ...subCategory,
        items: subCategory.items.filter(
          (item) =>
            item.question.toLowerCase().includes(query) ||
            item.answer.toLowerCase().includes(query)
        ),
      }))
      .filter((subCategory) => subCategory.items.length > 0)
  }, [activeCategory, searchQuery])

  const totalQuestions = activeCategory.subCategories.reduce(
    (total, subCategory) => total + subCategory.items.length,
    0
  )

  const filteredCount = filteredSubCategories.reduce(
    (total, subCategory) => total + subCategory.items.length,
    0
  )

  const toggleItem = (id: string) => {
    setOpenItems((previous) => {
      const next = new Set(previous)

      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }

      return next
    })
  }

  const toggleSubCategory = (id: string) => {
    setExpandedSubCategories((previous) => {
      const next = new Set(previous)

      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }

      return next
    })
  }

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
    setSearchQuery('')
    setOpenItems(new Set())
    setExpandedSubCategories(new Set())

    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }

  const scrollToSubCategory = (subCategoryId: string) => {
    setExpandedSubCategories((previous) => {
      const next = new Set(previous)
      next.add(subCategoryId)
      return next
    })

    setTimeout(() => {
      const element = subCategoryRefs.current[subCategoryId]

      if (!element || typeof window === 'undefined') {
        return
      }

      const headerOffset = 180
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }, 50)
  }

  const renderFAQItem = (
    item: FAQItem,
    index: number,
    subCategoryId: string
  ) => {
    const itemId = `${subCategoryId}-${index}`
    const isOpen = openItems.has(itemId)

    return (
      <div
        key={itemId}
        className="border-b border-[#D5E5EC] last:border-b-0"
      >
        <button
          type="button"
          onClick={() => toggleItem(itemId)}
          className={`flex w-full items-start justify-between gap-4 px-5 py-5 text-left transition ${
            isOpen ? 'bg-[#F4F8FA]' : 'hover:bg-[#F4F8FA]'
          }`}
          aria-expanded={isOpen}
        >
          <div className="min-w-0 flex-1">
            {item.isHot && (
              <span className="mb-2 inline-flex rounded-full bg-[#F4F8FA] px-2.5 py-1 text-[11px] font-bold text-[#2786A5]">
                高频问题
              </span>
            )}

            <h3 className="text-base font-bold leading-7 text-[#202D3A]">
              {item.question}
            </h3>
          </div>

          <div
            className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition ${
              isOpen
                ? 'border-[#164B78] bg-[#164B78] text-white'
                : 'border-[#D5E5EC] bg-white text-[#164B78]'
            }`}
          >
            <ChevronDown
              size={17}
              className={`transition-transform ${
                isOpen ? 'rotate-180' : ''
              }`}
            />
          </div>
        </button>

        <div
          className={`grid transition-all duration-300 ${
            isOpen
              ? 'grid-rows-[1fr] opacity-100'
              : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <div className="px-5 pb-5">
              <div className="rounded-2xl border border-[#D5E5EC] bg-[#FCFDFE] p-5">
                <p className="whitespace-pre-line text-sm leading-7 text-[#526170] md:text-base">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderSubCategory = (
    subCategory: FAQSubCategory,
    index: number
  ) => {
    const isExpanded =
      expandedSubCategories.has(subCategory.id) ||
      searchQuery.trim() !== ''

    return (
      <section
        key={subCategory.id}
        id={subCategory.id}
        ref={(element) => {
          subCategoryRefs.current[subCategory.id] = element
        }}
        className="scroll-mt-48"
      >
        <button
          type="button"
          onClick={() => toggleSubCategory(subCategory.id)}
          className={`mb-3 flex w-full items-center justify-between gap-4 rounded-2xl border p-4 text-left transition ${
            isExpanded
              ? 'border-[#164B78] bg-[#164B78] text-white'
              : 'border-[#D5E5EC] bg-white text-[#202D3A] hover:border-[#2786A5]'
          }`}
        >
          <div className="flex items-center gap-3">
            <span
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-black ${
                isExpanded
                  ? 'bg-white/15 text-white'
                  : 'bg-[#F4F8FA] text-[#164B78]'
              }`}
            >
              {index + 1}
            </span>

            <div>
              <h2 className="font-black">
                {subCategory.title}
              </h2>

              <p
                className={`mt-0.5 text-xs ${
                  isExpanded ? 'text-white/75' : 'text-[#526170]'
                }`}
              >
                {subCategory.items.length} 个问题
              </p>
            </div>
          </div>

          <ChevronDown
            size={20}
            className={`shrink-0 transition-transform ${
              isExpanded ? 'rotate-180' : ''
            }`}
          />
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            isExpanded
              ? 'mb-6 max-h-[5000px] opacity-100'
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="overflow-hidden rounded-2xl border border-[#D5E5EC] bg-white">
            {subCategory.items.map((item, itemIndex) =>
              renderFAQItem(item, itemIndex, subCategory.id)
            )}
          </div>
        </div>
      </section>
    )
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-12">
      {/* Hero */}
      <section className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-bold tracking-wide text-[#2786A5]">
          Xfinity 问题知识库
        </p>

        <h1 className="mt-3 text-3xl font-black tracking-tight text-[#202D3A] md:text-5xl">
          Xfinity 出了问题，
          <br className="sm:hidden" />
          先找到属于哪一类
        </h1>

        <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-[#526170] md:text-lg">
          这里不按“售前 / 售后”分类，而是按照实际遇到的问题整理。
          先判断是账单、Wi-Fi、线路、设备、安装搬家还是账户问题，
          再决定下一步怎么处理。
        </p>

        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/internet/diagnosis"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#164B78] px-6 py-3 font-bold text-white transition hover:bg-[#103B60]"
          >
            不知道问题在哪？先诊断
            <ArrowRight size={18} />
          </Link>

          <Link
            href="/internet/xfinity"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#D5E5EC] bg-white px-6 py-3 font-bold text-[#164B78] transition hover:border-[#2786A5] hover:bg-[#F4F8FA]"
          >
            返回 Xfinity 判断页
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* 分类 */}
      <section className="mt-12">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {allCategories.map((category) => {
            const categoryConfig = tabConfig[category.id]
            const isActive = activeTab === category.id

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => handleTabChange(category.id)}
                className={`rounded-2xl border p-4 text-left transition ${
                  isActive
                    ? 'border-[#164B78] bg-[#164B78] text-white'
                    : 'border-[#D5E5EC] bg-white text-[#202D3A] hover:border-[#2786A5]'
                }`}
              >
                <div
                  className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${
                    isActive
                      ? 'bg-white/15 text-white'
                      : 'bg-[#F4F8FA] text-[#164B78]'
                  }`}
                >
                  {categoryConfig?.icon}
                </div>

                <div className="font-black">
                  {category.shortTitle}
                </div>

                <div
                  className={`mt-1 text-xs leading-5 ${
                    isActive ? 'text-white/75' : 'text-[#526170]'
                  }`}
                >
                  {category.description}
                </div>
              </button>
            )
          })}
        </div>
      </section>

      {/* 搜索 */}
      <section className="mt-8">
        <div className="relative">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#526170]"
          />

          <input
            type="text"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder={`在“${activeCategory.title}”中搜索问题`}
            className="w-full rounded-2xl border border-[#D5E5EC] bg-white py-4 pl-12 pr-12 text-base text-[#202D3A] outline-none transition focus:border-[#2786A5]"
          />

          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#526170] transition hover:text-[#202D3A]"
              aria-label="清除搜索"
            >
              <X size={20} />
            </button>
          )}
        </div>

        {searchQuery && (
          <p className="mt-3 text-center text-sm text-[#526170]">
            找到{' '}
            <span className="font-bold text-[#164B78]">
              {filteredCount}
            </span>{' '}
            个相关问题
          </p>
        )}
      </section>

      {/* 当前分类 */}
      <section className="mt-8 rounded-3xl border border-[#D5E5EC] bg-[#F4F8FA] p-5 md:p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#164B78]">
            {config?.icon}
          </div>

          <div>
            <h2 className="text-xl font-black text-[#202D3A] md:text-2xl">
              {activeCategory.title}
            </h2>

            <p className="mt-1 text-sm leading-6 text-[#526170]">
              {activeCategory.description} · 共 {totalQuestions} 个问题
            </p>
          </div>
        </div>
      </section>

      {/* 快速跳转 */}
      {!searchQuery && activeCategory.subCategories.length > 1 && (
        <section className="mt-6 rounded-2xl border border-[#D5E5EC] bg-white p-4">
          <p className="mb-3 text-sm font-bold text-[#526170]">
            快速跳转
          </p>

          <div className="flex flex-wrap gap-2">
            {activeCategory.subCategories.map((subCategory) => (
              <button
                key={subCategory.id}
                type="button"
                onClick={() => scrollToSubCategory(subCategory.id)}
                className="rounded-lg bg-[#F4F8FA] px-3 py-2 text-sm font-bold text-[#164B78] transition hover:bg-[#D5E5EC]"
              >
                {subCategory.title}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="mt-8 space-y-4">
        {filteredSubCategories.map((subCategory, index) =>
          renderSubCategory(subCategory, index)
        )}
      </section>

      {searchQuery && filteredCount === 0 && (
        <section className="py-16 text-center">
          <CircleHelp
            size={34}
            className="mx-auto text-[#2786A5]"
          />

          <h3 className="mt-4 text-xl font-black text-[#202D3A]">
            没找到完全对应的问题
          </h3>

          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-[#526170]">
            可以换一个关键词，或者先进入宽带问题诊断，
            根据现象一步步判断问题来源。
          </p>

          <Link
            href="/internet/diagnosis"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#164B78] px-6 py-3 font-bold text-white transition hover:bg-[#103B60]"
          >
            进入宽带问题诊断
            <ArrowRight size={18} />
          </Link>
        </section>
      )}

      {/* 下一步 */}
      <section className="mt-14 rounded-3xl border border-[#D5E5EC] bg-[#F4F8FA] p-6 md:p-8">
        <p className="text-sm font-bold text-[#2786A5]">
          看完 FAQ 后怎么走
        </p>

        <h2 className="mt-2 text-2xl font-black text-[#202D3A]">
          根据问题类型进入下一步
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <NextStepCard
            title="账单已经明显涨价"
            description="先确认是不是长期 recurring 成本变化。"
            href="/internet/price-hike"
            action="进入涨价判断"
          />

          <NextStepCard
            title="还不知道问题在哪里"
            description="先区分 Wi-Fi、设备、线路还是运营商问题。"
            href="/internet/diagnosis"
            action="进入宽带诊断"
          />

          <NextStepCard
            title="已经确认想比较其他宽带"
            description="再比较地址覆盖、长期成本和安装条件。"
            href="/internet/providers"
            action="比较其他运营商"
          />

          <NextStepCard
            title="已经取消，但还担心旧账户"
            description="继续检查 Final Bill、设备归还、AutoPay 和账户是否真正关闭。"
            href="/internet/faq/after-cancel-final-bill"
            action="检查取消后状态"
          />
        </div>
      </section>

      {/* 人工边界 */}
      <section className="mx-auto mt-14 max-w-4xl text-center">
        <CircleHelp
          size={28}
          className="mx-auto text-[#2786A5]"
        />

        <h2 className="mt-4 text-2xl font-black text-[#202D3A]">
          有些问题必须看具体账户
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#526170]">
          Promotion、Credit、设备序列号、地址 serviceability、
          合同、订单状态和账户历史无法仅靠网页判断。
          如果已经排查到这一步，可以再进入人工核实。
        </p>

        <Link
          href="/contact"
          className="mt-6 inline-flex items-center gap-2 rounded-xl border border-[#D5E5EC] bg-white px-6 py-3 text-sm font-bold text-[#164B78] transition hover:border-[#2786A5] hover:bg-[#F4F8FA]"
        >
          需要时进入人工核实
          <ArrowRight size={16} />
        </Link>
      </section>
    </main>
  )
}

function NextStepCard({
  title,
  description,
  href,
  action,
}: {
  title: string
  description: string
  href: string
  action: string
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-[#D5E5EC] bg-white p-5 transition hover:border-[#2786A5]"
    >
      <h3 className="font-black text-[#202D3A]">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-[#526170]">
        {description}
      </p>

      <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#164B78]">
        {action}
        <ArrowRight
          size={15}
          className="transition group-hover:translate-x-0.5"
        />
      </span>
    </Link>
  )
}