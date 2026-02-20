'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  X,
  MessageCircle,
  Copy,
  ArrowRight,
  CheckCircle2,
  Building2,
  Home,
} from 'lucide-react';

/* ================= WeChat Modal ================= */

function WeChatModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [copied, setCopied] = useState(false);
  const ID = '美国鸿达电讯';

  const handleCopy = () => {
    navigator.clipboard.writeText(ID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
      <div
        className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-[2rem] shadow-2xl p-6 w-full max-w-sm text-center">
        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-slate-500 hover:text-slate-800"
        >
          <X size={24} />
        </button>

        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-green-700">
          <MessageCircle size={32} />
        </div>

        <h3 className="text-xl font-black text-slate-900 mb-1">
          添加在线中文客服
        </h3>
        <p className="text-slate-600 mb-6 text-sm font-medium">
          查地址覆盖 · 对比套餐 · 处理涨价
        </p>

        <div className="relative aspect-square w-48 mx-auto rounded-2xl overflow-hidden border">
          <Image
            src="/wechat-qr.jpg"
            alt="微信客服二维码"
            fill
            unoptimized
            className="object-cover"
          />
        </div>

        <div className="mt-6 flex items-center justify-between bg-slate-50 p-3 rounded-xl border">
          <span className="font-black text-sm">{ID}</span>
          <button
            onClick={handleCopy}
            className={`px-3 py-1.5 rounded-lg text-xs font-black text-white flex items-center gap-1 ${
              copied ? 'bg-green-600' : 'bg-blue-700'
            }`}
          >
            {copied ? '已复制' : (
              <>
                <Copy size={12} /> 复制
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ================= Choice Card ================= */

function ChoiceCard({
  icon,
  badge,
  title,
  who,
  highlights,
  concernTitle,
  concerns,
  ctaText,
  onCta,
}: {
  icon: React.ReactNode;
  badge: string;
  title: string;
  who: string;
  highlights: string[];
  concernTitle: string;
  concerns: string[];
  ctaText: string;
  onCta: () => void;
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-[2.25rem] p-6 shadow-sm hover:shadow-md transition">
      <div className="flex items-start justify-between gap-6 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-black">
            {badge}
          </div>
          <h2 className="text-2xl md:text-3xl font-black mt-4">
            {title}
          </h2>
          <p className="text-slate-600 mt-2 font-medium">{who}</p>
        </div>
        <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-800">
          {icon}
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <div className="text-sm font-black text-slate-900 mb-2">
            用户最在意的优点
          </div>
          <ul className="space-y-2 text-slate-700 font-medium">
            {highlights.map((t) => (
              <li key={t} className="flex items-start gap-2">
                <CheckCircle2
                  size={18}
                  className="mt-0.5 text-green-600"
                />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-2">
          <div className="text-sm font-black text-slate-900 mb-2">
            {concernTitle}
          </div>
          <ul className="space-y-2 text-slate-700 font-medium">
            {concerns.map((t) => (
              <li key={t} className="flex items-start gap-2">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-400" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={onCta}
          className="w-full mt-6 rounded-2xl bg-blue-700 hover:bg-blue-800 text-white font-black py-3.5 flex items-center justify-center gap-2 transition"
        >
          {ctaText} <ArrowRight size={18} />
        </button>

        <p className="text-[12px] text-slate-500 font-medium text-center">
          同一个地址：套餐 / 价格 / 是否合约差异很大，必须查地址才准
        </p>
      </div>
    </div>
  );
}

/* ================= Page UI ================= */

export default function XfinityClient() {
  const [wechatOpen, setWechatOpen] = useState(false);

  return (
    <>
      <WeChatModal
        open={wechatOpen}
        onClose={() => setWechatOpen(false)}
      />

      <main className="min-h-screen bg-white text-slate-900">
        {/* 顶部 */}
        <div className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
            <Link
              href="/internet/providers"
              className="font-black text-sm text-slate-800 hover:text-blue-700 transition"
            >
              ← 返回宽带对比页
            </Link>

            <div className="flex items-center gap-2">
              <a
                href="tel:15108496191"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white font-black text-xs hover:bg-slate-50 transition"
              >
                <Phone size={16} className="text-blue-700" />
                电话咨询
              </a>
              <button
                onClick={() => setWechatOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-700 text-white font-black text-xs hover:bg-blue-800 transition"
              >
                <MessageCircle size={16} />
                微信在线咨询
              </button>
            </div>
          </div>
        </div>

        {/* HERO */}
        <section className="bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-6 pt-12 pb-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-black">
              Xfinity 宽带 · 住家 / 商业怎么选（用户视角）
            </div>

            <h1 className="text-4xl md:text-5xl font-black mt-5 leading-tight">
              Xfinity 宽带在湾区速度稳定吗？住家和商业宽带有什么区别？
            </h1>

            <p className="text-slate-700 font-medium mt-4 leading-relaxed">
              同样是 Xfinity：住家宽带与商业宽带在
              <strong>价格结构、稳定性、合约</strong> 上差异很大。
              如需了解更多服务，请返回<Link href="/" className="text-blue-600 hover:text-blue-700 font-semibold underline">鸿达电讯 Bay Media Star 首页</Link>。
              常见问题如<Link href="/internet/xfinity/faq" className="text-blue-600 hover:text-blue-700 font-semibold underline">Xfinity 宽带优惠期结束后会涨价吗？</Link>都有详细解答。
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setWechatOpen(true)}
                className="px-6 py-3.5 rounded-2xl bg-blue-700 hover:bg-blue-800 text-white font-black flex items-center justify-center gap-2 transition"
              >
                查我这个地址能装什么 <ArrowRight size={18} />
              </button>

              <Link
                href="/internet/price-hike"
                className="px-6 py-3.5 rounded-2xl border-2 border-slate-200 bg-white font-black hover:bg-slate-50 transition flex items-center justify-center gap-2"
              >
                优惠到期涨价怎么办 <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* 住家 / 商业 */}
        <section className="py-10">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-6">
            <ChoiceCard
              icon={<Home size={22} />}
              badge="住家宽带 Residential"
              title="更看重促销与性价比"
              who="适合：家庭 / 租房 / 公寓"
              highlights={[
                '覆盖广，促销多',
                '价格前期更友好',
                '适合价格敏感用户',
              ]}
              concernTitle="用户最怕的问题"
              concerns={[
                '优惠期结束后可能涨价',
                '是否合约需查地址',
                '上传速度不如光纤',
              ]}
              ctaText="我想选住家，先查地址"
              onCta={() => setWechatOpen(true)}
            />

            <ChoiceCard
              icon={<Building2 size={22} />}
              badge="商业宽带 Business"
              title="更看重稳定与营业"
              who="适合：公司 / 店铺 / POS / 监控"
              highlights={[
                '稳定性更高',
                '价格结构更稳定',
                '支持静态 IP',
              ]}
              concernTitle="用户需要知道"
              concerns={[
                '月费通常更高',
                '部分地址只能装商业',
                '可能需要合约',
              ]}
              ctaText="我需要商业，先查地址"
              onCta={() => setWechatOpen(true)}
            />
          </div>
        </section>

        {/* Xfinity 常见问题模块 - 反向链接到独立 FAQ 页面 */}
        <section className="bg-slate-50 py-12 border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 text-center">
              Xfinity 常见问题
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <Link
                href="/internet/xfinity/faq/xfinity-price-increase"
                className="block p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                  Xfinity 会不会涨价？促销结束后真实账单解析
                </h3>
                <p className="text-sm text-slate-600 line-clamp-2">
                  促销到期、设备费与附加费叠加，最容易导致账单突然变贵…
                </p>
              </Link>

              <Link
                href="/internet/xfinity/faq/xfinity-contract-early-termination"
                className="block p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                  Xfinity 有合约吗？提前取消会不会有违约金
                </h3>
                <p className="text-sm text-slate-600 line-clamp-2">
                  是否违约金取决于你当初选的 term agreement 与条款…
                </p>
              </Link>

              <Link
                href="/internet/xfinity/faq/xfinity-bill-changes"
                className="block p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                  Xfinity 账单为什么每个月都不一样？
                </h3>
                <p className="text-sm text-slate-600 line-clamp-2">
                  税费/附加费波动、折扣失效、首月按天计费都可能造成差异…
                </p>
              </Link>

              <Link
                href="/internet/xfinity/faq/xfinity-data-cap"
                className="block p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                  Xfinity 有流量上限吗？超了会怎么样
                </h3>
                <p className="text-sm text-slate-600 line-clamp-2">
                  部分地区有 data cap，重度用户需要评估 Unlimited Data…
                </p>
              </Link>

              <Link
                href="/internet/xfinity/faq/xfinity-outage"
                className="block p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                  Xfinity 经常断网怎么办？Outage 常见原因
                </h3>
                <p className="text-sm text-slate-600 line-clamp-2">
                  先判断区域 Outage，再排查线路/分线器/信号噪声与设备问题…
                </p>
              </Link>
            </div>

            <div className="text-center">
              <Link
                href="/internet/xfinity/faq"
                className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-colors shadow-lg"
              >
                查看所有 Xfinity FAQ
                <ArrowRight size={20} />
              </Link>
            </div>
            <p className="text-center text-slate-600 mt-6">
              如需了解更多服务，请返回<Link href="/" className="text-blue-600 hover:text-blue-700 font-semibold underline">鸿达电讯 Bay Media Star 首页</Link>。
            </p>
          </div>
        </section>

        <footer className="py-10 border-t border-slate-100 text-center text-xs text-slate-400 font-black">
          © {new Date().getFullYear()} BAY MEDIA STAR · XFINITY INTERNET
        </footer>
      </main>
    </>
  );
}
