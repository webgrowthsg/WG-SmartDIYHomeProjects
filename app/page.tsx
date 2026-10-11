import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Leaf, Sun, Hammer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArticleCard } from '@/components/article-card';
import { site, topics, articles } from '@/lib/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
  alternates: { canonical: '/' },
};

const topicIcons = {
  woodworking: Hammer,
  energy: Sun,
  gardening: Leaf,
};

export default function Home() {
  const featured = articles.slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.pexels.com/photos/6474458/pexels-photo-6474458.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60" />
        </div>
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-border/60 bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
              Build. Grow. Power.
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Hands-on projects for self-reliant living
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              {site.name} shares practical, field-tested guides on woodworking,
              home energy, and backyard gardening — so you can build, grow, and
              power more of your own life.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/articles">
                  Browse articles
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/about">About the lab</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight">Three topics, one backyard</h2>
          <p className="mt-3 text-muted-foreground">
            Every guide is written, built, and photographed in a real home shop
            and garden. Each topic links to the resource we actually use.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {topics.map((t) => {
            const Icon = topicIcons[t.id];
            return (
              <Link key={t.id} href={t.href} className="group block">
                <Card className="h-full overflow-hidden border-border/60 transition-all hover:-translate-y-0.5 hover:shadow-md">
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(to top, ${t.accent}cc, transparent)`,
                      }}
                    />
                    <div className="absolute bottom-3 left-4 flex items-center gap-2 text-white">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/20 backdrop-blur">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="text-xl font-semibold">{t.name}</span>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <p className="text-sm font-medium">{t.tagline}</p>
                    <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                      {t.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground">
                      Explore {t.name.toLowerCase()}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="border-t border-border/60 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Latest from the lab</h2>
              <p className="mt-3 text-muted-foreground">
                Recent builds and growing notes, sorted by topic.
              </p>
            </div>
            <Link
              href="/articles"
              className="hidden shrink-0 items-center gap-1 text-sm font-medium hover:underline sm:inline-flex"
            >
              All articles
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
