import type { Metadata } from 'next'
import Link from 'next/link'

const title = 'AT&T Business 和个人套餐有什么不同？｜美国鸿达电讯'
const description = '从账户类型、套餐层级、热点与数据政策、设备和网络环境判断 AT&T Business 与 Consumer 的差异；具体资格与账户条件需按当前账户核实。'
export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: 'https://oceanver.com/cellphone/att/business-faq' },
  openGraph: { title, description, url: 'https://oceanver.com/cellphone/att/business-faq', siteName: '美国鸿达电讯', locale: 'zh_CN', type: 'website' },
}
const checks = [
  '是否同一地点：室内外位置可能影响结果。',
  '是否同一设备：机型、频段支持和设备状态可能影响体验。',
  '是否同一 SIM/eSIM 状态：线路配置或激活状态可能影响连接。',
  '是否同一网络模式：不同模式下的结果可能不同。',
  '是否不同 plan tier：具体套餐的数据政策可能不同。',
  '是否存在账户/套餐层级差异：当前线路条件需要按账户核实。',
  '是否只是某个区域或时段的网络环境差异：拥堵和覆盖可能随位置与时段变化。',
]
const boundaries = ['当前账户类型', '当前 Business plan tier', '网络优先级规则', 'Hotspot / data policy（热点与数据政策）', '多线实际价格', 'Promotion eligibility（优惠资格）', '设备分期', 'IMEI / eSIM 状态与兼容性', '当前后台资格']
const questions = [
  { question: 'Business 和 Consumer 是不是使用不同网络？', paragraphs: ['不能仅凭账户标签理解为两张完全不同的网络。AT&T 手机线路的实际连接可能受地点、设备、网络模式和套餐条件影响；账户类型本身不能单独决定覆盖或速度，应以当前线路和官方规则为准。'] },
  { question: '为什么有些用户觉得 AT&T Business 比 Consumer 慢？', paragraphs: ['体验差异可能来自比较条件、具体 plan tier 或当前网络环境，不能直接归因于“Business 网络差”。应依次检查：', '仅凭 Business / Consumer 标签不能直接判断速度优劣。若需要确认当前账户层级或计划条件，可进入人工核实；若实际问题是网速慢，应先进入手机问题诊断。'], checks },
  { question: 'Business 一定拥有更高网络优先级吗？', paragraphs: ['不能作这样的统一判断。网络优先级可能取决于具体 plan tier、适用的数据类型、附加功能和当前网络管理规则。某项优先处理条件也不能作为所有地点和时段都更快的保证，应以当前账户和套餐规则为准。'] },
  { question: '同一个 AT&T，为什么不同套餐速度可能不同？', paragraphs: ['不同套餐可能适用不同的数据管理、使用条件或网络拥堵处理规则；地点、设备和网络环境也会影响体验。比较时应先对齐设备、地点和测试条件，再核实套餐层级，不能只根据一次测速判断账户类型的优劣。'] },
  { question: '商业账户和个人账户的热点/数据政策可能有什么差异？', paragraphs: ['具体套餐的热点使用条件、数据管理方式和达到适用用量条件后的处理方式可能不同。手机本机数据与热点共享也可能适用不同规则，应分别查看当前套餐说明，不能从 Business 或 Consumer 标签推断额度或速度。'] },
  { question: 'Business 一定比 Consumer 更便宜吗？', paragraphs: ['不能仅凭商业账户名称判断成本。实际费用可能受线路数量、具体套餐、税费、附加项目、设备分期和适用资格影响。应在相同使用需求下比较当前账户的总费用与条件，不能假设商业账户必然更便宜。'] },
  { question: '多线商业账户应该看哪些成本？', paragraphs: ['比较时可能需要查看账户总月费、每条线的费用、税费与附加费、设备分期、一次性费用，以及增减线路后条件是否变化。若费用依赖某项资格或账单抵扣，还应核实其适用范围和持续条件；实际价格应以当前账户为准。'] },
  { question: '手机信号差应该先看账户类型还是设备/地点？', paragraphs: ['如果实际问题是信号差、网速慢、SIM/eSIM、单设备异常或多设备异常，应先进入手机问题诊断，判断地点、设备、线路状态与网络环境是否可能相关。这个页面帮助理解账户与套餐差异，具体技术排查应在 Diagnosis 中继续。'] },
  { question: '哪些 Business plan 条件网页无法确认？', paragraphs: ['网页无法准确确认你的' + boundaries.join('、') + '。这些条件可能依赖当前账户、线路记录和运营商后台，需要按当前账户与官方规则核实。'] },
  { question: '什么情况下需要人工核实？', paragraphs: ['如果判断依赖当前账户类型、套餐层级、优先级、热点与数据政策、实际价格或后台资格，可进入人工核实。若正在处理信号、速度或设备连接异常，应先进入 Diagnosis；只有已经确认要比较 Business 和 Consumer 方案时，再进入 Providers。'] },
]
const primaryStyle = 'inline-block rounded-lg bg-[#164B78] px-5 py-3 font-semibold text-[#FCFDFE] transition hover:bg-[#103B60] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2786A5]'
export default function ATTBusinessFAQPage() {
  const schema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: questions.map(item => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: [item.paragraphs[0], ...(item.checks ?? []), ...item.paragraphs.slice(1)].join(' ') } })),
  }
  return (
    <main className="min-h-screen bg-[#F4F8FA] text-[#202D3A]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\u003c') }} />
      <div className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
        <header>
          <p className="text-sm font-semibold text-[#246B95]">Business 与 Consumer 判断</p>
          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">AT&T Business 和 Consumer 为什么体验可能不同？</h1>
          <p className="mt-6 text-lg leading-8">Business 和 Consumer 账户不能简单理解成“商业一定更好”或“个人一定更快”。实际体验可能受账户类型、具体套餐层级、设备、网络环境、热点/数据政策和当前区域影响。</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/cellphone/diagnosis" className={primaryStyle}>先判断实际问题</Link>
            <Link href="/cellphone/providers" className="rounded-lg border border-[#164B78] px-5 py-3 font-semibold text-[#164B78] transition hover:bg-[#D5E5EC] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2786A5]">已经确定要比较方案</Link>
          </div>
          <p className="mt-4 text-sm leading-6">信号、速度或 SIM/eSIM 异常先做诊断；只有明确要比较 Business 与 Consumer 方案时，再查看方案比较。</p>
        </header>
        <section aria-labelledby="questions-heading" className="mt-12">
          <h2 id="questions-heading" className="text-2xl font-bold text-[#103B60]">先看账户、套餐和实际使用条件</h2>
          <div className="mt-6 space-y-5">
            {questions.map((item, index) => (
              <article key={item.question} className="rounded-xl border border-[#D5E5EC] bg-[#FCFDFE] p-6">
                <h3 className="text-xl font-semibold text-[#164B78]">{index + 1}. {item.question}</h3>
                <p className="mt-4 leading-7">{item.paragraphs[0]}</p>
                {item.checks && <ol className="mt-3 list-decimal space-y-2 pl-6 leading-7">{item.checks.map(check => <li key={check}>{check}</li>)}</ol>}
                {item.paragraphs.slice(1).map(paragraph => <p key={paragraph} className="mt-4 leading-7">{paragraph}</p>)}
              </article>
            ))}
          </div>
        </section>
        <section aria-labelledby="verification-heading" className="mt-10 rounded-xl border border-[#D5E5EC] bg-[#FCFDFE] p-6">
          <h2 id="verification-heading" className="text-2xl font-bold text-[#103B60]">人工核实边界</h2>
          <p className="mt-4 leading-7">网页无法准确确认以下账户条件，需要时应按当前账户和运营商规则核实：</p>
          <ul className="mt-4 grid list-disc gap-2 pl-6 leading-7 sm:grid-cols-2">{boundaries.map(item => <li key={item}>{item}</li>)}</ul>
          <Link href="/contact" className={'mt-6 ' + primaryStyle}>需要时进入人工核实</Link>
        </section>
        <footer className="mt-10 border-t border-[#D5E5EC] pt-6 text-sm leading-7">
          <p>最后更新：2026年10月｜账户类型、套餐层级、网络政策和资格可能随运营商规则变化，请以当前账户与官方规则为准。</p>
          <p className="mt-3">规则参考：<a href="https://about.att.com/sites/broadband/network" target="_blank" rel="noopener noreferrer" className="text-[#164B78] underline underline-offset-4">AT&T 官方网络管理说明</a>。具体账户条件仍需另行核实。</p>
          <p className="mt-3">美国鸿达电讯</p>
        </footer>
      </div>
    </main>
  )
}
