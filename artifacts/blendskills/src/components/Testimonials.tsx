import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: 'BlendSkills rebuilt our funnel from the ground up. Within a quarter our lead quality changed completely — not just volume.',
    name: 'Founder',
    role: 'D2C Skincare Brand',
    initials: 'F',
    rating: 5,
  },
  {
    quote: 'What stood out was the transparency. We could see exactly where every rupee of ad spend was going, every week.',
    name: 'Marketing Head',
    role: 'SaaS Platform',
    initials: 'MH',
    rating: 5,
  },
  {
    quote: 'The website they built converts nearly twice what our old one did. Development and marketing finally speak the same language.',
    name: 'Operations Lead',
    role: 'Retail Chain',
    initials: 'OL',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="relative" style={{ padding: '120px 24px', background: '#ffffff' }}>
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
            What Our Clients Say
          </p>
          <h2
            className="font-display font-bold leading-tight mb-6"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#1e293b',
            }}
          >
            Real stories.<br />
            Real growth.
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
            Hear from businesses that have transformed their operations, increased revenue, and achieved their goals with BlendSkills.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card group"
              style={{
                padding: '40px',
                borderRadius: '24px',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(248, 250, 252, 0.9))',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                backdropFilter: 'blur(10px)',
              }}
              whileHover={{
                transform: 'translateY(-8px)',
                borderColor: 'rgba(0, 102, 204, 0.3)',
                boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.1)',
                transition: { duration: 0.35 }
              }}
            >
              {/* Quote Icon */}
              <Quote size={32} style={{ color: '#0066cc', opacity: 0.3, marginBottom: '24px' }} />

              {/* Quote */}
              <p
                className="font-normal mb-8"
                style={{
                  fontSize: '1rem',
                  color: '#475569',
                  lineHeight: 1.7,
                }}
              >
                {testimonial.quote}
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6" style={{ borderTop: '1px solid rgba(0, 0, 0, 0.08)' }}>
                <div
                  className="flex items-center justify-center font-display font-bold"
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, rgba(0, 102, 204, 0.15), rgba(0, 102, 204, 0.05))',
                    border: '1px solid rgba(0, 102, 204, 0.2)',
                    color: '#0066cc',
                    fontSize: '0.9rem',
                  }}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <div
                    className="font-display font-semibold"
                    style={{
                      fontSize: '1rem',
                      color: '#1e293b',
                    }}
                  >
                    {testimonial.name}
                  </div>
                  <div
                    className="font-normal"
                    style={{
                      fontSize: '0.85rem',
                      color: '#64748b',
                    }}
                  >
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
