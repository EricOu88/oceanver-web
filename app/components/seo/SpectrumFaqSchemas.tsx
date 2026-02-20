/**
 * Spectrum FAQ 结构化数据（JSON-LD）
 * 包含两套独立的 FAQPage Schema：售前 / 售后
 * 可复用到其他运营商页面
 */

// 售前 FAQ 问题与答案
const preSalesFAQ = [
  {
    question: '我的地址能装 Spectrum 吗？',
    answer: 'Spectrum 在全美覆盖最广，大部分地址都支持。但具体能否安装需要查询您的详细地址。我们可以帮您免费查询地址覆盖和套餐价格。',
  },
  {
    question: '公寓能装 Spectrum 吗？',
    answer: '大部分公寓都有覆盖，但需要确认楼内是否有线路接口，有些公寓可能预装有接口，安装会更快。',
  },
  {
    question: 'Spectrum 安装需要多长时间？',
    answer: '一般需要1-2周，如预留已有线路，可在当天完成安装。首次安装可能需要技术上门。',
  },
  {
    question: '安装费是多少？',
    answer: 'Spectrum 安装通常是免费，但根据您选定的套餐可能需要支付设备押金或购买路由器。具体费用取决于您选择的套餐。',
  },
  {
    question: '可以自己安装吗？',
    answer: '如果地址已有Spectrum 线路，可以申请自主安装 （Self-Install Kit）。新地址通常需要技术人员上门安装。',
  },
  {
    question: 'Spectrum 有哪些套餐可以选择？',
    answer: 'Spectrum 提供从 300Mbps 到1000Mbps 等多种网速选择，价格从 $30/月-$100+/月 不等。有促销活动时价格更优惠！',
  },
  {
    question: '如何选择适合自己的套餐？',
    answer: '根据您的家庭成员及日常生活所需习惯，我们会给您推荐最优方案，住家宽带促销更多，适合家庭使用。',
  },
  {
    question: '商业地址能否办理Spectrum？',
    answer: '可以。商业宽带通常更稳定，有 SLA 保障，价格结构不同，适合办公室和店铺。',
  },
  {
    question: '有隐藏或后期收费吗？',
    answer: '根据您的订购套餐，会有$35（一次性激活费）部分促销地区可以免收激活费。',
  },
  {
    question: '上网流量会用限制吗？',
    answer: '订购Spectrum 网络，无限数据流量，可以畅游。',
  },
  {
    question: '没有社会安全号可以办理 Spectrum 吗？',
    answer: '可以。Spectrum 支持无 SSN 办理，但可能需要支付押金，或需提前预付账单。我们有无 SSN 的办理方案。',
  },
  {
    question: '程序繁琐吗？会不会很复杂？',
    answer: '我们全程中文协助，帮您填写表格、准备材料、与客服沟通，通常 1-2 天即可完成。按指导流程 注册激活即可。',
  },
  {
    question: '都需要提供什么信息？',
    answer: '只需登记的名字、电话、Email、生日 即可，部分地址可能需要提供信用卡支付押金或提前预付账单。',
  },
  {
    question: 'Spectrum 网络有合约约束吗？',
    answer: '活动促销 12个月期，可以提前终止，无任何违约金。',
  },
  {
    question: '可以按月支付吗？',
    answer: '可以自主选择绑定信用卡 自动付款，或每月按照账单支付。',
  },
  {
    question: '需要自己买设备吗？',
    answer: 'Spectrum 提供免费 modem 只需自备 Router ，如需租用 Router 每月支付$10  部分套餐免费提供Modem+Router。',
  },
  {
    question: 'Spectrum 新用户有什么优惠？',
    answer: '新用户有12个月的促销活动价格，相比较12个月以上的老用户的标准价格 低$20月-$60/月，还有免费安装、免费modem等优惠。',
  },
  {
    question: '价格可以锁定长期吗？',
    answer: 'Specrum 促销价格有期限，无法永久锁定。我们可以在您的优惠结束之前，帮您重新申请新用户促销价格。',
  },
]

