import Link from 'next/link';
import { Hammer } from 'lucide-react';
import { site, topics } from '@/lib/site';
import { cn } from '@/lib/utils';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Hammer className="h-5 w-5" />
          </span>
          <span className="text-lg">{site.name}</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          <HeaderLink href="/about">About</HeaderLink>
          {topics.map((t) => (
            <HeaderLink key={t.id} href={t.href}>
              {t.name}
            </HeaderLink>
          ))}
          <HeaderLink href="/articles">Articles</HeaderLink>
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}

function HeaderLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
    >
      {children}
    </Link>
  );
}

function MobileNav() {
  return (
    <details className="group relative md:hidden">
      <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-md border border-input bg-background p-0 [&::-webkit-details-marker]:hidden">
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
        </svg>
      </summary>
      <div className="absolute right-0 mt-2 w-48 overflow-hidden rounded-lg border bg-popover p-1 shadow-md">
        <MobileLink href="/about">About</MobileLink>
        {topics.map((t) => (
          <MobileLink key={t.id} href={t.href}>
            {t.name}
          </MobileLink>
        ))}
        <MobileLink href="/articles">Articles</MobileLink>
      </div>
    </details>
  );
}

function MobileLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        'block rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground'
      )}
    >
      {children}
    </Link>
  );
}
