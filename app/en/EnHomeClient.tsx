'use client';
// English Homepage Client Component

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Phone,
  Wifi,
  ShieldCheck,
  ChevronRight,
  Star,
  Check,
  X,
  Copy,
  MessageCircle,
  ArrowUpRight,
  Globe,
  Zap,
} from 'lucide-react';

// --- HELPER COMPONENTS ---

// Placeholder Contact Modal Component (Matching the structure of the WeChatModal)
const ContactModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const [copied, setCopied] = useState(false);
    const wechatId = '美国鸿达电讯';

    const handleCopy = () => {
        navigator.clipboard.writeText(wechatId);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />
            <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden animate-in fade-in zoom-in duration-200">
                <div className="h-24 bg-gradient-to-r from-blue-600 to-indigo-600 relative">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 bg-white/20 rounded-full text-white hover:bg-white/30 transition z-10"
                    >
                        <X size={20} />
                    </button>
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
                        <div className="w-20 h-20 bg-white rounded-2xl p-1 shadow-lg rotate-3">
                            <div className="w-full h-full bg-green-500 rounded-xl flex items-center justify-center text-white">
                                <MessageCircle size={40} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-12 pb-8 px-6 text-center">
                    <h3 className="text-xl font-bold text-slate-900">Contact Official WeChat Support</h3>
                    <p className="text-slate-500 text-sm mt-1">
                        Live agent available · Free plan consultation
                    </p>

                    <div className="mt-6 mx-auto w-48 h-48 rounded-xl overflow-hidden border shadow-sm flex items-center justify-center bg-white">
                        {/* Placeholder QR code for WeChat */}
                        <img
                            src="/wechat-qr.jpg" 
                            alt="Bay Media Star WeChat QR Code"
                            className="w-full h-full object-contain"
                            // Using a placeholder image source for display consistency
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.onerror = null;
                                target.src = `https://placehold.co/192x192/00CC00/FFFFFF?text=WeChat+QR`;
                            }}
                        />
                    </div>


                    <div className="mt-6 flex items-center justify-between bg-slate-50 rounded-xl p-3 border">
                        <div className="text-left">
                            <div className="text-xs text-slate-400 uppercase font-semibold tracking-wider">
                                WeChat ID
                            </div>
                            <div className="font-mono text-slate-900 font-bold">
                                {wechatId}
                            </div>
                        </div>
                        <button
                            onClick={handleCopy}
                            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm transition-colors ${
                                copied ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                            }`}
                        >
                            {copied ? <Check size={14} /> : <Copy size={14} />}
                            {copied ? 'Copied' : 'Copy'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Star Rating Component
const StarRating = ({ rating = 5 }: { rating?: number }) => (
    <div className="flex gap-0.5 text-amber-600">
        {[...Array(5)].map((_, i) => (
            <Star
                key={i}
                size={14}
                fill={i < rating ? 'currentColor' : 'none'}
                className={i < rating ? 'text-amber-600' : 'text-gray-300'}
            />
        ))}
    </div>
);


// --- MAIN COMPONENT ---
export default function EnglishHomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false); 

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      {/* --- Navigation Bar --- */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo links to English homepage /en */}
          <Link href="/en" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg text-white font-bold flex items-center justify-center shadow-lg">
              H
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-tight text-slate-900">
              Bay Media Star
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
              {/* ✅ Chinese Version Button: Links to Chinese root / */}
            <Link
              href="/" // <-- Core Fix: Links to Chinese root /
              className="flex items-center gap-1.5 text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors border border-slate-300 rounded-full px-4 py-1.5 hover:border-blue-600"
            >
              <Globe size={16} />
              中文版
            </Link>
            <button
              onClick={() => setModalOpen(true)}
              className="px-5 py-2.5 bg-blue-600 text-white rounded-full text-sm font-bold shadow-lg hover:bg-slate-800 transition-all active:scale-95"
            >
              Contact Us
            </button>
          </div>
          
          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center gap-3">
             <Link href="/" className="text-sm font-bold text-slate-600 flex items-center gap-1"> {/* Mobile link to Chinese root / */}
               <Globe size={16}/> 中文版
             </Link>
          </div>
        </div>
      </header>

      <main className="pt-20"> 
        {/* --- Hero Section (English Content) --- */}
        <section className="relative pt-48 pb-20 text-center overflow-hidden">
           <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/80 to-transparent" />
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-200/20 blur-[100px] rounded-full -z-10" />

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
            US Cell Phone Plans & Internet
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 animate-gradient-x">
                Bay Area Chinese Service
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base md:text-lg text-slate-600 mb-8 md:mb-10 px-4 leading-relaxed">
            AT&T · T-Mobile · Verizon · Xfinity · Spectrum
            <br className="hidden md:block" />
            <span className="inline-block mt-2 md:mt-0">
                Nationwide SIM Delivery · eSIM Activation in China · Bill Optimization · Move/Transfer Assistance
            </span>
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4">

            {/* ⭐ WeChat Free Consultation */}
            <button
              onClick={() => setModalOpen(true)}
              className="
                w-full sm:w-auto px-8 py-4 rounded-2xl font-bold
                text-white flex items-center justify-center gap-2
                bg-blue-700 hover:bg-blue-800
                shadow-lg
                hover:shadow-xl
                hover:scale-[1.04] active:scale-[0.98]
                transition-all duration-300
              "
            >
              <MessageCircle size={18} />
              Free WeChat Consultation
            </button>

            {/* ⭐ Google Reviews */}
            <a
              href="https://www.google.com/search?sca_esv=39fb4ce6952c9081&sxsrf=AE3TifOfswPNGbkIlctoRUzsLRuiBqr2IA:1764572357869&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E-IYEPwjx_6DJ4VXbbxMqcP0DD_SSdD-h0r0czsdm2fCyAzNrHaQaI9RSEX31JBjq4VLy6qRIKLkJ5yRaPLRkdZg-BqQtSeuk3zkl_Mt_NNYTCtJNjHl6aeFD15KLBViqLXNaQaI9RSEX31JBjq4VLy6qRIKLkJ5yRaPLRkdZg-BqQtSeuk3zkl_Mt_NNYTCtJNjHl6aeFD15KLBViqLXNaGc%3D&q=Bay+Media+Star+reviews&sa=X&ved=2ahUKEwj81cik6JuRAxWhLTQIHQveNVYQ0bkNegQIQxAE&biw=1536&bih=730&dpr=1.25"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-full sm:w-auto px-8 py-4 rounded-2xl font-bold
                text-white flex items-center justify-center gap-2
                bg-blue-700 hover:bg-blue-800
                shadow-lg
                hover:shadow-xl
                hover:scale-[1.04] active:scale-[0.98]
                transition-all duration-300
              "
            >
              Check Google Reviews
              <ChevronRight size={16}/>
            </a>

          </div>


        {/* --- Trust Indicators --- */}
          <div className="mt-12 md:mt-16 flex flex-wrap justify-center gap-8 md:gap-16 text-center text-slate-600 px-4">
            
            <div className="flex flex-col items-center">
              <div className="text-2xl md:text-3xl font-bold text-slate-900">18+</div>
              <div className="text-xs uppercase tracking-wide font-semibold mt-1">Years of Bay Area Service</div>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-2xl md:text-3xl font-bold text-slate-900">10k+</div>
              <div className="text-xs uppercase tracking-wide font-semibold mt-1">Customers Served</div>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center gap-3">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
                  alt="Google" 
                  className="w-6 h-6 md:w-7 md:h-7 drop-shadow-sm" 
                />
                <div className="text-2xl md:text-3xl font-bold text-slate-900 flex items-center gap-1">
                  5.0 
                  <Star size={20} fill="currentColor" className="text-amber-600" />
                </div>
              </div>
              <div className="text-xs uppercase tracking-wide font-semibold mt-1">Google Rating</div>
            </div>

          </div>
        </section>

        {/* --- Hot Deals --- */}
        <section id="hot-deals" className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">
                  Hot Deals · Save Money Now · Limited Time Offers
                </h2>
                <p className="text-slate-500 text-sm md:text-base">
                  Prices may vary based on carrier promotions; final rates confirmed upon consultation.
                </p>
              </div>
              <button
                onClick={() => setModalOpen(true)}
                className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 bg-blue-50 px-4 py-2 rounded-lg transition-colors"
              >
                Not sure? Let our specialists help you choose.
                <ArrowUpRight size={16} />
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
           {/* --- 1. AT&T Business Plan --- */}
              <div className="group p-6 rounded-2xl border border-blue-200 bg-gradient-to-b from-blue-50/80 to-white hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 text-blue-700 rounded-lg group-hover:bg-blue-700 group-hover:text-white transition-colors">
                    <Phone size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    AT&T Business Unlimited Plan
                  </h3>
                </div>
                <div className="mb-4">
                   <p className="text-3xl font-extrabold text-blue-700">
                    $15 <span className="text-sm font-semibold text-slate-500">/ Line</span>
                  </p>
                   <p className="text-xs text-slate-400 mt-1"> (Example pricing, based on current promotion) </p>
                </div>
                <ul className="text-sm text-slate-600 space-y-2 mb-6">
                  <li className="flex items-center gap-2"><Check size={14} className="text-blue-600"/> Unlimited Talk + Text + Data</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-blue-600"/> Up to 100GB Hotspot Data</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-blue-600"/> Save big with 4+ lines</li>
                </ul>
                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full py-3 rounded-xl bg-blue-700 text-white font-bold hover:bg-blue-800 shadow-md shadow-blue-700/20 transition"
                >
                  Consult Current AT&T Promotions
                </button>
              </div>

           {/* --- 2. Xfinity Fiber Internet --- */}
              <div className="group p-6 rounded-2xl border border-amber-200 bg-gradient-to-b from-amber-50/80 to-white hover:shadow-xl hover:border-amber-300 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-amber-100 text-amber-800 rounded-lg group-hover:bg-amber-500 group-hover:text-white transition-colors">
                      <Wifi size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Xfinity / Fiber Optic Internet
                    </h3>
                </div>
                <div className="mb-4">
                    <p className="text-3xl font-extrabold text-amber-800">
                      $35 <span className="text-sm font-semibold text-slate-500">/ Month Starting</span>
                    </p>
                    <p className="text-xs text-slate-400 mt-1"> (Sample pricing, varies by address and promotions) </p>
                </div>
                <ul className="text-sm text-slate-600 space-y-2 mb-6">
                  <li className="flex items-center gap-2"><Check size={14} className="text-amber-700"/> 300Mbps+ Download Speeds</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-amber-700"/> New & Existing Customer Bill Optimization</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-amber-700"/> Hassle-Free Move/Transfer Service</li>
                </ul>
                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full py-3 rounded-xl bg-amber-500 text-white font-bold hover:bg-amber-600 shadow-md shadow-amber-500/20 transition"
                >
                  Check Internet Deals by Address
                </button>
              </div>

           {/* --- 3. Ultra / Gen High Value Plan --- */}
              <div className="group p-6 rounded-2xl border border-blue-200 bg-gradient-to-b from-blue-50/80 to-white hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-100 text-blue-700 rounded-lg group-hover:bg-blue-700 group-hover:text-white transition-colors">
                      <Zap size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Ultra / Gen High Value Plans
                    </h3>
                </div>
                <div className="mb-4">
                    <p className="text-3xl font-extrabold text-blue-700">
                      $10-25 <span className="text-sm font-semibold text-slate-500">/ Month</span>
                    </p>
                    <p className="text-xs text-slate-400 mt-1"> (Perfect for budget-conscious or light users) </p>
                </div>
                <ul className="text-sm text-slate-600 space-y-2 mb-6">
                  <li className="flex items-center gap-2"><Check size={14} className="text-blue-700"/> Flexible Data · International Roaming Support</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-blue-700"/> eSIM Instant Activation (Can activate in China)</li>
                  <li className="flex items-center gap-2"><Check size={14} className="text-blue-700"/> Ideal for Students and Short-Term Visitors</li>
                </ul>
                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full py-3 rounded-xl bg-blue-700 text-white font-bold hover:bg-blue-800 shadow-md transition"
                >
                  Let Our Specialist Recommend a Plan
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* --- Core Services --- */}
        <section id="services" className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
              Telecommunications & Security Services
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <Phone className="text-blue-600 mb-6" size={32} />
                <h3 className="text-xl font-bold mb-3">US Cell Phone Plan Setup</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Official AT&T / T-Mobile / Verizon Partner. Exclusive service for new immigrants and students with no SSN required. Supports eSIM activation before arrival.
                </p>
                <Link href="/en/cellphone" className="inline-flex items-center gap-1 font-bold text-blue-600 text-sm hover:gap-2 transition-all">
                  View Cell Phone Plans <ChevronRight size={14} />
                </Link>
              </div>

              <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <Wifi className="text-indigo-600 mb-6" size={32} />
                <h3 className="text-xl font-bold mb-3">Residential & Business Internet</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Price comparisons for Xfinity / AT&T Fiber / Spectrum. We offer bill optimization, move/transfer assistance, and package upgrades.
                </p>
                <Link href="/en/internet" className="inline-flex items-center gap-1 font-bold text-indigo-600 text-sm hover:gap-2 transition-all">
                  View Internet Services <ChevronRight size={14} />
                </Link>
              </div>

              <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <ShieldCheck className="text-emerald-600 mb-6" size={32} />
                <h3 className="text-xl font-bold mb-3">Commercial Security ADT</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  ADT monitoring and alarm solutions for stores and offices. Chinese-speaking team for installation and after-sales service across the US.
                </p>
                <Link href="/en/security" className="inline-flex items-center gap-1 font-bold text-emerald-600 text-sm hover:gap-2 transition-all">
                  View Security Services <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* --- Why Choose Us (Chat Mockup) --- */}
        <section className="py-16 md:py-24 bg-slate-100 text-slate-900 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/40 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-200/40 blur-[80px] rounded-full -translate-x-1/2 translate-y-1/2" />

          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">
                Why Do Bay Area Chinese
                <br />
                Choose Bay Media Star?
              </h2>
              <div className="space-y-6">
                
                {/* Feature 1 */}
                <div className="flex gap-4">
                  <div className="mt-1 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <Check size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900">Official Activation Without SSN</h3>
                    <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                      Designed for new immigrants and students, get official US cell phone plans without a Social Security Number or credit history. Avoid high deposits.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex gap-4">
                  <div className="mt-1 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <Check size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900">Native Chinese Customer Service</h3>
                    <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                      We don't just open accounts; we assist with bill increases, billing errors, and help negotiate better plans with carriers on your behalf.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex gap-4">
                  <div className="mt-1 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <Check size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900">
                      China & US Delivery · Remote eSIM
                    </h3>
                    <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                      Start your service before arrival. We support physical SIM card delivery or remote eSIM activation, ensuring you have service as soon as you land.
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setModalOpen(true)}
                className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-slate-800 shadow-lg transition hover:-translate-y-0.5"
              >
                Consult Your Custom Plan Now
                <ArrowUpRight size={18} />
              </button>
            </div>

            {/* --- Right Side: Customer Service Mockup --- */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-2xl shadow-slate-200/60 relative">
              
              {/* Top Contact Info */}
              <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full ring-4 ring-white shadow-lg overflow-hidden bg-slate-100">
                       <img 
                          src="https://api.dicebear.com/9.x/avataaars/svg?seed=Felix" 
                          alt="Customer Service Agent" 
                          className="w-full h-full object-cover"
                       />
                    </div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-[3px] border-white rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-bold text-lg text-slate-900">BMS Support</div>
                    <div className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full inline-block mt-0.5">
                      Online · Fast Response
                    </div>
                  </div>
                </div>
                <span className="text-xs text-slate-400 font-medium">Just now</span>
              </div>

              {/* Chat Content */}
              <div className="space-y-6 text-sm">
                
                {/* 1. Client Question (Right) */}
                <div className="flex flex-row-reverse items-end gap-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-100 flex-shrink-0 shadow-sm">
                        <img src="https://api.dicebear.com/9.x/avataaars/svg?seed=Coco" alt="Client" />
                    </div>
                    <div className="bg-blue-600 text-white rounded-2xl rounded-tr-none p-4 shadow-md max-w-[80%]">
                        Hi, I just moved and need to transfer my Xfinity internet. Can I also check for better deals?
                    </div>
                </div>

                {/* 2. Agent Reply (Left) */}
                <div className="flex items-end gap-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-100 flex-shrink-0 shadow-sm border border-slate-100">
                        <img src="https://api.dicebear.com/9.x/avataaars/svg?seed=Felix" alt="Agent" />
                    </div>
                    <div className="bg-slate-100 text-slate-800 rounded-2xl rounded-tl-none p-4 shadow-sm max-w-[80%] border border-slate-200/50">
                        Absolutely. Please send me your new address, and I will check coverage and current promotions. Many addresses now qualify for faster fiber optic internet at a lower price.
                    </div>
                </div>

                  {/* 3. Client Reply (Right) */}
                  <div className="flex flex-row-reverse items-end gap-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-100 flex-shrink-0 shadow-sm">
                        <img src="https://api.dicebear.com/9.x/avataaars/svg?seed=Coco" alt="Client" />
                    </div>
                    <div className="bg-blue-600 text-white rounded-2xl rounded-tr-none p-4 shadow-md max-w-[80%]">
                        Great, please handle the transfer for me. Thank you!
                    </div>
                  </div>
              </div>

              {/* Bottom CTA Button */}
              <button
                onClick={() => setModalOpen(true)}
                className="mt-8 w-full py-4 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-lg shadow-xl shadow-blue-200 hover:shadow-2xl hover:scale-[1.02] transition-all active:scale-95"
              >
                Get Free Consultation
              </button>
            </div>
          </div>
        </section>

        {/* --- Customer Testimonials --- */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">

            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                What Our Customers Say
              </h2>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
                  <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-slate-50 rounded-full border border-slate-200 shadow-sm">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
                      alt="Google" 
                      className="w-5 h-5"
                    />
                    <span className="font-bold text-slate-900 text-lg">5.0</span>
                    <StarRating />
                    <span className="text-sm text-slate-600 ml-1">Real reviews from Google & other platforms</span>
                  </div>

                  <a 
                    href="https://www.google.com/search?sca_esv=39fb4ce6952c9081&q=Bay+Media+Star+reviews"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-blue-700 hover:bg-blue-800 text-white font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
                  >
                      View Google Reviews
                  </a>
              </div>
            </div>

            {/* Three Testimonial Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Zhen S.',
                  role: 'Fremont Resident',
                  text: 'I just moved to the Bay Area and was confused about internet providers. The consultant at BMS was very patient and helped me compare three different plans to find the best fit.',
                  date: '2 weeks ago',
                },
                {
                  name: 'Mike L.',
                  role: 'International Student',
                  text: 'It was so difficult to get a phone plan without an SSN, but Bay Media Star made it easy. I communicated via WeChat, and the SIM worked instantly when I landed. Great speed too!',
                  date: '1 month ago',
                },
                {
                  name: 'Tina Z.',
                  role: 'Restaurant Owner',
                  text: 'We used them for ADT security installation at our restaurant. The price was better than other US companies, and the installer spoke Chinese, which made communication seamless.',
                  date: '3 days ago',
                },
              ].map((review, i) => (
                <div
                  key={i}
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col justify-between h-full hover:shadow-md transition-shadow"
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <StarRating />
                      <span className="text-xs text-slate-400">{review.date}</span>
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">
                      “{review.text}”
                    </p>
                  </div>
                  <div className="flex items-center gap-3 border-t border-slate-200 pt-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-sm font-bold text-slate-700">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-slate-900">
                        {review.name}
                      </div>
                      <div className="text-xs text-slate-500">{review.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* --- FAQ --- */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions (FAQ)
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Can I get a cell phone plan without an SSN?',
                  a: 'Yes. We offer plans specifically designed for new arrivals with no credit history required, only requiring a passport. Some options may require a small deposit, please contact us for details.',
                },
                {
                  q: 'Can I set up my US phone and internet before I arrive?',
                  a: 'You can set up your phone plan beforehand (via eSIM or physical card delivery to China). Internet installation requires a local US address but can be scheduled just before your arrival.',
                },
                {
                  q: 'What should I do if my bill price increases?',
                  a: 'Promotional prices typically last 12–24 months. If your bill increases, contact us immediately. We will help match you to the newest available promotions to potentially lower your monthly rate again.',
                },
                {
                  q: 'What documents are required, and is my privacy protected?',
                  a: 'We only collect necessary information required by the carrier (e.g., passport, contact info) solely for service activation. Your privacy is strictly protected and data is not used for other purposes.',
                },
              ].map((item, i) => (
                <details
                  key={i}
                  className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-5 font-semibold text-slate-800 cursor-pointer list-none select-none hover:bg-slate-50 transition-colors">
                    <span className="pr-4 text-sm md:text-base">{item.q}</span>
                    <ChevronRight className="w-5 h-5 text-slate-400 transition-transform duration-200 group-open:rotate-90" />
                  </summary>
                  <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4 bg-slate-50/50 animate-in slide-in-from-top-2 duration-200">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

    {/* --- Footer --- */}
     <footer className="bg-white border-t border-slate-200 pt-16 pb-24 md:pb-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">

        {/* Brand Info */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-slate-900 rounded-lg text-white flex items-center justify-center font-bold">
              H
            </div>
            <span className="text-lg font-bold text-slate-900">
              Bay Media Star
            </span>
          </div>

          <p className="text-slate-500 text-sm max-w-sm mb-6 leading-relaxed">
            The Bay Area's preferred Chinese telecom provider, offering comprehensive solutions for cell phone plans, internet, and security for families and businesses.
          </p>

          <div className="flex gap-3">
            <Link
              href="/" // <-- Link back to Chinese root /
              className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-bold hover:bg-slate-200 transition"
            >
              中文网站
            </Link>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold text-slate-900 mb-4 text-sm">Services</h4>
          <ul className="space-y-3 text-sm text-slate-600">
            <li>
              <Link href="/en/cellphone" className="hover:text-blue-600 transition-colors">
                AT&T / T-Mobile Cell Plans
              </Link>
            </li>
            <li>
              <Link href="/en/internet" className="hover:text-blue-600 transition-colors">
                Xfinity · Fiber Internet
              </Link>
            </li>
            <li>
              <Link href="/en/security" className="hover:text-blue-600 transition-colors">
                ADT Commercial Security
              </Link>
            </li>
            <li>
              <button
                onClick={() => setModalOpen(true)}
                className="hover:text-blue-600 transition-colors text-left"
              >
                Bill Optimization Service
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold text-slate-900 mb-4 text-sm">Contact Info</h4>
          <ul className="space-y-3 text-sm text-slate-600">
            <li><a href="tel:15108496191" className="hover:text-blue-600 transition-colors">Phone: 510-849-6191</a></li>
            <li><button onClick={() => setModalOpen(true)} className="hover:text-blue-600 transition-colors text-left">WeChat: 美国鸿达电讯</button></li>
            <li><a href="https://maps.app.goo.gl/YourGoogleMapsLink" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">Location: Fremont, CA 94539</a></li>
          </ul>

          <Link
            href="/en/contact"
            className="block mt-6 px-4 py-3 rounded-xl bg-blue-600 text-white text-sm font-bold text-center shadow hover:bg-blue-700 transition"
          >
            Contact Our Team
          </Link>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12 pt-6 border-t border-slate-100 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Bay Media Star. All rights reserved.
      </div>
    </footer>


      {/* --- Mobile Fixed CTA --- */}
<div className="md:hidden fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-sm border-t border-slate-200 p-3 z-40 flex gap-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
  <a
    href="tel:15108496191"
    className="flex-1 flex items-center justify-center gap-2 bg-slate-100 text-slate-900 font-bold py-3 rounded-xl active:scale-95 transition"
  >
    <Phone size={18} />
    Call Us
  </a>

  <button
    onClick={() => setModalOpen(true)}
    className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-600/20 active:scale-95 transition"
  >
    <MessageCircle size={18} />
    WeChat Chat
  </button>
</div>

{/* --- Desktop Floating WeChat Button --- */}
<div className="hidden md:flex fixed bottom-8 right-8 z-40">
  <button
    onClick={() => setModalOpen(true)}
    className="flex items-center gap-2 px-5 py-3 rounded-full bg-blue-700 text-white font-bold shadow-xl hover:bg-blue-800 hover:scale-105 transition duration-300"
  >
    <MessageCircle size={20} />
    WeChat Consultation
  </button>
</div>
    </div>
  );
}
