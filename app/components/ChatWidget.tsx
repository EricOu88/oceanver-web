'use client';

declare global {
  interface Window {
    openChatWidget?: () => void;
    closeChatWidget?: () => void;
  }
}

import { useEffect, useState, useCallback, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { MessageCircle, X, Send, Loader } from 'lucide-react'; // 引入图标

// --- 国际化文本对象 (未改变) ---
const translations = {
  zh: {
    title: '在线留言',
    name: '姓名（可选）',
    phone: '联系电话（可选）',
    msg: '留言内容',
    send: '发送',
    sending: '发送中…',
    sent: '已发送，我们会尽快联系您。',
    error: '发送失败，请稍后重试。',
    open: '联系客服',
    close: '关闭',
    phoneNotice: '短信将发送至：',
  },
  en: {
    title: 'Message Us',
    name: 'Name (optional)',
    phone: 'Your phone (optional)',
    msg: 'Your message',
    send: 'Send',
    sending: 'Sending…',
    sent: 'Sent! We’ll get back to you soon.',
    error: 'Failed to send. Please try again.',
    open: 'Chat',
    close: 'Close',
    phoneNotice: 'SMS will be sent to:',
  },
};

export default function ChatWidget() {
  const modalRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname() || '/';
  // 使用更清晰的变量名 isEn
  const isEn = pathname.startsWith('/en');
  const t = isEn ? translations.en : translations.zh;

  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);
  const [name, setName] = useState('');
  const [fromPhone, setFromPhone] = useState('');
  const [message, setMessage] = useState('');
  
  // 使用 useCallback 避免不必要的函数重建
  const handleClose = useCallback(() => setOpen(false), []);
  const handleOpen = useCallback(() => setOpen(true), []);


  // --- 效果 1: 全局方法和事件监听 ---
  useEffect(() => {
    // 暴露全局方法，使用 window['propertyName'] 访问，避免 TS 警告
    window['openChatWidget'] = handleOpen;
    window['closeChatWidget'] = handleClose;

    // 监听自定义事件
    window.addEventListener('open-chat', handleOpen);
    window.addEventListener('close-chat', handleClose);

    // ?chat=open 支持
    try {
      const u = new URL(window.location.href);
      if (u.searchParams.get('chat') === 'open') handleOpen();
    } catch (e) {
      // URL 解析失败是正常的，忽略
    }

    return () => {
      delete window['openChatWidget'];
      delete window['closeChatWidget'];
      window.removeEventListener('open-chat', handleOpen);
      window.removeEventListener('close-chat', handleClose);
    };
  }, [handleOpen, handleClose]); // 依赖项

  // --- 效果 2: 键盘和焦点管理 (A11y 改进) ---
  useEffect(() => {
    if (!open) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    
    // 自动聚焦到模态框或第一个输入字段
    const focusTrap = () => {
        if (modalRef.current) {
            const firstInput = modalRef.current.querySelector('input, textarea') as HTMLElement;
            firstInput?.focus();
        }
    }
    
    focusTrap();
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open, handleClose]);


  // --- 发送处理 (健壮性改进) ---
  async function handleSend() {
    if (!message.trim()) return;
    setSubmitting(true);
    setOk(null);

    try {
      const res = await fetch('/api/send-sms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          fromPhone,
          message,
          locale: isEn ? 'en' : 'zh', // 确保这里是正确的语言代码
        }),
      });

      // 健壮性改进: 检查 HTTP 状态码
      if (!res.ok) {
        throw new Error(`API response status was ${res.status}`);
      }

      const json = await res.json();
      setOk(Boolean(json.ok));
      if (json.ok) setMessage('');
    } catch (e) {
      console.error('Message send failed:', e);
      setOk(false);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {/* 开启按钮 */}
      {!open && (
        <button
          onClick={handleOpen}
          className="fixed bottom-5 right-5 z-50 rounded-full bg-blue-600 px-4 py-3 text-white shadow-lg transition-colors hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-label={t.open}
        >
          <MessageCircle size={20} className="inline mr-2" />
          {t.open}
        </button>
      )}

      {/* 聊天模态框 */}
      {open && (
        // 使用 role="dialog" 增强可访问性
        <div
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="chat-widget-title"
          className="fixed bottom-5 right-5 z-50 w-[90vw] max-w-sm rounded-xl border bg-white shadow-2xl transition-all duration-300 ease-out"
        >
          {/* 头部 */}
          <div className="flex items-center justify-between border-b px-4 py-3">
            <h3 id="chat-widget-title" className="font-semibold text-gray-800">
              {t.title}
            </h3>
            <button
              onClick={handleClose}
              className="rounded-full border p-1 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label={t.close}
            >
              <X size={18} />
            </button>
          </div>

          {/* 内容/表单 */}
          <div className="p-4 space-y-3">
            {/* 改进：为输入添加明确的 ID 和 aria-label/aria-describedby，这里简化为仅用 placeholder */}
            <input
              id="chat-name"
              className="w-full rounded-lg border px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder={t.name}
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-label={t.name}
            />
            <input
              id="chat-phone"
              type="tel" // 使用 tel 类型
              className="w-full rounded-lg border px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder={t.phone}
              value={fromPhone}
              onChange={(e) => setFromPhone(e.target.value)}
              aria-label={t.phone}
            />
            <textarea
              id="chat-message"
              className="w-full rounded-lg border px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder={t.msg}
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              aria-label={t.msg}
              required // 消息内容设为必填
            />
            
            {/* 发送按钮 */}
            <button
              onClick={handleSend}
              disabled={submitting || !message.trim()}
              className="flex items-center justify-center w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? (
                <><Loader size={18} className="animate-spin mr-2" />{t.sending}</>
              ) : (
                <><Send size={18} className="mr-2" />{t.send}</>
              )}
            </button>

            {/* 状态反馈 */}
            {ok === true && <p className="text-xs text-center text-emerald-600">{t.sent}</p>}
            {ok === false && <p className="text-xs text-center text-rose-600">{t.error}</p>}

            {/* 法律/联系方式提示 */}
            <p className="text-[11px] text-center text-gray-500 pt-1 border-t">
              {t.phoneNotice} <a className="underline font-mono" href="tel:15108496191">510-849-6191</a>.
            </p>
          </div>
        </div>
      )}
    </>
  );
}