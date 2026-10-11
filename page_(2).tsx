import { BackLink } from '@/components/back-link';
import { ArticleList } from '@/components/article-list';
import { site } from '@/lib/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Articles — ${site.name}`,
  description:
    'All Smart DIY Home Projects article, covering woodworking, home energy, and backyard gardening.',
  alternates: { canonical: '/articles' },
};

export default function ArticlesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <BackLink href="/">Home</BackLink>
      <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
        Articles
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Field-tested guides across our three topics — woodworking, energy, and
        gardening. Each article links to the resource we recommend for going
        deeper.
      </p>
      <div className="mt-10">
        <ArticleList />
      </div>
    </div>
  );
}
