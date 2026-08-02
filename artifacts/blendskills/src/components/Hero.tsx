import { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const CAPABILITIES = [
  'Custom Software Development',
  'AI & Automation Solutions',
  'Performance Marketing',
  'Enterprise Infrastructure',
];

export default function Hero() {
  useScrollReveal();
  const [tickerIndex, setTickerIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % CAPABILITIES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const clientLogos = [
    { name: 'Imagicaa' },
    { name: 'Wet N Joy' },
    { name: 'ADYPU' },
    { name: 'Toy World' },
    { name: 'Community Stay' },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[#0a0e14] via-[#0f1218] to-[#0a0e14]">
      {/* Premium atmospheric background layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial gradient from center */}
        <div className="absolute inset-0 bg-radial from-[#FF6B35]/8 via-transparent to-transparent opacity-40"></div>
        
        {/* Corner accents */}
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-br from-[#6B3FB5]/20 to-transparent blur-3xl"></div>
        <div className="absolute bottom-32 -left-20 w-80 h-80 bg-gradient-to-tr from-[#00F5D4]/15 to-transparent blur-3xl"></div>
        
        {/* Grid effect */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(0deg,transparent_24%,rgba(255,255,255,.05)_25%,rgba(255,255,255,.05)_26%,transparent_27%,transparent_74%,rgba(255,255,255,.05)_75%,rgba(255,255,255,.05)_76%,transparent_77%,transparent_100%)] bg-[length:50px_50px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1">
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-lg bg-var-color-primary-muted border border-[rgba(255,107,53,0.2)] backdrop-blur-sm"
            >
              <div className="w-2 h-2 rounded-full bg-[#FF6B35] animate-pulse"></div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF8557]">Digital transformation</span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-extrabold mb-6 leading-[1.1] tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)' }}
            >
              <span className="block text-white mb-2">Grow smarter.</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#6B3FB5] to-[#00F5D4]">
                Build faster.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg leading-relaxed text-[#B0B8C8] mb-8 max-w-md"
            >
              Enterprise software, AI automation, and performance marketing for companies ready to scale.
            </motion.p>

            {/* CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link
                href="/contact"
                className="group px-8 py-4 rounded-xl bg-gradient-to-r from-[#FF6B35] to-[#FF8557] text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-[#FF6B35]/30 hover:shadow-[#FF6B35]/50 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Start Your Journey
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="#about"
                className="px-8 py-4 rounded-xl bg-white/8 border border-white/20 text-white font-semibold flex items-center justify-center hover:bg-white/12 hover:border-[#FF6B35]/40 transition-all duration-300"
              >
                Learn More
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-12 pt-8 border-t border-white/10"
            >
              <div>
                <p className="text-2xl font-bold text-[#FF6B35]">200+</p>
                <p className="text-sm text-[#8A92A8]">Projects Delivered</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#00F5D4]">50+</p>
                <p className="text-sm text-[#8A92A8]">Client Reviews</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#6B3FB5]">10+</p>
                <p className="text-sm text-[#8A92A8]">Years Experience</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 relative h-[400px] md:h-[500px]"
          >
            {/* Premium card with gradient border */}
            <div className="relative h-full rounded-2xl overflow-hidden group">
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/40 via-[#6B3FB5]/20 to-[#00F5D4]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Inner card */}
              <div className="relative h-full bg-gradient-to-br from-[#161d2b]/80 to-[#0f1218]/60 border border-white/10 rounded-2xl p-8 backdrop-blur-xl flex flex-col justify-center">
                
                {/* Content inside card */}
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-3 w-fit px-3 py-2 rounded-lg bg-[#FF6B35]/10 border border-[#FF6B35]/30">
                    <Sparkles size={16} className="text-[#FF6B35]" />
                    <span className="text-xs font-mono font-bold uppercase text-[#FF8557]">What we do</span>
                  </div>

                  <div className="min-h-[80px] flex items-center">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={tickerIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-col"
                      >
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                          {CAPABILITIES[tickerIndex]}
                        </h3>
                        <p className="text-sm text-[#8A92A8]">
                          {tickerIndex === 0 && "Enterprise-grade applications built for scale"}
                          {tickerIndex === 1 && "Intelligent systems that work for you 24/7"}
                          {tickerIndex === 2 && "Data-driven strategies that convert"}
                          {tickerIndex === 3 && "Mission-critical infrastructure & support"}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Client logos inline */}
                  <div className="flex gap-3 flex-wrap mt-8 pt-8 border-t border-white/10">
                    {clientLogos.slice(0, 3).map((logo, idx) => (
                      <div key={idx} className="text-xs font-mono text-[#5F6B82] bg-white/5 px-3 py-1.5 rounded-md border border-white/10">
                        {logo.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section - Client logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 pt-12 border-t border-white/10"
        >
          <p className="text-xs font-mono uppercase tracking-widest text-[#5F6B82] mb-6">Trusted by innovative teams</p>
          <div className="flex flex-wrap gap-6 md:gap-10">
            {clientLogos.map((logo, idx) => (
              <div key={idx} className="text-sm font-semibold text-[#8A92A8] hover:text-[#FF6B35] transition-colors">
                {logo.name}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-[#5F6B82] hover:text-[#FF6B35] transition-colors cursor-pointer">
          <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
          <ChevronDown size={20} className="animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
