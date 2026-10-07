'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import type { QADocument } from '@/ai/index/types';

type ProblemId = 'billing' | 'signal' | 'sim' | 'porting' | 'device' | 'family' | 'international' | 'unknown';
type Option = { value: string; label: string };
type Question = { prompt: string; options: Option[] };
type Action = { type: 'knowledge' | 'compare' | 'human'; label: string; href: string };
type DiagnosisResult = {
  layer: string;
  why: string;
  check: string[];
  selfHelp: string[];
  dont: string[];
  cannot: string[];
  actions: Action[];
  observation?: string;
  knowledgeNextStep?: string;
};
type DiagnosisClientProps = { knowledge: QADocument[] };

const problems: { id: ProblemId; title: string; description: string }[] = [
  { id: 'billing', title: '账单 / 费用变化', description: '月费、设备分期、折扣、税费或一次性费用有变化' },
  { id: 'signal', title: '信号 / 移动数据 / 通话', description: '一台或多台手机出现连接、通话或数据异常' },
  { id: 'sim', title: 'SIM / eSIM / 换机激活', description: '删除、迁移、激活、双卡或设备兼容问题' },
  { id: 'porting', title: '转号 / 保号 / 转网状态', description: '号码转入、转出 pending、失败或旧号码不可用' },
  { id: 'device', title: '设备分期 / Trade-in / Bill Credit', description: '设备余额、以旧换新或账单抵扣有疑问' },
  { id: 'family', title: '家庭多线计划', description: '多条线路、家庭成员换机或是否一起转网' },
  { id: 'international', title: '回国 / 国际使用', description: '保留美国号码、收短信、漫游、Wi-Fi Calling 或 eSIM' },
  { id: 'unknown', title: '不确定是什么问题', description: '先从明显现象继续缩小范围' },
];

