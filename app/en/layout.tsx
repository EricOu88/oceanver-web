import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { getHreflangAlternates } from '@/lib/hreflang-utils';

/* ================== English Site Default Metadata ================== */
export const metadata: Metadata = {
  title: {
    default: 'US Cell Phone & Internet Plans with Chinese Support',
    template: '%s | Bay Media Star',
  },

  description:
    'Bay Media Star offers US cell phone plans, home internet, and ADT security services with Chinese-speaking support. Visit our Fremont store or get nationwide remote service. No SSN required.',

  alternates: getHreflangAlternates('/en'),

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://baymediastar.com/en',
    siteName: 'Bay Media Star',
    title: 'US Cell Phone & Internet Plans with Chinese Support',
    description:
      'Bay Media Star provides US cell phone plans, home internet, and ADT security with Chinese-speaking support. Fremont store + nationwide remote service.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bay Media Star - US Telecom Services with Chinese Support',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'US Cell Phone & Internet Plans with Chinese Support | Bay Media Star',
    description:
      'Bay Area Fremont store + nationwide remote service. Cell phone plans, home internet, ADT security with Chinese-speaking support.',
    images: ['/og-image.png'],
  },

};

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return children;
}
