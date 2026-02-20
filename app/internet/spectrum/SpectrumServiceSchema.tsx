export default function SpectrumServiceSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Spectrum 宽带',
          serviceType: 'Internet Service',
          areaServed: [
            'Fremont',
            'San Jose',
            'Daly City',
            'Bay Area',
            'United States',
          ],
          provider: {
            '@type': 'LocalBusiness',
            name: 'Bay Media Star 鸿达电讯',
            url: 'https://baymediastar.com',
          },
        }),
      }}
    />
  )
}
