'use client';

import { useState } from 'react';
import { PhoneIncoming, Network, Smartphone } from 'lucide-react';

import PlanCard from '@/app/components/PlanCard';
import MobileFooterBar from '@/app/components/MobileFooterBar';
import WeChatPopup from '@/app/components/WeChatPopup';

export default function GenMobileClient() {
  const [showWeChat, setShowWeChat] = useState(false);

  return (
    <>
      {/* 套餐卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* ===== 套餐 1 ===== */}
          <PlanCard
            title="基础版 · 省钱首选"
            color="rose"
            icon={<PhoneIncoming className="text-rose-600" size={26} />}
            onClick={() => setShowWeChat(true)}
          >
            <p>5G 信号 · 4GB 上网流量 + 电话 + 短信</p>
            <p>适合留学生、移民、短期旅游。</p>
            <p className="text-lg font-bold text-[#E60023]">$20 / 月</p>
          </PlanCard>

          {/* ===== 套餐 2（官方推荐） ===== */}
          <PlanCard
            title="预付费套餐（官方推荐）"
            highlight
            color="red"
            icon={<Network className="text-red-600" size={26} />}
            onClick={() => setShowWeChat(true)}
          >
            <div className="bg-gradient-to-br from-[#FFCDD2] to-[#E60023] text-white p-3 rounded-xl">
              <p>12GB 上网流量 + 电话 + 短信</p>
              <p>适合留学生、移民、短期旅游。</p>
              <p className="text-lg font-bold">$30 / 月</p>
            </div>
          </PlanCard>

          {/* ===== 套餐 3（eSIM 即开） ===== */}
          <PlanCard
            title="eSIM 即开套餐"
            color="rose"
            icon={<Smartphone className="text-rose-600" size={26} />}
            onClick={() => setShowWeChat(true)}
          >
            <div className="bg-[#FFF5F6] border border-[#E6002333] p-3 rounded-xl">
              <p>无需寄卡 · eSIM 手机扫码即开</p>
              <p>适合上网、游戏、视频用户。</p>
              <p className="text-lg font-bold text-[#E60023]">$50 / 月</p>
            </div>
          </PlanCard>

      </div>

      <p className="mt-14 text-center text-gray-600 text-sm">
        Gen Mobile 官方合作 · 国内可激活 · 支持电商 / 直播 / 跨境团队
      </p>

      <MobileFooterBar onWeChatClick={() => setShowWeChat(true)} />

      {showWeChat && (
        <WeChatPopup onClose={() => setShowWeChat(false)} />
      )}
    </>
  );
}
