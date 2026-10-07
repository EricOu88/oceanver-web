import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Gauge,
  Home,
  Router,
  ShieldCheck,
  Wifi,
} from 'lucide-react';

const pageUrl = 'https://oceanver.com/internet/home-network-guide';

export const metadata: Metadata = {
  title: '家庭网络怎么判断？Fiber、Cable、5G Home Internet 与 Wi-Fi | 美国鸿达电讯',
  description:
    '从入户网络、Wi-Fi 覆盖、Router、Mesh、上传需求和地址条件理解 Fiber、Cable、5G Home Internet 等家庭网络差异，避免把家庭 Wi-Fi 问题误判成运营商问题。',
  alternates: { canonical: pageUrl },
};

const technologyItems = [
  {
    title: 'Fiber',
    text: '通常适合重视上传、低延迟和稳定有线接入的场景，但是否可用首先取决于具体地址。',
  },
  {
    title: 'Cable',
    text: '覆盖通常更广，实际体验取决于地址、线路、套餐、设备和当地网络环境。',
  },
  {
    title: '5G Home Internet',
    text: '安装方式通常更简单，但实际表现更依赖室内信号、基站负载、位置和时段，不能只看理论速度。',
  },
  {
    title: 'DSL / 其他固定接入',
    text: '是否适合取决于地址上可用技术、实际线路条件和使用需求，不应只按技术名称排序。',
  },
];

const wifiChecks = [
  '只有某一个房间慢，先看 Router 位置、墙体和 Wi-Fi 覆盖。',
  '只有一台设备慢，先排除该设备、频段和连接设置。',
  '靠近 Router 正常、远处变慢，更像家庭 Wi-Fi 覆盖问题。',
  '有线连接也持续异常，才更值得继续检查入户线路或运营商服务。',
];

