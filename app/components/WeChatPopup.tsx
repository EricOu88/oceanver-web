'use client';

import Image from 'next/image';

export default function WeChatPopup({ onClose }: { onClose: () => void }) {
  const WECHAT_ID = '美国鸿达电讯';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(WECHAT_ID);

      const w = window as Window & {
        gtag?: (...args: unknown[]) => void;
        uetq?: unknown[];
      };

      /* ================= GA4 转化事件 ================= */
      if (typeof w.gtag === 'function') {
        w.gtag('event', 'wechat_copy', {
          event_category: 'engagement',
          event_label: 'wechat_popup',
          value: 1,
        });
      }

      /* ================= Bing UET 转化事件 ================= */
      if (typeof w.uetq !== 'undefined') {
        w.uetq.push('event', 'wechat_copy', {
          event_category: 'engagement',
          event_label: 'wechat_popup',
        });
      }

      alert(`✅ 已复制微信号：${WECHAT_ID}\n请打开微信 → 搜索粘贴添加客服`);
    } catch {
      prompt('复制失败，请手动复制下方微信号：', WECHAT_ID);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[999] bg-black/60 flex items-center justify-center p-4 pb-20 md:pb-4"
      onClick={onClose}
      style={{
        paddingBottom: 'calc(80px + env(safe-area-inset-bottom, 0px))',
      }}
    >
      <div
        className="w-full max-w-sm rounded-[32px] bg-white shadow-[0_18px_45px_rgba(15,23,42,0.5)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxHeight: 'calc(100vh - 100px - env(safe-area-inset-bottom, 0px))',
          overflowY: 'auto',
        }}
      >
        <div className="bg-gradient-to-r from-[#3D5AFE] to-[#4FC3F7] pt-7 pb-6 px-6 text-center relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            ×
          </button>

          <h3 className="text-white text-xl font-bold">添加中文客服微信</h3>
          <p className="text-white/90 text-sm mt-1">
            真人中文客服 · 免费咨询宽带手机方案
          </p>
        </div>

        <div className="bg-[#F5F7FB] px-6 pb-6 pt-6">
          <Image
            src="/wechat-qr.jpg"
            alt="微信二维码"
            width={224}
            height={224}
            className="w-56 h-56 mx-auto rounded-xl shadow-md"
          />

          {/* 手机端提示：只用 CSS 控制显示/隐藏（不做 UA 判断） */}
          <p className="text-center text-sm text-gray-600 mt-4 md:hidden">
            📱 手机用户请 <span className="font-semibold">长按二维码</span> 添加客服
          </p>

          <div className="mt-6 mb-2 bg-white rounded-2xl border px-5 py-4 flex flex-col sm:flex-row justify-between items-center gap-3">
            <div className="flex-1 min-w-0">
              <p className="text-xs text-gray-500">微信号</p>
              <p className="text-lg font-bold truncate">{WECHAT_ID}</p>
            </div>

            <button
              onClick={handleCopy}
              className="px-6 py-2.5 rounded-full bg-blue-600 text-white font-bold whitespace-nowrap flex-shrink-0"
            >
              一键复制
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
