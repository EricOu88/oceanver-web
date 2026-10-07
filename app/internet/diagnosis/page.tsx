import type { Metadata } from 'next'
import Link from 'next/link'
import DiagnosisClient from './DiagnosisClient'

const title = '美国宽带问题诊断｜账单、网速、Wi-Fi、覆盖、安装｜美国鸿达电讯'
const description =
  '宽带账单涨价、网速慢、Wi-Fi 信号差、断网、地址覆盖、搬家或设备退还出问题时，先通过中文诊断判断常见原因、检查步骤和下一步处理方向。'

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: 'https://oceanver.com/internet/diagnosis' },
  openGraph: {
    title,
    description,
    url: 'https://oceanver.com/internet/diagnosis',
    siteName: '美国鸿达电讯',
    locale: 'zh_CN',
    type: 'website',
  },
}

export default function InternetDiagnosisPage() {
  return (
    <>
      <DiagnosisClient />
      <nav aria-label="宽带相关问题" className="mx-auto mb-10 grid max-w-5xl gap-3 px-4 sm:grid-cols-2 lg:grid-cols-4 sm:px-6">
        <Link href="/internet/faq" className="rounded-2xl border border-[#D5E5EC] bg-white p-4 font-bold text-[#246B95]">宽带问题知识库</Link>
        <Link href="/internet/home-network-guide" className="rounded-2xl border border-[#D5E5EC] bg-white p-4 font-bold text-[#246B95]">Wi-Fi / 家庭网络</Link>
        <Link href="/internet/price-hike" className="rounded-2xl border border-[#D5E5EC] bg-white p-4 font-bold text-[#246B95]">账单持续涨价</Link>
        <Link href="/internet/providers" className="rounded-2xl border border-[#D5E5EC] bg-white p-4 font-bold text-[#246B95]">已确定要比较宽带</Link>
      </nav>
    </>
  )
}
