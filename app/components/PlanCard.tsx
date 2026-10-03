'use client';

import { ReactNode } from 'react';

export default function PlanCard({
  title,
  icon,
  color = 'blue',
  children,
  highlight = false,
  buttonText = '咨询开通 →',
  onClick
}: {
  title: string;
  icon: ReactNode;
  color?: string;
  children: ReactNode;
  highlight?: boolean;
  buttonText?: string;
  onClick?: () => void;
}) {
  const colorMap: Record<string, string> = {
    blue: 'border-blue-300 bg-blue-50',
    pink: 'border-pink-300 bg-pink-50',
    indigo: 'border-indigo-300 bg-indigo-50',
    violet: 'border-violet-300 bg-violet-50',
    emerald: 'border-emerald-300 bg-emerald-50',
    cyan: 'border-cyan-300 bg-cyan-50',
  };

  const borderColor = colorMap[color] || colorMap.blue;

  return (
    <div
      className={`rounded-2xl p-6 shadow-sm hover:shadow-md transition ${
        highlight ? 'border-2 border-blue-600 bg-blue-50 shadow-lg' : `border ${borderColor}`
      }`}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h2 className={`text-xl font-semibold ${highlight ? 'text-blue-700' : ''}`}>{title}</h2>
      </div>

      {/* Content */}
      <div className="text-sm leading-relaxed text-gray-700 space-y-3">
        {children}
      </div>

      {/* Button */}
      <button
        onClick={onClick}
        className={`mt-6 w-full py-3 rounded-xl font-semibold active:scale-95 transition
          bg-blue-700 text-white hover:bg-blue-800
        `}
      >
        {buttonText}
      </button>
    </div>
  );
}
