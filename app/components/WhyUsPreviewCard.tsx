import Link from 'next/link'

export default function WhyUsPreviewCard() {
  return (
    <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50">
      <h3 className="font-bold text-lg mb-2">
        为什么很多华人不直接找宽带官网？
      </h3>
      <p className="text-slate-600 text-sm mb-4">
        官网解决的是“如何下单”，  
        而我们更多帮助判断「值不值得换、要不要处理」。
      </p>

      <Link
        href="/why-us"
        className="inline-flex items-center text-blue-600 font-semibold hover:underline"
      >
        官网客服 vs 鸿达电讯客服的区别 →
      </Link>
    </div>
  )
}
