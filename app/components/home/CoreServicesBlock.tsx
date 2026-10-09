import Link from 'next/link';
import { Phone, Wifi, TrendingUp, Building2 } from 'lucide-react';

/**
 * æ ¸å¿ƒæœåŠ¡å…¥å£åŒºå—
 * Server Component - ç¡®ä¿åœ¨ SSR è¾“å‡ºçš„ HTML ä¸­å¯è§
 */
export default function CoreServicesBlock() {
  const services = [
    {
      href: '/cellphone',
      icon: <Phone size={24} className="text-blue-600" />,
      title: 'ç¾Žå›½æ‰‹æœºå¡ä¸Ž eSIM åŠžç†',
      description: 'AT&Tã€T-Mobileã€Verizon æ‰‹æœºå¥—é¤ä¸­æ–‡åŠžç†',
    },
    {
      href: '/internet',
      icon: <Wifi size={24} className="text-blue-700" />,
      title: 'å®¶åº­å®½å¸¦ä¸Ž WiFi å®‰è£…',
      description: 'Xfinityã€AT&Tã€Spectrum å®½å¸¦ç½‘ç»œå®‰è£…',
    },
    {
      href: '/bill-optimization',
      icon: <TrendingUp size={24} className="text-blue-700" />,
      title: 'æ‰‹æœºä¸Žå®½å¸¦è´¦å•æ¶¨ä»·ä¼˜åŒ–',
      description: 'è´¦å•å®¡è®¡ã€æ¶¨ä»·å¤„ç†ã€é™è´¹æ–¹æ¡ˆ',
    },
    {
      href: '/cellphone/diagnosis',
      icon: <Building2 size={24} className="text-blue-700" />,
      title: 'æ‰‹æœºæ–¹æ¡ˆé—®é¢˜åˆ¤æ–­',
      description: 'ä»Žè´¦å•ã€è®¾å¤‡ã€è½¬å·å’Œçº¿è·¯æ¡ä»¶åˆ¤æ–­ä¸‹ä¸€æ­¥',
    },
  ];

  return (
    <section className="py-8 md:py-12 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 text-center mb-8">
          æ ¸å¿ƒæœåŠ¡å…¥å£
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group flex flex-col items-center text-center p-6 rounded-2xl border-2 border-slate-200 hover:border-blue-400 bg-white hover:bg-blue-50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="mb-4 p-3 rounded-xl bg-slate-50 group-hover:bg-blue-100 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed" aria-hidden="true">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
