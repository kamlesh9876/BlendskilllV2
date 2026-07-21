import { Mail, Phone, MapPin, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import ContactForm from './ContactForm';
import { scrollToId } from '@/hooks/useScroll';

export default function Contact() {
  return (
    <section id="contact" className="relative z-[2] py-24 md:py-40 lg:py-48">
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="reveal">
          <p className="eyebrow">Let's Build Something</p>
          <h2 className="h2">
            Transform your business<br className="hidden md:block" />
            with BlendSkills.
          </h2>
          <p className="lead mt-6 text-lg lg:text-xl">
            Take your digital marketing to the next level with data-driven strategies and innovative
            solutions. Let's create something amazing together.
          </p>

          <div className="mt-12 lg:mt-16 flex flex-col gap-4">
            <a href="mailto:info@blendskills.co.in" className="link-underline inline-flex items-center gap-4 font-display text-lg lg:text-xl font-semibold group">
              <span className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-[rgba(0,245,212,0.15)] to-[rgba(0,245,212,0.05)] border border-[rgba(0,245,212,0.2)] transition-all duration-300 group-hover:from-[rgba(0,245,212,0.2)] group-hover:to-[rgba(0,245,212,0.08)] group-hover:scale-110 flex-shrink-0">
                <Mail size={20} className="text-[#00f5d4]" />
              </span>
              info@blendskills.co.in
            </a>
            <a href="tel:+918530819966" className="link-underline inline-flex items-center gap-4 font-display text-lg lg:text-xl font-semibold group">
              <span className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-[rgba(0,245,212,0.15)] to-[rgba(0,245,212,0.05)] border border-[rgba(0,245,212,0.2)] transition-all duration-300 group-hover:from-[rgba(0,245,212,0.2)] group-hover:to-[rgba(0,245,212,0.08)] group-hover:scale-110 flex-shrink-0">
                <Phone size={20} className="text-[#00f5d4]" />
              </span>
              +91 85308 19966
            </a>
            <span className="inline-flex items-center gap-4 font-mono text-sm text-[#94a3b8] font-semibold">
              <span className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-[rgba(0,245,212,0.15)] to-[rgba(0,245,212,0.05)] border border-[rgba(0,245,212,0.2)]">
                <MapPin size={20} className="text-[#00f5d4]" />
              </span>
              Pune · Gaya
            </span>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative z-[2] pt-24 md:pt-32 pb-8 md:pb-10" style={{ background: 'linear-gradient(180deg, rgba(4,6,12,0.4), rgba(10,14,26,0.8))', borderTop: '1px solid var(--border-strong)' }}>
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 lg:gap-16">
        <div>
          <span className="font-display text-3xl font-bold tracking-tight text-white">
            Blend<span className="text-[#00f5d4]">Skills</span>
          </span>
          <p className="text-[#94a3b8] mt-6 text-[0.95rem] max-w-[350px] leading-relaxed font-light">
            Empowering brands with smart digital marketing, creative design, and powerful development —
            growth that lasts.
          </p>
          <div className="mt-8 flex gap-3">
            <a
              href="https://www.instagram.com/blendskills.co/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-11 h-11 rounded-lg flex items-center justify-center text-[#64748b] hover:text-[#00f5d4] hover:bg-[rgba(0,245,212,0.1)] hover:border-[rgba(0,245,212,0.3)] transition-all duration-300 font-semibold"
              style={{ background: 'rgba(0,245,212,0.05)', border: '1px solid rgba(0,245,212,0.1)' }}
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.linkedin.com/company/blendskills-pvt-ltd"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 rounded-lg flex items-center justify-center text-[#64748b] hover:text-[#00f5d4] hover:bg-[rgba(0,245,212,0.1)] hover:border-[rgba(0,245,212,0.3)] transition-all duration-300 font-semibold"
              style={{ background: 'rgba(0,245,212,0.05)', border: '1px solid rgba(0,245,212,0.1)' }}
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold mb-8 tracking-wider uppercase text-[#f8fafc]">Quick Links</h4>
          {[
            { label: 'Home', id: '#top' },
            { label: 'About', id: '#work' },
            { label: 'Services', id: '#services' },
            { label: 'Contact', id: '#contact' },
          ].map((l) => (
            <a
              key={l.label}
              href={l.id}
              onClick={(e) => {
                e.preventDefault();
                scrollToId(l.id);
              }}
              className="block text-[#94a3b8] hover:text-[#00f5d4] text-[0.9rem] mb-3 transition-colors no-underline font-light"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div>
          <h4 className="font-display text-sm font-bold mb-8 tracking-wider uppercase text-[#f8fafc]">Services</h4>
          {['Social Media Marketing', 'SEO Optimization', 'PPC Advertising', 'Web Development'].map((s) => (
            <a
              key={s}
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollToId('#services');
              }}
              className="block text-[#94a3b8] hover:text-[#00f5d4] text-[0.9rem] mb-3 transition-colors no-underline font-light"
            >
              {s}
            </a>
          ))}
        </div>

        <div>
          <h4 className="font-display text-sm font-bold mb-8 tracking-wider uppercase text-[#f8fafc]">Contact</h4>
          <a href="mailto:info@blendskills.co.in" className="block text-[#94a3b8] hover:text-[#00f5d4] text-[0.9rem] mb-3 transition-colors no-underline font-light">
            info@blendskills.co.in
          </a>
          <a href="tel:+918530819966" className="block text-[#94a3b8] hover:text-[#00f5d4] text-[0.9rem] mb-3 transition-colors no-underline font-light">
            +91 85308 19966
          </a>
          <span className="block text-[#94a3b8] text-[0.9rem] font-light">Pune | Gaya</span>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto mt-16 md:mt-20 pt-12 px-6 border-t border-[rgba(255,255,255,0.06)] flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-[#64748b] font-light">
        <span>© 2025 BlendSkills. All rights reserved.</span>
        <div className="flex gap-8">
          <a href="#" className="text-[#94a3b8] hover:text-[#00f5d4] transition-colors no-underline font-light">Privacy Policy</a>
          <a href="#" className="text-[#94a3b8] hover:text-[#00f5d4] transition-colors no-underline font-light">Terms &amp; Conditions</a>
        </div>
      </div>
    </footer>
  );
}
