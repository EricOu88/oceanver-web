import Link from 'next/link';

export default function FAQSection() {
  return (
    <section className="max-w-4xl mx-auto bg-[#EDF5F9] px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">常见问题（FAQ）</h2>

      <div className="space-y-3">
        <details className="group bg-white rounded-xl border px-5 py-3">
          <summary className="cursor-pointer font-semibold flex justify-between">
            账单突然变贵，我应该先检查哪几项？
            <span className="group-open:rotate-180 transition">⌄</span>
          </summary>
          <p className="mt-2 text-slate-600">
            先看最近两期账单，确认是基础月费上涨、优惠结束、AutoPay 折扣失效，还是设备费、附加服务或一次性费用增加。再检查套餐、线路、设备和促销状态最近是否发生变化。如果仍看不出原因，再根据具体账户或地址条件进一步核实。
          </p>
        </details>

        <details className="group bg-white rounded-xl border px-5 py-3">
          <summary className="cursor-pointer font-semibold flex justify-between">
            优惠到期后一定要换运营商吗？
            <span className="group-open:rotate-180 transition">⌄</span>
          </summary>
          <p className="mt-2 text-slate-600">
            不一定。先比较当前价格、可用套餐、设备费用和实际使用需求。有时调整现有方案即可，有时换运营商才更合适。
          </p>
        </details>

        <details className="group bg-white rounded-xl border px-5 py-3">
          <summary className="cursor-pointer font-semibold flex justify-between">
            AutoPay 折扣为什么突然没有了？
            <span className="group-open:rotate-180 transition">⌄</span>
          </summary>
          <p className="mt-2 text-slate-600">
            可能与付款方式、银行卡类型、账户状态或运营商规则变化有关。先查看当前账单中的折扣项目以及付款设置。
          </p>
        </details>

        <details className="group bg-white rounded-xl border px-5 py-3">
          <summary className="cursor-pointer font-semibold flex justify-between">
            手机 Trade-in credit 为什么没有出现在账单上？
            <span className="group-open:rotate-180 transition">⌄</span>
          </summary>
          <p className="mt-2 text-slate-600">
            可能是抵扣尚未开始、账期延迟、线路或套餐资格变化、设备分期状态或旧设备评估仍在处理中。需要结合具体促销条件判断。
          </p>
        </details>

        <details className="group bg-white rounded-xl border px-5 py-3">
          <summary className="cursor-pointer font-semibold flex justify-between">
            宽带设备费为什么突然增加？
            <span className="group-open:rotate-180 transition">⌄</span>
          </summary>
          <p className="mt-2 text-slate-600">
            可能与 modem、router、gateway、Wi-Fi 扩展设备或设备优惠结束有关。先确认账单中新增的设备项目，再决定是否需要调整。
          </p>
        </details>

        <details className="group bg-white rounded-xl border px-5 py-3">
          <summary className="cursor-pointer font-semibold flex justify-between">
            这次账单变贵，是一次性费用还是以后每个月都会这样？
            <span className="group-open:rotate-180 transition">⌄</span>
          </summary>
          <p className="mt-2 text-slate-600">
            先比较前后两期账单。安装费、激活费、按比例计费等通常可能是一次性的；基础月费、设备费、附加服务或折扣消失则可能持续影响之后的账单。
          </p>
        </details>
      </div>

      <div className="mt-5 text-center">
        <Link href="/bill-optimization" className="text-sm font-semibold text-blue-700 hover:underline">
          查看完整账单判断指南 →
        </Link>
      </div>
    </section>
  );
}
