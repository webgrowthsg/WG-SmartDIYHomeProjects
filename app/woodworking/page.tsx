import { TopicPage } from '@/components/topic-page';
import { getTopic } from '@/lib/site';
import type { Metadata } from 'next';

const topic = getTopic('woodworking');

export const metadata: Metadata = {
  title: `${topic.name} — ${topic.tagline}`,
  description: topic.description,
  alternates: { canonical: '/woodworking' },
  openGraph: { images: [{ url: topic.image }] },
};

export default function WoodworkingPage() {
  return <TopicPage topic={topic} />;
}
