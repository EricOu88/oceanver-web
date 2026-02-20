'use client';

import { useState } from 'react';
import Link from 'next/link';
import WhyUsCompareTable from '@/app/components/WhyUsCompareTable';

export default function WhyUsClient() {
  const [showWechat, setShowWechat] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 py-8 px-4">

      {/* ================= 返回首页（必须保留） ================= */}
      <div className="mb-5 max-w-6xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2
                     text-white/90 hover:text-white
                     transition font-medium"
        >
          ← 返回首页
        </Link>
      </div>

      {/* ================= 主容器 ================= */}
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-5 md:p-8">

        {/* ================= 标题（已去营销） ================= */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-slate-800 mb-3">
          为什么很多华人不直接找美国宽带官网？
        </h1>
        <p className="text-center text-slate-500 mb-8 max-w-3xl mx-auto">
          官网并不是不好，而是它解决的问题，
          和新移民、华人常遇到的实际情况，并不完全一样。
          <br className="hidden md:block" />
          如果你的方案清楚、账单正常，直接官网办理完全没问题。
        </p>

        {/* ================= 对比表格（结构保留，文案中性化） ================= */}
        <div className="overflow-x-auto">
          <WhyUsCompareTable />
        </div>

        {/* ================= 角色声明（Why-us 核心） ================= */}
        <section className="mt-8 bg-slate-50 rounded-2xl p-5 text-slate-700">
          <p>
            我们的角色不是替代官网，而是在你不确定
            <strong>「要不要换」「值不值得处理」</strong>的时候，
            帮你把情况判断清楚。
            <br />
            如果结论是「不用动」，我们会直接告诉你。
          </p>
        </section>

        {/* ================= 授权代理优势深度解析 ================= */}
        <section className="mt-12 space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-8">
            授权代理优势深度解析
          </h2>

          {/* 问题8：新地址入驻查询独家折扣 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              新地址入驻：如何绕过官网，通过授权代理（如鸿达）查询该地址的独家折扣？
            </h3>
            <div className="space-y-3 text-slate-700 leading-relaxed">
              <p>
                <strong>结论：</strong>授权代理（如鸿达电讯）通常可以获得运营商提供的独家折扣和促销价格，这些折扣可能不会在官网上显示。通过授权代理查询地址覆盖和价格，可能获得更好的价格和服务。
              </p>
              <p>
                <strong>原因解释：</strong>运营商为了鼓励授权代理推广服务，通常会提供独家折扣和促销价格。这些折扣可能包括：
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li>更低的促销价格（可能比官网低 $10-$20/月）</li>
                <li>免安装费或设备租用费</li>
                <li>额外的奖励或返现</li>
                <li>更灵活的套餐选择</li>
              </ul>
              <p>
                <strong>实操建议：</strong>在办理宽带前，同时查询官网和授权代理的价格。授权代理通常可以提供更详细的地址覆盖信息和价格对比。如果授权代理提供更好的价格，可以选择通过代理办理。
              </p>
              <p>
                <strong>适用人群：</strong>准备办理新宽带服务的用户，希望获得更好价格的用户。
              </p>
            </div>
          </div>

          {/* 问题31：为什么选择授权代理 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              为什么选择授权代理（Agency）办网，往往比直接去官网更便宜且省心？
            </h3>
            <div className="space-y-3 text-slate-700 leading-relaxed">
              <p>
                <strong>结论：</strong>授权代理通常可以提供更好的价格、中文支持、专业指导，以及更灵活的套餐选择。对于新移民和需要中文支持的用户，授权代理是更好的选择。
              </p>
              <p>
                <strong>原因解释：</strong>授权代理的优势包括：
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li><strong>价格优势：</strong>可以获得独家折扣和促销价格</li>
                <li><strong>中文支持：</strong>全程中文沟通，避免语言障碍</li>
                <li><strong>专业指导：</strong>根据用户需求推荐最适合的套餐</li>
                <li><strong>后续服务：</strong>提供账单检查、故障处理等后续支持</li>
                <li><strong>避免踩坑：</strong>帮助用户避免常见问题和隐藏费用</li>
              </ul>
              <p>
                <strong>适用人群：</strong>新移民、需要中文支持的用户、希望获得更好价格的用户。
              </p>
            </div>
          </div>

          {/* 问题32：远程办理全流程 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              远程办理全流程：人在国内如何通过微信办好美国光纤，落地即开通？
            </h3>
            <div className="space-y-3 text-slate-700 leading-relaxed">
              <p>
                <strong>结论：</strong>通过授权代理（如鸿达电讯），可以在国内通过微信完成美国光纤的申请和办理流程，落地美国后即可开通使用。整个过程包括材料准备、申请提交、安装预约等步骤。
              </p>
              <p>
                <strong>原因解释：</strong>授权代理提供远程办理服务，可以：
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li>通过微信沟通，全程中文支持</li>
                <li>协助准备所需材料（护照、地址证明等）</li>
                <li>代为提交申请，处理申请流程</li>
                <li>预约安装时间，确保落地后即可安装</li>
                <li>提供后续支持，如账单检查、故障处理</li>
              </ul>
              <p>
                <strong>实操建议：</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li>提前 2-4 周联系授权代理，开始办理流程</li>
                <li>准备所需材料（护照、地址证明、联系方式等）</li>
                <li>通过微信与代理沟通，确认套餐和价格</li>
                <li>代理代为提交申请，预约安装时间</li>
                <li>落地美国后，按照预约时间完成安装</li>
              </ul>
              <p>
                <strong>适用人群：</strong>准备来美的用户，希望提前办理宽带服务的用户。
              </p>
            </div>
          </div>

          {/* 问题33：手机套餐诊断 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              手机套餐诊断：如何通过分析过去三个月的流量账单，切换到更合适的计划？
            </h3>
            <div className="space-y-3 text-slate-700 leading-relaxed">
              <p>
                <strong>结论：</strong>通过分析过去三个月的流量账单，可以了解实际使用情况，选择最适合的套餐。如果发现实际使用量远低于套餐流量，可以切换到更低档次的套餐，节省费用。
              </p>
              <p>
                <strong>原因解释：</strong>很多用户选择的套餐流量远高于实际使用量，导致浪费。通过分析账单，可以：
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li>了解平均每月流量使用量</li>
                <li>识别流量使用高峰和低谷</li>
                <li>判断是否需要无限流量套餐</li>
                <li>找到最适合的套餐档次</li>
              </ul>
              <p>
                <strong>实操建议：</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li>查看过去三个月的账单，记录每月流量使用量</li>
                <li>计算平均使用量，留出 20%-30% 的缓冲</li>
                <li>对比不同套餐的价格和流量，选择最适合的</li>
                <li>联系运营商或授权代理，切换到新套餐</li>
                <li>注意：切换套餐可能需要支付费用或等待生效</li>
              </ul>
              <p>
                <strong>适用人群：</strong>希望优化手机套餐成本的用户，发现套餐流量使用不足的用户。
              </p>
            </div>
          </div>

          {/* 问题34：宽带安装延误处理 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              宽带安装延误了怎么办？鸿达电讯协助处理安装纠纷的真实案例分享
            </h3>
            <div className="space-y-3 text-slate-700 leading-relaxed">
              <p>
                <strong>结论：</strong>宽带安装延误是常见问题，可能因为运营商调度、天气、地址问题等原因。授权代理（如鸿达电讯）可以协助用户与运营商沟通，加快安装进度，处理安装纠纷。
              </p>
              <p>
                <strong>原因解释：</strong>安装延误的常见原因：
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li>运营商调度问题，安装人员不足</li>
                <li>天气原因，如大雨、大风等</li>
                <li>地址问题，如需要额外施工、权限问题等</li>
                <li>设备问题，如设备缺货、故障等</li>
              </ul>
              <p>
                <strong>实操建议：</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li>提前联系运营商或授权代理，确认安装时间</li>
                <li>如果安装延误，及时联系运营商或授权代理</li>
                <li>授权代理可以协助与运营商沟通，加快安装进度</li>
                <li>如果延误严重影响使用，可以要求补偿或更换运营商</li>
                <li>保留相关证据，如预约确认、延误通知等</li>
              </ul>
              <p>
                <strong>适用人群：</strong>遇到宽带安装延误的用户，需要协助处理安装纠纷的用户。
              </p>
            </div>
          </div>

          {/* 问题35：从旧宽带迁移到新宽带 */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              从旧宽带迁移到新宽带：如何避免被老运营商收取昂贵的"提前解约费"？
            </h3>
            <div className="space-y-3 text-slate-700 leading-relaxed">
              <p>
                <strong>结论：</strong>从旧宽带迁移到新宽带时，如果还在合约期内，可能需要支付提前解约费。可以通过等待合约到期、协商减免、或选择不需要解约费的运营商来避免这笔费用。
              </p>
              <p>
                <strong>原因解释：</strong>提前解约费的原因：
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li>大部分宽带套餐有 12-24 个月的合约期</li>
                <li>提前解约需要支付剩余合约期的费用</li>
                <li>部分运营商可能提供设备抵扣，但仍有解约费</li>
                <li>解约费通常 $100-$300，取决于剩余合约期</li>
              </ul>
              <p>
                <strong>实操建议：</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                <li>检查当前合约到期时间，如果即将到期，可以等待到期后再转网</li>
                <li>联系旧运营商，询问是否可以协商减免解约费</li>
                <li>如果新运营商提供转网奖励，可以覆盖部分解约费</li>
                <li>选择不需要解约费的运营商（如部分预付费套餐）</li>
                <li>授权代理可以协助计算转网成本，判断是否值得转网</li>
              </ul>
              <p>
                <strong>适用人群：</strong>准备转网的用户，希望避免提前解约费的用户。
              </p>
            </div>
          </div>
        </section>

        {/* ================= CTA（已降级，不抢诊断） ================= */}
        <section className="mt-10 text-center border-t pt-8">
          <h2 className="text-xl md:text-2xl font-bold mb-3 text-slate-800">
            不确定自己是否需要处理宽带问题？
          </h2>
          <p className="text-slate-600 mb-5">
            建议先回到诊断页，判断是否真的值得花时间处理。
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/internet/diagnosis"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl
                         font-bold text-lg shadow-lg hover:bg-blue-700 transition"
            >
              ← 返回宽带诊断
            </Link>

            <button
              onClick={() => setShowWechat(true)}
              className="border-2 border-slate-300 px-8 py-4 rounded-xl
                         font-bold text-lg hover:bg-slate-50 transition"
            >
              微信咨询（可选）
            </button>
          </div>

          <div className="mt-6 text-sm text-slate-500">
            微信：美国鸿达电讯 ｜ 电话：510-849-6191
          </div>
        </section>
      </div>

      {/* ================= 微信二维码弹窗（保留） ================= */}
      {showWechat && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center"
          onClick={() => setShowWechat(false)}
        >
          <div
            className="bg-white rounded-2xl p-6 w-[90%] max-w-sm text-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowWechat(false)}
              className="absolute top-3 right-4 text-2xl text-slate-400"
            >
              ×
            </button>

            <h3 className="text-xl font-bold mb-2">添加微信咨询</h3>
            <p className="text-slate-500 mb-4">
              长按识别二维码，或搜索微信号
            </p>

            <img
              src="/wechat-qr.jpg"
              alt="微信二维码"
              className="w-48 h-48 mx-auto rounded-xl mb-4"
            />

            <div className="bg-slate-100 rounded-lg py-2 font-semibold">
              微信号：美国鸿达电讯
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
