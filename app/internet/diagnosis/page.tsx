import type { Metadata } from 'next'
import type { QADocument } from '@/ai/index/types'
import DiagnosisClient from './DiagnosisClient'
import internetIssues from '../../../content/qa/internet/customer-issues.json'
import billingIssues from '../../../content/qa/billing/customer-issues.json'

const diagnosisKnowledgeIds = [
  'xfinity-smartmove-active-service-001',
  'xfinity-wifi-dead-zone-001',
  'internet-new-address-existing-account-001',
  'xfinity-equipment-return-charge-001',
]

const diagnosisKnowledge = [...internetIssues, ...billingIssues].filter(
  (doc) =>
    diagnosisKnowledgeIds.includes(doc.id) &&
    doc.review_status === 'approved' &&
    doc.public_case === true,
) as QADocument[]

const title = '美国宽带问题诊断｜账单、网速、Wi-Fi、覆盖、安装｜美国鸿达电讯'
const description =
  '宽带账单涨价、网速慢、Wi-Fi 信号差、断网、地址覆盖、搬家或设备退还出问题时，先通过中文诊断判断常见原因、检查步骤和下一步处理方向。'

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: 'https://oceanver.com/internet/diagnosis' },
  openGraph: {
    title,
    description,
    url: 'https://oceanver.com/internet/diagnosis',
    siteName: 'Oceanver',
    locale: 'zh_CN',
    type: 'website',
  },
}

export default function InternetDiagnosisPage() {
  return <DiagnosisClient knowledge={diagnosisKnowledge} />
}
