import { Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: 'BlendSkills rebuilt our funnel from the ground up. Within a quarter our lead quality changed completely — not just volume.',
    name: 'Founder',
    role: 'D2C Skincare Brand',
    initials: 'F',
  },
  {
    quote: 'What stood out was the transparency. We could see exactly where every rupee of ad spend was going, every week.',
    name: 'Marketing Head',
    role: 'SaaS Platform',
    initials: 'MH',
  },
  {
    quote: 'The website they built converts nearly twice what our old one did. Development and marketing finally speak the same language.',
    name: 'Operations Lead',
    role: 'Retail Chain',
    initials: 'OL',
  },
];

export default function Testimonials() {
  return (
    <section className="relative z-[2] py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="reveal max-w-[600px] mb-16 md:mb-20">
          <p className="eyebrow">What Our Clients Say</p>
          <h2 className="h2">
            Real stories,
            <br />
            real growth.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <blockquote
              key={t.name}
              className="reveal glass-card rounded-2xl p-10 flex flex-col justify-between group"
              style={{ borderLeft: '3px solid #00f5d4' }}
            >
              <div>
                <Quote size={28} className="text-[#00f5d4] opacity-40 mb-5" />
                <p className="text-[1.05rem] leading-relaxed mb-8">{t.quote}</p>
              </div>
              <footer className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full flex items-center justify-center font-display font-bold text-sm text-[#00f5d4] bg-[rgba(0,245,212,0.08)] border border-[rgba(0,245,212,0.15)]">
                  {t.initials}
                </div>
                <div>
                  <strong className="block font-display text-base">{t.name}</strong>
                  <span className="text-[0.85rem] text-[#94a3b8]">{t.role}</span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
