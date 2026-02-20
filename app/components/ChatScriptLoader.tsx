'use client';

import { useEffect, useRef } from 'react';

/**
 * 延迟加载聊天脚本组件
 * 在用户滚动或 5 秒后加载聊天脚本，避免阻塞首屏渲染
 */
export default function ChatScriptLoader() {
  const loadedRef = useRef(false);
  const loadChatRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    // 如果已经加载过，直接返回
    if (loadedRef.current) return;

    // 创建加载函数
    const loadChat = () => {
      if (loadedRef.current) return;
      loadedRef.current = true;

      // 检查脚本是否已经存在
      const existingScript = document.querySelector('script[src="https://example.com/chat.js"]');
      if (existingScript) return;

      const script = document.createElement('script');
      script.src = 'https://example.com/chat.js';
      script.async = true;
      document.body.appendChild(script);
    };

    // 保存函数引用以便清理
    loadChatRef.current = loadChat;

    // 监听滚动事件（只触发一次）
    window.addEventListener('scroll', loadChat, { once: true, passive: true });

    // 5 秒后自动加载
    const timer = setTimeout(loadChat, 5000);

    // 清理函数
    return () => {
      // 注意：由于使用了 { once: true }，scroll 事件会自动移除
      // 但为了安全，我们还是显式移除
      if (loadChatRef.current) {
        window.removeEventListener('scroll', loadChatRef.current);
      }
      clearTimeout(timer);
    };
  }, []);

  return null;
}
