import { FAQCategory } from '@/app/components/faq/ProviderFAQ'
import { HelpCircle, Package, DollarSign, FileText, Calendar, Wifi, Zap, Building2, Users, Settings } from 'lucide-react'

// Spectrum 售前常见问题（10个类别，每个5个QA）
// 注意：这是模板，您需要根据实际情况填写具体问题和答案
export const spectrumPreSaleCategories: FAQCategory[] = [
  {
    id: 'coverage',
    title: '地址覆盖与安装',
    icon: <HelpCircle size={20} />,
    items: [
      {
        question: '我的地址能装 Spectrum 吗？',
        answer: 'Spectrum 在湾区覆盖较广，主要在 Gilroy / Morgan hill / Hollister等城市。洛杉矶和纽约等我们可以帮您免费查询地址是否支持。',
      },
      {
        question: '如何确认地址有 Spectrum？',
        answer: '需要查询详细地址。即使同一街道，不同门牌号可能覆盖情况不同。我们提供免费地址覆盖查询服务。',
      },
      {
        question: 'Spectrum 安装需要多长时间？',
        answer: '新安装通常需要 1-2 周预约时间。如果地址已有线路，可以自己安装会更快。首次安装可能需要技术人员上门。',
      },
      {
        question: '安装费用是多少？',
        answer: 'Spectrum 新用户安装通常是免费的，但可能需要支付设备押金。具体费用取决于您选择的套餐。',
      },
      {
        question: '可以自己安装吗？',
        answer: '如果地址已有 Spectrum 线路，可以申请自助安装（Self-Install Kit）。我们可以帮忙激活modem。新地址通常需要技术人员上门安装。',
      },
    ],
  },
  {
    id: 'plans',
    title: '套餐选择',
    icon: <Package size={20} />,
    items: [
      {
        question: 'Spectrum 有哪些套餐？',
        answer: 'Spectrum 提供 100Mbps、200Mbps、400Mbps、500Mbps、1000Mbps 等多种速度选择，价格从 $49.99-$79.99 不等。',
      },
      {
        question: '住家和商业有什么区别？',
        answer: '商业宽带更稳定、有 SLA 保障、技术支持优先，价格更高。住家宽带价格更友好，适合家庭使用。',
      },
      {
        question: '应该选多少速度？',
        answer: '一般家庭 200-400Mbps 足够。如果多人同时使用、远程办公，建议 500Mbps 以上。',
      },
      {
        question: 'Spectrum 有流量上限吗？',
        answer: 'Spectrum 没有流量上限，这是相比 Xfinity 的优势之一。',
      },
      {
        question: '可以只装宽带不办手机吗？',
        answer: '可以。Spectrum 宽带和手机是分开的，不需要捆绑。',
      },
    ],
  },
  {
    id: 'pricing',
    title: '价格与优惠',
    icon: <DollarSign size={20} />,
    items: [
      {
        question: 'Spectrum 新用户有什么优惠？',
        answer: '新用户通常有前 12 个月的促销价格，可能比标准价格低 $20-$50/月。还有免安装费等优惠。',
      },
      {
        question: '促销价格会持续多久？',
        answer: '促销价格通常持续 12 个月，到期后会恢复到标准价格。但 Spectrum 价格结构相对稳定。',
      },
      {
        question: '可以锁定价格吗？',
        answer: 'Spectrum 的促销价格有期限，但标准价格相对稳定，不会像 Xfinity 那样大幅上涨。',
      },
      {
        question: '设备费用是多少？',
        answer: '可以租用 Spectrum 路由器（$10/月）或自备兼容设备。Modem是免费的，自备设备可以节省月费。',
      },
      {
        question: '有隐藏费用吗？',
        answer: '需要注意：设备租赁费、提前解约费等。我们会在办理时详细说明所有费用。',
      },
    ],
  },
  {
    id: 'ssn',
    title: '无 SSN 办理',
    icon: <FileText size={20} />,
    items: [
      {
        question: '没有 SSN 可以办 Spectrum 吗？',
        answer: '可以。Spectrum 支持无 SSN 办理，但可能需要支付押金。我们有专门的无 SSN 办理方案。',
      },
      {
        question: '无 SSN 需要多少押金？',
        answer: '押金通常在 $50-$150 之间，取决于套餐。押金会在 12 个月后返还（如果账单正常）。',
      },
      {
        question: '新移民可以办吗？',
        answer: '可以。我们专门为新移民和留学生提供中文办理服务，支持无 SSN、无信用记录的情况。',
      },
      {
        question: '需要什么材料？',
        answer: '简单材料 ：身份证明、地址.（租房合同或账单）我们可以帮您准备所有信息。',
      },
      {
        question: '无 SSN 办理流程复杂吗？',
        answer: '不复杂。我们全程中文协助，帮您填写表格、准备材料、与客服沟通，通常 1-2 天即可完成。',
      },
    ],
  },
  {
    id: 'contract',
    title: '合约与期限',
    icon: <Calendar size={20} />,
    items: [
      {
        question: 'Spectrum 有合约吗？',
        answer: 'Spectrum 通常没有长期合约，这是相比其他运营商的优势。可以随时取消，无需支付违约金。',
      },
      {
        question: '可以按月付费吗？',
        answer: '可以。Spectrum 支持月付，没有合约限制，这是其最大的优势之一。',
      },
      {
        question: '可以随时取消吗？',
        answer: '可以。Spectrum 没有合约，可以随时取消，无需支付违约金。',
      },
      {
        question: '搬家可以转移服务吗？',
        answer: '可以。如果新地址也支持 Spectrum，可以转移服务，通常免费。我们帮您处理转移手续。',
      },
      {
        question: '转移需要多长时间？',
        answer: '转移服务通常需要 1-2 周，取决于新地址是否有线路。有线路的话可以更快。',
      },
    ],
  },
  {
    id: 'speed',
    title: '速度与性能',
    icon: <Zap size={20} />,
    items: [
      {
        question: 'Spectrum 速度稳定吗？',
        answer: 'Spectrum 是 Cable 宽带，速度相对稳定，但高峰期可能略有下降。整体稳定性比 Xfinity 稍好。',
      },
      {
        question: '实际速度能达到宣传速度吗？',
        answer: '实际速度通常能达到宣传速度的 80-90%。有线连接比 WiFi 更稳定。',
      },
      {
        question: '上传速度是多少？',
        answer: 'Cable 宽带上传速度通常比下载速度慢很多。例如 400Mbps 下载可能只有 10-20Mbps 上传。',
      },
      {
        question: '适合远程办公吗？',
        answer: '适合。200Mbps 以上足够远程办公。如果需要大量上传，建议选择更高速度。',
      },
      {
        question: '游戏延迟如何？',
        answer: 'Spectrum 延迟相对较低，适合在线游戏。但不如 Fiber 延迟低。',
      },
    ],
  },
  {
    id: 'comparison',
    title: '与其他运营商对比',
    icon: <Wifi size={20} />,
    items: [
      {
        question: 'Spectrum 和 Xfinity 哪个好？',
        answer: '两者都是 Cable 宽带，覆盖和速度类似。Spectrum 价格结构更稳定、无流量上限、无合约，但促销力度不如 Xfinity。',
      },
      {
        question: 'Spectrum 和 AT&T Fiber 哪个好？',
        answer: 'AT&T Fiber 速度更稳定、上下行对称，但覆盖范围小。Spectrum 覆盖更广、无合约，但速度可能不如 Fiber 稳定。',
      },
      {
        question: '什么时候选 Spectrum？',
        answer: '适合：不想签合约、需要稳定价格、不想担心流量上限、地址没有 Fiber 的情况。',
      },
      {
        question: '什么时候不选 Spectrum？',
        answer: '如果地址有 AT&T Fiber 且价格相近，通常光纤更好。如果需要大量上传，也建议选光纤。',
      },
      {
        question: '可以同时装两家吗？',
        answer: '技术上可以，但不划算。通常选择一家即可。',
      },
    ],
  },
  {
    id: 'business',
    title: '商业宽带',
    icon: <Building2 size={20} />,
    items: [
      {
        question: '商业宽带和住家有什么区别？',
        answer: '商业宽带有 SLA 保障、技术支持优先、价格结构不同、通常更稳定。适合办公室、餐厅、店铺。',
      },
      {
        question: '商业宽带价格是多少？',
        answer: '商业宽带价格通常比住家高 20-40%，但更稳定，有保障。价格取决于速度和需求。',
      },
      {
        question: '需要营业执照吗？',
        answer: '通常需要提供商业地址和营业执照。但小型家庭办公室可能可以用住家宽带。',
      },
      {
        question: '商业宽带有合约吗？',
        answer: '商业宽带通常有 12-24 个月合约，提前解约违约金更高。但稳定性保障更好。',
      },
      {
        question: '商业宽带技术支持如何？',
        answer: '商业宽带有专门的技术支持热线，响应更快，有 SLA 保障。适合对网络稳定性要求高的业务。',
      },
    ],
  },
  {
    id: 'process',
    title: '办理流程',
    icon: <Users size={20} />,
    items: [
      {
        question: '办理 Spectrum 需要多长时间？',
        answer: '查询地址覆盖：即时。申请办理：1-2 天。预约安装：1-2 周。整个流程通常 2-3 周完成。',
      },
      {
        question: '需要本人到场吗？',
        answer: '申请可以远程完成。但安装时可能需要有人在家（如果技术人员需要进入室内）。',
      },
      {
        question: '可以远程办理吗？',
        answer: '可以。我们提供美全程远程办理服务，通过电话、微信协助您完成所有步骤。',
      },
      {
        question: '办理需要什么材料？',
        answer: '身份证明（驾照）、地址证明（租房合同/账单）、支付方式（信用卡/银行账户）。',
      },
      {
        question: '中文办理流程复杂吗？',
        answer: '不复杂。我们全程中文协助，帮您填写表格、准备材料、与客服沟通，让您无需担心语言问题。',
      },
    ],
  },
  {
    id: 'technical',
    title: '技术特点',
    icon: <Settings size={20} />,
    items: [
      {
        question: 'Spectrum 使用什么技术？',
        answer: 'Spectrum 使用 Cable 宽带技术，通过同轴电缆传输。速度稳定，覆盖范围广。',
      },
      {
        question: '需要特殊设备吗？',
        answer: '需要 Spectrum 提供的调制解调器（Modem）和路由器。可以租用或自备兼容设备。',
      },
      {
        question: '受天气影响吗？',
        answer: 'Cable 宽带受天气影响较小，但极端天气可能影响信号。整体比 DSL 更稳定。',
      },
      {
        question: '可以连接多个设备吗？',
        answer: '可以。Spectrum 速度足够快，可以同时连接多个设备而不影响速度。',
      },
      {
        question: '未来会升级吗？',
        answer: 'Spectrum 正在部分地区升级到更高速度。现有客户可以申请升级到新速度。',
      },
    ],
  },
]

