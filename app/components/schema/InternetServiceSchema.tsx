export default function InternetServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://baymediastar.com/internet#service",
    "name": "美国宽带办理与账单优化服务",
    "description":
      "鸿达电讯 Bay Media Star 为华人用户提供美国宽带办理、地址覆盖查询、账单涨价优化服务，支持 Xfinity、AT&T Fiber、Spectrum、Frontier 等主流运营商，全程中文协助。",
    "provider": {
      "@id": "https://baymediastar.com/#localbusiness"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "United States"
    },
    "serviceType": [
      "美国宽带新装",
      "宽带账单涨价优化",
      "地址覆盖查询",
      "光纤宽带办理",
      "Cable 宽带办理"
    ],
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceLocation": {
        "@type": "Place",
        "name": "Online & Phone Service"
      }
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Chinese-speaking users in the United States"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "0",
      "description": "宽带地址查询与账单分析免费，安装费用以运营商官方为准"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
