'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  CircleHelp,
  RotateCcw,
} from 'lucide-react'

type ProblemId =
  | 'bill'
  | 'speed'
  | 'outage'
  | 'equipment'
  | 'install'
  | 'moving'
  | 'switch'
  | 'unknown'

type Option = {
  value: string
  label: string
}

type Question = {
  prompt: string
  options: Option[]
}

type RecommendationLevel =
  | '观察'
  | '先自查'
  | '联系运营商'
  | '比较方案'
  | '考虑换网'
  | '人工核实'

type DiagnosisResult = {
  title: string
  summary: string
  reason: string
  check: string[]
  actions: string[]
  avoid: string[]
  verify: string
  recommendation: RecommendationLevel
  links?: {
    href: string
    label: string
  }[]
  human?: boolean
}

type ProblemDefinition = {
  id: ProblemId
  title: string
  description: string
}

type QADocument = {
  id: string
  question_variants?: string[]
  summary?: string
  answer?: string
  check_first?: string[]
  self_help?: string[]
  cannot_determine?: string[]
  next_step?: string
  public_case?: boolean
  review_status?: string
}

const problems: ProblemDefinition[] = [
  {
    id: 'bill',
    title: '账单突然变贵',
    description: '月费上涨、优惠结束、设备费、附加服务或不明收费。',
  },
  {
    id: 'speed',
    title: '网速慢 / Wi-Fi 不稳定',
    description: '某些房间慢、晚上慢、Wi-Fi 弱，或测速和套餐不符。',
  },
  {
    id: 'outage',
    title: '完全断网 / 经常掉线',
    description: '所有设备断网、Modem 异常，或者一天多次掉线。',
  },
  {
    id: 'equipment',
    title: 'Modem / Router / 设备问题',
    description: '设备费、设备退还、无法激活、灯号异常或自购设备问题。',
  },
  {
    id: 'install',
    title: '新装 / 激活 / 安装失败',
    description: '地址能查到却无法开通、自助安装失败、线路或旧账户占用。',
  },
  {
    id: 'moving',
    title: '搬家 / 地址 / 旧账户问题',
    description: '新地址覆盖、旧地址取消、设备带走、Unit 或旧住户记录问题。',
  },
  {
    id: 'switch',
    title: '想换运营商，但不知道值不值得',
    description: '先判断问题到底是价格、Wi-Fi、稳定性，还是确实需要换网。',
  },
  {
    id: 'unknown',
    title: '我也说不清是什么问题',
    description: '从最明显的现象开始，帮你重新分到正确的问题入口。',
  },
]

