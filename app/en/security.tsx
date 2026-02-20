'use client';
import Link from 'next/link';

export default function SecurityEnPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <section className="bg-gradient-to-br from-sky-500 to-blue-700 text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:py-20">
          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
            ADT Home Security
          </h1>
          <p className="mt-4 max-w-2xl text-white/90">
            24/7 professional monitoring, smart home integration, and fast install. Get a quote for your address.
          </p>
        </div>
      </section>

      {/* ADT CARD */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <a
          href="https://www.adt.com/"
          target="_blank"
          className="group block rounded-3xl border p-6 hover:shadow transition-shadow"
        >
          {/* Logo box — same proportions as your cellphone/internet pages */}
          <div className="relative mx-auto h-44 sm:h-56 w-full max-w-[520px]">
            <img
              src="/brands/adt.png"
              alt="ADT logo"
              className="absolute inset-0 h-full w-full object-contain"
            />
          </div>

          <h3 className="mt-6 text-xl font-semibold">ADT</h3>
          <p className="mt-1 text-gray-600">Smart security · 24/7 monitoring · Pro install</p>
          <span className="mt-3 inline-block text-sm font-semibold text-blue-700 group-hover:underline">
            Learn more →
          </span>
        </a>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-6 pb-6">
        <h2 className="text-2xl font-bold mb-6">Why ADT?</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: '24/7 Monitoring', s: 'Professional agents respond to alerts' },
            { t: 'Smart Home', s: 'Cameras, doorbells, locks & app control' },
            { t: 'Pro Installation', s: 'Technician sets up and tests system' },
            { t: 'Custom Packages', s: 'Tailored to your home & budget' }
          ].map((f) => (
            <div key={f.t} className="rounded-2xl border p-5">
              <h3 className="font-semibold">{f.t}</h3>
              <p className="text-sm text-gray-600 mt-1">{f.s}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PACKAGES */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <h2 className="text-2xl font-bold mb-6">Popular Packages</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              name: 'Starter',
              items: ['Base station & keypad', 'Door/Window sensors', 'Motion detector'],
              note: 'Good for apartments/condos'
            },
            {
              name: 'Smart',
              items: ['Everything in Starter', 'Smart lock & doorbell', 'Mobile app control'],
              note: 'Best value for most homes'
            },
            {
              name: 'Video Pro',
              items: ['Everything in Smart', 'Indoor/Outdoor cameras', 'Video recording'],
              note: 'Enhanced video coverage'
            }
          ].map((p) => (
            <div key={p.name} className="rounded-2xl border p-6">
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <ul className="mt-3 space-y-1 text-sm text-gray-700 list-disc list-inside">
                {p.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-gray-500">{p.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <h2 className="text-2xl font-bold mb-6">How it Works</h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          <li>Call us or request a callback — we confirm coverage & promos for your address.</li>
          <li>Pick a package and schedule a pro installation date.</li>
          <li>Technician installs devices and configures the app.</li>
          <li>Enjoy 24/7 monitoring and smart home control.</li>
        </ol>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-semibold">Prefer a callback?</h3>
            <p className="mt-1 text-sm text-gray-600">Leave your info — we’ll reach out shortly.</p>
            <form className="mt-4 grid gap-3">
              <input className="rounded-lg border px-3 py-2" placeholder="Full name" />
              <input className="rounded-lg border px-3 py-2" placeholder="Phone" />
              <input className="rounded-lg border px-3 py-2" placeholder="Email" />
              <textarea className="rounded-lg border px-3 py-2" placeholder="Notes (optional)" rows={4} />
              <button
                type="button"
                className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
              >
                Request Callback
              </button>
            </form>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="text-xl font-semibold">Talk to us</h3>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li>
                1) Sales line:{' '}
                <a className="font-semibold hover:underline" href="tel:15108496191">
                  510-849-6191
                </a>
              </li>
              <li>2) Or use the form — we’ll call you back</li>
            </ul>
            <div className="mt-6 rounded-xl bg-gray-50 p-4 text-sm text-gray-600">
              Bilingual support available (EN / 中文).
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="bg-gradient-to-r from-sky-500 to-blue-700 text-white">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-2xl font-bold">Ready to protect your home?</h3>
            <p className="opacity-90">Get a tailored quote and installation date today.</p>
          </div>
          <div className="flex gap-3">
            <a
              href="tel:15108496191"
              className="rounded-lg bg-white px-4 py-2 font-semibold text-blue-700 shadow hover:shadow-md"
            >
              Call Sales
            </a>
            <a
              href="#contact"
              className="rounded-lg bg-white/10 px-4 py-2 font-semibold ring-1 ring-inset ring-white/30 hover:bg-white/20"
            >
              Request Callback
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
