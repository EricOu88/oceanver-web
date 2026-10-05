'use client';

import Link from 'next/link';
import Image from 'next/image';
import CopyWechatButton from '@/app/components/CopyWechatButton';
import { Home, Mail, MessageCircle, Phone } from 'lucide-react';

const CONTACT_PAGE_SCHEMA_JSON =
  '{"@context":"https://schema.org","@type":"ContactPage","@id":"https://oceanver.com/contact#contactpage","url":"https://oceanver.com/contact","name":"问题核实与联系 | 美国鸿达电讯","description":"手机或宽带账单、账户、设备、转号、地址覆盖等问题无法仅靠公开信息判断时，可通过微信、电话或短信进一步核实。","inLanguage":"zh-CN","about":{"@id":"https://oceanver.com/#organization"}}';

function ContactSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: CONTACT_PAGE_SCHEMA_JSON }}
    />
  );
}

export default function ContactClient() {
  const hotline = '510-849-6191';
  const hotlineLink = '15108496191';
  const wechatId = '美国鸿达电讯';

  return (
    <>
      <ContactSchema />
      <main className="min-h-screen bg-[#FCFDFE] px-5 py-10 text-[#202D3A] md:px-6 md:py-14">
        <div className="mx-auto max-w-[1120px] space-y-10 md:space-y-12">
          <header>
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#246B95] hover:text-[#164B78]">
              <Home className="h-4 w-4" aria-hidden="true" />
              返回首页
            </Link>
            <h1 className="mt-6 text-3xl font-black leading-tight md:text-4xl">问题核实与联系</h1>
            <p className="mt-4 max-w-[820px] text-base leading-[1.8] text-[#526170] md:text-lg">
              如果问题涉及具体账单、账户资格、地址覆盖、设备余额、Trade-in、转号资料或当前优惠，需要结合实际情况进一步核实。
            </p>
          </header>

          <section aria-label="联系方式" className="grid items-stretch gap-5 md:grid-cols-3">
            <a href="#wechat-qr" className="flex h-full flex-col rounded-2xl border border-[#D8E2EA] bg-white p-6 transition hover:border-[#246B95] hover:shadow-sm">
              <MessageCircle className="h-6 w-6 text-[#2786A5]" aria-hidden="true" />
              <h2 className="mt-4 text-xl font-bold">微信咨询</h2>
              <p className="mt-2 flex-1 leading-[1.8] text-[#526170]">适合发送账单截图、设备状态或问题说明</p>
              <span className="mt-5 font-semibold text-[#164B78]">查看微信二维码 →</span>
            </a>

            <a href={`tel:${hotlineLink}`} className="flex h-full flex-col rounded-2xl border border-[#D8E2EA] bg-white p-6 transition hover:border-[#246B95] hover:shadow-sm">
              <Phone className="h-6 w-6 text-[#2786A5]" aria-hidden="true" />
              <h2 className="mt-4 text-xl font-bold">电话咨询</h2>
              <p className="mt-2 flex-1 leading-[1.8] text-[#526170]">适合需要快速说明具体情况</p>
              <span className="mt-5 font-semibold text-[#164B78]">{hotline}</span>
              <span className="mt-1 text-sm text-[#526170]">美国号码，中文服务</span>
            </a>

            <a href={`sms:${hotlineLink}`} className="flex h-full flex-col rounded-2xl border border-[#D8E2EA] bg-white p-6 transition hover:border-[#246B95] hover:shadow-sm">
              <Mail className="h-6 w-6 text-[#2786A5]" aria-hidden="true" />
              <h2 className="mt-4 text-xl font-bold">短信咨询</h2>
              <p className="mt-2 flex-1 leading-[1.8] text-[#526170]">适合先发送简短问题和联系方式</p>
              <span className="mt-5 font-semibold text-[#164B78]">发送短信 →</span>
            </a>
          </section>

          <section id="wechat-qr" aria-labelledby="wechat-qr-title" className="grid items-center gap-6 rounded-2xl border border-[#D8E2EA] bg-white p-6 md:grid-cols-[1fr_auto] md:gap-10 md:p-8">
            <div>
              <h2 id="wechat-qr-title" className="text-2xl font-black">微信咨询二维码</h2>
              <p className="mt-3 leading-[1.8] text-[#526170]">添加微信后，可说明需要核实的问题。请先遮挡账单中的账户号码、完整地址等敏感信息。</p>
              <p className="mt-4 font-semibold text-[#202D3A]">微信号：{wechatId}</p>
              <div className="mt-3">
                <CopyWechatButton wechatId={wechatId} />
              </div>
            </div>
            <Image
              src="/wechat-qr.jpg"
              alt="美国鸿达电讯微信咨询二维码"
              width={192}
              height={192}
              className="mx-auto rounded-xl border border-[#D8E2EA] object-cover md:mx-0"
            />
          </section>

          <section aria-labelledby="manual-check-title">
            <h2 id="manual-check-title" className="text-2xl font-black">什么情况适合人工核实？</h2>
            <ul className="mt-5 grid gap-3 text-base leading-[1.8] text-[#526170] sm:grid-cols-2">
              <li className="rounded-xl border border-[#D8E2EA] bg-white p-4">最近两期账单金额或项目发生明显变化</li>
              <li className="rounded-xl border border-[#D8E2EA] bg-white p-4">不确定费用是一次性还是会长期持续</li>
              <li className="rounded-xl border border-[#D8E2EA] bg-white p-4">设备仍有余额、Trade-in 或账单抵扣</li>
              <li className="rounded-xl border border-[#D8E2EA] bg-white p-4">准备转号但不确定号码、PIN 或设备状态</li>
              <li className="rounded-xl border border-[#D8E2EA] bg-white p-4">新地址覆盖、安装或搬家条件不明确</li>
              <li className="rounded-xl border border-[#D8E2EA] bg-white p-4">公开信息无法确认账户资格或当前优惠</li>
            </ul>
          </section>

          <section aria-labelledby="privacy-title" className="rounded-2xl border border-[#D8E2EA] bg-[#EDF5F9] p-6 md:p-8">
            <h2 id="privacy-title" className="text-2xl font-black">联系前请注意隐私</h2>
            <p className="mt-3 max-w-[900px] leading-[1.8] text-[#526170]">
              可以提供账单项目、费用变化、设备状态、问题发生时间和地址覆盖相关信息，但不要在公开页面或留言中发送完整 SSN、银行卡号码、身份证件、完整账户密码或其他敏感信息。
            </p>
          </section>

          <p className="max-w-[900px] text-sm leading-[1.8] text-[#526170]">
            美国鸿达电讯提供面向美国中文用户的通信问题整理与判断信息，不代表任何运营商官方。涉及正式账单争议、退款、停机、设备维修或账户后台操作时，可能仍需由运营商官方处理。
          </p>
        </div>
      </main>
    </>
  );
}
