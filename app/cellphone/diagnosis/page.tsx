import type { Metadata } from 'next';
import DiagnosisClient from './DiagnosisClient';

export const metadata: Metadata = {
  title: '手机 Trade-in 抵扣为什么消失？账单检查指南 | Oceanver',
  description:
    '了解手机 trade-in credit 可能延迟或停止显示的原因，以及如何检查促销名称、设备分期、线路资格和设备状态。具体结果需按账户与促销条款核实。',
  alternates: { canonical: 'https://oceanver.com/cellphone/diagnosis' },
  openGraph: {
    title: '手机 Trade-in 抵扣为什么消失？账单检查指南 | Oceanver',
    description: '检查手机 trade-in credit、设备分期、线路资格和促销状态。',
    url: 'https://oceanver.com/cellphone/diagnosis',
    siteName: 'Oceanver',
    locale: 'zh_CN',
    type: 'website',
  },
};

export default function CellphoneDiagnosisPage() {
  return <DiagnosisClient />;
}
