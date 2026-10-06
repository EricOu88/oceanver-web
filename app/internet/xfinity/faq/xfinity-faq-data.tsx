export interface FAQItem {
  question: string
  answer: string
  id?: string
  isHot?: boolean
}

export interface FAQSubCategory {
  id: string
  title: string
  items: FAQItem[]
}

export interface FAQMainCategory {
  id: string
  title: string
  shortTitle: string
  description: string
  subCategories: FAQSubCategory[]
}

export const billingCategory: FAQMainCategory = {
  id: 'billing',
  title: '账单与涨价',
  shortTitle: '账单涨价',
  description: '先判断钱到底涨在哪里',
  subCategories: [
    {
      id: 'bill-change',
      title: '账单变化',
      items: [
        {
          question: 'Xfinity 账单突然涨价，先看什么？',
          answer:
            '先比较最近两到三期账单中的相同项目，不要只看总金额。重点检查基础 Internet 月费、Promotion 或 Credit、AutoPay、设备费和附加服务，再排除安装、激活、账期调整等一次性费用。',
          isHot: true,
        },
        {
          question: '为什么 Xfinity 用了一段时间以后变贵？',
          answer:
            '常见原因包括原有折扣结束、基础月费变化、AutoPay 条件变化、设备或附加服务收费变化。具体原因应以当前账户和账单项目为准，不能假设所有涨价都来自促销到期。',
        },
        {
          question: '怎么判断涨价是一次性的还是以后都会收？',
          answer:
            '查看收费项目是否标注为 recurring，并比较下一期账单是否再次出现。安装、激活、技术员上门、设备事件或账期调整可能只出现一次；基础月费、设备月租和附加服务则更可能持续。',
        },
        {
          question: '为什么第一期 Xfinity 账单特别高？',
          answer:
            '第一期账单可能同时包含正常月费、按比例计算的服务周期、设备或一次性项目。应先查看每个收费项目及对应服务日期，再判断以后月份是否仍会重复。',
        },
      ],
    },
    {
      id: 'discount-payment',
      title: '折扣与付款',
      items: [
        {
          question: 'AutoPay 折扣为什么消失了？',
          answer:
            '付款方式、Paperless Billing 设置、账户状态或资格规则变化，都可能影响折扣。先检查账户设置和账单，再以当前账户显示的资格与生效时间为准。',
        },
        {
          question: '账单里突然多了一个不认识的项目怎么办？',
          answer:
            '先记录项目名称、金额、首次出现时间以及是否 recurring，再回看之前是否有套餐、设备或服务变更。如果来源仍不清楚，应让运营商核对账户变更记录，而不是只根据总金额判断。',
        },
        {
          question: 'Xfinity 老用户为什么可能比以前贵？',
          answer:
            '账户使用时间变长后，原有折扣、价格或服务结构可能发生变化。应比较当前账户的长期成本，而不是假设老用户一定能继续获得原来的价格或新用户条件。',
          isHot: true,
        },
      ],
    },
  ],
}

export const wifiCategory: FAQMainCategory = {
  id: 'wifi-speed',
  title: '网速与 Wi-Fi',
  shortTitle: '网速 Wi-Fi',
  description: '先分清套餐速度和家庭网络问题',
  subCategories: [
    {
      id: 'wifi-slow',
      title: 'Wi-Fi 速度',
      items: [
        {
          question: 'Xfinity Wi-Fi 很慢，是不是套餐速度不够？',
          answer:
            '不一定。如果靠近 Gateway 或使用网线时正常，而远处房间明显变慢，更像是 Wi-Fi 覆盖问题。只有多台设备、多个位置甚至有线测试都持续异常时，才更需要检查入户线路或服务本身。',
          isHot: true,
        },
        {
          question: '为什么只有卧室或楼上网速慢？',
          answer:
            '这通常更像无线覆盖问题。距离、墙体、楼层、Gateway 位置和干扰都可能影响 Wi-Fi。单纯升级互联网套餐速度，不一定能改善远处房间的无线信号。',
        },
        {
          question: '为什么只有一台设备网速特别慢？',
          answer:
            '如果其他设备正常，应先检查这台设备的 Wi-Fi 连接、系统、网卡、VPN、后台下载或浏览器等因素。单台设备异常通常不足以证明 Xfinity 线路本身有问题。',
        },
        {
          question: '测速很高，为什么实际使用还是卡？',
          answer:
            '测速只能反映测试当时某个设备到测试服务器的表现。视频会议、游戏和实际浏览还会受到延迟、丢包、Wi-Fi 覆盖、设备性能和应用服务器影响，因此不能只看一个下载速度数字。',
        },
      ],
    },
  ],
}

