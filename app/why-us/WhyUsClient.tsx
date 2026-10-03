'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import type { QADocument } from '@/ai/index/types';

type WhyUsClientProps = {
  cases: QADocument[];
};

const topicFilters = [
  { id: 'billing', label: '账单 / 费用' },
  { id: 'decision', label: '办理 / 换之前' },
  { id: 'mobile', label: '手机问题' },
  { id: 'internet', label: '宽带问题' },
] as const;

const caseFilters = [
  { id: 'all', label: '全部' },
  { id: 'mobile', label: '手机' },
  { id: 'internet', label: '宽带' },
  { id: 'equipment', label: '设备与分期' },
  { id: 'network', label: '网络故障' },
  { id: 'address', label: '地址 / 覆盖' },
  { id: 'account', label: '账户 / 售后' },
] as const;

const providerLabels: Record<string, string> = {
  att: 'AT&T',
  xfinity: 'Xfinity',
  spectrum: 'Spectrum',
  frontier: 'Frontier',
  tmobile: 'T-Mobile',
  verizon: 'Verizon',
};

const categoryLabels: Record<string, string> = {
  billing: '账单 / 费用',
  'pre-sales': '办理前选择',
  'after-sales': '账户 / 售后',
  coverage: '地址 / 覆盖',
  equipment: '设备与分期',
};

function searchableText(doc: QADocument) {
  return [doc.question_variants[0], doc.provider, doc.category, ...(doc.tags ?? [])]
    .join(' ')
    .toLowerCase();
}

function isTopic(doc: QADocument, topic: string) {
  const text = searchableText(doc);
  if (topic === 'billing') return doc.category === 'billing' || /账单|费用|billing/.test(text);
  if (topic === 'decision') return doc.stage === 'decide' || doc.category === 'pre-sales';
  if (topic === 'mobile') return /手机|esim|手机网络/.test(text) || ['att', 'tmobile', 'verizon', 'ultra', 'mint', 'genmobile'].includes(doc.provider);
  return /宽带|wifi|wi-fi|smartmove/.test(text) || ['xfinity', 'spectrum', 'frontier'].includes(doc.provider);
}

function matchesFilter(doc: QADocument, filter: string) {
  const text = searchableText(doc);
  switch (filter) {
    case 'mobile': return isTopic(doc, 'mobile');
    case 'internet': return isTopic(doc, 'internet');
    case 'equipment': return doc.category === 'equipment' || /设备|分期/.test(text);
    case 'network': return /网络|wi-fi|wifi|网速|信号|故障/.test(text);
    case 'address': return doc.category === 'coverage' || /地址|覆盖|smartmove/.test(text);
    case 'account': return doc.category === 'after-sales' || /账户|售后/.test(text);
    default: return true;
  }
}

function relatedLinks(doc: QADocument) {
  const links: { href: string; label: string }[] = [];
  if (isTopic(doc, 'mobile')) {
    links.push({ href: '/cellphone/diagnosis', label: '手机问题诊断' });
  } else if (isTopic(doc, 'internet')) {
    if (doc.category === 'billing' || /账单|费用/.test(searchableText(doc))) {
      links.push({ href: '/bill-optimization', label: '账单费用判断' });
    }
    links.push({ href: '/internet/diagnosis', label: '宽带问题诊断' });
  } else if (doc.stage === 'decide') {
    links.push({ href: isTopic(doc, 'mobile') ? '/cellphone/providers' : '/internet/providers', label: '运营商选择参考' });
  }
  return links;
}

function providerLabel(provider: string) {
  return providerLabels[provider] ?? '其他';
}

