import { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, Star, TrendingUp, Sparkles } from 'lucide-react';
import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const TICKER_TEXTS = [
  'Full-Stack Modern Web Applications',
  'AI & Neural Workflow Automations',
  'Data Performance Marketing & SEO',
  'Enterprise Cloud Infrastructure',
  'Brand Strategy & Scalable Funnels',
];

export default function Hero() {
  useScrollReveal();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [tickerIndex, setTickerIndex] = useState(0);

  // Dynamic Ticker Text Rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % TICKER_TEXTS.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const clientLogos = [
    { name: 'Imagicaa', alt: 'Imagicaa Water Park' },
    { name: 'Wet N Joy', alt: 'Wet N Joy' },
    { name: 'ADYPU', alt: 'ADYPU University' },
    { name: 'Toy World', alt: 'Toy World' },
    { name: 'Community Stay', alt: 'Community Stay' },
  ];

  return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0f1418] via-[#0a0d12] to-[#0f1418] pt-24 pb-16 md:pt-28 md:pb-24 lg:pt-32">
    {/* Premium overlay with gradient mesh */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#000000]/40"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-[#FF6B35]/5 to-transparent blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#6B3FB5]/5 to-transparent blur-3xl"></div>
    </div>

      <div className="relative z-[5] max-w-[1200px] mx-auto px-6 w-full text-white">
        <div className="flex flex-col gap-16 items-center text-center">
          {/* Centered Premium Content */}
          <div className="w-full max-w-[900px]">
            {/* Multi-color Gradient Badge with Animated Capability Ticker */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#FF6B35]/12 via-[#6B3FB5]/12 to-[#00F5D4]/12 border border-[#FF6B35]/25 backdrop-blur-xl mb-8 shadow-lg shadow-[#FF6B35]/10 hover:shadow-[#FF6B35]/20 transition-all duration-500"
            >
              <Sparkles size={14} className="text-[#FF6B35] animate-pulse" />
              <div className="h-5 overflow-hidden relative w-[240px] sm:w-[320px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={tickerIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 font-mono text-xs font-bold text-[#FF8557] uppercase tracking-wider whitespace-nowrap truncate"
                  >
                    {TICKER_TEXTS[tickerIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-extrabold leading-[1.15] tracking-tight mb-8 text-white"
              style={{ fontSize: 'clamp(3rem, 10vw, 6.5rem)' }}
            >
              <span className="block mb-3" style={{fontSize:'clamp(1.8rem,5vw,3.5rem)', color: '#E0E0E0'}}>Transform your business</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#6B3FB5] to-[#00F5D4] animate-gradient block">
                with AI-powered solutions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-slate-300 mx-auto max-w-[700px] leading-relaxed mb-12 text-lg sm:text-xl font-light"
            >
              Custom software, AI automation, and performance marketing—building digital experiences that drive real growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-5 mb-16 justify-center"
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2 px-10 py-4.5 rounded-2xl bg-gradient-to-r from-[#FF6B35] to-[#FF8557] text-white font-bold text-base shadow-2xl shadow-[#FF6B35]/50 hover:shadow-[#FF6B35]/70 transition-all duration-500 hover:scale-[1.03] active:scale-[0.97] overflow-hidden"
              >
                <span className="relative z-10">Get Started Today</span>
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/results"
                className="inline-flex items-center justify-center gap-2 px-10 py-4.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/30 text-white font-semibold text-base backdrop-blur-xl transition-all duration-500 hover:border-[#FF6B35]/60 group"
              >
                <span>View Portfolio</span>
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Trust & Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-12 flex flex-col items-center gap-4"
            >
              <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/8 border border-white/15 backdrop-blur-md">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="#FF6B35" color="#FF6B35" />
                  ))}
                </div>
                <span className="text-white font-bold text-sm">5.0 / 5.0</span>
                <span className="text-slate-400 text-sm">50+ reviews</span>
              </div>
              <p className="font-mono text-xs uppercase tracking-widest text-slate-400 font-semibold">
                Trusted by industry leaders • 200+ Projects Delivered
              </p>
            </motion.div>

            {/* Client Logos - Premium Display */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4 sm:gap-6 items-center justify-center pt-4 border-t border-white/10"
            >
              {clientLogos.map((logo, index) => (
                <motion.div
                  key={logo.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.08 }}
                  className="text-slate-400 hover:text-[#FF6B35] font-semibold text-xs sm:text-sm transition-all duration-300 cursor-pointer"
                >
                  {logo.name}
                </motion.div>
              ))}
            </motion.div>
          </div>


        </div>
      </div>

      {/* Scroll indicator */}
      <Link
        href="/about"
        aria-label="Scroll to content"
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors z-[5]"
      >
        <span className="font-mono text-[0.7rem] uppercase tracking-widest font-semibold">Explore Below</span>
        <ChevronDown size={18} className="animate-bounce" />
      </Link>
    </section>
  );
}
