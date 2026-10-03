import type { Metadata } from 'next';
import AboutEnClient from './AboutEnClient';

export const metadata: Metadata = {
  title: 'About Us | Bay Area Chinese Telecom Provider',
  description:
    'Bay Media Star is a trusted telecom provider for Chinese-speaking communities across the U.S. Authorized partner with AT&T, T-Mobile, Verizon, Xfinity, and ADT. Fremont store + nationwide service.',
  alternates: {
    canonical: 'https://oceanver.com/en/about',
  },
  openGraph: {
    title: 'About Bay Media Star | Bay Area Chinese Telecom Provider',
    description:
      'Trusted telecom provider for Chinese-speaking communities. Authorized partner with major carriers. Fremont store + nationwide service.',
    url: 'https://baymediastar.com/en/about',
    siteName: 'Bay Media Star',
    locale: 'en_US',
    type: 'website',
  },
};

export default function AboutEnPage() {
  return <AboutEnClient />;
}