const questions: Record<ProblemId, Question[]> = {
  bill: [
    {
      prompt: '这次账单比以前大约多了多少？',
      options: [
        { value: 'under10', label: '少于 $10' },
        { value: '10to30', label: '$10–$30' },
        { value: 'over30', label: '超过 $30' },
        { value: 'unknown', label: '不确定' },
      ],
    },
    {
      prompt: '账单里最明显的变化是什么？',
      options: [
        { value: 'promo', label: '优惠 / Credit 消失' },
        { value: 'base', label: 'Internet 基础月费上涨' },
        { value: 'equipment', label: 'Equipment / Gateway 费用' },
        { value: 'addon', label: '新增服务或附加项目' },
        { value: 'onetime', label: '一次性费用' },
        { value: 'autopay', label: 'AutoPay / Paperless 折扣变化' },
        { value: 'unknown', label: '看不懂' },
      ],
    },
    {
      prompt: '这笔增加的费用是否连续出现？',
      options: [
        { value: 'first', label: '第一次出现' },
        { value: 'repeat', label: '已经连续两期或以上' },
        { value: 'unknown', label: '不确定' },
      ],
    },
  ],

  speed: [
    {
      prompt: '主要是哪里慢？',
      options: [
        { value: 'room', label: '只有一个房间或角落' },
        { value: 'device', label: '只有一台设备' },
        { value: 'whole', label: '全屋都慢' },
        { value: 'evening', label: '晚上特别慢' },
      ],
    },
    {
      prompt: '靠近路由器时速度是否明显正常一些？',
      options: [
        { value: 'near-good', label: '是，靠近路由器明显好' },
        { value: 'near-bad', label: '不是，靠近也慢' },
        { value: 'unknown', label: '还没测试' },
      ],
    },
    {
      prompt: '如果有条件，网线连接测试怎么样？',
      options: [
        { value: 'wired-good', label: '网线正常，只有 Wi-Fi 慢' },
        { value: 'wired-bad', label: '网线也慢' },
        { value: 'unknown', label: '没有测试过' },
      ],
    },
  ],

  outage: [
    {
      prompt: '断网时受影响的是哪些设备？',
      options: [
        { value: 'all', label: '所有设备都不能上网' },
        { value: 'wifi-only', label: '只有 Wi-Fi 设备有问题' },
        { value: 'some', label: '只有部分设备' },
        { value: 'unknown', label: '不确定' },
      ],
    },
    {
      prompt: 'Modem / Gateway 的灯号有没有异常？',
      options: [
        { value: 'abnormal', label: '有红灯、闪烁或异常状态' },
        { value: 'normal', label: '灯号看起来正常' },
        { value: 'unknown', label: '看不懂灯号' },
      ],
    },
    {
      prompt: '问题出现的方式更接近哪一种？',
      options: [
        { value: 'constant', label: '完全不能用' },
        { value: 'drops', label: '每天反复掉线' },
        { value: 'restart', label: '重启后暂时恢复' },
        { value: 'recent', label: '最近安装或换设备后开始' },
      ],
    },
  ],

  equipment: [
    {
      prompt: '你遇到的设备问题是哪一种？',
      options: [
        { value: 'return-charge', label: '设备已经退还，但账单还在收费' },
        { value: 'rental', label: '不知道设备是否必须租' },
        { value: 'activation', label: '换 Modem 后无法激活' },
        { value: 'lights', label: '设备灯号异常' },
        { value: 'own-device', label: '想用自己买的 Modem / Router' },
        { value: 'lost', label: '设备未退还或已经丢失' },
      ],
    },
    {
      prompt: '这件事是否已经影响到账单或上网？',
      options: [
        { value: 'bill', label: '主要影响账单' },
        { value: 'service', label: '主要影响上网' },
        { value: 'both', label: '账单和上网都有影响' },
        { value: 'unknown', label: '还不确定' },
      ],
    },
  ],

  install: [
    {
      prompt: '你现在卡在哪一步？',
      options: [
        { value: 'order', label: '地址查得到，但无法下单' },
        { value: 'self-install', label: 'Self-install 无法激活' },
        { value: 'modem', label: 'Modem / Gateway 无法上线' },
        { value: 'technician', label: '需要预约 Technician' },
        { value: 'no-line', label: '房屋似乎没有可用线路' },
        { value: 'no-service', label: '系统显示地址没有服务' },
      ],
    },
    {
      prompt: '地址信息是否已经完整核对？',
      options: [
        { value: 'complete', label: 'Street、Unit / Apt 都准确' },
        { value: 'unit', label: '可能是 Unit / Apt 问题' },
        { value: 'new', label: '这是新建或近期变更地址' },
        { value: 'unknown', label: '不确定' },
      ],
    },
    {
      prompt: '系统有没有提示旧账户或已有服务？',
      options: [
        { value: 'occupied', label: '有，像是旧住户账户占用' },
        { value: 'active', label: '显示已有 active service' },
        { value: 'none', label: '没有看到这类提示' },
        { value: 'unknown', label: '不确定' },
      ],
    },
  ],

  moving: [
    {
      prompt: '你现在处于哪个阶段？',
      options: [
        { value: 'before', label: '还没搬，正在准备' },
        { value: 'after', label: '已经搬到新地址' },
      ],
    },
    {
      prompt: '新地址的宽带情况是否已经确认？',
      options: [
        { value: 'confirmed', label: '已经确认可以安装' },
        { value: 'uncertain', label: '查过，但结果不确定' },
        { value: 'not-checked', label: '还没有查询' },
      ],
    },
    {
      prompt: '现在最担心哪件事？',
      options: [
        { value: 'coverage', label: '新地址到底能不能装' },
        { value: 'old-account', label: '旧地址还会不会继续收费' },
        { value: 'equipment', label: '设备要带走还是归还' },
        { value: 'activation', label: '新地址设备无法激活' },
      ],
    },
  ],

  switch: [
    {
      prompt: '你现在最想换运营商的原因是什么？',
      options: [
        { value: 'price', label: '价格越来越高' },
        { value: 'speed', label: '网速不满意' },
        { value: 'stability', label: '经常掉线 / 不稳定' },
        { value: 'service', label: '客服或账户体验不好' },
        { value: 'moving', label: '搬家后考虑重新选择' },
      ],
    },
    {
      prompt: '当前宽带还能基本正常使用吗？',
      options: [
        { value: 'works', label: '基本正常，只是不满意' },
        { value: 'poor', label: '能用，但问题比较严重' },
        { value: 'down', label: '目前已经无法正常使用' },
      ],
    },
    {
      prompt: '新运营商是否已经确认你的地址可以安装？',
      options: [
        { value: 'confirmed', label: '已经确认' },
        { value: 'maybe', label: '网站显示可以，但还没进一步确认' },
        { value: 'no', label: '还没有查' },
      ],
    },
  ],

  unknown: [
    {
      prompt: '现在最影响你的是什么？',
      options: [
        { value: 'bill', label: '钱变多了' },
        { value: 'speed', label: '网变慢了' },
        { value: 'outage', label: '经常断或完全不能用' },
        { value: 'install', label: '安装 / 激活不了' },
        { value: 'moving', label: '搬家 / 地址有问题' },
        { value: 'equipment', label: 'Modem / Router / 设备问题' },
        { value: 'switch', label: '想换，但不知道怎么选' },
      ],
    },
  ],
}

function has(answers: string[], value: string) {
  return answers.includes(value)
}

