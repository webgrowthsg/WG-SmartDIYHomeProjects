import { TopicPage } from '@/components/topic-page';
import { getTopic } from '@/lib/site';
import type { Metadata } from 'next';

const topic = getTopic('energy');

export const metadata: Metadata = {
  title: `${topic.name} — ${topic.tagline}`,
  description: topic.description,
  alternates: { canonical: '/energy' },
  openGraph: { images: [{ url: topic.image }] },
};

export default function Page() {
  return <TopicPage topic={topic} />;
}
