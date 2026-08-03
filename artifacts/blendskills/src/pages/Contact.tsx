import { useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { motion } from 'framer-motion';
import { Sparkles, Clock, MapPin, Phone, Mail, CheckCircle, HelpCircle, ArrowRight } from 'lucide-react';
import ContactSection from '@/components/Contact';

const FAQ_ITEMS = [
  {
    question: 'What happens during the free consultation?',
    answer: 'During our 30-minute strategy call, we\'ll discuss your business goals, current challenges, and digital presence. We\'ll provide actionable insights and recommend tailored solutions for your specific needs.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope. A basic website typically takes 4-6 weeks, while comprehensive digital transformation projects can take 3-6 months. We provide detailed timelines during our initial consultation.',
  },
  {
    question: 'Do you work with startups and small businesses?',
    answer: 'Absolutely! We specialize in helping businesses of all sizes scale. We offer flexible engagement models and can scale our services to match your growth stage and budget requirements.',
  },
  {
    question: 'What industries do you specialize in?',
    answer: 'We have extensive experience across e-commerce, SaaS, education, healthcare, real estate, and professional services. Our adaptable approach allows us to deliver results in virtually any industry.',
  },
  {
    question: 'Do you offer ongoing support after project completion?',
    answer: 'Yes, we offer various maintenance and support packages to ensure your digital assets continue to perform optimally. We believe in building long-term partnerships with our clients.',
  },
];

const OFFICE_LOCATIONS = [
  {
    city: 'Pune',
    type: 'Technology Hub',
    address: 'Koregaon Park, Pune',
    state: 'Maharashtra, India',
    services: ['Software Development', 'AI Engineering', 'Technical Operations'],
    hours: 'Mon-Fri: 9:00 AM - 7:00 PM IST',
  },
  {
    city: 'Gaya',
    type: 'Client Relations',
    address: 'City Center, Gaya',
    state: 'Bihar, India',
    services: ['Client Meetings', 'Project Management', 'Business Development'],
    hours: 'Mon-Sat: 10:00 AM - 6:00 PM IST',
  },
];

export default function ContactPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  useScrollReveal();
  useDocumentTitle('Book a Consultation — Contact BlendSkills', 'Book a free 30-minute AI & digital strategy session with BlendSkills. Reach our Pune or Gaya offices via info@blendskills.co.in or +91 85308 19966.');

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#0a0e14] via-[#0e141d] to-[#0f1418] overflow-hidden">
        <div className="absolute inset-0">
          <div className="hero-mesh absolute inset-0 opacity-60" />
          <div className="absolute left-[10%] top-[20%] h-96 w-96 rounded-full bg-[#FF6B35]/10 blur-[8rem]" />
          <div className="absolute right-[10%] bottom-[20%] h-96 w-96 rounded-full bg-[#00F5D4]/10 blur-[8rem]" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#FF6B35]/20 to-[#FF6B35]/10 border border-[#FF6B35]/30 text-[#FF8557] font-mono text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles size={14} />
              <span>Get Started Today</span>
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
              Let's Build Something
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#6B3FB5] to-[#00F5D4]"> Amazing Together</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Ready to transform your digital presence? Book a free 30-minute strategy consultation with our experts and discover how we can accelerate your growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-24 md:py-32 bg-[#0f1418]">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF6B35] mb-4">Our Offices</p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
              Visit Us in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#00F5D4]">Pune or Gaya</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {OFFICE_LOCATIONS.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-[#FF6B35]/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF6B35] to-[#FF8557] text-white flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-2xl text-white mb-1">{office.city} Office</h3>
                    <p className="text-[#FF6B35] text-sm font-medium">{office.type}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-slate-400 shrink-0 mt-1" />
                    <div>
                      <p className="text-white text-sm">{office.address}</p>
                      <p className="text-slate-400 text-xs">{office.state}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock size={18} className="text-slate-400 shrink-0" />
                    <p className="text-slate-300 text-sm">{office.hours}</p>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <p className="text-xs text-slate-400 mb-2">Services Available:</p>
                  <div className="flex flex-wrap gap-2">
                    {office.services.map((service) => (
                      <span
                        key={service}
                        className="text-xs px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-[#0f1418] to-[#1a1f2e]">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF6B35] mb-4">FAQ</p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#00F5D4]">Questions</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {FAQ_ITEMS.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FF6B35]/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FF6B35]/20 text-[#FF6B35] flex items-center justify-center shrink-0">
                    <HelpCircle size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-lg text-white mb-2">{faq.question}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-slate-400 mb-4">Still have questions?</p>
            <a
              href="mailto:info@blendskills.co.in"
              className="inline-flex items-center gap-2 text-[#FF6B35] font-semibold hover:gap-3 transition-all"
            >
              <span>Send us an email</span>
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="py-16 bg-[#1a1f2e]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid sm:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10"
            >
              <div className="w-12 h-12 rounded-xl bg-[#00F5D4]/20 text-[#00F5D4] flex items-center justify-center shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-400 mb-1">Call Us</p>
                <a href="tel:+918530819966" className="text-white font-semibold hover:text-[#00F5D4] transition-colors">
                  +91 85308 19966
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FF6B35]/20 text-[#FF6B35] flex items-center justify-center shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-400 mb-1">Email Us</p>
                <a href="mailto:info@blendskills.co.in" className="text-white font-semibold hover:text-[#FF6B35] transition-colors">
                  info@blendskills.co.in
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10"
            >
              <div className="w-12 h-12 rounded-xl bg-[#6B3FB5]/20 text-[#6B3FB5] flex items-center justify-center shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-400 mb-1">Response Time</p>
                <p className="text-white font-semibold">Within 24 hours</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
