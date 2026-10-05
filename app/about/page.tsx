import type { Metadata } from 'next';
import { getCanonicalUrl } from '@/lib/seo-utils';
import CommunityDiscussionByPath from '@/app/components/community/CommunityDiscussionByPath';

export const metadata: Metadata = {
  title: '关于我们｜美国鸿达电讯',
  description:
    '了解美国鸿达电讯：面向美国中文用户整理手机套餐、家庭宽带、通信账单和常见通信问题信息，并在需要时提供中文协助。',
  alternates: { canonical: getCanonicalUrl('/about') },
};

const AboutSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "关于我们 - 美国鸿达电讯",
    "about": { "@id": "https://oceanver.com/#organization" }
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
    <>
    <main className="max-w-4xl mx-auto px-6 py-12 text-slate-800">
      <AboutSchema />

      <h1 className="text-3xl md:text-4xl font-extrabold mb-6">
        关于我们｜美国鸿达电讯
      </h1>

      <section className="space-y-4 leading-relaxed">
        <p>
          美国鸿达电讯面向美国中文用户整理手机套餐、家庭宽带、通信账单和常见问题信息，
          并在需要核对账户、地址或运营商资格时提供中文协助。
        </p>

        <p>
          我们帮助用户先理解费用变化、套餐条件和服务限制，再结合实际使用需求，
          对比 AT&T、Xfinity、Spectrum、Frontier 等运营商提供的信息。
        </p>

        <p>
          对于刚到美国的新移民或留学生来说，
          英文合同、隐藏条款、账单上涨往往是通信服务中最大的困扰。
          鸿达电讯坚持用中文讲清价格结构、合约期限以及后续可能发生的账单变化，
          帮助客户少踩坑、不被反复涨价。
        </p>

        <p>
          无论是手机账单、家庭宽带费用，还是是否调整套餐或更换运营商，
          我们都希望通过清晰、审慎的中文说明，帮助用户判断下一步是否需要处理。
        </p>
      </section>
    </main>
    <div className="mx-auto max-w-4xl px-6"><CommunityDiscussionByPath /></div>
    </>
  );
}
