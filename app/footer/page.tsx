'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  ChevronRight 
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-50 pt-20 pb-32 md:pb-12 text-slate-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 第一列：品牌与信任背书 */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 font-black text-2xl text-slate-900">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white text-sm shadow-lg shadow-blue-100">H</div>
              <span>鸿达电讯</span>
            </div>
            <p className="text-sm leading-relaxed font-medium text-slate-500">
              面向全美中文用户，整理手机套餐、家庭宽带、账单变化和常见通信问题，并在需要时提供中文协助。
            </p>
          </div>

          {/* 第二列：业务导航 */}
          <div>
            <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-6">核心业务</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><Link href="/internet" className="hover:text-blue-600 flex items-center gap-1 group"><ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all"/> 家庭宽带办理</Link></li>
              <li><Link href="/cellphone" className="hover:text-blue-600 flex items-center gap-1 group"><ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all"/> 手机套餐开户</Link></li>
              <li><Link href="/internet/price-hike" className="hover:text-blue-600 flex items-center gap-1 group"><ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all"/> 账单降费审计</Link></li>
              <li><Link href="#" className="hover:text-blue-600 flex items-center gap-1 group"><ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all"/> 商业网络/电话</Link></li>
            </ul>
          </div>

          {/* 第三列：关于与隐私 (您要求的重点) */}
          <div>
            <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-6">公司信息</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><Link href="/about" className="hover:text-blue-600 transition-colors">关于我们</Link></li>
              <li><Link href="/contact" className="hover:text-blue-600 transition-colors">联系我们</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-blue-600 transition-colors flex items-center gap-2 text-emerald-600">
                <ShieldCheck size={16} /> 隐私政策 (数据安全)
              </Link></li>
              <li><Link href="#" className="hover:text-blue-600 transition-colors">常见问题汇总</Link></li>
            </ul>
          </div>

          {/* 第四列：联系信息 */}
          <div>
            <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-6">联系我们</h4>
            <div className="space-y-5 text-sm font-bold">
              <div className="flex gap-3">
                <Phone size={18} className="text-blue-600 flex-shrink-0" />
                <a href="tel:15108496191" className="hover:text-blue-600 transition-colors">510-849-6191</a>
              </div>
              <div className="flex gap-3">
                <MessageCircle size={18} className="text-green-600 flex-shrink-0" />
                <span>微信: BayMediaStar</span>
              </div>
              <p className="text-[10px] text-slate-400 font-medium border-l-2 border-slate-100 pl-3">
                具体运营商方案和地址覆盖情况，以账户与地址核实结果为准。
              </p>
            </div>
          </div>

        </div>

        {/* 底部版权与声明 */}
        <div className="pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-black uppercase tracking-[0.2em] text-center md:text-left">
            © {currentYear} 美国鸿达电讯. <br className="md:hidden"/>
            <span className="hidden md:inline mx-2 text-slate-200">|</span> 
            SERVICING CHINESE COMMUNITY SINCE 2007.
          </div>
          
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-50 rounded-full border border-slate-100 text-[10px] font-bold">
               <ShieldCheck size={12} className="text-emerald-500" />
               <span>CCPA 隐私合规</span>
             </div>
             <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-50 rounded-full border border-slate-100 text-[10px] font-bold">
               <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
               <span>官方代理商身份验证</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
