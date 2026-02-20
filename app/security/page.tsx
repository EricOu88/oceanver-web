import type { Metadata } from 'next'
import { getHreflangAlternates } from '@/lib/hreflang-utils'

export const metadata: Metadata = {
  title: '家庭安防服务 | 鸿达电讯 Bay Media Star',
  description:
    '鸿达电信家庭与商业安防系统：为您提供专业高清监控摄像头安装、智能报警系统及远程监控全套方案。全方位保护您的湾区家园或商铺安全，支持手机实时远程查看与中文技术支持，让您无论身在何处都能安心无忧，打造智能安全的居住环境。',
  alternates: getHreflangAlternates('/security'),
};

export default function SecurityPage() {
  return (
    <main>
      <h1>家庭安防服务</h1>
      <p>
        鸿达电讯为华人家庭提供 ADT 安防系统选购、安装与售后支持，
        覆盖 Fremont、Milpitas 及全美主要城市。
      </p>
    </main>
  );
}
