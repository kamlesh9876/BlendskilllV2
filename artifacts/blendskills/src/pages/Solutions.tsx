import { useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import SectionHeader from '@/components/SectionHeader';
import { ArrowRight, Bot, BrainCircuit, ShieldCheck, Sparkles } from 'lucide-react';

const pillars = [
    {
        title: 'AI product design',
        description: 'From copilots to internal agents, we shape human-centered AI experiences that feel calm, trustworthy, and useful.',
        icon: BrainCircuit,
    },
    {
        title: 'Automation systems',
        description: 'We connect fragmented operations into reliable workflows that remove duplication and create measurable speed.',
        icon: Bot,
    },
    {
        title: 'Governance & security',
        description: 'Every deployment is built with responsible AI checks, privacy controls, and approval layers from day one.',
        icon: ShieldCheck,
    },
];

export default function SolutionsPage() {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    useScrollReveal();
    useDocumentTitle('Solutions — BlendSkills', 'Discover how BlendSkills builds AI and digital solutions for ambitious teams.');

    return (
        <main className="pt-24 pb-24 text-white">
            <section className="mx-auto flex max-w-7xl flex-col gap-12 px-6 sm:px-8 lg:px-10">
                <SectionHeader
                    eyebrow="Solutions"
                    title="Built to turn complexity into calm momentum."
                    description="We design digital systems that feel effortless to use and powerful to scale, whether your team needs a new AI experience or a smarter operating model."
                />

                <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                    <div className="rounded-[2rem] border border-white/10 bg-white/6 p-8 shadow-[0_0_80px_rgba(255,107,53,0.12)] backdrop-blur-xl">
                        <div className="mb-6 inline-flex rounded-full border border-[#FF6B35]/30 bg-[#FF6B35]/10 p-2 text-[#FF6B35]">
                            <Sparkles size={18} />
                        </div>
                        <h3 className="font-display text-2xl font-semibold text-white">Launch products that feel intuitive from the first interaction.</h3>
                        <p className="mt-4 text-lg leading-8 text-slate-300">
                            Our solutions blend strategy, product thinking, and implementation so your team can move from concept to adoption without losing clarity.
                        </p>
                        <a href="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-[#FF6B35]">
                            Start a conversation <ArrowRight size={16} />
                        </a>
                    </div>

                    <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 backdrop-blur-xl">
                        <div className="space-y-4">
                            {pillars.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                                        <div className="flex items-start gap-4">
                                            <div className="mt-1 rounded-xl border border-[#FF6B35]/20 bg-[#FF6B35]/10 p-2 text-[#FF6B35]">
                                                <Icon size={18} />
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">0{index + 1}</p>
                                                <h4 className="mt-2 text-xl font-semibold text-white">{item.title}</h4>
                                                <p className="mt-2 text-sm leading-7 text-slate-300">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
