import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { notFound, permanentRedirect } from 'next/navigation'
import { attFiberFAQContent, type ATTFiberFAQContent } from '@/app/internet-wifi/att/fiber/faq/faq-content'
import { attFiberFAQIndex } from '../faq-index'

const retiredSlugRedirects: Record<string, string> = {
  'att-fiber-bill-sudden-increase': '/internet/att/fiber/faq/att-fiber-price-increase',
  'att-fiber-customer-service': '/internet/att/fiber/faq',
}

const relatedSlugs: Record<string, string[]> = {
  'att-fiber-price-increase': ['att-fiber-equipment-fee', 'att-fiber-cancel-termination-fee'],
  'att-fiber-frequent-disconnections': ['att-fiber-outage-duration', 'att-fiber-buried-wire-installation'],
  'att-fiber-outage-duration': ['att-fiber-frequent-disconnections', 'att-fiber-buried-wire-installation'],
  'att-fiber-equipment-fee': ['att-fiber-price-increase', 'att-fiber-cancel-termination-fee'],
  'att-fiber-cancel-termination-fee': ['att-fiber-price-increase', 'att-fiber-equipment-fee'],
  'att-fiber-buried-wire-installation': ['att-fiber-frequent-disconnections', 'att-fiber-outage-duration'],
}

const isPublished = (slug: string) => attFiberFAQIndex.some((item) => item.slug === slug)

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return attFiberFAQIndex.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  if (retiredSlugRedirects[slug]) return {}

  const faq = isPublished(slug) ? attFiberFAQContent[slug] : undefined
  if (!faq) return { title: '问题未找到｜美国鸿达电讯' }

  const url = `https://oceanver.com/internet/att/fiber/faq/${slug}`
  return {
    title: `${faq.question}｜美国鸿达电讯`,
    description: faq.summary,
    alternates: { canonical: url },
    openGraph: {
      title: `${faq.question}｜美国鸿达电讯`,
      description: faq.summary,
      url,
      siteName: '美国鸿达电讯',
      locale: 'zh_CN',
      type: 'article',
    },
  }
}

export default async function ATTFiberFAQDetailPage({ params }: PageProps) {
  const { slug } = await params
  const redirectTo = retiredSlugRedirects[slug]
  if (redirectTo) permanentRedirect(redirectTo)

  const faq = isPublished(slug) ? attFiberFAQContent[slug] : undefined
  if (!faq) notFound()

  const lastModified = attFiberFAQIndex.find((item) => item.slug === slug)?.lastModified
  const relatedFAQs = (relatedSlugs[slug] ?? [])
    .filter(isPublished)
    .map((relatedSlug) => attFiberFAQContent[relatedSlug])
    .filter((item): item is ATTFiberFAQContent => Boolean(item))
  const fullAnswer = [
    faq.content.whyCommon,
    faq.content.officialRules,
    faq.content.realUsage,
    faq.content.suitableFor,
  ].join('\n\n')
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    dateModified: lastModified,
    mainEntity: [{
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: fullAnswer },
    }],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="min-h-screen bg-[#F4F8FA] text-[#202D3A]">
        <div className="sticky top-0 z-10 border-b border-[#D5E5EC] bg-white">
          <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-4 md:px-8">
            <Link href="/internet/att/fiber/faq" className="inline-flex items-center gap-2 text-sm font-semibold text-[#164B78] hover:text-[#103B60]">
              <ArrowLeft size={18} /> 返回 AT&amp;T Fiber FAQ
            </Link>
            <Link href="/internet/diagnosis" className="text-sm font-semibold text-[#164B78] hover:text-[#103B60]">
              宽带问题诊断
            </Link>
          </div>
        </div>

        <article className="mx-auto max-w-4xl px-5 py-10 md:px-8 md:py-12">
          <h1 className="mb-10 text-3xl font-black leading-tight text-[#202D3A] md:text-4xl">
            {faq.question}
          </h1>

          <section className="mb-9">
            <h2 className="mb-3 text-xl font-bold text-[#202D3A]">为什么会出现这种情况</h2>
            <p className="text-base leading-7 text-[#526170]">{faq.content.whyCommon}</p>
          </section>

          <section className="mb-9">
            <h2 className="mb-3 text-xl font-bold text-[#202D3A]">当前规则与需要确认的条件</h2>
            <p className="text-base leading-7 text-[#526170]">{faq.content.officialRules}</p>
          </section>

          <section className="mb-9">
            <h2 className="mb-3 text-xl font-bold text-[#202D3A]">现实中应该怎么判断</h2>
            <p className="text-base leading-7 text-[#526170]">{faq.content.realUsage}</p>
          </section>

          <section className="mb-9">
            <h2 className="mb-3 text-xl font-bold text-[#202D3A]">哪些情况更值得继续核实</h2>
            <p className="text-base leading-7 text-[#526170]">{faq.content.suitableFor}</p>
          </section>

          {relatedFAQs.length > 0 && (
            <section className="mb-9">
              <h2 className="mb-4 text-xl font-bold text-[#202D3A]">类似问题继续看</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {relatedFAQs.map((related) => (
                  <Link key={related.slug} href={`/internet/att/fiber/faq/${related.slug}`} className="rounded-xl border border-[#D5E5EC] bg-white p-4 hover:shadow-sm">
                    <span className="font-semibold text-[#164B78]">{related.question}</span>
                    <span className="mt-2 block text-sm leading-6 text-[#526170]">{related.summary}</span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <section className="rounded-2xl border border-[#D5E5EC] bg-white p-5 md:p-6">
            <h2 className="mb-2 text-lg font-bold text-[#202D3A]">需要时继续核实</h2>
            <p className="mb-4 text-sm leading-6 text-[#526170]">
              如果仍无法判断费用、连接、设备或安装情况，可先进行宽带问题诊断；涉及具体账户或地址结果时，再按当前信息进一步核实。
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/internet/diagnosis" className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-[#164B78] px-4 font-semibold text-white hover:bg-[#103B60]">
                继续做宽带问题诊断 <ArrowRight size={16} />
              </Link>
              <Link href="/internet/providers" className="inline-flex min-h-11 items-center rounded-xl border border-[#D5E5EC] px-4 font-semibold text-[#164B78] hover:bg-[#F4F8FA]">
                比较其他宽带
              </Link>
              <Link href="/contact" className="inline-flex min-h-11 items-center rounded-xl border border-[#D5E5EC] px-4 font-semibold text-[#164B78] hover:bg-[#F4F8FA]">
                需要时进入人工核实
              </Link>
            </div>
          </section>

          <p className="mt-8 border-t border-[#D5E5EC] pt-5 text-center text-xs leading-5 text-[#526170]">
            最后更新：{lastModified?.slice(0, 4)}年{lastModified?.slice(5, 7)}月｜价格、资格、优惠及账户结果可能随运营商政策变化，请以当前地址、账户与官方规则为准。
          </p>
        </article>
      </main>
    </>
  )
}
