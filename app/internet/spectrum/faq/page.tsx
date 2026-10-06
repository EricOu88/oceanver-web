import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const faqSections = [
  {
    title: '账单与涨价',
    items: [
      {
        question: 'Spectrum 账单突然涨价，先看什么？',
        answer:
          '先对比最近两期账单的相同项目，区分基础月费、Promotion / Credit、设备费、AutoPay 和一次性费用。若找不到变化来源，再结合账户记录向运营商核实。',
      },
      {
        question: '为什么用了几年以后越来越贵？',
        answer:
          '账单变化可能来自优惠或折扣变化、套餐调整、设备项目或其他账户变更，不能只凭使用年限判断原因。逐项对比账单和账户通知，确认哪些变化会持续到后续账期。',
      },
      {
        question: '怎么判断是促销结束还是新增费用？',
        answer:
          '查看账单上的折扣、Promotion、Credit 和基础月费项目，并对照账户中的促销期限或变更通知。再确认新增项目属于 recurring charge 还是 one-time charge；具体适用条件以当前账户显示为准。',
      },
      {
        question: '账单里突然多一个项目怎么办？',
        answer:
          '先查看该项目名称、开始日期和收费周期，并与订单、设备或服务变更记录对照。仅凭项目名称无法确认是否收费错误；有疑问时保留账单并请运营商解释。',
      },
    ],
  },
  {
    title: '网速与 Wi-Fi',
    items: [
      {
        question: 'Spectrum Wi-Fi 很慢，是不是套餐不够？',
        answer:
          '不一定。先比较多个设备、不同位置以及有线连接的表现，区分套餐、家庭 Wi-Fi、设备或服务状态问题。单次 Wi-Fi 测速不能单独证明套餐速度不足。',
      },
      {
        question: '为什么只有卧室或楼上慢？',
        answer:
          '如果路由器附近正常、个别房间较慢，问题可能与 Wi-Fi 覆盖、墙体或设备位置有关。可在相同设备上比较不同房间，并与有线连接结果对照。',
      },
      {
        question: '测速正常但实际使用很卡怎么办？',
        answer:
          '测速结果只是某一时间、设备和连接方式下的表现。记录卡顿发生的应用、时段和设备，并比较有线与 Wi-Fi、多台设备的结果，再判断是否需要检查家庭网络或服务线路。',
      },
    ],
  },
  {
    title: '断网与线路',
    items: [
      {
        question: 'Spectrum 突然断网，第一步做什么？',
        answer:
          '先确认是否有区域 outage，再检查 Gateway 指示灯和多台设备是否同时受影响。记录发生时间及恢复情况；单个设备无法连接时，也要先排除设备自身问题。',
      },
      {
        question: '经常掉线但重启后恢复，说明什么？',
        answer:
          '重启可能暂时清除设备状态，但不能确定根因。记录掉线频率、Gateway 状态、受影响设备和有线连接表现，再区分设备、Wi-Fi、区域中断或线路问题。',
      },
      {
        question: '怎么判断是不是线路问题？',
        answer:
          '如果多个设备在 Wi-Fi 和有线连接下都持续异常，才更需要进一步检查 Gateway、线路和区域服务状态。用户自测可以缩小范围，但不能最终确认运营商线路故障。',
      },
    ],
  },
  {
    title: '设备与费用',
    items: [
      {
        question: 'Spectrum 设备收费怎么看？',
        answer:
          '查看设备名称、收费周期以及账单是否标为 recurring 或 one-time，并核对当前账户中登记的设备。设备型号、租用状态和收费规则应以当前账户记录为准。',
      },
      {
        question: '自备 Router 或 Modem 前需要确认什么？',
        answer:
          '先核对设备是否兼容当前服务、是否需要运营商激活，以及更换后哪些功能由自有设备承担。不要只按设备型号推断兼容性，必要时向 Spectrum 确认当前要求。',
      },
      {
        question: '设备已经退还，为什么账单还显示收费？',
        answer:
          '可能需要核对退还凭证、设备序列号、账户记录和账单周期，也要确认账户是否还有其他登记设备。保存收据或追踪记录；仅凭已寄出设备不能确认系统已完成登记。',
      },
    ],
  },
  {
    title: '安装、地址与搬家',
    items: [
      {
        question: '新地址能不能装 Spectrum？',
        answer:
          '是否可用取决于完整地址、Unit、线路记录和当前地址查询结果，不能只凭城市或附近地址判断。在线结果不清楚或与实际房屋情况不符时，需要进一步核实。',
      },
      {
        question: '搬家应该先关旧地址还是先开新地址？',
        answer:
          '先确认新地址可用性、安装安排和启用日期，再结合旧地址停止服务的条件安排时间。两边的设备、账户和账期可能不同，具体生效时间应以订单和账户确认信息为准。',
      },
      {
        question: '搬家后旧设备还能不能继续使用？',
        answer:
          '这取决于设备归属、兼容性、新地址线路和当前账户安排。搬迁前核对设备是否需要继续使用、退还或重新激活，并确认新地址的安装要求。',
      },
    ],
  },
  {
    title: '取消、账户与其他问题',
    items: [
      {
        question: '取消 Spectrum 前先确认什么？',
        answer:
          '先确认服务终止日期、最终账单、账户中登记的设备以及是否有未解决余额或订单。取消流程和后续收费取决于当前账户与适用条款，应保存确认记录。',
      },
      {
        question: '月中取消如何看最终账单？',
        answer:
          '对照取消生效日期、账单周期、已收费用和最终账单中的 adjustment 或 balance。是否按比例调整或产生退款取决于账户条款和最终结算，不能只凭取消日期判断。',
      },
      {
        question: '门店和客服说法不一样怎么办？',
        answer:
          '先记录沟通日期、涉及的账户事项和不同说法，并以当前订单、账单或账户中的书面信息核对。仍有冲突时，请运营商确认适用于该账户的规则并保留回复。',
      },
      {
        question: '什么情况需要人工核实？',
        answer:
          '涉及账户资格、账单争议、设备记录、地址覆盖、订单状态或当前规则时，公开信息通常不足以确认具体结果。可以先整理相关账单项目和记录，再向运营商或人工支持核实。',
      },
    ],
  },
]

