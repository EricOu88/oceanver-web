'use client';

export default function PriceHikeServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://oceanver.com/internet/price-hike#service",
    "name": "美国宽带账单变化判断指南",
    "serviceType": "Broadband Bill Change Guide",
    "description":
      "说明美国宽带促销到期、AutoPay 折扣、设备费用、套餐变化和一次性收费的常见判断方法。具体价格、资格和账户变更以运营商账单及账户核实为准。",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "provider": {
      "@id": "https://oceanver.com/#localbusiness"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
