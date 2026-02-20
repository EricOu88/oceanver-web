'use client';

import Link from 'next/link';

export default function FAQSection() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">常见问题（FAQ）</h2>

      <div className="space-y-3">
        <details className="group bg-white rounded-xl border px-5 py-3">
          <summary className="cursor-pointer font-semibold flex justify-between">
            我的宽带账单从 $45 直接涨到 $95，是不是被坑了？
            <span className="group-open:rotate-180 transition">⌄</span>
          </summary>
          <p className="mt-2 text-slate-600">
            这是美国宽带最常见的涨价套路，新用户优惠结束后价格自动上涨。很多客户在我们协助核账后，成功把费用降回到 $60
            左右。
          </p>
        </details>

        <details className="group bg-white rounded-xl border px-5 py-3">
          <summary className="cursor-pointer font-semibold flex justify-between">
            合约到期后是不是一定会涨？
            <span className="group-open:rotate-180 transition">⌄</span>
          </summary>
          <p className="mt-2 text-slate-600">
            答: 是的，许多促销价格有期限，到期后会按标准价格收费。只要用户不主动处理，价格几乎一定会上涨。
          </p>
        </details>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 text-center">
          <p className="text-slate-800 font-semibold mb-2">不确定自己是不是被涨价了？</p>
          <p className="text-slate-600 mb-3">我们可以帮你快速看一眼账单，判断有没有降价空间</p>
          <Link
            href="/bill-optimization"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-bold shadow-lg"
          >
            免费帮我看账单
          </Link>
        </div>

        <details className="group bg-white rounded-xl border px-5 py-3">
          <summary className="cursor-pointer font-semibold flex justify-between">
            关于美国的宽带费,为什么每年涨啊？有没有解决办法？
            <span className="group-open:rotate-180 transition">⌄</span>
          </summary>
          <p className="mt-2 text-slate-600">
            很多人会比较周边其他运营商的报价，鸿达电讯可以帮忙与客服协商. 节约您的时间。
          </p>
        </details>
      </div>
    </section>
  );
}
