import { useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import SectionHeader from '@/components/SectionHeader';
import { ArrowRight, BriefcaseBusiness, Compass, Sparkles } from 'lucide-react';

export default function CareersPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  useScrollReveal();
  useDocumentTitle('Careers — BlendSkills', 'Join BlendSkills and help shape the next wave of AI and digital products.');

  return (
    <main className="pt-24 pb-24 text-white">
      <section className="mx-auto flex max-w-7xl flex-col gap-12 px-6 sm:px-8 lg:px-10">
        <SectionHeader
          eyebrow="Careers"
          title="Build with people who care about craft and impact."
          description="We are growing a team that blends strategy, technology, and design with curiosity, humility, and a strong point of view."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <div className="mb-5 inline-flex rounded-2xl border border-[#FF6B35]/20 bg-[#FF6B35]/10 p-3 text-[#FF6B35]">
              <BriefcaseBusiness size={20} />
            </div>
            <h3 className="font-display text-2xl font-semibold text-white">Current opportunities</h3>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              We are hiring product designers, AI strategists, and digital engineers who want to build thoughtful systems with real-world impact.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 backdrop-blur-xl">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl border border-[#FF6B35]/20 bg-[#FF6B35]/10 p-3 text-[#FF6B35]">
                <Compass size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Why join</p>
                <ul className="mt-4 space-y-3 text-base leading-7 text-slate-300">
                  <li className="flex items-start gap-2"><Sparkles size={16} className="mt-1 text-[#FF6B35]" />Work on meaningful AI and growth products.</li>
                  <li className="flex items-start gap-2"><Sparkles size={16} className="mt-1 text-[#FF6B35]" />Collaborate in small, high-trust teams.</li>
                  <li className="flex items-start gap-2"><Sparkles size={16} className="mt-1 text-[#FF6B35]" />Shape systems with long-term impact.</li>
                </ul>
                <a href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-[#FF6B35]">
                  Reach out <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
