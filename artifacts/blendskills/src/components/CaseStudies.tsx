import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Filter } from 'lucide-react';
import { Link } from 'wouter';
import { Skeleton } from './Skeleton';

const categories = ['All', 'E-Commerce', 'SaaS', 'Education & Parks'];

const caseStudies = [
  {
    client: 'Imagicaa Water Park',
    category: 'Education & Parks',
    challenge: 'Low online bookings, high cart bounce rates, and slow mobile experience.',
    solution: 'Full web app rebuild with real-time ticket booking engine, automated WhatsApp alerts, and Google Ads funnel.',
    results: '340% increase in online bookings, 65% reduction in bounce rate, 4.8/5 user satisfaction',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Google Ads'],
    metrics: [
      { label: 'Booking Growth', value: '+340%' },
      { label: 'Bounce Rate', value: '-65%' },
    ],
    image: 'https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?w=1200&auto=format&fit=crop&q=80',
    bgGradient: 'from-blue-600/90 via-indigo-600/90 to-cyan-500/90',
  },
  {
    client: 'Wet N Joy Water Park',
    category: 'Education & Parks',
    challenge: 'Off-season drop in ticket sales and limited brand recall across digital channels.',
    solution: 'Year-round automated marketing machine, social media content funnels, and VIP loyalty portal.',
    results: '180% annual revenue growth, 50K+ social community, 45% repeat customer rate',
    technologies: ['Meta Ads', 'Instagram Growth', 'Email Automation'],
    metrics: [
      { label: 'Revenue Boost', value: '+180%' },
      { label: 'Social Reach', value: '50K+' },
    ],
    image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=1200&auto=format&fit=crop&q=80',
    bgGradient: 'from-cyan-600/90 via-[#0066cc]/90 to-blue-700/90',
  },
  {
    client: 'ADYPU University',
    category: 'Education & Parks',
    challenge: 'Manual application processing, delayed admission responses, and disconnected student leads.',
    solution: 'Custom student portal, automated WhatsApp bot qualification, and lead attribution dashboard.',
    results: '220% increase in qualified applications, 70% faster admission cycle, 95% student portal engagement',
    technologies: ['Custom CRM', 'WhatsApp Bot', 'Analytics Engine'],
    metrics: [
      { label: 'Applications', value: '+220%' },
      { label: 'Cycle Time', value: '-70%' },
    ],
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&auto=format&fit=crop&q=80',
    bgGradient: 'from-violet-600/90 via-purple-600/90 to-[#0066cc]/90',
  },
  {
    client: 'Toy World E-Commerce',
    category: 'E-Commerce',
    challenge: 'Low conversion rate on mobile and high abandon rates during seasonal holiday sales.',
    solution: 'Headless storefront, one-click checkout integration, and predictive retargeting workflows.',
    results: '210% increase in mobile revenue, 3.2x ad spend return (ROAS), 40% reduction in cart abandonment',
    technologies: ['React', 'Shopify Plus', 'Klaviyo', 'Performance SEO'],
    metrics: [
      { label: 'Mobile Sales', value: '+210%' },
      { label: 'Target ROAS', value: '3.2x' },
    ],
    image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1200&auto=format&fit=crop&q=80',
    bgGradient: 'from-emerald-600/90 via-teal-600/90 to-cyan-600/90',
  },
];