// Spectrum 售后常见问题（10个类别，每个5个QA）
export const spectrumAfterSaleCategories: FAQCategory[] = [
  {
    id: 'billing',
    title: '账单问题',
    icon: <DollarSign size={20} />,
    items: [
      {
        question: '为什么账单突然涨价了？',
        answer: 'Spectrum 价格相对稳定，但如果涨价，可能是促销价格到期或套餐变更。我们帮您分析账单原因。',
      },
      {
        question: '账单涨价了能降回来吗？',
        answer: '可以。我们可以帮您重新申请优惠、协商价格，或更换更合适的套餐。',
      },
      {
        question: '如何查看账单明细？',
        answer: '登录 Spectrum 账户，在"账单"页面可以查看详细费用。我们帮您分析账单，找出可以节省的地方。',
      },
      {
        question: '账单有错误怎么办？',
        answer: '如果发现账单错误，可以联系鸿达电讯客服申诉。我们帮您准备材料、与客服沟通，争取退款或调整。',
      },
      {
        question: '可以设置自动付款吗？',
        answer: '可以。在 Spectrum 账户中设置自动付款，可以避免逾期费用，有时还有额外折扣。',
      },
    ],
  },
  {
    id: 'speed-issues',
    title: '速度问题',
    icon: <Zap size={20} />,
    items: [
      {
        question: '实际速度比宣传慢？',
        answer: '可能原因：路由器问题、设备距离太远、高峰期拥堵、线路问题。我们可以帮您诊断并解决。',
      },
      {
        question: 'WiFi 信号弱怎么办？',
        answer: '可以：移动路由器位置、使用 WiFi 扩展器、升级路由器、使用有线连接。我们推荐合适的解决方案。',
      },
      {
        question: '晚上速度特别慢？',
        answer: '这是 Cable 宽带的常见问题，高峰期（晚上 7-11 点）网络拥堵导致速度下降。可以考虑升级套餐。',
      },
      {
        question: '如何测试实际速度？',
        answer: '使用 speedtest.net 或 fast.com 测试。建议用有线连接测试，排除 WiFi 干扰。我们帮您分析测试结果。',
      },
      {
        question: '速度问题可以要求退款吗？',
        answer: '如果速度持续不达标，可以联系客服要求调整或退款。我们帮您准备证据、与客服沟通。',
      },
    ],
  },
  {
    id: 'connection',
    title: '连接问题',
    icon: <Wifi size={20} />,
    items: [
      {
        question: '经常断网怎么办？',
        answer: '可能原因：线路问题、设备故障、信号干扰。先重启路由器，如果持续，联系技术支持检查线路。',
      },
      {
        question: '路由器需要重启吗？',
        answer: '如果遇到连接问题，重启路由器通常能解决。建议每周重启一次，保持设备最佳状态。',
      },
      {
        question: '无法连接 WiFi？',
        answer: '检查：路由器是否正常、密码是否正确、设备是否在范围内、是否被屏蔽。我们帮您逐步排查。',
      },
      {
        question: '有线连接正常但 WiFi 不行？',
        answer: '这是路由器问题。可以重启路由器、更新固件、更换路由器，或联系技术支持。',
      },
      {
        question: '多个设备同时用会卡？',
        answer: '可能是速度不够或路由器性能不足。建议升级套餐速度或更换更好的路由器。',
      },
    ],
  },
  {
    id: 'equipment-issues',
    title: '设备问题',
    icon: <Package size={20} />,
    items: [
      {
        question: '路由器坏了怎么办？',
        answer: '如果租用 Spectrum 路由器，可以免费更换。如果自备设备，需要自己购买新设备。',
      },
      {
        question: '可以更换路由器吗？',
        answer: '可以。可以在 Spectrum 账户中更新设备信息，或联系客服更换。自备设备需要确保兼容。',
      },
      {
        question: '设备费用可以取消吗？',
        answer: '如果自备设备，可以取消设备租赁费。需要在账户中设置，可能需要归还 Spectrum 设备。',
      },
      {
        question: '设备押金什么时候退？',
        answer: '设备押金通常在 12 个月后，如果账单正常、设备完好，会自动返还到账户。',
      },
      {
        question: '设备升级需要费用吗？',
        answer: '如果租用 Spectrum 设备，升级通常免费。如果自备设备，需要自己购买新设备。',
      },
    ],
  },
  {
    id: 'upgrade',
    title: '升级与降级',
    icon: <Zap size={20} />,
    items: [
      {
        question: '可以升级套餐吗？',
        answer: '可以。随时可以升级套餐，通常立即生效。升级可能有促销价格，我们帮您申请最佳优惠。',
      },
      {
        question: '可以降级套餐吗？',
        answer: '可以。Spectrum 没有合约，可以随时降级，无需支付违约金。',
      },
      {
        question: '升级后价格会变吗？',
        answer: '升级通常会按新套餐价格收费。但我们可以帮您申请升级优惠，可能比标准价格低。',
      },
      {
        question: '降级后速度够用吗？',
        answer: '降级前建议先评估使用需求。我们帮您分析使用情况，推荐合适的套餐速度。',
      },
      {
        question: '可以临时升级吗？',
        answer: '可以。例如临时需要更高速度，可以升级 1-2 个月，然后再降回来。',
      },
    ],
  },
  {
    id: 'cancel',
    title: '取消与转网',
    icon: <Calendar size={20} />,
    items: [
      {
        question: '如何取消 Spectrum 服务？',
        answer: '联系客服取消服务。Spectrum 没有合约，取消无需支付违约金。我们帮您处理取消手续。',
      },
      {
        question: '取消需要提前通知吗？',
        answer: '建议提前 30 天通知，避免产生额外费用。取消后需要归还设备。',
      },
      {
        question: '取消需要支付费用吗？',
        answer: 'Spectrum 没有合约，取消无需支付违约金。这是相比 Xfinity 的优势。',
      },
      {
        question: '可以转网到其他运营商吗？',
        answer: '可以。转网前需要先取消 Spectrum 服务。我们帮您处理转网手续，确保无缝切换。',
      },
      {
        question: '取消后设备怎么办？',
        answer: '如果租用 Spectrum 设备，需要归还。可以邮寄或送到 Spectrum 门店。保留归还凭证。',
      },
    ],
  },
  {
    id: 'move',
    title: '搬家转移',
    icon: <Settings size={20} />,
    items: [
      {
        question: '搬家可以转移服务吗？',
        answer: '可以。如果新地址也支持 Spectrum，可以转移服务，通常免费。我们帮您处理转移手续。',
      },
      {
        question: '转移需要费用吗？',
        answer: '转移服务通常免费，但可能需要重新安装（如果新地址没有线路）。',
      },
      {
        question: '新地址不支持 Spectrum 怎么办？',
        answer: '如果新地址不支持 Spectrum，可以免费取消服务（无需支付违约金）。我们可以帮您找新地址的运营商。',
      },
      {
        question: '转移需要多长时间？',
        answer: '转移服务通常需要 1-2 周，取决于新地址是否有线路。有线路的话可以更快。',
      },
      {
        question: '转移期间会断网吗？',
        answer: '会有短暂断网，通常在转移当天。我们帮您安排时间，尽量减少影响。',
      },
    ],
  },
  {
    id: 'support',
    title: '技术支持',
    icon: <HelpCircle size={20} />,
    items: [
      {
        question: '如何联系 Spectrum 技术支持？',
        answer: '可以电话、在线聊天、或到门店。我们帮您准备问题描述，协助与技术支持沟通。',
      },
      {
        question: '技术支持是 24 小时吗？',
        answer: 'Spectrum 技术支持是 24/7 的，但高峰期可能需要等待。商业客户有优先支持。',
      },
      {
        question: '技术支持会收费吗？',
        answer: '电话支持通常免费。但如果需要技术人员上门，可能需要支付上门费（除非是设备故障）。',
      },
      {
        question: '可以要求中文支持吗？',
        answer: 'Spectrum 有中文客服，但可能需要等待。我们提供中文翻译服务，帮您与技术支持的沟通。',
      },
      {
        question: '问题解决不了怎么办？',
        answer: '可以要求升级到高级技术支持，或联系客服经理。我们帮您准备材料，争取更好的解决方案。',
      },
    ],
  },
  {
    id: 'promotion',
    title: '续约与优惠',
    icon: <DollarSign size={20} />,
    items: [
      {
        question: '促销到期后可以续约吗？',
        answer: '可以。我们可以在促销到期前帮您重新申请优惠，可能获得新的促销价格。',
      },
      {
        question: '如何获得新用户优惠？',
        answer: '如果家庭成员没有 Spectrum 账户，可以用新名字申请，获得新用户优惠。我们帮您处理。',
      },
      {
        question: '可以协商价格吗？',
        answer: '可以。联系 Retention 部门，说明情况，可能获得价格调整。我们帮您准备话术和材料。',
      },
      {
        question: '续约有什么优惠？',
        answer: '续约可能有：价格锁定、免费升级、设备折扣等。我们帮您申请最佳续约优惠。',
      },
      {
        question: '什么时候联系续约最好？',
        answer: '建议在促销到期前 30 天联系，有足够时间协商和申请优惠。',
      },
    ],
  },
  {
    id: 'other',
    title: '其他问题',
    icon: <HelpCircle size={20} />,
    items: [
      {
        question: '可以暂停服务吗？',
        answer: '可以。如果短期不在家，可以暂停服务（通常需要支付少量费用），避免完全取消。',
      },
      {
        question: '账户可以多人使用吗？',
        answer: '账户是个人账户，但可以设置多个用户。家庭成员可以共享账户，但账单由主账户负责。',
      },
      {
        question: '可以更改账户信息吗？',
        answer: '可以。可以在线更改地址、电话、支付方式等信息。我们帮您处理账户信息更新。',
      },
      {
        question: 'Spectrum 有移动应用吗？',
        answer: '有。Spectrum 移动应用可以管理账户、查看账单、控制 WiFi、联系技术支持等。',
      },
      {
        question: '遇到问题可以找你们吗？',
        answer: '可以。鸿达电讯中文顾问提供全程中文支持，帮您解决账单、技术、转网等各种问题。',
      },
    ],
  },
]
