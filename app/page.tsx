import Link from 'next/link';
import { articles, categories, siteStats } from '@/lib/site-data';
import { ArticleCard } from '@/components/article-card';

export default function HomePage() {
  const featured = articles.slice(0, 3);
  const latest = articles.slice(0, 6);

  return (
    <div>
      <section className="border-b border-black/10 bg-sammy-black text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <div className="mb-4 inline-flex items-center rounded-full border border-sammy-gold/50 bg-sammy-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sammy-gold">
                Live newsroom
              </div>
              <h1 className="max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">
                Truth. Clarity. Impact.
              </h1>
              <p className="mt-5 max-w-xl text-lg text-white/75">
                SAMMY MEDIA KE delivers premium journalism, live media, community reporting and digital storytelling for Kenya, Africa and the world.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/latest-news" className="rounded-full bg-sammy-gold px-5 py-3 text-sm font-semibold text-sammy-black">
                  Read latest stories
                </Link>
                <Link href="/contact" className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white">
                  Contact newsroom
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-sammy-gold/30 via-sammy-black to-sammy-black p-6">
                <div className="flex h-full flex-col justify-between rounded-lg border border-white/10 bg-black/30 p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-sammy-gold">Top story</div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{featured[0].title}</h2>
                    <p className="mt-2 text-sm text-white/75">{featured[0].summary}</p>
                  </div>
                  <Link href={`/article/${featured[0].slug}`} className="text-sm font-semibold text-sammy-gold">
                    Read article →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-4">
            {siteStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-black/10 bg-sammy-light p-5 shadow-sm">
                <div className="text-sm text-sammy-black/60">{stat.label}</div>
                <div className="mt-2 text-3xl font-black text-sammy-black">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between pb-6">
          <h2 className="text-3xl font-black tracking-tight">Latest news</h2>
          <Link href="/latest-news" className="text-sm font-semibold text-sammy-black">View all →</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {latest.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      <section className="bg-sammy-light">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between pb-6">
            <h2 className="text-3xl font-black tracking-tight">Explore by category</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/${category.slug}`}
                className="rounded-full border border-sammy-black/10 bg-white px-4 py-2 text-sm font-semibold text-sammy-black transition hover:border-sammy-gold hover:text-sammy-gold"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
