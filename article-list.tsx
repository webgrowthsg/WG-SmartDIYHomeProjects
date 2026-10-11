'use client';

import { useState } from 'react';
import { ArticleCard } from '@/components/article-card';
import { articles, topics, type TopicId } from '@/lib/site';
import { cn } from '@/lib/utils';

type Filter = 'all' | TopicId;

export function ArticleList() {
  const [filter, setFilter] = useState<Filter>('all');

  const filtered =
    filter === 'all'
      ? articles
      : articles.filter((a) => a.topic === filter);

  const tabs: { id: Filter; label: string }[] = [
    { id: 'all', label: 'All' },
    ...topics.map((t) => ({ id: t.id as Filter, label: t.name })),
  ];

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id)}
            className={cn(
              'rounded-full border px-4 py-1.5 text-sm font-medium transition-colors',
              filter === tab.id
                ? 'border-foreground bg-foreground text-background'
                : 'border-border bg-background text-muted-foreground hover:border-foreground/40 hover:text-foreground'
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      ) : (
        <p className="mt-8 text-muted-foreground">
          No articles in this topic yet.
        </p>
      )}
    </>
  );
}