const questions: Record<Exclude<ProblemId, 'unknown'>, Question[]> = {
  billing: [
    { prompt: '账单是哪一种变化？', options: [
      { value: 'first-bill', label: '第一张账单特别高' },
      { value: 'recurring', label: '每月 recurring 月费变高' },
      { value: 'trade-credit', label: 'Trade-in / Bill Credit 少了或没出现' },
      { value: 'installment', label: '设备分期金额有变化' },
      { value: 'autopay', label: 'AutoPay / Paperless 折扣变化' },
      { value: 'tax-addon', label: '税费或附加项目增加' },
      { value: 'roaming', label: '国际 / 漫游费用' },
      { value: 'lines', label: '线路数量或家庭成员变化' },
      { value: 'unknown', label: '看不懂是哪一项' },
    ] },
    { prompt: '最近是否开户、转网、加线、换套餐或换设备？', options: [
      { value: 'yes', label: '是，近期有这些变化' },
      { value: 'no', label: '没有明显变化' },
      { value: 'unsure', label: '不确定' },
    ] },
    { prompt: '对比最近 2–3 期账单后，差异更像哪一项？', options: [
      { value: 'plan', label: '套餐或线路月费' },
      { value: 'promotion', label: 'Promotion / Credit' },
      { value: 'device', label: '设备分期、设备税或设备费用' },
      { value: 'tax', label: '税费或附加服务' },
      { value: 'international', label: '国际 / 漫游费用' },
      { value: 'one-time', label: '一次性收费或 prorated charge' },
      { value: 'unknown', label: '仍然看不出来' },
    ] },
    { prompt: '这份账单属于哪家运营商？', options: [
      { value: 'att', label: 'AT&T' },
      { value: 'other', label: '其他运营商' },
      { value: 'unknown', label: '不确定' },
    ] },
  ],
  signal: [
    { prompt: '只有一台手机有问题，还是多台手机都有？', options: [
      { value: 'one', label: '只有一台手机' },
      { value: 'multiple', label: '多台手机都一样' },
      { value: 'unknown', label: '不确定' },
    ] },
    { prompt: '问题主要出现在哪里？', options: [
      { value: 'one-place', label: '固定地点或室内' },
      { value: 'everywhere', label: '多个地点都差' },
      { value: 'mixed', label: '室内外表现不同' },
      { value: 'unknown', label: '不确定' },
    ] },
    { prompt: '更接近哪种现象？', options: [
      { value: 'data', label: '只有移动数据慢' },
      { value: 'calls', label: '通话也异常' },
      { value: 'recent-change', label: '刚换手机、SIM/eSIM 或套餐' },
      { value: 'both', label: '通话和数据都受影响' },
      { value: 'unknown', label: '不确定' },
    ] },
    { prompt: '是否已用其他手机、地点和基础设置做过对照？', options: [
      { value: 'checked', label: '已初步排除设备、SIM 和设置问题' },
      { value: 'not-checked', label: '还没有，想先自查' },
      { value: 'unknown', label: '无法确认' },
    ] },
    { prompt: '你现在使用哪家运营商？', options: [
      { value: 'att', label: 'AT&T' },
      { value: 'other', label: '其他运营商' },
      { value: 'unknown', label: '不确定' },
    ] },
  ],
  sim: [
    { prompt: '最接近哪种 SIM / eSIM 情况？', options: [
      { value: 'deleted', label: 'eSIM 删除了' },
      { value: 'migration', label: '换手机后无法迁移' },
      { value: 'activation', label: '激活后无信号' },
      { value: 'dual-sim', label: '双卡 / 多 SIM 不知道怎么配置' },
      { value: 'support', label: '不确定设备是否支持 eSIM' },
      { value: 'locked', label: '怀疑手机被锁' },
      { value: 'imei', label: 'IMEI / 兼容性问题' },
      { value: 'travel', label: '旅行 / 回国时想使用 eSIM' },
    ] },
    { prompt: '你是否确认手机型号和 eSIM 支持情况？', options: [
      { value: 'confirmed', label: '已确认型号和支持情况' },
      { value: 'not-confirmed', label: '还没有确认' },
      { value: 'unknown', label: '不确定在哪里查看' },
    ] },
    { prompt: '设备锁定状态和线路当前状态是否清楚？', options: [
      { value: 'unlocked', label: '确认已解锁，线路仍有效' },
      { value: 'locked', label: '可能仍被锁定' },
      { value: 'unknown', label: '不确定 / 需要账户核对' },
    ] },
  ],
  porting: [
    { prompt: '转号现在进行到哪一步？', options: [
      { value: 'not-started', label: '还没提交转网' },
      { value: 'pending', label: '已提交，仍在 pending' },
      { value: 'failed', label: '显示失败或资料不匹配' },
      { value: 'unknown', label: '不清楚当前状态' },
    ] },
    { prompt: '旧号码目前还能正常使用吗？', options: [
      { value: 'active', label: '还能使用' },
      { value: 'inactive', label: '已经不能使用' },
      { value: 'unknown', label: '不确定' },
    ] },
    { prompt: '以下转网资料是否已核对？', options: [
      { value: 'checked', label: '账户仍 active，Account Number、Transfer PIN、解锁状态和设备余额已核对' },
      { value: 'missing', label: '有资料未确认或缺失' },
      { value: 'unknown', label: '不知道如何确认' },
    ] },
  ],
  device: [
    { prompt: '设备或优惠遇到什么情况？', options: [
      { value: 'trade-in', label: 'Trade-in 已交，但 Credit 没出现' },
      { value: 'credit-stop', label: 'Bill Credit 中断' },
      { value: 'payoff', label: '想提前付清设备' },
      { value: 'switch-balance', label: '准备转网，但还有设备余额' },
      { value: 'lost', label: '手机丢失，但仍有分期' },
      { value: 'promo', label: '不确定 Promotion 是否还有效' },
    ] },
    { prompt: '是否有原订单、Trade-in 收据、近期账单和设备分期状态记录？', options: [
      { value: 'have-records', label: '有，可以逐项核对' },
      { value: 'missing-records', label: '部分记录找不到' },
      { value: 'unknown', label: '不确定要找哪些资料' },
    ] },
    { prompt: '相关账单或设备分期属于哪家运营商？', options: [
      { value: 'att', label: 'AT&T' },
      { value: 'other', label: '其他运营商' },
      { value: 'unknown', label: '不确定' },
    ] },
  ],
  family: [
    { prompt: '现在大约有几条手机线？', options: [
      { value: 'one-two', label: '1–2 条' },
      { value: 'three-four', label: '3–4 条' },
      { value: 'five-plus', label: '5 条或更多' },
      { value: 'unknown', label: '不确定' },
    ] },
    { prompt: '主要想解决什么？', options: [
      { value: 'lower-cost', label: '想降低家庭总月费' },
      { value: 'new-phones', label: '想一起换手机' },
      { value: 'switch-all', label: '想让全家换运营商' },
      { value: 'switch-some', label: '只有部分成员想换' },
      { value: 'unknown', label: '还没确定' },
    ] },
    { prompt: '是否所有成员都要一起转网、一起换手机？', options: [
      { value: 'all', label: '是，大家时间一致' },
      { value: 'some', label: '不是，只有部分成员' },
      { value: 'unknown', label: '不确定' },
    ] },
    { prompt: '各条线上是否仍有设备分期或未发完的 Bill Credit？', options: [
      { value: 'active', label: '至少有一条线还有' },
      { value: 'none', label: '确认都没有' },
      { value: 'unknown', label: '还没逐线核对' },
    ] },
    { prompt: '是否每位成员都同时需要新手机？', options: [
      { value: 'all', label: '是，大家都需要' },
      { value: 'some', label: '只有部分成员需要' },
      { value: 'none', label: '目前都不需要' },
      { value: 'unknown', label: '不确定' },
    ] },
  ],
  international: [
    { prompt: '回国或国际使用时，主要需求是什么？', options: [
      { value: 'keep-number', label: '长期回国，只想保留美国号码' },
      { value: 'sms', label: '主要需要收短信验证码' },
      { value: 'calls', label: '还需要接打美国电话' },
      { value: 'travel', label: '经常中美往返或临时旅行' },
      { value: 'esim', label: '想用 eSIM / 双卡' },
      { value: 'unknown', label: '还没确定' },
    ] },
    { prompt: '目前是否需要美国号码在境外持续有效？', options: [
      { value: 'yes', label: '需要收短信或接打电话' },
      { value: 'no', label: '只需要短期数据连接' },
      { value: 'unknown', label: '不确定不同服务的区别' },
    ] },
    { prompt: '是否核对过当前套餐的 SMS、Wi-Fi Calling、漫游和长期不使用规则？', options: [
      { value: 'checked', label: '已经核对当前账户规则' },
      { value: 'not-checked', label: '还没有核对' },
      { value: 'unknown', label: '网页信息不足以确认' },
    ] },
  ],
};

