export default function InternetServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://oceanver.com/internet#service",
    "name": "美国宽带办理与账单优化服务",
    "description":
      "美国鸿达电讯为美国中文用户提供宽带信息、地址条件查询、账单变化判断和中文协助，涉及运营商方案以账户与地址核实为准。",
    "provider": {
      "@id": "https://oceanver.com/#organization"
    },
    "areaServed": {
      "@type": "Country",
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