export default function CaseStudies() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredStudies = caseStudies.filter(
    (s) => activeCategory === 'All' || s.category === activeCategory
  );

  return (
    <section className="relative" style={{ padding: '120px 24px', background: '#ffffff' }}>
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p
            className="font-mono text-[0.75rem] font-semibold uppercase tracking-widest mb-6"
            style={{ color: '#0066cc' }}
          >
            Results That Matter
          </p>
          <h2
            className="font-display font-bold leading-tight mb-6"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#1e293b',
            }}
          >
            Real projects. Measurable impact.<br />
            Sustainable growth.
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
            Explore how we help industry leaders and fast-growing brands transform operations, acquire customers, and scale revenue.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 flex-wrap mb-12">
          <div className="flex items-center gap-1.5 text-xs text-[#64748b] font-mono mr-2">
            <Filter size={14} />
            <span>Filter:</span>
          </div>
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#0066cc] text-white shadow-md'
                    : 'bg-[#f1f5f9] text-[#64748b] hover:bg-[#e2e8f0] hover:text-[#1e293b]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
          <AnimatePresence mode="popLayout">
            {filteredStudies.map((study, index) => (
              <motion.div
                key={study.client}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="solid-card group overflow-hidden rounded-3xl bg-white border border-black/10 hover:border-[#0066cc]/40 transition-all shadow-sm hover:shadow-xl flex flex-col"
              >
                {/* Stylized App / Browser Preview Window Header */}
                <div className={`w-full h-56 bg-gradient-to-br ${study.bgGradient} p-6 relative flex flex-col justify-between text-white overflow-hidden`}>
                  {/* Background Photo without watermark */}
                  <img
                    src={study.image}
                    alt={study.client}
                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40 pointer-events-none" />

                  {/* Browser Bar Mock */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 bg-black/30 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                      <span className="text-[10px] font-mono text-white/80 ml-2">{study.client.toLowerCase().replace(/\s+/g, '')}.com</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-white/20 text-[11px] font-mono uppercase font-bold text-white border border-white/30 backdrop-blur-md">
                      {study.category}
                    </span>
                  </div>

                  {/* Hero Metric Chips inside Screenshot */}
                  <div className="relative z-10 flex gap-3">
                    {study.metrics.map((m) => (
                      <div key={m.label} className="p-3 rounded-2xl bg-black/40 backdrop-blur-md border border-white/20">
                        <div className="text-[10px] font-mono text-white/70 uppercase">{m.label}</div>
                        <div className="text-xl font-extrabold text-amber-300">{m.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Client Name */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs font-bold uppercase text-[#0066cc] tracking-wider">
                        {study.client}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-2xl text-[#1e293b] mb-4">
                      {study.client} Case Study
                    </h3>

                    {/* Challenge */}
                    <div className="mb-4">
                      <div className="font-mono text-[11px] font-bold uppercase text-[#94a3b8] mb-1">
                        Challenge
                      </div>
                      <p className="text-sm text-[#64748b] leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="mb-4">
                      <div className="font-mono text-[11px] font-bold uppercase text-[#94a3b8] mb-1">
                        Solution
                      </div>
                      <p className="text-sm text-[#64748b] leading-relaxed">
                        {study.solution}
                      </p>
                    </div>

                    {/* Results */}
                    <div className="mb-6 p-4 rounded-xl bg-[#0066cc]/5 border border-[#0066cc]/15">
                      <div className="font-mono text-[11px] font-bold uppercase text-[#0066cc] mb-1 flex items-center gap-1">
                        <CheckCircle2 size={14} /> Key Deliverable Impact
                      </div>
                      <p className="text-sm font-semibold text-[#1e293b]">
                        {study.results}
                      </p>
                    </div>
                  </div>

                  <div>
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-xs px-3 py-1 rounded-lg text-[#64748b] bg-[#f1f5f9] border border-black/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 font-bold text-sm text-[#0066cc] hover:text-[#0052a3] transition-colors"
                    >
                      <span>Discuss Similar Growth Plan</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          style={{
            padding: '40px',
            background: 'linear-gradient(135deg, rgba(0, 102, 204, 0.08), rgba(0, 102, 204, 0.02))',
            border: '1px solid rgba(0, 102, 204, 0.15)',
            borderRadius: '24px',
          }}
        >
          {[
            { number: '50+', label: 'Enterprise Projects' },
            { number: '340%', label: 'Average Client ROI' },
            { number: '95%', label: 'Client Retention Rate' },
            { number: '5+', label: 'Years Driving Growth' },
          ].map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center"
            >
              <div
                className="font-display font-bold"
                style={{
                  fontSize: '2.5rem',
                  color: '#0066cc',
                  lineHeight: 1,
                }}
              >
                {metric.number}
              </div>
              <div
                className="font-semibold mt-2"
                style={{
                  fontSize: '0.85rem',
                  color: '#64748b',
                }}
              >
                {metric.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