const unknownCategories: Option[] = [
  { value: 'billing', label: '钱 / 账单' },
  { value: 'signal', label: '网络 / 信号' },
  { value: 'sim', label: 'SIM / eSIM' },
  { value: 'device', label: '手机设备 / 换机 / 优惠' },
  { value: 'porting', label: '转网 / 号码' },
  { value: 'family', label: '家庭计划' },
  { value: 'international', label: '回国 / 国际使用' },
  { value: 'still-unknown', label: '还是不知道' },
];

const unknownSymptoms: Option[] = [
  { value: 'billing', label: '钱变多了' },
  { value: 'signal', label: '手机没信号 / 网速慢' },
  { value: 'porting', label: '号码不能用' },
  { value: 'sim', label: '新手机不能激活' },
  { value: 'device', label: '优惠没到账 / 设备费用不清楚' },
  { value: 'family', label: '多条家庭线路想调整' },
  { value: 'international', label: '回国或境外使用有问题' },
  { value: 'still-unknown', label: '仍无法描述现象' },
];

const boundaryLabels: Record<string, string> = {
  account: '当前账户类型与账户后台状态',
  linePrice: '实际多线价格与每条线路资格',
  promotion: 'Promotion eligibility 与适用套餐条件',
  tradeIn: 'Trade-in eligibility 与设备验收状态',
  upgrade: 'Upgrade eligibility',
  financing: 'Device financing 与剩余设备余额',
  credits: 'Monthly bill credit 金额、资格与发放进度',
  imei: 'IMEI compatibility 与设备支持情况',
  unlock: '手机 Unlock status',
  port: 'Port status 与运营商后台进度',
  esim: 'eSIM eligibility 与后台配置状态',
  network: '运营商网络、覆盖和账户优先级状态',
  roaming: '当前套餐的 SMS、漫游、Wi-Fi Calling 与长期保号规则',
};

function knowledgeFor(problem: ProblemId, answers: string[], knowledge: QADocument[]) {
  let id: string | undefined;
  if (problem === 'billing' && answers[0] === 'first-bill' && answers[3] === 'att') id = 'att-first-bill-higher-001';
  else if (problem === 'signal' && answers[4] === 'att') id = 'att-mobile-slow-network-001';
  else if (problem === 'sim' && answers[0] === 'deleted') id = 'mobile-esim-deleted-restore-001';
  else if (problem === 'device' && answers[0] === 'lost') id = 'mobile-lost-device-installment-001';
  else if (problem === 'device' && answers[0] === 'payoff' && answers[2] === 'att') id = 'att-installment-early-payoff-001';
  return id ? knowledge.find((doc) => doc.id === id) : undefined;
}

