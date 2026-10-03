import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: 'https://oceanver.com/internet/spectrum/faq' },
}

export default function SpectrumFAQLayout({ children }: { children: React.ReactNode }) {
  return children
}
