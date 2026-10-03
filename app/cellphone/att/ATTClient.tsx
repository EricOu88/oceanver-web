'use client';

import { Phone, CreditCard, Building2, ArrowRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import type { ReactNode } from 'react';

import BackToHomeButton from '@/app/components/BackToHomeButton';
import WeChatPopup from '@/app/components/WeChatPopup';

interface ATTClientProps {
  promoSlot?: ReactNode;
}

export default function ATTClient({ promoSlot }: ATTClientProps) {
  const [showWeChat, setShowWeChat] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-white px-4 md:px-6 py-12">

      {/* ✅ 返回首页悬浮按钮 */}
      <BackToHomeButton />

      <div className="max-w-5xl mx-auto">

        {/* ===================== 顶部标题 ===================== */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-3 text-[#0A5FDB]">
          美国 AT&T 中文手机计划｜家庭 & 商业套餐｜鸿达电讯
        </h1>

        <p className="text-center text-gray-600 mb-12">
          鸿达电讯提供 AT&T 手机计划中文办理服务，面向全美国华人。支持家庭套餐、商业计划、预付费套餐等多种选择。携号转网最高可获 $800 尾款报销，中文客服全程协助开通，支持 eSIM 即开即用，覆盖全美 50 州。
        </p>

        {promoSlot}

        {/* ===================== 哪些人适合选择 AT&T？ ===================== */}
        <section className="mt-16 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            哪些人适合选择 AT&T？
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              AT&T 手机计划适合需要稳定信号覆盖、家庭共享流量、或商业多线管理的用户。如果你居住在美国主要城市或郊区，需要多部手机共享套餐，或希望获得携号转网奖励，AT&T 的家庭套餐和商业计划通常能提供较好的性价比。
            </p>
            <p>
              新移民、留学生、探亲访客如果没有 SSN，可以选择预付费套餐或通过鸿达电讯协助办理后付费计划。商业用户如果有多条线路需求，AT&T 商业计划在价格和功能上往往比个人套餐更有优势。
            </p>
          </div>
        </section>

        {/* ===================== 鸿达电讯可以帮你做什么？ ===================== */}
        <section className="mt-12 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            鸿达电讯可以帮你做什么？
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              鸿达电讯是 AT&T 授权代理，提供中文咨询、套餐对比、在线开通等服务。我们可以帮你评估家庭套餐与商业计划的差异，计算携号转网奖励金额，协助准备所需材料，并全程中文跟进开通流程。
            </p>
            <p>
              如果你不确定是否适合 AT&T，或对套餐选择有疑问，可以联系鸿达电讯客服。我们会根据你的使用场景、居住地址、线路数量等因素，推荐最适合的 AT&T 计划，并协助完成申请和激活。
            </p>
          </div>
        </section>

        {/* ===================== 套餐卡片列表 ===================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* ===== 1. 预付费套餐 ===== */}
          <div className="border border-blue-200 bg-blue-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-4">
              <CreditCard className="text-blue-600" size={26} />
              <h2 className="text-xl font-semibold">预付费套餐-可邮寄中-美</h2>
            </div>

            <div className="space-y-3 text-sm text-gray-700">
              <p>适合学生、外卖、旅游人士。</p>
              <p>5G 网络 · 无限流量 + 通话 + 短信。</p>
            </div>

            <p className="text-2xl font-bold text-blue-700 mt-4">
              $50<span className="text-base font-normal"> / 月</span>
            </p>

            <button
              onClick={() => setShowWeChat(true)}
              className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl font-semibold active:scale-95 transition"
            >
              咨询开通 →
            </button>
          </div>

          {/* ===== 2. 家庭合约计划 ===== */}
          <div className="border border-cyan-200 bg-cyan-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-3 mb-4">
              <Phone className="text-cyan-600" size={26} />
              <h2 className="text-xl font-semibold">家庭合约计划</h2>
            </div>

            <div className="space-y-4 text-sm text-gray-700">
              <div className="bg-white/60 rounded-xl p-3 border">
                <p>$155（5 条线） / $144（4 条线）</p>
                <p>$138（3 条线） / $122（2 条线）</p>
                <p>$66（1 条线）</p>
              </div>

              <div>
                <p>携号转网每线赠送 $250</p>
                <p>无限流量 · 北美通话短信 · 免激活费</p>
              </div>

              <div className="bg-white/60 rounded-xl p-3 border">
                <p className="font-semibold">以旧换新最高 $1100</p>
              </div>
            </div>

            <button
              onClick={() => setShowWeChat(true)}
              className="mt-6 w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-xl font-semibold active:scale-95 transition"
            >
              咨询开通 →
            </button>
          </div>

          {/* ===== 3. 商业计划 ===== */}
          <div className="border-2 border-blue-700 bg-blue-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="text-blue-700" size={26} />
              <h2 className="text-xl font-bold text-blue-700">
                商业计划（最热门🔥）
              </h2>
            </div>

            <div className="space-y-3 text-sm text-gray-700">
              <p>5 条线仅 $50 + 税（自带手机）</p>
              <p>或 $130（含 5 部 iPhone 16）</p>
              <p>100GB 热点 · 免激活费</p>
            </div>

            <p className="text-3xl font-extrabold text-blue-800 mt-4">
              $10+税<span className="text-base font-normal"> / 线</span>
            </p>

            <button
              onClick={() => setShowWeChat(true)}
              className="mt-6 w-full bg-blue-700 text-white py-3 rounded-xl font-semibold active:scale-95 transition shadow-md"
            >
              立即咨询资格 →
            </button>
          </div>

        </div>

        <div className="mt-14 text-center text-gray-600 text-sm">
          所有套餐均可全美激活 · 支持转号 / 新开 · 可寄卡至中国
        </div>

        {/* ===================== 携号转网到 AT&T 要注意什么？ ===================== */}
        <section className="mt-16 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            携号转网到 AT&T 要注意什么？
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              携号转网到 AT&T 前，需要确认当前运营商账户状态正常，没有未付账单或合约限制。转网时需要提供账户号码、账户 PIN 码或密码，以及账户持有人的身份信息。AT&T 通常会提供转网奖励，金额根据套餐类型和促销活动而定，最高可达 $800 每线。
            </p>
            <p>
              转网过程中，原运营商可能会收取账户关闭费用或提前解约费用。建议在转网前先了解原运营商的解约政策，并确认 AT&T 的转网奖励是否足以覆盖这些费用。转网通常需要 1-3 个工作日完成，期间手机服务可能会短暂中断。
            </p>
            <p>
              如果你不确定转网流程或需要协助，可以联系鸿达电讯。我们会帮你检查转网资格，计算奖励金额，并协助准备所需材料，确保转网过程顺利。
            </p>
          </div>
        </section>

        {/* ===================== FAQ Accordion 区块 ===================== */}
        <section className="mt-16 mb-12 bg-slate-50 rounded-2xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
            AT&T 手机计划常见问题
          </h2>
          <div className="space-y-3">
            {[
              {
                q: '没有 SSN 可以办理 AT&T 手机计划吗？',
                a: '可以。AT&T 预付费套餐通常不需要 SSN，后付费套餐可以通过押金方式办理。具体要求和押金金额取决于套餐类型和信用记录。部分套餐可能需要提供护照、地址证明等材料。如果你不确定办理方式，可以联系鸿达电讯确认所需材料和流程。',
              },
              {
                q: '携号转网到 AT&T 会不会断线？',
                a: '携号转网过程中可能会有短暂的服务中断，通常持续几分钟到几小时不等。转网完成后，你的原号码会在 AT&T 网络上激活。为了减少中断时间，建议在转网前确认原运营商账户状态正常，准备好账户号码和 PIN 码，并选择在工作日进行转网。',
              },
              {
                q: 'AT&T 的 $800 尾款报销是怎么回事？',
                a: 'AT&T 的 $800 尾款报销是携号转网促销活动的一部分。如果你从其他运营商转网到 AT&T，并且原运营商有未付清的设备尾款或提前解约费用，AT&T 可能会提供最高 $800 的报销额度来覆盖这些费用。报销金额和条件根据套餐类型、促销活动和时间而定，具体需要咨询 AT&T 或授权代理确认。',
              },
              {
                q: 'AT&T 和 T-Mobile、Verizon 相比有什么区别？',
                a: 'AT&T、T-Mobile 和 Verizon 是美国三大主要运营商，在信号覆盖、套餐价格、国际漫游等方面各有特点。AT&T 在郊区和小城市覆盖较好，家庭套餐价格相对稳定。T-Mobile 在城市地区 5G 速度快，国际漫游功能较强。Verizon 信号覆盖最广，适合经常在乡村地区活动的用户。选择哪个运营商主要取决于你的居住地址、使用场景和预算。',
              },
              {
                q: 'AT&T 家庭套餐是怎么计费的？',
                a: 'AT&T 家庭套餐采用多线共享计费方式，线路越多，平均每线价格越低。通常 1 条线约 $66/月，2 条线约 $122/月，3 条线约 $138/月，4 条线约 $144/月，5 条线约 $155/月。所有线路共享无限流量、通话和短信。套餐价格可能因促销活动、合约期限等因素有所变化，具体价格需要咨询 AT&T 或授权代理。',
              },
              {
                q: '可以用中文办理 AT&T 吗？',
                a: '可以。鸿达电讯是 AT&T 授权代理，提供中文咨询和办理服务。我们可以用中文解释套餐详情、协助准备材料、完成在线申请，并在开通后提供中文客服支持。如果你对英文沟通不熟悉，或希望有中文顾问协助，可以联系鸿达电讯。',
              },
            ].map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full text-left rounded-2xl bg-white border border-slate-200 shadow-sm p-5 hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="font-semibold text-slate-900 text-lg">
                      <span className="text-blue-600">Q：</span> {item.q}
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 text-slate-500 transition ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </div>
                  {isOpen && (
                    <div className="mt-4 text-slate-700 leading-relaxed">
                      <span className="text-emerald-600 font-semibold">A：</span> {item.a}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </section>

        {/* ===================== 家庭合约计划 FAQ 栏目 ===================== */}
        <section className="mt-16 bg-slate-50 py-12 border-t border-slate-200 rounded-2xl">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
              家庭合约计划 · 还有问题？查看完整 FAQ
            </h2>
            <p className="text-slate-600 mb-6">
              我们整理了 50 个 AT&T 家庭合约计划常见问题，涵盖售前和售后各个方面
            </p>
            <Link
              href="/cellphone/att/family-faq"
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-colors shadow-lg"
            >
              查看家庭合约计划完整 FAQ
              <ArrowRight size={20} />
            </Link>
            <p className="mt-4 text-sm text-slate-500">
              售前 10 个类别 × 5 个问题 + 售后 10 个类别 × 5 个问题 = 100 个详细解答
            </p>
          </div>
        </section>

        {/* ===================== 商业计划 FAQ 栏目 ===================== */}
        <section className="mt-8 bg-slate-50 py-12 border-t border-slate-200 rounded-2xl">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
              商业计划 · 还有问题？查看完整 FAQ
            </h2>
            <p className="text-slate-600 mb-6">
              我们整理了 50 个 AT&T 商业计划常见问题，涵盖售前和售后各个方面
            </p>
            <Link
              href="/cellphone/att/business-faq"
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-colors shadow-lg"
            >
              查看商业计划完整 FAQ
              <ArrowRight size={20} />
            </Link>
            <p className="mt-4 text-sm text-slate-500">
              售前 10 个类别 × 5 个问题 + 售后 10 个类别 × 5 个问题 = 100 个详细解答
            </p>
          </div>
        </section>

        {/* ===================== AT&T 相关问题摘要和内链 ===================== */}
        <section className="mt-16 mb-12 bg-blue-50 rounded-2xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            AT&T 相关深度问题解析
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                携号转网到 AT&T
              </h3>
              <p className="mb-2">
                从其他运营商转网到 AT&T 时，如何保留原手机号并确保无缝衔接？AT&T 的 $800 尾款报销是怎么回事？详细解析请查看<Link href="/bill-optimization" className="text-blue-600 hover:text-blue-700 font-semibold underline">账单优化服务页面</Link>中的"从 Xfinity 转网到 AT&T Fiber"章节。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                AT&T 账单涨价问题
              </h3>
              <p className="mb-2">
                AT&T 手机账单为什么会突然涨价？如何看懂账单中的隐藏费用？如何通过议价技巧降低费用？详细解析请查看<Link href="/bill-optimization" className="text-blue-600 hover:text-blue-700 font-semibold underline">账单优化服务页面</Link>中的"账单涨价深度解析"章节。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                AT&T 与其他运营商对比
              </h3>
              <p className="mb-2">
                AT&T 和 T-Mobile、Verizon 相比有什么区别？在湾区信号覆盖如何？详细对比请查看<Link href="/cellphone/coverage/bay-area-los-angeles" className="text-blue-600 hover:text-blue-700 font-semibold underline">湾区信号覆盖实测页面</Link>。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                家庭套餐选择
              </h3>
              <p className="mb-2">
                AT&T 家庭套餐是怎么计费的？4 人或 5 人组团真的能省一半钱吗？详细解析请查看<Link href="/cellphone/family-plan-guide" className="text-blue-600 hover:text-blue-700 font-semibold underline">家庭套餐深度拆解页面</Link>。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                没有 SSN 办理 AT&T
              </h3>
              <p className="mb-2">
                没有 SSN 可以办理 AT&T 手机计划吗？有哪些合法的"免信用"通道？详细解析请查看<Link href="/cellphone/faq/no-ssn-us-cellphone-internet" className="text-blue-600 hover:text-blue-700 font-semibold underline">无 SSN 办理手机和宽带指南</Link>。
              </p>
            </div>
          </div>
        </section>

        {/* ===================== 页面底部自然内链 ===================== */}
        <section className="mt-16 mb-12 text-slate-700 leading-relaxed">
          <p className="mb-4">
            如需了解更多手机卡和宽带服务，请返回<Link href="/" className="text-blue-600 hover:text-blue-700 font-semibold underline">鸿达电讯 Bay Media Star 首页</Link>。
          </p>
          <p className="mb-4">
            常见问题如<Link href="/cellphone/faq/how-to-choose-us-cellphone-plan" className="text-blue-600 hover:text-blue-700 font-semibold underline">没有 SSN 可以办手机卡吗？</Link>和<Link href="/bill-optimization" className="text-blue-600 hover:text-blue-700 font-semibold underline">手机账单为什么会突然涨价？</Link>都有详细解答。
          </p>
          <p>
            如果你对 AT&T 家庭套餐或商业计划有具体问题，可以查看<Link href="/cellphone/att/family-faq" className="text-blue-600 hover:text-blue-700 font-semibold underline">AT&T 家庭套餐常见问题</Link>和<Link href="/cellphone/att/business-faq" className="text-blue-600 hover:text-blue-700 font-semibold underline">AT&T 商业计划常见问题</Link>。
          </p>
        </section>
      </div>

      {/* ===================== 微信弹窗 ===================== */}
      {showWeChat && <WeChatPopup onClose={() => setShowWeChat(false)} />}
    </main>
  );
}
