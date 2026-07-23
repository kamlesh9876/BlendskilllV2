import { Code2, Share2, Globe, Palette, FileText, Target } from 'lucide-react';
import { useLocation } from 'wouter';
import type { LucideIcon } from 'lucide-react';

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
  const [, navigate] = useLocation();

  return (
    <section id="services" className="relative z-[2] py-24 md:py-40 lg:py-48">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="reveal max-w-[700px] mb-16 md:mb-28">
          <p className="eyebrow">Our Core Services</p>
          <h2 className="h2">
            Digital solutions that<br className="hidden md:block" />
            drive real results.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((s) =>
            s.large ? (
              <article
                key={s.index}
                className="reveal glass-card grid md:grid-cols-[1.3fr_1fr] md:col-span-2 md:row-span-2 md:min-h-[620px] items-center overflow-hidden p-0 group"
              >
                <div className="p-10 md:p-14 flex flex-col justify-center">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-gradient-to-br from-[rgba(0,245,212,0.15)] to-[rgba(0,245,212,0.05)] border border-[rgba(0,245,212,0.2)] group-hover:from-[rgba(0,245,212,0.2)] group-hover:to-[rgba(0,245,212,0.08)] transition-all duration-500">
                    {s.icon && <s.icon size={28} className="text-[#00f5d4]" />}
                  </div>
                  <span className="font-mono text-xs tracking-widest text-[#00f5d4] font-semibold mb-3">{s.index} — Featured</span>
                  <h3 className="font-display text-3xl lg:text-4xl font-bold mt-2 mb-4 leading-tight">{s.title}</h3>
                  <p className="text-[#94a3b8] text-[0.98rem] leading-relaxed mb-8 font-light">{s.body}</p>
                  <a
                    href="/contact"
                    onClick={(e) => { e.preventDefault(); navigate('/contact'); }}
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
                className={`reveal glass-card p-10 md:p-12 flex flex-col justify-end min-h-[320px] relative overflow-hidden group ${
                  s.wide ? 'md:col-span-2' : ''
                }`}
              >
                <div className="absolute top-8 md:top-10 left-8 md:left-10 right-8 md:right-10 flex items-start justify-between">
                  <span className="font-mono text-xs tracking-widest text-[#00f5d4] font-semibold">{s.index}</span>
                  {s.icon && (
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-[rgba(0,245,212,0.1)] to-[rgba(0,245,212,0.02)] border border-[rgba(255,255,255,0.08)] transition-all duration-500 group-hover:from-[rgba(0,245,212,0.15)] group-hover:to-[rgba(0,245,212,0.05)] group-hover:border-[rgba(0,245,212,0.2)]">
                      <s.icon size={20} className="text-[#94a3b8] group-hover:text-[#00f5d4] transition-colors duration-500" />
                    </div>
                  )}
                </div>
                <h3 className="font-display text-2xl lg:text-3xl font-bold mt-20 mb-3 leading-tight">{s.title}</h3>
                <p className="text-[#94a3b8] text-[0.95rem] leading-relaxed font-light">{s.body}</p>
              </article>
            )
          )}
        </div>

        <p className="reveal text-center mt-14 text-lg text-[#94a3b8]">
          Need a custom solution? Let's create a strategy tailored for your business.{' '}
          <a
            href="/contact"
            onClick={(e) => { e.preventDefault(); navigate('/contact'); }}
            className="link-underline"
          >
            Get a Free Strategy Call →
          </a>
        </p>
      </div>
    </section>
  );
}
