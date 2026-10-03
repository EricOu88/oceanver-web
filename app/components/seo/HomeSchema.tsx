// app/components/seo/HomeSchema.tsx
// Server Component - 首页专用结构化数据（WebPage + WebSite + Service + FAQPage）
// 引用全站 Organization：https://oceanver.com/#organization

const DOMAIN = "https://oceanver.com";
const ORGANIZATION_ID = `${DOMAIN}/#organization`;
const HOMEPAGE_URL = `${DOMAIN}/`;

const graph = [
  // 0) WebSite（品牌与站点信号）
  {
    "@type": "WebSite",
    "@id": `${DOMAIN}/#website`,
    url: DOMAIN,
    name: "美国鸿达电讯",
    inLanguage: ["zh-CN", "en-US"],
    publisher: { "@id": ORGANIZATION_ID },
  },

  // 1) WebPage（首页实体，明确"关于谁/更新"）
  {
    "@type": "WebPage",
    "@id": `${HOMEPAGE_URL}#webpage`,
    url: HOMEPAGE_URL,
    name: "美国鸿达电讯｜全美手机套餐与宽带中文信息",
    inLanguage: "zh-CN",
    about: { "@id": ORGANIZATION_ID },
    isPartOf: { "@id": `${DOMAIN}/#website` },
    // 如果你有首页促销更新时间，可把它同步到这里（推荐）
    // dateModified: "2026-01-31",
  },

  // 2) Service - Internet
  {
    "@type": "Service",
    "@id": `${DOMAIN}/#internet-service`,
    name: "美国家庭宽带与 WiFi 安装服务",
    serviceType: "Home Internet & WiFi Setup",
    description:
      "为美国中文用户提供 Xfinity、AT&T、Spectrum、Frontier 等宽带信息、账单变化判断与常见问题说明。",
    url: `${DOMAIN}/internet`,
    provider: { "@type": "Organization", "@id": ORGANIZATION_ID },
    areaServed: { "@type": "Country", name: "United States" },
    availableChannel: [
      {
        "@type": "ServiceChannel",
        serviceUrl: `${DOMAIN}/internet`,
        availableLanguage: ["zh-CN", "en-US"],
      },
    ],
    mainEntityOfPage: { "@id": `${HOMEPAGE_URL}#webpage` },
  },

  // 3) Service - Cellphone
  {
    "@type": "Service",
    "@id": `${DOMAIN}/#cellphone-service`,
    name: "美国手机卡与 eSIM 办理服务",
    serviceType: "US Cellphone Plans & SIM / eSIM",
    description:
      "提供 AT&T、T-Mobile、Verizon 及多家虚拟运营商手机卡与 eSIM 办理，支持新移民、留学生及全美远程开卡。",
    url: `${DOMAIN}/cellphone`,
    provider: { "@type": "Organization", "@id": ORGANIZATION_ID },
    areaServed: { "@type": "Country", name: "United States" },
    availableChannel: [
      {
        "@type": "ServiceChannel",
        serviceUrl: `${DOMAIN}/cellphone`,
        availableLanguage: ["zh-CN", "en-US"],
      },
    ],
    mainEntityOfPage: { "@id": `${HOMEPAGE_URL}#webpage` },
  },

  // 4) Service - Bill optimization
  {
    "@type": "Service",
    "@id": `${DOMAIN}/#bill-optimization-service`,
    name: "手机与宽带账单涨价优化服务",
    serviceType: "Phone & Internet Bill Optimization",
    description:
      "帮你检查美国手机与宽带账单是否被涨价或多收费，协助与运营商沟通续约、换套餐或换运营商，尽量帮你降回合理价格。",
    url: `${DOMAIN}/bill-optimization`,
    provider: { "@type": "Organization", "@id": ORGANIZATION_ID },
    areaServed: [
      { "@type": "Country", name: "United States" },
    ],
    availableChannel: [
      {
        "@type": "ServiceChannel",
        serviceUrl: `${DOMAIN}/bill-optimization`,
        availableLanguage: ["zh-CN", "en-US"],
      },
    ],
    mainEntityOfPage: { "@id": `${HOMEPAGE_URL}#webpage` },
  },

  // 5) FAQPage（AI/引用友好）
  {
    "@type": "FAQPage",
    "@id": `${HOMEPAGE_URL}#home-faq`,
    isPartOf: { "@id": `${HOMEPAGE_URL}#webpage` },
    about: { "@id": ORGANIZATION_ID },
    inLanguage: "zh-CN",
    mainEntity: [
      {
        "@type": "Question",
        name: "没有 SSN 能不能在美国办理宽带？",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "部分运营商允许使用护照加押金的方式办理宽带，是否可办取决于地址覆盖与政策。建议先把地址发给鸿达电讯客服，我们帮你确认可用运营商与是否需要押金。",
        },
      },
      {
        "@type": "Question",
        name: "宽带账单突然涨价怎么办？",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "多数宽带套餐首年有优惠价，优惠期结束后会自动涨价。你可以在涨价前后咨询鸿达电讯，评估续约、换套餐或换运营商，争取把月费降回合理区间。",
        },
      },
      {
        "@type": "Question",
        name: "新移民或留学生第一次来美国，先办手机卡还是先装宽带？",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "一般建议先办手机卡以便收验证码、联系公寓和银行，再根据长期居住地址选择合适宽带。鸿达电讯可根据城市与需求，帮你一起规划手机卡与宽带方案。",
        },
      },
      {
        "@type": "Question",
        name: "人在湾区或洛杉矶以外，可以远程办理宽带和手机卡吗？",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "可以。鸿达电讯支持全美大部分州的宽带与手机卡远程办理，你提供地址与基本信息后，我们会根据覆盖情况推荐运营商与套餐，并协助完成下单或预约安装。",
        },
      },
    ],
  },
];

export function HomeSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default HomeSchema;
