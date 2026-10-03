import type { Metadata } from 'next';
import EnHomeClient from './EnHomeClient';

export const metadata: Metadata = {
  title: 'US Cell Phone Plans & Internet with Chinese Support | Bay Area',
  description:
    'Bay Media Star provides US cell phone plans (AT&T, T-Mobile, Verizon), home internet (Xfinity, Spectrum, AT&T Fiber), and ADT security with Chinese-speaking support. No SSN required. Fremont store + nationwide remote service.',
  alternates: {
    canonical: 'https://oceanver.com/en',
    languages: {
      'zh-CN': 'https://baymediastar.com',
      'en-US': 'https://baymediastar.com/en',
    },
  },
  openGraph: {
    title: 'US Cell Phone Plans & Internet with Chinese Support | Bay Media Star',
    description:
      'Bay Area Fremont store + nationwide remote service. Cell phone plans, home internet, ADT security with Chinese-speaking support. No SSN required.',
    url: 'https://baymediastar.com/en',
    siteName: 'Bay Media Star',
    locale: 'en_US',
    type: 'website',
  },
};

export default function EnglishHomePage() {
  return <EnHomeClient />;
}
