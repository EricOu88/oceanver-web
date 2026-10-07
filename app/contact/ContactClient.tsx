'use client';

import Link from 'next/link';
import Image from 'next/image';
import CopyWechatButton from '@/app/components/CopyWechatButton';
import { CommunityDiscussionClientOnly } from '@/app/components/community/CommunityDiscussionByPath';
import { ArrowRight, Home, Mail, MessageCircle, Phone, Search } from 'lucide-react';

const CONTACT_PAGE_SCHEMA_JSON =
  '{"@context":"https://schema.org","@type":"ContactPage","@id":"https://oceanver.com/contact#contactpage","url":"https://oceanver.com/contact","name":"问题核实与联系 | 美国鸿达电讯","description":"手机或宽带问题涉及真实账户、资格、地址、设备或后台状态时的人工核实入口。","inLanguage":"zh-CN","about":{"@id":"https://oceanver.com/#organization"}}';

export default function ContactClient() {
  const hotline = '510-849-6191';
  const hotlineLink = '15108496191';
  const wechatId = '美国鸿达电讯';

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: CONTACT_PAGE_SCHEMA_JSON }} />
      <main className="min-h-screen bg-[#FCFDFE] px-5 py-10 text-[#202D3A] md:px-6 md:py-14">
        <div className="mx-auto max-w-[1120px] space-y-10 md:space-y-12">
          <header>
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#246B95] hover:text-[#103B60]">
              <Home className="h-4 w-4" aria-hidden="true" />
              返回首页
            </Link>
            <p className="mt-6 inline-flex rounded-full bg-[#F4F8FA] px-3 py-1 text-sm font-semibold text-[#246B95]">
              人工核实入口
            </p>
            <h1 className="mt-4 text-3xl font-black leading-tight md:text-4xl">只有网页无法确认的条件，才需要进入人工</h1>
            <p className="mt-4 max-w-[820px] text-base leading-[1.8] text-[#526170] md:text-lg">
              真实账户价格、资格、地址覆盖、设备余额、Trade-in、Bill Credit、转号后台状态等，
              都需要结合实际资料核实。如果只是还没判断清楚问题，先回到 Diagnosis。
            </p>
          </header>

          <section className="grid gap-4 md:grid-cols-3">
            <Link href="/cellphone/diagnosis" className="rounded-2xl border border-[#D5E5EC] bg-white p-5 hover:border-[#246B95]">
              <Search className="text-[#2786A5]" size={22} />
              <h2 className="mt-3 font-black">手机问题还没判断清楚</h2>
              <span className="mt-3 inline-flex items-center gap-2 font-bold text-[#246B95]">回手机诊断 <ArrowRight size={15} /></span>
            </Link>
            <Link href="/internet/diagnosis" className="rounded-2xl border border-[#D5E5EC] bg-white p-5 hover:border-[#246B95]">
              <Search className="text-[#2786A5]" size={22} />
              <h2 className="mt-3 font-black">宽带问题还没判断清楚</h2>
              <span className="mt-3 inline-flex items-center gap-2 font-bold text-[#246B95]">回宽带诊断 <ArrowRight size={15} /></span>
            </Link>
            <Link href="/bill-optimization" className="rounded-2xl border border-[#D5E5EC] bg-white p-5 hover:border-[#246B95]">
              <Search className="text-[#2786A5]" size={22} />
              <h2 className="mt-3 font-black">只是账单变贵</h2>
              <span className="mt-3 inline-flex items-center gap-2 font-bold text-[#246B95]">先做账单检查 <ArrowRight size={15} /></span>
            </Link>
          </section>

          <section aria-labelledby="manual-check-title">
            <h2 id="manual-check-title" className="text-2xl font-black">这些情况适合人工核实</h2>
            <ul className="mt-5 grid gap-3 text-base leading-[1.8] text-[#526170] sm:grid-cols-2">
              <li className="rounded-xl border border-[#D5E5EC] bg-white p-4">当前账户真实价格、套餐层级或资格</li>
              <li className="rounded-xl border border-[#D5E5EC] bg-white p-4">Promotion、Trade-in、Upgrade 或 Bill Credit 状态</li>
              <li className="rounded-xl border border-[#D5E5EC] bg-white p-4">设备余额、IMEI、eSIM 或解锁状态</li>
              <li className="rounded-xl border border-[#D5E5EC] bg-white p-4">Port / Transfer PIN / 号码后台状态</li>
              <li className="rounded-xl border border-[#D5E5EC] bg-white p-4">地址覆盖、安装、搬家或订单状态</li>
              <li className="rounded-xl border border-[#D5E5EC] bg-white p-4">账单争议、退款、设备归还等账户记录</li>
            </ul>
          </section>

          <section aria-label="联系方式" className="grid items-stretch gap-5 md:grid-cols-3">
            <a href="#wechat-qr" className="flex h-full flex-col rounded-2xl border border-[#D5E5EC] bg-white p-6 transition hover:border-[#246B95]">
              <MessageCircle className="h-6 w-6 text-[#2786A5]" />
              <h2 className="mt-4 text-xl font-bold">微信</h2>
              <p className="mt-2 flex-1 leading-[1.8] text-[#526170]">适合说明账户问题、发送已遮挡敏感信息的截图。</p>
              <span className="mt-5 font-semibold text-[#164B78]">查看二维码 →</span>
            </a>
            <a href={`tel:${hotlineLink}`} className="flex h-full flex-col rounded-2xl border border-[#D5E5EC] bg-white p-6 transition hover:border-[#246B95]">
              <Phone className="h-6 w-6 text-[#2786A5]" />
              <h2 className="mt-4 text-xl font-bold">电话</h2>
              <p className="mt-2 flex-1 leading-[1.8] text-[#526170]">适合需要快速说明实际账户情况。</p>
              <span className="mt-5 font-semibold text-[#164B78]">{hotline}</span>
            </a>
            <a href={`sms:${hotlineLink}`} className="flex h-full flex-col rounded-2xl border border-[#D5E5EC] bg-white p-6 transition hover:border-[#246B95]">
              <Mail className="h-6 w-6 text-[#2786A5]" />
              <h2 className="mt-4 text-xl font-bold">短信</h2>
              <p className="mt-2 flex-1 leading-[1.8] text-[#526170]">适合先发送简短问题和联系方式。</p>
              <span className="mt-5 font-semibold text-[#164B78]">发送短信 →</span>
            </a>
          </section>

          <section id="wechat-qr" className="grid items-center gap-6 rounded-2xl border border-[#D5E5EC] bg-white p-6 md:grid-cols-[1fr_auto] md:p-8">
            <div>
              <h2 className="text-2xl font-black">微信咨询二维码</h2>
              <p className="mt-3 leading-[1.8] text-[#526170]">
                添加前请遮挡完整账户号码、完整地址、SSN、银行卡、身份证件和密码等敏感信息。
              </p>
              <p className="mt-4 font-semibold">微信号：{wechatId}</p>
              <div className="mt-3"><CopyWechatButton wechatId={wechatId} /></div>
            </div>
            <Image src="/wechat-qr.jpg" alt="美国鸿达电讯微信咨询二维码" width={192} height={192} className="mx-auto rounded-xl border border-[#D5E5EC] object-cover md:mx-0" />
          </section>

          <p className="text-sm leading-[1.8] text-[#526170]">
            美国鸿达电讯提供面向美国中文用户的通信问题整理与账户条件核实，不代表任何运营商官方。
            正式账单争议、退款、停机、维修或后台操作仍可能需要由运营商官方完成。
          </p>
        </div>
      </main>
      <div className="mx-auto max-w-[1120px] px-5 md:px-6">
        <CommunityDiscussionClientOnly pageKey="page:/contact" showContactLink={false} />
      </div>
    </>
  );
}
