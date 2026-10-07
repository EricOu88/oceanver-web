import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Home,
  ShieldCheck,
} from 'lucide-react';

const pageUrl = 'https://oceanver.com/internet/business-vs-residential';

export const metadata: Metadata = {
  title: '商业宽带 vs 住宅宽带：先看使用场景和账户条件 | 美国鸿达电讯',
  description:
    '比较商业宽带与住宅宽带时，先看地址用途、静态 IP、支持需求、合同、设备和长期成本。商业账户不一定更快，住宅账户也不一定适合所有商业场景。',
  alternates: { canonical: pageUrl },
};

const compareItems = [
  {
    title: '地址和使用场景',
    text: '先确认服务地址是住宅、办公室、店铺还是混合用途。运营商是否允许某种账户类型，要以当前地址和服务条款为准。',
  },
  {
    title: '静态 IP 与网络功能',
    text: '是否需要静态 IP、VPN、远程访问或其他企业功能，要看实际业务需求；商业账户也不代表所有方案都自动包含这些功能。',
  },
  {
    title: '支持与服务等级',
    text: '商业方案可能提供不同的支持渠道、响应安排或服务等级，但具体内容取决于当前运营商和套餐，不能一概而论。',
  },
  {
    title: '设备、安装和合同',
    text: '设备、安装、合约期限、取消条件和搬迁规则可能和住宅账户不同，比较前应逐项核实。',
  },
  {
    title: '真实长期成本',
    text: '不要只比较月费。还要看设备、安装、附加功能、静态 IP、合同和提前变更可能带来的成本。',
  },
];

const whenBusinessMayFit = [
  '业务依赖稳定的远程访问、VPN、服务器或固定网络配置。',
  '需要运营商提供商业账户专属功能或支持安排。',
  '服务地址和使用场景明确属于商业用途，且当前条款要求使用商业账户。',
];

const whenResidentialMayStillFit = [
  '主要是在家办公或轻量业务，没有特殊网络功能需求。',
  '不需要静态 IP、SLA 或商业账户专属支持。',
  '当前运营商明确允许该地址和用途使用住宅方案。',
];

export default function BusinessVsResidentialPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: '商业宽带 vs 住宅宽带：先看使用场景和账户条件',
    description:
      '从地址用途、静态 IP、支持需求、合同、设备和长期成本判断商业宽带与住宅宽带。',
    inLanguage: 'zh-CN',
    dateModified: '2026-10-06',
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
          <p className="text-sm font-bold text-[#246B95]">账户类型判断</p>
          <h1 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
            商业宽带 vs 住宅宽带：
            <br className="hidden md:block" />
            先看使用场景，不要先下结论
          </h1>
          <p className="mt-5 max-w-4xl text-lg leading-relaxed text-[#526170]">
            商业账户不一定更快，住宅账户也不一定适合所有商业场景。
            真正要比较的是地址用途、静态 IP、支持要求、设备、合同和长期成本。
          </p>
        </header>

        <section className="mt-12 rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-7 md:p-8">
          <div className="flex gap-3">
            <ShieldCheck className="mt-1 shrink-0 text-[#2786A5]" size={28} />
            <div>
              <h2 className="text-2xl font-black">先纠正两个常见误区</h2>
              <p className="mt-3 leading-relaxed text-[#526170]">
                不能简单写成“商业宽带一定更稳定、更快”，也不能写成“做生意就必须商业宽带”。
                账户类型、网络技术、具体套餐、地址和运营商条款需要分开判断。
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-3xl font-black">比较时重点看这 5 件事</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {compareItems.map((item) => (
              <article key={item.title} className="rounded-2xl border border-[#D5E5EC] bg-white p-6">
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-[#526170]">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-[#D5E5EC] bg-white p-7">
            <Building2 className="mb-4 text-[#2786A5]" size={28} />
            <h2 className="text-2xl font-black">什么情况更值得看商业方案</h2>
            <div className="mt-4 space-y-3">
              {whenBusinessMayFit.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-[#246B95]" size={18} />
                  <p className="text-[#526170]">{item}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-[#D5E5EC] bg-white p-7">
            <Home className="mb-4 text-[#2786A5]" size={28} />
            <h2 className="text-2xl font-black">什么情况住宅方案也可能足够</h2>
            <div className="mt-4 space-y-3">
              {whenResidentialMayStillFit.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-[#246B95]" size={18} />
                  <p className="text-[#526170]">{item}</p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="mt-12 rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-7 md:p-8">
          <h2 className="text-2xl font-black">下一步怎么走？</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <Link
              href="/internet/diagnosis"
              className="rounded-xl border border-[#D5E5EC] bg-white p-5 transition hover:border-[#246B95]"
            >
              <strong>网络本身有问题</strong>
              <p className="mt-2 text-sm leading-relaxed text-[#526170]">
                先排除 Wi-Fi、设备、线路和地址问题。
              </p>
              <span className="mt-4 inline-flex items-center gap-2 font-bold text-[#164B78]">
                进入宽带诊断 <ArrowRight size={16} />
              </span>
            </Link>

            <Link
              href="/internet/providers"
              className="rounded-xl border border-[#D5E5EC] bg-white p-5 transition hover:border-[#246B95]"
            >
              <strong>已经确定要比较方案</strong>
              <p className="mt-2 text-sm leading-relaxed text-[#526170]">
                再看地址、长期成本、设备和安装条件。
              </p>
              <span className="mt-4 inline-flex items-center gap-2 font-bold text-[#164B78]">
                进入宽带比较 <ArrowRight size={16} />
              </span>
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-[#D5E5EC] bg-white p-5 transition hover:border-[#246B95]"
            >
              <strong>账户类型或资格不确定</strong>
              <p className="mt-2 text-sm leading-relaxed text-[#526170]">
                需要按当前地址、用途和运营商规则核实。
              </p>
              <span className="mt-4 inline-flex items-center gap-2 font-bold text-[#164B78]">
                进入人工核实 <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </section>

        <p className="mt-10 text-center text-xs leading-5 text-[#526170]">
          最后更新：2026年10月｜商业/住宅账户、静态 IP、合同、设备和支持条件可能随运营商及地址变化，请以当前地址、账户与官方规则为准。
        </p>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </div>
    </main>
  );
}
