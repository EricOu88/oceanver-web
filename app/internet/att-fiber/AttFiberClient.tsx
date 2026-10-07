import Link from 'next/link'
import {
  ArrowRight,
  CircleDollarSign,
  MapPin,
  Router,
  Upload,
  Wifi,
  Wrench,
} from 'lucide-react'

const checks = [
  {
    title: '当前地址能不能装 Fiber',
    description: '覆盖结果可能受完整地址、单元、楼宇线路和实际订单核验影响；同一片区域的结果也可能不同。',
    href: '/internet/att/fiber/faq',
    label: '查看地址与覆盖问题',
    icon: MapPin,
  },
  {
    title: '现在的宽带真的需要换吗',
    description: '单个房间 Wi-Fi 慢、单台设备异常或一次短暂 outage，不一定说明当前运营商不适合。',
    href: '/internet/diagnosis',
    label: '先诊断宽带问题',
    icon: Wifi,
  },
  {
    title: '长期成本是否更合适',
    description: '一起核对持续月费、折扣变化、设备与安装条件，以及取消旧服务可能产生的成本。',
    href: '/internet/providers',
    label: '比较宽带长期成本',
    icon: CircleDollarSign,
  },
  {
    title: '上传速度是否重要',
    description: '远程办公、视频会议、云备份或频繁上传时，上行表现可能是比较服务的一个维度。',
    href: '/internet/providers',
    label: '了解宽带比较维度',
    icon: Upload,
  },
  {
    title: '地址与安装条件是否合适',
    description: '先确认现有线路、房屋或物业要求、是否需要技术人员，以及当前可选的预约方式。',
    href: '/internet/att/fiber/faq',
    label: '查看安装与设备问题',
    icon: Wrench,
  },
  {
    title: '是否值得换到 AT&T Fiber',
    description: '地址可用、实际需求匹配且综合成本合适后，再与现有服务比较；Fiber 并非对每个家庭都更合适。',
    href: '/internet/providers',
    label: '进入宽带服务比较',
    icon: Router,
  },
]

const notYetReasons = [
  '只有一个房间 Wi-Fi 慢或只有一台设备异常',
  '只遇到一次短暂 outage，原因还未确认',
  '问题可能来自 Router、Gateway 或设备位置',
  '刚更换设备，尚未完成基础排查',
  '只看到首期账单变化，还没区分一次性收费和持续月费',
]

const worthComparingReasons = [
  '当前完整地址的可用性已经核实',
  '现有宽带的持续成本或服务表现与需求不匹配',
  '上传速度、稳定性或多设备使用有明确需求',
  '问题并非单纯的室内 Wi-Fi 或单设备现象',
  '把安装、设备、旧服务取消等成本纳入后仍值得比较',
]

export default function AttFiberClient() {
  return (
    <main className="min-h-screen bg-[#FCFDFE] text-[#202D3A]">
      <div className="border-b border-[#D5E5EC] bg-white">
        <div className="mx-auto max-w-6xl px-5 py-3 md:px-8">
          <Link href="/internet/providers" className="text-sm font-semibold text-[#164B78] hover:text-[#103B60]">
            ← 返回宽带比较
          </Link>
        </div>
      </div>

      <section className="bg-[#EDF5F9]">
        <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
          <p className="mb-4 text-sm font-semibold text-[#246B95]">AT&amp;T Fiber 宽带判断</p>
          <h1 className="max-w-4xl text-3xl font-black leading-tight md:text-5xl">
            AT&amp;T Fiber 值不值得换？先看地址、需求和长期成本
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#526170] md:text-lg md:leading-8">
            Fiber 不代表每个家庭都一定更适合。先确认当前地址是否可用，再比较现有宽带的长期成本、上传需求、稳定性和安装条件，最后决定是否值得换。
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/internet/diagnosis" className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#164B78] px-5 font-bold text-white transition hover:bg-[#103B60]">
              还不知道问题在哪里？先诊断 <ArrowRight size={18} />
            </Link>
            <Link href="/internet/att/fiber/faq" className="inline-flex min-h-12 items-center rounded-xl border border-[#164B78] bg-white px-5 font-bold text-[#164B78] transition hover:bg-[#EDF5F9]">
              查看 AT&amp;T Fiber 常见问题
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <h2 className="text-2xl font-black md:text-3xl">比较之前，先确认这 6 件事</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {checks.map(({ title, description, href, label, icon: Icon }) => (
            <article key={title} className="rounded-2xl border border-[#D5E5EC] bg-white p-5 shadow-sm">
              <Icon aria-hidden="true" className="mb-3 text-[#2786A5]" size={22} />
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#526170]">{description}</p>
              <Link href={href} className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[#164B78] hover:text-[#103B60]">
                {label} <ArrowRight size={15} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#F4F8FA]">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-2 md:px-8 md:py-14">
          <div>
            <h2 className="text-xl font-black md:text-2xl">这些情况，先不要急着换 Fiber</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-[#526170]">
              {notYetReasons.map((item) => <li key={item}>• {item}</li>)}
            </ul>
            <p className="mt-4 text-sm leading-6 text-[#526170]">这些现象不一定说明运营商本身不合适；先定位原因，再决定是否比较新服务。</p>
          </div>
          <div>
            <h2 className="text-xl font-black md:text-2xl">这些情况，才值得认真比较 Fiber</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-[#526170]">
              {worthComparingReasons.map((item) => <li key={item}>• {item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10 md:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          <Link href="/internet/home-network-guide" className="rounded-2xl border border-[#D5E5EC] bg-white p-5 font-bold text-[#164B78]">
            Wi-Fi / 家庭网络问题
          </Link>
          <Link href="/internet/price-hike" className="rounded-2xl border border-[#D5E5EC] bg-white p-5 font-bold text-[#164B78]">
            账单持续涨价判断
          </Link>
          <Link href="/internet/business-vs-residential" className="rounded-2xl border border-[#D5E5EC] bg-white p-5 font-bold text-[#164B78]">
            Business / Residential 区别
          </Link>
        </div>
        <div className="mt-6 rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-5">
          <h2 className="font-black">哪些情况需要人工核实？</h2>
          <p className="mt-2 text-sm leading-6 text-[#526170]">
            当前地址 serviceability、订单状态、安装安排、具体价格、Promotion、设备记录和取消条件，网页无法读取真实后台。
          </p>
          <Link href="/contact" className="mt-4 inline-flex items-center gap-2 font-bold text-[#164B78] hover:text-[#103B60]">
            需要时进入人工核实 <ArrowRight size={16} />
          </Link>
        </div>
        <p className="mt-6 rounded-xl border border-[#D5E5EC] bg-white p-5 text-sm leading-6 text-[#526170]">
          商业宽带应按 SLA、固定 IP、线路和合同单独判断，不与住家 Fiber 混在一起比较。
        </p>
        <p className="mt-5 text-center text-xs text-[#526170]">
          最后更新：2026年10月｜价格、资格、优惠及账户结果可能随运营商政策变化，请以当前地址、账户与官方规则为准。
        </p>
      </section>
    </main>
  )
}