function CaseList({ title, items }: { title: string; items?: string[] }) {
  if (!items?.length) return null;
  return (
    <section>
      <h3 className="mb-2 font-semibold text-[#202D3A]">{title}</h3>
      <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-[#526170]">
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </section>
  );
}

export default function WhyUsClient({ cases }: WhyUsClientProps) {
  const [topic, setTopic] = useState<string | null>(null);
  const [filter, setFilter] = useState('all');
  const [provider, setProvider] = useState('all');

  const availableProviders = useMemo(
    () => [...new Set(cases.map((doc) => providerLabel(doc.provider)))],
    [cases],
  );
  const filteredCases = useMemo(() => cases.filter((doc) =>
    (!topic || isTopic(doc, topic)) &&
    matchesFilter(doc, filter) &&
    (provider === 'all' || providerLabel(doc.provider) === provider),
  ), [cases, filter, provider, topic]);

  return (
    <main className="min-h-screen bg-[#EDF5F9] px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="mb-5 inline-flex text-sm font-medium text-[#526170] transition hover:text-[#164B78]">
          ← 返回首页
        </Link>

        <header className="rounded-3xl bg-white px-5 py-8 shadow-sm sm:px-10 sm:py-12">
          <h1 className="text-center text-3xl font-extrabold leading-tight text-[#202D3A] sm:text-4xl">
            真实问题与处理案例
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-center leading-7 text-[#526170]">
            来自美国中文用户在手机、宽带、账单和办理过程中遇到的真实问题。我们整理问题背景、判断过程和处理方向，帮助你先看懂类似情况怎么判断。
          </p>
          <p className="mx-auto mt-4 max-w-3xl rounded-xl bg-[#F1F4F7] px-4 py-3 text-sm leading-6 text-[#526170]">
            不同时间、地区、账户和促销条件可能不同。案例用于说明判断方法，不代表相同情况一定得到相同结果。
          </p>
          <p className="mt-4 text-center text-sm text-[#526170]">
            这些内容来自实际客户问题和常见服务场景整理，并经过隐私处理和内容审核。
          </p>
        </header>

        <nav aria-label="案例主题" className="mt-7 flex flex-wrap justify-center gap-2">
          {topicFilters.map((item) => {
            const count = cases.filter((doc) => isTopic(doc, item.id)).length;
            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={topic === item.id}
                onClick={() => setTopic(topic === item.id ? null : item.id)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${topic === item.id ? 'border-[#164B78] bg-[#164B78] text-white' : 'border-[#D8E2EA] bg-white text-[#164B78] hover:bg-[#EDF5F9]'}`}
              >
                {item.label} <span className="ml-1 opacity-75">{count}</span>
              </button>
            );
          })}
        </nav>

        <section aria-label="筛选案例" className="mt-6 rounded-2xl border border-[#D8E2EA] bg-white p-4 sm:p-5">
          <div className="flex flex-wrap gap-2">
            {caseFilters.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={filter === item.id}
                onClick={() => setFilter(item.id)}
                className={`rounded-full px-3 py-2 text-sm transition ${filter === item.id ? 'bg-[#164B78] text-white' : 'bg-[#F1F4F7] text-[#526170] hover:bg-[#EAF2F6]'}`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-2" aria-label="按运营商筛选">
            <button
              type="button"
              aria-pressed={provider === 'all'}
              onClick={() => setProvider('all')}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold ${provider === 'all' ? 'bg-[#EDF5F9] text-[#164B78]' : 'text-[#526170] hover:bg-[#F1F4F7]'}`}
            >全部运营商</button>
            {availableProviders.map((label) => (
              <button
                key={label}
                type="button"
                aria-pressed={provider === label}
                onClick={() => setProvider(label)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold ${provider === label ? 'bg-[#EDF5F9] text-[#164B78]' : 'text-[#526170] hover:bg-[#F1F4F7]'}`}
              >{label}</button>
            ))}
          </div>
        </section>

        <p className="mb-3 mt-6 text-sm text-[#526170]" aria-live="polite">
          当前显示 {filteredCases.length} 条案例
        </p>
        <section className="space-y-4" aria-label="公开案例列表">
          {filteredCases.map((doc) => {
            const question = doc.question_variants[0];
            const links = relatedLinks(doc);
            return (
              <article key={doc.id} className="rounded-2xl border border-[#D8E2EA] bg-white p-5 shadow-sm sm:p-7">
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#246B95]">
                  <span className="rounded-full bg-[#EDF5F9] px-3 py-1">{providerLabel(doc.provider)}</span>
                  <span className="rounded-full bg-[#F1F4F7] px-3 py-1">{categoryLabels[doc.category] ?? doc.category}</span>
                  {doc.tags?.map((tag) => <span key={tag} className="rounded-full bg-[#F1F4F7] px-3 py-1">{tag}</span>)}
                  {doc.source_date && <time dateTime={doc.source_date}>{doc.source_date}</time>}
                </div>
                <h2 className="mt-4 text-xl font-bold leading-snug text-[#202D3A] sm:text-2xl">{question}</h2>
                {doc.summary && <p className="mt-3 leading-7 text-[#526170]">{doc.summary}</p>}
                <details className="group mt-5 border-t border-[#D8E2EA] pt-4">
                  <summary className="cursor-pointer font-semibold text-[#164B78] marker:text-[#2786A5]">
                    展开查看判断过程
                  </summary>
                  <div className="mt-5 space-y-5">
                    {doc.answer && <section><h3 className="mb-2 font-semibold text-[#202D3A]">为什么可能发生</h3><p className="text-sm leading-7 text-[#526170]">{doc.answer}</p></section>}
                    <CaseList title="先检查什么" items={doc.check_first} />
                    <CaseList title="自己可以做什么" items={doc.self_help} />
                    <CaseList title="目前还不能确定什么" items={doc.cannot_determine} />
                    {doc.next_step && <section><h3 className="mb-2 font-semibold text-[#202D3A]">处理方向</h3><p className="text-sm leading-7 text-[#526170]">{doc.next_step}</p></section>}
                    {links.length > 0 && (
                      <section>
                        <h3 className="mb-2 font-semibold text-[#202D3A]">类似情况继续看</h3>
                        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
                          {links.map((link) => <Link key={link.href} href={link.href} className="text-[#164B78] underline-offset-4 hover:text-[#103B60] hover:underline">{link.label} →</Link>)}
                        </div>
                      </section>
                    )}
                  </div>
                </details>
              </article>
            );
          })}
          {filteredCases.length === 0 && (
            <p className="rounded-2xl border border-[#D8E2EA] bg-white p-6 text-center text-[#526170]">
              目前没有符合这些条件的公开案例。
            </p>
          )}
        </section>

        <section className="mt-10 rounded-2xl bg-white p-6 text-center shadow-sm sm:p-8">
          <h2 className="text-xl font-bold text-[#202D3A]">没有找到和你一样的问题？</h2>
          <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-semibold">
            <Link href="/bill-optimization" className="text-[#164B78] hover:text-[#103B60]">查看账单判断 →</Link>
            <Link href="/cellphone/diagnosis" className="text-[#164B78] hover:text-[#103B60]">手机问题诊断 →</Link>
            <Link href="/internet/diagnosis" className="text-[#164B78] hover:text-[#103B60]">宽带问题诊断 →</Link>
            <Link href="/contact" className="text-[#164B78] hover:text-[#103B60]">联系中文客服 →</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
