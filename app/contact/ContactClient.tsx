'use client';

import { FormEvent } from 'react';
import CopyWechatButton from '@/app/components/CopyWechatButton';
import StoreLocationSection from '@/app/components/StoreLocationSection';
import { Phone, MapPin, Home, Mail } from 'lucide-react';

/* ================== ContactPage Schema（只引用 LocalBusiness，不重复声明） ================== */
/* 使用常量 JSON 字符串避免 SSR/CSR 的 JSON.stringify 结果不一致导致 hydration 报错 */
const CONTACT_PAGE_SCHEMA_JSON =
  '{"@context":"https://schema.org","@type":"ContactPage","@id":"https://oceanver.com/contact#contactpage","url":"https://oceanver.com/contact","name":"联系我们 | 美国鸿达电讯","description":"联系美国鸿达电讯，前往 Fremont 门店或通过电话、微信获得手机与宽带中文一对一服务。","inLanguage":"zh-CN","about":{"@id":"https://oceanver.com/#localbusiness"}}';

function ContactSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: CONTACT_PAGE_SCHEMA_JSON }}
    />
  );
}

/* ================== 页面主体 ================== */
export default function ContactClient() {
  const hotline = '510-849-6191';
  const hotlineLink = '15108496191';
  const wechatId = '美国鸿达电讯';

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('留言已提交，我们会尽快通过电话或微信联系您。谢谢！');
  };

  return (
    <>
      <ContactSchema />

      <main className="bg-gray-50 min-h-screen py-8 md:py-12 px-4">
        <div className="max-w-6xl mx-auto space-y-8 md:space-y-10">

          {/* 顶部返回 + 标题 */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <button
              onClick={() => (window.location.href = '/')}
              className="inline-flex items-center gap-2 text-blue-700 text-sm font-semibold hover:underline"
            >
              <Home className="w-4 h-4" />
              返回首页
            </button>

            <h1 className="text-3xl md:text-4xl font-extrabold text-center text-blue-900 flex-1">
              实体店地址 & 联系方式
            </h1>

            <div className="hidden md:block w-24" />
          </div>

          {/* 热线 */}
          <section className="bg-blue-600 text-white rounded-3xl shadow-2xl px-6 md:px-10 py-6 md:py-8 flex flex-col md:flex-row items-center justify-between gap-5">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide opacity-80">
                服务热线
              </p>
              <p className="mt-2 text-3xl md:text-4xl font-extrabold tracking-wide">
                {hotline}
              </p>
              <p className="mt-2 text-sm md:text-base text-blue-100">
                欢迎致电或直接发短信，我们用中文帮您搞定手机套餐、宽带办理与涨价优化。
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <a
                href={`tel:${hotlineLink}`}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-5 py-3 rounded-2xl font-semibold shadow hover:bg-blue-50 transition"
              >
                <Phone className="w-5 h-5" />
                拨打电话或发短信
              </a>
              <a
                href="#wechat"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-500 text-white px-5 py-3 rounded-2xl font-semibold shadow hover:bg-blue-400 transition"
              >
                微信扫码 · 免费咨询
              </a>
            </div>
          </section>

          {/* ================= Fremont 门店 ================= */}
          <section className="bg-white border border-blue-100 rounded-2xl shadow-xl p-5 md:p-6 space-y-5">
            <div>
              <p className="text-xl md:text-2xl font-bold text-blue-900">
                总店（广场右侧）
              </p>
              <p className="text-gray-700 mt-2">
                46292 Warm Springs Blvd #606, Fremont, CA 94539
              </p>

              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:15108496191"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold shadow hover:bg-blue-700 transition"
                >
                  <Phone className="w-5 h-5" />
                  拨打电话或发短信：510-849-6191
                </a>

                <a
                  href="https://www.google.com/maps?q=46292+Warm+Springs+Blvd+%23606,+Fremont,+CA+94539"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 border border-blue-400 px-5 py-2.5 rounded-xl font-semibold shadow hover:bg-blue-50 transition"
                >
                  <MapPin className="w-5 h-5" />
                  查看地图
                </a>
              </div>
            </div>

            {/* Fremont 门店实拍 */}
            <div>
              <p className="text-sm font-semibold text-slate-500 mb-3">
                Fremont 实体门店实拍
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                  <img
                    src="/locations/fremont-exterior.jpg"
                    alt="美国鸿达电讯 Fremont 实体门店外观"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="grid grid-rows-2 gap-4">
                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                    <img
                      src="/locations/fremont-exterior1.jpg"
                      alt="美国鸿达电讯 Fremont 门店外观（侧面）"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                    <img
                      src="/locations/fremont-interior.jpg"
                      alt="美国鸿达电讯 Fremont 店内环境"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 表单 */}
          <section className="bg-white rounded-2xl shadow-xl border border-gray-100 p-5 md:p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Mail className="w-6 h-6 text-blue-600" />
              发送消息给我们
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input required placeholder="姓名" className="w-full rounded-xl border px-3 py-2" />
              <input required placeholder="联系电话 / 微信号" className="w-full rounded-xl border px-3 py-2" />
              <textarea required rows={4} placeholder="留言内容" className="w-full rounded-xl border px-3 py-2" />
              <button className="w-full bg-blue-600 text-white py-2.5 rounded-xl font-semibold">
                提交留言
              </button>
            </form>
          </section>

          {/* 微信二维码 */}
          <section
            id="wechat"
            className="bg-white rounded-3xl shadow-xl border border-slate-100 px-6 md:px-10 py-8 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900">
              微信在线咨询（扫码最快）
            </h2>

            <p className="mt-3 text-slate-600 text-base md:text-lg">
              添加微信客服，中文一对一协助办理手机卡、eSIM、宽带与涨价优化
            </p>

            <div className="mt-6 flex flex-col items-center">
              <div className="w-44 h-44 md:w-52 md:h-52 rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <img
                  src="/wechat-qr.jpg"
                  alt="美国鸿达电讯 微信客服二维码"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="mt-4 text-lg font-semibold text-blue-900">
                微信公众号：{wechatId}
              </p>

              <div className="mt-3">
                <CopyWechatButton wechatId={wechatId} />
              </div>

              <p className="mt-4 text-sm text-slate-500">
                扫码或复制微信号添加，工作时间内通常可即时回复
              </p>
            </div>
          </section>

          {/* ================= 门店信息区块 ================= */}
          <div className="-mx-4 md:-mx-0">
            <StoreLocationSection variant="compact" />
          </div>

        </div>
      </main>
    </>
  );
}