export const outageCategory: FAQMainCategory = {
  id: 'outage-line',
  title: '断网与线路',
  shortTitle: '断网线路',
  description: '判断是区域中断、设备还是线路',
  subCategories: [
    {
      id: 'disconnect',
      title: '掉线与 Outage',
      items: [
        {
          question: 'Xfinity 突然断网，第一步应该做什么？',
          answer:
            '先确认是所有设备同时断网还是只有某一台设备异常，然后查看 Gateway 或 Modem 指示灯，并检查是否存在区域 Outage。这样可以先把设备、家庭 Wi-Fi 和运营商网络问题分开。',
          isHot: true,
        },
        {
          question: 'Xfinity 经常掉线，为什么重启以后又好了？',
          answer:
            '重启可以暂时恢复设备状态，但如果问题反复出现，不代表根因已经解决。应记录掉线时间、频率、所有设备是否同时受影响，以及重启后能维持多久，再继续判断设备、信号或线路。',
        },
        {
          question: '怎么判断是不是线路问题？',
          answer:
            '如果多个设备同时出现异常、有线连接也受影响、设备指示灯异常，并且问题反复发生，就更值得检查入户线路或运营商网络。如果只是某个房间或单台设备异常，则应先排查家庭网络。',
        },
        {
          question: '晚上特别慢，是线路问题吗？',
          answer:
            '不一定。晚间变慢可能与家庭同时使用设备增加、Wi-Fi 干扰、当地网络负载或其他因素有关。最好比较不同时间、不同设备以及有线和无线测试结果后再判断。',
        },
      ],
    },
  ],
}

export const equipmentCategory: FAQMainCategory = {
  id: 'equipment',
  title: '设备与费用',
  shortTitle: '设备费用',
  description: 'Gateway、Modem、退还与设备记录',
  subCategories: [
    {
      id: 'gateway',
      title: 'Gateway 与设备',
      items: [
        {
          question: 'Xfinity 设备费为什么突然增加？',
          answer:
            '可能与 Gateway、Modem、Extender、设备优惠结束、设备更换或账户设备记录有关。应核对设备名称、收费类型以及是否按月重复，再确认账户中实际登记了哪些设备。',
          isHot: true,
        },
        {
          question: '设备已经退还，为什么账单还在收费？',
          answer:
            '设备退还记录和账户状态有时不会立即同步。应保留退还收据、追踪号码或设备序列号，并让运营商核对设备是否已经从账户移除。',
        },
        {
          question: '取消 Xfinity 后设备一定要退吗？',
          answer:
            '如果设备属于运营商租赁或要求归还的设备，应按照账户中的设备清单和当前归还要求处理。不要根据旧经验判断，取消服务时应确认哪些设备需要归还并保存凭证。',
        },
        {
          question: '可以自己买 Modem 或 Router 吗？',
          answer:
            '部分情况下可以使用兼容的自有设备，但设备兼容性、功能和支持条件会变化。购买前应根据当前地址、套餐和运营商兼容设备列表确认，而不是只看设备包装上的 Xfinity 字样。',
        },
      ],
    },
  ],
}

