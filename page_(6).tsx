import { TopicPage } from '@/components/topic-page';
import { getTopic, articlesByTopic } from '@/lib/site';
//import { getTopic } from '@/lib/site';
import type { Metadata } from 'next';

//const topic = getTopic('woodworking');

/*export const metadata: Metadata = {
  title: `${topic.name} — ${topic.tagline}`,
  description: topic.description,
  alternates: { canonical: '/woodworking' },
  openGraph: { images: [{ url: topic.image }] },
};

export default function Page() {
  return <TopicPage topic={topic} />;
}*/

export const metadata = {
  title: 'Woodworking',
  description: 'Woodworking guides, plans, and project ideas.',
};

export default function WoodworkingPage() {
  const topic = getTopic('woodworking');
  return <TopicPage topic={topic} posts={articlesByTopic('woodworking')} />;
}
