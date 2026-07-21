import { Code2, Share2, Globe, Palette, FileText, Target } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { scrollToId } from '@/hooks/useScroll';

const SERVICES: { index: string; title: string; body: string; icon?: LucideIcon; large?: boolean; wide?: boolean }[] = [
  {
    index: '01',
    title: 'Software Development',
    body: 'Custom software, internal tools, and platforms built around how your business actually works — not a generic template. This is where BlendSkills goes beyond a typical marketing agency.',
    icon: Code2,
    large: true,
  },
  { index: '02', title: 'Social Media Marketing', body: 'Boost your brand presence and engagement across platforms with result-driven strategies.', icon: Share2 },
  { index: '03', title: 'Web Development', body: 'High-performance, responsive websites that enhance user experience and business growth.', icon: Globe },
  { index: '04', title: 'Branding & Design', body: 'Memorable brand identities with creative design solutions that leave a lasting impression across every touchpoint.', icon: Palette, wide: true },
  { index: '05', title: 'Content Marketing', body: 'Compelling content that attracts, engages, and converts your target audience effectively.', icon: FileText },
  { index: '06', title: 'PPC Advertising', body: 'Precision-targeted pay-per-click campaigns that drive qualified leads and sales.', icon: Target },
];

export default function Services() {
  return (
    <section id="services" className="relative z-[2] py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="reveal max-w-[600px] mb-16 md:mb-20">
          <p className="eyebrow">Our Core Services</p>
          <h2 className="h2">
            Digital solutions that
            <br />
            drive real results.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) =>
            s.large ? (
              <article
                key={s.index}
                className="reveal glass-card grid md:grid-cols-[1.2fr_1fr] md:col-span-2 md:row-span-2 md:min-h-[580px] items-center overflow-hidden p-0"
              >
                <div className="p-10 md:p-12">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-[rgba(0,245,212,0.08)] border border-[rgba(0,245,212,0.15)]">
                    {s.icon && <s.icon size={26} className="text-[#00f5d4]" />}
                  </div>
                  <span className="font-mono text-sm text-[#00f5d4]">{s.index}</span>
                  <h3 className="font-display text-2xl font-semibold mt-3 mb-3">{s.title}</h3>
                  <p className="text-[#94a3b8] text-[0.95rem] leading-relaxed mb-6">{s.body}</p>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToId('#contact');
                    }}
                    className="link-underline"
                  >
                    Start a project
                  </a>
                </div>
                <div
                  className="h-[200px] md:h-full flex flex-col justify-center gap-4 p-10"
                  style={{ background: 'rgba(0,0,0,0.2)', borderTop: '1px solid var(--border-color)', borderLeft: '1px solid var(--border-color)' }}
                >
                  {[70, 45, 85, 30].map((w, i) => (
                    <div key={i} className="h-1 rounded-full relative overflow-hidden" style={{ width: `${w}%`, background: 'rgba(255,255,255,0.05)' }}>
                      <div className="absolute inset-0 rounded-full" style={{ background: 'rgba(0,245,212,0.3)', width: '30%' }} />
                    </div>
                  ))}
                </div>
              </article>
            ) : (
              <article
                key={s.index}
                className={`reveal glass-card p-10 flex flex-col justify-end min-h-[280px] relative overflow-hidden group ${
                  s.wide ? 'md:col-span-2' : ''
                }`}
              >
                <div className="absolute top-10 left-10 right-10 flex items-start justify-between">
                  <span className="font-mono text-sm text-[#00f5d4]">{s.index}</span>
                  {s.icon && (
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] transition-all duration-500 group-hover:bg-[rgba(0,245,212,0.08)] group-hover:border-[rgba(0,245,212,0.2)]">
                      <s.icon size={18} className="text-[#94a3b8] group-hover:text-[#00f5d4] transition-colors duration-500" />
                    </div>
                  )}
                </div>
                <h3 className="font-display text-2xl font-semibold mt-16 mb-3">{s.title}</h3>
                <p className="text-[#94a3b8] text-[0.95rem]">{s.body}</p>
              </article>
            )
          )}
        </div>

        <p className="reveal text-center mt-14 text-lg text-[#94a3b8]">
          Need a custom solution? Let's create a strategy tailored for your business.{' '}
          <a href="tel:+918530819966" className="link-underline">
            Get a Free Strategy Call →
          </a>
        </p>
      </div>
    </section>
  );
}
