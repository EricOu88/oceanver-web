'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { Globe, PhoneCall, MessageSquare } from 'lucide-react';

import BackToHomeButton from '@/app/components/BackToHomeButton';
import PlanCard from '@/app/components/PlanCard';
import MobileFooterBar from '@/app/components/MobileFooterBar';
import WeChatPopup from '@/app/components/WeChatPopup';

export default function UltraPage() {
  const [showWeChat, setShowWeChat] = useState(false);

  return (
    <main className="min-h-screen bg-white px-4 md:px-6 py-12">

      {/* ✅ 返回首页悬浮按钮（统一结构） */}
      <BackToHomeButton />

      <div className="max-w-5xl mx-auto">

        {/* ===================== 标题 ===================== */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-3 text-purple-700">
          Ultra Mobile 预付费电话卡（可邮寄中-美）
        </h1>
        <p className="text-center text-gray-600 mb-12">
          中美两地沟通方案 · 国际通话条件以当前套餐为准。
          如需了解更多服务，请返回<Link href="/" className="text-blue-600 hover:text-blue-700 font-semibold underline">美国鸿达电讯首页</Link>。
          常见问题如<Link href="/cellphone/faq/prepaid-vs-postpaid" className="text-blue-600 hover:text-blue-700 font-semibold underline">预付费和后付费手机卡有什么区别？</Link>都有详细解答。
        </p>

        {/* ===================== 套餐卡片 ===================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <PlanCard
            title="预付费套餐 · 国际通话版"
            color="violet"
            icon={<PhoneCall className="text-violet-600" size={26} />}
            onClick={() => setShowWeChat(true)}
          >
            <p>适合中美两地通话，免费中美国际通话。</p>
            <p>5G 信号 · 4GB 流量 · 支持 eSIM。</p>
            <p className="text-lg font-bold text-violet-700">$20 / 月</p>
          </PlanCard>

          <PlanCard
            title="预付费套餐 · 方案说明"
            highlight
            color="purple"
            icon={<MessageSquare className="text-purple-600" size={26} />}
            onClick={() => setShowWeChat(true)}
          >
            <p>适合留学生、外卖员、短期使用者。</p>
            <p>5G 信号 · 11GB 流量 · 支持 eSIM。</p>
            <p className="text-lg font-bold text-purple-700">$30 / 月</p>
          </PlanCard>

          <PlanCard
            title="预付费套餐 · 全球通"
            color="cyan"
            icon={<Globe className="text-cyan-600" size={26} />}
            onClick={() => setShowWeChat(true)}
          >
            <p>支持 100+ 国家国际通话。</p>
            <p>5G 信号 · 无限流量上网。</p>
            <p className="text-lg font-bold text-cyan-700">$50 / 月</p>
          </PlanCard>

        </div>

        <p className="mt-14 text-center text-gray-600 text-sm">
          支持 eSIM · 中国可激活 · 适合跨国商务与探亲使用
        </p>
      </div>

      {/* ===================== 手机端底部 CTA ===================== */}
      <MobileFooterBar onWeChatClick={() => setShowWeChat(true)} />

      {/* ===================== 微信弹窗 ===================== */}
      {showWeChat && (
        <WeChatPopup onClose={() => setShowWeChat(false)} />
      )}
    </main>
  );
}
