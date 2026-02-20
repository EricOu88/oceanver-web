export default function FrontierServiceSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Frontier Fiber 光纤宽带',
          serviceType: 'Fiber Internet Service',
          areaServed: [
            'San Jose',
            'Sunnyvale',
            'Santa Clara',
            'Fremont',
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