function buildResult(problem: ProblemId, answers: string[], knowledge: QADocument[]): DiagnosisResult {
  const result: DiagnosisResult = {
    layer: '目前信息更适合先定位变化发生在哪一项，不宜仅凭一个现象判断运营商或套餐有问题。',
    why: '手机账单、设备、号码和网络状态可能同时变化；当前回答只用于缩小检查范围。',
    check: ['记录问题发生时间、受影响的线路和近期变更。', '对照账户/App 中当前显示的信息与相关凭证。'],
    selfHelp: ['保存最近账单、错误提示和订单/设备记录。', '只在确认不会影响号码或未结优惠后，再决定是否调整账户。'],
    dont: ['不要根据广告价格或单次现象推断准确费用、资格或网络原因。', '涉及转号时，不要在号码完全转移成功前主动取消旧号码。'],
    cannot: ['仅凭通用网页无法确认当前账户后台状态、具体资格、精确费用或运营商处理结果。'],
    actions: [],
  };

  switch (problem) {
    case 'billing': {
      const kind = answers[0];
      result.layer = kind === 'first-bill'
        ? '更像首期账单构成或开户、转网、加线后的费用需要核对。'
        : kind === 'recurring' ? '更像持续月费、折扣、线路或附加服务发生变化。'
          : kind === 'trade-credit' ? '更像 Promotion / Trade-in Credit 的资格或发放状态需要核对。'
            : kind === 'installment' ? '更像设备付款项目或设备状态变化。'
              : '先从账单 line item 区分 recurring 月费与一次性项目。';
      result.why = kind === 'first-bill'
        ? '首期账单可能同时包含不同起止日期的服务费用、设备税费或一次性项目；账单高不等于套餐月费已持续上涨。'
        : '只有对比账单明细和变化前后的账户记录，才能分辨套餐、Credit、设备、税费、漫游或线路数量的影响。';
      result.check = ['对照最近 2–3 期账单，逐项比较线路月费、设备分期、Credit、税费和一次性收费。', '回看开户、转网、加线、换套餐、AutoPay、设备或成员变更记录。'];
      if (kind === 'first-bill') result.check.push('核对 prorated charge、activation、device tax 和其他 one-time charge 是否出现在明细中。');
      if (kind === 'trade-credit' || answers[2] === 'promotion') result.check.push('准备原订单、Promotion 条款、Trade-in 收据和显示 Credit 的账单期。');
      result.selfHelp = ['标出金额、项目名称和发生账期；将持续月费变化与一次性费用分开记录。', '如果仍看不出差异来源，可先从账单检查页按项目继续核对。'];
      result.dont = ['不要只根据总金额断定运营商涨价，也不要把一次性费用当作持续月费。', 'Credit 或设备分期未核实前，不要仅为账单金额取消线路或提前转网。'];
      result.cannot = ['网页无法查看账户实际账单、具体 Promotion eligibility、Credit 发放状态或多线价格。'];
      result.actions.push({ type: 'knowledge', label: '查看账单费用判断', href: '/bill-optimization' });
      if (kind === 'trade-credit' || kind === 'recurring' || answers[0] === 'lines' || answers[2] === 'promotion' || answers[2] === 'plan') {
        result.actions.push({ type: 'human', label: '需要时进入人工核实', href: '/contact' });
      }
      break;
    }
    case 'signal': {
      const scope = answers[0];
      const place = answers[1];
      result.layer = scope === 'one'
        ? '目前更应该先区分单台手机、SIM/eSIM、设置或设备兼容问题。'
        : scope === 'multiple' && place === 'one-place'
          ? '多台手机在同一地点异常时，可优先比较室内环境、地点覆盖与区域网络情况。'
          : scope === 'multiple' && place === 'everywhere'
            ? '多台手机在多个地点都异常时，才更需要继续核对账户、线路和运营商网络状态。'
            : '现有信息还不足以把问题归到手机、室内覆盖或运营商网络中的某一层。';
      result.why = '单设备、单地点和多设备多地点的现象指向不同；通话、移动数据和近期 SIM/设备变更也需要分开对照。';
      result.check = ['同一地点用另一台手机对照，并记录室内/室外、通话/数据及发生时间。', '查看手机型号、系统、网络设置和 SIM/eSIM 状态；若可行，分别测试 Wi-Fi 与移动数据。'];
      result.selfHelp = ['重启手机并检查系统与运营商设置更新；记录不同地点、设备和时段的结果。', '若只有一台手机异常，先排查该设备和 SIM；多台同地点异常时记录具体地点，再判断是否需要查覆盖或网络。'];
      result.dont = ['不要仅凭一个地点或一台手机的表现就认定运营商网络有故障。', '不要假设更换套餐等级一定能改善信号；账户类型、套餐层级或网络优先级需结合账户核实。'];
      result.cannot = ['网页不能检测手机射频、IMEI/频段兼容、实时覆盖、账户优先级或运营商后台网络状态。'];
      result.observation = '若问题偶发且没有号码安全或账户故障，先记录多台设备、地点和时段的对照结果，再看是否持续。';
      if (scope === 'multiple' && place === 'everywhere' && answers[3] === 'checked') {
        result.actions.push({ type: 'compare', label: '比较其他手机方案', href: '/cellphone/providers' });
        result.actions.push({ type: 'human', label: '需要时进入人工核实', href: '/contact' });
      } else if (scope === 'multiple' || place === 'everywhere' || answers[2] === 'both' || answers[2] === 'calls') {
        result.actions.push({ type: 'human', label: '需要时进入人工核实', href: '/contact' });
      }
      break;
    }
    case 'sim': {
      result.layer = answers[0] === 'deleted' ? '更像 eSIM 配置被删除，需要确认线路仍有效并由运营商重新配置。'
        : answers[0] === 'migration' ? '更像换机迁移、设备锁定或运营商重新配置条件需要核对。'
          : '更像设备支持、锁定状态、SIM 设置或运营商后台配置中的一项需要确认。';
      result.why = '设备型号、系统、锁定状态和账户中的 eSIM 配置共同影响激活；仅凭手机上是否显示 SIM 无法确认线路资格。';
      result.check = ['记下手机型号、系统版本、错误提示和当前线路状态。', '确认该型号的 eSIM 支持、SIM/eSIM 是否启用，以及设备是否可能被锁。'];
      if (answers[0] === 'deleted') result.check.push('确认号码/账户仍有效，并保留运营商账户可验证的身份资料，以便询问重新配置。');
      result.selfHelp = ['先查看手机设置中的 SIM/eSIM 状态和设备说明；换机时确认旧设备与新设备各自的线路状态。', '删除配置后不要反复移除其他仍在使用的线路；需要重新下发配置时联系当前运营商核对。'];
      result.dont = ['不要仅凭型号名称保证设备一定兼容，也不要分享账户密码或完整敏感资料。'];
      result.cannot = ['网页无法确认 IMEI compatibility、Carrier lock、eSIM eligibility 或运营商后台 provisioning。'];
      result.actions.push({ type: 'human', label: '需要时进入人工核实', href: '/contact' });
      break;
    }
    case 'porting': {
      result.layer = answers[0] === 'pending' ? '号码转移仍在 pending，需要核实转出方资料和两边账户状态。'
        : answers[0] === 'failed' ? '转网出现失败或资料不匹配，需要先确认具体错误和旧账户状态。'
          : answers[0] === 'not-started' ? '目前尚未提交转网，适合先准备资料并检查余额、锁定和 Credit 风险。'
            : '当前转号状态不明确，先确认旧号和新线路各自显示的状态。';
      result.why = '转号依赖账户资料、号码资格、旧账户有效状态和运营商间后台进度，单看新手机是否有信号不能确认转移是否完成。';
      result.check = ['核对旧运营商账户仍 active、Account Number、Transfer PIN 和屏幕上的 port status / 错误信息。', '转网前再核对手机解锁、IMEI、设备余额及尚未发完的 Promotion / Bill Credit。'];
      result.selfHelp = ['保存 pending/failed 状态、错误提示、提交时间和相关 case number。', '号码完全转移成功前，不要主动取消旧运营商号码。'];
      result.dont = ['不要重复提交多笔转网请求，也不要在旧号码失效后自行假定新线路已接管号码。'];
      result.cannot = ['网页无法查询 Port status、号码资格、账户后台、设备解锁状态或当前 Credit 余额。'];
      result.actions.push({ type: 'knowledge', label: '家庭组退出 / 户主权限判断', href: '/cellphone/family-plan-exit-account-holder' });
      if (answers[0] !== 'not-started' || answers[1] === 'inactive' || answers[2] !== 'checked') {
        result.actions.push({ type: 'human', label: '需要时进入人工核实', href: '/contact' });
      }
      break;
    }
    case 'device': {
      const kind = answers[0];
      result.layer = kind === 'trade-in' || kind === 'credit-stop' || kind === 'promo'
        ? '更像设备验收、Promotion 资格或 Monthly Bill Credit 发放记录需要逐项核对。'
        : kind === 'payoff' || kind === 'switch-balance'
          ? '更像设备融资余额及提前转网/付清对未发 Credit 的影响需要核对。'
          : '更像设备丢失与账户中的设备分期是两个需要分别处理的问题。';
      result.why = '订单、设备验收、套餐资格和每期 Credit 记录可能不同步；不能仅凭广告金额或一个账单周期推断最终抵扣。';
      result.check = ['准备原订单、Trade-in receipt、最近账单和账户显示的设备分期状态。', '按每台设备记录剩余 balance、Monthly Bill Credit、已发账期和 Promotion 条款。'];
      result.selfHelp = ['把已收到账单的 Credit 与订单/条款逐项对照；记录差异出现的账期。', '如涉及丢失设备，先通过当前运营商账户核实线路和设备安全状态。'];
      result.dont = ['不要依据公开广告推算保证优惠金额。', '确认设备余额和未发 Credit 影响前，不要提前付清、取消线路或转网。'];
      result.cannot = ['网页无法确认 Trade-in eligibility、设备验收、Promotion/套餐资格、Upgrade eligibility、剩余余额或 Credit 发放计划。'];
      result.actions.push({ type: 'knowledge', label: '查看优惠 / Credit 到账判断', href: '/cellphone/faq/promo-credit-not-received' });
      result.actions.push({ type: 'human', label: '需要时进入人工核实', href: '/contact' });
      break;
    }
    case 'family': {
      result.layer = '家庭计划应按每条线路的需求、设备状态和优惠分别判断，不能只看平均每线价格。';
      result.why = '家庭成员可能有不同转网时间、设备分期、Bill Credit 和换机需求；一条线的优惠不一定适用于其他线路。';
      result.check = ['列出每条线的实际账单、使用需求、设备余额和剩余 Credit。', '确认哪些成员要转网、哪些人需要新手机，以及各自是否能在相近时间变更。'];
      result.selfHelp = ['按线路标注当前服务、设备付款、Credit 和是否计划换机；先区分全家调整与部分成员调整。', '准备最近账单和每条线的设备/Promotion 资料，比较时以账户实际显示为准。'];
      result.dont = ['不要只用“每线价格”决定，也不要假设所有成员必须同时转网或同时换手机。'];
      result.cannot = ['网页无法确认实际多线价格、每线 Promotion/Upgrade 资格、设备融资余额或 Credit 是否可转移。'];
      result.actions.push({ type: 'knowledge', label: '查看家庭多线计划判断', href: '/cellphone/family-plan-guide' });
      result.actions.push({ type: 'knowledge', label: '成员退出 / 户主权限 / 保号判断', href: '/cellphone/family-plan-exit-account-holder' });
      result.actions.push({ type: 'human', label: '需要准确数字时进入人工核实', href: '/contact' });
      if (answers[1] === 'switch-all' && answers[2] === 'all' && answers[3] === 'none') {
        result.actions.unshift({ type: 'compare', label: '比较其他手机方案', href: '/cellphone/providers' });
      }
      break;
    }
    case 'international': {
      result.layer = answers[0] === 'keep-number' || answers[0] === 'sms'
        ? '重点是号码在境外是否保持有效，以及 SMS 和长期不使用规则。'
        : answers[0] === 'travel' || answers[0] === 'esim'
          ? '重点是漫游、Wi-Fi Calling、当地数据和 eSIM/双卡之间的使用分工。'
          : '先区分保号、短信、语音漫游和临时数据需求。';
      result.why = '美国号码能否收短信、漫游如何计费、Wi-Fi Calling 与长期未使用处理，都可能依运营商、账户和套餐而异。';
      result.check = ['确认号码必须持续完成哪些功能：收短信、接打电话、银行验证码或仅保留号码。', '在当前账户中核对 SMS、国际漫游、Wi-Fi Calling、eSIM 和长期不使用规则。'];
      result.selfHelp = ['记录目的地、停留时长、是否需要美国号码收短信，以及手机是否支持双卡/eSIM。', '出发前向当前运营商确认线路有效状态和境外使用条件。'];
      result.dont = ['不要假设能收短信就代表号码可长期保留，也不要套用其他套餐的漫游价格或政策。'];
      result.cannot = ['网页无法确认当前账户的国际短信/漫游资格、长期不使用规则、eSIM 状态或具体费用。'];
      result.actions.push({ type: 'knowledge', label: '查看 Prepaid / Postpaid 判断', href: '/cellphone/faq/prepaid-vs-postpaid' });
      result.actions.push({ type: 'human', label: '需要时进入人工核实', href: '/contact' });
      break;
    }
    default: {
      result.layer = '现有描述仍不足以判断是账单、网络、设备还是号码问题。';
      result.why = '不同问题需要查看不同的账单项目、设备状态或号码状态；先记录最明显现象比直接更换方案更可靠。';
      result.check = ['记录最明显的现象、出现时间、受影响的手机/线路，以及最近是否换机、换卡或变更账户。', '保存账单、屏幕错误提示和近期订单，不要在公开留言中提供完整账号或密码。'];
      result.selfHelp = ['按现象重新选择账单、信号、SIM/eSIM、设备、转网、家庭或国际使用入口。', '如果仍无法归类，把现象和已做检查整理后再寻求账户核实。'];
      result.dont = ['不要仅因暂时说不清问题，就先取消号码、改套餐或转网。'];
      result.cannot = ['网页无法读取账户后台、设备诊断、号码转移状态或当前运营商资格。'];
      result.actions.push({ type: 'human', label: '需要时进入人工核实', href: '/contact' });
    }
  }

  const doc = knowledgeFor(problem, answers, knowledge);
  if (doc) {
    result.layer = doc.summary || result.layer;
    result.why = doc.answer || result.why;
    result.check = doc.check_first?.length ? doc.check_first : result.check;
    result.selfHelp = doc.self_help?.length ? doc.self_help : result.selfHelp;
    result.cannot = doc.cannot_determine?.length ? doc.cannot_determine : result.cannot;
    result.knowledgeNextStep = doc.next_step;
  }
  return result;
}

