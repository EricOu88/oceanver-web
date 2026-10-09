'use client'

import Link from 'next/link'
import Image from 'next/image'

const CARRIER_LOGOS = [
  {
    name: 'T-Mobile',
    src: '/brands/tmobile.webp',
    href: '/cellphone/providers',
    scale: 1.5,
  },
  {
    name: 'Ultra Mobile',
    src: '/brands/ultra.webp',
    href: '/cellphone/providers',
    scale: 1.5,
  },
  {
    name: 'Gen Mobile',
    src: '/brands/genmobile.webp',
    href: '/cellphone/providers',
    scale: 2.4,
  },
  {
    name: 'Xfinity',
    src: '/brands/xfinity.webp',
    href: '/internet/providers',
    scale: 0.8,
  },
  {
    name: 'AT&T',
    src: '/brands/att.webp',
    href: '/internet/att-fiber',
    scale: 1.5,
  },
  {
    name: 'Verizon',
    src: '/brands/verizon.webp',
    href: '/cellphone/providers',
    scale: 2.4,
  },
]

/**
 * è¿è¥å•† Logo è½®æ’­ç»„ä»¶
 * ä»Žå³å‘å·¦è‡ªåŠ¨è½®æ’­ï¼Œé€Ÿåº¦åæ…¢ï¼Œå¼ºè°ƒç¨³å®š/æƒå¨
 * æ¡Œé¢ç«¯å’Œæ‰‹æœºç«¯éƒ½æ”¯æŒè‡ªåŠ¨è½®æ’­
 */
export default function CarrierLogoCarousel() {
  const LogoList = ({ className = '', isMobile = false }: { className?: string; isMobile?: boolean }) => (
    <div className={`flex items-center ${isMobile ? 'gap-4 sm:gap-6' : 'gap-8 md:gap-12'} ${className}`}>
      {CARRIER_LOGOS.map((logo, index) => (
        <Link
          key={`${logo.name}-${index}`}
          href={logo.href}
          className="flex-shrink-0 flex items-center justify-center transition-transform hover:scale-110 active:scale-95 group"
          aria-label={`${logo.name} æœåŠ¡æ–¹æ¡ˆ`}
        >
          <div className={`relative ${isMobile ? 'h-12 sm:h-14 w-[100px] sm:w-[120px]' : 'h-12 md:h-16 w-[120px] md:w-[140px]'} flex items-center justify-center`}>
            <Image
              src={logo.src}
              alt={`${logo.name} æŽˆæƒä»£ç† - é¸¿è¾¾ç”µè®¯ Fremont å®žä½“åº— ${logo.name === 'Xfinity' || logo.name === 'AT&T' ? 'å®½å¸¦' : 'æ‰‹æœºå¡'}ä¸­æ–‡åŠžç†æœåŠ¡`}
              fill
              className="object-contain opacity-80 group-hover:opacity-100 transition-opacity"
              style={{
                transform: logo.scale ? `scale(${logo.scale})` : 'scale(1)',
              }}
              sizes={isMobile ? '120px' : '(max-width: 768px) 120px, 140px'}
              priority={index < 3}
            />
          </div>
        </Link>
      ))}
    </div>
  )

  return (
    <div className="w-full py-4 md:py-5 border-y border-slate-200 bg-white/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* æ¡Œé¢ç«¯ï¼šä»Žå³å‘å·¦è‡ªåŠ¨è½®æ’­ï¼ˆæ— ç¼å¾ªçŽ¯ï¼‰ */}
        <div className="hidden md:block overflow-hidden">
          <div className="carousel-wrapper flex items-center">
            <div className="carousel-content flex items-center">
              <LogoList />
              <LogoList />
            </div>
          </div>
        </div>

        {/* ç§»åŠ¨ç«¯ï¼šä»Žå³å‘å·¦è‡ªåŠ¨è½®æ’­ï¼ˆæ— ç¼å¾ªçŽ¯ï¼‰ */}
        <div className="md:hidden overflow-hidden">
          <div className="carousel-wrapper-mobile flex items-center">
            <div className="carousel-content-mobile flex items-center">
              <LogoList isMobile={true} />
              <LogoList isMobile={true} />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .carousel-wrapper,
        .carousel-wrapper-mobile {
          position: relative;
          width: 100%;
        }

        .carousel-content {
          animation: scroll-left 30s linear infinite;
        }

        .carousel-content-mobile {
          animation: scroll-left-mobile 25s linear infinite;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-left-mobile {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .carousel-content:hover,
        .carousel-content-mobile:hover {
          animation-play-state: paused;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}
