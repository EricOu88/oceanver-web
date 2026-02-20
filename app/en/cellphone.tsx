'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function CellphoneProvidersEnPage() {
  const providers = [
    { name: 'AT&T',         alt: 'AT&T Authorized Agent',         logo: '/brands/att.png',       href: '/en/cellphone/att',       blurb: 'Broad footprint · bundles available' },
    { name: 'T-Mobile',     alt: 'T-Mobile Authorized Agent',     logo: '/brands/tmobile.png',   href: '/en/cellphone/tmobile',   blurb: 'Wide 5G coverage · easy support' },
    { name: 'Verizon',      alt: 'Verizon Authorized Agent',      logo: '/brands/verizon.png',   href: '/en/cellphone/verizon',   blurb: 'Flagship 5G network · dependable' },
    { name: 'Ultra Mobile', alt: 'Ultra Mobile Authorized Agent', logo: '/brands/ultra.png',     href: '/en/cellphone/ultra',     blurb: 'International friendly · low cost' },
    { name: 'Gen Mobile',   alt: 'Gen Mobile Authorized Agent',   logo: '/brands/genmobile.png', href: '/en/cellphone/genmobile',  blurb: 'Great value · reliable coverage' },
    { name: 'H2O Wireless', alt: 'H2O Wireless Authorized Agent', logo: '/brands/h2o.png',       href: '/en/cellphone/h2o',       blurb: 'AT&T network · flexible options' }
    
  ];

  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <section className="bg-gradient-to-br from-sky-500 to-blue-700 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">Cellphone Providers</h1>
          <p className="mt-4 max-w-2xl text-white/90">
            We partner with multiple carriers to match you with the best plan and port-in options. Click a brand to learn more.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {providers.map((p) => (
            <Link
              key={p.name}
              href={p.href}
              className="group rounded-2xl border p-6 hover:shadow transition-shadow"
            >
              {/* Uniform logo stage: same aspect, centered, no gray bg */}
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-white flex items-center justify-center">
                <Image
                  src={p.logo}
                  alt={p.alt}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  priority
                />
              </div>

              <h3 className="mt-4 text-lg font-semibold">{p.name}</h3>
              <p className="mt-1 text-sm text-gray-600">{p.blurb}</p>
              <span className="mt-3 inline-block text-sm font-semibold text-blue-700 group-hover:underline">
                See details →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
