import { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, Star, Zap, ShieldCheck, TrendingUp, Sparkles } from 'lucide-react';
import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Hero3D from './Hero3D';

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
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16 md:pt-28 md:pb-24 lg:pt-32">
      {/* Background Ambient Video Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-slate-950">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&auto=format&fit=crop&q=80"
          onLoadedData={() => setVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-25' : 'opacity-10'
          }`}
          src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-lines-movement-41551-large.mp4"
        />

        {/* Ambient Gradient Color Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/80 to-indigo-950/90" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 20% 20%, rgba(0,102,204,0.25) 0%, transparent 45%), radial-gradient(circle at 80% 80%, rgba(124,58,237,0.2) 0%, transparent 45%), radial-gradient(circle at 50% 50%, rgba(6,182,212,0.15) 0%, transparent 50%)',
          }}
        />

        {/* Subtle noise grain */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
          }}
        />
      </div>

      <div className="relative z-[5] max-w-[1400px] mx-auto px-6 w-full text-white">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.25rem)' }}
            >
              Technology that grows your business.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
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

          {/* Right Side - Interactive 3D WebGL Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[340px] sm:h-[440px] lg:h-[540px] w-full rounded-3xl overflow-hidden border border-cyan-500/30 shadow-2xl bg-gradient-to-br from-[#0a0f1d] via-[#091122] to-[#070a13] group"
          >
            {/* Interactive 3D WebGL Mesh & Particle Scene */}
            <Hero3D />

            {/* Glass Overlay Card 1: Top Left */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute top-4 left-4 sm:top-6 sm:left-6 p-3 sm:p-4 rounded-2xl backdrop-blur-xl bg-slate-900/80 border border-cyan-400/30 text-white shadow-xl flex items-center gap-2.5 sm:gap-3 z-10"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#0066cc] to-cyan-500 flex items-center justify-center text-white shadow-md shrink-0">
                <Zap size={18} className="sm:w-5 sm:h-5" />
              </div>
              <div>
                <div className="text-[11px] sm:text-xs text-slate-300 font-medium">AI Automation Engine</div>
                <div className="text-[11px] sm:text-xs font-bold text-cyan-300 flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Active 24/7
                </div>
              </div>
            </motion.div>

            {/* Glass Overlay Card 2: Bottom Right */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 p-3 sm:p-4 rounded-2xl backdrop-blur-xl bg-slate-900/80 border border-emerald-400/30 text-white shadow-xl flex items-center gap-2.5 sm:gap-3 z-10"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300 shrink-0">
                <TrendingUp size={18} className="sm:w-5 sm:h-5" />
              </div>
              <div>
                <div className="text-[11px] sm:text-xs text-slate-300 font-medium">Avg Client Growth</div>
                <div className="text-sm sm:text-base font-extrabold text-emerald-400">+340% Revenue</div>
              </div>
            </motion.div>

            {/* Glass Overlay Badge: Bottom Left (hidden on extra small screens to keep clean space) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="hidden sm:flex absolute bottom-6 left-6 px-4 py-2.5 rounded-xl backdrop-blur-xl bg-black/60 border border-white/10 text-xs font-mono text-cyan-200 items-center gap-2 z-10"
            >
              <ShieldCheck size={16} className="text-cyan-400" />
              <span>Interactive 3D WebGL Engine</span>
            </motion.div>
          </motion.div>
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
