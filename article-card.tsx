import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Clock } from 'lucide-react';
import type { Article } from '@/lib/site';
import { getTopic } from '@/lib/site';

export function ArticleCard({ article }: { article: Article }) {
  const topic = getTopic(article.topic);
  return (
    <Link href={`/articles/${article.slug}`} className="group block h-full">
      <Card className="h-full overflow-hidden border-border/60 transition-all hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-md">
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <Badge
            className="absolute left-3 top-3 border-0 text-white shadow-sm"
            style={{ backgroundColor: topic.accent }}
          >
            {topic.name}
          </Badge>
        </div>
        <CardContent className="p-5">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <time dateTime={article.date}>
              {new Date(article.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </time>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {article.readMinutes} min read
            </span>
          </div>
          <h3 className="mt-2 text-lg font-semibold leading-snug tracking-tight transition-colors group-hover:text-foreground">
            {article.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
            {article.excerpt}
          </p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground">
            Read article
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </CardContent>
      </Card>
    </Link>
  );
}
