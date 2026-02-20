/**
 * 美国 Prepaid 电话卡 FAQ 结构化数据（JSON-LD）
 * 包含两套独立的 FAQPage Schema：售前 / 售后
 * 共 100 个问题（售前 50 个，售后 50 个）
 */

// 售前 FAQ 问题与答案（50 个）
export const preSalesFAQ = [
  {
    question: 'Prepaid 和 Postpaid 有什么区别？',
    answer: 'Prepaid 先付费后使用，无合约、不查信用；Postpaid 需信用记录、可能有合约。',
  },
  {
    question: 'Prepaid 是否需要 SSN？',
    answer: '不需要，护照即可。',
  },
  {
    question: 'Prepaid 是否需要信用检查？',
    answer: '完全不需要。',
  },
  {
    question: 'Prepaid 是否可以随时取消？',
    answer: '可以，不续费即可自动停机。',
  },
  {
    question: 'Prepaid 是否有合约？',
    answer: '没有合约，随时可停。',
  },
  {
    question: 'Prepaid 是否可以分期买手机？',
    answer: '一般不可以，分期属于 Postpaid。',
  },
  {
    question: 'Prepaid 是否适合短期旅行？',
    answer: '非常适合，灵活、无合约。',
  },
  {
    question: 'Prepaid 是否适合留学生？',
    answer: '非常适合，无需 SSN、价格更低。',
  },
  {
    question: 'Prepaid 是否适合长期使用？',
    answer: '可以，尤其是 MVNO 价格更划算。',
  },
  {
    question: 'Prepaid 是否支持 5G？',
    answer: '大部分支持，但速度可能低于 Postpaid。',
  },
  {
    question: '美国 Prepaid 常见运营商有哪些？',
    answer: 'AT&T、T Mobile、Verizon 及 Mint、H2O、Lyca、Ultra 等 MVNO。',
  },
  {
    question: '哪个运营商信号最好？',
    answer: 'Verizon 覆盖最广；AT&T 综合强；T Mobile 城市地区速度快。',
  },
  {
    question: 'MVNO 信号会比主网差吗？',
    answer: '覆盖一样，但优先级较低，高峰期可能变慢。',
  },
  {
    question: '在农村地区用哪个更好？',
    answer: 'Verizon 或 AT&T。',
  },
  {
    question: '在城市地区哪个更快？',
    answer: 'T Mobile 5G 通常最快。',
  },
  {
    question: 'Prepaid 是否支持 VoLTE？',
    answer: '大部分支持。',
  },
  {
    question: '是否支持 WiFi Calling？',
    answer: '主网支持；部分 MVNO 不支持。',
  },
  {
    question: '是否支持 eSIM？',
    answer: '大部分支持，尤其是主网。',
  },
  {
    question: 'eSIM 是否比实体卡更快？',
    answer: '激活更快，但功能一样。',
  },
  {
    question: '是否可以同时使用双卡？',
    answer: '取决于手机是否支持双卡双待。',
  },
  {
    question: 'Prepaid 套餐是否含税？',
    answer: '主网一般不含税；MVNO 多数含税。',
  },
  {
    question: '套餐是否包含热点？',
    answer: '多数包含，但有流量限制。',
  },
  {
    question: '套餐是否无限流量？',
    answer: '有些是无限，但可能限速。',
  },
  {
    question: '无限流量是否真的无限？',
    answer: '数据无限，但超过阈值后可能降速。',
  },
  {
    question: '套餐是否包含国际通话？',
    answer: '部分包含，部分需额外购买。',
  },
  {
    question: '套餐是否包含国际漫游？',
    answer: '主网部分套餐支持，加拿大/墨西哥为主。',
  },
  {
    question: '套餐是否可以随时更换？',
    answer: '可以，但部分套餐换掉后无法恢复。',
  },
  {
    question: '套餐是否可以多人共享？',
    answer: 'Prepaid 一般不支持家庭共享。',
  },
  {
    question: '套餐是否可以自动续费？',
    answer: '可以，绑定信用卡即可。',
  },
  {
    question: '自动续费是否有折扣？',
    answer: '部分运营商有 AutoPay 优惠。',
  },
  {
    question: '是否可以携号转网？',
    answer: '可以，需要 Account Number + PIN。',
  },
  {
    question: '携号转网需要多久？',
    answer: '5 分钟到 24 小时。',
  },
  {
    question: '中国号码能转到美国吗？',
    answer: '不能。',
  },
  {
    question: '是否可以保留中国号码？',
    answer: '可以，保持最低套餐即可。',
  },
  {
    question: '新号码是否可以选择？',
    answer: '部分运营商支持选号。',
  },
  {
    question: '号码是否可以暂停？',
    answer: 'Prepaid 不支持暂停，只能不续费。',
  },
  {
    question: '号码不续费多久会被回收？',
    answer: '一般 30–90 天。',
  },
  {
    question: '是否可以提前知道号码？',
    answer: '部分 eSIM 激活后才显示号码。',
  },
  {
    question: '是否可以换号码？',
    answer: '可以，联系客服即可。',
  },
  {
    question: '是否可以同时拥有多个号码？',
    answer: '可以，只要设备支持。',
  },
  {
    question: '手机是否必须解锁？',
    answer: '必须是无锁机或已解锁。',
  },
  {
    question: '中国手机能用美国卡吗？',
    answer: '大部分能用，但需支持美国频段。',
  },
  {
    question: 'iPhone 是否都支持？',
    answer: 'iPhone XR 以上基本都支持。',
  },
  {
    question: '安卓是否都支持？',
    answer: '需看频段，部分国产机不完全兼容。',
  },
  {
    question: '是否支持 5G SA？',
    answer: 'T Mobile 支持最广。',
  },
  {
    question: '是否支持热点共享？',
    answer: '大部分支持。',
  },
  {
    question: '是否支持平板？',
    answer: '部分支持，但需确认 IMEI。',
  },
  {
    question: '是否支持智能手表？',
    answer: 'Prepaid 一般不支持手表独立号码。',
  },
  {
    question: '是否支持车载设备？',
    answer: '部分运营商支持。',
  },
  {
    question: '是否支持国际版手机？',
    answer: '大部分支持，但需确认频段。',
  },
]

