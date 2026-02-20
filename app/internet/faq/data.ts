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
      '美国宽带普遍采用「新用户促销价」：首 12–24 个月享受折扣，到期后自动恢复标准价，涨幅常见 50%–150%。例如首年 $29.99/月，第二年变成 $79.99/月。这不是 bug，而是合同里写明的条款。应对方式：促销到期前 30–60 天联系客服续约或换套餐、考虑转网拿新用户价，或通过授权代理协助续约与谈价。',
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
      '不一定。多数运营商同时提供有合约与无合约方案：有合约通常月费更低、促销多，但需承诺 12–24 个月，提前取消可能有违约金；无合约可随时取消，月费一般高 $10–20。若计划长住且不搬家，选合约更省；若可能短期居住或搬家，选无合约更灵活。签前务必看清提前解约条款及搬家、覆盖不足等免责情形。',
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
      '设备费通常 $5–15/月，安装费 $50–100 较常见；部分促销可免安装费，自安装也能省一笔。许多运营商支持自带兼容 Modem（BYOD），能省月租，但需确认型号在官方兼容列表内；Router 一般可自备。办理前问清「含税含设备总月费」及是否有安装费减免、自装选项，避免只看宣传价。',
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
      '在促销到期前 30–60 天主动联系客服，要求续约或更换套餐，多数会给出新的促销价。若当前运营商不愿让步，可考虑转网，以新用户身份享受别家优惠。同时留意「价格锁定」类套餐，虽起价略高，但能锁 2–3 年。通过代理商办理的，可交由对方协助续约与谈价，省心且常能拿到更好条件。',
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
      '主因包括：技术类型（Fiber 通常比 Cable 贵 $10–20/月）、当地竞争（仅一家覆盖往往更贵）、促销力度与期限、设备费与各类附加费不同。不能只看官网「起价」，要对比「含设备、税费、杂费后的真实月费」。有的基础价低但设备费高，总支出反而更贵；建议逐项算清再选。',
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
      '可到各运营商官网输入地址查询覆盖，但官网结果有时与现场不符（楼内线路、物业限制等）。更稳妥的做法：用多家官网交叉查，或通过授权代理商、本地宽带办理点代为查址；他们常有实际安装经验，能判断「系统显示可装」是否真的可装。避免只看一家就下单，尤其公寓、新房。',
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
      '可以。部分运营商与套餐支持无 SSN 办理，通常需提供护照、签证、地址证明等；具体以运营商政策为准。新移民、留学生若不想直接联系英文客服，可通过提供中文服务的授权代理商办理，由对方协助选套餐、查覆盖、走流程，省事且易沟通。',
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
      '可选两种方式：一是直接联系运营商客服（部分有中文或翻译），二是通过提供中文服务的宽带代理商办理。代理商通常可代为查地址覆盖、比价、选套餐、办续约，全程中文沟通，免去自己打英文客服的麻烦；有的还能免安装费、拿额外优惠。适合不熟悉本地宽带、怕踩坑的新移民与留学生。',
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
