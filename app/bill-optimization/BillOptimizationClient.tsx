import Link from 'next/link'

const reasons = [
  {
    title: '优惠期结束',
    detail:
      '查看账单上的 promotion、introductory offer 或折扣结束日期，并与上月同一项目比较。若基础月费恢复到标准价格，通常会持续影响后续账期。',
  },
  {
    title: 'AutoPay / Paperless 折扣失效',
    detail:
      '检查 AutoPay 或 Paperless Billing 折扣是否从账单中消失，并确认付款方式、注册状态和账户资格。若状态没有恢复，之后的账单也可能继续少一项折扣。',
  },
  {
    title: '设备费用变化',
    detail:
      '比较手机设备分期、modem 或 router 租用费，以及设备抵扣项目。设备付款、租用或抵扣变化可能持续多个账期，具体以账户明细为准。',
  },
  {
    title: '附加服务增加',
    detail:
      '查找保险、国际功能、额外数据、网络服务或其他 add-on 是否新增或调整。先确认服务是否仍需要，再向运营商核实取消条件和生效时间。',
  },
  {
    title: '套餐或线路变化',
    detail:
      '核对手机线路数量、套餐档位、宽带速度档位和 bundle 是否改变。升级可能提高经常性月费，也可能带来首月按比例计费。',
  },
  {
    title: '一次性费用或 prorated charge',
    detail:
      '查看费用是否标为 activation、installation、upgrade、设备或按比例计费，并确认日期范围。一次性费用通常不会自动重复，但应在下一期账单确认。',
  },
  {
    title: '运营商价格或税费调整',
    detail:
      '比较基础服务费、税费和监管费用的具体行项目，并留意运营商通知。若基础服务费本身变化，之后可能持续；税费变化则应按账单列项和适用地区核实。',
  },
]

const phoneItems = [
  ['家庭线路数', '比较本期与上期线路数量、停用线路和新开线路，确认家庭成员或设备变更是否带来月费变化。'],
  ['免费线与 line discount', '查看免费线路、线路折扣或多线折扣是否仍列在账单上，并核对适用期限和资格。'],
  ['AutoPay / Paperless', '检查付款方式和电子账单状态，以及相应折扣是否仍出现在每条线路或账户总额中。'],
  ['Trade-in credits', '比较设备抵扣金额、已抵扣期数和剩余期数；抵扣延迟或资格变化需要运营商查看账户记录。'],
  ['设备分期', '核对每台设备的月供、剩余期数、升级或换机后的新分期，以及是否存在重复收费。'],
  ['手机保险', '确认保险覆盖的设备、月费和是否有新增线路；取消资格与生效日期应向运营商确认。'],
  ['国际功能与附加服务', '检查国际通话、漫游、热点或其他 add-on 的使用记录、月费和启用时间。'],
  ['套餐升级', '比较套餐名称、数据或热点权益及月费；确认升级由谁发起、何时生效。'],
  ['一次性 activation / upgrade fee', '核对费用日期和说明，并在下一期账单确认是否只收取一次。'],
]

const internetItems = [
  ['促销期结束', '对照开户或续约时的促销期限，检查基础月费是否恢复；确认新的常规价格及生效日期。'],
  ['Modem / router 设备费', '比较设备租用费和自有设备抵扣，确认设备归属、租用状态及费用是否重复。'],
  ['Unlimited data', '查看无限流量服务是否新增、移除或改价，并确认是否有数据用量相关费用。'],
  ['Speed tier', '核对当前速度档位和套餐名称，判断是否曾升级或改回其他档位。'],
  ['Bundle', '检查宽带与手机、电视或其他服务的组合折扣是否改变，尤其是其中一项服务取消或改档后。'],
  ['AutoPay', '确认自动付款方式、注册状态和账单折扣是否符合该账户的当前条件。'],
  ['安装费与一次性费用', '区分 installation、activation、technician visit 等费用和每月服务费，并查看收费对应的日期。'],
  ['旧套餐切换', '查看套餐是否停止提供、迁移到新档位或被账户变更替代，并向运营商核实切换记录。'],
  ['运营商价格调整', '对照通知和账单中的基础服务费变化，确认新价格何时开始、是否影响后续账期。'],
]

