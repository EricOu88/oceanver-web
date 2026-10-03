import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '美国政府免费手机卡申请指南 - 鸿达电信中文办理',
  description:
    '美国政府 Lifeline 手机服务申请指南，说明 Medicaid 等资格条件、可用福利和申请前需要核实的信息。项目资格与覆盖范围以所在州及官方规则为准。',
  alternates: {
    canonical: 'https://baymediastar.com/cellphone/government',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function GovernmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
