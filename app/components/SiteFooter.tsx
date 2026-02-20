'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SiteFooter() {
  const pathname = usePathname() || '/';
  const isEn = pathname.startsWith('/en');

  // Google Maps links
  const maps = {
    addr1:
      'https://www.google.com/maps?q=46292+Warm+Springs+Blvd+%23606,+Fremont,+CA+94539',
    addr2:
      'https://www.google.com/maps?q=338+Barber+Lane,+Milpitas,+CA+95035',
  };

  // 文案与路径基准
  const t = isEn
    ? {
        wechatTitle: 'Online WeChat Support',
        wechatIntro: 'Scan with the WeChat app to connect with us.',
        wechatSteps: [
          'Open WeChat.',
          'Tap “+” and choose “Scan”.',
          'Point at the QR code and follow the prompt to add us.',
          'Send your name and what you need (cell / internet / security).',
        ],
        introLines: [
          'Best deals and help on AT&T, Comcast/Xfinity, Frontier,',
          'Windstream WiFi broadband (new & existing customers),',
          'and ADT security systems.',
        ],
        email: 'Email',
        phone: 'Phone',
        stores: 'Store Locations',
        addr1:
          '338 Barber Lane, Milpitas, CA 95035 (inside 99 Ranch Market area)',
        addr2:
          '46292 Warm Springs Blvd #606, Fremont, CA 94539 (Yong He Plaza)',
        links: 'More',
        privacy: 'Privacy Policy',
        about: 'About Us',
        copyright: 'All rights reserved.',
        base: '/en',
      }
    : {
        wechatTitle: '在线客服微信公众号',
        wechatIntro: '使用微信扫码添加我们。',
        wechatSteps: [
          '长按二维码',
          '微信发送给朋友',
          '选择发送给自己的微信',
          '点击打开二维码，长按二维码，选择“美国鸿达电讯”，联系在线客服',
        ],
        introLines: [
          '鸿达电讯提供最优惠的 AT&T、Comcast/Xfinity、',
          'Frontier、Windstream WiFi 宽带网络（包括新、老客户）、',
          '以及 ADT 报警安防系统。',
        ],
        email: '邮箱',
        phone: '电话',
        stores: '店铺地址：',
        addr1:
          '46292 Warm Springs Blvd #606, Fremont, CA 94539（总店：超市广场右侧）',
        addr2:
          '338 Barber Lane, Milpitas, CA 95035（分店：大华超市内）',
        links: '更多链接',
        privacy: '隐私政策',
        about: '关于我们',
        copyright: '保留所有权利。',
        base: '', // 中文 = 根路径
      };

  // 安全生成链接：中文 /xxx，英文 /en/xxx
  const href = (path: string) => {
    if (!path.startsWith('/')) return `${t.base}/${path}`;
    return t.base ? `${t.base}${path}` : path;
  };

  return (
    <footer className="bg-gradient-to-br from-[#4B70DD] via-[#5E8EF7] to-[#8AB9FF] text-white">
      {/* ===== WeChat QR Section ===== */}
      <div
        id="wechat"
        className="mx-auto max-w-7xl px-4 pt-10 bg-white/5 rounded-2xl backdrop-blur-sm shadow-inner"
      >
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          <Link href="/brands/wechat.png" target="_blank" className="shrink-0">
            <Image
              src="/brands/wechat.png"
              alt="WeChat QR"
              width={220}
              height={220}
              priority
              className="rounded-md bg-white border border-white/20 shadow"
            />
          </Link>
          <div>
            <h4 className="text-2xl font-semibold">{t.wechatTitle}</h4>
            <p className="mt-2 text-white/90">{t.wechatIntro}</p>
            <ol className="mt-3 list-decimal list-inside space-y-1 text-white/90">
              {t.wechatSteps.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* ===== Main Grid (2 Columns) ===== */}
      <div className="mx-auto max-w-7xl px-4 py-12 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left */}
          <div>
            <div className="mb-6">
              <Image
                src="/bms-logo.png"
                alt="Bay Media Star"
                width={260}
                height={72}
                priority
              />
            </div>
            <p className="text-white/90 leading-relaxed">
              {t.introLines.map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
            <div className="mt-6 space-y-2 text-white/90">
              <div>
                <span className="font-semibold">{t.email}：</span>
                <a
                  href="mailto:info@baymediastar.com"
                  className="underline underline-offset-2 hover:text-white"
                >
                  info@baymediastar.com
                </a>
              </div>
              <div>
                <span className="font-semibold">{t.phone}：</span>
                <a
                  href="tel:15108496191"
                  className="underline underline-offset-2 hover:text-white"
                >
                  510-849-6191
                </a>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="lg:pl-12">
            <h4 className="text-2xl font-semibold tracking-wide">
              {t.stores}
              <span className="ml-2 text-yellow-300">▸</span>
            </h4>

            <ul className="mt-6 space-y-6">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-yellow-300 inline-block" />
                <a
                  href={maps.addr1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 underline decoration-white/30 underline-offset-4 hover:text-white"
                >
                  {t.addr1}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-yellow-300 inline-block" />
                <a
                  href={maps.addr2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/90 underline decoration-white/30 underline-offset-4 hover:text-white"
                >
                  {t.addr2}
                </a>
              </li>
            </ul>

            {/* Privacy & About */}
            <div className="mt-8">
              <h5 className="font-semibold">{t.links}</h5>
              <ul className="mt-2 space-y-1 text-white/90">
                <li>
                  <Link
                    href={href('/bill-optimization')}
                    className="underline underline-offset-4 decoration-white/30 hover:text-white"
                  >
                    {isEn ? 'Bill Optimization' : '账单涨价判断'}
                  </Link>
                </li>
                <li>
                  <Link
                    href={href('/privacy')}
                    className="underline underline-offset-4 decoration-white/30 hover:text-white"
                  >
                    {t.privacy}
                  </Link>
                </li>
                <li>
                  <Link
                    href={href('/about')}
                    className="underline underline-offset-4 decoration-white/30 hover:text-white"
                  >
                    {t.about}
                  </Link>
                </li>
                <li>
                  <Link
                    href={href('/blog/bay-area-internet-guide')}
                    className="text-white/70 underline underline-offset-4 decoration-white/30 hover:text-white transition-colors"
                  >
                    {isEn ? '2026 Bay Area Internet Guide' : '2026 湾区宽带指南'}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ===== CTA Button ===== */}
      <div className="text-center mt-10">
        <a
          href={href('/contact')}
          className="inline-block bg-gradient-to-r from-green-500 to-green-700 text-white px-8 py-4 rounded-2xl font-bold shadow-[0_0_10px_rgba(34,197,94,0.5)] hover:shadow-[0_0_20px_rgba(34,197,94,0.8)] animate-pulse-slow transition-all duration-300"
        >
          💬 咨询客服，帮我推荐最划算的宽带网络手机方案 →
        </a>
        <p className="text-white/80 text-sm mt-3">
          我们将根据您的使用场景（个人 / 家庭 / 商业）推荐最优套餐
        </p>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            transform: scale(1);
            box-shadow: 0 0 10px rgba(34, 197, 94, 0.5);
          }
          50% {
            transform: scale(1.03);
            box-shadow: 0 0 20px rgba(34, 197, 94, 0.8);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 2.5s infinite;
        }
      `}</style>

      {/* ===== Bottom Bar ===== */}
      <div className="border-t border-white/20 mt-10">
        <div className="mx-auto max-w-7xl px-4 py-6 text-xs text-white/80">
          © {new Date().getFullYear()} Bay Media Star Inc. {t.copyright}
        </div>
      </div>
    </footer>
  );
}
