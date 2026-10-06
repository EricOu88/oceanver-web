export interface FrontierFAQContent {
  question: string
  answer: string
}

export const frontierFAQContent: Record<string, FrontierFAQContent> = {
  'frontier-address-availability': {
    question: '我的地址能不能装 Frontier Fiber？',
    answer: '是否可订取决于完整地址、单元和当地线路设施。先用当前地址查询可订服务，再确认订单显示的技术类型；仅凭城市或附近住户的情况不能判断。',
  },
  'frontier-neighborhood-availability': {
    question: '为什么同一个社区有人能装 Fiber，有人不能？',
    answer: '可用性可能受门牌、Unit、建筑布线和现有设施影响。同一社区的查询结果也可能不同，应以具体地址和运营商当前订单结果为准。',
  },
  'frontier-fiber-or-dsl': {
    question: '怎么确认自己订到的是 Fiber 还是 DSL？',
    answer: '查看当前地址的可订方案、订单确认和账户服务名称，并核对安装设备与接入方式。技术类型会影响上传、延迟和可选方案，不能只凭 Frontier 名称判断。',
  },
  'frontier-better-than-current': {
    question: 'Frontier 一定比现在的宽带好吗？',
    answer: '不一定。需要结合地址可用服务、实际网络问题、上传和稳定性需求，以及长期总成本比较；Fiber 标签本身不足以说明一定值得更换。',
  },
  'frontier-dont-rush-switch': {
    question: '什么情况先不要急着换 Frontier？',
    answer: '如果问题只发生在一个房间或一台设备、刚更换路由器、只有一次区域 outage，或账单只出现一期异常，应先定位原因。确认问题来自服务线路或长期成本后，再判断是否需要换运营商。',
  },
  'frontier-worth-comparing': {
    question: '什么情况值得认真比较 Frontier？',
    answer: '当当前地址确实有可订方案、现有宽带长期费用或稳定性持续不合需求，且你的上传或使用需求有明确差距时，可以比较。最后还要把安装、设备、取消旧服务和衔接成本一起计算。',
  },
  'frontier-slow-speed-package': {
    question: 'Frontier 网速慢一定是套餐问题吗？',
    answer: '不一定。先比较有线和 Wi-Fi 测速、不同设备与不同时段的结果，并确认当前服务类型；路由器、室内覆盖、终端和线路都可能影响体验。单次测试不能确定原因。',
  },
  'frontier-speed-test-normal': {
    question: '测速正常，为什么实际使用还是卡？',
    answer: '测速是特定设备、位置和时刻的结果，不能完全代表视频会议、游戏或网页访问体验。可记录发生时间、应用、设备及有线/Wi-Fi差异，再区分终端、路由器、延迟或服务线路问题。',
  },
  'frontier-room-wifi-slow': {
    question: '只有一个房间 Wi-Fi 慢怎么办？',
    answer: '先在问题房间和路由器附近用同一设备对比，并检查其他设备是否也受影响。如果近处正常、远处变差，可能与覆盖或干扰有关；这本身不能证明 Frontier 线路有问题。',
  },
  'frontier-advertised-price': {
    question: '比较 Frontier 时为什么不能只看广告月费？',
    answer: '广告价格可能有资格、期限或付款方式条件，也未必包含设备、安装和附加服务费用。应查看当前地址可订方案及完整条款，并与现有服务的持续月费和切换成本比较。',
  },
  'frontier-bill-increase': {
    question: 'Frontier 账单突然变高，先看什么？',
    answer: '对比最近两期账单，区分持续月费变化和一次性费用，再核对折扣、设备、税费及账户变更记录。仅凭总金额无法确认原因；争议费用应保存账单和相关确认记录。',
  },
  'frontier-long-term-cost': {
    question: '怎么比较现有宽带和 Frontier 的长期成本？',
    answer: '按同一比较周期核对持续月费、促销或抵扣的适用条件、设备、安装、附加服务及旧服务取消成本。具体金额和资格以当前地址的报价、账户及合同条款为准。',
  },
  'frontier-install-preparation': {
    question: 'Frontier 安装前要确认什么？',
    answer: '确认订单上的服务类型、安装范围、设备和预计费用，并询问是否需要技术员、物业许可或室内布线。安装预约与施工条件因地址和订单而异，应以当前订单信息为准。',
  },
  'frontier-technician-visit': {
    question: '安装 Frontier 是否一定需要技术员上门？',
    answer: '是否需要上门取决于地址现有线路、设备和订单安排。查看订单说明并确认进入房屋、设备安装和物业协调要求；不要仅根据邻居或旧经验推断。',
  },
  'frontier-router-gateway': {
    question: 'Router 或 Gateway 会影响 Frontier 的实际体验吗？',
    answer: '会有可能。路由器性能、摆放位置、无线干扰和终端能力都会影响 Wi-Fi；可以先比较有线连接与不同位置的结果。若有线和无线都异常，再继续核实网关、线路或区域服务状态。',
  },
  'frontier-cancel-old-service': {
    question: '换 Frontier 前要不要先取消旧宽带？',
    answer: '通常应先确认新服务可用、订单和安装安排，再规划两家服务的衔接，避免过早取消造成断网。是否有重叠费用、通知要求或取消条件，要查看旧账户的当前条款。',
  },
  'frontier-cancel-frontier': {
    question: '取消 Frontier 前应该确认什么？',
    answer: '先查看账户合同、最后账期、未结费用、设备归还要求和取消生效日期，并保存确认及寄还凭证。费用、期限和设备处理方式可能因账户和政策不同，不能按旧经验推定。',
  },
  'frontier-human-verification': {
    question: '什么情况需要人工核实？',
    answer: '地址可订性、订单状态、账户资格、争议费用、设备余额或合同条款都需要结合实际账户确认。公开信息只能帮助整理检查方向，不能替代 Frontier 对账户和订单的答复。',
  },
}
