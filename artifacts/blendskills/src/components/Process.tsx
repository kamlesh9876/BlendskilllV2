import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { Search, Lightbulb, Zap, TrendingUp, ArrowRight } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Discovery & Consult',
    text: 'We understand your goals, analyze your market, and identify the best digital opportunities for your brand.',
    icon: Search,
    tag: 'Week 1',
  },
  {
    num: '02',
    title: 'Strategy & Planning',
    text: 'Our experts craft data-driven marketing and development strategies tailored to your business vision.',
    icon: Lightbulb,
    tag: 'Week 2–3',
  },
  {
    num: '03',
    title: 'Execution & Optimize',
    text: 'We bring ideas to life with precision execution and continuous optimization for maximum performance.',
    icon: Zap,
    tag: 'Week 4+',
  },
  {
    num: '04',
    title: 'Results & Growth',
    text: 'We focus on measurable outcomes that drive brand visibility, lead generation, and sustainable growth.',
    icon: TrendingUp,
    tag: 'Ongoing',
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32 bg-gradient-to-b from-[#1a1f2e] to-[#0f1418]">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p
            className="font-mono text-[0.75rem] font-bold uppercase tracking-widest mb-6"
            style={{ color: '#FF6B35' }}
          >
            How It Works
          </p>
          <h2
            className="font-display font-bold leading-tight mb-6 text-white"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
            }}
          >
            Simple steps to<br />
            digital success
          </h2>
          <p
            className="font-normal"
            style={{
              fontSize: '1.1rem',
              color: '#64748b',
              maxWidth: '600px',
              lineHeight: 1.7,
            }}
          >
            We simplify your digital growth journey with strategic marketing, powerful development, and continuous optimization—with full transparency every step of the way.
          </p>
        </motion.div>

        {/* Animated Timeline */}
        <div className="relative mb-20">
          {/* Horizontal Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="hidden lg:block absolute top-[3.5rem] left-[5%] right-[5%] h-px"
            style={{
              background: 'linear-gradient(90deg, rgba(0, 102, 204, 0.3), rgba(0, 102, 204, 0.1))',
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Step Number Circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                  className="relative z-[5] mx-auto mb-6"
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(0, 102, 204, 0.15), rgba(0, 102, 204, 0.05))',
                    border: '2px solid rgba(0, 102, 204, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <step.icon size={32} style={{ color: '#0066cc' }} />
                </motion.div>

                {/* Timeline Tag */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  className="text-center mb-4"
                >
                  <span
                    className="font-mono text-xs font-semibold uppercase tracking-widest"
                    style={{ color: '#94a3b8' }}
                  >
                    {step.tag}
                  </span>
                </motion.div>

                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  className="font-display font-bold text-center mb-3"
                  style={{
                    fontSize: '1.25rem',
                    color: '#1e293b',
                  }}
                >
                  {step.title}
                </motion.h3>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                  className="font-normal text-center"
                  style={{
                    fontSize: '0.9rem',
                    color: '#64748b',
                    lineHeight: 1.6,
                  }}
                >
                  {step.text}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center transition-transform duration-300 hover:scale-[1.02]"
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
            Start Your Project
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
