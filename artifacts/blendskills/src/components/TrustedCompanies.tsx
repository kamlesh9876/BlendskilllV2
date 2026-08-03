import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

const partners = [
  { name: 'Google', category: 'Cloud & AI' },
  { name: 'Microsoft', category: 'Azure & Copilot' },
  { name: 'AWS', category: 'Cloud Platform' },
  { name: 'OpenAI', category: 'Model Layer' },
  { name: 'Meta', category: 'Growth & Ads' },
  { name: 'NVIDIA', category: 'GPU Infrastructure' },
  { name: 'Oracle', category: 'Enterprise Data' },
  { name: 'MongoDB', category: 'Data Layer' },
  { name: 'Docker', category: 'Delivery' },
  { name: 'GitHub', category: 'Engineering' },
  { name: 'Firebase', category: 'Product Delivery' },
  { name: 'React', category: 'Frontend' },
  { name: 'Node.js', category: 'Runtime' },
  { name: 'Python', category: 'Automation' },
  { name: 'PostgreSQL', category: 'Reliable Data' },
  { name: 'MySQL', category: 'Data Stores' },
  { name: 'Linux', category: 'Infrastructure' },
  { name: 'Cisco', category: 'Networking' },
  { name: 'VMware', category: 'Virtualization' },
];

export default function TrustedCompanies() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'center center', 'end start'],
  });

  const springProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 28,
    mass: 0.25,
  });

  const x = useTransform(springProgress, [0, 0.5, 1], [16, 0, -560]);
  const opacity = useTransform(springProgress, [0, 0.5, 1], [0.72, 1, 0.72]);
  const marqueeItems = [...partners, ...partners];

  return (
    <section ref={sectionRef} className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-[#0f1418] to-[#1a1f2e] py-16 md:py-24">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-20 bg-gradient-to-r from-[#0f1418] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-20 bg-gradient-to-l from-[#0f1418] to-transparent" />

      <div className="mx-auto max-w-[1400px] px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <p className="mb-3 font-mono text-[0.7rem] font-bold uppercase tracking-[0.28em] text-[#FF6B35]">
            Trusted partners & technology stack
          </p>
          <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            We work comfortably across modern platforms and ecosystem tools, tailoring each engagement to the stack your team already uses.
          </p>
        </motion.div>

        <motion.div
          style={{ x: shouldReduceMotion ? 0 : x, opacity: shouldReduceMotion ? 1 : opacity }}
          className="relative z-10 flex w-max items-center gap-4 pr-6 sm:gap-6"
        >
          {marqueeItems.map((partner, index) => (
            <motion.div
              key={`${partner.name}-${index}`}
              whileHover={{ y: -4, scale: 1.03 }}
              className="flex min-w-[180px] items-center justify-center rounded-2xl border border-white/10 bg-white/6 px-5 py-4 shadow-[0_12px_40px_rgba(6,10,20,0.25)] backdrop-blur-xl"
            >
              <div className="text-center">
                <div className="text-[0.95rem] font-semibold text-slate-100">{partner.name}</div>
                <div className="mt-1 text-[0.7rem] uppercase tracking-[0.24em] text-slate-500">{partner.category}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
