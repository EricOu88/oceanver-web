/** Server Component：全球漫游卡文案，避免 Client  hydration mismatch */
export default function GlobalRoamingSection() {
  return (
    <section className="mb-14 p-6 md:p-8 bg-gradient-to-br from-rose-50 to-white border-2 border-rose-200 rounded-2xl shadow-sm">
      <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
        出国/回国漫游太贵？$50/30天全球漫游卡帮你省！
      </h2>
      <p className="text-gray-700 leading-relaxed mb-5">
        朋友们，家人们！新年带手机回国探亲、去世界各国旅游，最怕的就是漫游费太贵——有的运营商（例如 AT&T）一次漫游账单可能高达 $150。
        鸿达电讯来帮您解决这一难题：现推出最新【全球漫游手机卡】，境外仅 $50 / 30天（3个月以上更优惠），覆盖全球 100+ 国家和地区，让您出国也能安心上网、收短信、接电话。
      </p>
      <ul className="space-y-2 text-gray-700 mb-6">
        <li className="flex items-start gap-2">
          <span className="text-rose-500 font-bold shrink-0">•</span>
          <span><strong>覆盖：</strong>全球 100+ 国家和地区</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-rose-500 font-bold shrink-0">•</span>
          <span><strong>境外套餐：</strong>$50 / 30天（3个月以上更优惠）</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-rose-500 font-bold shrink-0">•</span>
          <span><strong>美国数据：</strong>含 2GB 高速美国数据流量</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-rose-500 font-bold shrink-0">•</span>
          <span><strong>通话短信：</strong>250 分钟通话 + 250 条短信</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-rose-500 font-bold shrink-0">•</span>
          <span><strong>功能支持：</strong>Wi-Fi Calling、呼叫转移等</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-rose-500 font-bold shrink-0">•</span>
          <span><strong>绑定号码：</strong>可绑定现有号码，世界各地都能收到来电与通知</span>
        </li>
      </ul>
      <p className="text-gray-600 text-sm mb-4">
        有兴趣的朋友，欢迎联系鸿达电讯：<a href="tel:5108496191" className="font-bold text-rose-600 hover:underline">510-849-6191</a>（支持中文咨询/远程办理）
      </p>
      <a
        href="tel:5108496191"
        className="inline-flex items-center justify-center w-full md:w-auto px-6 py-3 bg-[#E60023] hover:bg-rose-700 text-white font-bold rounded-xl transition-colors"
      >
        立即咨询全球漫游卡
      </a>
    </section>
  );
}
