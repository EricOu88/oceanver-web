'use client';

import {useEffect} from 'react';

/**
 * Global delegation: any element with [data-open-chat] will open the chat.
 * Works for <a>, <button>, or any clickable wrapper. Uses CAPTURE phase so it
 * runs before default navigation (e.g., href="#").
 */
export default function ChatTriggerBinder() {
  useEffect(() => {
    const onClickCapture = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const el = target.closest<HTMLElement>('[data-open-chat]');
      if (!el) return;

      // prevent navigation or form submission
      e.preventDefault();
      e.stopPropagation();

      // prefer the global helper if the widget exposed it
      (window as any).openChatWidget?.();

      // also dispatch an event so the widget can listen, too
      window.dispatchEvent(new Event('open-chat'));
    };

    const onKeydownCapture = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const el = target.closest<HTMLElement>('[data-open-chat]');
      if (!el) return;
      if (e.key !== 'Enter' && e.key !== ' ') return;

      e.preventDefault();
      e.stopPropagation();
      (window as any).openChatWidget?.();
      window.dispatchEvent(new Event('open-chat'));
    };

    // capture phase to beat default link behavior
    document.addEventListener('click', onClickCapture, true);
    document.addEventListener('keydown', onKeydownCapture, true);

    return () => {
      document.removeEventListener('click', onClickCapture, true);
      document.removeEventListener('keydown', onKeydownCapture, true);
    };
  }, []);

  return null;
}
