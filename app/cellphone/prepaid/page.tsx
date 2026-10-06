import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, CircleHelp, Globe2, ShieldCheck, Smartphone } from 'lucide-react';

const pageUrl = 'https://oceanver.com/cellphone/prepaid';

export const metadata: Metadata = {
  title: '什么时候适合 Prepaid？美国预付费手机判断指南｜美国鸿达电讯',
  description:
    '从使用时长、SSN/信用、线路数量、国际使用、eSIM、保号和设备需求判断 Prepaid 是否适合。具体价格、资格与国际使用条件需按当前计划核实。',
  alternates: { canonical: pageUrl },
};

const fit = [
  '短期使用、刚到美国或暂时不想建立复杂账户关系。',
  '希望先控制支出，再观察实际使用量和信号。',
  '只需要少量线路，不依赖复杂的设备促销。',
  '需要灵活停用、换套餐或测试不同网络。',
  '国际旅行、回国保号、收验证码等需求明确，且计划本身支持相关能力。',
];

const caution = [
  '家庭多线很多，只看单线价格可能误判总成本。',
  '想依赖长期设备分期、Trade-in 或持续 Bill Credit。',
  '把“Prepaid”直接理解成“不需要任何身份或账户条件”。',
  '默认所有 Prepaid 都支持同样的国际漫游、Wi-Fi Calling 或 eSIM。',
  '只根据品牌判断信号，而没有确认主要使用地点。',
];

const checks = [
  ['使用多久', '短期、长期、回国保号或长期在美，判断逻辑不同。'],
  ['需要几条线', '单线与家庭多线的成本结构和管理方式可能不同。'],
  ['设备是否要一起换', '如果需要融资、Trade-in 或账单抵扣，要把设备条件一起看。'],
  ['国际使用方式', '漫游、Wi-Fi Calling、收短信、双卡与保号不是同一个需求。'],
  ['手机是否兼容', 'eSIM、IMEI、频段和解锁状态都可能影响实际使用。'],
  ['账户资格', '是否需要 SSN、信用、地址、付款方式或其他条件，取决于具体计划。'],
];

export default function PrepaidPage() {
  return (
    <main className="min-h-screen bg-[#FCFDFE] px-4 py-10 text-[#202D3A] sm:px-6 sm:py-14">
      <div className="mx-auto max-w-5xl">
        <Link href="/cellphone" className="text-sm font-semibold text-[#246B95] hover:text-[#103B60]">
          ← 返回手机问题
        </Link>

        <header className="py-10 sm:py-14">
          <p className="mb-4 inline-flex rounded-full bg-[#F4F8FA] px-3 py-1 text-sm font-semibold text-[#246B95]">
            Prepaid 使用场景判断
          </p>
          <h1 className="max-w-4xl text-3xl font-black leading-tight tracking-tight sm:text-5xl">
            什么时候适合 Prepaid？先看使用场景，不先看品牌
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#526170] sm:text-lg">
            预付费不是“便宜版手机套餐”的同义词。它的价值在于账户结构和使用灵活性；
            是否适合你，要结合时长、线路、设备、国际使用和真实资格判断。
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-[#D5E5EC] bg-white p-6 sm:p-7">
            <CheckCircle2 className="text-[#246B95]" size={28} />
            <h2 className="mt-4 text-2xl font-black">这些情况可以优先考虑 Prepaid</h2>
            <ul className="mt-5 space-y-3">
              {fit.map((item) => (
                <li key={item} className="flex gap-3 leading-7 text-[#526170]">
                  <CheckCircle2 className="mt-1 shrink-0 text-[#2786A5]" size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-[#D5E5EC] bg-[#F4F8FA] p-6 sm:p-7">
            <CircleHelp className="text-[#246B95]" size={28} />
            <h2 className="mt-4 text-2xl font-black">这些情况不要只凭 “Prepaid” 三个字决定</h2>
            <ul className="mt-5 space-y-3">
              {caution.map((item) => (
                <li key={item} className="flex gap-3 leading-7 text-[#526170]">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#2786A5]" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="py-12">
          <h2 className="text-2xl font-black sm:text-3xl">比较 Prepaid 前先确认 6 件事</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {checks.map(([title, desc], index) => (
              <article key={title} className="rounded-2xl border border-[#D5E5EC] bg-white p-5">
                <p className="text-sm font-bold text-[#2786A5]">0{index + 1}</p>
                <h3 className="mt-1 text-lg font-black">{title}</h3>
                <p className="mt-2 leading-7 text-[#526170]">{desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-[#D5E5EC] bg-white p-6 sm:p-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <Smartphone className="text-[#246B95]" size={26} />
              <h3 className="mt-3 font-black">设备与 eSIM</h3>
              <p className="mt-2 text-sm leading-6 text-[#526170]">先确认手机解锁、IMEI 兼容和 eSIM 支持，不要把“支持 eSIM”理解成所有机型都可直接激活。</p>
            </div>
            <div>
              <Globe2 className="text-[#246B95]" size={26} />
              <h3 className="mt-3 font-black">回国与国际使用</h3>
              <p className="mt-2 text-sm leading-6 text-[#526170]">收短信、漫游、Wi-Fi Calling 和长期保号要分别确认，不能假设某个 Prepaid 计划全部支持。</p>
            </div>
            <div>
              <ShieldCheck className="text-[#246B95]" size={26} />
              <h3 className="mt-3 font-black">网页的核实边界</h3>
              <p className="mt-2 text-sm leading-6 text-[#526170]">具体价格、资格、国际规则、设备兼容和激活条件会变化，需要按当前计划与账户确认。</p>
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href="/cellphone/faq/prepaid-vs-postpaid" className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#D5E5EC] bg-white px-6 py-3.5 font-bold text-[#246B95] hover:border-[#246B95]">
              先理解 Prepaid / Postpaid
              <ArrowRight size={18} />
            </Link>
            <Link href="/cellphone/diagnosis" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#164B78] px-6 py-3.5 font-bold text-white hover:bg-[#103B60]">
              还有具体问题？进入诊断
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-[#D5E5EC] bg-[#F4F8FA] p-6 sm:p-8">
          <h2 className="text-2xl font-black">需要准确数字或资格时</h2>
          <p className="mt-3 max-w-3xl leading-7 text-[#526170]">
            当前价格、计划资格、国际使用、SIM/eSIM 激活、号码保留和设备兼容，网页无法替代实时账户与计划核实。
          </p>
          <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#164B78] px-6 py-3.5 font-bold text-white hover:bg-[#103B60]">
            需要时进入人工核实
            <ArrowRight size={18} />
          </Link>
        </section>

        <p className="py-8 text-center text-xs leading-6 text-[#526170]">
          最后更新：2026年10月｜套餐、资格、国际使用、设备兼容与激活条件可能随运营商政策变化，请以当前计划与实际账户为准。
        </p>
      </div>
    </main>
  );
}
