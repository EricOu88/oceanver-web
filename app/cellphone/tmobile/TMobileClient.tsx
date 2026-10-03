'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { Phone, Signal, Rocket } from 'lucide-react';

import BackToHomeButton from '@/app/components/BackToHomeButton';
import PlanCard from '@/app/components/PlanCard';
import MobileFooterBar from '@/app/components/MobileFooterBar';
import WeChatPopup from '@/app/components/WeChatPopup';

export default function TMobilePage() {
  const [showWeChat, setShowWeChat] = useState(false);

  return (
    <main className="min-h-screen bg-white px-4 md:px-6 py-12">

      {/* ✅ 返回首页悬浮按钮（统一结构） */}
      <BackToHomeButton />

      <div className="max-w-5xl mx-auto">

        {/* ===================== 标题 ===================== */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-3 text-[#E20074]">
          T-Mobile 预付费手机卡套餐（可邮寄中-美）
        </h1>
        <p className="text-center text-gray-600 mb-12">
          全美覆盖 · 高速 5G · 留学生热门选择。
          如需了解更多服务，请返回<Link href="/" className="text-blue-600 hover:text-blue-700 font-semibold underline">美国鸿达电讯首页</Link>。
          常见问题如<Link href="/cellphone/faq/how-to-choose-us-cellphone-plan" className="text-blue-600 hover:text-blue-700 font-semibold underline">没有 SSN 可以办手机卡吗？</Link>都有详细解答。
        </p>

        {/* ===================== 套餐卡片 ===================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <PlanCard
            title="预付费套餐 · 基础版"
            color="pink"
            icon={<Phone className="text-pink-600" size={26} />}
            onClick={() => setShowWeChat(true)}
          >
            <p>适合留学生、外卖员、短期使用者。</p>
            <p>5G 网络 · 无限通话短信 · 支持 eSIM。</p>
            <p className="text-lg font-bold text-pink-700">$30 / 月</p>
          </PlanCard>

          <PlanCard
            title="预付费套餐 · 标准版"
            color="violet"
            highlight
            icon={<Signal className="text-violet-600" size={26} />}
            onClick={() => setShowWeChat(true)}
          >
            <p>高速网络 · 稳定信号。</p>
            <p>无限通话短信 · eSIM 即开即用。</p>
            <p className="text-lg font-bold text-violet-700">$40 / 月</p>
          </PlanCard>

          <PlanCard
            title="预付费套餐 · 高速版"
            color="cyan"
            icon={<Rocket className="text-cyan-600" size={26} />}
            onClick={() => setShowWeChat(true)}
          >
            <p>更高优先级网络。</p>
            <p>国际短信支持 · 高速稳定。</p>
            <p className="text-lg font-bold text-cyan-700">$50 / 月</p>
          </PlanCard>

        </div>

        <p className="mt-14 text-center text-gray-600 text-sm">
          支持新号码 / 携号转网 · 可邮寄 SIM / eSIM 即开即用
        </p>
      </div>

      {/* ===================== 移动端底部 CTA ===================== */}
      <MobileFooterBar onWeChatClick={() => setShowWeChat(true)} />

      {/* ===================== 微信弹窗 ===================== */}
      {showWeChat && (
        <WeChatPopup onClose={() => setShowWeChat(false)} />
      )}
    </main>
  );
}
