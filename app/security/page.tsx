import type { Metadata } from 'next'
import { getCanonicalUrl } from '@/lib/seo-utils'

export const metadata: Metadata = {
  title: '家庭安防服务 | 美国鸿达电讯',
  description:
    '美国鸿达电讯家庭与商业安防系统说明：介绍高清监控摄像头、智能报警系统及远程监控方案。具体安装范围、设备和售后条件以当前服务安排为准。',
  alternates: { canonical: getCanonicalUrl('/security') },
};

export default function SecurityPage() {
  return (
    <main>
      <h1>家庭安防服务</h1>
      <p>
        鸿达电讯为华人家庭提供 ADT 安防系统选购、安装与售后支持，
        具体服务范围和安装条件需结合地址与当前安排核实。
      </p>
    </main>
  );
}
