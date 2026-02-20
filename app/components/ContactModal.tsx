'use client';

import React, { useState } from 'react';

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [copied, setCopied] = useState(false);
  const wechatId = 'USA-HONGDA'; // 👈 你的客服微信号

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(wechatId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // 兼容老旧浏览器
      const textArea = document.createElement('textarea');
      textArea.value = wechatId;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      {/* 弹窗主体（阻止点击穿透） */}
      <div
        className="relative w-full max-w-[340px] bg-white rounded-[2rem] p-8 shadow-2xl animate-in fade-in zoom-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 关闭按钮 */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="关闭"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* 顶部图标 */}
        <div className="flex justify-center mb-5">
          <div className="bg-green-50 p-4 rounded-full">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#22c55e"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-10.6 8.38 8.38 0 0 1 3.8.9L21 3z" />
            </svg>
          </div>
        </div>

        {/* 文案 */}
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-gray-800 tracking-tight">
            添加在线中文客服
          </h3>
          <p className="text-sm text-gray-500 mt-2 font-medium">
            长按识别二维码 或 复制微信号
          </p>
        </div>

        {/* 二维码 */}
        <div className="flex justify-center mb-6">
          <div className="p-3 bg-white border border-gray-100 rounded-2xl shadow-sm">
            <img
              src="/qrcode.png" // 确保 public/qrcode.png 存在
              alt="微信客服二维码"
              className="w-40 h-40 object-contain rounded-lg"
            />
          </div>
        </div>

        {/* 复制区 */}
        <div className="bg-blue-50/50 border border-blue-100 rounded-[1.25rem] p-4">
          <div className="flex flex-col items-center gap-3">
            <div className="flex flex-col items-center">
              <span className="text-[10px] text-blue-400 font-bold uppercase tracking-widest mb-1">
                客服微信号
              </span>
              <span className="text-xl font-extrabold text-blue-700 tracking-wide leading-none">
                {wechatId}
              </span>
            </div>

            <button
              onClick={handleCopy}
              className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-bold transition-all duration-300 transform active:scale-95 shadow-md ${
                copied
                  ? 'bg-green-500 text-white shadow-green-100'
                  : 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-100'
              }`}
            >
              {copied ? (
                <>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  已成功复制
                </>
              ) : (
                <>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  一键复制微信号
                </>
              )}
            </button>
          </div>
        </div>

        {/* 底部标识 */}
        <div className="mt-6 flex flex-col items-center">
          <span className="px-3 py-1 bg-gray-100 rounded-full text-[11px] text-gray-500 font-medium">
            在线公众号：美国鸿达电讯
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
// trigger-vercel-rebuild-2025-12-22