const title = 'Spectrum 常见问题 FAQ｜账单、网速、设备与搬家｜美国鸿达电讯'
const description =
  '整理 Spectrum 账单涨价、Wi-Fi、断网、设备收费、地址与搬家等问题，说明先核对什么以及何时需要结合账户进一步确认。'

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: 'https://oceanver.com/internet/spectrum/faq',
    siteName: '美国鸿达电讯',
    locale: 'zh_CN',
    type: 'website',
  },
}

export default function SpectrumFAQPage() {
  const faqItems = faqSections.flatMap((section) => section.items)

  return (
    <main className="min-h-screen bg-[#FCFDFE] px-4 py-8 text-[#202D3A] sm:px-6 sm:py-12">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/internet/spectrum"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#526170] transition hover:text-[#164B78]"
        >
          <ArrowLeft size={16} />
          返回 Spectrum 问题判断
        </Link>

        <header className="mt-8">
          <p className="text-sm font-bold tracking-wide text-[#2786A5]">
            Spectrum 问题判断
          </p>
          <h1 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
            Spectrum 常见问题 FAQ
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[#526170] md:text-lg">
            按账单、网络、设备、地址和账户问题整理。先核对可见记录，再根据当前账户与地址判断下一步。
          </p>
        </header>

        <div className="mt-10 space-y-8">
          {faqSections.map((section, index) => (
            <section
              key={section.title}
              id={`spectrum-faq-${index + 1}`}
              className="rounded-2xl border border-[#D8E2EA] bg-[#EDF5F9] p-4 sm:p-6"
            >
              <h2 className="text-xl font-black md:text-2xl">
                {section.title}
              </h2>
              <div className="mt-4 space-y-3">
                {section.items.map((item) => (
                  <details
                    key={item.question}
                    className="group rounded-xl border border-[#D8E2EA] bg-white p-4 sm:p-5"
                  >
                    <summary className="cursor-pointer font-bold text-[#202D3A] marker:text-[#246B95]">
                      {item.question}
                    </summary>
                    <p className="mt-3 text-sm leading-7 text-[#526170]">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-10 rounded-2xl border border-[#D8E2EA] bg-white p-5 sm:p-6">
          <h2 className="text-xl font-black">还不能确定问题来源？</h2>
          <p className="mt-2 text-sm leading-7 text-[#526170]">
            可进入宽带问题诊断，按网速、Wi-Fi、断网、设备和地址情况继续判断。
          </p>
          <Link
            href="/internet/diagnosis"
            className="mt-4 inline-flex items-center gap-2 font-bold text-[#164B78] transition hover:text-[#103B60]"
          >
            宽带问题诊断
            <ArrowRight size={16} />
          </Link>
        </section>

        <p className="mt-8 text-center text-xs leading-5 text-[#526170]">
          最后更新：2026年10月｜价格、资格、优惠及账户结果可能随运营商政策变化，请以当前地址、账户与官方规则为准。
        </p>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          }),
        }}
      />
    </main>
  )
}
