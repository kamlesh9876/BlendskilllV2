import { useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import SectionHeader from '@/components/SectionHeader';

const projects = [
    {
        title: 'AI concierge platform',
        category: 'Product design · AI experience',
        description: 'A voice-enabled experience that reduced onboarding friction for a high-growth service brand.',
    },
    {
        title: 'Operations intelligence layer',
        category: 'Automation · Analytics',
        description: 'A unified command center that connected support, sales, and fulfilment workflows in one view.',
    },
    {
        title: 'Digital growth system',
        category: 'Strategy · Web',
        description: 'An editorial-led growth platform that helped a client translate strategy into sustainable demand.',
    },
];

export default function PortfolioPage() {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    useScrollReveal();
    useDocumentTitle('Portfolio — BlendSkills', 'Explore selected case studies and product work from BlendSkills.');

    return (
        <main className="pt-24 pb-24 text-white">
            <section className="mx-auto flex max-w-7xl flex-col gap-12 px-6 sm:px-8 lg:px-10">
                <SectionHeader
                    eyebrow="Portfolio"
                    title="Selected work with measurable momentum."
                    description="Our recent engagements span AI experiences, operational transformation, and digital growth systems that unlock clarity and performance."
                />

                <div className="grid gap-6 lg:grid-cols-3">
                    {projects.map((project) => (
                        <article key={project.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#FF6B35]">{project.category}</p>
                            <h3 className="mt-4 font-display text-2xl font-semibold text-white">{project.title}</h3>
                            <p className="mt-4 text-base leading-8 text-slate-300">{project.description}</p>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}
