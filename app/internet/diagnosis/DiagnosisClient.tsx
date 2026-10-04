'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CircleHelp } from 'lucide-react'
import type { QADocument } from '@/ai/index/types'

type ProblemId = 'bill' | 'speed' | 'outage' | 'address' | 'moving' | 'equipment' | 'unknown'
type Option = { value: string; label: string }
type Question = { prompt: string; options: Option[] }

const problems: { id: ProblemId; title: string; description: string }[] = [
  { id: 'bill', title: '账单突然变贵', description: '月费、折扣、设备费或其他费用有变化' },
  { id: 'speed', title: '网速慢 / Wi-Fi 信号差', description: '全部区域慢，还是家里部分位置连接差' },
  { id: 'outage', title: '断网 / Modem 异常', description: '无法上网，或设备指示灯状态异常' },
  { id: 'address', title: '新地址 / 覆盖问题', description: '查询显示无服务，或地址已有旧账户' },
  { id: 'moving', title: '搬家 / 安装问题', description: '新地址服务、设备转移或安装安排不清楚' },
  { id: 'equipment', title: '设备退还 / 账户问题', description: '设备已退还仍收费，或账户状态不清楚' },
  { id: 'unknown', title: '不确定是哪一种', description: '从目前能观察到的现象开始判断' },
]

const unknownOption = { value: 'unknown', label: '不确定 / 看不懂' }
const questions: Record<ProblemId, Question[]> = {
  bill: [
    { prompt: '最近哪类账单项目看起来变了？', options: [{ value: 'monthly', label: '基础月费或套餐费用' }, { value: 'equipment', label: 'Modem / Router 等设备费用' }, { value: 'discount', label: '优惠或 AutoPay 折扣' }, { value: 'one-time', label: '安装或其他一次性费用' }, unknownOption] },
    { prompt: '这项费用下期是否又出现？', options: [{ value: 'recurring', label: '连续账单都出现' }, { value: 'once', label: '目前只看到一次' }, unknownOption] },
    { prompt: '最近是否有套餐、设备或账户变更？', options: [{ value: 'yes', label: '有变更' }, { value: 'no', label: '没有印象有变更' }, unknownOption] },
  ],
  speed: [
    { prompt: '问题出现在什么范围？', options: [{ value: 'one-area', label: '只有部分房间或角落' }, { value: 'all-home', label: '全屋都慢' }, { value: 'one-device', label: '只有一台设备' }, unknownOption] },
    { prompt: '靠近路由器时连接是否改善？', options: [{ value: 'improves', label: '有线或靠近路由器时较正常' }, { value: 'same', label: '仍然很慢' }, unknownOption] },
    { prompt: '近期是否更换过路由器、Modem 或套餐？', options: [{ value: 'yes', label: '有更换或调整' }, { value: 'no', label: '没有' }, unknownOption] },
  ],
  outage: [
    { prompt: '是所有设备都无法上网，还是只有 Wi-Fi 不通？', options: [{ value: 'all', label: '所有设备都无法上网' }, { value: 'wifi', label: '只有 Wi-Fi 连接有问题' }, { value: 'some', label: '部分设备无法连接' }, unknownOption] },
    { prompt: 'Modem / Gateway 的电源和连接线状态如何？', options: [{ value: 'normal', label: '电源、线缆看起来正常' }, { value: 'abnormal', label: '灯号异常或线缆松动' }, unknownOption] },
    { prompt: '运营商是否提示区域中断？', options: [{ value: 'yes', label: '有中断提示' }, { value: 'no', label: '没有看到提示' }, unknownOption] },
  ],
  address: [
    { prompt: '查询结果更接近哪种提示？', options: [{ value: 'smartmove', label: '正在用服务，但查询工具显示无服务' }, { value: 'occupied', label: '显示已有旧账户占用' }, { value: 'no-service', label: '显示该地址没有服务' }, unknownOption] },
    { prompt: '地址中的公寓号 / Unit 是否完整准确？', options: [{ value: 'complete', label: '已核对完整' }, { value: 'missing', label: '可能遗漏或不确定' }, unknownOption] },
    { prompt: '这是新建地址，还是已有住户使用过的地址？', options: [{ value: 'new', label: '新建或近期变更的地址' }, { value: 'existing', label: '之前有人居住或开通过服务' }, unknownOption] },
  ],
  moving: [
    { prompt: '你目前处于哪个阶段？', options: [{ value: 'before', label: '还没搬，正在准备' }, { value: 'after', label: '已经搬到新地址' }, unknownOption] },
    { prompt: '新地址的服务可用性是否已核实？', options: [{ value: 'checked', label: '已查询，但结果不确定' }, { value: 'not-checked', label: '还没有查' }, unknownOption] },
    { prompt: '当前最不确定的是哪一项？', options: [{ value: 'coverage', label: '地址覆盖或旧账户记录' }, { value: 'equipment', label: '设备是否需要带走或归还' }, { value: 'install', label: '自助安装还是需要预约' }, unknownOption] },
  ],
  equipment: [
    { prompt: '你遇到哪种设备或账户情况？', options: [{ value: 'returned', label: '设备已退还，但账单仍收费' }, { value: 'not-returned', label: '不确定设备是否需要退还' }, { value: 'account', label: '账户状态或登录有问题' }, unknownOption] },
    { prompt: '是否有退还收据或追踪记录？', options: [{ value: 'proof', label: '有凭证或追踪记录' }, { value: 'no-proof', label: '没有找到凭证' }, unknownOption] },
    { prompt: '相关费用是否在后续账单继续出现？', options: [{ value: 'repeated', label: '是，仍在重复出现' }, { value: 'single', label: '目前只看到一期' }, unknownOption] },
  ],
  unknown: [
    { prompt: '目前家里的宽带还能使用吗？', options: [{ value: 'works', label: '能上网，但体验或账单不对' }, { value: 'down', label: '目前完全无法上网' }, unknownOption] },
    { prompt: '更像账单问题，还是使用问题？', options: [{ value: 'bill', label: '费用或账单看不懂' }, { value: 'use', label: '网速、Wi-Fi 或断网' }, { value: 'address', label: '地址、搬家或安装' }, unknownOption] },
    { prompt: '最近是否搬家、换设备或调整套餐？', options: [{ value: 'yes', label: '有发生变化' }, { value: 'no', label: '没有' }, unknownOption] },
  ],
}

