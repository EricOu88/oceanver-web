export default function AttFiberServiceSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'AT&T Fiber 光纤宽带',
          serviceType: 'Fiber Internet Service',
          areaServed: [
            'Fremont',
            'Milpitas',
            'San Jose',
            'Sunnyvale',
            'Santa Clara',
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
