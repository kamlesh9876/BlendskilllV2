import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Bot, TrendingUp, Palette, Smartphone, BarChart3, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
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

export default function Services() {
  return (
    <section className="relative" style={{ padding: '120px 24px', background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)' }}>
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
            What We Do
          </p>
          <h2
            className="font-display font-bold leading-tight mb-6"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#1e293b',
              maxWidth: '700px',
            }}
          >
            Everything you need to<br />
            build, automate, and grow
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
            From custom software and AI automation to performance marketing and branding—we deliver end-to-end solutions that drive real business results.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card group overflow-hidden flex flex-col justify-between"
              style={{
                borderRadius: '24px',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 250, 252, 0.95))',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                backdropFilter: 'blur(10px)',
              }}
              whileHover={{
                transform: 'translateY(-8px)',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(248, 250, 252, 1))',
                borderColor: 'rgba(0, 102, 204, 0.4)',
                boxShadow: '0 24px 48px -16px rgba(0, 0, 0, 0.1), 0 0 40px -12px rgba(0, 102, 204, 0.2)',
                transition: { duration: 0.35 }
              }}
            >
              {/* Card Image Cover with Skeleton Loading */}
              <ServiceCardImage src={service.image} alt={service.title} icon={service.icon} />

              <div className="p-8 pt-4 flex-1 flex flex-col justify-between">
                <div>
                  {/* Title */}
                  <h3
                    className="font-display font-semibold mb-3 text-xl text-[#1e293b]"
                  >
                    {service.title}
                  </h3>

                  {/* Text */}
                  <p
                    className="font-normal mb-6 text-sm text-[#64748b] leading-relaxed"
                  >
                    {service.text}
                  </p>
                </div>

                {/* CTA */}
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 font-semibold transition-all duration-300"
                  style={{
                    fontSize: '0.9rem',
                    color: '#0066cc',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#1e293b';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#0066cc';
                  }}
                >
                  {service.cta}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
