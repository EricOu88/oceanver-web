// app/components/schema/CellphoneServiceSchema.tsx

export default function CellphoneServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://oceanver.com/cellphone#service",
    "name": "美国预付费电话卡中文办理",
    "description":
      "提供美国 AT&T、T-Mobile、Ultra、Gen Mobile 等预付费电话卡中文办理服务，支持无 SSN、新移民、留学生、短期访美用户，可实体店或远程激活。",
    "serviceType": "Prepaid Mobile Phone Service",
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "United States"
    },
    "provider": {
      "@id": "https://oceanver.com/#organization"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceLocation": {
        "@type": "Place",
        "name": "Online & Phone Service"
      }
    },
    "audience": {
      "@type": "Audience",
      "audienceType": [
        "新移民",
        "留学生",
        "无 SSN 用户",
        "短期访美旅客"
      ]
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "0",
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
