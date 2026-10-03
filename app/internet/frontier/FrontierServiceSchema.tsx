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
          areaServed: { '@type': 'Country', name: 'United States' },
          provider: {
            '@type': 'Organization',
            '@id': 'https://oceanver.com/#organization',
            name: '美国鸿达电讯',
            url: 'https://oceanver.com',
            telephone: '+1-510-849-6191',
          },
        }),
      }}
    />
  )
}
