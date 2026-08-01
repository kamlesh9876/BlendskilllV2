import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Bot, TrendingUp, Palette, Smartphone, BarChart3, ArrowRight, Check, Clock, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'wouter';
import type { LucideIcon } from 'lucide-react';
import { Skeleton } from './Skeleton';

function ServiceCardImage({ src, alt, icon: Icon }: { src: string; alt: string; icon: LucideIcon }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-44 overflow-hidden bg-slate-100">
      {!loaded && <Skeleton className="absolute inset-0 w-full h-full rounded-none" />}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/30 pointer-events-none" />

      {/* Icon Badge Overlay */}
      <div className="absolute bottom-3 left-6 w-12 h-12 rounded-xl bg-white shadow-lg border border-black/5 flex items-center justify-center text-[#0066cc] z-10">
        <Icon size={22} />
      </div>
    </div>
  );
}

const services = [
  {
    icon: Code,
    title: 'Custom Software Development',
    text: 'Scalable software solutions designed around your business goals—from internal tools and ERP systems to customer portals and enterprise platforms.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80',
    cta: 'Explore Solutions →',
  },
  {
    icon: Bot,
    title: 'AI & Automation',
    text: 'Intelligent automation that saves time, reduces errors, and scales operations. From chatbots to workflow automation, we make AI work for you.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
    cta: 'Explore Solutions →',
  },
  {
    icon: TrendingUp,
    title: 'Performance Marketing',
    text: 'Data-driven marketing strategies that deliver measurable ROI. SEO, PPC, social media, and content marketing optimized for conversions.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    cta: 'Explore Solutions →',
  },
  {
    icon: Palette,
    title: 'Branding & Design',
    text: 'Strategic branding that resonates with your audience. Logo design, visual identity, and digital experiences that build trust and recognition.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=80',
    cta: 'Explore Solutions →',
  },
  {
    icon: Smartphone,
    title: 'Web & Mobile Apps',
    text: 'High-performance web and mobile applications built for speed, scalability, and user experience. From MVPs to enterprise apps.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80',
    cta: 'Explore Solutions →',
  },
  {
    icon: BarChart3,
    title: 'Data & Analytics',
    text: 'Transform data into actionable insights. Custom dashboards, reporting systems, and business intelligence that drive smarter decisions.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    cta: 'Explore Solutions →',
  },
];

interface ModuleOption {
  id: string;
  name: string;
  category: string;
  estWeeks: number;
  estCost: number;
}

const SCOPE_MODULES: ModuleOption[] = [
  { id: 'web', name: 'Responsive Web/App Frontend', category: 'Dev', estWeeks: 2, estCost: 2500 },
  { id: 'backend', name: 'Custom API & DB Backend', category: 'Dev', estWeeks: 3, estCost: 3500 },
  { id: 'ai', name: 'AI Chatbot & Automation Bot', category: 'AI', estWeeks: 1, estCost: 2000 },
  { id: 'seo', name: 'Technical SEO & Speed Optimization', category: 'Marketing', estWeeks: 1, estCost: 1500 },
  { id: 'ads', name: 'Google & Meta Ads Lead Funnels', category: 'Marketing', estWeeks: 1, estCost: 1800 },
  { id: 'branding', name: 'Brand Identity & Design System', category: 'Design', estWeeks: 2, estCost: 2000 },
];