const faqs = [
  {
    q: '为什么手机或宽带账单会突然变贵？',
    a: '常见原因包括促销或折扣结束、AutoPay 折扣失效、设备费用变化、附加服务增加、套餐或线路调整、一次性费用，以及运营商价格或税费变化。应先比较相邻账期的明细，找出具体变化项目。',
  },
  {
    q: '优惠期结束怎么判断？',
    a: '查看账单上的 promotion 或折扣名称、金额和适用期限，再与开户或续约时收到的价格说明核对。若优惠行消失、基础月费恢复，且后续账期继续按新价格收费，可能是优惠期结束；最终期限应向运营商确认。',
  },
  {
    q: 'AutoPay 折扣消失怎么判断？',
    a: '比较前后账单中的 AutoPay 或 Paperless 折扣行，检查付款方式和电子账单状态是否仍有效。账户资格或支付方式要求可能因运营商和套餐而异，应以账户记录为准。',
  },
  {
    q: '一次性费用和长期涨价怎么区分？',
    a: '查看费用名称和覆盖日期：安装、激活、升级或按比例费用可能只对应一个事件；基础月费、设备月供或持续服务费则可能重复。再比较下一期账单确认是否再次出现。',
  },
  {
    q: '手机家庭套餐为什么会变贵？',
    a: '线路数、线路折扣、免费线资格、设备分期、trade-in credits、保险、附加服务或套餐档位发生变化，都可能改变家庭总额。应同时检查账户总额和每条线路明细。',
  },
  {
    q: '宽带促销期结束后应该怎么办？',
    a: '先确认新的常规月费、促销结束日期和设备费用，再判断当前速度、数据和 bundle 是否仍符合实际需要。是否更换方案取决于地址可用性、账户资格、总成本和切换条件。',
  },
  {
    q: '什么时候换运营商不划算？',
    a: '当一次性费用、设备余额或抵扣损失、价格保证差异、安装成本和服务需求变化抵消了潜在月费差异时，换运营商未必划算。应比较完整周期成本和账户条件，而不是只看宣传价格。',
  },
  {
    q: '看不懂账单怎么办？需要提供账号密码吗？',
    a: '先对比本月和上月总额，再找新增或金额变化的行项目，以及消失的折扣、设备费、附加服务和一次性费用。不需要向任何人提供账户密码；若需要人工核实，请遮住账号、完整地址、电话号码、条码和其他敏感信息。',
  },
]

function ReviewList({ items }: { items: string[][] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map(([title, detail]) => (
        <article key={title} className="rounded-2xl border border-slate-200 bg-white p-5">
          <h3 className="font-bold text-slate-900">{title}</h3>
          <p className="mt-2 leading-7 text-slate-700">{detail}</p>
        </article>
      ))}
    </div>
  )
}

