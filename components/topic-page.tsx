import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BackLink } from '@/components/back-link';
import { ArticleCard } from '@/components/article-card';
import type { Topic } from '@/lib/site';
import { articlesByTopic } from '@/lib/site';

export function TopicPage({ topic }: { topic: Topic }) {
  const posts = articlesByTopic(topic.id);

  return (
    <div>
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 -z-10">
          <Image
            src={topic.image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to right, ${topic.accent}f2 10%, ${topic.accent}80 60%, transparent)`,
            }}
          />
        </div>
        <div className="mx-auto max-w-6xl px-4 py-16 text-white sm:px-6 sm:py-24">
          <BackLink href="/" className="text-white/80 hover:text-white">
            Home
          </BackLink>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            {topic.name}
          </h1>
          <p className="mt-3 max-w-xl text-lg text-white/90">{topic.tagline}</p>
          <p className="mt-4 max-w-2xl text-white/80">{topic.description}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-6 rounded-2xl border border-border/60 bg-muted/30 p-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {topic.affiliate.label}
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight">
              {topic.affiliate.name}
            </h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              The resource we use to go deeper than a single article. Every
              guide in {topic.name} links back to this page.
            </p>
          </div>
          <Button asChild size="lg" className="w-full md:w-auto">
            <a
              href={topic.affiliate.url}
              target="_blank"
              rel="noopener noreferrer sponsored"
            >
              Visit {topic.affiliate.name}
              <ExternalLink className="ml-1.5 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="text-3xl font-bold tracking-tight">
            {topic.name} articles
          </h2>
          <Link
            href="/articles"
            className="hidden shrink-0 items-center gap-1 text-sm font-medium hover:underline sm:inline-flex"
          >
            All articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        {posts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">
            New {topic.name.toLowerCase()} articles are on the way.
          </p>
        )}
      </section>
    </div>
  );
}
