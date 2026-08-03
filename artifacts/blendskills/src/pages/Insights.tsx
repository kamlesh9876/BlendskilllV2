import { useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import SectionHeader from '@/components/SectionHeader';

const posts = [
  {
    title: 'Designing AI that feels trustworthy',
    summary: 'A practical framework for creating calm, credible experiences with emerging technology.',
  },
  {
    title: 'How smart automation improves service teams',
    summary: 'Three principles that keep automation useful, resilient, and grounded in human needs.',
  },
  {
    title: 'The modern growth operating model',
    summary: 'Why strategy, product, and content need to move in sync to build durable momentum.',
  },
];

export default function InsightsPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  useScrollReveal();
  useDocumentTitle('Insights — BlendSkills', 'Read strategic perspectives from BlendSkills on AI, growth, and digital transformation.');

  return (
    <main className="pt-24 pb-24 text-white">
      <section className="mx-auto flex max-w-7xl flex-col gap-12 px-6 sm:px-8 lg:px-10">
        <SectionHeader
          eyebrow="Insights"
          title="Perspective for teams thinking beyond the obvious."
          description="We write about the decisions that matter when AI, operations, and growth start to intersect in real business life."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#FF6B35]">Article</p>
              <h3 className="mt-4 font-display text-2xl font-semibold text-white">{post.title}</h3>
              <p className="mt-4 text-base leading-8 text-slate-300">{post.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
