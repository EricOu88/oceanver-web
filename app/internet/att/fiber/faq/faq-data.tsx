export interface FAQItem {
  question: string
  answer: string
}

export interface FAQCategory {
  id: string
  title: string
  items: FAQItem[]
}

export const allCategories: FAQCategory[] = [
  {
    id: 'address-coverage',
    title: '地址与覆盖',
    items: [
      {
        question: '我的地址能不能装 AT&T Fiber？',
        answer: '需要用完整地址核实当前可用服务。查询结果可能受单元、楼宇线路和运营商地址记录影响，最终应以当前地址的服务资格和实际订单结果为准。',
      },
      {
        question: '为什么邻居能装，我的地址却不一定能装？',
        answer: '覆盖可能按具体地址、单元或楼宇线路记录，而不是只按街区判断。请核对门牌、单元号和地址格式；仅凭邻居的服务情况不能确认你的地址可用。',
      },
      {
        question: '公寓或多户住宅能不能装 Fiber？',
        answer: '这取决于楼宇线路、具体单元和物业安装条件。查询时应确认完整单元信息，并进一步核实是否需要物业许可或现场安装。',
      },
      {
        question: '网站显示不可用，是不是就一定没有覆盖？',
        answer: '单次查询结果可能受到地址记录或输入格式影响，但也可能确实没有可订服务。先检查地址和单元信息，再通过运营商当前渠道核对；不要只根据附近覆盖作结论。',
      },
    ],
  },
  {
    id: 'whether-to-switch',
    title: '要不要换',
    items: [
      {
        question: 'AT&T Fiber 一定比 Cable 好吗？',
        answer: '不一定。不同技术和服务在上传表现、覆盖、室内 Wi-Fi、价格与安装条件上可能不同；应结合具体地址、实际需求和当前方案比较。',
      },
      {
        question: '什么情况先不要急着换 Fiber？',
        answer: '如果问题只出现在一个房间、一台设备，或只是一次短暂中断，原因可能在 Wi-Fi、设备或临时故障。先排查当前问题，再判断是否需要更换服务。',
      },
      {
        question: '什么情况值得认真比较 AT&T Fiber？',
        answer: '当地址可用性已核实，且当前服务表现或长期成本与需求不匹配时，可以比较 Fiber。还应把安装条件、设备、旧服务取消和持续费用一并纳入判断。',
      },
    ],
  },
  {
    id: 'speed-wifi',
    title: '网速与 Wi-Fi',
    items: [
      {
        question: '装了 Fiber 以后，家里的 Wi-Fi 就一定更快吗？',
        answer: '不一定。入户服务速度、网关性能、摆放位置、墙体和终端设备都会影响 Wi-Fi 体验。先区分有线连接与无线连接的表现，再判断瓶颈所在。',
      },
      {
        question: '有 Fiber，为什么某个房间还是慢？',
        answer: '单个房间信号弱可能与距离、墙体干扰、网关位置或终端有关，不足以证明入户线路有问题。可在不同房间和设备上比较，并进行有线测试。',
      },
      {
        question: '什么时候上传速度更值得关注？',
        answer: '远程办公、视频会议、云备份或频繁上传大文件时，上行表现可能影响体验。应先确认实际工作负载和当前连接表现，再比较服务，而不是只看下载宣传值。',
      },
    ],
  },
  {
    id: 'billing-long-term-cost',
    title: '账单与长期成本',
    items: [
      {
        question: '比较 Fiber 时，为什么不能只看月费？',
        answer: '月费之外还可能有折扣变化、设备、安装、税费或旧服务取消成本。对照当前账单与新服务的持续费用，并确认哪些收费是一次性的。',
      },
      {
        question: '怎么比较现有宽带和 Fiber 的长期成本？',
        answer: '先分别记录当前服务和候选服务的 recurring 月费、优惠条件、设备与安装项目，再纳入旧服务取消或重叠账期等成本。具体金额和资格以当前账户、地址及订单条款为准。',
      },
      {
        question: 'Promotion 或 Bill Credit 变化应该怎么看？',
        answer: '对照账单上的优惠名称、适用线路、开始或结束说明及抵扣记录，并检查账户或方案是否近期变更。优惠资格和生效时间可能因账户而异，需以当前账单和账户规则核实。',
      },
    ],
  },
  {
    id: 'installation-equipment',
    title: '安装与设备',
    items: [
      {
        question: '申请或比较 Fiber 安装前需要确认什么？',
        answer: '先确认地址资格、楼宇或物业要求、现有线路和预计安装方式。是否需要现场施工、预约及相关费用，应以当前地址和订单信息为准。',
      },
      {
        question: '安装是否一定需要技术人员上门？',
        answer: '安装方式可能取决于地址线路、设备和订单安排。不要仅凭其他地址的经验判断；确认当前订单说明以及是否需要现场访问。',
      },
      {
        question: 'Router 或 Gateway 会影响实际体验吗？',
        answer: '会，设备能力、位置、设置和连接方式都可能影响无线体验。可先比较有线与 Wi-Fi、不同终端的表现；设备兼容和账户认证要求需按当前服务规则确认。',
      },
    ],
  },
  {
    id: 'cancellation-account',
    title: '取消、账户与其他问题',
    items: [
      {
        question: '换到 Fiber 前，要不要先取消旧宽带？',
        answer: '不要只根据安装日期决定。先确认新服务已能正常使用，再核对旧账户的计费周期、取消条件、设备归还要求和可能的重叠费用。',
      },
      {
        question: '安装失败或地址条件变化怎么办？',
        answer: '保存订单状态、地址信息和沟通记录，并确认失败原因属于覆盖、物业、线路还是预约问题。后续可选方案、费用或重新安排情况需由当前账户和订单核实。',
      },
      {
        question: '什么时候需要人工核实？',
        answer: '涉及地址资格、订单状态、设备余额、账单争议、促销抵扣或取消条款时，公开信息无法替代具体账户核实。准备相关账单或订单项目即可，避免发送密码、完整账号或敏感身份资料。',
      },
    ],
  },
]

export function getAllFAQsForSchema(): FAQItem[] {
  return allCategories.flatMap((category) => category.items)
}
