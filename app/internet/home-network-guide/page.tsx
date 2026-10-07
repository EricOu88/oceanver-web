import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, CircleHelp, Router, Wifi } from 'lucide-react';

const pageUrl = 'https://oceanver.com/internet/home-network-guide';

export const metadata: Metadata = {
  title: '家庭 Wi-Fi 慢怎么判断？路由器、覆盖、线路与设备检查｜美国鸿达电讯',
  description:
    '家庭 Wi-Fi 慢、掉线或房间覆盖差时，先区分设备、Wi-Fi、路由器位置和运营商线路问题，再决定是否需要换设备或换宽带。',
  alternates: { canonical: pageUrl },
};

const checks = [
  ['先确认是不是只有 Wi-Fi 慢', '如果有线连接正常而 Wi-Fi 异常，问题更可能在无线覆盖、干扰或路由器。'],
  ['比较一台设备还是多台设备', '只有单台设备异常时，先排查该设备；多台设备同时异常才更像网络或路由器问题。'],
  ['比较一个房间还是全屋', '远离路由器的房间变慢，可能是覆盖问题；全屋同时异常要继续检查线路与设备。'],
  ['比较固定时间还是全天', '晚间变慢不能直接判断为运营商“限速”，也可能与网络拥堵、Wi-Fi 干扰或家庭使用量有关。'],
  ['检查路由器位置与连接方式', '封闭柜体、墙体、楼层和回程方式都会影响覆盖；Mesh 也不是自动保证所有房间都达到同样速度。'],
  ['最后再判断要不要换宽带', '如果问题来自家中 Wi-Fi，换运营商未必解决；如果线路本身异常，再进入运营商诊断或比较。'],
];

const myths = [
  'Mesh 一定能解决所有死角。',
  '晚上慢就是运营商故意限速。',
  '测速低一定代表套餐速度不够。',
  '换更贵的路由器一定能改善线路故障。',
];

export default function HomeNetworkGuidePage() {
  return (
    <main className="min-h-screen bg-[#FCFDFE] px-4 py-10 text-[#202D3A] sm:px-6 sm:py-14">
      <div className="mx-auto max-w-5xl">
        <Link href="/internet" className="text-sm font-semibold text-[#246B95] hover:text-[#103B60]">
          ← 返回宽带问题
        </Link>

        <header className="py-10 sm:py-14">
          <p className="mb-4 inline-flex rounded-full bg-[#F4F8FA] px-3 py-1 text-sm font-semibold text-[#246B95]">
            家庭网络判断
          </p>
          <h1 className="max-w-4xl text-3xl font-black leading-tight tracking-tight sm:text-5xl">
            家庭 Wi-Fi 慢、掉线、覆盖差？先判断是家里网络还是运营商线路
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#526170] sm:text-lg">
            不先推荐路由器，也不先换运营商。先把“设备问题、Wi-Fi 覆盖、家庭网络和外部线路”分开，
            才知道下一步该改哪里。
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-2">
          {checks.map(([title, desc], index) => (
            <article key={title} className="rounded-2xl border border-[#D5E5EC] bg-white p-5">
              {index % 2 === 0 ? <Wifi className="text-[#2786A5]" size={24} /> : <Router className="text-[#2786A5]" size={24} />}
              <p className="mt-3 text-sm font-bold text-[#2786A5]">0{index + 1}</p>
              <h2 className="mt-1 text-xl font-black">{title}</h2>
              <p className="mt-2 leading-7 text-[#526170]">{desc}</p>
            </article>
          ))}
        </section>

        <section className="py-12">
          <h2 className="text-2xl font-black sm:text-3xl">这些判断不要做得太快</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {myths.map((item) => (
              <div key={item} className="rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-5">
                <CircleHelp className="text-[#246B95]" size={22} />
                <p className="mt-3 font-black">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-[#D5E5EC] bg-white p-6 sm:p-8">
          <CheckCircle2 className="text-[#246B95]" size={28} />
          <h2 className="mt-4 text-2xl font-black">下一步怎么走</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <Link href="/internet/diagnosis" className="rounded-2xl bg-[#F4F8FA] p-5 font-bold text-[#246B95]">
              还没判断清楚 → 宽带问题诊断
            </Link>
            <Link href="/internet/faq" className="rounded-2xl bg-[#F4F8FA] p-5 font-bold text-[#246B95]">
              想理解常见原因 → 宽带 FAQ
            </Link>
            <Link href="/internet/providers" className="rounded-2xl bg-[#F4F8FA] p-5 font-bold text-[#246B95]">
              已确认线路不适合 → 比较宽带方案
            </Link>
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-[#D5E5EC] bg-[#F4F8FA] p-6 sm:p-8">
          <h2 className="text-2xl font-black">什么时候需要人工核实？</h2>
          <p className="mt-3 leading-7 text-[#526170]">
            当问题涉及地址线路状态、运营商 outage、设备账户记录、安装条件或后台故障单时，网页无法确认实时状态。
          </p>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#164B78] px-6 py-3.5 font-bold text-white hover:bg-[#103B60]">
            需要时进入人工核实
            <ArrowRight size={18} />
          </Link>
        </section>

        <p className="py-8 text-center text-xs leading-6 text-[#526170]">
          最后更新：2026年10月｜设备、Wi-Fi、线路和运营商状态会因地址与环境不同，请以现场测试和当前账户状态为准。
        </p>
      </div>
    </main>
  );
}
