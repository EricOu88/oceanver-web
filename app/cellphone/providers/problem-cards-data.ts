import {
  Signal,
  Globe,
  Briefcase,
  CreditCard,
  TrendingUp,
  HeartHandshake,
} from 'lucide-react';

export const providerSlugMap: Record<string, string> = {
  'AT&T': '/cellphone/att',
  'Verizon': '/cellphone/verizon',
  'T-Mobile': '/cellphone/tmobile',
  'Ultra Mobile': '/cellphone/ultra',
  'Gen Mobile': '/cellphone/genmobile',
  '政府白卡免费手机': '/cellphone/government',
};

/** solutions 中需渲染为按钮样式的项（可点击跳转） */
export const solutionButtonStyleSet = new Set<string>(['政府白卡免费手机']);

export const problemCards = [
  {
    question: '我需要信号稳定，长期在美使用',
    whyImportant: '信号覆盖直接影响通话质量和上网体验。不同运营商在不同地区的信号强度差异很大，选错会导致经常断线、通话质量差。',
    suitableFor: [
      '家庭用户，需要稳定可靠的通信',
      '长期在美居住，不想频繁换套餐',
      '在郊区或信号较弱区域使用',
      '对网络质量要求高的用户'
    ],
    solutions: ['AT&T', 'Verizon'],
    solutionHrefs: ['/cellphone/att'],
    icon: Signal,
    color: 'blue',
    seoKeywords: '信号稳定, 手机套餐, 长期使用'
  },
  {
    question: '我经常出国，需要5G和国际漫游',
    whyImportant: '不同运营商对国际使用的支持差异很大。有些运营商国际漫游费用极高，有些则包含免费国际流量和通话。选错会导致出国时产生巨额费用。',
    suitableFor: [
      '经常往返中美或国际旅行',
      '需要频繁拨打国际长途',
      '出国时需要保持手机可用',
      '留学生或新移民家庭'
    ],
    solutions: ['Gen Mobile', 'Ultra Mobile'],
    solutionHrefs: ['/cellphone/tmobile'],
    icon: Globe,
    color: 'indigo',
    seoKeywords: '国际使用, 5G, 国际漫游, 留学生'
  },
  {
    question: '商务团队多人线路，抵税，',
    whyImportant: '商务通信不能断线。商务套餐通常提供更好的服务优先级、网络稳定性和专门的商务支持，价格虽然稍高但稳定性远超普通套餐。',
    suitableFor: [
      '远程办公，需要稳定网络',
      '商务人士，不能接受断线',
      '需要多线套餐统一管理',
      '企业用户，要求企业级服务'
    ],
    solutions: ['AT&T', 'Verizon'],
    solutionHrefs: ['/cellphone/verizon'],
    icon: Briefcase,
    color: 'purple',
    seoKeywords: '商务套餐, 工作稳定性, 企业手机'
  },
  {
    question: '我是留学生或短期访客，需要预付费',
    whyImportant: '留学生和短期访客通常没有SSN，无法办理合约套餐。预付费套餐无需信用检查，灵活自由，适合短期使用或试用。',
    suitableFor: [
      '留学生，暂时没有SSN',
      '短期访客，不想被合约绑定',
      '使用量不固定，需要灵活控制',
      '想先试用，再决定是否长期使用'
    ],
    solutions: ['Ultra Mobile', '预付费方案'],
    solutionHrefs: ['/cellphone/ultra'],
    icon: CreditCard,
    color: 'green',
    seoKeywords: '留学生, 预付费, 短期访客, 无合约'
  },
  {
    question: '回国保号，电商国内使用，接受验证码',
    whyImportant: '免费国际漫游，拨打+接听电话。验证码国内接受',
    suitableFor: [
      '可以开通WIFI  calling 拨打电话',
      '全世界旅游免费上网',
      '跨境电商专用，注册美国各种社交账号',
      '电商平台国内收验证码'
    ],
    solutions: ['Gen Mobile', '低价预付费'],
    solutionHrefs: ['/cellphone/genmobile'],
    icon: TrendingUp,
    color: 'orange',
    seoKeywords: '低价套餐, 防涨价, 价格稳定, 性价比'
  },
  {
    question: '我符合政府福利资格，想申请免费手机',
    whyImportant: '符合Medicaid（白卡）、SNAP（食品券）等政府福利资格的用户，可以申请免费的Lifeline手机服务，每月$0月费。',
    suitableFor: [
      '符合Medicaid（白卡）资格',
      '符合SNAP（食品券）资格',
      '符合其他政府福利项目',
      '家庭收入低于联邦贫困线'
    ],
    solutions: ['政府白卡免费手机'],
    solutionHrefs: ['/cellphone/government'],
    buttonText: '查看政府福利手机方案 →',
    icon: HeartHandshake,
    color: 'green',
    seoKeywords: '政府白卡, 免费手机, Lifeline, 政府补助'
  },
];
