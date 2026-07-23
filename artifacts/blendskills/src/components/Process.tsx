import { useEffect, useRef } from 'react';
import { useLocation } from 'wouter';
import { useMagnetic } from '@/hooks/useInteractions';
import { Search, Lightbulb, Zap, TrendingUp } from 'lucide-react';

const STEPS = [
  {
    num: '01',
    title: 'Discovery & Consult',
    body: 'We understand your goals, analyze your market, and identify the best digital opportunities for your brand.',
    icon: Search,
    tag: 'Week 1',
  },
  {
    num: '02',
    title: 'Strategy & Planning',
    body: 'Our experts craft data-driven marketing and development strategies tailored to your business vision.',
    icon: Lightbulb,
    tag: 'Week 2–3',
  },
  {
    num: '03',
    title: 'Execution & Optimize',
    body: 'We bring ideas to life with precision execution and continuous optimization for maximum performance.',
    icon: Zap,
    tag: 'Week 4+',
  },
  {
    num: '04',
    title: 'Results & Growth',
    body: 'We focus on measurable outcomes that drive brand visibility, lead generation, and sustainable growth.',
    icon: TrendingUp,
    tag: 'Ongoing',
  },
];

export default function Process() {
  const ctaRef = useMagnetic<HTMLAnchorElement>();
  const lineRef = useRef<HTMLDivElement>(null);
  const [, navigate] = useLocation();

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('in-view');
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="process" className="relative z-[2] py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="reveal grid md:grid-cols-2 gap-10 items-end mb-20 md:mb-28">
          <div>
            <p className="eyebrow">How It Works</p>
            <h2 className="h2">
              Simple steps to<br />digital success.
            </h2>
          </div>
          <p className="lead text-lg">
            We simplify your digital growth journey with strategic marketing, powerful development, and
            continuous optimization — with full transparency every step of the way.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line desktop */}
          <div
            className="hidden lg:block absolute top-[3.25rem] left-[10%] right-[10%] h-px"
            style={{ background: 'var(--border-color)' }}
            aria-hidden="true"
          >
            <div
              ref={lineRef}
              className="process-line-fill h-full"
              style={{ background: 'linear-gradient(90deg, #00f5d4, rgba(0,245,212,0.15))' }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((s, i) => (
              <div
                key={s.num}
                className="reveal glass-card p-8 flex flex-col relative overflow-hidden group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Ghost number */}
                <span className="step-number-ghost">{s.num}</span>

                {/* Icon circle */}
                <div
                  className="w-[6.5rem] h-[6.5rem] rounded-full flex items-center justify-center mb-6 relative z-[1] transition-all duration-500 group-hover:scale-105 group-hover:border-[rgba(0,245,212,0.4)] group-hover:shadow-[0_0_28px_rgba(0,245,212,0.2)]"
                  style={{ background: 'var(--bg-color)', border: '1px solid var(--border-color)' }}
                >
                  <s.icon size={26} className="text-[#00f5d4]" />
                </div>

                {/* Timeline tag */}
                <span className="font-mono text-[0.65rem] tracking-widest text-[#00f5d4] font-semibold mb-3 opacity-70 uppercase">
                  {s.tag}
                </span>

                <h3 className="font-display text-xl font-bold mb-3 leading-snug">{s.title}</h3>
                <p className="text-[#94a3b8] text-[0.875rem] leading-relaxed font-light">{s.body}</p>

                {/* Bottom hover line */}
                <div className="mt-6 card-hover-line" />
              </div>
            ))}
          </div>
        </div>

        <div className="reveal text-center mt-16 md:mt-20">
          <a
            ref={ctaRef}
            href="/contact"
            onClick={(e) => { e.preventDefault(); navigate('/contact'); }}
            className="btn btn-primary"
          >
            <span>Get Started Now</span>
          </a>
        </div>
      </div>
    </section>
  );
}
