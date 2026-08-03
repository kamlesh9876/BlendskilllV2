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
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#0f1418] to-[#1a1f2e]" aria-labelledby="testimonials-heading">
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
            What Our Clients Say
          </p>
          <h2 id="testimonials-heading" className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-6">
            Real stories.<br />
            Real growth.
          </h2>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed">
            Hear from businesses that have transformed their operations, increased revenue, and achieved their goals with BlendSkills.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list" aria-label="Client testimonials">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group p-10 rounded-2xl bg-gradient-to-br from-[#141823]/60 to-[#0f121b]/50 border border-[#FF6B35]/15 backdrop-blur-xl hover:-translate-y-2 hover:border-[#FF6B35]/30 hover:shadow-xl hover:shadow-[#FF6B35]/15 transition-all duration-350"
              role="listitem"
            >
              {/* Quote Icon */}
              <Quote size={32} className="text-[#FF6B35] opacity-40 mb-6" aria-hidden="true" />

              {/* Quote */}
              <blockquote className="text-white text-base leading-relaxed mb-8">
                {testimonial.quote}
              </blockquote>

              {/* Rating */}
              <div className="flex gap-1 mb-6" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#FF6B35" color="#FF6B35" aria-hidden="true" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/8">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6B35]/20 to-[#FF6B35]/8 border border-[#FF6B35]/25 text-[#FF6B35] font-display font-bold text-sm">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-display font-semibold text-white text-base">
                    {testimonial.name}
                  </div>
                  <div className="text-slate-400 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
