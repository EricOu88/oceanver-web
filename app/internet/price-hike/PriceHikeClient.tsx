'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import PriceHikeServiceSchema from '@/app/components/schema/PriceHikeServiceSchema';

import {
  TrendingUp,
  MessageCircle,
  Zap,
  CheckCircle2,
  X,
  ArrowRight,
  Copy
} from 'lucide-react';

/* ===================== 微信弹窗 ===================== */
function WeChatModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [cp, setCp] = useState(false);
  const ID = '美国鸿达电讯';

  const handleCopy = () => {
    navigator.clipboard.writeText(ID);
    setCp(true);
    setTimeout(() => setCp(false), 2000);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-[2rem] shadow-2xl p-8 w-full max-w-sm text-center">
        <button onClick={onClose} className="absolute right-6 top-6 text-slate-500">
          <X size={24} />
        </button>

        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-green-700">
          <MessageCircle size={32} />
        </div>

        <h3 className="text-xl font-bold mb-1">添加中文客服</h3>
        <p className="text-slate-600 mb-6 text-sm">免费检查你的宽带账单</p>

        <div className="relative aspect-square w-48 mx-auto rounded-2xl overflow-hidden border">
          <Image src="/wechat-qr.jpg" alt="微信客服二维码" fill unoptimized />
        </div>

        <div className="mt-6 flex items-center justify-between bg-slate-50 p-3 rounded-xl border">
          <span className="font-bold text-sm">{ID}</span>
          <button
            onClick={handleCopy}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold text-white ${
              cp ? 'bg-green-600' : 'bg-blue-700'
            }`}
          >
            {cp ? '已复制' : <><Copy size={12} /> 复制</>}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function PriceHikeClient() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ✅ Service Schema（只给 Google 看） */}
      <PriceHikeServiceSchema />

      <div className="min-h-screen bg-white text-slate-900">
        <WeChatModal open={open} onClose={() => setOpen(false)} />

        {/* 顶部 */}
        <nav className="border-b px-6 py-4">
          <div className="max-w-7xl mx-auto flex justify-between">
            <Link href="/internet" className="font-black">← 返回宽带</Link>
            <button onClick={() => setOpen(true)} className="text-blue-700 font-black">
              客服咨询
            </button>
          </div>
        </nav>

        {/* Hero */}
        <section className="py-12 bg-slate-50 text-center px-6">
          <p className="mb-5 text-sm font-bold tracking-wide text-blue-700">宽带账单变化判断指南</p>

          <h1 className="text-3xl md:text-5xl font-black mb-4">
            宽带优惠到期后为什么会涨价？
          </h1>

          <p className="max-w-2xl mx-auto text-slate-600 mb-8">
            宽带促销价通常只在约定期限内适用；优惠结束后，账单中的基础月费可能恢复为当时适用的标准月费。AutoPay 折扣、设备费、speed tier、bundle 或运营商价格调整也可能改变总额。应先比较账单项目和促销条款，再判断是否需要调整。
          </p>

          <button
            onClick={() => setOpen(true)}
            className="px-10 py-4 bg-blue-700 text-white rounded-2xl font-black shadow-xl"
          >
            免费检查我的账单
          </button>
        </section>

        <section className="py-12 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black mb-3">宽带优惠到期后，账单为什么会涨价？</h2>
            <p className="max-w-3xl text-slate-700 leading-7 mb-6">
              如果账单中的促销折扣结束，基础月费可能恢复到该账户当时适用的标准价格。账单总额也可能同时受到其他项目变化影响，因此需要逐项核对，不能只凭总额判断。
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                ['促销价结束', '核对 promotion 的期限、折扣金额和结束日期；以账单及运营商条款为准。'],
                ['标准月费恢复', '比较促销前后基础套餐费用，确认变化是否出现在同一服务项目。'],
                ['AutoPay 折扣变化', '查看自动付款或 Paperless 折扣是否仍符合账户当前条件。'],
                ['设备费变化', '核对 Modem / Router 租赁、设备促销或设备记录是否变化。'],
                ['Speed tier / bundle 变化', '确认速度档位、组合服务和相应折扣是否被调整。'],
                ['运营商价格调整', '查看运营商通知和账单基础服务费的变化日期，确认是否影响后续月份。'],
              ].map(([title, detail]) => (
                <article key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="font-black mb-2">{title}</h3>
                  <p className="leading-7 text-slate-700">{detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 px-6 bg-slate-50">
          <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
            <article>
              <h2 className="text-2xl font-black mb-4">怎么判断是不是优惠到期？</h2>
              <ol className="list-decimal pl-5 space-y-3 leading-7 text-slate-700">
                <li>对比本月和上月账单中的相同服务项目。</li>
                <li>查找 promotion、discount 或 credit 行及对应金额。</li>
                <li>查看是否有 expiration 或 promotional pricing 相关说明。</li>
                <li>核对 base plan 是否恢复为标准月费。</li>
                <li>排除 installation、activation 或 prorated charge 等一次性费用。</li>
              </ol>
              <p className="mt-4 leading-7 text-slate-700">如果账单没有标明促销期限或项目含义不清，记录变化的行项目和日期，再向运营商核实；不要仅凭总额推断原因。</p>
            </article>
            <article className="rounded-2xl border border-blue-200 bg-white p-6">
              <h2 className="text-2xl font-black mb-4">优惠到期后一定要换运营商吗？</h2>
              <p className="leading-7 text-slate-700">不一定。先比较当前标准价、现有服务质量、设备和安装成本，以及新运营商促销结束后的长期成本，再结合实际使用需求和账户条件决定是否换套餐或换运营商。促销价格不代表之后的长期费用。</p>
              <p className="mt-4 leading-7 text-slate-700">如果仍不确定费用是否会持续，可查看<a href="/internet/faq" className="font-semibold text-blue-700 underline">宽带账单 FAQ</a>中的设备费、AutoPay 和一次性费用说明。</p>
            </article>
          </div>
        </section>

        {/* 三步 */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
            {[
              { icon: <TrendingUp />, title: '账单审核', desc: '检查隐藏涨价与优惠失效' },
              { icon: <Zap />, title: '转网 / 新户', desc: '结合地址和账户资格比较可选方案' },
              { icon: <CheckCircle2 />, title: 'Retention 谈价', desc: '指导或代沟通争取优惠' },
            ].map((i, idx) => (
              <div key={idx} className="p-8 bg-slate-50 rounded-2xl">
                <div className="mb-4 text-blue-600">{i.icon}</div>
                <h3 className="font-black mb-2">{i.title}</h3>
                <p className="text-sm text-slate-600">{i.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 px-6 border-t text-center">
          <button
            onClick={() => setOpen(true)}
            className="w-full max-w-3xl mx-auto py-8 bg-slate-900 text-white rounded-[2.5rem] font-black text-xl"
          >
            添加客服 · 开始账单优化 <ArrowRight className="inline ml-2" />
          </button>
        </section>

        <footer className="py-8 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} 美国鸿达电讯 · 宽带账单检查服务
        </footer>
      </div>
    </>
  );
}
