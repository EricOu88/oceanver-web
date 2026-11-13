import type { Metadata } from 'next'
import Link from 'next/link'

const url = 'https://oceanver.com/internet/att-fiber/price-increase'
const title = 'AT&T 宽带涨价怎么办？2026 年加 $5 的适用套餐与省钱方法'
const description = 'AT&T 宽带账单多了 5 美元？区分 2026 年 8 月、9 月和 12 月的适用套餐，核对 Fiber、Internet Air、传统宽带与账单通知，了解英文客服谈价、中文协助、调整服务及设备归还。'

export const metadata: Metadata = {
  title: { absolute: title + '｜Oceanver' },
  description,
  robots: { index: false, follow: true },
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: 'Oceanver', locale: 'zh_CN', type: 'article' },
}

const steps = [
  { id: 'bill', title: '1. 哪些 AT&T 宽带用户在 2026 年加 $5？' },
  { id: 'call', title: '2. 联系 AT&T 官方客服或中文协助' },
  { id: 'adjust', title: '3. 调整服务和折扣，而不是直接取消' },
  { id: 'device', title: '4. 核实 Wi-Fi 网关、安装与设备费用' },
  { id: 'review', title: '5. 每年检查账单，优惠到期前再查一次' },
]

export default function ATTInternetPriceIncreasePage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': url + '#webpage',
        url,
        name: title,
        description,
        inLanguage: 'zh-CN',
        isPartOf: { '@id': 'https://oceanver.com/#website' },
      },
      {
        '@type': 'Article',
        '@id': url + '#article',
        headline: title,
        description,
        mainEntityOfPage: { '@id': url + '#webpage' },
        inLanguage: 'zh-CN',
        datePublished: '2026-11-03',
        dateModified: '2026-11-12',
        author: { '@type': 'Organization', name: 'Oceanver' },
        publisher: { '@type': 'Organization', name: 'Oceanver' },
      },
    ],
  }
  return (
    <main className="min-h-screen bg-[#FCFDFE] px-4 py-8 text-[#202D3A] sm:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <article className="mx-auto max-w-4xl">
        <nav aria-label="返回导航" className="mb-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-[#164B78]">
          <Link href="/internet/att-fiber" className="underline">← AT&amp;T Fiber 相关问题</Link>
          <Link href="/internet/price-hike" className="underline">其他宽带涨价问题</Link>
        </nav>
        <p className="text-sm font-bold text-[#2786A5]">Oceanver · AT&amp;T 已有宽带客户 · 2026 年 11 月 3 日核查</p>
        <h1 className="mt-3 text-3xl font-black leading-tight md:text-4xl">{title}</h1>
        <p className="best-answer speakable-summary mt-5 text-lg leading-8" data-page-answer>
          AT&amp;T 宽带账单每月多了 5 美元，先别急着取消。2026 年不同批次的调价，适用套餐和开通日期不同：12 月的新一轮调整不包括当前 Fiber 和 Internet Air，但部分老用户已属于此前的调整范围。先用下表核对，再检查账单与折扣。
        </p>
        <p className="mt-3 text-sm leading-7 text-[#526170]">本文只讨论家庭宽带，不涉及 AT&amp;T 手机线路涨价。需要中文帮助，可联系中文客服协助核对收费项目；账户调整与优惠资格由 AT&amp;T 确认。</p>
        <nav aria-label="文章目录" className="my-7 rounded-2xl border border-[#D8E2EA] bg-[#EDF5F9] p-5">
          <h2 className="font-bold">按这五步处理</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-6">
            {steps.map((item) => <li key={item.id}><a href={'#' + item.id} className="text-[#164B78] underline">{item.title}</a></li>)}
          </ol>
        </nav>

        <section id="bill" className="mt-9 scroll-mt-6">
          <h2 className="text-2xl font-black">第一步：2026 年 AT&amp;T 宽带涨价 $5，哪些人受影响？</h2>
          <p className="mt-3 leading-8">以下是 AT&amp;T 公布的不同批次调整。<strong>2026 年 12 月 1 日起的新一轮调整不适用于当前 Fiber 和 Internet Air 套餐</strong>；但部分 Fiber、Internet Air 老用户已分别属于 8 月和 9 月的调整。各批次不能简单叠加，也不要和手机套餐涨价混在一起。以账户通知和开通记录最终核实。</p>
          <div className="mt-5 overflow-x-auto rounded-xl border border-[#D8E2EA]">
            <table className="w-full min-w-[590px] border-collapse text-left text-sm leading-6">
              <caption className="bg-[#EDF5F9] px-4 py-3 text-left font-bold">AT&amp;T 2026 年家庭宽带调价批次（每月 +$5，按适用账户）</caption>
              <thead className="bg-[#F4F8FA]"><tr><th className="border-b p-3">生效日期</th><th className="border-b p-3">官方公布的适用范围</th><th className="border-b p-3">重要区别</th></tr></thead>
              <tbody>
                <tr><td className="border-b p-3 align-top">2026-12-01 起</td><td className="border-b p-3 align-top">大多数在 2024 年 6 月之前开通的 AT&amp;T Internet 套餐</td><td className="border-b p-3 align-top">不含当前 Fiber / Internet Air；可能在 1–3 个账单周期体现</td></tr>
                <tr><td className="border-b p-3 align-top">2026-09-28</td><td className="border-b p-3 align-top">2025 年 10 月之前开通的 Internet Air 套餐</td><td className="border-b p-3 align-top">固定无线家庭宽带，不等于 Fiber</td></tr>
                <tr><td className="border-b p-3 align-top">2026-08-16</td><td className="border-b p-3 align-top">2024-06-09 至 2025-07-19 开通的 Fiber 和 AT&amp;T Internet 套餐</td><td className="border-b p-3 align-top">这轮包含特定 Fiber 客户</td></tr>
                <tr><td className="p-3 align-top">2026-08-16</td><td className="p-3 align-top">符合通知范围的原价 $15 Access from AT&amp;T 套餐</td><td className="p-3 align-top">低收入套餐应单独核对折扣资格</td></tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm leading-7 text-[#526170]">资料依据：<a href="https://www.att.com/support/article/internet/KM1260426/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#164B78] underline">AT&amp;T 官方家庭宽带价格调整通知</a>（2026 年 11 月 3 日核对）。2025 年底曾有另一轮涨价，不应与上述批次混淆。若你的账单涨幅不是 $5，仍按下面方法逐项核对。</p>
          <h3 className="mt-7 text-xl font-bold">先确认你的账单到底是哪一项增加</h3>
          <p className="mt-3 leading-8">先打开 AT&amp;T 账户的 Billing Center，对比最近两期账单。AT&amp;T 官方提供 <strong>See what changed</strong>（查看变化）的账单差异入口，若账户页面显示，可展开核对具体收费项目。还可以查账单中的 <strong>News you can use</strong>、邮件和纸质通知，核对服务名称、开通日期以及实际生效时间。</p>
          <ol className="mt-4 list-decimal space-y-3 pl-6 leading-8">
            <li><strong>促销折扣结束：</strong>检查 Promotion、Credit、Internet 折扣是否停止；优惠消失不等于基础月费一定涨价。</li>
            <li><strong>基础月费调整：</strong>比较同一网速档位的 recurring charge，并查看调价通知。</li>
            <li><strong>AutoPay 和电子账单：</strong>检查自动付款有没有停用、付款方式是否更改、折扣是否仍适用。不同产品及旧套餐规则不同。</li>
            <li><strong>改套餐后的费用：</strong>近期升级、降档或搬家，可能出现 partial-month / prorated charges（按比例收费）。</li>
            <li><strong>附加项目：</strong>核对静态 IP、Wi-Fi 扩展、网络安全服务、安装或其他服务是否新增，以及这些项目是否会每月重复。</li>
          </ol>
          <p className="mt-4 rounded-xl bg-[#EDF5F9] p-4 leading-7"><strong>举例说明（非真实案例）：</strong>上月 $60，这个月 $75。如果原有 $10 折扣停止、另外产生 $5 一次性费用，就不能把全部 $15 都当成每月永久涨价。若基础价仅持续增加 $5，12 个月相当于多付 $60；是否换网仍应算上安装、重叠账期和捆绑折扣的变化。</p>
          <a href="https://www.att.com/support/article/my-account/KM1051879/" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block font-semibold text-[#164B78] underline">AT&amp;T 官方：账单为什么发生变化</a>
        </section>

        <section id="billing-checklist" className="mt-9 rounded-2xl border border-[#D8E2EA] bg-[#F4F8FA] p-5 sm:p-6">
          <h2 className="text-2xl font-black">AT&T 宽带：18 项账单检查清单</h2>
          <p className="mt-3 leading-7">以下是需要逐项核对的潜在原因，并非全部账户都有这些收费。优先对照最近两期账单、开户条款与官方通知，区分每月重复费用和一次性费用。</p>
          <ol className="mt-4 grid list-decimal gap-x-8 gap-y-2 pl-5 leading-7 md:grid-cols-2">
            {["旧套餐官方调价","促销价到期","阶段性 Credit 结束","AutoPay 折扣失效","AutoPay 付款方式改变","无纸化账单设置变化","手机宽带捆绑资格改变","旧套餐转新套餐","升级 Fiber 网速","搬家或更换服务地址","历史设备项目或额外设备","静态 IP、扩展或网络附加服务","旧互联网套餐用量超额","新装及安装费用","月中按比例计费","逾期与恢复服务费","账单抵扣尚未入账","取消服务及设备未归还费用"].map((item) => <li key={item}>{item}</li>)}
          </ol>
          <p className="mt-4 text-sm leading-7 text-[#526170]">不同年代套餐、地区、账户资格和支付设置可能不同；具体金额、是否适用及退款争议均由运营商账户记录确定。</p>
          <Link href="/bill-optimization" className="mt-4 inline-block font-bold text-[#164B78] underline">← 返回五家运营商涨价总入口</Link>
        </section>

        <section id="call" className="mt-10 scroll-mt-6">
          <h2 className="text-2xl font-black">第二步：联系 AT&amp;T 官方客服，或请中文客服协助中文核对</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-[#D8E2EA] bg-white p-5">
              <h3 className="text-xl font-bold">自行联系 AT&amp;T 官方客服</h3>
              <p className="mt-3 leading-7">AT&amp;T 官方家庭宽带账单及技术支持电话：<a href="tel:+18002882020" className="font-bold text-[#164B78] underline">800-288-2020</a>。客服工作时间以官方页面当日显示为准；也可以通过官方网页 Chat 联系。</p>
              <p className="mt-3 font-semibold">英文话术：</p>
              <blockquote className="mt-2 border-l-4 border-[#2786A5] pl-4 leading-7 text-[#526170]">My AT&amp;T Internet bill went up. Could you review the charges, explain which discounts ended, and check whether there is a lower-cost plan or any discount available for my existing account? Please confirm the final monthly price, any one-time fees, and when the price may change again.</blockquote>
              <p className="mt-3 text-sm leading-7 text-[#526170]"><strong>中文意思：</strong>我的 AT&amp;T 宽带账单上涨了，请说明具体变化的收费项、哪些折扣结束，以及现有账户有没有更低价方案。变更前，请确认最终月费、一次性费用和下次价格可能变化的时间。</p>
              <p className="mt-3 text-sm leading-7">如果前台无法说明优惠资格，可询问是否有适合现有客户的账单或账户方案；不要假设一定有 retention 特价，也不要声称已经准备取消服务以换取优惠。</p>
              <a href="https://www.att.com/support/internet/" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block font-semibold text-[#164B78] underline">AT&amp;T 官方宽带客服入口</a>
            </div>
            <div className="rounded-2xl border border-[#D8E2EA] bg-white p-5">
              <h3 className="text-xl font-bold">联系Oceanver，获取中文账单核对协助</h3>
              <p className="mt-3 leading-7">不方便用英文核对价格，或者看不懂优惠和收费明细？可以联系<strong>Oceanver中文客服</strong>，协助整理最近两期账单、找出变化项目、准备向 AT&amp;T 询问的问题，并比较调整服务的可行性。</p>
              <p className="mt-3 leading-7">Oceanver 专用中文咨询：<a href="tel:+15108496191" className="font-bold text-[#164B78] underline">510-849-6191</a></p>
              <p className="mt-3 text-sm leading-7">Oceanver并非 AT&amp;T 官方客服或账单争议裁决部门；账户验证、折扣资格、费用更改和正式报价最终由 AT&amp;T 决定。首次咨询只需提供脱敏后的收费项目，不要发送密码、一次性验证码、完整账户资料或未遮盖个人信息的账单。查询地址覆盖时，再通过合适的私密渠道提供必要地址。</p>
              <Link href="/contact" className="mt-3 inline-block font-semibold text-[#164B78] underline">中文咨询入口</Link>
            </div>
          </div>
          <p className="mt-4 leading-8"><strong>打完电话务必记下：</strong>调整后的含附加项目月费、优惠到期日期、是否产生一次性费用、改档生效日期，以及客服确认号码。下期账单再核对是否落实。</p>
        </section>

        <section id="adjust" className="mt-10 scroll-mt-6">
          <h2 className="text-2xl font-black">第三步：先调整 AT&amp;T 服务和折扣，不一定要换运营商</h2>
          <ul className="mt-4 list-disc space-y-3 pl-6 leading-8">
            <li><strong>AutoPay：</strong>符合条件的 AT&amp;T 家庭宽带账户，使用银行账户或 AT&amp;T Points Plus Card from Citi 自动付款可享每月 $10 折扣，使用借记卡可享 $5；其他信用卡通常没有该 AutoPay 折扣，Internet Air 的 AutoPay 折扣则为每月 $5，具体仍以账户资格为准。<strong>必须同时开通无纸化账单</strong>。新设置可能需要最多两个账单周期生效；在账户显示 AutoPay 已安排付款之前，仍应按原方式按时支付。<a href="https://www.att.com/deals/autopay-discount/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#164B78] underline">查看 AT&amp;T 官方 AutoPay 规则</a>。</li>
            <li><strong>Internet 服务档位：</strong>如果 1 Gbps 的速度长期没有用足，可询问现有账户是否可以调整到满足需求、总费用更合适的档位；先比较上传需求，不要因为单个房间 Wi-Fi 慢就直接升级套餐。</li>
            <li><strong>手机 + 宽带折扣：</strong>确认是否有绑定服务相关优惠、条件与失效风险；换宽带也可能影响已有手机或组合折扣。不能为了获得折扣而忽略新增手机线路的总成本。</li>
            <li><strong>Fiber / Internet Air / 旧式宽带：</strong>不要把别的地址新客户广告价格视为你原账户可以直接领取的价；先检查地址、产品类型、资格和转换成本。</li>
          </ul>
          <p className="mt-4 leading-8"><strong>换网前算清楚：</strong>比如新网每月便宜 $10，但安装与新旧服务重叠产生 $120 一次性成本，仅按这两项算，需要约 12 个月抵消。还要检查手机捆绑优惠、Fiber 上传速度与新运营商的长期价格。先确认新网络在完整地址可安装，并在新服务稳定后再取消 AT&amp;T，避免断网。</p>
          <p className="mt-3 leading-8">如果同时比较 Spectrum，先核查它的优惠结束价格和 Wi-Fi 费用：<Link href="/internet/spectrum/price-increase" className="font-semibold text-[#164B78] underline">Spectrum 涨价怎么办？账单、谈价和设备处理指南</Link>。</p>
          <p className="mt-3 leading-8">如果考虑 Frontier，请先核对它的价格保证和退网设备费用：<Link href="/internet/frontier/price-increase" className="font-semibold text-[#164B78] underline">Frontier 账单涨价和取消成本指南</Link>。</p>
          <Link href="/internet/providers" className="mt-3 inline-block font-semibold text-[#164B78] underline">比较不同宽带服务的长期成本</Link>
        </section>

        <section id="device" className="mt-10 scroll-mt-6">
          <h2 className="text-2xl font-black">第四步：设备收费要核实，不能看到 Gateway 就认定是租金</h2>
          <p className="mt-3 leading-8">AT&amp;T Fiber 及 Internet Air 的公开销售说明与旧式 DSL、历史套餐不同。某些现行方案已包含网络设备和 Wi-Fi 功能，不代表所有历史账户、附加设备及安装条件都免费。</p>
          <ul className="mt-4 list-disc space-y-3 pl-6 leading-8">
            <li>对照收费项目区分 Gateway、Extender、安装、静态 IP 和附加服务，不要盲目购买自有 modem 或路由器。</li>
            <li>更换套餐前确认原有折扣会不会失效，网关是否需要更换，以及是否会产生技术人员安装费用。</li>
            <li><strong>取消或更换服务：</strong>AT&amp;T 要求需要归还的设备在服务变更或断开后的 21 天内归还。带上设备和账户号码到指定 FedEx Office Pack &amp; Ship 或 The UPS Store，由店员扫描并保留收据；不要投进寄件箱。墙上的 Fiber Jack、ONT 等固定设备不要自行拆除。归还清单因服务类型不同，应按官方邮件核对。</li>
          </ul>
          <a href="https://www.att.com/support/how-to/internet/equipment-return/" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block font-semibold text-[#164B78] underline">AT&amp;T 官方设备归还步骤</a>
        </section>

        <section id="review" className="mt-10 scroll-mt-6">
          <h2 className="text-2xl font-black">第五步：每年检查一次 AT&amp;T 账单</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-6 leading-8">
            <li>记下当前真实总月费、优惠金额、折扣资格、优惠到期时间。</li>
            <li>优惠结束前或收到调价通知时，重新对比最近两期账单。</li>
            <li>每年询问一次现有客户可否调整服务档位或适用折扣；不保证客服提供额外优惠。</li>
            <li>保留客服确认记录，并复查下一期账单是否按确认内容收费。</li>
          </ol>
        </section>
        
        <section className="mt-10">
          <h2 className="text-2xl font-black">AT&amp;T 宽带涨价常见问题</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-[#D8E2EA] bg-white p-5"><h3 className="font-bold">AT&amp;T 宽带每月多 $5，一定是官方涨价吗？</h3><p className="mt-2 leading-7">不一定。也可能是促销结束、AutoPay 折扣变化或一次性费用。请对照套餐名称、开通日期及具体收费行，再找官方调价通知。</p></div>
            <div className="rounded-xl border border-[#D8E2EA] bg-white p-5"><h3 className="font-bold">2026 年 12 月所有 AT&amp;T Fiber 都涨 $5 吗？</h3><p className="mt-2 leading-7">不是。12 月这轮官方列出的调整不适用于当前 Fiber / Internet Air 套餐；部分符合资格的 Fiber 账户曾属于 8 月的不同批次。</p></div>
            <div className="rounded-xl border border-[#D8E2EA] bg-white p-5"><h3 className="font-bold">打电话要求降价一定成功吗？</h3><p className="mt-2 leading-7">不保证。可以申请核对新方案、现有账户折扣、AutoPay 资格和费用生效日期，必须以客服提供的具体报价及确认记录为准。</p></div>
            <div className="rounded-xl border border-[#D8E2EA] bg-white p-5"><h3 className="font-bold">退 AT&amp;T 宽带设备有多久？</h3><p className="mt-2 leading-7">官方一般要求需要归还的设备在服务变更或断开后 21 天内退还。请核对设备清单、让店员扫描并保留追踪凭证。</p></div>
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-[#D8E2EA] bg-[#EDF5F9] p-6">
          <h2 className="text-xl font-black">AT&amp;T 宽带涨价，英文谈价不方便？</h2>
          <p className="mt-3 leading-7">可以把最近两期账单的费用项目整理出来，遮盖姓名、账户号码、详细地址及付款信息后联系中文客服。我们先帮助你判断涨价原因，区分可尝试调整的项目；如果需要比较替代服务，再按具体地址确认 AT&amp;T、Xfinity、Spectrum 的覆盖和完整成本，不直接建议你更换运营商。</p>
          <Link href="/internet/providers" className="mt-3 block font-semibold text-[#164B78] underline">比较不同宽带的长期费用与地址条件</Link>
          <a href="tel:+15108496191" className="mt-4 inline-block rounded-xl bg-[#164B78] px-5 py-3 font-bold text-white">中文咨询：510-849-6191</a>
        </section>
        <section className="mt-8 text-sm leading-7 text-[#526170]">
          <p><strong>官方核查来源：</strong>{' '}
            <a className="underline" href="https://www.att.com/support/article/my-account/KM1051879/" target="_blank" rel="noopener noreferrer">账单变化说明</a>、
            <a className="underline" href="https://www.att.com/deals/autopay-discount/" target="_blank" rel="noopener noreferrer">AutoPay 折扣规则</a>、
            <a className="underline" href="https://www.att.com/support/internet/" target="_blank" rel="noopener noreferrer">家庭宽带客服</a>、
            <a className="underline" href="https://www.att.com/support/how-to/internet/equipment-return/" target="_blank" rel="noopener noreferrer">设备归还步骤</a>。
          </p>
          <p className="mt-2">最后更新：2026 年 11 月 12 日（美西时间）。原政策资料核查：2026 年 11 月 3 日。本文不代表 AT&amp;T 官方承诺降价，账户费用和资格须以运营商确认结果为准。Oceanver 提供问题核对信息；账户变更、退款和维修由运营商确认或处理。</p>
        </section>
      </article>
    </main>
  )
}
