import { motion, useReducedMotion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Sparkles, Cpu, Database, Globe, Code, Server, Cloud, Shield, Zap, ChevronLeft, ChevronRight } from 'lucide-react';

const partners = [
  { name: 'Google', category: 'Cloud & AI', icon: Globe, color: 'from-blue-500 to-cyan-400' },
  { name: 'Microsoft', category: 'Azure & Copilot', icon: Cloud, color: 'from-blue-600 to-purple-500' },
  { name: 'AWS', category: 'Cloud Platform', icon: Server, color: 'from-orange-500 to-yellow-400' },
  { name: 'OpenAI', category: 'Model Layer', icon: Sparkles, color: 'from-emerald-500 to-teal-400' },
  { name: 'Meta', category: 'Growth & Ads', icon: Zap, color: 'from-blue-400 to-indigo-500' },
  { name: 'NVIDIA', category: 'GPU Infrastructure', icon: Cpu, color: 'from-green-500 to-emerald-400' },
  { name: 'Oracle', category: 'Enterprise Data', icon: Database, color: 'from-red-500 to-orange-400' },
  { name: 'MongoDB', category: 'Data Layer', icon: Database, color: 'from-green-600 to-emerald-500' },
  { name: 'Docker', category: 'Delivery', icon: Server, color: 'from-blue-500 to-cyan-400' },
  { name: 'GitHub', category: 'Engineering', icon: Code, color: 'from-gray-700 to-gray-900' },
  { name: 'Firebase', category: 'Product Delivery', icon: Shield, color: 'from-amber-500 to-orange-400' },
  { name: 'React', category: 'Frontend', icon: Code, color: 'from-cyan-400 to-blue-500' },
  { name: 'Node.js', category: 'Runtime', icon: Server, color: 'from-green-500 to-emerald-600' },
  { name: 'Python', category: 'Automation', icon: Code, color: 'from-yellow-400 to-blue-500' },
  { name: 'PostgreSQL', category: 'Reliable Data', icon: Database, color: 'from-blue-600 to-indigo-500' },
  { name: 'MySQL', category: 'Data Stores', icon: Database, color: 'from-orange-500 to-blue-600' },
  { name: 'Linux', category: 'Infrastructure', icon: Server, color: 'from-gray-800 to-gray-900' },
  { name: 'Cisco', category: 'Networking', icon: Globe, color: 'from-blue-500 to-cyan-400' },
  { name: 'VMware', category: 'Virtualization', icon: Server, color: 'from-blue-600 to-indigo-600' },
];

