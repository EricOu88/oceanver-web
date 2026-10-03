import type { Metadata } from 'next';
import ATTClient from './ATTClient';

export const metadata: Metadata = {
  title: '美国 AT&T 中文手机计划｜家庭 & 商业套餐｜鸿达电讯',
  description:
    '鸿达电讯提供 AT&T 手机计划中文办理服务，面向全美国华人。支持家庭套餐、商业计划、预付费套餐，携号转网最高可获 $800 尾款报销，中文客服全程协助，支持 eSIM 即开即用。',
  alternates: {
    canonical: 'https://oceanver.com/cellphone/att',
  },
  openGraph: {
    title: '美国 AT&T 中文手机计划｜家庭 & 商业套餐｜鸿达电讯',
    description:
      '鸿达电讯提供 AT&T 手机计划中文说明与申请协助，面向全美国中文用户。支持家庭套餐、商业计划、预付费套餐，具体资格、设备和促销条件以当前运营商规则为准。',
    url: 'https://oceanver.com/cellphone/att',
    siteName: '美国鸿达电讯',
    locale: 'zh_CN',
    type: 'website',
  },
};

export default function ATTPage() {
  return <ATTClient />;
}