// 售后 FAQ 问题与答案（50 个）
export const afterSalesFAQ = [
  {
    question: 'eSIM 激活失败怎么办？',
    answer: '重启手机、重新安装 eSIM，或联系客服重新发送。',
  },
  {
    question: '实体卡插入无信号怎么办？',
    answer: '检查 SIM 卡方向、重启手机。',
  },
  {
    question: '激活后没有号码显示？',
    answer: '等待几分钟或重启手机。',
  },
  {
    question: '激活后无法上网？',
    answer: '检查 APN 设置是否正确。',
  },
  {
    question: '激活后无法打电话？',
    answer: '检查 VoLTE 是否开启。',
  },
  {
    question: '激活后无法收短信？',
    answer: '重启手机或重新注册网络。',
  },
  {
    question: '激活后显示 SOS？',
    answer: '可能是设备锁或 IMEI 不支持。',
  },
  {
    question: '激活后显示 No Service？',
    answer: '检查是否在覆盖范围内。',
  },
  {
    question: '激活后无法使用 5G？',
    answer: '确认套餐是否支持 5G。',
  },
  {
    question: '激活后无法使用热点？',
    answer: '确认套餐是否包含热点。',
  },
  {
    question: '信号弱怎么办？',
    answer: '尝试手动选择运营商或换位置。',
  },
  {
    question: '网络速度慢怎么办？',
    answer: '高峰期 MVNO 会限速，属正常。',
  },
  {
    question: '经常掉线怎么办？',
    answer: '重启手机或更新运营商设置。',
  },
  {
    question: '无法连接数据网络？',
    answer: '检查 APN、飞行模式、数据开关。',
  },
  {
    question: '5G 不稳定怎么办？',
    answer: '切换到 LTE 更稳定。',
  },
  {
    question: 'WiFi Calling 无法使用？',
    answer: '确认是否支持、是否开启。',
  },
  {
    question: 'VoLTE 无法使用？',
    answer: '检查手机是否支持美版 VoLTE。',
  },
  {
    question: '出国后无法漫游？',
    answer: '确认套餐是否包含漫游。',
  },
  {
    question: '在室内信号差？',
    answer: '美国室内穿透弱，属正常。',
  },
  {
    question: '在高速路信号差？',
    answer: '部分地区覆盖不足。',
  },
  {
    question: '如何续费？',
    answer: '官网、APP、充值卡、店铺代充。',
  },
  {
    question: '自动续费扣费失败？',
    answer: '检查银行卡是否有效。',
  },
  {
    question: '如何关闭自动续费？',
    answer: '在账户中关闭 AutoPay。',
  },
  {
    question: '如何查看剩余流量？',
    answer: '官网或 APP。',
  },
  {
    question: '如何查看账单？',
    answer: 'Prepaid 无账单，可查看充值记录。',
  },
  {
    question: '如何修改套餐？',
    answer: '登录账户即可。',
  },
  {
    question: '套餐更换后无法恢复？',
    answer: '部分套餐确实不可恢复。',
  },
  {
    question: '如何暂停号码？',
    answer: 'Prepaid 不支持暂停。',
  },
  {
    question: '如何保号？',
    answer: '选择最低套餐月付。',
  },
  {
    question: '如何注销号码？',
    answer: '不续费即可自动停机。',
  },
  {
    question: '无法接收验证码？',
    answer: '换网络、重启、或换短信中心号码。',
  },
  {
    question: '无法发送短信？',
    answer: '检查短信中心号码或余额。',
  },
  {
    question: '无法接收国际短信？',
    answer: '部分 MVNO 不支持。',
  },
  {
    question: '无法接收银行短信？',
    answer: '建议使用主网（AT&T/T Mobile）。',
  },
  {
    question: '收到垃圾短信？',
    answer: '可屏蔽或举报。',
  },
  {
    question: '收到骚扰电话？',
    answer: '可更换号码。',
  },
  {
    question: '号码被停机？',
    answer: '可能未续费。',
  },
  {
    question: '号码被回收？',
    answer: '超过保留期未续费。',
  },
  {
    question: '号码能恢复吗？',
    answer: '多数情况下不能。',
  },
  {
    question: '如何换号码？',
    answer: '联系客服即可。',
  },
  {
    question: '换手机后 eSIM 不能用？',
    answer: '需重新下载 eSIM。',
  },
  {
    question: '如何转移 eSIM？',
    answer: '登录账户重新下载。',
  },
  {
    question: '手机不支持美国频段？',
    answer: '可能无法使用 5G 或 LTE。',
  },
  {
    question: '手机锁未解锁？',
    answer: '需联系原运营商解锁。',
  },
  {
    question: 'APN 设置丢失？',
    answer: '手动重新添加。',
  },
  {
    question: '热点无法使用？',
    answer: '套餐可能不包含热点。',
  },
  {
    question: 'VoLTE 无法开启？',
    answer: '部分国产机不支持美版 VoLTE。',
  },
  {
    question: 'eSIM 无法删除？',
    answer: '在设置中移除即可。',
  },
  {
    question: 'eSIM 删除后如何恢复？',
    answer: '需重新发送激活码。',
  },
  {
    question: '手机系统更新后网络异常？',
    answer: '重启或重新安装 eSIM。',
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
 * Prepaid 电话卡 FAQ 结构化数据组件
 * 输出两套独立的 FAQPage Schema（售前 / 售后）
 */
export default function PrepaidPhoneFaqSchemas() {
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
