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
    <section className="relative" style={{ padding: '120px 24px', background: 'linear-gradient(to bottom, #0f1418, #1a1f2e)' }}>
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
            style={{ color: '#FF6B35' }}
          >
            What Our Clients Say
          </p>
          <h2
            className="font-display font-bold leading-tight mb-6"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#FFFFFF',
            }}
          >
            Real stories.<br />
            Real growth.
          </h2>
          <p
            className="font-normal"
            style={{
              fontSize: '1.1rem',
              color: '#CBD5E1',
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
              className="group"
              style={{
                padding: '40px',
                borderRadius: '20px',
                background: 'linear-gradient(135deg, rgba(20, 24, 35, 0.6), rgba(15, 18, 27, 0.5))',
                border: '1px solid rgba(255, 107, 53, 0.15)',
                backdropFilter: 'blur(16px)',
              }}
              whileHover={{
                transform: 'translateY(-8px)',
                borderColor: 'rgba(255, 107, 53, 0.3)',
                boxShadow: '0 20px 40px -12px rgba(255, 107, 53, 0.15)',
                transition: { duration: 0.35 }
              }}
            >
              {/* Quote Icon */}
              <Quote size={32} style={{ color: '#FF6B35', opacity: 0.4, marginBottom: '24px' }} />

              {/* Quote */}
              <p
                className="font-normal mb-8"
                style={{
                  fontSize: '1rem',
                  color: '#E0E0E0',
                  lineHeight: 1.7,
                }}
              >
                {testimonial.quote}
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#FF6B35" color="#FF6B35" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div
                  className="flex items-center justify-center font-display font-bold"
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.2), rgba(255, 107, 53, 0.08))',
                    border: '1px solid rgba(255, 107, 53, 0.25)',
                    color: '#FF6B35',
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
                      color: '#FFFFFF',
                    }}
                  >
                    {testimonial.name}
                  </div>
                  <div
                    className="font-normal"
                    style={{
                      fontSize: '0.85rem',
                      color: '#999AAA',
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
