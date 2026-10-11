'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { trackContact } from './ContactAnalytics';

export default function CopyWechatButton({
  wechatId = '美国鸿达电讯',
  className = '',
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator?.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(wechatId);
      } else {
        const input = document.createElement('input');
        input.value = wechatId;
        document.body.appendChild(input);
        input.select();
        const succeeded = document.execCommand('copy');
        input.remove();
        if (!succeeded) throw new Error('Copy failed');
      }

      trackContact('wechat_copy', 'wechat_section', '复制微信号');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('复制失败:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-xl shadow hover:bg-blue-700 transition font-semibold ${className}`}
    >
      {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
      {copied ? '已复制' : '复制微信号'}
    </button>
  );
}

