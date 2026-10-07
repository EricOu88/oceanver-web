import type { Metadata } from 'next';
import Link from 'next/link';
import DiagnosisClient from './DiagnosisClient';
import type { QADocument } from '@/ai/index/types';
import mobileIssues from '../../../content/qa/mobile/customer-issues.json';
import billingIssues from '../../../content/qa/billing/customer-issues.json';

const diagnosisKnowledgeIds = [
  'att-first-bill-higher-001',
  'att-installment-early-payoff-001',
  'att-mobile-slow-network-001',
  'mobile-esim-deleted-restore-001',
  'mobile-lost-device-installment-001',
];

const diagnosisKnowledge = [...mobileIssues, ...billingIssues]
  .filter((doc) => diagnosisKnowledgeIds.includes(doc.id) && doc.review_status === 'approved' && doc.public_case === true) as QADocument[];

export const metadata: Metadata = {
  title: { absolute: '美国手机问题诊断｜账单、信号、转网、eSIM｜美国鸿达电讯' },
  description:
    '手机账单变贵、信号差、转网失败、eSIM、设备分期或 Trade-in 出问题时，先通过中文诊断判断常见原因、检查步骤和下一步处理方向。',
  alternates: { canonical: 'https://oceanver.com/cellphone/diagnosis' },
  openGraph: {
    title: '美国手机问题诊断｜账单、信号、转网、eSIM｜美国鸿达电讯',
    description: '手机账单变贵、信号差、转网失败、eSIM、设备分期或 Trade-in 出问题时，先通过中文诊断判断常见原因、检查步骤和下一步处理方向。',
    url: 'https://oceanver.com/cellphone/diagnosis',
    siteName: '美国鸿达电讯',
    locale: 'zh_CN',
    type: 'website',
  },
};

export default function CellphoneDiagnosisPage() {
  return (
    <>
      <DiagnosisClient knowledge={diagnosisKnowledge} />
      <nav aria-label="手机相关问题" className="mx-auto mb-10 grid max-w-5xl gap-3 px-4 sm:grid-cols-2 lg:grid-cols-4 sm:px-6">
        <Link href="/cellphone/faq" className="rounded-2xl border border-[#D5E5EC] bg-white p-4 font-bold text-[#246B95]">手机问题知识库</Link>
        <Link href="/cellphone/family-plan-guide" className="rounded-2xl border border-[#D5E5EC] bg-white p-4 font-bold text-[#246B95]">家庭多线判断</Link>
        <Link href="/cellphone/prepaid" className="rounded-2xl border border-[#D5E5EC] bg-white p-4 font-bold text-[#246B95]">Prepaid / 国际使用</Link>
        <Link href="/cellphone/providers" className="rounded-2xl border border-[#D5E5EC] bg-white p-4 font-bold text-[#246B95]">已确定要比较方案</Link>
      </nav>
    </>
  );
}
