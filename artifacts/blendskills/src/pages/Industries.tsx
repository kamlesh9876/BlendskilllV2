import { useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import SectionHeader from '@/components/SectionHeader';
import { Building2, HeartPulse, Rocket, ShoppingCart } from 'lucide-react';

const industries = [
    { title: 'Healthcare', description: 'Better patient journeys, faster operations, and trusted technology.', icon: HeartPulse },
    { title: 'Retail & e-commerce', description: 'Personalized growth systems and omnichannel experiences.', icon: ShoppingCart },
    { title: 'Startups', description: 'Lean product strategy and launch-ready digital foundations.', icon: Rocket },
    { title: 'Enterprise', description: 'Secure transformation programs across teams, platforms, and markets.', icon: Building2 },
];

export default function IndustriesPage() {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    useScrollReveal();
    useDocumentTitle('Industries — BlendSkills', 'See how BlendSkills supports healthcare, retail, startups, and enterprise organizations.');

    return (
        <main className="pt-24 pb-24 text-white">
            <section className="mx-auto flex max-w-7xl flex-col gap-12 px-6 sm:px-8 lg:px-10">
                <SectionHeader
                    eyebrow="Industries"
                    title="Tailored thinking for fast-moving sectors."
                    description="We adapt our approach to fit the realities of each sector, from regulated environments to growth-stage teams scaling quickly."
                />

                <div className="grid gap-6 md:grid-cols-2">
                    {industries.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div key={item.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                                <div className="mb-5 inline-flex rounded-2xl border border-[#FF6B35]/20 bg-[#FF6B35]/10 p-3 text-[#FF6B35]">
                                    <Icon size={20} />
                                </div>
                                <h3 className="font-display text-2xl font-semibold text-white">{item.title}</h3>
                                <p className="mt-3 text-base leading-8 text-slate-300">{item.description}</p>
                            </div>
                        );
                    })}
                </div>
            </section>
        </main>
    );
}
