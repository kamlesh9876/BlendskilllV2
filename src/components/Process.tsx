import { useEffect, useRef } from 'react';
import { useMagnetic } from '@/hooks/useInteractions';
import { scrollToId } from '@/hooks/useScroll';

const STEPS = [
  { num: '01', title: 'Discovery & Consult', body: 'We understand your goals, analyze your market, and identify the best digital opportunities for your brand.' },
  { num: '02', title: 'Strategy & Planning', body: 'Our experts craft data-driven marketing and development strategies tailored to your business vision.' },
  { num: '03', title: 'Execution & Optimize', body: 'We bring ideas to life with precision execution and continuous optimization for maximum performance.' },
  { num: '04', title: 'Results & Growth', body: 'We focus on measurable outcomes that drive brand visibility, lead generation, and sustainable growth.' },
];

export default function Process() {
  const ctaRef = useMagnetic<HTMLAnchorElement>();
  const lineRef = useRef<HTMLDivElement>(null);

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
        <div className="reveal max-w-[600px] mb-16 md:mb-20">
          <p className="eyebrow">How It Works</p>
          <h2 className="h2">
            Simple steps to
            <br />
            digital success.
          </h2>
          <p className="lead mt-6">
            We simplify your digital growth journey with strategic marketing, powerful development, and
            continuous optimization.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">
          <div className="hidden lg:block absolute top-10 left-0 w-full h-px" style={{ background: 'var(--border-color)' }} aria-hidden="true">
            <div ref={lineRef} className="process-line-fill h-full" style={{ background: 'linear-gradient(90deg, #00f5d4, rgba(0,245,212,0.2))' }} />
          </div>
          {STEPS.map((s) => (
            <div key={s.num} className="reveal relative z-[2] group">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center font-mono text-xl text-[#00f5d4] mb-8 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,245,212,0.25)]"
                style={{ background: 'var(--bg-color)', border: '1px solid var(--border-color)' }}
              >
                {s.num}
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-[#94a3b8] text-[0.9rem] leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="reveal text-center mt-16 md:mt-20">
          <a
            ref={ctaRef}
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToId('#contact');
            }}
            className="btn btn-primary"
          >
            <span>Get Started Now</span>
          </a>
        </div>
      </div>
    </section>
  );
}
