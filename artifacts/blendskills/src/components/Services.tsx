import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Bot, TrendingUp, Palette, Smartphone, BarChart3, ArrowRight, Check, Clock, Sparkles, X, Zap, Target, Users, Globe, Shield, Rocket, Lightbulb } from 'lucide-react';
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
      <div className="absolute bottom-3 left-6 w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#FF8557] shadow-lg border border-[#FF6B35]/20 flex items-center justify-center text-white z-10">
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
    details: {
      description: 'We build custom software solutions that scale with your business. From internal tools and ERP systems to customer portals and enterprise platforms, our development approach prioritizes performance, security, and user experience.',
      features: [
        { icon: Target, title: 'Custom Architecture', desc: 'Tailored solutions designed around your specific business needs and growth goals' },
        { icon: Shield, title: 'Enterprise Security', desc: 'Built-in security protocols, encryption, and compliance with industry standards' },
        { icon: Rocket, title: 'Scalable Infrastructure', desc: 'Cloud-native architecture that grows with your user base and data requirements' },
        { icon: Users, title: 'User-Centric Design', desc: 'Intuitive interfaces designed for your specific user workflows and use cases' },
      ],
      deliverables: [
        'Custom web applications and platforms',
        'Internal tools and ERP systems',
        'Customer portals and dashboards',
        'API development and integration',
        'Mobile app development',
        'Database design and optimization',
      ],
      timeline: '8-16 weeks depending on complexity',
      pricing: '$10,000 - $50,000+',
    },
  },
  {
    icon: Bot,
    title: 'AI & Automation',
    text: 'Intelligent automation that saves time, reduces errors, and scales operations. From chatbots to workflow automation, we make AI work for you.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
    cta: 'Explore Solutions →',
    details: {
      description: 'Transform your operations with intelligent automation. We implement AI solutions that save time, reduce errors, and scale your business operations efficiently.',
      features: [
        { icon: Zap, title: 'Process Automation', desc: 'Automate repetitive tasks and workflows to increase productivity and reduce errors' },
        { icon: Globe, title: 'AI Chatbots', desc: 'Intelligent conversational AI for customer service, sales, and support' },
        { icon: Lightbulb, title: 'Smart Analytics', desc: 'AI-powered insights and predictive analytics for better decision-making' },
        { icon: Users, title: 'Custom Training', desc: 'Fine-tuned AI models trained on your specific business data and use cases' },
      ],
      deliverables: [
        'Custom AI chatbots and virtual assistants',
        'Workflow automation systems',
        'Document processing automation',
        'Predictive analytics dashboards',
        'AI model training and fine-tuning',
        'Integration with existing systems',
      ],
      timeline: '4-12 weeks depending on complexity',
      pricing: '$5,000 - $30,000+',
    },
  },
  {
    icon: TrendingUp,
    title: 'Performance Marketing',
    text: 'Data-driven marketing strategies that deliver measurable ROI. SEO, PPC, social media, and content marketing optimized for conversions.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    cta: 'Explore Solutions →',
    details: {
      description: 'Drive measurable results with data-driven marketing strategies. Our performance marketing approach focuses on ROI, conversions, and sustainable growth.',
      features: [
        { icon: Target, title: 'Data-Driven Strategy', desc: 'Marketing decisions backed by analytics, A/B testing, and performance metrics' },
        { icon: Globe, title: 'Multi-Channel Approach', desc: 'Integrated campaigns across SEO, PPC, social media, and content marketing' },
        { icon: Rocket, title: 'Conversion Optimization', desc: 'Landing page optimization and funnel improvements to maximize conversions' },
        { icon: Users, title: 'Audience Targeting', desc: 'Precise audience segmentation and targeting for maximum campaign efficiency' },
      ],
      deliverables: [
        'SEO strategy and implementation',
        'PPC campaign management',
        'Social media marketing',
        'Content marketing strategy',
        'Email marketing automation',
        'Analytics and reporting dashboards',
      ],
      timeline: 'Ongoing with monthly optimization',
      pricing: '$2,000 - $10,000+ per month',
    },
  },
  {
    icon: Palette,
    title: 'Branding & Design',
    text: 'Strategic branding that resonates with your audience. Logo design, visual identity, and digital experiences that build trust and recognition.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=80',
    cta: 'Explore Solutions →',
    details: {
      description: 'Build a brand that resonates with your audience. Our strategic branding approach creates visual identities and digital experiences that build trust and recognition.',
      features: [
        { icon: Lightbulb, title: 'Brand Strategy', desc: 'Comprehensive brand positioning and messaging tailored to your target audience' },
        { icon: Palette, title: 'Visual Identity', desc: 'Cohesive design systems including logos, colors, typography, and brand guidelines' },
        { icon: Users, title: 'User Experience', desc: 'Research-driven design that prioritizes user needs and business goals' },
        { icon: Globe, title: 'Digital Presence', desc: 'Consistent brand experience across all digital touchpoints and platforms' },
      ],
      deliverables: [
        'Logo design and brand identity',
        'Brand guidelines and style guides',
        'Website and app UI/UX design',
        'Marketing collateral design',
        'Social media branding',
        'Brand audit and positioning',
      ],
      timeline: '4-8 weeks',
      pricing: '$5,000 - $25,000+',
    },
  },
  {
    icon: Smartphone,
    title: 'Web & Mobile Apps',
    text: 'High-performance web and mobile applications built for speed, scalability, and user experience. From MVPs to enterprise apps.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80',
    cta: 'Explore Solutions →',
    details: {
      description: 'Build high-performance web and mobile applications that deliver exceptional user experiences. From MVPs to enterprise apps, we focus on speed, scalability, and quality.',
      features: [
        { icon: Rocket, title: 'High Performance', desc: 'Optimized for speed and performance with modern frameworks and best practices' },
        { icon: Shield, title: 'Cross-Platform', desc: 'Apps that work seamlessly across web, iOS, and Android platforms' },
        { icon: Users, title: 'User-Centric Design', desc: 'Intuitive interfaces designed for optimal user experience and engagement' },
        { icon: Target, title: 'Scalable Architecture', desc: 'Built to scale from MVP to enterprise-level applications' },
      ],
      deliverables: [
        'Web application development',
        'iOS and Android mobile apps',
        'Progressive Web Apps (PWA)',
        'MVP development',
        'API integration and development',
        'App store optimization and deployment',
      ],
      timeline: '8-20 weeks depending on complexity',
      pricing: '$15,000 - $75,000+',
    },
  },
  {
    icon: BarChart3,
    title: 'Data & Analytics',
    text: 'Transform data into actionable insights. Custom dashboards, reporting systems, and business intelligence that drive smarter decisions.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    cta: 'Explore Solutions →',
    details: {
      description: 'Transform your data into actionable insights. We build custom dashboards, reporting systems, and business intelligence solutions that drive smarter business decisions.',
      features: [
        { icon: Lightbulb, title: 'Data Visualization', desc: 'Interactive dashboards and visualizations that make complex data easy to understand' },
        { icon: Target, title: 'Custom Reporting', desc: 'Tailored reports and KPIs specific to your business metrics and goals' },
        { icon: Globe, title: 'Real-Time Analytics', desc: 'Live data feeds and real-time monitoring for instant insights' },
        { icon: Shield, title: 'Data Integration', desc: 'Seamless integration with your existing data sources and systems' },
      ],
      deliverables: [
        'Custom analytics dashboards',
        'Business intelligence systems',
        'Data warehousing solutions',
        'Real-time monitoring systems',
        'Custom reporting tools',
        'Data integration and ETL',
      ],
      timeline: '6-12 weeks',
      pricing: '$8,000 - $40,000+',
    },
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
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

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
    <section id="services" className="relative py-24 md:py-32 bg-gradient-to-b from-[#0f1418] to-[#1a1f2e] text-white" aria-labelledby="services-heading">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF6B35] mb-4">
            What We Do
          </p>
          <h2 id="services-heading" className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-6">
            Everything you need to<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#00F5D4]">build, automate, and grow</span>
          </h2>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed">
            From custom software and AI automation to performance marketing and branding—we deliver end-to-end solutions that drive real business results.
          </p>
        </motion.div>

        {/* Service Cards - Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {/* Large Featured Card - Span 2 cols */}
          {(() => {
            const service = services[0];
            const Icon = service.icon;
            return (
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                onClick={() => setSelectedService(service)}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="md:col-span-2 group overflow-hidden flex flex-col justify-between rounded-2xl bg-gradient-to-br from-[#1a1f2e] to-[#0f1418] border border-[#FF6B35]/20 shadow-lg hover:shadow-xl hover:border-[#FF6B35]/40 transition-all duration-300 cursor-pointer"
                role="listitem"
              >
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/30 pointer-events-none" />
                  <div className="absolute bottom-3 left-6 w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#FF8557] shadow-lg border border-[#FF6B35]/20 flex items-center justify-center text-white z-10">
                    <Icon size={22} />
                  </div>
                </div>
                <div className="p-8 pt-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-display font-bold text-2xl text-white group-hover:text-[#FF6B35] transition-colors mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {service.text}
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedService(service);
                    }}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#FF6B35] group-hover:translate-x-1 transition-transform focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:ring-offset-2 focus:ring-offset-[#0f1418]"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <span>Explore Solutions</span>
                    <ArrowRight size={16} aria-hidden="true" />
                  </button>
                </div>
              </motion.article>
            );
          })()}

          {/* Tall Card - Span 2 rows */}
          {(() => {
            const service = services[1];
            const Icon = service.icon;
            return (
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                onClick={() => setSelectedService(service)}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="md:row-span-2 group overflow-hidden flex flex-col justify-between rounded-2xl bg-gradient-to-br from-[#1a1f2e] to-[#0f1418] border border-[#FF6B35]/20 shadow-lg hover:shadow-xl hover:border-[#FF6B35]/40 transition-all duration-300 cursor-pointer"
                role="listitem"
              >
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/30 pointer-events-none" />
                  <div className="absolute bottom-3 left-6 w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#FF8557] shadow-lg border border-[#FF6B35]/20 flex items-center justify-center text-white z-10">
                    <Icon size={22} />
                  </div>
                </div>
                <div className="p-8 pt-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-display font-bold text-xl text-white group-hover:text-[#FF6B35] transition-colors mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {service.text}
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedService(service);
                    }}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#FF6B35] group-hover:translate-x-1 transition-transform focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:ring-offset-2 focus:ring-offset-[#0f1418]"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <span>Explore Solutions</span>
                    <ArrowRight size={16} aria-hidden="true" />
                  </button>
                </div>
              </motion.article>
            );
          })()}

          {/* Standard Cards */}
          {services.slice(2, 4).map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                onClick={() => setSelectedService(service)}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group overflow-hidden flex flex-col justify-between rounded-2xl bg-gradient-to-br from-[#1a1f2e] to-[#0f1418] border border-[#FF6B35]/20 shadow-lg hover:shadow-xl hover:border-[#FF6B35]/40 transition-all duration-300 cursor-pointer"
                role="listitem"
              >
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/30 pointer-events-none" />
                  <div className="absolute bottom-3 left-6 w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#FF8557] shadow-lg border border-[#FF6B35]/20 flex items-center justify-center text-white z-10">
                    <Icon size={22} />
                  </div>
                </div>
                <div className="p-8 pt-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-display font-bold text-xl text-white group-hover:text-[#FF6B35] transition-colors mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {service.text}
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedService(service);
                    }}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#FF6B35] group-hover:translate-x-1 transition-transform focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:ring-offset-2 focus:ring-offset-[#0f1418]"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <span>Explore Solutions</span>
                    <ArrowRight size={16} aria-hidden="true" />
                  </button>
                </div>
              </motion.article>
            );
          })}

          {/* Wide Card - Span 2 cols */}
          {(() => {
            const service = services[4];
            const Icon = service.icon;
            return (
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                onClick={() => setSelectedService(service)}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="md:col-span-2 group overflow-hidden flex flex-col justify-between rounded-2xl bg-gradient-to-br from-[#1a1f2e] to-[#0f1418] border border-[#FF6B35]/20 shadow-lg hover:shadow-xl hover:border-[#FF6B35]/40 transition-all duration-300 cursor-pointer"
                role="listitem"
              >
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/30 pointer-events-none" />
                  <div className="absolute bottom-3 left-6 w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#FF8557] shadow-lg border border-[#FF6B35]/20 flex items-center justify-center text-white z-10">
                    <Icon size={22} />
                  </div>
                </div>
                <div className="p-8 pt-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-display font-bold text-2xl text-white group-hover:text-[#FF6B35] transition-colors mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {service.text}
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedService(service);
                    }}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#FF6B35] group-hover:translate-x-1 transition-transform focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:ring-offset-2 focus:ring-offset-[#0f1418]"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <span>Explore Solutions</span>
                    <ArrowRight size={16} aria-hidden="true" />
                  </button>
                </div>
              </motion.article>
            );
          })()}

          {/* Last Card */}
          {(() => {
            const service = services[5];
            const Icon = service.icon;
            return (
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                onClick={() => setSelectedService(service)}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group overflow-hidden flex flex-col justify-between rounded-2xl bg-gradient-to-br from-[#1a1f2e] to-[#0f1418] border border-[#FF6B35]/20 shadow-lg hover:shadow-xl hover:border-[#FF6B35]/40 transition-all duration-300 cursor-pointer"
                role="listitem"
              >
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/30 pointer-events-none" />
                  <div className="absolute bottom-3 left-6 w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#FF8557] shadow-lg border border-[#FF6B35]/20 flex items-center justify-center text-white z-10">
                    <Icon size={22} />
                  </div>
                </div>
                <div className="p-8 pt-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-display font-bold text-xl text-white group-hover:text-[#FF6B35] transition-colors mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {service.text}
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedService(service);
                    }}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#FF6B35] group-hover:translate-x-1 transition-transform focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:ring-offset-2 focus:ring-offset-[#0f1418]"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <span>Explore Solutions</span>
                    <ArrowRight size={16} aria-hidden="true" />
                  </button>
                </div>
              </motion.article>
            );
          })()}
        </div>

        {/* Interactive Scope & Price Builder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-6 sm:p-8 md:p-10 bg-white border border-slate-200 shadow-xl space-y-8"
          role="region"
          aria-labelledby="scope-builder-heading"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 text-[#0066cc] font-mono text-xs font-bold uppercase tracking-wider mb-1">
                <Sparkles size={14} />
                <span>Interactive Scope Builder</span>
              </div>
              <h3 id="scope-builder-heading" className="font-display font-extrabold text-2xl md:text-3xl text-slate-900">
                Tailor Your Project Scope
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Select the modules your project needs to generate a timeline and budget estimate.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Module Checkboxes */}
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-3" role="group" aria-labelledby="scope-builder-heading">
              {SCOPE_MODULES.map((m) => {
                const isSelected = selectedModules.includes(m.id);
                return (
                  <div
                    key={m.id}
                    onClick={() => toggleModule(m.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleModule(m.id);
                      }
                    }}
                    tabIndex={0}
                    role="checkbox"
                    aria-checked={isSelected}
                    aria-label={`Select ${m.name} module, estimated ${m.estWeeks} weeks and $${m.estCost.toLocaleString()}`}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 focus:outline-none focus:ring-2 focus:ring-[#0066cc] focus:ring-offset-2 ${
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
                          <Clock size={12} aria-hidden="true" /> ~{m.estWeeks} wks
                        </span>
                        <span aria-hidden="true">•</span>
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
            <div className="lg:col-span-4 rounded-2xl p-6 bg-slate-900 text-white shadow-xl space-y-6 border border-slate-800" role="region" aria-live="polite" aria-atomic="true">
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
                className="w-full py-3.5 px-5 rounded-xl bg-[#0066cc] hover:bg-[#0052a3] text-white font-bold text-sm shadow-lg shadow-[#0066cc]/30 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#0066cc] focus:ring-offset-2 focus:ring-offset-slate-900"
                aria-label={`Request quote for ${selectedModules.length} modules, estimated cost $${totalCost.toLocaleString()}`}
              >
                <span>Request Detailed Scope Proposal</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Service Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-[#1a1f2e] to-[#0f1418] border border-[#FF6B35]/30 rounded-3xl shadow-2xl custom-scrollbar"
              onClick={(e) => e.stopPropagation()}

            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {/* Header */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f2e] via-[#1a1f2e]/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#FF8557] flex items-center justify-center text-white">
                      <selectedService.icon size={24} />
                    </div>
                    <h2 className="font-display font-extrabold text-2xl md:text-3xl text-white">
                      {selectedService.title}
                    </h2>
                  </div>
                </div>
              </div>

              {/* Content - Enhanced Graphical Bento Grid */}
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Overview Card - Full Width with visual emphasis */}
                  <div className="md:col-span-3 p-6 rounded-2xl bg-gradient-to-br from-[#FF6B35]/10 to-[#FF6B35]/5 border border-[#FF6B35]/30 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B35]/10 rounded-full blur-3xl" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#FF8557] flex items-center justify-center text-white">
                          <selectedService.icon size={24} />
                        </div>
                        <h3 className="font-display font-bold text-xl text-white">Overview</h3>
                      </div>
                      <p className="text-slate-300 leading-relaxed">
                        {selectedService.details.description}
                      </p>
                    </div>
                  </div>

                  {/* Key Features with visual progress indicators */}
                  {selectedService.details.features.map((feature, index) => {
                    const FeatureIcon = feature.icon;
                    const progress = [85, 92, 78, 88][index] || 85;
                    return (
                      <div
                        key={index}
                        className="p-5 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-[#FF6B35]/30 transition-all"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF6B35]/20 to-[#FF6B35]/10 flex items-center justify-center text-[#FF6B35] shrink-0">
                            <FeatureIcon size={20} />
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-white">{progress}%</div>
                            <div className="text-xs text-slate-400">Expertise</div>
                          </div>
                        </div>
                        <h4 className="font-bold text-white mb-2">{feature.title}</h4>
                        <p className="text-sm text-slate-400 leading-relaxed mb-3">{feature.desc}</p>
                        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                            className="h-full bg-gradient-to-r from-[#FF6B35] to-[#FF8557] rounded-full"
                          />
                        </div>
                      </div>
                    );
                  })}

                  {/* Deliverables with visual count */}
                  <div className="md:col-span-2 p-6 rounded-2xl bg-gradient-to-br from-[#00F5D4]/5 to-[#00F5D4]/[0.02] border border-[#00F5D4]/20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#00F5D4]/10 rounded-full blur-3xl" />
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-display font-bold text-lg text-white">What We Deliver</h3>
                        <div className="flex items-center gap-2 bg-[#00F5D4]/20 px-3 py-1 rounded-full">
                          <Check size={16} className="text-[#00F5D4]" />
                          <span className="text-sm font-bold text-[#00F5D4]">{selectedService.details.deliverables.length} Items</span>
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {selectedService.details.deliverables.map((deliverable, index) => (
                          <div key={index} className="flex items-start gap-3 text-slate-300">
                            <div className="w-6 h-6 rounded-full bg-[#00F5D4]/20 flex items-center justify-center text-[#00F5D4] shrink-0 mt-0.5">
                              <Check size={12} />
                            </div>
                            <span className="text-sm">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Stats Visualization */}
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-[#FF6B35]/10 to-[#FF6B35]/5 border border-[#FF6B35]/20">
                    <div className="flex items-center gap-2 text-[#FF6B35] mb-4">
                      <Clock size={18} />
                      <span className="font-bold text-sm">Timeline</span>
                    </div>
                    <div className="relative">
                      <div className="text-3xl font-display font-extrabold text-white mb-1">
                        {selectedService.details.timeline.includes('8-16') ? '8-16' : 
                         selectedService.details.timeline.includes('4-12') ? '4-12' :
                         selectedService.details.timeline.includes('4-8') ? '4-8' : 'Ongoing'}
                      </div>
                      <div className="text-sm text-slate-400">Weeks</div>
                      <div className="mt-3 flex gap-1">
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className={`h-2 flex-1 rounded-full ${
                              i < 3 ? 'bg-[#FF6B35]' : 'bg-white/20'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Pricing with visual tier */}
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-[#00F5D4]/10 to-[#00F5D4]/5 border border-[#00F5D4]/20">
                    <div className="flex items-center gap-2 text-[#00F5D4] mb-4">
                      <Sparkles size={18} />
                      <span className="font-bold text-sm">Pricing</span>
                    </div>
                    <div className="relative">
                      <div className="text-3xl font-display font-extrabold text-white mb-1">
                        {selectedService.details.pricing.includes('$10,000') ? '$10K+' :
                         selectedService.details.pricing.includes('$5,000') ? '$5K+' :
                         selectedService.details.pricing.includes('$2,000') ? '$2K+' : '$2K+'}
                      </div>
                      <div className="text-sm text-slate-400">Starting Investment</div>
                      <div className="mt-3 grid grid-cols-3 gap-1">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className={`h-2 rounded-full ${
                              i < 2 ? 'bg-[#00F5D4]' : 'bg-white/20'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA Card - Full Width with visual emphasis */}
                  <div className="md:col-span-3 p-6 rounded-2xl bg-gradient-to-r from-[#FF6B35]/10 to-[#00F5D4]/10 border border-white/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 to-[#00F5D4]/5" />
                    <div className="relative z-10 flex items-center justify-between">
                      <div>
                        <h3 className="font-display font-bold text-xl text-white mb-2">Ready to get started?</h3>
                        <p className="text-sm text-slate-300">Let's discuss how we can help with {selectedService.title}</p>
                      </div>
                      <Link
                        to="/contact"
                        onClick={() => setSelectedService(null)}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#FF6B35] to-[#FF8557] hover:from-[#FF8557] hover:to-[#FF6B35] text-white font-bold transition-all shadow-lg shadow-[#FF6B35]/30"
                      >
                        <span>Get Started</span>
                        <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
