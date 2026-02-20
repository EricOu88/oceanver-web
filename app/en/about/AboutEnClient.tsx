'use client';

export default function AboutEnClient() {
  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <section className="bg-gradient-to-br from-sky-500 to-blue-700 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">About Bay Media Star</h1>
          <p className="mt-4 max-w-2xl text-white/90">
            Trusted broadband, mobile, and security services with bilingual support.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-3xl px-6 py-12">
        <div className="rounded-2xl border bg-white p-6 md:p-8">
          <p>
            Bay Media Star is a trusted provider for Chinese-speaking communities across the U.S.
            We are authorized partners with major carriers including Verizon, AT&amp;T, T-Mobile,
            Boost Infinite, Ultra Mobile, Lyca Mobile and more.
          </p>

          <h2 className="mt-8 text-xl font-bold">What We Do</h2>
          <ul className="mt-2 list-disc list-inside space-y-1">
            <li>
              <strong>Mobile:</strong> new lines, number transfer, unlimited plans, prepaid SIMs,
              Lifeline/ACP programs
            </li>
            <li>
              <strong>Home Internet:</strong> AT&amp;T, Comcast/Xfinity, Spectrum, T-Mobile, Frontier,
              Windstream WiFi (5G & fiber)
            </li>
            <li>
              <strong>Security:</strong> ADT home security systems
            </li>
          </ul>

          <p className="mt-6">
            Our mission is simple: honest advice, competitive pricing, and bilingual support so every
            customer enjoys fast, stable, and affordable connectivity.
          </p>

          <p className="mt-6">
            Phone: 510-651-1888 · WeChat: 美国鸿达电讯 · Website: baymediastar.com
          </p>
        </div>
      </section>
    </main>
  );
}
