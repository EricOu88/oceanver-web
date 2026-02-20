'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export function MobileFixedCTA() {
  const [show, setShow] = useState(false);
  const scrollThreshold = useRef(0);

  useEffect(() => {
    const calculateThreshold = () => {
      scrollThreshold.current = document.documentElement.scrollHeight * 0.3;
    };
    calculateThreshold();
    window.addEventListener('resize', calculateThreshold);

    const handleScroll = () => {
      if (window.scrollY > scrollThreshold.current) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateThreshold);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      style={{ maxHeight: '12vh' }}
    >
      <Link
        href="/cellphone/diagnosis"
        className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 px-6 text-center font-black text-base shadow-lg transition-all"
      >
        📱 1 分钟套餐诊断
      </Link>
    </div>
  );
}
