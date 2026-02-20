'use client'

import { useState } from 'react'
import Script from 'next/script'
import Link from 'next/link'
import ContactModal from '@/app/components/ContactModal'
import { ArrowRight, CheckCircle2, AlertCircle, MapPin, Phone, MessageCircle } from 'lucide-react'

/* ================== LocalBusiness Schema ================== */
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://baymediastar.com/#localbusiness',
  name: 'Bay Media Star 鸿达电讯',
  alternateName: ['鸿达电讯', 'Bay Media Star Fremont', 'Fremont 中文手机卡宽带'],
  description: '鸿达电讯18年湾区实体店，美国手机卡宽带中文办理专家。支持无SSN办网、无SSN办手机卡，服务全美50州。',
  url: 'https://baymediastar.com',
  logo: 'https://baymediastar.com/bms-logo.png',
  image: 'https://baymediastar.com/telecom-logos.png',
  telephone: '+1-510-849-6191',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '46292 Warm Springs Blvd #606',
    addressLocality: 'Fremont',
    addressRegion: 'CA',
    postalCode: '94539',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 37.491624,
    longitude: -121.928423,
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '100',
  },
}

/* ================== 页面主体 ================== */
export default function BayAreaInternetGuidePage() {
  const [isModalOpen, setModalOpen] = useState(false)

  return (
    <>
      {/* LocalBusiness Schema */}
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
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
          2026年旧金山湾区华人办宽带全攻略：Xfinity, AT&T, Spectrum 哪家最省钱？
        </h1>

        {/* 引言 */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl mb-12">
          <p className="text-lg text-slate-700 leading-relaxed">
            刚到湾区，不知道选哪家宽带？官网价格太贵，又担心被坑？本文为湾区华人提供最全面的宽带选择指南，帮你避开常见陷阱，找到最适合你地址的优惠方案。
          </p>
        </div>

        {/* ================= 板块一：避坑指南 ================= */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle className="text-orange-800" size={32} />
            <h2 className="text-2xl md:text-3xl font-black text-slate-900">
              【避坑指南】为什么在官网申请不一定最划算？
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
                    激活费 $35-$99、设备租赁费每月 $10-$15、安装费 $50-$200，官网不会主动告诉你这些额外成本。
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-800 font-bold mt-1">2.</span>
                  <div>
                    <strong className="text-slate-900">促销期短：</strong>
                    官网显示的“$29.99/月”通常只有前 12 个月，到期后自动涨到 $79.99/月，很多人第一年结束后才发现账单翻倍。
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
                ✅ 鸿达电讯的独家优势：
              </h3>
              <ul className="space-y-2 text-green-800">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span><strong>比官网省 20%-40%：</strong>通过授权代理渠道，我们拿到运营商内部折扣，同样套餐价格更低。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span><strong>免除押金与信用审核：</strong>支持无 SSN 办网，新移民、留学生、短期访客都可以申请。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span><strong>免费地址覆盖查询：</strong>中文客服帮你查地址，告诉你哪家运营商在你家可用，避免选错。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span><strong>全程中文服务：</strong>从申请到安装，再到后续账单问题，都有中文客服协助。</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA 按钮 1 */}
        <div className="mb-16">
          <button
            onClick={() => setModalOpen(true)}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-5 px-8 rounded-2xl text-lg font-black shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3"
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
                    <li>• 覆盖范围最广，湾区 90% 以上地址可用</li>
                    <li>• 速度选择多：300Mbps、500Mbps、1Gbps</li>
                    <li>• 住家套餐约 $30-$100/月（促销期）</li>
                    <li>• 商业宽带选择灵活，适合小企业</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-slate-900">⚠️ 注意事项：</strong>
                  <ul className="mt-2 space-y-1 ml-4">
                    <li>• 促销期通常 12-24 个月，到期后月费上涨 $20-$50</li>
                    <li>• 上传速度较慢（Cable 技术限制）</li>
                    <li>• 需要自备或租赁路由器（$10/月）</li>
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
                    <li>• 促销期价格约 $55-$80/月（300Mbps-1Gbps）</li>
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
                    <li>• 住家套餐约 $50-$80/月（200Mbps-1Gbps）</li>
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
              不同地址支持的运营商完全不同！<strong>必须查地址才能确定哪家可用。</strong>即使你邻居能用 Xfinity，你家也可能只能装 AT&T。建议先联系中文客服免费查询地址覆盖，再决定选哪家。
            </p>
          </div>
        </section>

        {/* CTA 按钮 2 */}
        <div className="mb-16">
          <button
            onClick={() => setModalOpen(true)}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-5 px-8 rounded-2xl text-lg font-black shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3"
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
                    运营商通常给新用户 12-24 个月的优惠价，到期后自动恢复到原价，账单可能从 $29.99 涨到 $79.99。
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
                    <span><strong>Retention 谈价：</strong>通过运营商客服部门重新谈价，平均每年节省 $300-$600。</span>
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
                <div className="mt-4 pt-4 border-t border-green-200">
                  <p className="text-green-800 font-bold">
                    💰 真实案例：湾区 Fremont 客户，Xfinity 账单从 $89.99/月 降到 $49.99/月，每年节省 $480。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 板块四：本地服务 ================= */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="text-blue-600" size={32} />
            <h2 className="text-2xl md:text-3xl font-black text-slate-900">
              【本地服务】为什么要选 Fremont 实体店？
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-2xl p-6 border-2 border-blue-200">
              <h3 className="text-xl font-black text-blue-900 mb-4 flex items-center gap-2">
                <MessageCircle className="text-blue-600" size={24} />
                中文沟通，零障碍
              </h3>
              <p className="text-slate-700 leading-relaxed">
                从申请到安装，再到后续账单问题，全程中文服务。不需要担心英文沟通障碍，我们的中文客服团队 18 年经验，熟悉各种运营商政策和流程。
              </p>
            </div>

            <div className="bg-green-50 rounded-2xl p-6 border-2 border-green-200">
              <h3 className="text-xl font-black text-green-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="text-green-600" size={24} />
                售后无忧，有保障
              </h3>
              <p className="text-slate-700 leading-relaxed">
                实体店经营，不是临时中介。遇到问题可以随时到店咨询，或通过微信、电话联系。账单问题、网络故障、搬家迁移，我们都有专业团队协助处理。
              </p>
            </div>

            <div className="bg-purple-50 rounded-2xl p-6 border-2 border-purple-200">
              <h3 className="text-xl font-black text-purple-900 mb-4 flex items-center gap-2">
                <MapPin className="text-purple-600" size={24} />
                Fremont 实体店地址
              </h3>
              <p className="text-slate-700 leading-relaxed mb-3">
                <strong>46292 Warm Springs Blvd #606, Fremont, CA 94539</strong>
              </p>
              <p className="text-slate-600 text-sm">
                营业时间：周一至周五 9:00-18:00，周六 10:00-17:00
              </p>
            </div>

            <div className="bg-orange-50 rounded-2xl p-6 border-2 border-orange-200">
              <h3 className="text-xl font-black text-orange-900 mb-4 flex items-center gap-2">
                <Phone className="text-orange-800" size={24} />
                全美 50 州远程服务
              </h3>
              <p className="text-slate-700 leading-relaxed">
                即使不在湾区，我们也可以远程协助你办理。洛杉矶、纽约、芝加哥、休斯顿等全美各城市，都可以通过微信、电话远程申请和咨询。
              </p>
            </div>
          </div>
        </section>

        {/* 最终 CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-center text-white mb-12">
          <h2 className="text-2xl md:text-3xl font-black mb-4">
            不确定选哪家？让中文顾问帮你查地址、比价格、选方案
          </h2>
          <p className="text-lg mb-6 text-blue-100">
            免费地址覆盖查询 · 独家折扣申请 · 全程中文服务
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
