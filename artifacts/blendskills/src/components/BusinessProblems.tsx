import { motion } from 'framer-motion';
import { AlertTriangle, TrendingDown, Cpu, BarChart3 } from 'lucide-react';

const problems = [
  {
    icon: AlertTriangle,
    title: 'Technology Debt',
    text: 'Legacy systems that slow you down, security risks, and impossible maintenance costs.',
  },
  {
    icon: TrendingDown,
    title: 'Marketing Waste',
    text: 'Budget spent on campaigns that don\'t convert, unclear ROI, and fragmented channels.',
  },
  {
    icon: Cpu,
    title: 'Operational Chaos',
    text: 'Manual processes, disconnected tools, and teams working in silos.',
  },
  {
    icon: BarChart3,
    title: 'Growth Stagnation',
    text: 'Unable to scale, losing customers to competitors, and missing market opportunities.',
  },
];

export default function BusinessProblems() {
  return (
    <section className="relative" style={{ padding: '120px 24px', background: '#f8fafc' }}>
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p
            className="font-mono text-[0.75rem] font-semibold uppercase tracking-widest mb-6"
            style={{ color: '#0066cc' }}
          >
            The Challenge
          </p>
          <h2
            className="font-display font-bold leading-tight"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#1e293b',
              maxWidth: '800px',
              lineHeight: 1.2,
            }}
          >
            Most businesses struggle with<br />
            fragmented solutions, outdated<br />
            technology, and marketing that<br />
            doesn't convert.
          </h2>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="matte-card"
              style={{
                padding: '32px',
                borderRadius: '20px',
                background: 'rgba(255, 255, 255, 0.8)',
                border: '1px solid rgba(0, 0, 0, 0.08)',
              }}
            >
              <problem.icon size={48} style={{ color: '#64748b', marginBottom: '16px' }} />
              <h3
                className="font-display font-semibold mb-3"
                style={{
                  fontSize: '1.25rem',
                  color: '#1e293b',
                }}
              >
                {problem.title}
              </h3>
              <p
                className="font-normal"
                style={{
                  fontSize: '0.95rem',
                  color: '#64748b',
                  lineHeight: 1.6,
                }}
              >
                {problem.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Transition Statement */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="font-medium text-center"
          style={{
            fontSize: '1.1rem',
            color: '#475569',
            maxWidth: '700px',
            margin: '0 auto',
          }}
        >
          We solve these problems with integrated technology, data-driven marketing, and AI-powered automation.
        </motion.p>
      </div>
    </section>
  );
}
