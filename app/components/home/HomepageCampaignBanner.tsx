import Link from 'next/link'
import Image from 'next/image'

const campaignImage: string | null = null

export default function HomepageCampaignBanner() {
  return (
    <section aria-labelledby="homepage-campaign-title" className="mx-auto max-w-6xl px-6 py-8">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
        <div className="relative aspect-[16/7] w-full">
          {campaignImage ? (
            <Image src={campaignImage} alt="家庭宽带、手机月费怎么又贵了" fill sizes="(max-width: 768px) 100vw, 1152px" className="object-contain" />
          ) : (
            <div className="flex h-full flex-col items-center justify-center px-6 text-center">
              <p className="text-sm font-bold text-blue-700">家庭宽带、手机月费怎么又贵了</p>
              <h2 id="homepage-campaign-title" className="mt-2 text-xl font-black text-slate-900 md:text-2xl">先看账单，再决定要不要换</h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">专题图片原图接入后将在这里保持原始比例展示。现在可以先通过美国鸿达电讯中文客服了解账单问题。</p>
              <Link href="tel:5108496191" className="mt-4 rounded-md bg-blue-700 px-4 py-2 text-sm font-bold text-white hover:bg-blue-800">中文客服 510-849-6191</Link>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}