'use client';

import { createContext, useContext, useCallback, useState } from 'react';
import { WeChatModal } from './WeChatModal';

const WeChatModalContext = createContext<() => void>(() => {});

export function WeChatModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = useCallback(() => setIsOpen(true), []);
  return (
    <WeChatModalContext.Provider value={openModal}>
      {children}
      <WeChatModal open={isOpen} onClose={() => setIsOpen(false)} />
    </WeChatModalContext.Provider>
  );
}

export function useWeChatModal() {
  return useContext(WeChatModalContext);
}
