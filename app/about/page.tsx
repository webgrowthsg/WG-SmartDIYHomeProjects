import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BackLink } from '@/components/back-link';
import { site, topics } from '@/lib/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `About — ${site.name}`,
  description:
    'Smart DIY Home Projects is an independent guide to woodworking, home energy, and backyard gardening. Learn how we test, write, and link to the resources we use.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <BackLink href="/">Home</BackLink>
      <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
        About the lab
      </h1>
      <p className="mt-5 text-lg text-muted-foreground">{site.description}</p>

      <div className="mt-10 max-w-none">
        <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden rounded-xl">
          <Image
            src="https://images.pexels.com/photos/6474458/pexels-photo-6474458.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="A backyard workshop and garden"
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>



        <h2 className="mt-10 text-2xl font-semibold tracking-tight">The three topics</h2>
        <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
          We keep the site deliberately narrow so every guide is written by
          someone who actually does the work. There are no other categories.
        </p>
        <ul className="mt-4 space-y-3">
          {topics.map((t) => (
            <li key={t.id}>
              <Link
                href={t.href}
                className="inline-flex items-center gap-1 font-medium text-foreground hover:underline"
              >
                {t.name}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <span className="text-muted-foreground"> — {t.tagline.toLowerCase()}.</span>
            </li>
          ))}
        </ul>

        <h2 className="mt-10 text-2xl font-semibold tracking-tight">
          How we choose resources
        </h2>
        <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
          Each topic points to one paid resource we recommend for going deeper
          than a single article can take you. Those links are affiliate links:
          if you buy through them, we may earn a commission at no extra cost to
          you. We only recommend resources we have used ourselves.
        </p>
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        <Button asChild>
          <Link href="/articles">
            Read the articles
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/woodworking">Start with woodworking</Link>
        </Button>
      </div>
    </div>
  );
}
