import { ArrowRight, Phone, ChevronDown } from 'lucide-react';
import Hero3D from './Hero3D';
import { useMagnetic } from '@/hooks/useInteractions';
import { useCountUp, useScrollReveal } from '@/hooks/useScrollReveal';
import { useBlendSlider } from '@/hooks/useBlendSlider';
import { scrollToId } from '@/hooks/useScroll';

function Stat({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { value, ref } = useCountUp(target);
  return (
    <div className="stat group">
      <div className="flex items-baseline">
        <span
          ref={ref}
          className="font-display font-bold leading-none text-white transition-colors duration-300 group-hover:text-[#00f5d4]"
          style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}
        >
          {value}
        </span>
        <span
          className="font-display font-bold text-[#00f5d4]"
          style={{ fontSize: 'clamp(2rem, 3vw, 3rem)' }}
        >
          {suffix}
        </span>
      </div>
      <p className="text-[#94a3b8] text-[0.95rem] mt-2">{label}</p>
    </div>
  );
}

export default function Hero() {
  useScrollReveal();
  const consultRef = useMagnetic<HTMLAnchorElement>();
  const blend = useBlendSlider(50);

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-44">
      <div
        className="absolute top-[5%] right-[-15%] w-[70vw] h-[70vw] z-[1] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,245,212,0.12) 0%, rgba(10,14,26,0) 65%)',
          filter: 'blur(60px)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[20%] left-[-20%] w-[50vw] h-[50vw] z-[0] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,245,212,0.08) 0%, rgba(10,14,26,0) 70%)',
          filter: 'blur(80px)',
        }}
        aria-hidden="true"
      />
      <Hero3D />

      <div className="relative z-[5] max-w-[1200px] mx-auto px-6 w-full">
        <p className="eyebrow reveal">Pune · Gaya — Digital Growth Partner</p>
        <h1
          className="font-display font-bold leading-[1.05] tracking-tight mb-8 lg:mb-10"
          style={{ fontSize: 'clamp(2.5rem, 6.5vw, 5.8rem)' }}
        >
          <span className="reveal-line">
            <span>Driving growth</span>
          </span>
          <span className="reveal-line">
            <span>
              through <em className="italic font-normal text-[#00f5d4] not-italic">development</em>
            </span>
          </span>
          <span className="reveal-line">
            <span>
              &amp; digital <em className="italic font-normal text-[#00f5d4] not-italic">marketing.</em>
            </span>
          </span>
        </h1>
        <p
          className="reveal text-[#94a3b8] max-w-[720px] leading-relaxed mb-12 lg:mb-14 font-light"
          style={{ fontSize: 'clamp(1rem, 1.5vw, 1.35rem)' }}
        >
          We craft result-driven marketing strategies and high-performance websites that help brands
          grow faster — with real, measurable business impact.
        </p>
        <div className="reveal flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 mb-16 md:mb-20">
          <a
            ref={consultRef}
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToId('#contact');
            }}
            className="btn btn-primary"
          >
            <span>Get a Free Consultation</span>
            <ArrowRight size={16} />
          </a>
          <a href="tel:+918530819966" className="link-underline inline-flex items-center gap-2">
            <Phone size={15} className="text-[#00f5d4]" />
            or call +91 85308 19966
          </a>
        </div>

        {/* Blend slider */}
        <div
          className="reveal max-w-[600px] rounded-2xl p-8 md:p-10 backdrop-blur-lg mt-12 lg:mt-14 transition-all duration-500 hover:border-[rgba(0,245,212,0.3)] glass-card"
          style={{ background: 'linear-gradient(135deg, rgba(20,28,48,0.4), rgba(15,20,32,0.5))' }}
        >
          <div className="flex justify-between items-center mb-5 font-display font-semibold">
            <span
              className="text-[0.85rem] uppercase tracking-wider transition-opacity duration-300"
              style={{ opacity: blend.leftOpacity }}
            >
              Marketing
            </span>
            <span className="text-xl md:text-[1.25rem] font-bold">{blend.msg.word}</span>
            <span
              className="text-[0.85rem] uppercase tracking-wider transition-opacity duration-300"
              style={{ opacity: blend.rightOpacity }}
            >
              Development
            </span>
          </div>
          <div
            ref={blend.trackRef}
            onPointerDown={blend.onPointerDown}
            className="relative h-1.5 rounded-full cursor-pointer mb-6"
            style={{ background: 'rgba(255,255,255,0.1)' }}
          >
            <div
              className="absolute left-0 top-0 h-full rounded-full"
              style={{ width: `${blend.value}%`, background: 'linear-gradient(90deg, #f8fafc, #00f5d4)' }}
            />
            <div
              role="slider"
              tabIndex={0}
              aria-label="Blend of marketing and development"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(blend.value)}
              onKeyDown={blend.onKeyDown}
              className={`absolute top-1/2 w-5 h-5 rounded-full shadow-lg flex items-center justify-center transition-transform duration-200 ${
                blend.dragging ? 'cursor-grabbing scale-110' : 'cursor-grab'
              }`}
              style={{
                left: `${blend.value}%`,
                transform: 'translate(-50%, -50%)',
                background: blend.dragging ? '#00f5d4' : '#f8fafc',
                boxShadow: blend.dragging ? '0 0 20px rgba(0,245,212,0.5)' : '0 0 10px rgba(0,0,0,0.5)',
              }}
            >
              <span className="block w-1.5 h-1.5 rounded-full bg-[#070a13]" />
            </div>
          </div>
          <p className="text-[0.9rem] text-[#94a3b8] text-center min-h-[40px]">{blend.msg.text}</p>
        </div>
      </div>

      {/* Stats */}
      <div className="reveal relative z-[2] max-w-[1200px] mx-auto px-6 mt-16 md:mt-20 pt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10 border-t border-[rgba(255,255,255,0.05)]">
        <Stat target={5} suffix="+" label="Years driving digital growth" />
        <Stat target={120} suffix="+" label="Brands scaled" />
        <Stat target={98} suffix="%" label="Client retention rate" />
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToId('#work')}
        aria-label="Scroll to content"
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-[#64748b] hover:text-[#00f5d4] transition-colors z-[5]"
      >
        <span className="font-mono text-[0.7rem] uppercase tracking-widest">Scroll</span>
        <ChevronDown size={18} className="scroll-indicator" />
      </button>
    </section>
  );
}
