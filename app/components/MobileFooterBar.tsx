'use client';

export default function MobileFooterBar({ onWeChatClick }: { onWeChatClick: () => void }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-lg px-4 py-3 flex gap-3 md:hidden">

      {/* 微信 */}
      <button
        onClick={onWeChatClick}
        className="flex-1 h-12 rounded-full bg-blue-700 hover:bg-blue-800 text-white
        font-bold flex items-center justify-center active:scale-95 transition shadow-sm"
      >
        💬 微信客服
      </button>

      {/* 电话 */}
      <a
        href="tel:15108496191"
        className="flex-1 h-12 rounded-full bg-blue-700 hover:bg-blue-800 text-white
        font-bold flex items-center justify-center active:scale-95 transition shadow-sm"
      >
        📞 拨号咨询
      </a>
    </div>
  );
}
