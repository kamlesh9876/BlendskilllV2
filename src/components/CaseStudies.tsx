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
    <section id="results" className="relative z-[2] py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="reveal max-w-[600px] mb-16 md:mb-20">
          <p className="eyebrow">Case Studies</p>
          <h2 className="h2">
            See how we help
            <br />
            businesses thrive.
          </h2>
        </div>

        <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CASES.map((c) => (
            <article key={c.title} className="glass-card p-8 flex flex-col justify-between min-h-[320px] group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs tracking-wider text-[#64748b]">{c.tag}</span>
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] transition-all duration-500 group-hover:bg-[rgba(0,245,212,0.08)] group-hover:border-[rgba(0,245,212,0.2)]">
                    <c.icon size={16} className="text-[#94a3b8] group-hover:text-[#00f5d4] transition-colors duration-500" />
                  </div>
                </div>
                <h3 className="font-display text-[1.35rem] font-semibold leading-snug">{c.title}</h3>
              </div>
              <div className="border-t border-[rgba(255,255,255,0.05)] pt-6 mt-6 flex flex-col gap-4">
                {c.stats.map((s) => (
                  <div key={s.span}>
                    <strong className="font-display text-3xl text-[#00f5d4] block leading-none">{s.strong}</strong>
                    <span className="text-[0.8rem] text-[#94a3b8]">{s.span}</span>
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
