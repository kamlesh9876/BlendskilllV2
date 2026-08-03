import { motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, Lightbulb, PlayCircle, Search, TrendingUp, Zap } from 'lucide-react';
import { useRef, useState } from 'react';

const steps = [
  {
    title: 'Discovery',
    text: 'We start with a focused consultation to understand your goals, constraints, and the opportunities worth pursuing first.',
    tag: 'Week 1',
    icon: Search,
    accent: 'from-[#FF6B35]/20 to-[#FF6B35]/5',
    videoSrc: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    previewLabel: 'Team consultation',
  },
  {
    title: 'Strategy',
    text: 'We turn insight into a thoughtful roadmap with clear priorities, success metrics, and an experience blueprint.',
    tag: 'Week 2–3',
    icon: Lightbulb,
    accent: 'from-[#6B3FB5]/20 to-[#6B3FB5]/5',
    videoSrc: 'https://www.w3schools.com/html/mov_bbb.mp4',
    previewLabel: 'Planning dashboards',
  },
  {
    title: 'Execution',
    text: 'Our teams build, launch, and iterate with precision so the experience feels polished from day one.',
    tag: 'Week 4+',
    icon: Zap,
    accent: 'from-[#00F5D4]/20 to-[#00F5D4]/5',
    videoSrc: 'https://www.w3schools.com/html/movie.mp4',
    previewLabel: 'Development sprint',
  },
  {
    title: 'Growth',
    text: 'We stay close after launch, tuning performance and extending the system as your goals evolve.',
    tag: 'Ongoing',
    icon: TrendingUp,
    accent: 'from-[#00A3FF]/20 to-[#00A3FF]/5',
    videoSrc: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm',
    previewLabel: 'Performance reporting',
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 95,
    damping: 30,
    mass: 0.25,
  });

  useMotionValueEvent(smoothProgress, 'change', (value) => {
    const nextIndex = Math.min(steps.length - 1, Math.max(0, Math.round(value * (steps.length - 1))));
    setActiveIndex(nextIndex);
  });

  return (
    <section ref={sectionRef} id="process" className="relative overflow-hidden bg-gradient-to-b from-[#1a1f2e] to-[#0f1418] py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-6 font-mono text-[0.75rem] font-bold uppercase tracking-[0.28em] text-[#FF6B35]">
            How it works
          </p>
          <h2 className="mb-6 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
            A calm, deliberate path from insight to growth.
          </h2>
          <p className="text-lg leading-8 text-slate-400">
            We keep the journey clear, collaborative, and measurable so each phase builds momentum without friction.
          </p>
        </motion.div>

        <div className="relative mt-10">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10 sm:left-1/2 sm:-translate-x-1/2" />
          <motion.div
            className="absolute left-4 top-0 w-px bg-gradient-to-b from-[#FF6B35] via-[#00F5D4] to-transparent sm:left-1/2 sm:-translate-x-1/2"
            initial={false}
            animate={{ height: `${Math.min(100, ((activeIndex + 1) / steps.length) * 100)}%`, opacity: shouldReduceMotion ? 1 : 0.9 }}
          />

          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === activeIndex;
              const isComplete = index < activeIndex;

              return (
                <div key={step.title} className="relative flex gap-4 sm:gap-8">
                  <div className="flex flex-col items-center">
                    <motion.div
                      initial={false}
                      animate={{
                        scale: isActive ? 1.08 : 1,
                        borderColor: isActive || isComplete ? 'rgba(255, 107, 53, 0.6)' : 'rgba(255,255,255,0.14)',
                        backgroundColor: isActive || isComplete ? 'rgba(255, 107, 53, 0.16)' : 'rgba(255,255,255,0.06)',
                      }}
                      transition={{ duration: 0.35 }}
                      className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border bg-white/5 backdrop-blur-sm"
                    >
                      <Icon size={18} className={isActive || isComplete ? 'text-[#FF6B35]' : 'text-slate-400'} />
                    </motion.div>
                    {index < steps.length - 1 && (
                      <motion.div
                        initial={false}
                        animate={{
                          opacity: isActive || isComplete ? 1 : 0.35,
                          scaleY: isActive || isComplete ? 1 : 0.5,
                        }}
                        className="mt-3 h-10 w-px origin-top bg-gradient-to-b from-[#FF6B35]/70 via-[#00F5D4]/50 to-transparent"
                      />
                    )}
                  </div>

                  <motion.article
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -6, scale: 1.01 }}
                    transition={{ duration: 0.35 }}
                    onMouseEnter={() => setHoveredStep(index)}
                    onMouseLeave={() => setHoveredStep(null)}
                    className={`group relative w-full overflow-hidden rounded-[1.7rem] border bg-white/6 p-6 shadow-[0_24px_80px_rgba(6,10,20,0.18)] backdrop-blur-xl ${isActive ? 'border-[#FF6B35]/30' : 'border-white/10'}`}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.96 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ duration: 0.45, ease: 'easeOut' }}
                      className="absolute inset-0"
                    >
                      <video
                        className="h-full w-full object-cover opacity-70"
                        src={step.videoSrc}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                      />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,107,53,0.16),transparent_45%),linear-gradient(140deg,rgba(6,10,20,0.9),rgba(6,10,20,0.45))]" />
                    </motion.div>

                    <div className="relative z-10 flex items-start justify-between gap-4">
                      <div>
                        <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-slate-400">{step.tag}</p>
                        <h3 className="mt-3 font-display text-2xl font-semibold text-white">{step.title}</h3>
                      </div>
                      <div className="hidden rounded-full border border-white/10 bg-white/5 p-2 text-[#FF6B35] md:flex">
                        <PlayCircle size={18} />
                      </div>
                    </div>

                    <p className="relative z-10 mt-4 max-w-2xl text-base leading-8 text-slate-300">{step.text}</p>

                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: false, amount: 0.25 }}
                      transition={{ duration: 0.35 }}
                      className="absolute bottom-4 right-4 z-20 hidden w-[280px] rounded-[1.45rem] border border-white/10 bg-slate-950/80 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl md:block"
                    >
                      <video
                        className="h-36 w-full rounded-[1rem] object-cover"
                        src={step.videoSrc}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                      />
                      <p className="mt-3 text-sm font-semibold text-slate-200">{step.previewLabel}</p>
                      <p className="mt-1 text-xs leading-6 text-slate-400">A short visual preview for the phase you are exploring.</p>
                    </motion.div>
                  </motion.article>
                </div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-[#FF6B35]/30 bg-[#FF6B35]/10 px-7 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#FF6B35] transition-all duration-300 hover:scale-[1.02] hover:bg-[#FF6B35]/20"
          >
            Start your project
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
