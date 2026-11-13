'use client'

import { Phone, Mail, ArrowRight, Star } from 'lucide-react'

const PHONE_NUMBER = '15108496191' // For tel: and sms: links
const PHONE_DISPLAY = '510-849-6191' // For display text

export default function ContactEntry({
  title = '看完还是不确定？',
  subtitle = '如果涉及具体账单、账户资格、地址覆盖或促销条件，可以联系中文客服进一步核实。',
  variant = 'default',
  showGoogleReviewCta = false,
}: {
  title?: string
  subtitle?: string
  variant?: 'default' | 'homepage'
  showGoogleReviewCta?: boolean
}) {
  if (variant === 'homepage') {
    return (
      <section data-contact-location="homepage_contact" className="homepage-contact-card grid gap-8 rounded-[30px] border border-[#E8EDF1] bg-white p-6 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-12 md:p-10">
        <div>
          <h2 className="text-2xl font-black text-slate-900 md:text-3xl">{title}</h2>
          <p className="mt-4 text-[15px] leading-7 text-slate-600">{subtitle}</p>
          {showGoogleReviewCta && (
            <a
              href="https://search.google.com/local/reviews?placeid=ChIJX6ngelzGj4ARrdcNVV0c-Gc"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#164B78] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#103B60] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2786A5] focus-visible:ring-offset-2"
            >
              <Star size={16} fill="currentColor" aria-hidden="true" />
              查看 Google 评论
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          )}
        </div>
        <div className="divide-y divide-[#E9EEF2]">
          <a data-contact-method="phone" href={`tel:${PHONE_NUMBER}`} className="grid grid-cols-[auto_1fr_auto] items-center gap-4 py-4 first:pt-0">
            <Phone size={22} aria-hidden="true" className="text-[#2786A5]" />
            <span className="min-w-0">
              <span className="block font-bold text-[#202D3A]">Oceanver 问题核实专线</span>
              <span className="mt-1 block text-sm leading-6 text-[#526170]">电话联系中文客服</span>
            </span>
            <span className="whitespace-nowrap text-sm font-semibold text-[#164B78]">{PHONE_DISPLAY}</span>
          </a>
          <a data-contact-method="sms" href={`sms:${PHONE_NUMBER}`} className="grid grid-cols-[auto_1fr_auto] items-center gap-4 py-4 last:pb-0">
            <Mail size={22} aria-hidden="true" className="text-[#2786A5]" />
            <span className="min-w-0">
              <span className="block font-bold text-[#202D3A]">短信咨询</span>
              <span className="mt-1 block text-sm leading-6 text-[#526170]">请说明账单、设备或网络问题</span>
            </span>
            <span className="text-sm font-semibold text-[#526170]">中文服务</span>
          </a>
        </div>
      </section>
    )
  }

  return (
    <section data-contact-location="contact_entry" className="bg-white border border-[#D8E2EA] rounded-3xl p-4 md:p-6 space-y-4">
      <div className="text-center space-y-1">
        <h2 className="text-xl md:text-2xl font-black text-slate-900">{title}</h2>
        <p className="text-slate-600 text-sm md:text-base">{subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-2 md:gap-3 items-stretch">
        <a
          data-contact-method="phone"
          href={`tel:${PHONE_NUMBER}`}
          className="bg-white border-2 border-blue-700 text-blue-700 hover:bg-blue-50 rounded-xl p-4 md:p-5 flex flex-col items-center text-center gap-2 transition-all shadow-sm hover:shadow-md transform hover:scale-105"
        >
          <Phone size={28} className="text-blue-700 md:hidden" strokeWidth={2} />
          <Phone size={32} className="text-blue-700 hidden md:block" strokeWidth={2} />
          <div className="space-y-1">
            <h3 className="text-base md:text-lg font-black text-blue-700">Oceanver 问题核实专线</h3>
            <p className="text-xs text-slate-600 leading-relaxed">电话联系中文客服</p>
            <p className="text-xs text-slate-700 font-semibold mt-1.5">{PHONE_DISPLAY}</p>
          </div>
        </a>

        <a
          data-contact-method="sms"
          href={`sms:${PHONE_NUMBER}`}
          className="bg-white border-2 border-blue-700 text-blue-700 hover:bg-blue-50 rounded-xl p-4 md:p-5 flex flex-col items-center text-center gap-2 transition-all shadow-sm hover:shadow-md transform hover:scale-105"
        >
          <Mail size={28} className="text-blue-700 md:hidden" strokeWidth={2} />
          <Mail size={32} className="text-blue-700 hidden md:block" strokeWidth={2} />
          <div className="space-y-1">
            <h3 className="text-base md:text-lg font-black text-blue-700">短信咨询</h3>
            <p className="text-xs text-slate-600 leading-relaxed">请说明账单、设备或网络问题</p>
            <p className="text-xs text-slate-700 font-semibold mt-1.5">{PHONE_DISPLAY}</p>
          </div>
        </a>
      </div>
    </section>
  )
}
