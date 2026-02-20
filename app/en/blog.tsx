'use client';

import Link from 'next/link';

type Post = {
  slug: string;        // URL slug, e.g. "best-cell-plans-2025"
  title: string;       // Post title
  date: string;        // Preformatted date string: "2025-10-01" or "Oct 1, 2025"
  summary?: string;    // Optional short summary
};

const posts: Post[] = [
  // 👉 Add/edit posts here. Keep date as a plain string to avoid hydration issues.
  { slug: 'welcome', title: 'Welcome to Our Blog', date: '2025-09-15', summary: 'Updates, tips, and promotions.' },
  { slug: 'save-on-wireless-2025', title: 'How to Save on Wireless Plans in 2025', date: '2025-09-20' },
  { slug: 'internet-price-hikes', title: 'Handling Internet Price Increases', date: '2025-09-24' },
];

export default function BlogIndexEn() {
  return (
    <main className="bg-white text-gray-900">
        
      {/* HERO */}
      <section className="bg-gradient-to-br from-sky-500 to-blue-700 text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:py-20">
          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">Blog</h1>
          <p className="mt-4 max-w-2xl text-white/90">
            News, guides, and tips to help you choose cell plans, internet, and home security.
          </p>
        </div>
      </section>

      {/* POSTS */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-6">
          <h2 className="text-2xl font-bold">All Posts</h2>
          <p className="text-gray-600 mt-1">Latest articles listed by date.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.slug} className="group rounded-2xl border p-6 hover:shadow transition-shadow">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold group-hover:underline">
                  <Link href={`/en/blog/${p.slug}`}>{p.title}</Link>
                </h3>
                <span className="ml-3 shrink-0 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                  {p.date}
                </span>
              </div>
              {p.summary ? (
                <p className="mt-3 text-sm text-gray-700">{p.summary}</p>
              ) : (
                <p className="mt-3 text-sm text-gray-500">Summary coming soon…</p>
              )}
              <div className="mt-4">
                <Link
                  href={`/en/blog/${p.slug}`}
                  className="inline-block text-sm font-semibold text-blue-700 hover:underline"
                >
                  Read post →
                </Link>
              </div>
            </article>
          ))}
        </div>

      </section>
    </main>
  );
}
