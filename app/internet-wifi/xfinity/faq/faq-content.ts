/**
 * Xfinity FAQ 独立页面内容数据（前 5 篇：快速起量）
 */

export interface XfinityFAQContent {
  question: string
  slug: string
  summary: string
  content: {
    whyCommon: string
    officialRules: string
    realUsage: string
    suitableFor: string
  }
  seo: {
    title: string
    description: string
  }
}

export const xfinityFAQContent: Record<string, XfinityFAQContent> = {
  'xfinity-bill-sudden-increase': {
    question: 'Xfinity 账单为什么突然变贵？',
    slug: 'xfinity-bill-sudden-increase',
    summary: 'Xfinity 账单上涨可能来自 Promotion/Credit、基础月费、AutoPay、设备费、附加服务或一次性费用变化；应逐项比较账单，不能只看总额。',
    seo: {
      title: 'Xfinity 账单为什么突然变贵？先检查哪些费用变化',
      description: 'Xfinity 账单突然变贵时，先比较最近 2–3 期账单中的同一收费项目，检查优惠抵扣、基础月费、AutoPay、设备及一次性费用变化。',
    },
    content: {
      whyCommon: '账单总额变化不一定代表基础套餐价格上涨。Promotion 或 Credit 到期、基础 Internet 月费调整、AutoPay 条件变化、Gateway 等设备费用、附加服务，以及 prorated charge 或其他一次性费用，都可能影响当期总额。',
      officialRules: '结合当前账户和账单确认 Promotion/Credit 的名称与期限、基础月费、AutoPay 资格、设备登记、附加服务及收费周期。一次性费用与 recurring charge 不同，具体以账单明细和当前账户记录为准。',
      realUsage: '取最近 2–3 期账单，按同一个 line item 比较金额和服务周期，标记新增、消失或金额变化的项目。确认是持续月费还是一次性/prorated charge 后，再决定是否联系 Xfinity 核对，并保存账单和账户通知。',
      suitableFor: '如果同一 recurring charge 连续变化、Promotion/Credit 消失，或新增费用无法对应账户变更，更值得核实。如果差额仅来自已注明的一次性收费且下一期不再出现，则不一定需要调整服务。',
    },
  },
  'xfinity-billing-error-appeal': {
    question: '账单出错怎么申诉？',
    slug: 'xfinity-billing-error-appeal',
    summary: '先确认异常是否真是账单错误，也可能来自优惠结束、prorated charge、设备费或服务变更。',
    seo: {
      title: 'Xfinity 账单出错怎么申诉？先核对费用来源',
      description: 'Xfinity 账单异常时，先对照账单、订单和账户变更，再决定是否提出争议。',
    },
    content: {
      whyCommon: '账单差额也可能由 Promotion/Credit 结束、prorated charge、设备费或服务变更造成，不一定是计费错误。',
      officialRules: '核对当前账户、账单周期、订单确认和服务变更记录，确认争议项目及适用期间。是否调整及处理时间均以调查结果为准。',
      realUsage: '比较最近几期同一收费项目，保存账单、订单确认、聊天记录和收据。提交项目名称与对照证据，记录 case number 及后续回复。',
      suitableFor: '项目与订单不符、重复收费或费用依据无法解释时，更值得申诉核实；若能对应已确认变更或一次性收费，则未必是错误。',
    },
  },
  'xfinity-overcharge-refund': {
    question: '被 Xfinity 多扣钱能退吗？',
    slug: 'xfinity-overcharge-refund',
    summary: '先确认 charge 来源和账户变更；是否调整、给 credit 或退款，取决于调查和账户结果。',
    seo: {
      title: 'Xfinity 被多扣钱能退吗？先核对收费来源',
      description: '疑似多收费时，先核对 charge、账期及账户变更；处理结果以运营商核查为准。',
    },
    content: {
      whyCommon: '金额高于预期也可能与账期、服务变更或设备项目有关，不一定是重复扣款。',
      officialRules: '确认项目名称、日期和账期，与之前账单、订单和账户记录比较。调整、credit 或退款方式取决于调查结果。',
      realUsage: '保存账单、付款记录、订单及沟通内容，说明争议项目并记录 case number，之后检查是否出现对应调整。',
      suitableFor: '重复收费、金额与订单不符或取消后仍有 recurring charge 时更值得核查；同时确认费用适用周期。',
    },
  },
  'xfinity-router-fee': {
    question: 'Xfinity 账单里的路由器或设备费是什么？',
    slug: 'xfinity-router-fee',
    summary: '设备费用可能对应 Gateway、Modem、Extender 或其他设备项目；先核对设备登记和收费明细，再判断自备设备是否适用。',
    seo: {
      title: 'Xfinity 路由器或设备费是什么？先核对账单项目',
      description: 'Xfinity 账单出现设备费时，先确认费用对应的 Gateway、Modem、Extender 或其他设备，再核对当前套餐和兼容要求。',
    },
    content: {
      whyCommon: '账单中的设备费用不一定只指路由器，也可能对应 Gateway、Modem、Extender 或其他设备服务，或与账户设备配置及优惠变化有关。',
      officialRules: '查看当前账单项目、套餐内容、账户登记设备和 Xfinity 当前兼容设备要求。自备设备是否可行取决于型号、套餐和功能需求；部分账户可能需要运营商 Gateway 特定功能。',
      realUsage: '先找到设备收费的准确名称，再对照账户设备列表确认对应设备及状态。考虑自备 Modem 或 Router 时，先核实当前套餐兼容性、功能和迁移步骤；不要假设买路由器就会免除设备费。',
      suitableFor: '若出现未识别设备项目、账户设备与实际不符或计划停用租赁设备，更值得核实。如果收费、设备和套餐均能对应且设备满足需求，不一定需要更换。',
    },
  },
  'xfinity-equipment-not-returned': {
    question: 'Xfinity 设备已经归还，为什么仍显示未归还或继续收费？',
    slug: 'xfinity-equipment-not-returned',
    summary: '设备已交还但账户仍显示未归还时，应核对退还凭证和设备状态，确认设备是否已从账户记录中移除。',
    seo: {
      title: 'Xfinity 设备已归还仍显示未归还怎么办？',
      description: 'Xfinity 设备已归还但仍显示未归还或出现相关费用时，先核对退还凭证、设备标识和账户状态，再请运营商确认记录。',
    },
    content: {
      whyCommon: '退还记录与账户设备状态可能尚未对应，导致设备仍显示在账户中或账单继续出现相关项目；不能仅凭交还动作推断账户已更新。',
      officialRules: '确认哪些设备登记为运营商设备、当前状态及退还记录是否关联到对应设备。费用处理以当前设备记录、退还凭证和最终账单为准。',
      realUsage: '保存 return receipt、tracking、serial number 或 MAC、归还日期，并与账户设备清单逐项比对。若仍显示未归还，向 Xfinity 提供凭证核对设备是否已从账户移除，同时保存沟通记录和后续账单。',
      suitableFor: '已归还但账户状态未更新、仍有对应费用，或不确定哪些设备需归还时，更值得核实。账户已显示移除且后续账单无重复收费时，不一定需要继续处理。',
    },
  },
  'xfinity-outage': {
    question: 'Xfinity 经常断网怎么办？',
    slug: 'xfinity-outage',
    summary: '断网可能来自区域 outage、家庭 Wi-Fi、Gateway、coax 或入户线路；先查 outage，再比较设备和有线连接。',
    seo: {
      title: 'Xfinity 断网怎么办？先区分 Outage 和家中问题',
      description: '先查当前 outage，再检查 Gateway、coax、Wi-Fi 和有线连接；单一现象不能确认来源。',
    },
    content: {
      whyCommon: '问题可能在区域服务、家庭 Wi-Fi、Gateway、同轴连接或入户线路，不能仅凭症状认定节点拥堵或线路老化。',
      officialRules: '当前账户或官方渠道未显示 outage 时，检查 Gateway 灯号和 coax 连接，并比较多个设备的 Wi-Fi 与有线表现；记录时间和测试结果供后续核对。',
      realUsage: '先查 outage 状态，再检查设备、连接线并做有线测试；测试结果用于缩小范围，不能单独确认运营商线路故障。',
      suitableFor: '多设备同时断开且有区域 outage 提示，可先跟进状态；单设备或房间异常先查终端/Wi-Fi；有线也异常时再核实 Gateway、线路或区域服务。',
    },
  },
  'xfinity-night-slow': {
    question: 'Xfinity 为什么晚上网速变慢？',
    slug: 'xfinity-night-slow',
    summary: '比较不同时间、有线与 Wi-Fi、多台设备、不同房间和连续几天的结果，缩小问题范围。',
    seo: {
      title: 'Xfinity 晚上网速变慢怎么办？先比较连接表现',
      description: '晚间变慢时，先对比不同时间、有线与 Wi-Fi、多个设备和房间的测试结果，再判断是否需要核实线路或区域服务。',
    },
    content: {
      whyCommon: '速度变化可能与家庭 Wi-Fi、设备、Gateway、线路或区域负载有关；不能仅凭晚间变慢认定节点拥堵或属于 Cable 的正常现象。',
      officialRules: '当前账户和服务记录无法仅凭时段确定拥堵原因；如需判断区域状况，应结合多时段测试和运营商记录核实。',
      realUsage: '用相近设备记录不同时间测试，比较有线、Wi-Fi、其他设备和房间，连续观察几天。无线局部异常先查覆盖；各种连接均慢时向运营商核实。',
      suitableFor: '单设备或房间慢先查终端/Wi-Fi；多设备有线和无线均持续变慢时，整理记录后核实 Gateway、线路或区域情况。',
    },
  },
  'xfinity-restart-not-working': {
    question: 'Xfinity 重启后还是不能上网怎么办？',
    slug: 'xfinity-restart-not-working',
    summary: '重启只能排除部分临时设备状态；仍异常时继续查 outage、灯号、多设备、有线连接和线路。',
    seo: {
      title: 'Xfinity 重启后仍异常怎么办？继续检查这些项目',
      description: '重启后仍异常不代表原因已确定。继续查看 outage、设备灯号、多个设备、有线连接及线路状态。',
    },
    content: {
      whyCommon: '重启可能清除部分临时状态，但不能排除 outage、连接线、设备、账户或线路问题；仍异常不表示问题必然更严重。',
      officialRules: '当前问题是否涉及区域服务、Gateway 或线路，需要结合 outage 信息、设备表现和运营商记录判断。',
      realUsage: '先查 outage，记录设备灯号，比较多台设备，条件允许时做网线测试并检查线缆。结果可帮助描述现象，但不能确认运营商线路故障。',
      suitableFor: '单设备异常先查设备；多设备异常、有线也不通或灯号异常时，更值得核实 outage、Gateway、连接线和线路。',
    },
  },
  'xfinity-technician-visit-fee': {
    question: 'Xfinity 技术员上门会收费吗？',
    slug: 'xfinity-technician-visit-fee',
    summary: '上门是否收费不能只凭故障类型提前判断；预约前应确认上门原因、服务范围和页面显示的费用。',
    seo: {
      title: 'Xfinity 技术员上门会收费吗？预约前先确认这些条件',
      description: 'Xfinity 技术员上门费用取决于当前账户、预约原因和服务范围。预约前应检查可能收费提示，并保存预约确认和最终账单。',
    },
    content: {
      whyCommon: '上门可能涉及安装、线路检查、室内布线、运营商设备或自备设备。不同预约原因和实际检查结果可能影响费用，不能仅凭故障类型推断。',
      officialRules: '预约前核对 visit reason、服务范围、账户或预约页面的收费提示及当前费用条件。安装、维修、室内布线和自备设备情况可能不同，实际以预约确认、服务记录和最终账单为准。',
      realUsage: '记录故障现象和已做检查，询问本次 visit reason 及是否可能收费。保留预约确认和费用提示；服务后将账单与预约内容对照，不一致时提交记录核实。',
      suitableFor: '预约提示可能收费、服务范围不清或最终账单与预约确认不一致时，更值得核实。问题已解决且费用与事前确认相符时，不一定需要继续排查。',
    },
  },
  'xfinity-judge-line-issue': {
    question: '怎么判断 Xfinity 是 Wi-Fi 问题还是线路问题？',
    slug: 'xfinity-judge-line-issue',
    summary: '比较设备、房间及有线连接：单设备先查设备，单房间先查 Wi-Fi；有线和无线均异常时再核实 Gateway、outage、coax 或线路。',
    seo: {
      title: 'Xfinity 怎么判断 Wi-Fi 还是线路问题？按现象逐步排查',
      description: '比较设备、房间和有线连接可缩小网络问题范围，但最终线路状态仍需运营商结合记录确认。',
    },
    content: {
      whyCommon: '网速慢或断线可能来自终端、室内 Wi-Fi、Gateway、coax 或区域服务；自测不能最终确认运营商线路故障。',
      officialRules: '根据当前账户和服务记录判断线路状态；单次重启或测速结果都不足以确认运营商线路故障。',
      realUsage: '单设备异常先查设备设置并与其他设备比较；单房间异常比较路由器附近和问题区；无线异常但有线正常重点查 Wi-Fi；有线无线均异常则查 Gateway、outage、coax 并记录情况交运营商核实。',
      suitableFor: '单设备/单房间问题先查设备或 Wi-Fi；所有设备有线无线均异常时，再核实 Gateway、outage、连接线及线路，自测不能定论。',
    },
  },
  'xfinity-over-data-fee': {
    question: 'Xfinity 出现数据用量费用怎么办？',
    slug: 'xfinity-over-data-fee',
    summary: '数据使用规则可能因地区、套餐、账户和政策不同；先在账户确认适用规则、周期用量及是否实际产生费用。',
    seo: {
      title: 'Xfinity 出现数据用量费用怎么办？先查账户适用规则',
      description: 'Xfinity 数据使用条件可能因地区、套餐和账户而不同。先核对当前周期用量、费用明细及账户可用选项，再判断下一步。',
    },
    content: {
      whyCommon: '用量页面的提醒与账单实际收费不是一回事。地区、套餐、账户设置及政策变化都可能影响适用的数据使用条件。',
      officialRules: '在当前账户确认套餐是否有数据条件、计量周期、当前用量、是否产生 charge，以及 Unlimited 等选项和对应价格。不要假设所有用户适用同一规则，以账户说明和账单为准。',
      realUsage: '区分用量提醒与已入账费用，记录周期和用量页面，再核对账单项目、金额及日期。考虑更改选项时，先确认资格、价格和生效时间，并保存页面或通知。',
      suitableFor: '账户规则不清、用量与账单不一致或出现无法识别的 charge 时，更值得核实。只是提醒且账单没有对应费用时，可先确认周期内规则和用量变化。',
    },
  },
  'xfinity-check-data-usage': {
    question: '怎么查看 Xfinity 数据用量？',
    slug: 'xfinity-check-data-usage',
    summary: '若当前账户提供 data usage 信息，可从账户、App 或网站查看；入口、上限、提醒及收费规则因地区、套餐和政策而异。',
    seo: {
      title: '怎么查看 Xfinity 数据用量？以账户显示为准',
      description: '如果账户提供 data usage 页面，可在当前账户、App 或网站查看实际信息；入口及适用条件以账户显示为准。',
    },
    content: {
      whyCommon: '不同地区、套餐和账户可能显示不同信息，不能假设每个用户都有相同 data cap 或提醒。',
      officialRules: '入口、计量周期、用量条件和收费规则可能变化，应以当前账户实际显示为准。',
      realUsage: '登录当前账户、App 或网站查找 data usage 和计费周期。页面未显示或信息不一致时，向运营商确认该账户适用规则。',
      suitableFor: '记录账户显示的周期、用量和提醒并与账单比较；未显示时不要套用其他套餐或地区的上限规则。',
    },
  },
  'xfinity-cancel-before-contract': {
    question: 'Xfinity term agreement 没到期可以取消吗？',
    slug: 'xfinity-cancel-before-contract',
    summary: '是否有提前取消费用取决于账户是否存在有效 term agreement 及其条款，不能按通用公式估算。',
    seo: {
      title: 'Xfinity term agreement 未到期可以取消吗？先核对账户条款',
      description: '准备取消 Xfinity 服务前，先确认账户是否有有效 term agreement、可能的提前取消费用、最终账单和设备归还要求。',
    },
    content: {
      whyCommon: '用户可能把促销、套餐期限或服务期误认为 term agreement，也可能找不到原始条款。协议及取消处理应根据订单和账户记录判断。',
      officialRules: '查看 order confirmation、account agreement 和账户记录，确认协议、期限及 possible early termination charge，并核对最终账单和设备归还要求。搬家或地址不可用本身不能证明费用会免除。',
      realUsage: '找到订单或协议，核对服务项目与期限；再向 Xfinity 确认取消生效日、可能费用、设备归还及 final bill。保存书面确认，不要用旧经验或通用公式计算 ETF。',
      suitableFor: '找不到协议、账户期限与订单不一致或费用要求不明确时，更值得核实。若已确认无有效协议并了解最终账单及设备要求，不一定需要继续排查。',
    },
  },
  'xfinity-mid-month-cancel-refund': {
    question: 'Xfinity 月中取消服务会退款吗？',
    slug: 'xfinity-mid-month-cancel-refund',
    summary: '月中取消后的收费或退款取决于账户、账期和最终账单；应按取消生效日期和 final bill 核对。',
    seo: {
      title: 'Xfinity 月中取消服务会退款吗？如何核对最终账单',
      description: 'Xfinity 月中取消后的最终收费取决于账户和账期处理。记录取消生效日期，并检查 final bill 中的周期、调整、抵扣和余额。',
    },
    content: {
      whyCommon: '取消日期可能与账单周期、预付费用或账户余额不一致，因此用户会不确定是否还收费、产生抵扣或退款。仅看取消日或已支付金额无法确认最终结果。',
      officialRules: '结合当前账户、billing period、cancellation effective date 和 final bill 判断。账单可能列出 adjustment、credit 或 remaining balance；最终账单生成前，无法确认是否退款或具体金额。',
      realUsage: '记录 cancellation effective date，待 final bill 出具后核对服务周期、后续收费、adjustment、credit 和 remaining balance。保存取消确认及账单，日期或金额不符时请运营商解释。',
      suitableFor: '取消日期不明、最终账单仍有 recurring charge 或调整无法对应记录时，更值得核实。最终账单与确认记录一致时，不一定需要继续追查退款。',
    },
  },
  'xfinity-moving-transfer': {
    question: '搬家时可以把 Xfinity 服务转到新地址吗？',
    slug: 'xfinity-moving-transfer',
    summary: '先确认新地址和 Unit 的 serviceability，再核对安装方式、价格、设备及新旧地址服务日期。',
    seo: {
      title: 'Xfinity 搬家如何转移服务？先确认新地址与订单条件',
      description: '搬家前先核对新地址 serviceability、Unit、安装方式、设备、价格以及新旧地址服务日期，再决定如何衔接服务。',
    },
    content: {
      whyCommon: '搬家涉及地址数据库、Unit、线路、设备和账户方案变化。旧地址能用 Xfinity，不代表新地址可转移原服务或沿用相同条件。',
      officialRules: '提交订单前确认新地址和 Unit 的 serviceability、自助或 technician 安装方式、设备兼容性、价格和账户条件，以及旧址停止和新址启用日期。以当前地址查询和订单为准。',
      realUsage: '依次核对地址可用性、Unit、安装方式、设备、新地址价格、旧址停止日和新址启用日。先确认新址能安装或启用，再决定何时停止旧服务，并保存订单。',
      suitableFor: '新地址结果、安装方式、服务日期或价格未确认时，更值得核实。订单已确认且新旧服务日期清楚时，可按订单安排执行。',
    },
  },
  'xfinity-new-address-no-coverage': {
    question: '搬家后新地址查不到 Xfinity 覆盖怎么办？',
    slug: 'xfinity-new-address-no-coverage',
    summary: '先确认地址查询是否准确，尤其核对 Unit、新建地址、同楼其他 Unit 和旧账户记录；再查协议与设备要求。',
    seo: {
      title: 'Xfinity 新地址查不到覆盖怎么办？先核对地址结果',
      description: 'Xfinity 新地址查不到覆盖时，先核对完整地址和 Unit，并确认地址数据库或旧账户记录是否影响查询，再检查当前协议和设备要求。',
    },
    content: {
      whyCommon: '查询结果可能受地址格式、Unit、新建地址数据库或同一建筑内不同住宅单元影响。旧账户记录也可能使在线流程无法确认服务状态，一次查询未必代表最终结果。',
      officialRules: '核实完整地址和 Unit，并确认新地址记录、同楼其他 Unit 或旧账户占用是否影响 serviceability。确认无法服务后，再查看当前 agreement、设备归还和 final bill 条件；不要预设取消费用豁免。',
      realUsage: '核对账单或租约上的完整地址和 Unit；地址较新时请求人工核查数据库，也确认是否有旧账户记录。得到明确结果后，再比较转移、取消及其他服务选择。',
      suitableFor: '查询与实际地址不符、Unit 无法识别或可能有旧账户占用时，更值得核实。人工确认结果后，再按当前协议、设备和最终账单判断下一步。',
    },
  },
  'xfinity-move-reinstallation-fee': {
    question: 'Xfinity 搬家后重新安装会收费吗？',
    slug: 'xfinity-move-reinstallation-fee',
    summary: '安装费用取决于新地址线路、自助安装资格、技术员安排、当前订单和账户政策，应在确认订单时核对。',
    seo: {
      title: 'Xfinity 搬家重新安装会收费吗？先检查订单条件',
      description: 'Xfinity 搬家后的安装费取决于新地址线路、自助安装条件、技术员安排及当前订单政策，应以账户和订单显示为准。',
    },
    content: {
      whyCommon: '新地址线路和设备安排可能与旧址不同。有的地址可自助安装，有的需要技术员；订单和账户条件也会影响是否列出安装收费。',
      officialRules: '确认新地址线路状态、self-install 资格、是否需要 technician，以及订单和账户显示的安装方式与费用。条件可能变化，以确认订单和当前政策为准。',
      realUsage: '下单前查看安装方式、预约和可能费用；页面未说明时向运营商确认并保存订单。不要根据旧地址经历或他人过往优惠推断新址收费。',
      suitableFor: '订单未说明安装方式或费用、页面与客服说明不一致，或新地址需额外线路处理时，更值得核实。订单已明确安装安排及费用时，可据此判断。',
    },
  },
  'xfinity-pause-service': {
    question: 'Xfinity 服务可以暂时暂停吗？',
    slug: 'xfinity-pause-service',
    summary: '先查当前账户是否提供 seasonal、temporary、reduced-service 或其他选项；再比较保留与取消成本及恢复条件。',
    seo: {
      title: 'Xfinity 服务可以暂时暂停吗？先查账户选项',
      description: '临时暂停或其他短期选项取决于当前账户与政策；决定前还要核实费用、设备及恢复条件。',
    },
    content: {
      whyCommon: '旅行、搬家或暂时不用网络时，用户可能希望减少服务；可选方式和收费随账户及政策变化，不能假设一定有暂停选项或取消重开更合适。',
      officialRules: '当前账户是否提供暂停或其他短期服务方式，应以账户页面和当期政策为准；取消和重新开通也可能涉及设备、安装或价格变化。',
      realUsage: '先查账户是否有 seasonal、temporary、reduced-service 等选择，确认期限、费用和恢复条件。若无合适选项，再比较保留和取消成本；取消前核对设备、重开、安装及价格变化。',
      suitableFor: '账户选项清楚时据此判断；若考虑取消，先确认设备归还和重新开通的条件及费用。',
    },
  },
  'xfinity-unpaid-affect-credit': {
    question: 'Xfinity 欠费会影响信用吗？',
    slug: 'xfinity-unpaid-affect-credit',
    summary: '未解决余额可能进入催收流程，但不能断定一定影响信用；付款计划是否可用取决于账户和政策。',
    seo: {
      title: 'Xfinity 欠费会影响信用吗？先核对余额和通知',
      description: '未解决余额可能进入后续催收流程，但信用结果和可用付款选项因账户而异。',
    },
    content: {
      whyCommon: '账单争议、付款失败或账户变化可能留下未解决余额；后续处理取决于账户状态，不能保证信用结果。',
      officialRules: '是否进入催收及其后续影响取决于当前账户和实际处理流程；不能保证一定影响或不会影响信用，也不能假定一定提供付款计划。',
      realUsage: '先核对账单、付款记录和账户通知。金额有争议时保存凭证并提出核查；无争议时向 Xfinity 确认付款方式及可用安排。',
      suitableFor: '金额有争议、付款后仍显示欠款或收到催收通知时更值得核实并保存记录。仅凭欠费时长无法确定信用结果。',
    },
  },
  'xfinity-network-issue-compensation': {
    question: 'Xfinity 网络中断或持续异常可以获得 credit 或补偿吗？',
    slug: 'xfinity-network-issue-compensation',
    summary: '是否有 credit、adjustment 或其他处理取决于账户、服务类型、事件记录和当期政策；商业 SLA 以合同为准。',
    seo: {
      title: 'Xfinity 网络问题可以申请 credit 或补偿吗？',
      description: '网络问题后的处理取决于账户、服务类型、事件记录和适用政策，不能保证 credit、adjustment 或赔偿结果。',
    },
    content: {
      whyCommon: '不同服务、事件记录和合同条件可能影响账单处理，不能假定 outage 一定产生 credit 或 SLA 一定赔偿。',
      officialRules: '住家或商业服务的处理可能不同；商业服务如有具体 SLA，应依合同文本中的适用条件判断。',
      realUsage: '记录 outage 时间、case number、技术员记录和账单项目，向 Xfinity 确认账户是否适用 credit 或 adjustment 及所需材料。商业服务如有 SLA，核对合同条件和申报流程。',
      suitableFor: '事件记录有争议、账单未反映已确认处理或 SLA 条件不清时更值得核实；结果以账户调查和合同为准。',
    },
  },
}
