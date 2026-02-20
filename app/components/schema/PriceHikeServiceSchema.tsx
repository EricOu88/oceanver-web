'use client';

export default function PriceHikeServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://baymediastar.com/internet/price-hike#service",
    "name": "美国宽带账单优化 / 涨价处理服务",
    "serviceType": "Broadband Bill Optimization",
    "description":
      "为 Xfinity、Spectrum、AT&T、Frontier 等美国宽带用户提供中文账单审核与涨价处理服务，协助争取 retention 优惠、降低月费或升级网速，支持全美远程办理。",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "provider": {
      "@id": "https://baymediastar.com/#localbusiness"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "name": "免费账单检查（Free Bill Audit）",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
