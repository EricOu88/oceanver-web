'use client';

import Image from 'next/image';
import Link from 'next/link';

type Brand = {
  name: string;
  slug: string;
  logo: string;
  blurb: string;
};

const BRANDS_EN: Brand[] = [
  { name: 'AT&T',     slug: 'att',      logo: '/brands/att.png',      blurb: 'Wide coverage · Fiber/Wireless options' },
  { name: 'Spectrum', slug: 'spectrum', logo: '/brands/spectrum.png', blurb: 'Cable internet · Bundle options' },
  { name: 'Frontier', slug: 'frontier', logo: '/brands/frontier.png', blurb: 'Fiber upgrades · Great value' },
  { name: 'Xfinity',  slug: 'xfinity',  logo: '/brands/xfinity.png',  blurb: 'Huge footprint · TV/Internet/Mobile bundles' },
];

export default function InternetEnPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="bg-gradient-to-br from-sky-500 to-blue-700 text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:py-20">
          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">Internet</h1>
          <p className="mt-4 max-w-2xl text-white/90">
            Explore all of our comprehensive internet options and providers here.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-10">
        <h1 className="text-3xl font-extrabold md:text-4xl">Home Internet Options</h1>
        <p className="mt-3 text-gray-600">Four major brands · We’ll match the best plan for your address</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {BRANDS_EN.map((b) => (
            <article key={b.slug} className="rounded-2xl border p-5 hover:shadow transition">
              {/* Larger, uniform logo box */}
              <div className="flex h-48 w-full items-center justify-center rounded-xl bg-white">
                <Image
                  src={b.logo}
                  alt={`${b.name} Authorized Agent`}
                  width={640}
                  height={160}
                  className="h-auto w-auto max-h-32 sm:max-h-36 object-contain"
                />
              </div>

              <h2 className="mt-5 text-xl font-semibold">{b.name}</h2>
              <p className="mt-1 text-gray-600">{b.blurb}</p>

              <Link
                href={`/en/internet/${b.slug}`}
                className="mt-3 inline-block font-semibold text-blue-700 hover:underline"
              >
                See details →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
