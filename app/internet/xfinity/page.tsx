import type { Metadata } from 'next'
import XfinityClient from './XfinityClient'
import DynamicFAQSchema from '@/app/components/seo/DynamicFAQSchema'
import InternalLinks from '@/app/components/seo/InternalLinks'
import { getCanonicalUrl } from '@/lib/seo-utils'

const xfinityFAQs = [
  {
    question: 'Xfinity 宽带适不适合我？',
    answer:
      '是否适合不能只看品牌或广告价格。应同时确认具体地址可用性、当前长期月费、设备和安装条件、网络需求，以及现有服务是否真的需要更换。',
  },
  {
    question: 'Xfinity 账单为什么会涨价？',
    answer:
      '常见原因包括促销或 Credit 到期、基础月费变化、AutoPay 折扣变化、设备费、附加服务或一次性费用。应先对比最近两期账单，再判断是否属于长期涨价。',
  },
  {
    question: 'Xfinity 网速慢一定是套餐不够快吗？',
    answer:
      '不一定。如果只有某个房间、某台设备或 Wi-Fi 连接较慢，更可能与家庭网络、路由器位置或设备有关。只有多设备、不同位置甚至网线测试都持续异常时，才更需要进一步检查线路或服务状态。',
  },
  {
    question: 'Xfinity 地址显示不能安装，就一定装不了吗？',
    answer:
      '不一定。公寓 Unit、旧账户、新建地址、地址数据库或线路条件都可能影响在线查询结果。必要时应进一步核实具体地址和 serviceability。',
  },
  {
    question: '什么时候值得考虑从 Xfinity 换到其他运营商？',
    answer:
      '如果已经确认问题不是一次性收费、Wi-Fi 覆盖或单台设备，而是长期价格、持续线路质量、搬家或当前服务条件不再合适，再开始比较其他运营商更有意义。',
  },
]

export const metadata: Metadata = {
  title: 'Xfinity 宽带怎么判断？账单、Wi-Fi、断网与换网｜美国鸿达电讯',
  description:
    'Xfinity 宽带账单涨价、Wi-Fi 慢、断网、设备、安装和地址问题怎么判断？先找出问题来源，再决定继续使用、调整方案还是比较其他运营商。',
  alternates: {
    canonical: getCanonicalUrl('/internet/xfinity'),
  },
  openGraph: {
    title: 'Xfinity 宽带怎么判断？账单、Wi-Fi、断网与换网｜美国鸿达电讯',
    description:
      '从账单、Wi-Fi、设备、断网和安装问题出发，判断 Xfinity 当前服务是否需要调整或更换。',
    url: getCanonicalUrl('/internet/xfinity'),
    siteName: '美国鸿达电讯',
    locale: 'zh_CN',
    type: 'website',
  },
}

export default function Page() {
  return (
    <>
      <DynamicFAQSchema questions={xfinityFAQs} />
      <XfinityClient />
      <InternalLinks pageType="provider" providerFAQUrl="/internet/xfinity/faq" />
    </>
  )
}