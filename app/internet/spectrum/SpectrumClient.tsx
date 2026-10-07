import Link from 'next/link'
import {
  ArrowRight,
  CircleDollarSign,
  Scale,
  MapPin,
  Router,
  Wifi,
  WifiOff,
} from 'lucide-react'

const issueLinks = [
  {
    title: '账单与涨价',
    description:
      '账单突然变高，先检查 Promotion / Credit、基础月费、设备、AutoPay 和一次性费用。',
    href: '/internet/price-hike',
    action: '查看宽带涨价判断',
    icon: <CircleDollarSign size={22} />,
  },
  {
    title: '网速与 Wi-Fi',
    description:
      '先区分单台设备、单个房间、全屋 Wi-Fi，还是有线连接也变慢。',
    href: '/internet/diagnosis',
    action: '检查网速与 Wi-Fi',
    icon: <Wifi size={22} />,
  },
  {
    title: '经常断网',
    description:
      '观察是否有区域 outage，再检查 Gateway、Wi-Fi 和线路表现。',
    href: '/internet/diagnosis',
    action: '判断断网原因',
    icon: <WifiOff size={22} />,
  },
  {
    title: '设备与费用',
    description:
      '核对 Gateway、Router、设备记录，以及是否出现持续性设备收费。',
    href: '/internet/spectrum/faq',
    action: '查看设备与费用问题',
    icon: <Router size={22} />,
  },
  {
    title: '搬家与地址',
    description:
      '确认新地址、Unit、安装方式、设备安排和新旧地址服务时间。',
    href: '/internet/spectrum/faq',
    action: '查看地址与搬家问题',
    icon: <MapPin size={22} />,
  },
  {
    title: '要不要换 Spectrum',
    description:
      '结合长期月费、服务表现、设备与安装成本，以及新选项促销结束后的费用再比较。',
    href: '/internet/providers',
    action: '比较宽带选择',
    icon: <Scale size={22} />,
  },
]

const waitBeforeSwitching = [
  '只有一个房间 Wi-Fi 慢',
  '只有一台设备异常',
  '第一期账单金额较高',
  '刚刚更换设备',
  '只遇到一次区域 outage',
  '搬家后新地址尚未完成安装',
]

const compareOtherProviders = [
  '长期 recurring 成本明显上涨',
  '多次线路问题经核实后仍未解决',
  '新地址有 Fiber 等更符合需求的选择',
  '上传速度、稳定性或延迟长期无法满足使用',
  '调整当前账户后，长期成本仍不合适',
]

export default function SpectrumClient() {
  return (
    <main className="min-h-screen bg-[#FCFDFE] px-4 py-8 text-[#202D3A] sm:px-6 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/internet/providers"
          className="text-sm font-semibold text-[#526170] transition hover:text-[#164B78]"
        >
          ← 返回宽带运营商比较
        </Link>

        <section className="mx-auto mt-8 max-w-4xl text-center">
          <p className="text-sm font-bold tracking-wide text-[#2786A5]">
            Spectrum 宽带问题判断
          </p>
          <h1 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
            Spectrum 有问题，先判断原因，再决定要不要换
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#526170] md:text-lg">
            账单变贵、Wi-Fi 变慢、经常断网、设备收费或搬家后出现问题，并不一定意味着马上换网。先判断问题来源，再决定继续使用、调整当前服务还是比较其他运营商。
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
              href="/internet/spectrum/faq"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#D8E2EA] bg-white px-6 py-3 font-bold text-[#164B78] transition hover:bg-[#EDF5F9]"
            >
              查看 Spectrum 常见问题
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        <section className="mt-14" aria-labelledby="spectrum-issues">
          <h2 id="spectrum-issues" className="text-2xl font-black md:text-3xl">
            先从你遇到的问题开始
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {issueLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-2xl border border-[#D8E2EA] bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#EDF5F9] text-[#2786A5]">
                  {item.icon}
                </span>
                <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#526170]">
                  {item.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#164B78] group-hover:text-[#103B60]">
                  {item.action}
                  <ArrowRight size={15} />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-14 grid gap-4 md:grid-cols-3">
          <Link href="/internet/home-network-guide" className="rounded-2xl border border-[#D8E2EA] bg-white p-5 font-bold text-[#164B78]">
            Wi-Fi / 家庭网络判断
          </Link>
          <Link href="/internet/price-hike" className="rounded-2xl border border-[#D8E2EA] bg-white p-5 font-bold text-[#164B78]">
            账单持续涨价判断
          </Link>
          <Link href="/internet/spectrum/faq" className="rounded-2xl border border-[#D8E2EA] bg-white p-5 font-bold text-[#164B78]">
            Spectrum 常见问题
          </Link>
        </section>

        <section className="mt-14 rounded-3xl border border-[#D8E2EA] bg-[#EDF5F9] p-6 md:p-8">
          <h2 className="text-2xl font-black">
            这些情况，先不要急着换 Spectrum
          </h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {waitBeforeSwitching.map((item) => (
              <li key={item} className="rounded-xl bg-white p-4 text-[#526170]">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-7 text-[#526170]">
            这些现象未必代表 Spectrum 本身不适合，先确认问题发生在哪一层，通常更有助于判断下一步。
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-black md:text-3xl">
            这些情况，才更值得比较其他运营商
          </h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {compareOtherProviders.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-[#D8E2EA] bg-white p-4 text-[#526170]"
              >
                {item}
              </li>
            ))}
          </ul>
          <Link
            href="/internet/providers"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#164B78] px-6 py-3 font-bold text-white transition hover:bg-[#103B60]"
          >
            比较其他宽带
            <ArrowRight size={18} />
          </Link>
        </section>

        <section className="mt-14 rounded-3xl border border-[#D8E2EA] bg-[#EDF5F9] p-6 text-center md:p-8">
          <h2 className="text-2xl font-black">
            有些问题必须看具体账户或地址
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-[#526170]">
            Promotion、Credit、设备记录、订单状态、地址 serviceability 和安装条件等，网页无法读取实际后台结果。
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-xl border border-[#164B78] bg-white px-6 py-3 font-bold text-[#164B78] transition hover:bg-[#EDF5F9]"
          >
            需要时进入人工核实
            <ArrowRight size={17} />
          </Link>
        </section>

        <p className="mt-10 text-center text-xs leading-5 text-[#526170]">
          最后更新：2026年10月｜价格、资格、优惠及账户结果可能随运营商政策变化，请以当前地址、账户与官方规则为准。
        </p>
      </div>
    </main>
  )
}
