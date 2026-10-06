import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ArrowLeft,
  ArrowRight,
  CircleHelp,
  FileCheck2,
  SearchCheck,
} from 'lucide-react'
import {
  xfinityFAQContent,
  type XfinityFAQContent,
} from '@/app/internet-wifi/xfinity/faq/faq-content'
import { xfinityFAQIndex } from '../faq-index'
import FAQPageSchema from '@/app/components/seo/FAQPageSchema'

interface XfinityFAQPageProps {
  params: Promise<{ slug: string }>
}

const isPublishedXfinityFAQ = (slug: string) =>
  xfinityFAQIndex.some((item) => item.slug === slug)

export async function generateStaticParams() {
  return xfinityFAQIndex.map((item) => ({
    slug: item.slug,
  }))
}

export async function generateMetadata({
  params,
}: XfinityFAQPageProps): Promise<Metadata> {
  const { slug } = await params
  const faq = isPublishedXfinityFAQ(slug)
    ? xfinityFAQContent[slug]
    : undefined

  if (!faq) {
    return {
      title: '问题未找到｜美国鸿达电讯',
    }
  }

  return {
    title: faq.seo.title,
    description: faq.seo.description,
    alternates: {
      canonical: `https://oceanver.com/internet/xfinity/faq/${slug}`,
    },
    openGraph: {
      title: faq.seo.title,
      description: faq.seo.description,
      url: `https://oceanver.com/internet/xfinity/faq/${slug}`,
      siteName: '美国鸿达电讯',
      locale: 'zh_CN',
      type: 'article',
    },
  }
}

const getFullAnswer = (faq: XfinityFAQContent): string => {
  const parts = [
    faq.summary,
    faq.content?.whyCommon,
    faq.content?.officialRules,
    faq.content?.realUsage,
    faq.content?.suitableFor,
  ].filter((part): part is string => Boolean(part))

  return parts.join(' ')
}

