import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Filter, X, ExternalLink, Sparkles, TrendingUp, Layers, Quote } from 'lucide-react';
import { Link, useLocation } from 'wouter';

const categories = ['All', 'E-Commerce', 'SaaS & CRM', 'Education & Parks'];

interface CaseStudy {
  id: string;
  client: string;
  category: string;
  challenge: string;
  solution: string;
  results: string;
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  technologies: string[];
  metrics: { label: string; value: string; before: string; after: string }[];
  image: string;
  bgGradient: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'imagicaa',
    client: 'Imagicaa Water Park',
    category: 'Education & Parks',
    challenge: 'Low online direct bookings, high cart drop-offs on mobile devices, and legacy ticketing server downtime during summer peak hours.',
    solution: 'Rebuilt core Web App with an express ticketing workflow, automated WhatsApp booking confirmations, Google Ads funnel, and CDN edge optimization.',
    results: '340% increase in direct online ticket bookings, 65% reduction in checkout bounce rate, and 99.99% uptime during high season.',
    testimonial: {
      quote: "BlendSkills transformed our digital sales pipeline. Direct online bookings tripled in our very first summer campaign with zero server downtime.",
      author: "Marketing Director",
      role: "Imagicaa Entertainment",
    },
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Google Ads', 'WhatsApp Cloud API'],
    metrics: [
      { label: 'Direct Booking Growth', value: '+340%', before: '1,200/mo', after: '5,280/mo' },
      { label: 'Mobile Bounce Rate', value: '-65%', before: '72%', after: '25%' },
    ],
    image: 'https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?w=1200&auto=format&fit=crop&q=80',
    bgGradient: 'from-blue-600/90 via-indigo-600/90 to-cyan-500/90',
  },
  {
    id: 'wetnjoy',
    client: 'Wet N Joy Water Park',
    category: 'Education & Parks',
    challenge: 'Off-season revenue drop, inefficient ad spend, and weak social media engagement among local family demographics.',
    solution: 'Deployed year-round automated marketing engine, localized social media reels funnels, and a VIP loyalty referral portal.',
    results: '180% annual revenue growth, 50K+ organic social community built within 6 months, and 45% repeat customer rate.',
    testimonial: {
      quote: "The ROI on our digital campaigns jumped immediately. They turned our off-season lull into a steady stream of advance group bookings.",
      author: "Head of Operations",
      role: "Wet N Joy Parks",
    },
    technologies: ['Meta Ads', 'Instagram Growth', 'Klaviyo Email Automation', 'React'],
    metrics: [
      { label: 'Annual Revenue Boost', value: '+180%', before: '₹1.2Cr', after: '₹3.36Cr' },
      { label: 'Repeat Customer Rate', value: '45%', before: '12%', after: '45%' },
    ],
    image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=1200&auto=format&fit=crop&q=80',
    bgGradient: 'from-cyan-600/90 via-[#0066cc]/90 to-blue-700/90',
  },
  {
    id: 'adypu',
    client: 'ADYPU University',
    category: 'Education & Parks',
    challenge: 'Manual admission form reviews, delayed response times to prospective student inquiries, and disconnected lead channels.',
    solution: 'Custom student portal with automated WhatsApp bot lead qualification, CRM lead distribution, and real-time analytics dashboard.',
    results: '220% increase in qualified applications, 70% faster admission cycle, and 95% student portal adoption.',
    testimonial: {
      quote: "Our admissions department saved over 30 hours per week in manual inquiry handling thanks to the AI WhatsApp qualification bot.",
      author: "Admissions Registrar",
      role: "ADYPU Campus",
    },
    technologies: ['Custom CRM', 'WhatsApp AI Bot', 'React', 'Analytics Engine'],
    metrics: [
      { label: 'Qualified Applications', value: '+220%', before: '850/term', after: '2,720/term' },
      { label: 'Response Lead Time', value: '-70%', before: '48 hours', after: '10 mins' },
    ],
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&auto=format&fit=crop&q=80',
    bgGradient: 'from-violet-600/90 via-purple-600/90 to-[#0066cc]/90',
  },
  {
    id: 'toyworld',
    client: 'Toy World E-Commerce',
    category: 'E-Commerce',
    challenge: 'High cart abandonment rates during holiday sales peaks and slow mobile page performance on lower bandwidth connections.',
    solution: 'Headless storefront architecture with instant search, 1-click checkout integration, and AI predictive retargeting workflows.',
    results: '210% increase in mobile revenue, 3.2x return on ad spend (ROAS), and 40% reduction in cart abandonment.',
    testimonial: {
      quote: "Sub-second page loading and seamless 1-click checkout skyrocketed our holiday sales to record highs.",
      author: "Founder & CEO",
      role: "Toy World India",
    },
    technologies: ['React', 'Shopify Headless', 'Klaviyo', 'Performance SEO'],
    metrics: [
      { label: 'Mobile Revenue Growth', value: '+210%', before: '$18K/mo', after: '$55.8K/mo' },
      { label: 'Return on Ad Spend', value: '3.2x ROAS', before: '1.1x', after: '3.2x' },
    ],
    image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1200&auto=format&fit=crop&q=80',
    bgGradient: 'from-emerald-600/90 via-teal-600/90 to-cyan-600/90',
  },
];

