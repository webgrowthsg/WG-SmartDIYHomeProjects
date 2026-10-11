import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowRight, Clock, ExternalLink, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArticleCard } from '@/components/article-card';
import { articles, getArticle, getTopic, articlesByTopic } from '@/lib/site';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const article = getArticle(params.slug);
  if (!article) return {};
  const topic = getTopic(article.topic);
  return {
    title: `${article.title} — ${topic.name}`,
    description: article.excerpt,
    alternates: { canonical: `/articles/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      images: [{ url: article.image }],
    },
  };
}

export default function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  const topic = getTopic(article.topic);
  const more = articlesByTopic(article.topic)
    .filter((a) => a.slug !== article.slug)
    .slice(0, 2);

  return (
    <article>
      <div className="mx-auto max-w-3xl px-4 pt-12 sm:px-6 sm:pt-16">
        <Link
          href={topic.href}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to {topic.name}
        </Link>
        <div className="mt-6 flex items-center gap-3 text-xs text-muted-foreground">
          <Badge
            className="border-0 text-white"
            style={{ backgroundColor: topic.accent }}
          >
            {topic.name}
          </Badge>
          <time dateTime={article.date}>
            {new Date(article.date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </time>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {article.readMinutes} min read
          </span>
        </div>
        <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          {article.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">{article.excerpt}</p>
      </div>

      <div className="relative mx-auto mt-8 aspect-[16/9] max-w-4xl px-4 sm:px-6">
        <div className="relative h-full w-full overflow-hidden rounded-xl">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <div className="max-w-none space-y-5">
          {article.body.map((para, i) => (
            <p key={i} className="text-[1.075rem] leading-[1.75] text-foreground/90">
              {para}
            </p>
          ))}
        </div>

        <div
          className="mt-12 overflow-hidden rounded-2xl border p-6 sm:p-8"
          style={{ backgroundColor: `${topic.accent}14` }}
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {topic.affiliate.label}
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight">
            {topic.affiliate.name}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            This {topic.name.toLowerCase()} guide is part of our series. For
            full plans, sizing tools, and the complete library, we recommend
            {topic.affiliate.name}.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button asChild>
              <a
                href={topic.affiliate.url}
                target="_blank"
                rel="noopener noreferrer sponsored"
              >
                Visit {topic.affiliate.name}
                <ExternalLink className="ml-1.5 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline">
              <Link href={topic.href}>
                More {topic.name.toLowerCase()} articles
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-10 border-t border-border/60 pt-6 text-sm text-muted-foreground">
          Filed under{' '}
          <Link
            href={topic.href}
            className="font-medium text-foreground hover:underline"
          >
            {topic.name}
          </Link>
          .
        </div>
      </div>

      {more.length > 0 && (
        <section className="border-t border-border/60 bg-muted/30">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <h2 className="mb-6 text-2xl font-bold tracking-tight">
              More in {topic.name}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {more.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
