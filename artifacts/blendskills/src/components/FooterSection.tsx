import { motion } from 'framer-motion';
import { ArrowRight, Instagram, Linkedin, Mail, Sparkles, MapPin, Phone, ArrowUp, Facebook, Twitter, ChevronRight } from 'lucide-react';
import { Link } from 'wouter';
import { useState, useEffect } from 'react';

const FOOTER_LINKS = {
  services: [
    { label: 'Custom Software Development', href: '/services' },
    { label: 'AI & Automation', href: '/services' },
    { label: 'Performance Marketing', href: '/services' },
    { label: 'UI/UX Design', href: '/services' },
    { label: 'Business Intelligence', href: '/services' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Case Studies', href: '/results' },
    { label: 'Our Process', href: '/process' },
    { label: 'Careers', href: '/contact' },
    { label: 'Contact', href: '/contact' },
  ],
  resources: [
    { label: 'Blog', href: '/insights' },
    { label: 'Industries', href: '/industries' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Solutions', href: '/solutions' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
};

export default function FooterSection() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-[1000] flex items-center justify-center rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF8557] p-3 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:bottom-8"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}

      <footer id="footer" className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-[#0a0e14] via-[#0e141d] to-[#05070b]">
        <div className="pointer-events-none absolute inset-0">
          <div className="hero-mesh absolute inset-0 opacity-60" />
          <div className="absolute left-[10%] top-[10%] h-64 w-64 rounded-full bg-[#FF6B35]/10 blur-[7rem]" />
          <div className="absolute bottom-[5%] right-[8%] h-72 w-72 rounded-full bg-[#00F5D4]/10 blur-[8rem]" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16 md:px-12 lg:px-16 lg:py-24">
          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[2rem] border border-white/10 bg-white/6 p-8 shadow-[0_24px_90px_rgba(3,7,18,0.4)] backdrop-blur-xl md:p-10"
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FF6B35]/20 bg-[#FF6B35]/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#FF8557]">
                  <Sparkles size={13} />
                  Ready when you are
                </div>
                <h2 className="mb-4 font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
                  Let's shape something unmistakably premium.
                </h2>
                <p className="max-w-xl text-base leading-8 text-[#A8B0BF]">
                  From product strategy to engineering execution, we help ambitious teams launch experiences that feel as sharp as they perform.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#FF6B35] to-[#FF8557] px-6 py-3.5 font-semibold text-white shadow-[0_20px_50px_-12px_rgba(255,107,53,0.45)] transition-all duration-300 hover:-translate-y-1">
                  Book a consultation
                  <ArrowRight size={17} />
                </Link>
                <a href="mailto:info@blendskills.co.in" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/8 px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:border-[#00F5D4]/40 hover:bg-white/12">
                  <Mail size={17} />
                  Reach us directly
                </a>
              </div>
            </div>
          </motion.div>

          {/* Footer Links Grid */}
          <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-10 md:grid-cols-4 lg:gap-12">
            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
              <ul className="space-y-3">
                {FOOTER_LINKS.services.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-sm text-[#A8B0BF] transition-colors duration-300 hover:text-white"
                    >
                      <ChevronRight size={12} className="opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
              <ul className="space-y-3">
                {FOOTER_LINKS.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-sm text-[#A8B0BF] transition-colors duration-300 hover:text-white"
                    >
                      <ChevronRight size={12} className="opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white">Resources</h3>
              <ul className="space-y-3">
                {FOOTER_LINKS.resources.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-sm text-[#A8B0BF] transition-colors duration-300 hover:text-white"
                    >
                      <ChevronRight size={12} className="opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="mt-1 shrink-0 text-[#FF6B35]" />
                  <div>
                    <p className="text-sm text-[#A8B0BF]">Pune & Gaya, India</p>
                    <p className="text-xs text-[#7E8798]">Serving clients nationwide & globally</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="shrink-0 text-[#FF6B35]" />
                  <a href="tel:+918530819966" className="text-sm text-[#A8B0BF] transition-colors duration-300 hover:text-white">
                    +91 85308 19966
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-[#FF6B35]" />
                  <a href="mailto:info@blendskills.co.in" className="text-sm text-[#A8B0BF] transition-colors duration-300 hover:text-white">
                    info@blendskills.co.in
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col gap-6 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-2">
              <p className="text-sm text-[#7E8798]">© 2026 BlendSkills. All rights reserved.</p>
              <div className="flex flex-wrap gap-4">
                {FOOTER_LINKS.legal.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-xs text-[#7E8798] transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.linkedin.com/company/blendskills" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-2.5 text-[#A8B0BF] transition-colors duration-300 hover:border-[#FF6B35]/30 hover:text-white" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
              <a href="https://www.instagram.com/blendskills" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-2.5 text-[#A8B0BF] transition-colors duration-300 hover:border-[#FF6B35]/30 hover:text-white" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="https://www.facebook.com/blendskills" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-2.5 text-[#A8B0BF] transition-colors duration-300 hover:border-[#FF6B35]/30 hover:text-white" aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a href="https://www.twitter.com/blendskills" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-2.5 text-[#A8B0BF] transition-colors duration-300 hover:border-[#FF6B35]/30 hover:text-white" aria-label="Twitter">
                <Twitter size={16} />
              </a>
              <a href="mailto:info@blendskills.co.in" className="rounded-full border border-white/10 bg-white/5 p-2.5 text-[#A8B0BF] transition-colors duration-300 hover:border-[#FF6B35]/30 hover:text-white" aria-label="Email">
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}