export default async function XfinityFAQDetailPage({
  params,
}: XfinityFAQPageProps) {
  const { slug } = await params

  const faq = isPublishedXfinityFAQ(slug)
    ? xfinityFAQContent[slug]
    : undefined

  if (!faq) {
    notFound()
  }

  const relatedFAQs = xfinityFAQIndex
    .filter((item) => item.slug !== slug)
    .slice(0, 3)
    .map((item) => xfinityFAQContent[item.slug])
    .filter((item): item is XfinityFAQContent => item !== undefined)

  const fullAnswer = getFullAnswer(faq)

  return (
    <>
      <FAQPageSchema
        question={faq.question}
        answer={fullAnswer}
      />

      <div className="min-h-screen bg-[#FCFDFE]">
        {/* 顶部导航 */}
        <div className="sticky top-0 z-40 border-b border-[#D5E5EC] bg-white/95 backdrop-blur">
          <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 md:px-6">
            <Link
              href="/internet/xfinity/faq"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#526170] transition hover:text-[#164B78]"
            >
              <ArrowLeft size={16} />
              返回 Xfinity FAQ
            </Link>

            <Link
              href="/internet/diagnosis"
              className="text-sm font-semibold text-[#164B78] transition hover:text-[#103B60]"
            >
              宽带问题诊断
            </Link>
          </div>
        </div>

        <article className="mx-auto max-w-4xl px-4 py-10 md:px-6 md:py-14">
          {/* Hero */}
          <header className="border-b border-[#D5E5EC] pb-9">
            <p className="text-sm font-bold tracking-wide text-[#2786A5]">
              Xfinity 问题判断
            </p>

            <h1 className="mt-3 text-3xl font-black leading-tight tracking-tight text-[#202D3A] md:text-5xl">
              {faq.question}
            </h1>

            {faq.summary && (
              <p className="mt-5 text-base leading-8 text-[#526170] md:text-lg">
                {faq.summary}
              </p>
            )}

            <p className="mt-5 text-xs leading-5 text-[#526170]">
              最后更新：2026年10月｜价格、资格、优惠及账户结果可能随运营商政策变化，请以当前账户与官方规则为准。
            </p>
          </header>

          {/* 为什么会遇到 */}
          <ContentSection
            icon={<CircleHelp size={20} />}
            eyebrow="先理解问题"
            title="为什么会出现这种情况"
          >
            {faq.content.whyCommon}
          </ContentSection>

          {/* 当前规则 */}
          <ContentSection
            icon={<FileCheck2 size={20} />}
            eyebrow="需要核对"
            title="当前规则与需要确认的条件"
          >
            {faq.content.officialRules}
          </ContentSection>

          {/* 实际判断 */}
          <ContentSection
            icon={<SearchCheck size={20} />}
            eyebrow="实际判断"
            title="现实中应该怎么判断"
          >
            {faq.content.realUsage}
          </ContentSection>

          {/* 适合 / 不适合 */}
          <section className="mt-10 rounded-3xl border border-[#D5E5EC] bg-[#F4F8FA] p-6 md:p-8">
            <h2 className="text-xl font-black text-[#202D3A] md:text-2xl">
              哪些情况更值得继续核实
            </h2>

            <p className="mt-4 whitespace-pre-line text-base leading-8 text-[#526170]">
              {faq.content.suitableFor}
            </p>
          </section>

          {/* 决策提示 */}
          <section className="mt-10 rounded-3xl border border-[#D5E5EC] bg-white p-6 md:p-8">
            <p className="text-sm font-bold text-[#2786A5]">
              一个重要原则
            </p>

            <h2 className="mt-2 text-xl font-black text-[#202D3A] md:text-2xl">
              不要只凭一个现象马上决定换网
            </h2>

            <p className="mt-4 leading-8 text-[#526170]">
              账单变贵、Wi-Fi
              慢、断网、设备收费和安装问题，背后的原因并不一样。
              先把问题来源确认清楚，再判断是继续使用、调整当前服务，
              还是比较其他运营商。
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/internet/diagnosis"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#164B78] px-6 py-3 font-bold text-white transition hover:bg-[#103B60]"
              >
                继续做宽带问题诊断
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/internet/price-hike"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#D5E5EC] bg-white px-6 py-3 font-bold text-[#164B78] transition hover:border-[#2786A5] hover:bg-[#F4F8FA]"
              >
                如果主要问题是涨价
                <ArrowRight size={17} />
              </Link>
            </div>
          </section>

          {/* 相关问题 */}
          {relatedFAQs.length > 0 && (
            <section className="mt-12">
              <p className="text-sm font-bold text-[#2786A5]">
                继续了解
              </p>

              <h2 className="mt-2 text-2xl font-black text-[#202D3A]">
                相关 Xfinity 问题
              </h2>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {relatedFAQs.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/internet/xfinity/faq/${related.slug}`}
                    className="group rounded-2xl border border-[#D5E5EC] bg-white p-5 transition hover:border-[#2786A5]"
                  >
                    <h3 className="font-black leading-6 text-[#202D3A] transition group-hover:text-[#164B78]">
                      {related.question}
                    </h3>

                    <p className="mt-2 line-clamp-3 text-sm leading-6 text-[#526170]">
                      {related.summary}
                    </p>

                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#164B78]">
                      查看判断方法
                      <ArrowRight
                        size={14}
                        className="transition group-hover:translate-x-0.5"
                      />
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* 人工边界 */}
          <section className="mt-12 rounded-3xl border border-[#D5E5EC] bg-[#F4F8FA] p-6 text-center md:p-8">
            <CircleHelp
              size={28}
              className="mx-auto text-[#2786A5]"
            />

            <h2 className="mt-4 text-xl font-black text-[#202D3A] md:text-2xl">
              页面无法读取你的具体账户
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#526170]">
              如果问题涉及 Promotion、Credit、设备序列号、
              具体地址覆盖、合同、订单状态或账户历史，
              最终仍需要结合实际账户核实。
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-xl border border-[#D5E5EC] bg-white px-6 py-3 text-sm font-bold text-[#164B78] transition hover:border-[#2786A5]"
            >
              需要时进入人工核实
              <ArrowRight size={16} />
            </Link>
          </section>

          {/* 底部导航 */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm">
            <Link
              href="/internet/xfinity/faq"
              className="inline-flex items-center gap-2 font-semibold text-[#526170] transition hover:text-[#164B78]"
            >
              <ArrowLeft size={16} />
              返回 FAQ 总览
            </Link>

            <span className="text-[#D5E5EC]">|</span>

            <Link
              href="/internet/xfinity"
              className="font-semibold text-[#526170] transition hover:text-[#164B78]"
            >
              Xfinity 判断页
            </Link>

            <span className="text-[#D5E5EC]">|</span>

            <Link
              href="/internet/diagnosis"
              className="font-semibold text-[#526170] transition hover:text-[#164B78]"
            >
              宽带问题诊断
            </Link>
          </div>
        </article>
      </div>
    </>
  )
}

function ContentSection({
  icon,
  eyebrow,
  title,
  children,
}: {
  icon: ReactNode
  eyebrow: string
  title: string
  children: ReactNode
}) {
  return (
    <section className="mt-10">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F4F8FA] text-[#164B78]">
          {icon}
        </div>

        <div>
          <p className="text-xs font-bold tracking-wide text-[#2786A5]">
            {eyebrow}
          </p>

          <h2 className="mt-1 text-xl font-black text-[#202D3A] md:text-2xl">
            {title}
          </h2>
        </div>
      </div>

      <p className="mt-4 whitespace-pre-line text-base leading-8 text-[#526170]">
        {children}
      </p>
    </section>
  )
}