function getResult(problem: ProblemId, answers: string[]): DiagnosisResult {
  if (problem === 'bill') {
    if (has(answers, 'onetime') && has(answers, 'first')) {
      return {
        title: '更像一次性收费，不一定代表以后每个月都会这么高',
        summary:
          '安装、激活、Technician、设备或账单周期调整，都可能让某一期账单突然变高。',
        reason:
          '你选择了“一次性费用”，而且目前只出现一次。判断长期月费之前，最好先看下一期是否再次出现。',
        check: [
          '对比本月和上月同一收费项目',
          '查看收费项目旁边是否写有 one-time、installation、activation 或 technician',
          '确认账单服务周期有没有跨月或补收',
        ],
        actions: [
          '先保存最近两期账单',
          '下一期重点确认同一费用是否再次出现',
        ],
        avoid: [
          '不要因为第一期账单高，就马上认定以后每个月都会这么高',
          '不要只看账单总额，要看具体收费项目',
        ],
        verify:
          '如果同一费用连续出现，或者收费名称看不懂，再让运营商核对具体项目。',
        recommendation: '观察',
        links: [
          { href: '/bill-optimization', label: '继续做账单检查' },
        ],
      }
    }

    if (has(answers, 'promo')) {
      return {
        title: '更像优惠或 Credit 到期',
        summary:
          '很多宽带账单不是突然增加了新服务，而是原来的促销或 Credit 到期，恢复到更高的正常价格。',
        reason:
          '你看到优惠或 Credit 消失，这通常比单看总金额更能解释为什么账单上涨。',
        check: [
          '对比最近两期账单中的 Internet 基础月费',
          '寻找 Promotion、Discount、Credit 是否减少或消失',
          '确认上涨是否已经连续出现两期',
        ],
        actions: [
          '先确认新的长期月费是多少',
          '再比较继续留、调整方案或换运营商的总成本',
        ],
        avoid: [
          '不要只问“有没有新优惠”，先确认现在到底贵在哪里',
          '不要在新方案和安装条件没确认前直接取消现有服务',
        ],
        verify:
          '具体账户还能否获得新的折扣，需要运营商结合当前账户资格确认。',
        recommendation: '比较方案',
        links: [
          { href: '/internet/price-hike', label: '继续判断长期涨价' },
          { href: '/bill-optimization', label: '查看完整账单检查' },
        ],
      }
    }

    if (has(answers, 'autopay')) {
      return {
        title: '更像 AutoPay 或账单折扣发生变化',
        summary:
          '有些账单上涨并不是套餐本身涨价，而是 AutoPay、Paperless Billing 或其他 Credit 没有继续生效。',
        reason:
          '这种变化通常会表现为基础套餐差不多，但总额突然增加几美元到十几美元。',
        check: [
          '检查 AutoPay 是否仍然开启',
          '查看付款方式是否变化',
          '确认 Paperless Billing 或其他账户折扣是否仍存在',
        ],
        actions: [
          '先恢复符合条件的付款和账单设置',
          '再观察下一期账单是否恢复',
        ],
        avoid: [
          '不要在还没确认折扣问题前急着换运营商',
        ],
        verify:
          '不同运营商、账户和付款方式的折扣资格不同，需要以当前账户规则为准。',
        recommendation: '先自查',
        links: [
          { href: '/bill-optimization', label: '继续做账单检查' },
        ],
      }
    }

    if (has(answers, 'equipment') || has(answers, 'addon')) {
      return {
        title: '更像设备费或附加服务导致账单变高',
        summary:
          'Gateway、Router、附加服务或新增加的账户项目，都可能让账单持续高于以前。',
        reason:
          '这类费用通常会单独列在账单里，不一定是 Internet 基础月费本身上涨。',
        check: [
          '查看 Equipment、Gateway、Modem、Add-on 等项目',
          '确认这些项目是最近新增，还是以前已有',
          '检查是否每个月 recurring',
        ],
        actions: [
          '确认哪些项目仍然需要',
          '对于不认识的收费，要求运营商说明收费来源',
        ],
        avoid: [
          '不要只比较套餐广告价格，设备和附加费也要一起算',
        ],
        verify:
          '如果设备已经退还却仍然收费，或者不认识某项 recurring charge，需要后台核对。',
        recommendation: '联系运营商',
        human: true,
        links: [
          { href: '/bill-optimization', label: '继续做账单检查' },
        ],
      }
    }

    return {
      title: '目前更像长期月费变化，但还需要先把收费项目拆开',
      summary:
        '如果账单已经连续上涨两期以上，就不能只把它当成一次性波动。',
      reason:
        '长期涨价常见于促销结束、基础月费变化、设备费用或账户折扣变化。',
      check: [
        '比较最近两到三期账单',
        '找出具体是哪一行收费增加',
        '确认涨价是否 recurring',
      ],
      actions: [
        '先确认当前长期月费',
        '再决定继续留、调整方案还是开始比较其他运营商',
      ],
      avoid: [
        '不要只因为总额变高就立刻换网',
        '不要忽略安装、设备和切换成本',
      ],
      verify:
        '如果账单项目无法解释上涨原因，再让运营商核对账户。',
      recommendation: '比较方案',
      links: [
        { href: '/internet/price-hike', label: '继续看宽带涨价判断' },
        { href: '/bill-optimization', label: '完整账单检查' },
      ],
    }
  }

  if (problem === 'speed') {
    if (
      has(answers, 'room') ||
      has(answers, 'near-good') ||
      has(answers, 'wired-good')
    ) {
      return {
        title: '更像家里 Wi-Fi 覆盖问题，不一定是套餐速度不够',
        summary:
          '如果靠近路由器速度正常、网线正常，只有某些房间慢，问题通常更接近 Wi-Fi 覆盖。',
        reason:
          '升级套餐提高的是互联网接入速度，但不一定能解决墙体、距离和路由器位置造成的 Wi-Fi 弱覆盖。',
        check: [
          '靠近路由器重新测速',
          '比较问题房间和路由器附近的表现',
          '确认是否只有 2.4GHz / 5GHz 某个频段有问题',
        ],
        actions: [
          '把路由器移到更开放、更居中的位置',
          '必要时再考虑 Mesh 或 Access Point',
        ],
        avoid: [
          '不要因为卧室 Wi-Fi 弱就直接升级更贵的套餐',
          '不要只在一个位置测速后就判断运营商速度不够',
        ],
        verify:
          '如果网线也明显低于正常范围，再进一步检查线路、设备或运营商网络。',
        recommendation: '先自查',
        links: [
          { href: '/internet/home-network-guide', label: '查看家庭网络优化指南' },
        ],
      }
    }

    if (has(answers, 'wired-bad') || has(answers, 'whole')) {
      return {
        title: '更像不只是 Wi-Fi 覆盖问题',
        summary:
          '如果全屋都慢，甚至网线连接也慢，就需要进一步区分设备、入户线路、套餐或运营商网络。',
        reason:
          '这时单纯调整路由器位置通常解决不了全部问题。',
        check: [
          '使用一台可靠设备通过网线测速',
          '记录不同时段的速度',
          '重启 Gateway 后再次测试',
          '确认最近是否更换过设备或套餐',
        ],
        actions: [
          '保留测速记录和发生时间',
          '如果持续异常，再联系运营商做线路或设备检查',
        ],
        avoid: [
          '不要只根据一次测速结果就换运营商',
        ],
        verify:
          '线路质量、节点拥塞、设备信号状态等，需要运营商后台或现场进一步确认。',
        recommendation: '联系运营商',
        links: [
          { href: '/internet/faq', label: '查看宽带常见问题' },
        ],
      }
    }

    return {
      title: '先区分 Wi-Fi、设备和入户网络',
      summary:
        '网速慢并不只有一种原因，先确认是一个房间、一台设备，还是整个家庭网络都慢。',
      reason:
        '问题范围不同，解决方法完全不同。',
      check: [
        '靠近路由器测速',
        '用第二台设备测试',
        '有条件时使用网线测试',
      ],
      actions: [
        '记录测试位置和时间',
        '先缩小问题范围，再决定是否升级设备或套餐',
      ],
      avoid: [
        '不要看到测速低就立刻升级套餐',
      ],
      verify:
        '如果多设备、网线和不同时间测试都异常，再让运营商进一步检查。',
      recommendation: '先自查',
    }
  }

  if (problem === 'outage') {
    if (has(answers, 'wifi-only') || has(answers, 'some')) {
      return {
        title: '更像 Wi-Fi 或局部设备问题',
        summary:
          '如果不是所有设备都断网，通常需要先检查路由器、Wi-Fi 和具体设备。',
        reason:
          '真正的区域中断通常会影响整个家庭连接，而不仅仅是一台设备。',
        check: [
          '确认其他设备能否正常上网',
          '靠近路由器重新连接',
          '检查 Wi-Fi 是否被关闭或设备是否连错网络',
        ],
        actions: [
          '重启受影响设备',
          '必要时重启 Router / Gateway 一次',
        ],
        avoid: [
          '不要因为一台设备断网就认定运营商 outage',
        ],
        verify:
          '如果越来越多设备同时出现问题，再进一步检查 Gateway 或线路。',
        recommendation: '先自查',
      }
    }

    if (
      has(answers, 'all') &&
      (has(answers, 'abnormal') || has(answers, 'restart'))
    ) {
      return {
        title: '更像 Gateway、线路或运营商网络问题',
        summary:
          '所有设备同时断网，并且设备灯号异常或只能靠重启暂时恢复，需要进一步排查。',
        reason:
          '这种情况比单纯 Wi-Fi 覆盖问题更接近设备同步、入户线路或区域网络异常。',
        check: [
          '查看运营商是否公布区域 outage',
          '记录 Gateway 灯号',
          '检查同轴线、光纤或网线是否松动',
          '记录掉线发生时间',
        ],
        actions: [
          '连接牢固后按设备说明重启一次',
          '如果反复发生，向运营商报告并要求检查线路或设备',
        ],
        avoid: [
          '不要一天反复重启很多次而不记录问题',
          '不要在 outage 未排除前急着换运营商',
        ],
        verify:
          '设备信号值、线路状态和区域中断需要运营商系统确认。',
        recommendation: '联系运营商',
        human: true,
        links: [
          { href: '/internet/faq', label: '查看断网相关常见问题' },
        ],
      }
    }

    return {
      title: '先确认是区域中断、Gateway 还是 Wi-Fi',
      summary:
        '完全断网和偶尔掉线需要分开判断。',
      reason:
        '是否影响所有设备、设备灯号以及重启后的表现，是最重要的三个线索。',
      check: [
        '确认所有设备是否都断网',
        '查看 Gateway 灯号',
        '查看运营商 outage 通知',
      ],
      actions: [
        '记录掉线时间',
        '在连接确认正常后只重启一次',
      ],
      avoid: [
        '不要只凭一次掉线就决定更换运营商',
      ],
      verify:
        '如果持续掉线，需要运营商检查线路、设备和账户状态。',
      recommendation: '联系运营商',
    }
  }

  if (problem === 'equipment') {
    if (has(answers, 'return-charge')) {
      return {
        title: '设备已退还但仍收费，需要核对退还记录',
        summary:
          '这类问题通常不能只靠页面判断，需要把退还凭证和账户设备记录对上。',
        reason:
          '如果后台仍把设备标记为未归还，费用可能继续出现在账单里。',
        check: [
          '找退还收据或快递追踪号码',
          '确认设备序列号',
          '检查费用是否已经连续出现',
        ],
        actions: [
          '保存所有退还证明',
          '联系运营商要求核对设备状态',
        ],
        avoid: [
          '不要丢掉退还收据',
          '不要只口头说明，尽量保留书面或追踪记录',
        ],
        verify:
          '设备序列号、仓库接收记录和账户状态需要运营商后台确认。',
        recommendation: '人工核实',
        human: true,
      }
    }

    if (has(answers, 'activation') || has(answers, 'lights')) {
      return {
        title: '更像设备激活或连接状态问题',
        summary:
          '换 Modem、Gateway 后不能上线，或者灯号异常，通常需要区分激活、线路和设备本身。',
        reason:
          '设备接通电源并不代表已经在运营商系统里完成激活。',
        check: [
          '确认设备型号是否兼容',
          '确认线路连接正确',
          '等待设备完成启动',
          '检查账户中设备是否已经绑定',
        ],
        actions: [
          '按照运营商激活流程完成一次激活',
          '仍然失败时记录设备 MAC / Serial 等信息',
        ],
        avoid: [
          '不要反复 Factory Reset',
          '不要在旧设备还没确认解除绑定前随意丢弃',
        ],
        verify:
          '设备 provisioning、MAC 绑定和线路状态需要运营商后台确认。',
        recommendation: '联系运营商',
        human: true,
      }
    }

    return {
      title: '先确认设备所有权、兼容性和收费方式',
      summary:
        '自购设备、租赁设备和运营商 Gateway 的规则并不完全一样。',
      reason:
        '是否能使用自己的设备、是否仍有设备费，需要结合运营商和具体技术标准确认。',
      check: [
        '确认设备型号',
        '检查账单上的设备收费',
        '确认设备属于自购还是运营商所有',
      ],
      actions: [
        '在更换或退还前保留设备序列号',
        '确认兼容性后再购买新设备',
      ],
      avoid: [
        '不要只因为看到设备费就直接把现有设备退掉',
      ],
      verify:
        '兼容列表、账户绑定和设备归属需要根据具体运营商确认。',
      recommendation: '先自查',
    }
  }

  if (problem === 'install') {
    if (has(answers, 'occupied') || has(answers, 'active')) {
      return {
        title: '更像旧账户或地址记录占用',
        summary:
          '地址本身可能有服务，但系统仍关联前住户账户或旧的 active service。',
        reason:
          '这类问题通常不是简单重新输入地址就能彻底解决。',
        check: [
          '确认 Street、Unit / Apt 完整准确',
          '确认入住日期',
          '记录系统显示的错误提示',
        ],
        actions: [
          '准备新住址证明或入住信息',
          '让运营商核对地址和旧账户状态',
        ],
        avoid: [
          '不要反复创建多个订单',
          '不要在新地址确认开通前取消旧地址服务',
        ],
        verify:
          '旧账户释放、地址状态和订单资格需要后台处理。',
        recommendation: '人工核实',
        human: true,
      }
    }

    if (has(answers, 'unit') || has(answers, 'new')) {
      return {
        title: '更像地址数据库或 Unit 识别问题',
        summary:
          '新建住宅、近期地址变化或公寓 Unit 不完整，都可能让在线查询结果不准确。',
        reason:
          '运营商地址数据库和实际邮寄地址有时并不同步。',
        check: [
          '核对完整 Unit / Apt',
          '尝试与 USPS 或物业使用的地址格式一致',
          '确认是否为新建住宅',
        ],
        actions: [
          '保存正确的完整地址格式',
          '让运营商手动核实 serviceability',
        ],
        avoid: [
          '不要因为网站一次显示“无服务”就认定永远不能安装',
        ],
        verify:
          '地址 serviceability、节点和线路条件需要运营商进一步确认。',
        recommendation: '人工核实',
        human: true,
      }
    }

    return {
      title: '先区分地址、设备激活和物理线路问题',
      summary:
        '安装失败可能发生在订单、设备激活或房屋线路三个不同阶段。',
      reason:
        '先找出卡在哪一步，才能判断是否需要 Technician。',
      check: [
        '确认订单状态',
        '确认设备是否已经绑定账户',
        '检查房屋内已有线路',
      ],
      actions: [
        '完成一次标准激活流程',
        '仍然失败时记录错误提示和设备灯号',
      ],
      avoid: [
        '不要在原因不明时重复下多个订单',
      ],
      verify:
        '如果无法确认线路或激活状态，需要运营商后台或 Technician 进一步检查。',
      recommendation: '联系运营商',
      human: true,
    }
  }

  if (problem === 'moving') {
    if (has(answers, 'before')) {
      return {
        title: '搬家前最重要的是先确认新地址，再处理旧地址',
        summary:
          '不要先取消旧宽带，再去确认新地址能不能安装。',
        reason:
          '如果新地址覆盖、安装时间或设备安排出现问题，提前取消旧服务会增加中断风险。',
        check: [
          '确认新地址服务可用性',
          '确认安装日期',
          '确认设备是带走还是归还',
          '确认旧地址停止日期',
        ],
        actions: [
          '先把新地址服务条件核实清楚',
          '再安排旧地址停止服务',
        ],
        avoid: [
          '不要在新地址没有确认前取消旧地址宽带',
        ],
        verify:
          '新地址 serviceability、安装方式和账户迁移资格需要运营商确认。',
        recommendation: '先自查',
      }
    }

    return {
      title: '搬家后要同时检查新地址和旧地址账户',
      summary:
        '搬家后常见问题包括新地址无法激活、旧地址继续收费和设备状态不一致。',
      reason:
        '这些问题可能同时存在，不能只检查新地址是否有网络。',
      check: [
        '确认新地址设备是否已经激活',
        '检查旧地址账户是否仍然 active',
        '确认设备归属',
        '核对新旧地址账单',
      ],
      actions: [
        '保存搬家前后的订单和账单记录',
        '发现旧地址继续收费时及时核对停止日期',
      ],
      avoid: [
        '不要假设搬家订单自动等于旧地址已经停止收费',
      ],
      verify:
        '旧地址关闭、新地址激活和设备迁移状态需要运营商后台核实。',
      recommendation: '人工核实',
      human: true,
    }
  }

  if (problem === 'switch') {
    if (
      has(answers, 'speed') &&
      (has(answers, 'works') || has(answers, 'poor'))
    ) {
      return {
        title: '先确认是不是 Wi-Fi 问题，再决定换运营商',
        summary:
          '如果主要问题是家里某些位置速度慢，换运营商不一定会解决。',
        reason:
          '新的运营商仍然要使用家里的 Router / Wi-Fi 环境，覆盖问题可能继续存在。',
        check: [
          '靠近路由器测速',
          '确认网线速度',
          '判断是局部还是全屋问题',
        ],
        actions: [
          '先解决家庭网络问题',
          '仍然全屋速度异常时再比较其他运营商',
        ],
        avoid: [
          '不要把 Wi-Fi 覆盖差直接等同于运营商不好',
        ],
        verify:
          '如果网线和多设备测试都异常，再进一步比较线路和运营商。',
        recommendation: '先自查',
        links: [
          { href: '/internet/home-network-guide', label: '先看家庭网络优化' },
          { href: '/internet/providers', label: '之后再比较运营商' },
        ],
      }
    }

    if (has(answers, 'price')) {
      return {
        title: '可以开始比较，但先算清楚“继续留”和“换”的总成本',
        summary:
          '单看新运营商广告月费，往往不能代表真正切换后的总成本。',
        reason:
          '安装、设备、促销期限、原运营商停止日期和新地址资格都会影响结果。',
        check: [
          '确认现在真实长期月费',
          '确认新运营商地址可用性',
          '确认安装和设备成本',
          '确认新价格能维持多久',
        ],
        actions: [
          '先把当前账单和新方案放在一起比较',
          '确认后再决定是否换网',
        ],
        avoid: [
          '不要只比较首月或广告价格',
          '不要在新服务确认前取消旧宽带',
        ],
        verify:
          '具体促销、资格和安装条件必须以当前地址和账户为准。',
        recommendation: has(answers, 'confirmed')
          ? '考虑换网'
          : '比较方案',
        links: [
          { href: '/internet/price-hike', label: '先看涨价后是否值得换' },
          { href: '/internet/providers', label: '比较宽带运营商' },
        ],
      }
    }

    return {
      title: '先确定你到底想解决什么，再决定换不换',
      summary:
        '价格、稳定性、Wi-Fi、客服和搬家问题，对应的解决方式并不一样。',
      reason:
        '有些问题通过设备、账户或家庭网络调整就能解决，换运营商未必是第一步。',
      check: [
        '写下当前最重要的一个问题',
        '确认当前服务是否还能正常使用',
        '确认新运营商是否真的能安装',
      ],
      actions: [
        '先解决可自查的问题',
        '再比较新旧方案的总成本和风险',
      ],
      avoid: [
        '不要因为一次不满意就直接取消现有服务',
      ],
      verify:
        '地址覆盖、安装资格和最终价格需要运营商确认。',
      recommendation: '比较方案',
      links: [
        { href: '/internet/providers', label: '进入运营商比较' },
      ],
    }
  }

  return {
    title: '先从最明显的问题重新判断',
    summary:
      '如果现在还说不清原因，可以先记录最明显的现象，再选择更具体的入口。',
    reason:
      '问题越具体，后面的判断越可靠。',
    check: [
      '账单有没有变化',
      '网络是变慢还是完全断网',
      '最近是否搬家、换设备或改套餐',
    ],
    actions: [
      '重新选择最接近的问题分类',
    ],
    avoid: [
      '不要在原因不明时马上升级套餐或取消服务',
    ],
    verify:
      '如果多个问题同时出现，可以结合账单、设备和地址进一步人工核实。',
    recommendation: '先自查',
  }
}