// 售后 FAQ 问题与答案
const afterSalesFAQ = [
  {
    question: '为什么账单突然涨价了？',
    answer: '最常见原因是促销价格到期，自动恢复到标准价格、优惠结束设备费用增加等原因。也可能是因为流量超限。',
  },
  {
    question: '账单涨价了可以降回来吗？',
    answer: '可以。我们可以帮您重新申请优惠、更换更合适的套餐。很多客户成功申请新的优惠促销。',
  },
  {
    question: '如何查看账单明细？',
    answer: '登录 Online 账户 ，在"账单"页面可以查看详情，有任何疑问，可以找到我们帮你分析，找出可以节省的地方。',
  },
  {
    question: '实际速度比宣传慢很多？',
    answer: '可能原因：路由器问题、设备距离太远、高峰期拥堵、线路问题，我们可以帮您诊断并解决。',
  },
  {
    question: 'WIFI 信号弱是什么原因？',
    answer: '移动路由器位置、使用 WiFi 扩展器、升级路由器、使用有线连接。我们推荐合适的解决方案。',
  },
  {
    question: '晚上速度慢，会出现闪断？',
    answer: '这是 Cable 宽带的常见问题，高峰期（晚上 7-11 点）网络拥堵导致速度下降。可以考虑升级套餐或换光纤，可以大幅度改善此问题。',
  },
  {
    question: '实际网速达不到宣传速度？',
    answer: '使用 speedtest.net 或 fast.com 测试。建议用有线连接测试，排除 WiFi 干扰。我们帮您分析测试结果。',
  },
  {
    question: '经常断网怎么办？',
    answer: '可能原因：线路问题、设备故障、信号干扰。先重启路由器，如果持续，联系技术支持检查线路。',
  },
  {
    question: '路由器会影响网络吗？',
    answer: '如果遇到连接问题，重启路由器通常能解决。建议每周重启一次，保持设备最佳状态。它是传输网络的最关键设备，一定要能支持与您订购的网速达标。',
  },
  {
    question: '无法连接WIFI',
    answer: '检查：路由器是否正常、密码是否正确、设备是否在范围内、是否被屏蔽。设备是否故障，我们帮您逐步排查。',
  },
  {
    question: '路由器坏了怎么办',
    answer: '如果使用运营商提供的路由器，我们可以帮您免费更换。如果自备设备，需要购买新设备，或重新办理：选用运营商路由器。',
  },
  {
    question: '可以升级套餐吗？',
    answer: '可以。随时可以升级套餐，通常立即生效。升级可能有促销价格，我们帮您申请最佳优惠。',
  },
  {
    question: '如何取消现在用的网络？',
    answer: '联系客服取消服务，可能需要支付违约金（如果在合约期内）。我们帮您处理取消手续。',
  },
  {
    question: '搬家的话可以转移在用的网络吗？',
    answer: '可以！新地址需满足有同一家网络运营提供，确保有同一家运营商服务，我们免费帮您转移。',
  },
  {
    question: '如何联系真人客服？',
    answer: '可以电话、在线聊天、或通过客服微信，我们帮你处理问题、协助与技术沟通。',
  },
  {
    question: '促销到期后可以继续保持吗？',
    answer: '可以，但通常维持时间不久，我们会再促销到期前帮您重新申请优惠，可能获得更优惠新的促销价格。',
  },
]

/**
 * 生成 FAQPage Schema JSON-LD
 */
function generateFAQSchema(faqList: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqList.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

/**
 * Spectrum FAQ 结构化数据组件
 * 输出两套独立的 FAQPage Schema（售前 / 售后）
 */
export default function SpectrumFaqSchemas() {
  const preSalesSchema = generateFAQSchema(preSalesFAQ)
  const afterSalesSchema = generateFAQSchema(afterSalesFAQ)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(preSalesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(afterSalesSchema) }}
      />
    </>
  )
}