function DataList({ title, items }: { title: string; items: string[] }) {
  return <section><h3 className="mb-2 font-bold text-[#202D3A]">{title}</h3><ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-[#526170]">{items.map((item) => <li key={item}>{item}</li>)}</ul></section>;
}

export default function DiagnosisClient({ knowledge }: DiagnosisClientProps) {
  const [problem, setProblem] = useState<ProblemId | null>(null);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [complete, setComplete] = useState(false);
  const question = problem === 'unknown'
    ? { prompt: step === 0 ? '更接近下面哪一种？' : '现在最明显的现象是什么？', options: step === 0 ? unknownCategories : unknownSymptoms }
    : problem ? questions[problem][step] : undefined;
  const result = useMemo(() => problem ? buildResult(problem, answers, knowledge) : undefined, [answers, knowledge, problem]);
  const selectedProblem = problems.find((item) => item.id === problem);

  const chooseProblem = (id: ProblemId) => { setProblem(id); setStep(0); setAnswers([]); setComplete(false); };
  const answerQuestion = (value: string) => {
    if (problem === 'unknown') {
      if (value !== 'still-unknown') { chooseProblem(value as ProblemId); return; }
      if (step === 0) { setAnswers([value]); setStep(1); return; }
      setAnswers((current) => [...current, value]); setComplete(true); return;
    }
    const nextAnswers = [...answers.slice(0, step), value];
    setAnswers(nextAnswers);
    if (problem && step + 1 >= questions[problem].length) setComplete(true);
    else setStep(step + 1);
  };

  const restart = () => { setProblem(null); setStep(0); setAnswers([]); setComplete(false); };
  const boundaryKeys: Record<ProblemId, string[]> = {
    billing: answers[0] === 'trade-credit' || answers[0] === 'recurring'
      ? ['account', 'linePrice', 'promotion', 'credits', 'financing'] : ['account', 'linePrice', 'financing'],
    signal: ['imei', 'unlock', 'account', 'network'],
    sim: ['imei', 'unlock', 'esim', 'network'],
    porting: ['account', 'unlock', 'port', 'financing', 'credits'],
    device: ['tradeIn', 'promotion', 'upgrade', 'financing', 'credits'],
    family: ['account', 'linePrice', 'promotion', 'upgrade', 'financing', 'credits'],
    international: ['account', 'esim', 'roaming', 'network'],
    unknown: ['account', 'financing', 'imei', 'port', 'esim', 'network'],
  };
  const boundaries = problem ? boundaryKeys[problem].map((key) => boundaryLabels[key]) : [];

  return (
    <main className="min-h-screen bg-[#FCFDFE] px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <Link href="/cellphone/faq" className="inline-flex text-sm font-medium text-[#526170] hover:text-[#164B78]">← 返回手机常见问题</Link>
        <header className="py-8 text-center sm:py-10">
          <h1 className="text-3xl font-black tracking-tight text-[#202D3A] sm:text-5xl">手机出了问题？先判断是哪一种</h1>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-[#526170] sm:text-lg">从账单、信号、SIM/eSIM、转号、设备分期、家庭多线到回国使用，先判断问题发生在哪一层，再决定自查、继续观察、看知识说明还是核实账户。</p>
        </header>

        {!problem && <section aria-labelledby="problem-options-heading">
          <h2 id="problem-options-heading" className="mb-4 text-lg font-bold text-[#202D3A]">你现在遇到哪类问题？</h2>
          <div className="grid gap-3 sm:grid-cols-2">{problems.map((item) => <button key={item.id} type="button" onClick={() => chooseProblem(item.id)} className="rounded-2xl border border-[#D5E5EC] bg-white p-5 text-left shadow-sm transition hover:border-[#2786A5] hover:bg-[#F4F8FA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#164B78]"><span className="block text-lg font-bold text-[#202D3A]">{item.title}</span><span className="mt-1 block text-sm leading-6 text-[#526170]">{item.description}</span></button>)}</div>
        </section>}

        {problem && !complete && question && <section className="rounded-3xl border border-[#D5E5EC] bg-white p-5 shadow-sm sm:p-8" aria-live="polite">
          <div className="mb-5 flex items-center justify-between gap-3 text-sm text-[#526170]"><span>{selectedProblem?.title}</span><span>问题 {step + 1} / {problem === 'unknown' ? 2 : questions[problem].length}</span></div>
          <h2 className="text-xl font-bold leading-snug text-[#202D3A] sm:text-2xl">{question.prompt}</h2>
          <div className="mt-5 grid gap-3">{question.options.map((option) => <button key={option.value} type="button" onClick={() => answerQuestion(option.value)} className="w-full rounded-xl border border-[#D5E5EC] bg-white p-4 text-left font-semibold leading-6 text-[#202D3A] transition hover:border-[#2786A5] hover:bg-[#F4F8FA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#164B78]">{option.label}</button>)}</div>
          <button type="button" onClick={() => step === 0 ? restart() : setStep(step - 1)} className="mt-5 text-sm font-semibold text-[#246B95] hover:text-[#103B60]">{step === 0 ? '← 返回问题分类' : '← 上一步'}</button>
        </section>}

        {problem && complete && result && <section className="rounded-3xl border border-[#D5E5EC] bg-white p-5 shadow-sm sm:p-8">
          <p className="text-sm font-semibold text-[#2786A5]">初步判断</p>
          <h2 className="mt-1 text-2xl font-black text-[#202D3A]">{selectedProblem?.title}</h2>
          <div className="mt-6 space-y-6">
            <section><h3 className="mb-2 font-bold text-[#202D3A]">可能发生在哪一层</h3><p className="rounded-xl bg-[#F4F8FA] p-4 leading-7 text-[#202D3A]">{result.layer}</p></section>
            <section><h3 className="mb-2 font-bold text-[#202D3A]">为什么这样判断</h3><p className="text-sm leading-7 text-[#526170]">{result.why}</p></section>
            <DataList title="先检查什么" items={result.check} />
            <DataList title="可以自己先做什么" items={result.selfHelp} />
            <DataList title="暂时不要做什么" items={result.dont} />
            <section><h3 className="mb-2 font-bold text-[#202D3A]">这些信息网页无法准确确认</h3><ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-[#526170]">{[...new Set([...result.cannot, ...boundaries])].map((item) => <li key={item}>{item}</li>)}</ul></section>
            {result.knowledgeNextStep && <p className="text-sm leading-6 text-[#526170]">知识库建议的下一步：{result.knowledgeNextStep}</p>}
            {result.observation && <p className="rounded-xl bg-[#F4F8FA] p-4 text-sm leading-6 text-[#526170]">继续观察：{result.observation}</p>}
            {result.actions.length > 0 && <section><h3 className="mb-3 font-bold text-[#202D3A]">下一步</h3><div className="flex flex-wrap gap-3">{result.actions.map((action) => <Link key={`${action.type}-${action.href}`} href={action.href} className={action.type === 'human' ? 'inline-flex min-h-11 items-center justify-center rounded-xl border border-[#164B78] bg-white px-4 py-2 font-bold text-[#164B78] transition hover:bg-[#F4F8FA]' : action.type === 'compare' ? 'inline-flex min-h-11 items-center justify-center rounded-xl bg-[#164B78] px-4 py-2 font-bold text-white transition hover:bg-[#103B60]' : 'inline-flex min-h-11 items-center justify-center rounded-xl border border-[#D5E5EC] bg-white px-4 py-2 font-semibold text-[#164B78] transition hover:bg-[#F4F8FA]'}>{action.label} →</Link>)}</div></section>}
            {result.actions.some((action) => action.type === 'human') && <section className="rounded-xl border border-[#D5E5EC] bg-[#F4F8FA] p-4"><h3 className="font-bold text-[#202D3A]">需要准确结果时，再进入人工核实</h3><p className="mt-2 text-sm leading-6 text-[#526170]">网页可以帮助你判断方向，但涉及实际账户、资格、设备或后台状态时，需要结合当前资料确认。</p></section>}
          </div>
          <button type="button" onClick={restart} className="mt-6 block text-sm font-semibold text-[#526170] underline underline-offset-4 hover:text-[#164B78]">重新开始判断</button>
        </section>}

        <p className="mt-8 text-center text-xs text-[#526170]">最后更新：2026年10月｜价格、资格、优惠及账户结果可能随运营商政策变化，请以当前账户与官方规则为准。</p>
      </div>
    </main>
  );
}
