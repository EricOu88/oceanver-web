// AT&T 家庭合约计划 FAQ 数据
// 按「售前」「售后」两大分类 + Reddit 热门问题

export interface FAQItem {
  question: string
  answer: string
  id?: string
  isDefaultOpen?: boolean
  isHot?: boolean // 热门问题标记
}

export interface FAQCategory {
  id: string
  title: string
  subtitle: string
  items: FAQItem[]
}

export const faqCategories: FAQCategory[] = [
  {
    id: 'pre-sales',
    title: '售前问题',
    subtitle: '购买之前你想了解的',
    items: [
      // ===== 无 SSN 办理 =====
      {
        question: '没有 SSN 可以办 AT&T 家庭计划吗？',
        answer: '可以。没有 SSN 也可以正常办理 AT&T 家庭计划。',
        isDefaultOpen: true,
        isHot: true,
      },
      {
        question: '无 SSN 需要押金吗？',
        answer: '不需要任何押金，但是会根据选择购买的手机价格，需要 Down Payment（首付款）。',
      },
      {
        question: '办理需要准备哪些材料？',
        answer: `通常需要：
• 护照或驾照
• 地址证明（租房合同或账单）
• 支付方式（信用卡 / 银行账户）

如果是家庭计划，无需所有人员信息，只需提供一位成员资料作为主账户即可。`,
      },

      // ===== 套餐选择 =====
      {
        question: 'AT&T 家庭计划有流量限制吗？',
        answer: '所有家庭合约计划提供无限数据流量，普通套餐高峰期时速度会降慢，高级套餐全程高速。',
        isHot: true,
      },
      {
        question: 'AT&T 家庭计划有哪些套餐可以选？',
        answer: `家庭计划包含三档套餐：

【Unlimited Starter】入门版
• 无限北美地区通话与短信
• 无限数据流量（高峰期时会有降速）
• 5GB 热点
• 标清画质

【Unlimited Extra】进阶版
• 无限北美地区通话与短信
• 无限数据流量（前 75GB 全速，之后高峰期降速）
• 30GB 热点
• 标清画质

【Unlimited Premium】旗舰版
• 无限北美地区通话与短信
• 无限数据流量（全程高速，不降速）
• 60GB 热点
• 4K UHD 画质`,
      },
      {
        question: '什么是"高峰期降速"？会很慢吗？',
        answer: `当网络拥堵时，Starter 和 Extra 套餐可能会临时降速。

实际体验：
• 大部分时间感知不到差别
• 只在人多的地方（体育场、演唱会）可能变慢
• 日常刷视频、微信完全够用

如果经常需要稳定高速，建议选 Premium 套餐。`,
        isHot: true,
      },
      {
        question: '特殊群体有额外优惠吗？',
        answer: '是的，军人、教师、学生、医生、护士、55 岁以上用户等，都可以在现有优惠的基础上，额外再得到最高 25% 的折扣。',
      },

      // ===== 合约与期限 =====
      {
        question: 'AT&T 手机计划有合约吗？',
        answer: `三种情况：

【买手机】
• 36 个月合约，手机分期
• 需要 SSN + 驾照/护照
• 适合多人团体、需要新手机的顾客

【自带手机 BYOD】
• 无合约，月付
• 需要 SSN + 驾照/护照
• 适合已有手机的顾客

【预付电话卡 Prepaid】
• 无合约，无需实名认证
• 适合单人或短期使用`,
      },
      {
        question: '可以提前解约吗？会有违约金吗？',
        answer: `AT&T 没有违约金！

• 未买手机：结清当月账单即可离开
• 买了合约机：一次性补交手机剩余尾款 + 解锁手机即可

不会额外收取任何违约费用。`,
        isHot: true,
      },

      // ===== 费用相关 =====
      {
        question: '除了月费，还有其他费用吗？',
        answer: `可能涉及的费用：
• 激活费：新线或升级设备 $35（部分情况可免）
• 行政费：账单包含"行政与监管成本回收费"
• 州税：各州税率不同

省钱技巧：
绑定支票账户 Auto Pay，每条线省 $10/月！`,
      },

      // ===== 设备相关 =====
      {
        question: '我现在的手机能用 AT&T 吗？',
        answer: `大部分手机都支持，但需要满足：
• 手机已解锁（Unlocked）
• 支持 GSM 网络制式
• 最好支持 AT&T 的 5G 频段

不确定？把手机型号告诉我们，免费帮你查！`,
        isHot: true,
      },
      {
        question: 'Trade in 旧手机怎么操作？',
        answer: `两种方式：
• 送至 AT&T 营业厅当面交
• 打印 Shipping Label 邮寄到 AT&T 指定地址

旧手机最高可抵 $1000+，具体金额取决于机型和成色。`,
      },
      {
        question: 'AT&T 支持 eSIM 吗？',
        answer: `支持！eSIM 特别方便：
• iPhone XR 及以上机型都支持
• 部分安卓旗舰机也支持
• 不需要实体 SIM 卡
• 远程即可激活
• 人在国内也能提前办好号码`,
        isHot: true,
      },

      // ===== 转网相关 =====
      {
        question: '从别家转到 AT&T 能保留原号码吗？',
        answer: `可以！转网保号步骤：
1. 不要先取消原运营商服务
2. 准备好原账户号码 + Transfer PIN
3. 我们帮你提交转网申请
4. 通常几分钟到 1-2 个工作日完成

号码转移期间，旧卡和新卡可能都能用，属于正常现象。`,
        isHot: true,
      },
      {
        question: 'Apple Watch / 智能手表能加入计划吗？',
        answer: `可以！智能手表单独加线：
• 每月仅需 $10 左右
• 支持 Apple Watch、三星等品牌
• 可以独立接打电话、收发短信
• 不带手机也能保持联络`,
      },
    ],
  },
  {
    id: 'after-sales',
    title: '售后问题',
    subtitle: '购买之后使用中遇到的',
    items: [
      // ===== 流量问题 =====
      {
        question: '流量用完了会怎样？',
        answer: '所有 AT&T 家庭计划都是无限流量，不会"用完"。只是普通套餐高峰期时速度可能会降慢，高级套餐全程高速。',
        isDefaultOpen: true,
        isHot: true,
      },
      {
        question: '热点流量有限制吗？',
        answer: `有的，不同套餐热点额度不同：
• Starter：5GB / 月
• Extra：30GB / 月
• Premium：60GB / 月

超出后热点会降速，但手机本身的流量不受影响。`,
      },

      // ===== 账单问题 =====
      {
        question: '怎么才能省月费？',
        answer: `绑定 AutoPay + 无纸化账单：
• 支票账户（Checking）：$10 off / 条
• Debit Card：$5 off / 条
• Credit Card：无优惠

4 条线就能省 $40/月！记得同时开通无纸化账单。`,
        isHot: true,
      },
      {
        question: '如何查看账单明细？',
        answer: `两种方式：
• 网页：登录 att.com，进入 My AT&T
• App：下载 myAT&T App

可以看到每条线的用量、费用明细、历史账单。`,
      },
      {
        question: '账单有错误怎么办？',
        answer: `发现账单有问题，联系我们：
1. 我们帮你核实账单明细
2. 准备申诉材料
3. 与 AT&T 客服沟通
4. 争取退款或更正

很多"隐藏费用"其实可以申诉退回。`,
        isHot: true,
      },
      {
        question: '为什么账单比预期高？',
        answer: `常见原因：
• 首月账单含激活费、设备税等一次性费用
• 促销期结束，恢复原价
• 未开通 Auto Pay 优惠
• 手机分期开始计入账单

建议每月检查一次账单明细。`,
      },

      // ===== 升级与调整 =====
      {
        question: '使用过程中可以更换套餐吗？',
        answer: `可以随时调整：
• 升级套餐：立即生效
• 降级套餐：下个账单周期生效
• 可以全家一起换，也可以单独调整某条线

我们可以帮你分析哪个套餐最适合。`,
      },
      {
        question: '现有套餐可以加线吗？',
        answer: `当然可以！
• 每个账户最多 10 条线
• 加线越多，每条线越便宜
• 新加的线也享受家庭折扣

朋友、室友也可以一起加入省钱。`,
      },

      // ===== 国际使用 =====
      {
        question: '国际漫游费用是多少？',
        answer: `AT&T International Day Pass：
• $12 / 天（用多少天算多少天）
• $120 / 月封顶
• 覆盖 210+ 国家和地区

回国探亲、出差旅游都适用，不用换卡。`,
        isHot: true,
      },
      {
        question: '去中国用 AT&T 划算吗？',
        answer: `短期（1-2 周）可以用 Day Pass，$12/天。

长期建议：
• 开通 WiFi Calling 用 WiFi 打电话
• 在国内买张临时流量卡
• 或者暂停 AT&T 服务

我们可以帮你规划最省钱的方案。`,
      },

      // ===== 手机问题 =====
      {
        question: '手机丢失或摔坏了怎么办？',
        answer: `AT&T 提供设备保险：
• $17 / 月 / 条
• 或 $50 / 月 / 4 条（家庭更划算）

丢失、被盗、意外损坏都能理赔，换新机或维修。`,
      },
      {
        question: '手机丢了第一时间做什么？',
        answer: `立即操作：
1. 用 Find My iPhone / Find My Device 定位
2. 远程锁定或抹除数据
3. 联系 AT&T 挂失号码
4. 如有保险，申请理赔

挂失后别人无法用你的号码产生费用。`,
        isHot: true,
      },
      {
        question: '合约机可以解锁吗？',
        answer: `可以，但需要满足条件：
• 手机已付清全款（分期结束）
• 账户状态正常
• 手机使用满 60 天

满足条件后，申请解锁通常 24-48 小时完成。`,
      },

      // ===== 取消与转网 =====
      {
        question: '提前解约费是多少？',
        answer: `AT&T 没有违约金！
• 未买手机：结清当月账单即可
• 有合约机：补交手机剩余尾款即可

没有额外罚款，随时可以走。`,
      },
      {
        question: '从 AT&T 转网需要怎么操作？',
        answer: `转网步骤（非常重要）：
1. 如有合约机，先结清尾款并解锁
2. 获取 Account Number（账户号码）
3. 获取 Transfer PIN（转移密码）
4. 把这两个信息给新运营商

⚠️ 不要先取消 AT&T 服务，否则号码会丢失！`,
        isHot: true,
      },

      // ===== 家长控制 =====
      {
        question: '能给小孩设置使用限制吗？',
        answer: `可以！AT&T Secure Family 功能：
• 定位追踪孩子位置
• 限制使用时间
• 过滤不良内容
• App 使用监控

需要额外付费，但对有孩子的家庭很实用。`,
      },

      // ===== 信号问题 =====
      {
        question: '信号不好怎么办？',
        answer: `几种解决方案：
• 开启 WiFi Calling（用 WiFi 打电话）
• 申请 AT&T Cell Booster 信号放大器
• 检查手机是否支持所有 AT&T 频段

如果长期信号差，可以联系客服反馈。`,
      },
      {
        question: 'WiFi Calling 是什么？怎么开？',
        answer: `WiFi Calling = 用 WiFi 网络打电话
• 在信号差的地方特别有用
• 通话质量和正常打电话一样
• 不额外收费

开启方法：设置 > 电话 > WiFi 通话 > 打开`,
        isHot: true,
      },
    ],
  },
]

// 生成所有 FAQ 用于 Schema
export function getAllFAQsForSchema() {
  return faqCategories.flatMap((category) =>
    category.items.map((item) => ({
      question: item.question,
      answer: item.answer.replace(/\n/g, ' ').replace(/•/g, '-').replace(/【/g, '').replace(/】/g, ': ').replace(/⚠️/g, ''),
    }))
  )
}

// 获取热门问题
export function getHotQuestions() {
  return faqCategories.flatMap((category) =>
    category.items.filter((item) => item.isHot).map((item) => ({
      ...item,
      categoryId: category.id,
      categoryTitle: category.title,
    }))
  )
}
