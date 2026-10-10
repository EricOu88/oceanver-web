/**
 * AT&T Fiber FAQ 独立页面内容数据
 * 每个页面包含完整的问题、答案内容
 */

export interface ATTFiberFAQContent {
  question: string
  slug: string
  summary: string
  content: {
    whyCommon: string
    officialRules: string
    realUsage: string
    suitableFor: string
  }
}

export const attFiberFAQContent: Record<string, ATTFiberFAQContent> = {
  'att-fiber-price-increase': {
    question: 'AT&T Fiber 账单为什么涨价？先看这几项费用变化',
    slug: 'att-fiber-price-increase',
    summary: '账单上涨可能来自持续月费变化、优惠抵扣、设备服务项目、按比例收费或一次性项目；应先对照近期账单确认变化来源。',
    content: {
      whyCommon: '账单总额变化不一定代表基础月费单独上涨。优惠或账单抵扣变化、设备或服务项目、按比例收费以及一次性费用，都可能影响当期金额。',
      officialRules: '先查看最近两到三期账单中的 recurring internet charge、Promotion / Credit、AutoPay、设备或服务项目、按比例收费和一次性费用，并留意账户或服务变更记录。优惠资格与金额应以当前账单、账户和订单条款为准。',
      realUsage: '如果只有当期总额变化，先区分 recurring 项目是否持续变化，以及是否只是单次调整。对照项目名称、计费周期和抵扣记录；仅凭总额或“优惠结束”的猜测，不能确认涨价原因。',
      suitableFor: '网页无法读取你的具体账户，因此不能确认某个 Promotion/Credit 是否仍有效，也不能判断某项 recurring charge 会不会继续。基础月费连续变化、优惠抵扣与账单显示不一致、出现无法识别的 recurring 项目，或调整后金额仍无法从账单条目解释时，应结合实际账单和账户记录核实。',
    },
  },
  'att-fiber-frequent-disconnections': {
    question: 'AT&T Fiber 经常断网怎么办？',
    slug: 'att-fiber-frequent-disconnections',
    summary: '先比较受影响的设备、连接方式和发生时间，再检查网关状态与区域 outage；自测只能缩小范围，不能单独确认运营商线路故障。',
    content: {
      whyCommon: '反复断网可能出现在单台设备、无线连接、网关或区域服务等不同层面。相似的表象不代表原因相同，也不能仅凭一次断线判定线路故障。',
      officialRules: '先记录断网时间与频率，确认所有设备还是单台设备受影响；比较 Wi-Fi 与有线连接；查看 Gateway / ONT 指示状态，并检查账户 App 中是否有区域 outage 信息。需要上门检查、线路判断或补偿时，应向运营商核实当前账户和事件记录。',
      realUsage: '如果只有一台设备异常，先检查设备和连接；如果多个设备的 Wi-Fi 与有线连接都受影响，再结合网关状态和 outage 信息继续排查。自测结果只能缩小问题范围，不能直接确认运营商线路故障。',
      suitableFor: '网页无法读取 Gateway 后台或区域线路记录，也不能仅凭断网现象确认是运营商线路问题。多个设备反复同时掉线、有线连接也中断、网关状态持续异常，或账户状态与实际服务表现不一致时，应结合 outage、设备和账户记录核实。',
    },
  },
  'att-fiber-outage-duration': {
    question: 'AT&T Fiber outage 停网多久能恢复？',
    slug: 'att-fiber-outage-duration',
    summary: '停网恢复时间取决于故障范围、线路、设备、施工及当地处理情况，公开信息无法可靠预测具体恢复时间。',
    content: {
      whyCommon: '停网可能来自区域事件、家庭网关或线路等不同情况，用户通常需要先确认影响范围和账户中显示的事件状态。恢复进度会随具体故障和处理情况变化。',
      officialRules: '记录 outage 开始时间、账户 App 中的状态、case number、显示的恢复信息，以及问题是否反复出现。恢复时间取决于故障范围、线路、设备、施工和当地处理情况；应以账户当前显示及运营商针对该事件的更新为准。',
      realUsage: '先确认是多个设备都无法连接，还是只有家庭 Wi-Fi 或单台设备异常；再查看当前 outage 信息。若状态没有解释实际情况或中断反复发生，可联系运营商并提供记录继续核实，不要根据一般经验预估恢复时间。',
      suitableFor: '网页无法预测具体恢复时间，也无法确认某次 outage 的后台处理状态。账户没有显示 outage 但多个设备仍断网、恢复后问题反复出现、显示状态与实际连接不一致，或需要确认事件记录与账单处理时，应结合当前事件和账户记录核实。',
    },
  },
  'att-fiber-equipment-fee': {
    question: 'AT&T Fiber 设备要收费吗？',
    slug: 'att-fiber-equipment-fee',
    summary: '先从账单确认设备项目是 recurring 还是一次性收费，再核对设备、服务套餐和账户记录；自备设备要求需按当前规则确认。',
    content: {
      whyCommon: '设备相关收费可能是持续租用项目、额外设备、设备更换，也可能是单次费用。不能只根据设备名称或其他用户的账单推断当前账户收费。',
      officialRules: '先核对账单中的设备 line item、计费周期和金额，再与账户设备清单、近期设备更换及服务订单对照。是否允许自备设备、Gateway 是否与服务或认证要求绑定，应以当前账户和运营商技术要求为准。',
      realUsage: '确认该项目是否 recurring、是否对应实际使用的设备，以及是否与套餐或近期变更有关。若账单项目与设备清单不一致，保存账单和订单记录并向运营商核实；不要仅因收费名称就购买替代设备。',
      suitableFor: '网页无法确认你的设备是否已正确登记、是否属于当前服务必需配置，也不能仅凭设备名称判断费用是否应取消。设备项目重复出现但设备已不在使用、设备清单与账单不符、近期换设备后收费变化时，应结合设备清单和账户记录核实。',
    },
  },
  'att-fiber-cancel-termination-fee': {
    question: 'AT&T Fiber 怎么取消？有违约金吗？',
    slug: 'att-fiber-cancel-termination-fee',
    summary: '取消条件、可能费用和设备归还要求取决于当前协议、订单与账户；应先核对最终账单和设备清单。',
    content: {
      whyCommon: '取消服务时，最终金额可能受协议条款、当前优惠、计费周期、设备状态和取消生效时间影响。不能根据过去的促销或他人的账户经历判断是否有提前终止费用。',
      officialRules: '取消前核对当前 agreement、order confirmation、持续收费项目、可能的提前终止条件、账户设备清单和 final bill 说明。设备归还方式、期限或相关费用应以当前账户显示和运营商给出的要求为准。',
      realUsage: '保存协议、取消确认、设备归还凭证和最终账单，并对照取消前后的计费项目。若最终账单与确认记录不一致，先逐项核对并联系运营商；不要仅依据旧经验判断是否有违约金或设备费用。',
      suitableFor: '网页无法确认你的协议是否包含提前终止条件，也不能判断具体设备归还或最终账单结果。协议中存在尚未确认的终止条件、最终账单仍有 recurring charge、设备清单与实际归还情况不一致，或取消确认日期与计费记录不符时，应结合协议和账户记录核实。',
    },
  },
  'att-fiber-buried-wire-installation': {
    question: 'AT&T Fiber 安装后光纤线一直铺在草坪上没人埋，怎么办？',
    slug: 'att-fiber-buried-wire-installation',
    summary: '先记录临时线路的位置、安装日期、风险和工单信息，再核实埋线或后续施工工单状态；不要自行移动或处理线路。',
    content: {
      whyCommon: '安装后临时光纤线可能仍铺在草坪、地面或公共区域，后续施工状态需要按具体地址和工单核实。线路位置也可能带来通行或意外损坏风险。',
      officialRules: '记录安装日期、临时线路位置、是否影响通行或割草、可见损坏风险以及工单或 case number，并向运营商确认 bury / drop work order 状态和后续处理要求。施工安排依地址和工单而异，不应预估完成日期。',
      realUsage: '不要自行移动、切断或掩埋线路。如果线路有明显损坏或安全风险，尽快向运营商报告并确认临时处理方式；如果只是等待后续施工，保留工单记录并通过当前账户渠道查询状态。',
      suitableFor: '网页无法读取具体地址的施工安排或工单后台状态，也不能预测埋线完成日期。临时线路影响通行或维护、存在被车辆或工具损坏的风险、线路已经受损，或工单状态与现场情况不一致时，应结合当前工单和现场情况核实。',
    },
  },
}