export const installCategory: FAQMainCategory = {
  id: 'install-moving',
  title: '安装、地址与搬家',
  shortTitle: '安装搬家',
  description: '地址查询不等于最终安装结果',
  subCategories: [
    {
      id: 'serviceability',
      title: '地址与安装',
      items: [
        {
          question: '我的地址能不能装 Xfinity？',
          answer:
            '需要以具体地址的当前 serviceability 结果为准。城市、邻居或同一栋楼其他住户可以使用，并不能保证你的 Unit 一定可以安装。',
          isHot: true,
        },
        {
          question: '网站显示不能装，是不是就一定不能装？',
          answer:
            '不一定。Unit 格式、旧账户、新建地址、地址数据库或线路状态都可能影响查询结果。如果地址信息正确但结果异常，可以进一步要求核实 serviceability。',
        },
        {
          question: '公寓安装 Xfinity 要注意什么？',
          answer:
            '应确认具体 Unit、现有线路、物业限制以及是否需要技术员进入设备间或公共区域。不能仅因为整栋楼有 Xfinity 就假设每个 Unit 都具备相同安装条件。',
        },
        {
          question: 'Xfinity 安装要多久？',
          answer:
            '安装时间取决于地址线路、设备、自助安装资格和当前预约安排，没有一个适用于所有地址的固定天数。下单前应确认具体预约和安装方式。',
        },
      ],
    },
    {
      id: 'moving',
      title: '搬家',
      items: [
        {
          question: '搬家时应该先取消旧地址还是先开新地址？',
          answer:
            '通常更稳妥的是先确认新地址可用性、安装时间和设备安排，再决定旧地址停止日期，减少搬家后没有网络的风险。',
        },
        {
          question: '搬家后原来的设备还能继续用吗？',
          answer:
            '要看账户、设备型号和新地址服务条件。不要直接假设旧设备一定可以带到新地址使用，应先确认设备是否需要转移、重新激活、更换或归还。',
        },
      ],
    },
  ],
}

export const accountCategory: FAQMainCategory = {
  id: 'account-cancel',
  title: '取消、账户与其他问题',
  shortTitle: '取消账户',
  description: '取消、欠费、账户变化与信息确认',
  subCategories: [
    {
      id: 'cancel',
      title: '取消与账户',
      items: [
        {
          question: '取消 Xfinity 前应该先确认什么？',
          answer:
            '先确认当前账户是否存在 term agreement、未结费用、设备归还要求和最终账单处理方式。如果准备换网，还应先确认新服务可以正常安装，再关闭旧服务。',
          isHot: true,
        },
        {
          question: 'Xfinity 提前取消一定有违约金吗？',
          answer:
            '不一定。是否存在提前终止费用取决于当前账户和具体协议。应查看订单确认、账户条款或当前合同，不应使用固定金额或旧规则推算。',
        },
        {
          question: '欠费会不会影响信用？',
          answer:
            '长期未处理的账户余额可能进入进一步催收流程，但具体账户处理和信用影响不能用固定天数判断。如果账单存在争议，应尽早确认余额来源并保留沟通和付款记录。',
        },
        {
          question: '可以临时暂停 Xfinity 服务吗？',
          answer:
            '是否存在暂停、季节性安排或其他临时方案，要以当前账户和运营商提供的选项为准。不要先取消再重新申请，应该先确认重新开通、设备和价格可能发生什么变化。',
        },
      ],
    },
    {
      id: 'information',
      title: '信息与账户核实',
      items: [
        {
          question: '门店和客服说法不一样，应该相信谁？',
          answer:
            '优先保存并比较订单确认、账户页面、账单和书面条款。口头说明如果与账户显示不一致，应要求进一步核实，并尽量保留可追溯的书面记录。',
        },
        {
          question: '没有 SSN 能不能使用 Xfinity？',
          answer:
            '身份和账户验证要求可能因地址、账户和当前政策不同。没有 SSN 不代表一定能申请或一定不能申请，最终应以当前账户审核要求为准。',
        },
        {
          question: 'Xfinity 问题什么时候需要人工核实？',
          answer:
            '涉及具体 Promotion、Credit、设备序列号、地址 serviceability、账户历史、合同或订单状态时，网页无法直接读取你的后台资料，应结合实际账户进行核实。',
        },
      ],
    },
  ],
}

export const allCategories: FAQMainCategory[] = [
  billingCategory,
  wifiCategory,
  outageCategory,
  equipmentCategory,
  installCategory,
  accountCategory,
]

export function getAllFAQsForSchema() {
  return allCategories.flatMap((category) =>
    category.subCategories.flatMap((subCategory) => subCategory.items)
  )
}