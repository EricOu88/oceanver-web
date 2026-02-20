// app/components/seo/ServiceSchemas.tsx
'use client';

type SchemaProps = {
  schema: Record<string, any>;
};

function JsonLd({ schema }: SchemaProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ================= 全站：所有核心服务 ================= */
export default function ServiceSchemas() {
  return (
    <>
      {/* 美国预付费电话卡 */}
      <JsonLd
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": "https://baymediastar.com/#service-prepaid-cellphone",
          "name": "美国预付费电话卡中文办理",
          "serviceType": "Prepaid Mobile Phone Service",
          "description":
            "提供 AT&T、T-Mobile、Ultra、Gen Mobile 等美国预付费电话卡中文办理服务，无需 SSN，适合新移民与留学生。",
          "provider": {
            "@id": "https://baymediastar.com/#localbusiness"
          },
          "areaServed": {
            "@type": "AdministrativeArea",
            "name": "United States"
          }
        }}
      />

      {/* 宽带账单优化 / 月费涨价 */}
      <JsonLd
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": "https://baymediastar.com/#service-internet-optimization",
          "name": "美国宽带账单优化与月费涨价处理",
          "serviceType": "Internet Bill Optimization Service",
          "description":
            "协助客户应对 Xfinity、AT&T Fiber、Spectrum 等宽带月费上涨问题，通过方案调整帮助降低账单。",
          "provider": {
            "@id": "https://baymediastar.com/#localbusiness"
          },
          "areaServed": {
            "@type": "AdministrativeArea",
            "name": "United States"
          }
        }}
      />

      {/* 申请安装宽带 */}
      <JsonLd
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": "https://baymediastar.com/#service-internet-installation",
          "name": "美国宽带申请与安装服务",
          "serviceType": "Internet Installation Service",
          "description":
            "提供 Xfinity、AT&T Fiber、Spectrum 等美国宽带申请与安装服务，中文协助，适合新装或搬家用户。",
          "provider": {
            "@id": "https://baymediastar.com/#localbusiness"
          },
          "areaServed": {
            "@type": "AdministrativeArea",
            "name": "United States"
          }
        }}
      />
    </>
  );
}

/* ================= /cellphone 专属 ================= */
export function CellphoneServiceSchema() {
  return (
    <JsonLd
      schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://baymediastar.com/cellphone#service",
        "name": "美国预付费电话卡与中文协助服务",
        "serviceType": "Prepaid Mobile Phone Service",
        "description":
          "提供 AT&T、T-Mobile、Ultra、Gen Mobile 等美国预付费电话卡办理服务，支持无 SSN，中文协助。",
        "provider": {
          "@id": "https://baymediastar.com/#localbusiness"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "United States"
        }
      }}
    />
  );
}

/* ================= /internet 专属 ================= */
export function InternetServiceSchema() {
  return (
    <>
      <JsonLd
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": "https://baymediastar.com/internet#service-optimization",
          "name": "美国宽带账单优化服务",
          "serviceType": "Internet Bill Optimization Service",
          "description":
            "帮助用户处理 Xfinity、AT&T Fiber、Spectrum 等宽带账单上涨问题，优化月费。",
          "provider": {
            "@id": "https://baymediastar.com/#localbusiness"
          },
          "areaServed": {
            "@type": "AdministrativeArea",
            "name": "United States"
          }
        }}
      />

      <JsonLd
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": "https://baymediastar.com/internet#service-installation",
          "name": "美国宽带申请与安装服务",
          "serviceType": "Internet Installation Service",
          "description":
            "提供美国宽带新装、转网与搬家申请服务，支持 Xfinity、AT&T Fiber、Spectrum。",
          "provider": {
            "@id": "https://baymediastar.com/#localbusiness"
          },
          "areaServed": {
            "@type": "AdministrativeArea",
            "name": "United States"
          }
        }}
      />
    </>
  );
}