function RecommendationBadge({
  level,
}: {
  level: RecommendationLevel
}) {
  return (
    <div className="inline-flex rounded-full border border-[#D5E5EC] bg-[#F4F8FA] px-3 py-1 text-sm font-bold text-[#164B78]">
      建议下一步：{level}
    </div>
  )
}

function ListBlock({
  title,
  items,
}: {
  title: string
  items: string[]
}) {
  return (
    <section>
      <h3 className="mb-2 font-bold text-[#202D3A]">{title}</h3>
      <ul className="space-y-2 text-sm leading-6 text-[#526170]">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2786A5]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default function DiagnosisClient({
  knowledge: _knowledge,
}: {
  knowledge: QADocument[]
}) {
  const [problem, setProblem] = useState<ProblemId | null>(null)
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])

  const flow = problem ? questions[problem] : []
  const activeQuestion = flow[step]
  const complete = Boolean(problem && step >= flow.length)

  const selectedProblem = useMemo(
    () => problems.find((item) => item.id === problem),
    [problem],
  )

  const result = useMemo(
    () => (problem && complete ? getResult(problem, answers) : null),
    [problem, complete, answers],
  )

  function start(id: ProblemId) {
    setProblem(id)
    setStep(0)
    setAnswers([])
  }

  function choose(value: string) {
    if (problem === 'unknown') {
      const target = value as ProblemId
      if (questions[target]) {
        start(target)
        return
      }
    }

    const nextAnswers = [...answers.slice(0, step), value]
    setAnswers(nextAnswers)
    setStep(step + 1)
  }

  function previous() {
    if (step === 0) {
      restart()
      return
    }

    setStep(step - 1)
    setAnswers((current) => current.slice(0, -1))
  }

  function restart() {
    setProblem(null)
    setStep(0)
    setAnswers([])
  }

  return (
    <main className="min-h-screen bg-[#FCFDFE] px-4 py-8 text-[#202D3A] sm:px-6 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/internet/faq"
          className="inline-flex items-center gap-2 text-sm text-[#526170] transition hover:text-[#164B78]"
        >
          <ArrowLeft size={16} />
          返回宽带常见问题
        </Link>

        <header className="mx-auto mb-10 mt-8 max-w-4xl text-center">
          <p className="mb-3 text-sm font-bold tracking-wide text-[#2786A5]">
            美国家庭宽带问题诊断
          </p>

          <h1 className="text-3xl font-black tracking-tight sm:text-5xl">
            宽带出了问题？
            <br className="sm:hidden" />
            先判断原因，再决定要不要换
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-[#526170] sm:text-lg">
            账单涨价、网速慢、Wi-Fi、断网、Modem、安装、搬家、设备收费，都可以先从问题本身判断。
            很多情况不需要马上升级套餐或更换运营商。
          </p>
        </header>

        {!problem && (
          <>
            <section
              aria-label="宽带问题分类"
              className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4"
            >
              {problems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => start(item.id)}
                  className="group min-h-36 rounded-2xl border border-[#D5E5EC] bg-white p-5 text-left shadow-sm transition hover:border-[#2786A5] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#164B78]"
                >
                  <span className="block font-bold text-[#202D3A]">
                    {item.title}
                  </span>

                  <span className="mt-2 block text-sm leading-6 text-[#526170]">
                    {item.description}
                  </span>

                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#246B95]">
                    开始判断
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-0.5"
                    />
                  </span>
                </button>
              ))}
            </section>

            <section className="mt-12 rounded-3xl border border-[#D5E5EC] bg-[#F4F8FA] p-6 sm:p-8">
              <h2 className="text-2xl font-black">
                有些问题，换运营商也不会解决
              </h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  ['只有卧室 Wi-Fi 弱', '更可能是覆盖和路由器位置问题。'],
                  ['只有一台设备速度慢', '先检查这台设备，而不是先换宽带。'],
                  ['第一期账单有一次性费用', '不代表以后每个月都会这么高。'],
                  ['路由器或设备本身有问题', '换运营商后问题也可能继续存在。'],
                ].map(([title, description]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-[#D5E5EC] bg-white p-5"
                  >
                    <h3 className="font-bold">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#526170]">
                      {description}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-6 font-semibold text-[#164B78]">
                先判断问题来源，再决定升级、换设备还是换运营商。
              </p>
            </section>

            <section className="mx-auto mt-14 max-w-4xl">
              <p className="text-sm font-bold text-[#2786A5]">
                很多人第一步就判断错了
              </p>

              <h2 className="mt-2 text-2xl font-black sm:text-3xl">
                宽带问题最常见的 5 个误判
              </h2>

              <div className="mt-6 space-y-3">
                {[
                  [
                    'Wi-Fi 慢 = 套餐速度不够',
                    '不一定。某些房间慢、靠近路由器正常，往往更像家庭 Wi-Fi 覆盖问题。',
                  ],
                  [
                    '账单高 = 运营商偷偷涨价',
                    '先看具体项目。优惠到期、设备费、AutoPay 折扣变化和一次性收费都可能影响总额。',
                  ],
                  [
                    '第一期账单高 = 以后每个月都这么高',
                    '安装、激活和账单周期调整可能只影响第一期。',
                  ],
                  [
                    '查询地址显示无服务 = 这个地址一定不能装',
                    'Unit、旧账户或地址数据库问题，都可能让在线查询结果不完整。',
                  ],
                  [
                    '换运营商 = 一定更便宜',
                    '真正要比较的是长期月费、设备、安装、促销期限和切换成本。',
                  ],
                ].map(([title, description], index) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-[#D5E5EC] bg-white p-5"
                  >
                    <div className="flex gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F4F8FA] text-sm font-black text-[#164B78]">
                        {index + 1}
                      </span>

                      <div>
                        <h3 className="font-bold">{title}</h3>
                        <p className="mt-1 text-sm leading-6 text-[#526170]">
                          {description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {problem && !complete && activeQuestion && (
          <section className="mx-auto max-w-3xl rounded-3xl border border-[#D5E5EC] bg-white p-5 shadow-sm sm:p-8">
            <div className="mb-5 flex items-center justify-between gap-3 text-sm text-[#526170]">
              <span>{selectedProblem?.title}</span>
              <span>
                问题 {step + 1} / {flow.length}
              </span>
            </div>

            <div className="mb-5 h-1.5 overflow-hidden rounded-full bg-[#F1F4F7]">
              <div
                className="h-full rounded-full bg-[#2786A5] transition-all"
                style={{
                  width: `${((step + 1) / flow.length) * 100}%`,
                }}
              />
            </div>

            <h2 className="text-xl font-bold leading-8 sm:text-2xl">
              {activeQuestion.prompt}
            </h2>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {activeQuestion.options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => choose(option.value)}
                  className="min-h-14 rounded-xl border border-[#D5E5EC] bg-white px-4 py-3 text-left font-semibold leading-6 transition hover:border-[#2786A5] hover:bg-[#F4F8FA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#164B78]"
                >
                  {option.label}
                  <ArrowRight
                    size={16}
                    className="ml-2 inline text-[#246B95]"
                  />
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={previous}
              className="mt-6 text-sm font-semibold text-[#246B95] hover:text-[#103B60]"
            >
              ← {step === 0 ? '返回问题分类' : '上一步'}
            </button>
          </section>
        )}

        {problem && complete && result && (
          <section className="mx-auto max-w-3xl rounded-3xl border border-[#D5E5EC] bg-white p-5 shadow-sm sm:p-8">
            <p className="text-sm font-bold text-[#2786A5]">
              你的情况更像
            </p>

            <h2 className="mt-2 text-2xl font-black leading-9 sm:text-3xl">
              {result.title}
            </h2>

            <div className="mt-4">
              <RecommendationBadge level={result.recommendation} />
            </div>

            <p className="mt-6 rounded-2xl bg-[#F4F8FA] p-5 leading-7">
              {result.summary}
            </p>

            <div className="mt-7 space-y-7">
              <section>
                <h3 className="mb-2 font-bold">为什么这样判断</h3>
                <p className="text-sm leading-7 text-[#526170]">
                  {result.reason}
                </p>
              </section>

              <ListBlock title="先检查这几项" items={result.check} />

              <ListBlock
                title="现在可以自己做什么"
                items={result.actions}
              />

              <ListBlock
                title="先不要急着做什么"
                items={result.avoid}
              />

              <section>
                <h3 className="mb-2 font-bold">
                  什么时候需要运营商进一步确认
                </h3>

                <p className="text-sm leading-7 text-[#526170]">
                  {result.verify}
                </p>
              </section>
            </div>

            {result.links && result.links.length > 0 && (
              <div className="mt-7 flex flex-wrap gap-3">
                {result.links.map((link) => (
                  <Link
                    key={link.href + link.label}
                    href={link.href}
                    className="inline-flex items-center gap-2 rounded-xl border border-[#D5E5EC] bg-white px-4 py-3 text-sm font-bold text-[#164B78] transition hover:border-[#2786A5] hover:bg-[#F4F8FA]"
                  >
                    {link.label}
                    <ArrowRight size={16} />
                  </Link>
                ))}
              </div>
            )}

            {result.human && (
              <div className="mt-7 rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-5">
                <p className="font-bold">
                  仍然判断不清？可以进一步核实
                </p>

                <p className="mt-2 text-sm leading-6 text-[#526170]">
                  如果需要结合具体账单、地址、设备或账户状态判断，可以继续人工核实。
                </p>

                <Link
                  href="/contact"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#164B78] hover:text-[#103B60]"
                >
                  进入人工核实
                  <ArrowRight size={16} />
                </Link>
              </div>
            )}

            <div className="mt-7 flex flex-wrap gap-4 border-t border-[#D5E5EC] pt-6 text-sm font-semibold">
              <Link
                href="/internet/faq"
                className="text-[#164B78] hover:text-[#103B60]"
              >
                美国宽带常见问题 →
              </Link>

              <button
                type="button"
                onClick={restart}
                className="inline-flex items-center gap-1 text-[#526170] hover:text-[#164B78]"
              >
                <RotateCcw size={15} />
                重新开始判断
              </button>
            </div>
          </section>
        )}

        <div className="mx-auto mt-10 max-w-3xl">
          <p className="flex items-start gap-2 rounded-2xl border border-[#D5E5EC] bg-[#F4F8FA] p-4 text-sm leading-6 text-[#526170]">
            <CircleHelp
              size={18}
              className="mt-0.5 shrink-0 text-[#2786A5]"
            />
            此诊断用于帮助整理问题和自查方向，不会读取账户或地址信息，也不能代替运营商对具体资格、费用和服务状态的确认。
          </p>

          <p className="mt-6 text-center text-xs leading-5 text-[#526170]">
            最后更新：2026年10月｜价格、资格、优惠及账户结果可能随运营商政策变化，请以当前账户与官方规则为准。
          </p>
        </div>
      </div>
    </main>
  )
}