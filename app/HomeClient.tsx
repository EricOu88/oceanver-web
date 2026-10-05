import Link from 'next/link';
import FAQSection from '@/app/components/home/FaqSection';
import ContactEntry from '@/app/components/contact/ContactEntry';
import { getPublicCases } from '@/lib/cases/getPublicCases';

const HOMEPAGE_CASE_PREVIEWS: Record<string, { title: string; conclusion: string; boundary: string; link: string }> = {
  // source: xfinity-equipment-return-charge-001
  // preview written: 2026-10-04
  'xfinity-equipment-return-charge-001': {
    title: '宽带设备已退还，账单仍收费怎么办？',
    conclusion: '退还设备后仍被收费时，应核对退还凭证、设备登记和账单周期。',
    boundary: '仅凭账单不能确认登记状态或调整资格。',
    link: '查看设备退还收费案例',
  },
  // source: mobile-lost-device-installment-001
  // preview written: 2026-10-04
  'mobile-lost-device-installment-001': {
    title: '手机丢失后，设备分期怎么处理？',
    conclusion: '手机遗失后，应分别核实线路保护、设备分期、保险与促销状态。',
    boundary: '具体余额和账户处理方式需按账户核实。',
    link: '查看手机分期案例',
  },
  // source: xfinity-wifi-dead-zone-001
  // preview written: 2026-10-04
  'xfinity-wifi-dead-zone-001': {
    title: 'Wi-Fi 屋内部分区域信号差怎么办？',
    conclusion: '局部信号弱时，先比较不同位置和设备，再判断问题范围。',
    boundary: '单凭局部信号不能确认是线路、设备或室内覆盖问题。',
    link: '查看 Wi-Fi 死角案例',
  },
};

export default async function HomeClient() {
  const approvedCases = await getPublicCases();
  const cases = Object.entries(HOMEPAGE_CASE_PREVIEWS).flatMap(([id, preview]) => {
    const item = approvedCases.find((entry) => entry.id === id);
    return item?.public_case === true && item.review_status === 'approved' ? [{ id, preview }] : [];
  });

  return (
    <>
      <section aria-labelledby="action-principle-title" className="home-action-section bg-white px-5 md:px-6">
        <div className="mx-auto max-w-[900px] text-center">
          <h2 id="action-principle-title" className="text-3xl font-black leading-tight text-[#202D3A] md:text-4xl xl:text-[40px]">
            多数问题先查原因，再决定要不要改变
          </h2>
          <p className="mx-auto mt-5 max-w-[780px] text-lg leading-[1.8] text-[#40505F]">
            账单金额变化本身，不足以说明需要换方案；网络变慢，也可能来自 Wi-Fi、设备或线路，而不一定是套餐速度不足。准备转号时，在号码、设备余额和账户状态没有确认前，也不应先停用旧线路。
          </p>
          <p className="mx-auto mt-4 max-w-[780px] text-[13px] leading-6 text-slate-400 md:text-sm">
            美国鸿达电讯提供面向美国中文用户的通信问题整理与判断信息，不代表任何运营商官方。具体账户、服务资格、地址覆盖、收费调整及退款结果，以实际账户与运营商记录为准。
          </p>
        </div>
      </section>

      <section aria-labelledby="total-cost-title" className="home-total-cost-section bg-[#EDF5F9] px-5 md:px-6">
        <div className="mx-auto grid max-w-[1120px] items-start gap-6 md:grid-cols-[0.85fr_1.15fr] md:gap-12 xl:gap-16">
          <h2 id="total-cost-title" className="text-3xl font-black leading-tight text-[#202D3A] md:text-[34px] xl:text-[38px]">不要只看月费，要看改变后的总成本</h2>
          <div>
            <p className="text-lg leading-[1.8] text-[#526170]">
              <strong className="font-semibold text-[#202D3A]">月费更低，不代表改变一定更省。</strong> 设备余额、Trade-in credit、激活或安装费用、优惠期限、优惠结束后的价格，以及号码或服务中断风险，都会改变真实成本。比较的不是广告价格，而是继续使用和改变方案在同一周期内的总成本。
            </p>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-[15px] font-semibold">
              <Link href="/internet/price-hike" className="text-[#164B78] hover:text-[#103B60]">查看宽带涨价后如何判断是否值得改变 →</Link>
              <Link href="/cellphone/diagnosis" className="text-[#164B78] hover:text-[#103B60]">查看手机转号、设备分期与 Trade-in 问题 →</Link>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="homepage-cases-title" className="home-case-section bg-[#FCFDFE] px-5 md:px-6">
        <div className="mx-auto max-w-[1120px]">
          <h2 id="homepage-cases-title" className="text-3xl font-black text-[#202D3A] md:text-4xl">
            真实问题：为什么不能只看表面现象
          </h2>
          <div className="mt-8 grid items-stretch gap-5 md:grid-cols-3 md:gap-6">
            {cases.map(({ id, preview }) => (
              <article key={id} className="flex h-full min-w-0 flex-col rounded-3xl border border-[#E9EEF2] bg-white p-6 md:p-7">
                <h3 className="text-lg font-black leading-7 text-[#202D3A] xl:text-xl">{preview.title}</h3>
                <p className="mt-4 flex-1 leading-7 text-[#526170]">{preview.conclusion}</p>
                <div className="mt-4">
                  <p className="text-[13px] font-semibold leading-5 text-[#526170]">适用边界</p>
                  <p className="mt-1 text-sm leading-6 text-slate-500">{preview.boundary}</p>
                </div>
                <Link href="/why-us" className="mt-5 inline-flex font-bold text-[#164B78] hover:text-[#103B60]">
                  {preview.link} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="prepare-title" className="home-prepare-section bg-white px-5 md:px-6">
        <div className="mx-auto grid max-w-[1040px] items-start gap-5 md:grid-cols-[0.82fr_1.18fr] md:gap-12">
          <h2 id="prepare-title" className="text-balance text-2xl font-black leading-tight text-[#202D3A] md:text-3xl">进入具体判断前，可以先准备什么</h2>
          <div>
            <p className="leading-7 text-[#526170]">
              准备最近两期账单、问题发生时间、设备状态，以及与问题相关的地址、退还凭证或账户资料，可以减少误判。不要在公开页面提交完整账号、SSN、身份证件或银行卡信息。
            </p>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-[15px] font-semibold">
              <Link href="/cellphone/diagnosis" className="text-[#164B78] hover:text-[#103B60]">查看手机问题需要核实什么 →</Link>
              <Link href="/internet/diagnosis" className="text-[#164B78] hover:text-[#103B60]">查看宽带问题需要核实什么 →</Link>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />

      <section id="contact" className="home-contact-section bg-[#F7FAFC] px-5 md:px-6">
        <div className="mx-auto max-w-6xl">
          <ContactEntry
            variant="homepage"
            title="看完还是不确定？"
            subtitle="如果问题涉及具体账户、地址覆盖、设备余额、Trade-in、退款、转号资格或当前优惠，需要结合实际资料进一步核实。"
          />
        </div>
      </section>
    </>
  );
}