export default function Services() {
  const [, setLocation] = useLocation();
  const [selectedModules, setSelectedModules] = useState<string[]>(['web', 'ai']);

  const toggleModule = (id: string) => {
    setSelectedModules((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  const totalWeeks = SCOPE_MODULES.filter((m) => selectedModules.includes(m.id)).reduce(
    (acc, item) => acc + item.estWeeks,
    0
  );

  const totalCost = SCOPE_MODULES.filter((m) => selectedModules.includes(m.id)).reduce(
    (acc, item) => acc + item.estCost,
    0
  );

  const handleRequestScopeQuote = () => {
    const moduleNames = SCOPE_MODULES.filter((m) => selectedModules.includes(m.id))
      .map((m) => m.name)
      .join(', ');

    const msg = `Custom Scope Request: ${moduleNames}. Estimated Timeline: ~${totalWeeks} weeks.`;

    setLocation(
      `/contact?service=${encodeURIComponent('Custom Software & AI Scope')}&budget=${encodeURIComponent(
        `$${totalCost.toLocaleString()}`
      )}&msg=${encodeURIComponent(msg)}`
    );
  };

  return (
    <section id="services" className="relative py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#0066cc] mb-4">
            What We Do
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 leading-tight mb-6">
            Everything you need to<br className="hidden md:block" />
            build, automate, and grow
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl leading-relaxed">
            From custom software and AI automation to performance marketing and branding—we deliver end-to-end solutions that drive real business results.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card group overflow-hidden flex flex-col justify-between rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-2xl hover:border-[#0066cc]/40 transition-all duration-300"
            >
              <ServiceCardImage src={service.image} alt={service.title} icon={service.icon} />

              <div className="p-8 pt-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-display font-bold text-xl text-slate-900 group-hover:text-[#0066cc] transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.text}
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#0066cc] group-hover:translate-x-1 transition-transform"
                >
                  <span>Explore Solutions</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Scope & Price Builder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-6 sm:p-8 md:p-10 bg-white border border-slate-200 shadow-xl space-y-8"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 text-[#0066cc] font-mono text-xs font-bold uppercase tracking-wider mb-1">
                <Sparkles size={14} />
                <span>Interactive Scope Builder</span>
              </div>
              <h3 className="font-display font-extrabold text-2xl md:text-3xl text-slate-900">
                Tailor Your Project Scope
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Select the modules your project needs to generate a timeline and budget estimate.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Module Checkboxes */}
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-3">
              {SCOPE_MODULES.map((m) => {
                const isSelected = selectedModules.includes(m.id);
                return (
                  <div
                    key={m.id}
                    onClick={() => toggleModule(m.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${
                      isSelected
                        ? 'bg-blue-50/60 border-[#0066cc] shadow-sm'
                        : 'bg-slate-50/80 border-slate-200/80 hover:bg-slate-100/80'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center mt-0.5 transition-colors ${
                        isSelected ? 'bg-[#0066cc] text-white' : 'border border-slate-300 bg-white'
                      }`}
                    >
                      {isSelected && <Check size={14} />}
                    </div>

                    <div className="flex-1">
                      <div className="flex justify-between items-center text-xs font-bold text-slate-900 mb-1">
                        <span>{m.name}</span>
                      </div>
                      <div className="flex items-center gap-3 text-[11px] text-slate-500 font-mono">
                        <span className="flex items-center gap-1">
                          <Clock size={12} /> ~{m.estWeeks} wks
                        </span>
                        <span>•</span>
                        <span className="font-bold text-[#0066cc]">
                          ${m.estCost.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Live Estimate Card */}
            <div className="lg:col-span-4 rounded-2xl p-6 bg-slate-900 text-white shadow-xl space-y-6 border border-slate-800">
              <span className="font-mono text-xs uppercase font-bold text-cyan-400 tracking-wider block">
                Estimated Project Plan
              </span>

              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                  <span className="text-xs text-slate-400">Selected Modules</span>
                  <span className="font-mono text-sm font-bold text-white">
                    {selectedModules.length} Active
                  </span>
                </div>

                <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                  <span className="text-xs text-slate-400">Est. Time to Market</span>
                  <span className="font-mono text-sm font-bold text-cyan-300">
                    ~{totalWeeks > 0 ? totalWeeks : 1} Weeks
                  </span>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <span className="text-xs text-slate-300 font-medium">Estimated Investment</span>
                  <span className="font-display font-extrabold text-2xl text-emerald-400">
                    ${totalCost.toLocaleString()}
                  </span>
                </div>
              </div>

              <button
                onClick={handleRequestScopeQuote}
                disabled={selectedModules.length === 0}
                className="w-full py-3.5 px-5 rounded-xl bg-[#0066cc] hover:bg-[#0052a3] text-white font-bold text-sm shadow-lg shadow-[#0066cc]/30 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
              >
                <span>Request Detailed Scope Proposal</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