export default function TrustedCompanies() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const controls = useAnimation();
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  // Carousel state
  const [currentIndex, setCurrentIndex] = useState(0);

  // Counter states
  const [cloudCount, setCloudCount] = useState(0);
  const [aiCount, setAiCount] = useState(0);
  const [devCount, setDevCount] = useState(0);
  const [dataCount, setDataCount] = useState(0);

  // Counter animation effects
  useEffect(() => {
    if (isInView && !shouldReduceMotion) {
      const duration = 1500;
      const animateCounter = (target: number, setter: (val: number) => void) => {
        let start = 0;
        const end = target;
        const startTime = performance.now();
        
        const tick = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const current = Math.floor(progress * end);
          setter(current);
          
          if (progress < 1) {
            requestAnimationFrame(tick);
          }
        };
        
        requestAnimationFrame(tick);
      };

      // Reset counters first
      setCloudCount(0);
      setAiCount(0);
      setDevCount(0);
      setDataCount(0);

      // Start animations
      setTimeout(() => {
        animateCounter(4, setCloudCount);
        animateCounter(8, setAiCount);
        animateCounter(12, setDevCount);
        animateCounter(6, setDataCount);
      }, 100);
    }
  }, [isInView, shouldReduceMotion]);

  // Carousel navigation
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % partners.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + partners.length) % partners.length);
  };

  // Auto-play carousel
  useEffect(() => {
    if (!shouldReduceMotion && isInView) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % partners.length);
      }, 4000);
      return () => clearInterval(interval);
    }
    return undefined;
  }, [isInView, shouldReduceMotion]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-[#0f1418] via-[#1a1f2e] to-[#0f1418] py-20 md:py-28" aria-labelledby="trusted-partners-heading">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[5%] top-[20%] w-96 h-96 rounded-full bg-[#FF6B35]/5 blur-[8rem]" />
        <div className="absolute right-[5%] bottom-[20%] w-96 h-96 rounded-full bg-[#00F5D4]/5 blur-[8rem]" />
        <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-[#FF6B35]/3 via-transparent to-[#00F5D4]/3 blur-[12rem]" />
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-32 bg-gradient-to-r from-[#0f1418] via-[#0f1418]/80 to-transparent" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-32 bg-gradient-to-l from-[#0f1418] via-[#0f1418]/80 to-transparent" aria-hidden="true" />

      <div className="mx-auto max-w-[1400px] px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#FF6B35]/20 to-[#FF6B35]/10 border border-[#FF6B35]/30 text-[#FF8557] font-mono text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles size={14} />
            <span>Technology Ecosystem</span>
          </div>
          <h2 id="trusted-partners-heading" className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-4">
            Trusted partners &<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#6B3FB5] to-[#00F5D4]">technology stack</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base md:text-lg leading-relaxed text-slate-400">
            We work comfortably across modern platforms and ecosystem tools, tailoring each engagement to the stack your team already uses.
          </p>
        </motion.div>

        {/* Category Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {['Cloud', 'AI & ML', 'Data', 'Development', 'Infrastructure'].map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-medium hover:bg-white/10 hover:border-[#FF6B35]/40 hover:text-white transition-all duration-300"
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Carousel */}
        <div className="relative mb-16">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10">
            {/* Carousel Items */}
            <div className="relative overflow-hidden">
              <motion.div
                animate={{
                  x: `${-currentIndex * 220}px`,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="flex items-center gap-6 p-8"
                style={{ width: 'max-content' }}
              >
                {[...partners, ...partners.slice(0, 3)].map((partner, index) => {
                  const actualIndex = index % partners.length;
                  const Icon = partner.icon;
                  const isHovered = hoveredIndex === actualIndex;
                  
                  return (
                    <motion.div
                      key={`${partner.name}-${index}`}
                      onMouseEnter={() => setHoveredIndex(actualIndex)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      whileHover={{ y: -8, scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex min-w-[200px] items-center gap-3 rounded-xl border backdrop-blur-xl transition-all duration-300 cursor-pointer group ${
                        isHovered 
                          ? 'bg-gradient-to-br from-white/10 to-white/5 border-[#FF6B35]/40 shadow-[0_20px_60px_-12px_rgba(255,107,53,0.25)]' 
                          : 'bg-white/5 border-white/10 hover:border-white/20 shadow-[0_12px_40px_rgba(6,10,20,0.25)]'
                      }`}
                      role="listitem"
                      tabIndex={0}
                    >
                      {/* Icon */}
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${partner.color} flex items-center justify-center shrink-0 shadow-lg ${isHovered ? 'scale-110' : 'scale-100'} transition-transform duration-300`}>
                        <Icon size={20} className="text-white" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="font-display font-bold text-white text-sm truncate group-hover:text-[#FF6B35] transition-colors">
                          {partner.name}
                        </div>
                        <div className="text-[9px] uppercase tracking-[0.2em] text-slate-400 mt-0.5">
                          {partner.category}
                        </div>
                      </div>

                      {/* Glow Effect */}
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#FF6B35]/20 to-[#00F5D4]/20 blur-xl -z-10"
                        />
                      )}
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors z-10"
              aria-label="Previous partners"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors z-10"
              aria-label="Next partners"
            >
              <ChevronRight size={20} />
            </button>

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {partners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-[#FF6B35] w-6'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Cloud Platforms', value: cloudCount, plus: true },
            { label: 'AI/ML Tools', value: aiCount, plus: true },
            { label: 'Dev Tools', value: devCount, plus: true },
            { label: 'Data Solutions', value: dataCount, plus: true },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="font-display font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#00F5D4]">
                {Math.round(stat.value)}{stat.plus && '+'}
              </div>
              <div className="text-xs text-slate-400 mt-1 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}