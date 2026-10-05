const QUESTIONS = [
  {
    question: '账单有问题，应该找运营商还是找你们？',
    answer: '现有账户的故障、停机、正式账单争议、退款、取消和设备维修，通常需要联系运营商官方处理。我们可以帮助你整理账单、判断可能原因，以及下一步该核实什么。',
  },
  {
    question: '哪些信息不看账户或地址就无法判断？',
    answer: '地址覆盖、账户资格、设备余额、Trade-in 状态、当前优惠和部分安装条件，都需要结合实际账户或地址信息核实。',
  },
  {
    question: '什么时候不建议自己先取消服务或转号？',
    answer: '涉及号码保留、设备分期、eSIM、主账户关系或新地址尚未确认时，不应先取消原服务，以免造成号码、设备或服务中断问题。',
  },
];

export default function FAQSection() {
  return (
    <section aria-labelledby="homepage-faq-title" className="home-faq-section bg-[#FCFDFE] px-5 md:px-6">
      <div className="mx-auto max-w-[1120px]">
        <h2 id="homepage-faq-title" className="text-left text-3xl font-black text-[#202D3A] md:text-4xl">
          常见问题
        </h2>
        <div className="mt-7 max-w-[860px] md:mt-8">
          {QUESTIONS.map((item) => (
            <details key={item.question} className="group border-b border-[#E9EEF2] py-5 first:border-t">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[17px] font-bold leading-7 text-[#202D3A] md:text-lg">
                {item.question}
                <span aria-hidden="true" className="shrink-0 text-[#164B78] transition group-open:rotate-180">⌄</span>
              </summary>
              <p className="mt-4 max-w-[860px] leading-[1.75] text-[#526170]">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
