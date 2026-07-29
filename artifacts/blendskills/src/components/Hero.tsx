import { ArrowRight, ChevronDown, Star, Zap, ShieldCheck, TrendingUp, Sparkles } from 'lucide-react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Hero3D from './Hero3D';

export default function Hero() {
  useScrollReveal();

  const clientLogos = [
    { name: 'Imagicaa', alt: 'Imagicaa Water Park' },
    { name: 'Wet N Joy', alt: 'Wet N Joy' },
    { name: 'ADYPU', alt: 'ADYPU University' },
    { name: 'Toy World', alt: 'Toy World' },
    { name: 'Community Stay', alt: 'Community Stay' },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-16 md:pt-24 md:pb-20 lg:pt-28">
      {/* Background */}
      <div className="absolute inset-0 bg-[#f8fafc]" />
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle at top left, rgba(0,102,204,0.08) 0%, transparent 50%), radial-gradient(circle at bottom right, rgba(124,92,255,0.05) 0%, transparent 50%)',
        }}
      />
      
      {/* Grain overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
      }} />

      <div className="relative z-[5] max-w-[1400px] mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-[640px]">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0066cc]/10 border border-[#0066cc]/20 mb-6"
            >
              <Sparkles size={14} className="text-[#0066cc]" />
              <span className="font-mono text-xs font-bold text-[#0066cc] uppercase tracking-wider">
                Full-Stack Digital Agency
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-display font-extrabold leading-[1.1] tracking-tight mb-8"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.25rem)', color: '#1e293b' }}
            >
              Technology that grows your business.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066cc] via-[#0088ff] to-[#004499]">
                Marketing that delivers.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#64748b] max-w-[600px] leading-relaxed mb-10"
              style={{ fontSize: '1.2rem' }}
            >
              Whether launching a startup, automating workflows, or scaling an established brand, BlendSkills crafts data-driven marketing & modern web applications—all under one roof.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link
                href="/contact"
                className="btn btn-primary group"
                style={{
                  background: 'linear-gradient(135deg, #0066cc, #0052a3)',
                  color: '#ffffff',
                  border: '1px solid #0066cc',
                  padding: '16px 36px',
                  borderRadius: '12px',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  letterSpacing: '0.5px',
                  boxShadow: '0 8px 24px -6px rgba(0, 102, 204, 0.25)',
                }}
              >
                <span>Book Free Consultation</span>
                <ArrowRight size={18} className="ml-1 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/results"
                className="btn btn-outline"
                style={{
                  background: 'rgba(255, 255, 255, 0.8)',
                  color: '#1e293b',
                  border: '1.5px solid rgba(0, 0, 0, 0.12)',
                  padding: '16px 36px',
                  borderRadius: '12px',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                }}
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
              <div className="flex items-center gap-2 mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />
                  ))}
                </div>
                <span className="text-[#1e293b] font-bold text-sm">5.0 / 5.0</span>
                <span className="text-[#64748b] text-xs">from 50+ enterprise reviews</span>
              </div>
              <p className="font-mono text-[0.75rem] uppercase tracking-widest text-[#94a3b8] mb-4">
                Trusted by industry leaders across India
              </p>
            </motion.div>

            {/* Client Logos */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-8 md:gap-10 items-center justify-start"
            >
              {clientLogos.map((logo, index) => (
                <motion.div
                  key={logo.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  className="text-[#475569] font-bold text-base md:text-lg hover:text-[#0066cc] hover:scale-105 transition-all duration-300 cursor-pointer"
                  style={{ opacity: 0.7 }}
                >
                  {logo.name}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Interactive 3D WebGL Canvas & Floating Glass Metric Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[480px] lg:h-[540px] w-full rounded-3xl overflow-hidden border border-[#0066cc]/20 shadow-2xl bg-gradient-to-br from-[#0a0f1d] to-[#070a13]"
          >
            {/* Interactive 3D WebGL Mesh & Particle Scene */}
            <Hero3D />

            {/* Glass Overlay Card 1: Top Left */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute top-6 left-6 p-4 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 text-white shadow-xl flex items-center gap-3 z-10"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 rounded-xl bg-[#0066cc]/30 border border-[#0066cc]/50 flex items-center justify-center text-cyan-300">
                <Zap size={20} />
              </div>
              <div>
                <div className="text-xs text-slate-300 font-medium">AI Automation Engine</div>
                <div className="text-sm font-bold text-white flex items-center gap-1.5">
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
              className="absolute bottom-6 right-6 p-4 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 text-white shadow-xl flex items-center gap-3 z-10"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300">
                <TrendingUp size={20} />
              </div>
              <div>
                <div className="text-xs text-slate-300 font-medium">Avg Client Growth</div>
                <div className="text-base font-extrabold text-emerald-400">+340% Revenue</div>
              </div>
            </motion.div>

            {/* Glass Overlay Badge: Bottom Left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="absolute bottom-6 left-6 px-4 py-2.5 rounded-xl backdrop-blur-xl bg-black/40 border border-white/10 text-xs font-mono text-cyan-200 flex items-center gap-2 z-10"
            >
              <ShieldCheck size={16} className="text-cyan-400" />
              <span>Interactive WebGL 3D Particle Stage</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <Link
        href="/about"
        aria-label="Scroll to content"
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 text-[#64748b] hover:text-[#0066cc] transition-colors z-[5]"
      >
        <span className="font-mono text-[0.7rem] uppercase tracking-widest font-semibold">Explore Below</span>
        <ChevronDown size={18} className="animate-bounce" />
      </Link>
    </section>
  );
}

