export interface InternetFAQEntry {
  question: string
  answer: string
  relatedProviders: { name: string; href: string }[]
}

export const internetFAQData: InternetFAQEntry[] = [
  {
    question: '光纤、Cable 和 DSL 宽带有什么区别？',
    answer:
      '光纤（Fiber）通过光信号传输，上下行对称、延迟低、最稳定，适合远程办公和在线会议；Cable 用同轴电缆，下行快、上行较慢，高峰时段可能略降速，覆盖广；DSL 走电话线，速度与稳定性最弱，多用于偏远地区。选型时优先看地址有无光纤覆盖，有则选 Fiber，否则选 Cable；DSL 仅作兜底。',
    relatedProviders: [
      { name: 'AT&T Fiber', href: '/internet/att/fiber/faq' },
      { name: 'Frontier', href: '/internet/frontier/faq' },
      { name: 'Xfinity', href: '/internet/xfinity/faq' },
      { name: 'Spectrum', href: '/internet/spectrum/faq' },
    ],
  },
  {
    question: '美国宽带新装一般要多久？安装流程是怎样的？',
    answer:
      '通常预约后 3–7 个工作日可上门安装；部分运营商提供自安装套件（Self-Install Kit），邮寄 2–5 天，按说明自助激活。流程大致为：官网或电话下单 → 选预约时间 → 技术员上门或收自装包 → 接 Modem、激活 → 测速验收。公寓需确认物业允许打孔/走线，否则可能装不上；自装仅适用于已有线缆到户的地址。',
    relatedProviders: [
      { name: 'Xfinity', href: '/internet/xfinity/faq' },
      { name: 'Spectrum', href: '/internet/spectrum/faq' },
      { name: 'AT&T Fiber', href: '/internet/att/fiber/faq' },
      { name: 'Frontier', href: '/internet/frontier/faq' },
    ],
  },
  {
    question: '为什么宽带第一年便宜、第二年就涨价？',
    answer:
      '部分美国宽带套餐包含有期限的促销折扣，优惠结束后账单可能恢复为当时适用的标准价格。具体优惠期限和费用变化以账单及运营商条款为准。发现涨价时，可先检查优惠、AutoPay、设备费和附加服务，再向运营商确认续约、换套餐或转网条件。',
    relatedProviders: [
      { name: 'Xfinity', href: '/internet/xfinity/faq' },
      { name: 'Spectrum', href: '/internet/spectrum/faq' },
      { name: 'AT&T Fiber', href: '/internet/att/fiber/faq' },
      { name: 'Frontier', href: '/internet/frontier/faq' },
    ],
  },
  {
    question: '宽带一定要签合约吗？有没有无合约方案？',
    answer:
      '不一定。运营商可能提供有合约或无合约方案，具体月费、促销期限和提前取消条件会因地址、套餐及账户而异。若计划长住，可比较合约期内的总成本；若可能短期居住或搬家，则应重点查看取消和移机条款。签约前务必确认提前解约费用及适用条件。',
    relatedProviders: [
      { name: 'Spectrum', href: '/internet/spectrum/faq' },
      { name: 'Xfinity', href: '/internet/xfinity/faq' },
      { name: 'AT&T Fiber', href: '/internet/att/fiber/faq' },
      { name: 'Frontier', href: '/internet/frontier/faq' },
    ],
  },
  {
    question: '设备费、安装费合理吗？可以自带 Modem 吗？',
    answer:
      '设备费和安装费会因运营商、地址、设备及安装方式而异。部分运营商允许自带兼容 Modem 或 Router，但需要先核对官方兼容列表。办理前应确认含设备、税费和附加项目后的总月费，并询问是否提供自安装选项。',
    relatedProviders: [
      { name: 'Xfinity', href: '/internet/xfinity/faq' },
      { name: 'Spectrum', href: '/internet/spectrum/faq' },
      { name: 'AT&T Fiber', href: '/internet/att/fiber/faq' },
      { name: 'Frontier', href: '/internet/frontier/faq' },
    ],
  },
  {
    question: '促销到期前该怎么操作，才不容易被涨价？',
    answer:
      '发现优惠即将到期时，可联系运营商确认到期后的价格、续约条件和其他可选套餐。若现有方案不合适，再结合地址覆盖、账户资格、设备费用和实际需求比较其他运营商。具体优惠期限和资格以运营商当前条款及审核结果为准。',
    relatedProviders: [
      { name: 'Xfinity', href: '/internet/xfinity/faq' },
      { name: 'Spectrum', href: '/internet/spectrum/faq' },
      { name: 'AT&T Fiber', href: '/internet/att/fiber/faq' },
      { name: 'Frontier', href: '/internet/frontier/faq' },
    ],
  },
  {
    question: '宽带速度多少才够用？家庭和公寓怎么选？',
    answer:
      '单人轻量上网、视频 50–100Mbps 即可；2–3 人同时办公、上课、看 4K，建议 200–300Mbps；多人多设备、游戏、远程办公则 500Mbps 及以上更稳。公寓若已有线缆到户，可优先选自安装套餐；独栋房可关注光纤是否覆盖。不必盲目追千兆，按实际人数与用途选，避免多付钱。',
    relatedProviders: [
      { name: 'AT&T Fiber', href: '/internet/att/fiber/faq' },
      { name: 'Xfinity', href: '/internet/xfinity/faq' },
      { name: 'Spectrum', href: '/internet/spectrum/faq' },
      { name: 'Frontier', href: '/internet/frontier/faq' },
    ],
  },
  {
    question: '同一地址不同运营商价格差很多，为什么？',
    answer:
      '主因包括技术类型、当地覆盖情况、促销期限、设备费与附加服务不同。不能只看官网起价，应对比包含设备、税费和其他项目后的实际账单，并结合地址可用方案逐项判断。',
    relatedProviders: [
      { name: 'AT&T Fiber', href: '/internet/att/fiber/faq' },
      { name: 'Xfinity', href: '/internet/xfinity/faq' },
      { name: 'Spectrum', href: '/internet/spectrum/faq' },
      { name: 'Frontier', href: '/internet/frontier/faq' },
    ],
  },
  {
    question: '怎么查自己地址能装哪些宽带？',
    answer:
      '可到各运营商官网输入地址查询覆盖，但系统结果仍可能受楼内线路、接口或物业限制影响。建议交叉查询多家运营商，并在下单前向运营商确认现场安装条件，尤其是公寓和新建住宅。',
    relatedProviders: [
      { name: 'AT&T Fiber', href: '/internet/att/fiber/faq' },
      { name: 'Xfinity', href: '/internet/xfinity/faq' },
      { name: 'Spectrum', href: '/internet/spectrum/faq' },
      { name: 'Frontier', href: '/internet/frontier/faq' },
    ],
  },
  {
    question: '没有 SSN 能办美国宽带吗？',
    answer:
      '是否可以在没有 SSN 的情况下办理，取决于运营商、套餐、地址、身份材料及账户审核要求。部分情况可能需要其他身份证明或押金，具体应以运营商当前政策和审核结果为准。',
    relatedProviders: [
      { name: 'Xfinity', href: '/internet/xfinity/faq' },
      { name: 'Spectrum', href: '/internet/spectrum/faq' },
      { name: 'AT&T Fiber', href: '/internet/att/fiber/faq' },
      { name: 'Frontier', href: '/internet/frontier/faq' },
    ],
  },
  {
    question: '华人、新移民如何用中文办理宽带？',
    answer:
      '可直接联系运营商客服，或选择提供中文协助的服务渠道。办理前应确认地址覆盖、套餐价格、设备费、安装安排及账户资格；最终可用方案和费用以运营商当前政策及审核结果为准。',
    relatedProviders: [
      { name: 'Xfinity', href: '/internet/xfinity/faq' },
      { name: 'Spectrum', href: '/internet/spectrum/faq' },
      { name: 'AT&T Fiber', href: '/internet/att/fiber/faq' },
      { name: 'Frontier', href: '/internet/frontier/faq' },
    ],
  },
  {
    question: '可以只装宽带、不绑手机或电视吗？',
    answer:
      '可以。主流运营商都提供「仅宽带」套餐，不必捆绑手机或电视。销售有时会推捆绑方案，若不需要，直接要求「Internet Only」即可。只装宽带通常更便宜，也更好比价；若日后想加电视或手机，再单独追加即可。',
    relatedProviders: [
      { name: 'Xfinity', href: '/internet/xfinity/faq' },
      { name: 'Spectrum', href: '/internet/spectrum/faq' },
      { name: 'AT&T Fiber', href: '/internet/att/fiber/faq' },
      { name: 'Frontier', href: '/internet/frontier/faq' },
    ],
  },
]
