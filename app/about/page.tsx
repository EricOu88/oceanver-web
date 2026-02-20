import type { Metadata } from 'next';
import { getHreflangAlternates } from '@/lib/hreflang-utils';

export const metadata: Metadata = {
  title: '关于我们｜鸿达电讯 Bay Media Star｜加州中文通信顾问',
  description:
    '了解鸿达电信(Bay Media Star)：我们深耕旧金山湾区多年，致力于为全美华人提供专业、高效的电信咨询与一站式安装服务。凭借丰富的行业资源，我们已成为办理美国手机卡、家庭宽带及安防监控的首选中文平台，始终坚持客户至上。',
  alternates: getHreflangAlternates('/about'),
};

const AboutSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "关于我们 - 鸿达电讯 Bay Media Star",
    "about": {
      "@type": "LocalBusiness",
      "name": "Bay Media Star 鸿达电讯",
      "url": "https://baymediastar.com",
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "San Francisco Bay Area" },
        { "@type": "AdministrativeArea", "name": "Los Angeles Metropolitan Area" }
      ],
      "serviceType": [
        "中文宽带顾问",
        "美国手机套餐咨询",
        "通信账单优化"
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-slate-800">
      <AboutSchema />

      <h1 className="text-3xl md:text-4xl font-extrabold mb-6">
        关于我们｜鸿达电讯 Bay Media Star
      </h1>

      <section className="space-y-4 leading-relaxed">
        <p>
          鸿达电讯 Bay Media Star 是一家面向加州华人的中文通信顾问平台，
          长期服务于 <strong>旧金山湾区</strong> 与 <strong>洛杉矶地区</strong> 的家庭、
          留学生以及小型商户。
        </p>

        <p>
          我们并非传统意义上的电信门店，也不以推销套餐为核心目标。
          相反，我们更像是一名站在用户立场的通信顾问，
          根据客户所在城市、住宅类型（独栋 / 公寓 / HOA）以及真实使用需求，
          协助分析并对比 AT&T、Xfinity、Spectrum、Frontier 等主流运营商方案。
        </p>

        <p>
          对于刚到美国的新移民或留学生来说，
          英文合同、隐藏条款、账单上涨往往是通信服务中最大的困扰。
          鸿达电讯坚持用中文讲清价格结构、合约期限以及后续可能发生的账单变化，
          帮助客户少踩坑、不被反复涨价。
        </p>

        <p>
          无论你是在湾区新搬家、在洛杉矶首次安装家庭网络，
          还是需要为小型办公室寻找稳定可靠的通信方案，
          我们都希望通过专业、透明的中文沟通，
          帮你做出更适合自己的选择。
        </p>
      </section>
    </main>
  );
}
