import { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, Star, TrendingUp, Sparkles } from 'lucide-react';
import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import NeuralNetwork from './NeuralNetwork';

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
        <section className="relative min-h-screen flex items-center overflow-hidden bg-[#09090B] pt-24 pb-16 md:pt-28 md:pb-24 lg:pt-32">
    {/* Neural network background fills entire hero */}
    {/* Liquid glass overlay */}
    <div className="absolute inset-0 glass pointer-events-none"></div>
        <NeuralNetwork />

      <div className="relative z-[5] max-w-[1400px] mx-auto px-6 w-full text-white">
        <div className="grid grid-cols-1 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-[640px]">
            {/* Multi-color Gradient Badge with Animated Capability Ticker */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#0066cc]/20 via-purple-500/20 to-cyan-400/20 border border-cyan-400/30 backdrop-blur-md mb-6 shadow-lg shadow-[#0066cc]/10"
            >
              <Sparkles size={14} className="text-cyan-400 animate-pulse" />
              <div className="h-5 overflow-hidden relative w-[240px] sm:w-[320px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={tickerIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 font-mono text-xs font-bold text-cyan-200 uppercase tracking-wider whitespace-nowrap truncate"
                  >
                    {TICKER_TEXTS[tickerIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display font-extrabold leading-[1.1] tracking-tight mb-6 text-white"
              style={{ fontSize: 'clamp(4rem, 9vw, 6rem)' }}
            >
              <span style={{fontSize:'clamp(2rem,4vw,3.5rem)'}}>Technology that grows your business.</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F7CFF] via-[#8B5CF6] to-[#4F7CFF]">
                Marketing that delivers.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-300 max-w-[600px] leading-relaxed mb-10 text-base sm:text-lg"
            >
              Whether launching a startup, automating workflows with AI, or scaling an established enterprise, BlendSkills crafts data-driven marketing & modern web applications—all under one roof.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#0066cc] via-indigo-600 to-cyan-500 text-white font-bold text-sm shadow-xl shadow-[#0066cc]/30 hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Book Free Consultation</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/results"
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm backdrop-blur-md transition-all duration-300 hover:border-white/40"
              >
                View Case Studies
              </Link>
            </motion.div>

            {/* Trust Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-6"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />
                  ))}
                </div>
                <span className="text-white font-bold text-sm">5.0 / 5.0</span>
                <span className="text-slate-400 text-xs">from 50+ enterprise reviews</span>
              </div>
              <p className="font-mono text-[0.75rem] uppercase tracking-widest text-cyan-300/80 mb-4">
                Trusted by industry leaders across India
              </p>
            </motion.div>

            {/* Client Logos */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-6 sm:gap-8 items-center justify-start"
            >
              {clientLogos.map((logo, index) => (
                <motion.div
                  key={logo.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  className="text-slate-300 hover:text-cyan-300 font-bold text-sm sm:text-base transition-all duration-300 cursor-pointer"
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
