'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Smartphone, 
  HeartHandshake, 
  ChevronLeft, 
  MessageCircle,
  Zap
} from 'lucide-react';
import WeChatPopup from '@/app/components/WeChatPopup';

/* =========================
   Schema：政府白卡手机服务
========================= */
const GovernmentPhoneSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "政府白卡免费手机服务（Lifeline）",
    "serviceType": "Government Lifeline Phone Assistance",
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "California"
    },
    "provider": {
      "@type": "Organization",
      "@id": "https://oceanver.com/#organization",
      "name": "美国鸿达电讯",
      "url": "https://oceanver.com",
      "telephone": "+1-510-849-6191",
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default function GovernmentClient() {
  const [showWeChat, setShowWeChat] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <GovernmentPhoneSchema />

      {/* 1. 顶部导航栏 */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 py-3 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href="/cellphone/providers" className="group flex items-center gap-2">
              <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                <ChevronLeft size={18} />
              </div>
              <span className="font-bold text-sm text-slate-500 group-hover:text-blue-600 transition-colors">对比列表</span>
            </Link>
            
            <div className="w-[1px] h-4 bg-slate-200" />

            <Link href="/" className="group">
              <span className="font-black text-lg tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                返回首页
              </span>
            </Link>
          </div>

          <button 
            onClick={() => setShowWeChat(true)}
            className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full text-xs font-black hover:bg-green-700 shadow-md transition-all active:scale-95"
          >
            <MessageCircle size={16} />
            微信咨询
          </button>
        </div>
      </nav>

      {/* 2. 主标题区 */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-5xl font-black text-center mb-4 text-blue-700 tracking-tight">
          政府免费手机卡
        </h1>
        <p className="text-center text-slate-500 font-bold mb-12">
          Lifeline 政府补助方案 · 每月 $0 月费 · 免费智能手机。
          如需了解更多通信问题说明，请返回<Link href="/" className="text-blue-600 hover:text-blue-700 font-semibold underline">美国鸿达电讯首页</Link>。
          常见问题如<Link href="/cellphone/government" className="text-blue-600 hover:text-blue-700 font-semibold underline">政府白卡免费手机如何申请？</Link>都有详细解答。
        </p>

        {/* 三大优势 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-[2rem] border border-slate-100 bg-blue-50/50 shadow-sm">
            <ShieldCheck className="text-blue-600 mb-3" size={30} />
            <h3 className="font-black text-lg mb-2 text-slate-900">政府补助资格</h3>
            <p className="text-slate-600 text-sm font-medium">
              18岁以上，持有 Medicaid 白卡或低收入证明即可申请。
            </p>
          </div>

          <div className="p-6 rounded-[2rem] border border-slate-100 bg-indigo-50/50 shadow-sm">
            <Smartphone className="text-indigo-600 mb-3" size={30} />
            <h3 className="font-black text-lg mb-2 text-slate-900">免费手机流量</h3>
            <p className="text-slate-600 text-sm font-medium">
              包含免费智能手机，以及每月固定的数据流量和无限通话。
            </p>
          </div>

          <div className="p-6 rounded-[2rem] border border-slate-100 bg-emerald-50/50 shadow-sm">
            <HeartHandshake className="text-emerald-600 mb-3" size={30} />
            <h3 className="font-black text-lg mb-2 text-slate-900">免费国际通话</h3>
            <p className="text-slate-600 text-sm font-medium">
              可免费拨打中国、加拿大、香港、越南等多地。
            </p>
          </div>
        </div>

        {/* 3. 内容详细介绍 */}
        <div className="bg-white border border-slate-100 rounded-[2.5rem] p-6 md:p-8 shadow-sm leading-relaxed text-slate-700 mb-10">
          <h2 className="text-2xl font-black mb-6 text-blue-700 flex items-center gap-2">
            <div className="w-2 h-8 bg-blue-600 rounded-full" />
            申请要求
          </h2>
          <ul className="space-y-4 mb-10">
            {[
              "加州身份证 ID 原件 (必须)",
              "Medicaid 白卡原件 (必须)",
              "社安卡 SSN 号码后 4 位",
              "不接受绿卡或护照作为身份证明",
              "需支付少量申请手续费"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 font-bold">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                {item}
              </li>
            ))}
          </ul>

          {/* 图片区域 */}
          <div className="my-10">
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-[2rem] shadow-2xl border-4 border-white">
              <Image 
                src="/government-phone.jpg" 
                alt="政府免费手机实物参考"
                fill
                className="object-cover"
                priority
              />
            </div>
            <p className="text-[11px] text-center text-slate-400 mt-4 font-black uppercase tracking-widest">
              Reference: Lifeline Program Device Sample
            </p>
          </div>

          <div className="my-10">
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-[2rem] shadow-2xl border-4 border-white">
              <Image 
                src="/c8.jpg" 
                alt="政府免费手机实物参考"
                fill
                className="object-cover"
                priority
              />
            </div>
            <p className="text-[11px] text-center text-slate-400 mt-4 font-black uppercase tracking-widest">
              Reference: Lifeline Program Device Sample
            </p>
          </div>

          <h2 className="text-2xl font-black mt-12 mb-6 text-blue-700 flex items-center gap-2">
            <div className="w-2 h-8 bg-blue-600 rounded-full" />
            申请时间与方式
          </h2>
          <div className="bg-slate-50 p-6 rounded-2xl mb-10">
            <p className="font-bold mb-4 flex items-center gap-2 text-slate-900">
              <Zap size={18} className="text-amber-700 fill-amber-700" />
              办理流程约 20–30 分钟，现场领新手机+新的电话号码
            </p>
            <ul className="space-y-3 text-slate-600 font-bold text-sm">
              <li>📞 中文咨询：510-849-6191</li>
              <li>🤝 具体申请方式与资格以所在州及服务项目要求为准</li>
            </ul>
          </div>

          <h2 className="text-2xl font-black mb-6 text-blue-700 flex items-center gap-2">
            <div className="w-2 h-8 bg-blue-600 rounded-full" />
            注意事项
          </h2>
          <ul className="space-y-3 font-bold text-slate-600 mb-6">
            <li className="flex gap-2"><span>•</span> 可保留并转入现有手机号码</li>
            <li className="flex gap-2"><span>•</span> 每月至少拨打一次电话以保持激活状态</li>
            <li className="flex gap-2"><span>•</span> 每年需进行一次资格年审</li>
          </ul>
        </div>

        {/* 4. CTA 联系区域 */}
        <div className="text-center bg-blue-600 rounded-[3rem] p-8 shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-black text-white mb-6">符合条件？立即咨询办理</h3>
          <button
            onClick={() => setShowWeChat(true)}
            className="group px-12 py-5 bg-white text-blue-600 text-lg rounded-2xl font-black shadow-lg hover:bg-slate-50 transition active:scale-95 flex items-center gap-3 mx-auto"
          >
            <MessageCircle className="text-green-600" />
            立即微信预约查询资格
          </button>
          <p className="text-blue-200 text-[10px] font-black uppercase tracking-[0.2em] mt-6">
            中文协助 · 资格以项目要求为准
          </p>
        </div>
      </div>

      {/* 微信弹窗 */}
      {showWeChat && <WeChatPopup onClose={() => setShowWeChat(false)} />}
      
      <footer className="py-12 text-center">
        <p className="text-[10px] font-black text-slate-300 tracking-[0.3em] uppercase">
          © {new Date().getFullYear()} 美国鸿达电讯 · GOVERNMENT ASSISTANCE
        </p>
      </footer>
    </main>
  );
}