const knowledgeIdByProblem: Partial<Record<ProblemId, string>> = {
  speed: 'xfinity-wifi-dead-zone-001',
  equipment: 'xfinity-equipment-return-charge-001',
}

function DataList({ title, items }: { title: string; items?: string[] }) {
  if (!items?.length) return null
  return <section><h3 className="mb-2 font-bold text-[#202D3A]">{title}</h3><ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-[#526170]">{items.map((item) => <li key={item}>{item}</li>)}</ul></section>
}

export default function DiagnosisClient({ knowledge }: { knowledge: QADocument[] }) {
  const [problem, setProblem] = useState<ProblemId | null>(null)
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const selectedProblem = problems.find((item) => item.id === problem)
  const flow = problem ? questions[problem] : []
  const complete = Boolean(problem && step >= flow.length)
  const activeQuestion = flow[step]
  const values = answers.join(' ')

  let knowledgeId = problem ? knowledgeIdByProblem[problem] : undefined
  if (problem === 'address') {
    knowledgeId = values.includes('smartmove')
      ? 'xfinity-smartmove-active-service-001'
      : values.includes('occupied')
        ? 'internet-new-address-existing-account-001'
        : undefined
  }
  const result = knowledge.find((item) => item.id === knowledgeId)

  function start(id: ProblemId) {
    setProblem(id)
    setStep(0)
    setAnswers([])
  }

  function choose(value: string) {
    const nextAnswers = [...answers.slice(0, step), value]
    setAnswers(nextAnswers)
    setStep(step + 1)
  }

  function restart() {
    setProblem(null)
    setStep(0)
    setAnswers([])
  }

  const needsHumanReview = problem === 'address' || problem === 'moving' || problem === 'equipment' || (problem === 'outage' && values.includes('abnormal')) || (problem === 'bill' && values.includes('unknown'))

  return (
    <main className="min-h-screen bg-[#FCFDFE] px-4 py-8 text-[#202D3A] sm:px-6 sm:py-12">
      <div className="mx-auto max-w-5xl">
        <Link href="/internet/faq" className="inline-flex items-center gap-2 text-sm text-[#526170] transition hover:text-[#164B78]"><ArrowLeft size={16} />返回宽带常见问题</Link>
        <header className="mx-auto mb-8 mt-8 max-w-3xl text-center sm:mb-10">
          <p className="mb-3 text-sm font-bold tracking-wide text-[#2786A5]">OCEANVER · 宽带问题判断</p>
          <h1 className="text-3xl font-black tracking-tight sm:text-5xl">宽带出了问题？<br className="sm:hidden" />先判断是哪一种</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#526170] sm:text-lg">从账单涨价、网速慢 / Wi-Fi、断网 / Modem、地址覆盖、搬家 / 安装、设备退还 / 账户问题到暂时不确定，都可以先判断问题在哪，再看下一步怎么处理。</p>
        </header>

        {!problem && (
          <section aria-label="宽带问题分类" className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {problems.map((item) => (
              <button key={item.id} type="button" onClick={() => start(item.id)} className="group min-h-28 rounded-2xl border border-[#D8E2EA] bg-white p-5 text-left shadow-sm transition hover:border-[#2786A5] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#164B78]">
                <span className="flex items-start justify-between gap-3"><span><span className="block font-bold text-[#202D3A]">{item.title}</span><span className="mt-1 block text-sm leading-5 text-[#526170]">{item.description}</span></span><ArrowRight size={18} className="mt-1 shrink-0 text-[#246B95] transition group-hover:translate-x-0.5" /></span>
              </button>
            ))}
          </section>
        )}

        {problem && !complete && activeQuestion && (
          <section className="mx-auto max-w-3xl rounded-3xl border border-[#D8E2EA] bg-white p-5 shadow-sm sm:p-8">
            <div className="mb-5 flex items-center justify-between gap-3 text-sm text-[#526170]"><span>{selectedProblem?.title}</span><span>问题 {step + 1} / {flow.length}</span></div>
            <h2 className="text-xl font-bold leading-8 sm:text-2xl">{activeQuestion.prompt}</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {activeQuestion.options.map((option) => <button key={option.value} type="button" onClick={() => choose(option.value)} className="min-h-14 rounded-xl border border-[#D8E2EA] bg-white px-4 py-3 text-left font-semibold leading-6 transition hover:border-[#2786A5] hover:bg-[#EDF5F9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#164B78]">{option.label}<ArrowRight size={16} className="ml-2 inline text-[#246B95]" /></button>)}
            </div>
            <button type="button" onClick={() => step === 0 ? restart() : setStep(step - 1)} className="mt-5 text-sm font-semibold text-[#246B95] hover:text-[#103B60]">{step === 0 ? '← 返回问题分类' : '← 上一步'}</button>
          </section>
        )}

        {problem && complete && (
          <section className="mx-auto max-w-3xl rounded-3xl border border-[#D8E2EA] bg-white p-5 shadow-sm sm:p-8">
            <p className="text-sm font-bold text-[#2786A5]">你的情况更像</p>
            <h2 className="mt-1 text-2xl font-black">{result?.question_variants[0] ?? selectedProblem?.title}</h2>
            {result ? (
              <div className="mt-5 space-y-6">
                <p className="rounded-2xl bg-[#EDF5F9] p-4 leading-7">{result.summary}</p>
                <section><h3 className="mb-2 font-bold">为什么可能这样</h3><p className="text-sm leading-7 text-[#526170]">{result.answer}</p></section>
                <DataList title="先检查这几项" items={result.check_first} />
                <DataList title="现在可以自己做什么" items={result.self_help} />
                <DataList title="还不能确定什么" items={result.cannot_determine} />
                <p className="text-sm leading-6 text-[#526170]">下一步处理方向：{result.next_step}</p>
                <p className="text-sm leading-6 text-[#526170]"><strong className="text-[#202D3A]">什么情况需要进一步核实：</strong>{needsHumanReview ? '如果核对后账户、地址、设备状态或收费记录仍不一致，需要运营商结合后台信息确认。' : '如果按上述步骤仍无法判断，或同一问题持续出现，可进一步核实具体服务和设备状态。'}</p>
              </div>
            ) : (
              <div className="mt-5 space-y-5">
                <p className="rounded-2xl bg-[#EDF5F9] p-4 leading-7">{problem === 'bill' ? '账单增加可能来自月费或优惠变化、设备费用、附加服务，也可能只是一次性收费。需要对照账单项目和服务周期，才能判断是否会持续。' : problem === 'outage' ? '无法上网可能与家中设备、连接线、账户状态或区域服务中断有关。单凭灯号或一次重启结果无法确认具体原因。' : problem === 'moving' ? '搬家和安装需要分别确认新地址服务条件、设备安排及安装方式；在线地址查询本身不能确认账户资格或预约结果。' : problem === 'speed' ? '速度体验可能受 Wi-Fi 覆盖、单台设备、路由器位置或入户连接影响。先比较不同位置和连接方式，再判断问题范围。' : '如果暂时说不清问题类型，可以先记录出现的现象、时间以及近期变更，再从更具体的账单、网络或地址入口继续排查。'}</p>
                <DataList title="先检查这几项" items={problem === 'bill' ? ['对比本月和上月同一收费项目及服务周期', '查找优惠、折扣、设备费或新增服务是否变化', '确认新增费用标为一次性还是 recurring'] : problem === 'outage' ? ['确认多个设备是否都无法上网', '检查设备电源以及同轴线、光纤或网线连接', '查看运营商是否有区域中断通知'] : problem === 'moving' ? ['核对完整新地址和单元号', '查询新地址服务可用性', '确认设备归属、安装方式和旧地址服务安排'] : ['比较路由器附近、问题区域及不同设备的表现', '可行时用网线测试，区分 Wi-Fi 与入户连接', '记录问题发生的地点、时间和近期设备变化']} />
                <DataList title="现在可以自己做什么" items={problem === 'bill' ? ['保留最近两期账单并逐项比较，不要只看总额', '如果是一次性费用，留意下一期是否再次出现'] : problem === 'outage' ? ['在确保连接牢固后按设备说明重启一次并等待重新连接', '记录指示灯状态和恢复情况；若仍异常，向运营商报告'] : problem === 'moving' ? ['准备准确地址及入住时间，再向运营商核实服务和安装安排', '不要仅凭查询工具提示取消现有服务'] : ['将路由器放在开阔、较居中的位置后重新测试', '记录受影响设备和房间，便于后续判断']} />
                <p className="text-sm leading-6 text-[#526170]"><strong className="text-[#202D3A]">还不能确定什么：</strong>具体原因、账户资格或后台状态，需要结合完整账单、设备状态或运营商系统进一步确认。</p>
                <p className="text-sm leading-6 text-[#526170]"><strong className="text-[#202D3A]">什么情况需要进一步核实：</strong>{needsHumanReview ? '如果地址、账户、设备归还或安装资格仍无法确认，需要运营商核对具体记录。' : '如果按上述步骤仍无法判断，或问题持续出现，可进一步核实具体服务状态。'}</p>
                {(problem === 'bill' || problem === 'unknown') && <Link href="/bill-optimization" className="inline-flex items-center gap-2 font-semibold text-[#164B78] hover:text-[#103B60]">继续查看账单判断 <ArrowRight size={16} /></Link>}
                {problem === 'bill' && <Link href="/internet/price-hike" className="ml-4 inline-flex items-center gap-2 font-semibold text-[#164B78] hover:text-[#103B60]">宽带涨价原因与处理 <ArrowRight size={16} /></Link>}
              </div>
            )}

            {needsHumanReview && <p className="mt-5 rounded-xl border border-[#D8E2EA] bg-[#F1F4F7] p-4 text-sm leading-6 text-[#526170]">这类问题可能涉及具体地址、账户状态、设备归还或安装安排，需要结合运营商记录进一步核实。{' '}<Link href="/contact" className="font-semibold text-[#164B78] underline-offset-4 hover:text-[#103B60] hover:underline">联系中文客服 →</Link></p>}
            {result?.public_case === true && result.review_status === 'approved' && <p className="mt-5 text-sm"><Link href="/why-us" className="font-semibold text-[#164B78] hover:text-[#103B60]">看看类似真实案例 →</Link></p>}
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold"><Link href="/internet/faq" className="text-[#164B78] hover:text-[#103B60]">美国宽带常见问题 →</Link></div>
            <button type="button" onClick={restart} className="mt-6 block text-sm font-semibold text-[#526170] underline underline-offset-4 hover:text-[#164B78]">重新开始判断</button>
          </section>
        )}

        <p className="mx-auto mt-8 flex max-w-3xl items-start gap-2 rounded-2xl border border-[#D8E2EA] bg-[#F1F4F7] p-4 text-sm leading-6 text-[#526170]"><CircleHelp size={18} className="mt-0.5 shrink-0 text-[#2786A5]" />此诊断用于帮助整理问题和自查方向，不会读取账户或地址信息，也不能代替运营商对具体资格、费用和服务状态的确认。</p>
      </div>
    </main>
  )
}