export default function HomeNetworkGuidePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '家庭网络怎么判断？Fiber、Cable、5G Home Internet 与 Wi-Fi',
    description:
      '帮助区分入户网络、Wi-Fi 覆盖、Router、Mesh 与不同宽带技术，避免把家庭网络问题误判成运营商问题。',
    mainEntityOfPage: pageUrl,
    inLanguage: 'zh-CN',
    dateModified: '2026-10-06',
    author: {
      '@type': 'Organization',
      name: '美国鸿达电讯',
    },
  };

  return (
    <main className="min-h-screen bg-[#FCFDFE] px-4 py-12 text-[#202D3A] md:py-16">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/internet"
          className="text-sm font-bold text-[#526170] transition hover:text-[#164B78]"
        >
          ← 返回宽带问题中心
        </Link>

        <header className="mt-8">
          <p className="text-sm font-bold text-[#246B95]">家庭网络判断</p>
          <h1 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
            先分清“入户宽带”和“家里 Wi-Fi”，
            <br className="hidden md:block" />
            再决定要不要换运营商
          </h1>
          <p className="mt-5 max-w-4xl text-lg leading-relaxed text-[#526170]">
            很多“网速慢”其实发生在家里的 Router、Wi-Fi 覆盖或设备这一层。
            Fiber、Cable、5G Home Internet 只是入户方式的一部分，不能直接代表全屋体验。
          </p>
        </header>

        <section className="mt-12 rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-7 md:p-8">
          <div className="flex gap-3">
            <ShieldCheck className="mt-1 shrink-0 text-[#2786A5]" size={28} />
            <div>
              <h2 className="text-2xl font-black">先问：问题发生在哪一层？</h2>
              <p className="mt-3 leading-relaxed text-[#526170]">
                入户线路、Modem/Gateway、Router、Wi-Fi 覆盖和终端设备是不同层。
                只有先找出问题层级，才知道应该调设备、加 Mesh、换 Router，还是比较新的宽带服务。
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-3xl font-black">不同入户技术怎么理解？</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {technologyItems.map((item) => (
              <article key={item.title} className="rounded-2xl border border-[#D5E5EC] bg-white p-6">
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-[#526170]">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-[#D5E5EC] bg-white p-7">
            <Wifi className="mb-4 text-[#2786A5]" size={28} />
            <h2 className="text-2xl font-black">什么时候更像 Wi-Fi 覆盖问题？</h2>
            <div className="mt-4 space-y-3">
              {wifiChecks.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-[#246B95]" size={18} />
                  <p className="text-[#526170]">{item}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-[#D5E5EC] bg-white p-7">
            <Router className="mb-4 text-[#2786A5]" size={28} />
            <h2 className="text-2xl font-black">Router / Mesh 怎么判断？</h2>
            <p className="leading-relaxed text-[#526170]">
              重点看房屋面积、楼层、墙体、Router 位置、设备数量和回程方式。
              自购、租用或 Mesh 没有统一“最省”答案，设备兼容、技术支持和维护责任也要一起考虑。
            </p>
          </article>
        </section>

        <section className="mt-12 rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-7 md:p-8">
          <h2 className="text-2xl font-black">什么时候才值得换宽带技术或运营商？</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {[
              '多个设备、多个位置甚至有线连接都长期异常。',
              '当前地址有更合适的 Fiber 或其他固定接入，而且长期成本可以接受。',
              '上传、远程办公或稳定性需求已经明显超过当前服务能力。',
              '已经排除 Router、Wi-Fi 和单设备问题，仍持续出现线路质量问题。',
            ].map((item) => (
              <div key={item} className="flex gap-3 rounded-xl bg-white p-4">
                <CheckCircle2 className="mt-0.5 shrink-0 text-[#246B95]" size={18} />
                <p className="text-[#526170]">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-5 md:grid-cols-3">
          <Link
            href="/internet/diagnosis"
            className="rounded-2xl border border-[#D5E5EC] bg-white p-6 transition hover:border-[#246B95]"
          >
            <Gauge className="mb-4 text-[#2786A5]" size={26} />
            <h2 className="text-xl font-black">网速 / Wi-Fi 有问题</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#526170]">
              先按设备、位置、有线和 Wi-Fi 做问题诊断。
            </p>
            <span className="mt-5 inline-flex items-center gap-2 font-bold text-[#164B78]">
              进入宽带诊断 <ArrowRight size={16} />
            </span>
          </Link>

          <Link
            href="/internet/providers"
            className="rounded-2xl border border-[#D5E5EC] bg-white p-6 transition hover:border-[#246B95]"
          >
            <Home className="mb-4 text-[#2786A5]" size={26} />
            <h2 className="text-xl font-black">已经确定要比较</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#526170]">
              再比较地址、长期成本、安装和技术类型。
            </p>
            <span className="mt-5 inline-flex items-center gap-2 font-bold text-[#164B78]">
              进入宽带比较 <ArrowRight size={16} />
            </span>
          </Link>

          <Link
            href="/internet/faq"
            className="rounded-2xl border border-[#D5E5EC] bg-white p-6 transition hover:border-[#246B95]"
          >
            <Wifi className="mb-4 text-[#2786A5]" size={26} />
            <h2 className="text-xl font-black">查具体宽带问题</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#526170]">
              继续看账单、设备、断网、安装和搬家等知识节点。
            </p>
            <span className="mt-5 inline-flex items-center gap-2 font-bold text-[#164B78]">
              进入宽带问题库 <ArrowRight size={16} />
            </span>
          </Link>
        </section>

        <section className="mt-12 rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-7 md:p-8">
          <h2 className="text-2xl font-black">哪些情况网页无法直接确认？</h2>
          <p className="mt-3 leading-relaxed text-[#526170]">
            具体地址能否安装、现有线路状态、设备兼容、当前 Gateway / Router 记录、账户限制和现场施工条件，
            都需要结合真实地址、设备或账户核实。网页只能帮助缩小问题范围，不能代替当前后台结果。
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 font-bold text-[#164B78] hover:text-[#103B60]"
          >
            需要时进入人工核实 <ArrowRight size={16} />
          </Link>
        </section>

        <p className="mt-10 text-center text-xs leading-5 text-[#526170]">
          最后更新：2026年10月｜技术、设备、地址覆盖和运营商规则可能变化，请以当前地址、设备和实际服务条件为准。
        </p>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </div>
    </main>
  );
}
