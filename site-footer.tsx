import Link from 'next/link';
import { Hammer } from 'lucide-react';
import { site, topics } from '@/lib/site';

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Hammer className="h-4 w-4" />
              </span>
              <span>{site.name}</span>
            </Link>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              {site.description}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Topics</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {topics.map((t) => (
                <li key={t.id}>
                  <Link
                    href={t.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {t.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Site</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/articles"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Articles
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-border/60 pt-6 text-xs text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. Some links on this
            site are affiliate links; we may earn a commission if you buy
            through them, at no extra cost to you.
          </p>
        </div>
      </div>
    </footer>
  );
}
