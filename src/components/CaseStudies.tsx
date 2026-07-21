import { TrendingUp, Users, ShoppingCart, Rocket } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const CASES: { tag: string; title: string; icon: LucideIcon; stats: { strong: string; span: string }[] }[] = [
  {
    tag: 'LOCAL BUSINESS',
    title: 'Digital Transformation',
    icon: TrendingUp,
    stats: [
      { strong: '5x', span: 'ROI on social campaigns' },
      { strong: '80%', span: 'increase in engagement' },
    ],
  },
  {
    tag: 'SAAS',
    title: 'Lead Generation Success',
    icon: Users,
    stats: [
      { strong: '150%', span: 'more qualified leads' },
      { strong: '70%', span: 'lower CAC' },
    ],
  },
  {
    tag: 'E-COMMERCE',
    title: 'Growth Boost',
    icon: ShoppingCart,
    stats: [
      { strong: '3x', span: 'increase in organic traffic' },
      { strong: '2x', span: 'revenue growth in 6 months' },
    ],
  },
  {
    tag: 'STARTUP',
    title: 'Brand Awareness Expansion',
    icon: Rocket,
    stats: [
      { strong: '200%', span: 'increase in brand mentions' },
      { strong: '60%', span: 'higher engagement' },
    ],
  },
];

export default function CaseStudies() {
  return (
    <section id="results" className="relative z-[2] py-24 md:py-40 lg:py-48">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="reveal max-w-[700px] mb-16 md:mb-28">
          <p className="eyebrow">Case Studies</p>
          <h2 className="h2">
            See how we help<br className="hidden md:block" />
            businesses thrive.
          </h2>
        </div>

        <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {CASES.map((c) => (
            <article key={c.title} className="glass-card p-8 md:p-10 flex flex-col justify-between min-h-[340px] group hover:border-[rgba(0,245,212,0.3)]">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs tracking-widest text-[#64748b] font-semibold">{c.tag}</span>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-[rgba(0,245,212,0.1)] to-[rgba(0,245,212,0.02)] border border-[rgba(255,255,255,0.08)] transition-all duration-500 group-hover:from-[rgba(0,245,212,0.15)] group-hover:to-[rgba(0,245,212,0.05)] group-hover:border-[rgba(0,245,212,0.2)]">
                    <c.icon size={18} className="text-[#94a3b8] group-hover:text-[#00f5d4] transition-colors duration-500" />
                  </div>
                </div>
                <h3 className="font-display text-[1.4rem] md:text-xl font-bold leading-snug">{c.title}</h3>
              </div>
              <div className="border-t border-[rgba(255,255,255,0.06)] pt-6 md:pt-8 mt-auto flex flex-col gap-5">
                {c.stats.map((s) => (
                  <div key={s.span} className="group/stat">
                    <strong className="font-display text-3xl md:text-4xl text-[#00f5d4] block leading-tight font-bold group-hover/stat:text-white transition-colors duration-300">{s.strong}</strong>
                    <span className="text-[0.8rem] text-[#94a3b8] font-light">{s.span}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
