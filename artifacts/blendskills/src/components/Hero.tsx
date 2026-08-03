import { useState, useEffect, type RefObject } from 'react';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal, useCountUp } from '@/hooks/useScrollReveal';
import MagneticButton from '@/components/MagneticButton';
import ParallaxWrapper from '@/components/ParallaxWrapper';

const CAPABILITIES = [
  'Custom Software Development',
  'AI & Automation Solutions',
  'Performance Marketing',
  'Enterprise Infrastructure',
];

function AnimatedMetric({ value, suffix = '', label }: { value: number; suffix?: string; label: string }) {
  const { value: displayValue, ref } = useCountUp(value, 1400);

  return (
    <div className="min-w-[120px] rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm">
      <p ref={ref as RefObject<HTMLParagraphElement>} className="text-2xl font-bold text-[#FF6B35]">
        {displayValue}
        {suffix}
      </p>
      <p className="mt-1 text-sm text-[#8A92A8]">{label}</p>
    </div>
  );
}

export default function Hero() {
  useScrollReveal();
  const [tickerIndex, setTickerIndex] = useState(0);
  const [pointer, setPointer] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % CAPABILITIES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handlePointerMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPointer({
      x: (event.clientX - rect.left) / rect.width,
      y: (event.clientY - rect.top) / rect.height,
    });
  };

  const spotlightStyle = {
    background: `radial-gradient(circle at ${pointer.x * 100}% ${pointer.y * 100}%, rgba(255,107,53,0.24), rgba(107,63,181,0.14) 30%, transparent 60%)`,
  };

  const clientLogos = [
    { name: 'Imagicaa', short: 'IM', accent: 'from-[#FF6B35]/25 to-[#FF8557]/10' },
    { name: 'Wet N Joy', short: 'WJ', accent: 'from-[#00F5D4]/25 to-[#6B3FB5]/10' },
    { name: 'ADYPU', short: 'AD', accent: 'from-[#6B3FB5]/25 to-[#00F5D4]/10' },
    { name: 'Toy World', short: 'TW', accent: 'from-[#00A3FF]/20 to-[#6B3FB5]/10' },
    { name: 'Community Stay', short: 'CS', accent: 'from-[#FF6B35]/20 to-[#00F5D4]/10' },
  ];

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-transparent">
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-mesh absolute inset-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,53,0.13),transparent_58%)]" />
        <div className="ambient-grid absolute inset-0" />
        <div className="floating-orb absolute left-[8%] top-[18%] h-64 w-64 rounded-full bg-[#FF6B35]/15 blur-[8rem]" />
        <div className="floating-orb absolute bottom-[18%] right-[10%] h-72 w-72 rounded-full bg-[#00F5D4]/15 blur-[8rem]" />
        <div className="floating-orb absolute right-[20%] top-[12%] h-40 w-40 rounded-full bg-[#6B3FB5]/20 blur-[6rem]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 md:px-12 md:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#FF6B35]/25 bg-[#FF6B35]/10 px-4 py-2 backdrop-blur-xl"
            >
              <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#FF6B35]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#FF8557]">
                Digital Engineering & Growth Studio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 font-display font-extrabold leading-[0.95] tracking-[-0.04em]"
              style={{ fontSize: 'clamp(2.6rem, 7.8vw, 4.8rem)' }}
            >
              <span className="mb-2 block text-white">Grow smarter.</span>
              <span className="block bg-gradient-to-r from-[#FF6B35] via-[#6B3FB5] to-[#00F5D4] bg-clip-text text-transparent">
                Build faster.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8 max-w-xl text-lg leading-8 text-[#B0B8C8]"
            >
              Enterprise software, AI automation, and performance marketing for companies ready to scale with clarity and momentum.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mb-12 flex flex-col gap-4 sm:flex-row"
            >
              <MagneticButton strength={0.38}>
                <Link
                  href="/contact"
                  className="group flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#FF6B35] to-[#FF8557] px-8 py-4 font-semibold text-white shadow-[0_20px_60px_-12px_rgba(255,107,53,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-10px_rgba(255,107,53,0.6)] active:scale-[0.98]"
                >
                  Start Your Journey
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </MagneticButton>

              <MagneticButton strength={0.24}>
                <Link
                  href="#about"
                  className="flex items-center justify-center rounded-2xl border border-white/20 bg-white/8 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#FF6B35]/40 hover:bg-white/12"
                >
                  Learn More
                  <ArrowRight size={18} className="ml-2 transition-transform duration-300 hover:translate-x-1" />
                </Link>
              </MagneticButton>
            </motion.div>

          </div>

          <ParallaxWrapper offset={18} className="order-1 lg:order-2 relative h-[430px] md:h-[520px]">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-full"
              onMouseMove={handlePointerMove}
              onMouseLeave={() => setPointer({ x: 0.5, y: 0.5 })}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.01, rotateX: -5, rotateY: 6, transition: { type: 'spring', stiffness: 120, damping: 18 } }}
                className="group relative h-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-[#161d2b]/80 via-[#101625]/80 to-[#0b1018]/80 p-8 shadow-[0_30px_100px_rgba(3,7,18,0.55)] backdrop-blur-xl"
              >
                <div className="absolute inset-0 opacity-100 transition-all duration-500 group-hover:opacity-100" style={spotlightStyle} />
                <div className="absolute inset-[1px] rounded-[1.6rem] border border-white/10" />
                <div className="relative z-10 flex h-full flex-col justify-center">
                  <div className="inline-flex w-fit items-center gap-3 rounded-2xl border border-[#FF6B35]/25 bg-[#FF6B35]/10 px-3 py-2">
                    <Sparkles size={16} className="text-[#FF6B35]" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#FF8557]">What we do</span>
                  </div>

                  <div className="mt-8 min-h-[92px]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={tickerIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-col"
                      >
                        <h3 className="mb-2 text-2xl font-semibold text-white md:text-3xl">
                          {CAPABILITIES[tickerIndex]}
                        </h3>
                        <p className="max-w-sm text-sm leading-7 text-[#8A92A8]">
                          {tickerIndex === 0 && 'Enterprise-grade applications built for scale with a refined product experience.'}
                          {tickerIndex === 1 && 'Intelligent systems that work for you 24/7 and unlock new efficiency.'}
                          {tickerIndex === 2 && 'Data-led growth strategies that shape perception and convert attention.'}
                          {tickerIndex === 3 && 'Mission-critical infrastructure that feels calm, resilient, and future-ready.'}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                </div>
              </motion.div>
            </motion.div>
          </ParallaxWrapper>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-[0_24px_90px_rgba(3,7,18,0.3)] backdrop-blur-xl md:mt-20 md:p-8"
        >
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#5F6B82]">Trusted partners</p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-white md:text-3xl">Teams that value clarity, speed, and craft.</h3>
            </div>
            <p className="max-w-md text-sm leading-7 text-[#8A92A8]">Selected collaborators across product, growth, and technology who trust us to ship with intention.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {clientLogos.map((logo, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                className="group rounded-[1.25rem] border border-white/10 bg-gradient-to-br from-[#111723]/90 to-[#0b1018]/90 p-4 text-left"
              >
                <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${logo.accent} text-sm font-semibold text-white`}>
                  {logo.short}
                </div>
                <p className="text-sm font-semibold text-white">{logo.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#5F6B82]">Partner</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex cursor-pointer flex-col items-center gap-2 text-[#5F6B82] transition-colors duration-300 hover:text-[#FF6B35]">
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em]">Scroll</span>
          <ChevronDown size={20} className="animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
