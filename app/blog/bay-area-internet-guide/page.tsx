'use client'

import { useState } from 'react'
import Script from 'next/script'
import Link from 'next/link'
import ContactModal from '@/app/components/ContactModal'
import { ArrowRight, CheckCircle2, AlertCircle, MapPin, MessageCircle } from 'lucide-react'

/* ================== Organization Schema ================== */
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://oceanver.com/#organization',
  name: '美国鸿达电讯',
  description: '为美国中文用户提供手机套餐、家庭宽带、账单检查、套餐选择和常见通信问题信息与中文协助。',
  url: 'https://oceanver.com',
  telephone: '+1-510-849-6191',
  areaServed: { '@type': 'Country', name: 'United States' },
}

/* ================== 页面主体 ================== */
export default function BayAreaInternetGuidePage() {
  const [isModalOpen, setModalOpen] = useState(false)

  return (
    <>
      {/* Organization Schema */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      <main className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        {/* 返回首页 */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-semibold transition-colors"
          >
            ← 返回首页
          </Link>
        </div>

        {/* H1 标题 */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight">
          2026年旧金山湾区家庭宽带比较：Xfinity、AT&T、Spectrum 如何核对？
        </h1>

        {/* 引言 */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl mb-12">
          <p className="text-lg text-slate-700 leading-relaxed">
            刚到湾区，不知道如何比较宽带？本文保留湾区场景，整理地址覆盖、账单项目、促销期限和安装条件，具体可用方案以当前地址和运营商规则为准。
          </p>
        </div>

        {/* ================= 板块一：避坑指南 ================= */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle className="text-orange-800" size={32} />
            <h2 className="text-2xl md:text-3xl font-black text-slate-900">
              【避坑指南】申请前需要核对哪些条件？
            </h2>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 md:p-8 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">❌ 官网直办的三大陷阱：</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-800 font-bold mt-1">1.</span>
                  <div>
                    <strong className="text-slate-900">隐藏费用多：</strong>
                    激活费、设备租赁费和安装费可能分别出现，具体金额和适用条件应以当前订单和账单条款为准。
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-800 font-bold mt-1">2.</span>
                  <div>
                    <strong className="text-slate-900">促销期短：</strong>
                    官网显示的促销价通常有适用期限，到期后的月费、设备费和其他项目应在下单前核对，不能按旧价格推断当前账单。
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-800 font-bold mt-1">3.</span>
                  <div>
                    <strong className="text-slate-900">信用审核严格：</strong>
                    新移民、留学生没有 SSN 或信用记录，官网直接拒绝，即使愿意付押金也不行。
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="text-green-600" size={24} />
                ✅ 中文协助可以核对的内容：
              </h3>
              <ul className="space-y-2 text-green-800">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span><strong>核对当前账单：</strong>比较订单、促销条款、设备费用、安装费用和后续账单项目。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span><strong>核对账户资格：</strong>身份、信用、地址和账户条件可能影响申请结果，不能保证免押金或免审核。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span><strong>核对地址覆盖：</strong>中文顾问可以协助整理地址查询结果，但最终可用性以运营商系统为准。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span><strong>中文说明：</strong>协助理解申请、安装和账单问题，具体服务条件以当前安排为准。</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA 按钮 1 */}
        <div className="mb-16">
          <button
            onClick={() => setModalOpen(true)}
            className="w-full bg-blue-700 hover:bg-blue-800 text-white py-5 px-8 rounded-2xl text-lg font-black shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3"
          >
            <MessageCircle size={24} />
            立即咨询中文客服，查询您的地址是否有隐藏优惠
            <ArrowRight size={24} />
          </button>
        </div>

        {/* ================= 板块二：运营商大比拼 ================= */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="text-blue-600" size={32} />
            <h2 className="text-2xl md:text-3xl font-black text-slate-900">
              【运营商大比拼】Xfinity 速度快 vs AT&T 光纤稳，你的住址选哪个？
            </h2>
          </div>

          <div className="space-y-8">
            {/* Xfinity */}
            <div className="border-2 border-slate-200 rounded-2xl p-6 md:p-8 hover:border-blue-300 transition-colors">
              <h3 className="text-2xl font-black text-slate-900 mb-4">Xfinity（康卡斯特）</h3>
              <div className="space-y-4 text-slate-700">
                <div>
                  <strong className="text-slate-900">✅ 优势：</strong>
                  <ul className="mt-2 space-y-1 ml-4">
                    <li>• 覆盖和可用性需按详细地址核对</li>
                    <li>• 速度选择多：300Mbps、500Mbps、1Gbps</li>
                    <li>• 价格和促销期限以当前地址、账户和订单为准</li>
                    <li>• 商业宽带选择灵活，适合小企业</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-slate-900">⚠️ 注意事项：</strong>
                  <ul className="mt-2 space-y-1 ml-4">
                    <li>• 促销期限及到期后月费需核对当前条款</li>
                    <li>• 上传速度较慢（Cable 技术限制）</li>
                    <li>• 设备租赁或自备设备条件需核对当前规则</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl">
                  <strong className="text-blue-900">💡 适合人群：</strong>
                  <span className="text-blue-800">需要高速下载、看视频、打游戏的住家用户；小企业需要稳定网络。</span>
                </div>
              </div>
            </div>

            {/* AT&T */}
            <div className="border-2 border-slate-200 rounded-2xl p-6 md:p-8 hover:border-blue-300 transition-colors">
              <h3 className="text-2xl font-black text-slate-900 mb-4">AT&T Fiber（AT&T 光纤）</h3>
              <div className="space-y-4 text-slate-700">
                <div>
                  <strong className="text-slate-900">✅ 优势：</strong>
                  <ul className="mt-2 space-y-1 ml-4">
                    <li>• 真光纤技术，上下行速度对称（上传和下载一样快）</li>
                    <li>• 稳定性极高，几乎不掉线</li>
                    <li>• 无流量上限，适合重度使用</li>
                    <li>• 促销价格和设备条件需按地址及当前条款核对</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-slate-900">⚠️ 注意事项：</strong>
                  <ul className="mt-2 space-y-1 ml-4">
                    <li>• 覆盖范围有限，只有部分地址可用（需查地址确认）</li>
                    <li>• 安装可能需要预约，等待时间 1-2 周</li>
                    <li>• 商业光纤价格较高，适合对稳定性要求高的企业</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl">
                  <strong className="text-blue-900">💡 适合人群：</strong>
                  <span className="text-blue-800">需要上传大文件、远程办公、视频会议的用户；对网络稳定性要求高的企业。</span>
                </div>
              </div>
            </div>

            {/* Spectrum */}
            <div className="border-2 border-slate-200 rounded-2xl p-6 md:p-8 hover:border-blue-300 transition-colors">
              <h3 className="text-2xl font-black text-slate-900 mb-4">Spectrum（频谱）</h3>
              <div className="space-y-4 text-slate-700">
                <div>
                  <strong className="text-slate-900">✅ 优势：</strong>
                  <ul className="mt-2 space-y-1 ml-4">
                    <li>• 价格结构相对稳定，促销期结束后涨幅较小</li>
                    <li>• 无流量上限，适合家庭多设备使用</li>
                    <li>• 价格、期限和设备条件需按地址及当前条款核对</li>
                    <li>• 部分地区覆盖良好</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-slate-900">⚠️ 注意事项：</strong>
                  <ul className="mt-2 space-y-1 ml-4">
                    <li>• 覆盖范围不如 Xfinity 广，需查地址确认</li>
                    <li>• 上传速度较慢（Cable 技术）</li>
                    <li>• 部分地区服务质量参差不齐</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl">
                  <strong className="text-blue-900">💡 适合人群：</strong>
                  <span className="text-blue-800">预算有限、需要稳定价格的用户；对上传速度要求不高的家庭。</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6">
            <p className="text-yellow-900 font-bold mb-2">⚠️ 重要提醒：</p>
            <p className="text-yellow-800">
              不同地址支持的运营商可能不同！<strong>需要查地址才能确定哪家可用。</strong>即使邻居能用 Xfinity，你家也可能只能装其他服务。办理前应核对当前地址覆盖和费用条款。
            </p>
          </div>
        </section>

        {/* CTA 按钮 2 */}
        <div className="mb-16">
          <button
            onClick={() => setModalOpen(true)}
            className="w-full bg-blue-700 hover:bg-blue-800 text-white py-5 px-8 rounded-2xl text-lg font-black shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3"
          >
            <MessageCircle size={24} />
            立即咨询中文客服，查询您的地址是否有隐藏优惠
            <ArrowRight size={24} />
          </button>
        </div>

        {/* ================= 板块三：账单审计服务 ================= */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle2 className="text-green-600" size={32} />
            <h2 className="text-2xl md:text-3xl font-black text-slate-900">
              【账单审计服务】觉得网费越用越贵？鸿达电讯免费帮你砍价
            </h2>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 md:p-8 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">📊 为什么宽带账单会越来越贵？</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-800 font-bold mt-1">1.</span>
                  <div>
                    <strong className="text-slate-900">促销期结束：</strong>
                    运营商可能提供有期限的优惠价，到期后账单项目可能变化，应对照当前订单、促销期限和账单条款核对。
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-800 font-bold mt-1">2.</span>
                  <div>
                    <strong className="text-slate-900">隐藏费用增加：</strong>
                    设备租赁费、网络维护费、各种税费逐年上涨，账单明细越来越复杂。
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold mt-1">3.</span>
                  <div>
                    <strong className="text-slate-900">自动升级陷阱：</strong>
                    运营商可能在你不知情的情况下“升级”你的套餐，月费增加但你可能用不到那么快的速度。
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-green-300 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="text-green-600" size={24} />
                鸿达电讯免费账单审计服务
              </h3>
              <div className="space-y-4 text-slate-700">
                <p>
                  <strong className="text-slate-900">我们帮你做什么：</strong>
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>免费初步判断：</strong>中文顾问帮你分析账单，判断是否值得处理，不降费不收费。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>账单核对：</strong>通过运营商客服确认促销期限、设备费、安装费和当前可用方案，结果取决于账户资格。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>方案优化：</strong>如果谈价失败，帮你找到更便宜的替代方案，或通过新开户策略省钱。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>全程中文协助：</strong>你不需要和英文客服沟通，我们帮你处理所有流程。</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 最终 CTA */}
        <div className="bg-blue-700 rounded-3xl p-8 md:p-12 text-center text-white mb-12">
          <h2 className="text-2xl md:text-3xl font-black mb-4">
            不确定选哪家？让中文顾问帮你查地址、比价格、选方案
          </h2>
          <p className="text-lg mb-6 text-blue-100">
            地址覆盖核对 · 当前条款说明 · 中文协助
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-white text-blue-600 py-4 px-8 rounded-xl text-lg font-black shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-3 mx-auto"
          >
            <MessageCircle size={24} />
            立即咨询中文客服
            <ArrowRight size={24} />
          </button>
        </div>

        {/* 相关链接 */}
        <div className="border-t border-slate-200 pt-8">
          <h3 className="text-xl font-bold text-slate-900 mb-4">相关页面：</h3>
          <div className="flex flex-wrap gap-4">
            <Link href="/internet" className="text-blue-600 hover:text-blue-800 font-semibold underline">
              宽带套餐选购 →
            </Link>
            <Link href="/internet/price-hike" className="text-blue-600 hover:text-blue-800 font-semibold underline">
              账单涨价处理 →
            </Link>
            <Link href="/contact" className="text-blue-600 hover:text-blue-800 font-semibold underline">
              联系我们 →
            </Link>
          </div>
        </div>
      </main>

      {/* 微信咨询弹窗 */}
      <ContactModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