export default function BillOptimizationClient() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="bg-gradient-to-b from-blue-50 to-slate-50 px-5 pb-12 pt-36 md:pb-16 md:pt-16">
        <div className="mx-auto max-w-5xl">
          <Link href="/" className="mb-6 inline-block text-sm text-slate-500 hover:text-blue-700">
            ← 返回首页
          </Link>
          <p className="mb-4 text-sm font-bold uppercase tracking-wide text-blue-700">BILL CHECK · 美国手机与家庭宽带</p>
          <h1 className="max-w-4xl text-3xl font-black leading-tight tracking-tight md:text-5xl">
            手机、宽带账单为什么变贵？
          </h1>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-700 md:text-xl">
            账单变贵不一定只有一个原因。常见情况包括优惠到期、AutoPay 折扣失效、设备费、附加服务、套餐调整、一次性费用或运营商价格变化。先找到账单中发生变化的项目，再判断是否需要处理。
          </p>
          <p className="mt-4 font-semibold text-blue-900">先判断原因，再决定是否换套餐或换运营商。</p>
        </div>
      </header>

      <div className="mx-auto max-w-5xl space-y-6 px-5 pb-28 pt-0 md:space-y-8 md:py-14">
        <nav aria-label="快速查看" className="rounded-2xl border border-slate-200 bg-white px-5 py-4">
          <span className="mr-3 text-sm font-bold text-slate-600">快速查看：</span>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-blue-800">
            <a href="#bill-reasons" className="underline underline-offset-4">常见涨价原因</a>
            <a href="#mobile-bill" className="underline underline-offset-4">手机账单检查</a>
            <a href="#first-mobile-bill" className="underline underline-offset-4">首张手机账单高于报价</a>
            <a href="#home-internet-bill" className="underline underline-offset-4">宽带账单检查</a>
            <a href="#unknown-reason" className="underline underline-offset-4">看不懂账单怎么办</a>
            <a href="#worth-action" className="underline underline-offset-4">哪些情况值得处理</a>
            <a href="#observe-first" className="underline underline-offset-4">哪些情况可以先观察</a>
            <a href="#after-adjustment" className="underline underline-offset-4">调整后还要检查什么</a>
            <a href="#move-both" className="underline underline-offset-4">手机 + 宽带一起迁移</a>
            <a href="#faq" className="underline underline-offset-4">常见问题</a>
          </div>
        </nav>
        <section id="bill-reasons" className="scroll-mt-6 rounded-3xl bg-white p-5 shadow-sm md:p-8">
          <h2 className="text-2xl font-black md:text-3xl">账单突然变贵，先看这 7 个地方</h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-700">先比较本月和上月的账单明细，定位金额、新增项目或折扣状态的变化。下面每种情况都要结合账户记录确认。</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {reasons.map((reason, index) => (
              <article key={reason.title} className="scroll-mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-lg font-bold">{index + 1}. {reason.title}</h3>
                <p className="mt-2 leading-7 text-slate-700">{reason.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="mobile-bill" className="scroll-mt-6 rounded-3xl bg-white p-5 shadow-sm md:p-8">
          <p className="text-sm font-bold text-blue-700">手机账单</p>
          <h2 className="mt-2 text-2xl font-black md:text-3xl">手机账单变贵，重点检查什么？</h2>
          <div className="mt-6"><ReviewList items={phoneItems} /></div>
          <p className="mt-5 leading-7 text-slate-700">
            如果问题已经涉及套餐类型、线路数量或是否需要换方案，可继续查看 <Link href="/cellphone/diagnosis" className="font-semibold text-blue-700 underline underline-offset-4">手机套餐诊断</Link>；也可浏览 <Link href="/cellphone/faq" className="font-semibold text-blue-700 underline underline-offset-4">美国手机常见问题</Link>。
          </p>
        </section>

        <section id="first-mobile-bill" className="scroll-mt-6 rounded-3xl border border-slate-200 bg-white p-5 md:p-8">
          <p className="text-sm font-bold text-blue-700">转网 / 开户后的第一张手机账单</p>
          <h2 className="mt-2 text-2xl font-black md:text-3xl">为什么第一张账单可能比报价高？</h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-700">
            首账单高，不等于以后每个月都会这么高。先把 recurring 月费和一次性项目拆开，再看哪些折扣或 Credit 还没有反映。
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              'Activation / Upgrade / 一次性开户费用。',
              '设备税费、首付款或新的设备分期。',
              'AutoPay / Paperless 折扣尚未体现在这张账单里。',
              '保险或其他 add-on 被加入账户。',
              'Promotion / Bill Credit 尚未出现或资格还在核对。',
              '账期中途开通产生 prorated charge。',
            ].map((item, index) => (
              <div key={item} className="flex gap-3 rounded-xl bg-slate-50 p-4 leading-7 text-slate-700">
                <span className="font-black text-blue-700">{index + 1}.</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 leading-7 text-slate-700">
            如果主要是 Trade-in、转网奖励或 Bill Credit 没出现，可继续查看{' '}
            <Link href="/cellphone/faq/promo-credit-not-received" className="font-semibold text-blue-700 underline underline-offset-4">
              手机优惠 / Credit 到账判断
            </Link>。
          </p>
        </section>

        <section id="home-internet-bill" className="scroll-mt-6 rounded-3xl bg-white p-5 shadow-sm md:p-8">
          <p className="text-sm font-bold text-blue-700">家庭宽带账单</p>
          <h2 className="mt-2 text-2xl font-black md:text-3xl">家庭宽带账单变贵，重点检查什么？</h2>
          <div className="mt-6"><ReviewList items={internetItems} /></div>
          <div className="mt-5 space-y-2 leading-7 text-slate-700">
            <p>如果已经确认是宽带长期涨价，可继续查看 <Link href="/internet/price-hike" className="font-semibold text-blue-700 underline underline-offset-4">宽带涨价原因与处理方法</Link>。</p>
            <p>如果除了账单，还涉及地址覆盖、安装或是否值得换网，可查看 <Link href="/internet/diagnosis" className="font-semibold text-blue-700 underline underline-offset-4">宽带问题诊断</Link>。</p>
            <p>设备费、AutoPay 或一次性费用仍有疑问，可查看 <Link href="/internet/faq" className="font-semibold text-blue-700 underline underline-offset-4">更多宽带常见问题</Link>。</p>
          </div>
        </section>

        <section id="unknown-reason" className="scroll-mt-6 rounded-3xl border border-blue-200 bg-blue-50 p-5 md:p-8">
          <p className="text-sm font-bold text-blue-700">不知道 / 不确定 / 看不懂账单</p>
          <h2 className="mt-2 text-2xl font-black md:text-3xl">完全看不懂账单？按这个顺序查</h2>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              '记下本月账单总额和账期。',
              '找出上月总额，比较总额相差多少。',
              '检查新增的收费项目，以及同名项目是否变贵。',
              '查找 discount、promotion 或 credit 是否减少或消失。',
              '检查 equipment、add-on、安装费或其他一次性费用。',
              '仍不确定时，记录项目名称和收费日期，再向运营商核实。',
            ].map((item, index) => (
              <li key={item} className="flex gap-3 rounded-xl bg-white p-4 leading-7 text-slate-700">
                <span className="font-black text-blue-700">{index + 1}.</span><span>{item}</span>
              </li>
            ))}
          </ol>
          <p id="gradual-change" className="mt-5 leading-7 text-slate-700">如果金额是逐月缓慢增加，逐期比较基础月费、设备分期、附加服务和折扣行；如果只在某一期突然变化，优先确认新增项目、优惠结束日期和一次性收费。</p>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <article id="worth-action" className="scroll-mt-6 rounded-3xl border border-blue-200 bg-white p-5 md:p-7">
            <h2 className="text-xl font-black md:text-2xl">哪些情况值得进一步处理？</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-slate-700">
              <li>账单显示优惠明确到期，后续常规价格与原预算差异较大。</li>
              <li>出现不需要的附加服务，或设备月费持续增加。</li>
              <li>实际使用需求改变，当前线路数、速度档位或套餐权益不再合适。</li>
              <li>折扣或 trade-in credit 与账户记录不一致。</li>
              <li>同一地址存在其他可选方案，且完整周期成本值得比较。</li>
            </ul>
            <p className="mt-4 leading-7 text-slate-700">比较手机方案时，可先查看 <Link href="/cellphone/providers" className="font-semibold text-blue-700 underline underline-offset-4">手机方案比较方法</Link>。</p>
          </article>
          <article id="observe-first" className="scroll-mt-6 rounded-3xl border border-slate-200 bg-white p-5 md:p-7">
            <h2 className="text-xl font-black md:text-2xl">哪些情况可以先确认，不必急着换？</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-slate-700">
              <li>只出现一次的安装、激活或升级费用。</li>
              <li>账期中途变更产生的 prorated charge。</li>
              <li>刚换套餐后的首月费用或账期衔接调整。</li>
              <li>小幅税费变化，且基础服务费没有改变。</li>
              <li>已确认只收一次的设备费用；仍应在下一期账单确认没有重复。</li>
            </ul>
            <p className="mt-4 rounded-xl bg-slate-50 p-4 leading-7 text-slate-700">先确认费用是否会重复出现，再判断是否需要调整套餐或运营商。</p>
            <p className="mt-4 leading-7 text-slate-700">比较宽带方案时，可查看 <Link href="/internet/providers" className="font-semibold text-blue-700 underline underline-offset-4">宽带方案比较方法</Link>。</p>
          </article>
        </section>



        <section id="after-adjustment" className="scroll-mt-6 rounded-3xl border border-slate-200 bg-white p-5 md:p-8">
          <h2 className="text-2xl font-black md:text-3xl">账单已经降下来，下一期还要复核什么？</h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-700">
            一次调整成功，不代表后续每期都会完全一样。下一期账单至少再核对一次，确认新月费、Credit、设备和付款条件都按预期持续。
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              '新基础月费是否与确认记录一致。',
              'Promotion / Credit 是否仍然存在，金额是否与对应线路或服务匹配。',
              'AutoPay / Paperless 状态和折扣是否正常。',
              '设备分期、Router / Gateway 或其他设备费用是否正确。',
              '旧套餐、旧线路或附加服务是否已经停止收费。',
              '一次性 adjustment、refund 或 prorated charge 是否已经正确结算。',
            ].map((item, index) => (
              <div key={item} className="flex gap-3 rounded-xl bg-slate-50 p-4 leading-7 text-slate-700">
                <span className="font-black text-blue-700">{index + 1}.</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 rounded-xl bg-slate-50 p-4 leading-7 text-slate-700">
            如果调整后又出现新的异常，不要直接假设“优惠失效”或“客服没处理好”；先把确认记录与新账单逐项对照，再决定是否需要运营商或人工核实。
          </p>
        </section>

        <section id="move-both" className="scroll-mt-6 rounded-3xl border border-slate-200 bg-white p-5 md:p-8">
          <p className="text-sm font-bold text-blue-700">手机 + 宽带一起迁移</p>
          <h2 className="mt-2 text-2xl font-black md:text-3xl">怎样避免漏取消、重复收费和服务中断？</h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-700">
            手机号码转移和家庭宽带切换的“关旧服务”时机不一样。最重要的原则不是同时取消，而是分别确认新服务已经可用，再处理旧账户的关闭、设备和最终账单。
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl bg-slate-50 p-5">
              <h3 className="text-lg font-bold">手机：先完成号码转移</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-slate-700">
                <li>准备 Account Number、Transfer PIN、号码状态和设备解锁信息。</li>
                <li>确认设备余额、未发 Bill Credit 和 Promotion 影响。</li>
                <li>号码完全转移成功前，不要主动取消旧号码。</li>
                <li>转移完成后，再核对旧运营商是否还有设备余额、Final Bill 或其他收费。</li>
              </ul>
            </article>

            <article className="rounded-2xl bg-slate-50 p-5">
              <h3 className="text-lg font-bold">宽带：先确认新服务能真正使用</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-slate-700">
                <li>确认新地址 serviceability、安装方式、设备和启用时间。</li>
                <li>新网络没有稳定可用前，不要过早关闭旧宽带。</li>
                <li>旧宽带取消时保存 confirmation，并处理设备归还。</li>
                <li>之后继续核对 Final Bill、AutoPay 和旧账户是否真正关闭。</li>
              </ul>
            </article>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="font-bold">最后做一次“旧账户清场”</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                '手机旧运营商：号码、设备余额、Bill Credit、Final Bill。',
                '宽带旧运营商：取消确认、设备归还、Final Bill、AutoPay。',
                '新手机账户：线路数、Promotion、AutoPay、设备分期。',
                '新宽带账户：常规月费、设备、安装费、Promotion 和启用状态。',
              ].map((item) => (
                <div key={item} className="rounded-xl bg-white p-4 leading-7 text-slate-700">{item}</div>
              ))}
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 font-semibold">
            <Link href="/cellphone/diagnosis" className="text-blue-700 underline underline-offset-4">手机转网问题诊断</Link>
            <Link href="/internet/diagnosis" className="text-blue-700 underline underline-offset-4">宽带安装 / 搬家诊断</Link>
            <Link href="/internet/faq/after-cancel-final-bill" className="text-blue-700 underline underline-offset-4">取消后的 Final Bill / 设备检查</Link>
          </div>
        </section>

        <section id="faq" className="scroll-mt-6 rounded-3xl bg-white p-5 shadow-sm md:p-8">
          <h2 className="text-2xl font-black md:text-3xl">常见问题</h2>
          <div className="mt-5 divide-y divide-slate-200">
            {faqs.map((faq) => (
              <article key={faq.q} className="py-5 first:pt-0 last:pb-0">
                <h3 className="text-lg font-bold">{faq.q}</h3>
                <p className="mt-2 leading-7 text-slate-700">{faq.a}</p>
              </article>
            ))}
          </div>
        </section>

        <nav aria-label="相关账单问题" className="rounded-2xl bg-white p-5 text-sm font-semibold text-blue-800 shadow-sm">
          <h2 className="mb-3 text-base font-bold text-slate-900">相关问题继续看</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/internet/price-hike" className="rounded-xl border border-slate-200 px-4 py-3 hover:border-blue-300 hover:bg-blue-50">宽带涨价原因与处理</Link>
            <Link href="/internet/diagnosis" className="rounded-xl border border-slate-200 px-4 py-3 hover:border-blue-300 hover:bg-blue-50">宽带问题诊断</Link>
            <Link href="/internet/faq" className="rounded-xl border border-slate-200 px-4 py-3 hover:border-blue-300 hover:bg-blue-50">美国宽带常见问题</Link>
            <Link href="/cellphone/diagnosis" className="rounded-xl border border-slate-200 px-4 py-3 hover:border-blue-300 hover:bg-blue-50">手机套餐诊断</Link>
            <Link href="/cellphone/faq" className="rounded-xl border border-slate-200 px-4 py-3 hover:border-blue-300 hover:bg-blue-50">美国手机常见问题</Link>
            <Link href="/contact" className="rounded-xl border border-slate-200 px-4 py-3 hover:border-blue-300 hover:bg-blue-50">需要时进入人工核实</Link>
          </div>
        </nav>

        <footer className="px-2 py-4 text-center text-sm leading-6 text-slate-500">
          <p>最后更新：2026年10月｜价格、资格、优惠及账户结果可能随运营商政策变化，请以当前账户与官方规则为准。</p>
          <p>内容由美国鸿达电讯团队整理与审核</p>
        </footer>
      </div>
    </main>
  )
}
