import { useLocation } from 'wouter';
import { useMagnetic } from '@/hooks/useInteractions';

export default function WhyChooseUs() {
  const ref = useMagnetic<HTMLAnchorElement>();
  const [, navigate] = useLocation();

  return (
    <section className="relative z-[2] py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="reveal">
          <p className="eyebrow">Why Choose BlendSkills</p>
          <h2 className="h2">
            Your success is
            <br />
            our mission.
          </h2>
          <p className="lead mt-6">
            We don't just provide services — we build long-term digital strategies that deliver real
            business impact. We increase your brand visibility, generate quality leads, and boost
            conversions with strategies tailored to your goals. When you grow, we grow.
          </p>
          <a
            ref={ref}
            href="/contact"
            onClick={(e) => { e.preventDefault(); navigate('/contact'); }}
            className="btn btn-outline mt-8"
          >
            <span>Let's Talk Strategy</span>
          </a>
        </div>

        <div className="reveal relative h-[350px] md:h-[450px] flex items-center justify-center" aria-hidden="true">
          <div
            className="absolute w-[250px] h-[250px]"
            style={{
              background: 'radial-gradient(circle, rgba(0,245,212,0.12) 0%, rgba(7,10,19,0) 70%)',
              filter: 'blur(20px)',
            }}
          />
          <div
            className="absolute top-[15%] left-[10%] glass-card p-8 shadow-2xl transition-transform duration-500 hover:rotate-0 hover:scale-105"
            style={{ transform: 'rotate(-3deg)' }}
          >
            <span className="font-mono text-xs text-[#00f5d4] block mb-3">ROI</span>
            <strong className="font-display text-4xl font-bold block leading-tight">+248%</strong>
            <p className="text-[#94a3b8] text-sm mt-1">avg. campaign lift</p>
          </div>
          <div
            className="absolute bottom-[15%] right-[10%] glass-card p-8 shadow-2xl transition-transform duration-500 hover:rotate-0 hover:scale-105"
            style={{ transform: 'rotate(3deg)' }}
          >
            <span className="font-mono text-xs text-[#00f5d4] block mb-3">TRUST</span>
            <strong className="font-display text-4xl font-bold block leading-tight">Long-term</strong>
            <p className="text-[#94a3b8] text-sm mt-1">partnerships, not projects</p>
          </div>
        </div>
      </div>
    </section>
  );
}