export default function CaseStudies() {
  const [, setLocation] = useLocation();
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  const filteredStudies = caseStudies.filter(
    (s) => activeCategory === 'All' || s.category === activeCategory
  );

  return (
    <section id="results" className="relative py-24 md:py-32 bg-white text-slate-900" aria-labelledby="case-studies-heading">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#0066cc] mb-4">
            Results That Matter
          </p>
          <h2 id="case-studies-heading" className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 leading-tight mb-6">
            Real projects. Measurable impact.<br className="hidden md:block" />
            Sustainable growth.
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl leading-relaxed">
            Explore how we help industry leaders and fast-growing brands transform operations, acquire customers, and scale revenue.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 flex-wrap mb-12" role="group" aria-labelledby="filter-label">
          <div id="filter-label" className="flex items-center gap-1.5 text-xs text-slate-500 font-mono mr-2">
            <Filter size={14} aria-hidden="true" />
            <span>Filter:</span>
          </div>
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            const count =
              cat === 'All'
                ? caseStudies.length
                : caseStudies.filter((s) => s.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-[#0066cc] focus:ring-offset-2 ${
                  isActive
                    ? 'bg-[#0066cc] text-white shadow-md shadow-[#0066cc]/20'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
                aria-pressed={isActive}
                aria-label={`Filter by ${cat} (${count} projects)`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20" role="list" aria-label="Case studies and success stories">
          <AnimatePresence mode="popLayout">
            {filteredStudies.map((study, index) => (
              <motion.article
                key={study.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setSelectedStudy(study)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedStudy(study);
                  }
                }}
                tabIndex={0}
                className="group cursor-pointer overflow-hidden rounded-3xl bg-white border border-slate-200/80 hover:border-[#0066cc]/40 transition-all duration-300 shadow-sm hover:shadow-2xl hover:-translate-y-1 flex flex-col justify-between focus:outline-none focus:ring-2 focus:ring-[#0066cc] focus:ring-offset-2"
                role="listitem"
                aria-label={`Case study: ${study.client} - ${study.category}`}
              >
                {/* Screenshot Header */}
                <div className={`w-full h-56 bg-gradient-to-br ${study.bgGradient} p-6 relative flex flex-col justify-between text-white overflow-hidden`}>
                  <img
                    src={study.image}
                    alt={study.client}
                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40 pointer-events-none" />

                  {/* Top Bar */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                      <span className="text-[10px] font-mono text-white/90 ml-2">{study.client.toLowerCase().replace(/\s+/g, '')}.com</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-white/20 text-[10px] font-mono uppercase font-bold text-white border border-white/30 backdrop-blur-md">
                      {study.category}
                    </span>
                  </div>

                  {/* Metrics Overlay Chips */}
                  <div className="relative z-10 flex gap-3">
                    {study.metrics.map((m) => (
                      <div key={m.label} className="p-2.5 rounded-2xl bg-black/50 backdrop-blur-md border border-white/20">
                        <div className="text-[9px] font-mono text-slate-300 uppercase">{m.label}</div>
                        <div className="text-lg font-extrabold text-amber-300">{m.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <span className="font-mono text-xs font-bold uppercase text-[#0066cc] tracking-wider block mb-1">
                      {study.client}
                    </span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 group-hover:text-[#0066cc] transition-colors mb-3">
                      {study.client} Strategy Overview
                    </h3>

                    <div className="space-y-3">
                      <div>
                        <span className="font-mono text-[10px] font-bold uppercase text-slate-400 block mb-0.5">The Challenge</span>
                        <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                        <span className="font-mono text-[10px] font-bold uppercase text-[#0066cc] flex items-center gap-1 mb-1">
                          <CheckCircle2 size={12} /> Key Business Outcome
                        </span>
                        <p className="text-xs font-semibold text-slate-800">
                          {study.results}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {study.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="font-mono text-[10px] px-2.5 py-1 rounded-md text-slate-600 bg-slate-100">
                          {tech}
                        </span>
                      ))}
                      {study.technologies.length > 3 && (
                        <span className="font-mono text-[10px] px-2 py-1 rounded-md text-slate-400 bg-slate-50">
                          +{study.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    <button className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0066cc] group-hover:translate-x-1 transition-transform focus:outline-none focus:ring-2 focus:ring-[#0066cc] focus:ring-offset-2" aria-label={`View detailed case study for ${study.client}`}>
                      <span>View Case Study</span>
                      <ArrowRight size={14} aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Global Statistics Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-3xl bg-gradient-to-r from-slate-900 to-slate-950 text-white border border-slate-800 shadow-xl"
          role="region"
          aria-label="BlendSkills company statistics and achievements"
        >
          {[
            { number: '50+', label: 'Enterprise Projects' },
            { number: '340%', label: 'Average Client ROI' },
            { number: '95%', label: 'Client Retention Rate' },
            { number: '5+', label: 'Years Driving Growth' },
          ].map((metric) => (
            <div key={metric.label} className="text-center">
              <div className="font-display font-extrabold text-3xl sm:text-4xl text-cyan-400 leading-none">
                {metric.number}
              </div>
              <div className="font-medium text-xs sm:text-sm text-slate-400 mt-2">
                {metric.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Interactive Detail Modal */}
      <AnimatePresence>
        {selectedStudy && (
          <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto" role="dialog" aria-modal="true" aria-labelledby="modal-title">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedStudy(null)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
              aria-hidden="true"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-slate-200 max-h-[90vh] flex flex-col"
              role="document"
            >
              {/* Modal Banner Header */}
              <div className={`p-6 md:p-8 bg-gradient-to-br ${selectedStudy.bgGradient} text-white relative flex justify-between items-start`}>
                <div className="relative z-10 max-w-xl space-y-2">
                  <span className="px-3 py-1 rounded-full bg-white/20 border border-white/30 text-[10px] font-mono uppercase font-bold text-white tracking-wider inline-block">
                    {selectedStudy.category}
                  </span>
                  <h3 id="modal-title" className="font-display font-extrabold text-2xl md:text-3xl text-white">
                    {selectedStudy.client}
                  </h3>
                  <p className="text-xs md:text-sm text-white/90">
                    Comprehensive Case Study & Technical Architecture
                  </p>
                </div>

                <button
                  onClick={() => setSelectedStudy(null)}
                  className="w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors relative z-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
                  aria-label="Close case study modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Content Scrollable Area */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-8 text-slate-800">
                {/* Metrics Comparison */}
                <div>
                  <h4 className="font-mono text-xs font-bold uppercase text-[#0066cc] tracking-wider mb-3 flex items-center gap-1.5">
                    <TrendingUp size={16} /> Before vs After Impact Comparison
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {selectedStudy.metrics.map((m) => (
                      <div key={m.label} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                        <div className="flex justify-between items-center text-xs text-slate-500 font-medium">
                          <span>{m.label}</span>
                          <span className="font-bold text-[#0066cc] font-mono text-sm">{m.value}</span>
                        </div>
                        <div className="flex items-center gap-3 text-xs pt-1">
                          <div className="flex-1 p-2 rounded-xl bg-red-50 text-red-700 border border-red-100 font-mono text-center">
                            Before: <strong>{m.before}</strong>
                          </div>
                          <ArrowRight size={14} className="text-slate-400" />
                          <div className="flex-1 p-2 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100 font-mono text-center font-bold">
                            After: <strong>{m.after}</strong>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Detailed Breakdown */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <span className="font-mono text-xs font-bold uppercase text-slate-400">The Business Problem</span>
                    <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      {selectedStudy.challenge}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <span className="font-mono text-xs font-bold uppercase text-[#0066cc]">BlendSkills Solution</span>
                    <p className="text-sm text-slate-700 leading-relaxed bg-blue-50/50 p-4 rounded-2xl border border-blue-100">
                      {selectedStudy.solution}
                    </p>
                  </div>
                </div>

                {/* Testimonial Quote */}
                <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-3 relative overflow-hidden">
                  <Quote size={40} className="absolute top-3 right-3 text-slate-800 pointer-events-none" />
                  <p className="text-sm sm:text-base italic font-light text-slate-200 leading-relaxed relative z-10">
                    "{selectedStudy.testimonial.quote}"
                  </p>
                  <div className="text-xs text-cyan-300 font-mono font-bold pt-1">
                    — {selectedStudy.testimonial.author}, {selectedStudy.testimonial.role}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <span className="font-mono text-xs font-bold uppercase text-slate-400 block mb-2">Technologies & Stack Used</span>
                  <div className="flex flex-wrap gap-2">
                    {selectedStudy.technologies.map((t) => (
                      <span key={t} className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 font-mono text-xs font-semibold border border-slate-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer CTA */}
              <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-500 text-center sm:text-left">
                  Ready to build a similar growth engine for your organization?
                </div>
                <button
                  onClick={() => {
                    setSelectedStudy(null);
                    setLocation(`/contact?service=${encodeURIComponent(selectedStudy.category)}&msg=${encodeURIComponent(`Inquiring about a similar solution to ${selectedStudy.client}`)}`);
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#0066cc] hover:bg-[#0052a3] text-white font-bold text-xs shadow-lg shadow-[#0066cc]/20 flex items-center justify-center gap-2 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0066cc] focus:ring-offset-2"
                  aria-label={`Request strategy plan similar to ${selectedStudy.client}`}
                >
                  <span>Request Similar Strategy Plan</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
