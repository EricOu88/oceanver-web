import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '美国政府免费手机卡申请指南 - 鸿达电信中文办理',
  description:
    '美国政府免费手机卡（Lifeline）申请指南。符合 Medicaid（白卡）、福利资格即可申请，每月 $0 月费，含通话、短信和上网。旧金山湾区 Fremont 实体店中文协助办理，覆盖 San Jose、Milpitas、Cupertino 及全美 50 州。',
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
