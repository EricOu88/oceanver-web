'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { ShieldCheck, SignalHigh, MapPinned } from 'lucide-react';

import BackToHomeButton from '@/app/components/BackToHomeButton';
import PlanCard from '@/app/components/PlanCard';
import MobileFooterBar from '@/app/components/MobileFooterBar';
import WeChatPopup from '@/app/components/WeChatPopup';
import SEOServiceSignal from '@/app/components/SEOServiceSignal';
import FAQPageSchema from '@/app/components/FAQPageSchema';

export default function VerizonClient() {
  const [showWeChat, setShowWeChat] = useState(false);

  return (
    <main className="min-h-screen bg-white px-4 md:px-6 py-12">

      {/* 返回首页悬浮按钮 */}
      <BackToHomeButton />

      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl md:text-4xl font-bold text-center mb-3 text-red-700">
          Verizon 超强信号手机卡（可邮寄中-美）
        </h1>

        <p className="text-center text-gray-600 mb-12">
          覆盖、速度和套餐条件需要结合地址、设备、账户与实际使用判断。
          如需了解更多服务，请返回<Link href="/" className="text-blue-600 hover:text-blue-700 font-semibold underline">美国鸿达电讯首页</Link>。
          常见问题如<Link href="/cellphone/faq/how-to-choose-us-cellphone-plan" className="text-blue-600 hover:text-blue-700 font-semibold underline">没有 SSN 可以办手机卡吗？</Link>都有详细解答。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <PlanCard
            title="基础无限流量"
            color="indigo"
            icon={<SignalHigh className="text-indigo-600" size={26} />}
            onClick={() => setShowWeChat(true)}
          >
            <p>适合普通用户 · 信号稳定。</p>
            <p>无限 5G 上网 · 通话 · 短信。</p>
            <p className="text-lg font-bold text-indigo-700">$50 / 月</p>
          </PlanCard>

          <PlanCard
            title="优先网络套餐（热门）"
            highlight
            color="violet"
            icon={<ShieldCheck className="text-violet-600" size={26} />}
            onClick={() => setShowWeChat(true)}
          >
            <p>高速用户热门选择。</p>
            <p>更高网络优先级 · 适合直播 / 导航。</p>
            <p className="text-lg font-bold text-violet-700">$65 / 月</p>
          </PlanCard>

          <PlanCard
            title="乡村地区信号加强版"
            color="cyan"
            icon={<MapPinned className="text-cyan-600" size={26} />}
            onClick={() => setShowWeChat(true)}
          >
            <p>专为偏远地区设计。</p>
            <p>超强 LTE + 5G 覆盖。</p>
            <p className="text-lg font-bold text-cyan-700">$70 / 月</p>
          </PlanCard>

        </div>

        <p className="mt-14 text-center text-gray-600 text-sm">
          适合房车旅行 / 偏远地区 / 对信号稳定性要求高的用户
        </p>

      </div>
    </main>
  );
}
