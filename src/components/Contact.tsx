import { Mail, Phone, MapPin, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import ContactForm from './ContactForm';
import { scrollToId } from '@/hooks/useScroll';

export default function Contact() {
  return (
    <section id="contact" className="relative z-[2] py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="reveal">
          <p className="eyebrow">Let's Build Something</p>
          <h2 className="h2">
            Transform your business
            <br />
            with BlendSkills.
          </h2>
          <p className="lead mt-6">
            Take your digital marketing to the next level with data-driven strategies and innovative
            solutions. Let's create something amazing together.
          </p>

          <div className="mt-12 flex flex-col gap-5">
            <a href="mailto:info@blendskills.co.in" className="link-underline inline-flex items-center gap-3 font-display text-xl group">
              <span className="w-10 h-10 rounded-xl flex items-center justify-center bg-[rgba(0,245,212,0.08)] border border-[rgba(0,245,212,0.15)] transition-transform duration-300 group-hover:scale-110">
                <Mail size={18} className="text-[#00f5d4]" />
              </span>
              info@blendskills.co.in
            </a>
            <a href="tel:+918530819966" className="link-underline inline-flex items-center gap-3 font-display text-xl group">
              <span className="w-10 h-10 rounded-xl flex items-center justify-center bg-[rgba(0,245,212,0.08)] border border-[rgba(0,245,212,0.15)] transition-transform duration-300 group-hover:scale-110">
                <Phone size={18} className="text-[#00f5d4]" />
              </span>
              +91 85308 19966
            </a>
            <span className="inline-flex items-center gap-3 font-mono text-sm text-[#64748b]">
              <span className="w-10 h-10 rounded-xl flex items-center justify-center bg-[rgba(0,245,212,0.08)] border border-[rgba(0,245,212,0.15)]">
                <MapPin size={18} className="text-[#00f5d4]" />
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
    <footer className="relative z-[2] pt-20 md:pt-24 pb-10" style={{ background: 'rgba(4,6,12,0.8)', borderTop: '1px solid var(--border-color)' }}>
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 lg:gap-16">
        <div>
          <span className="font-display text-2xl font-bold tracking-tight text-white">
            Blend<span className="text-[#00f5d4]">Skills</span>
          </span>
          <p className="text-[#94a3b8] mt-6 text-[0.95rem] max-w-[320px] leading-relaxed">
            Empowering brands with smart digital marketing, creative design, and powerful development —
            growth that lasts.
          </p>
          <div className="mt-8 flex gap-3">
            <a
              href="https://www.instagram.com/blendskills.co/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-xl flex items-center justify-center text-[#64748b] hover:text-[#00f5d4] hover:border-[rgba(0,245,212,0.3)] transition-all duration-300"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)' }}
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.linkedin.com/company/blendskills-pvt-ltd"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-xl flex items-center justify-center text-[#64748b] hover:text-[#00f5d4] hover:border-[rgba(0,245,212,0.3)] transition-all duration-300"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)' }}
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-base font-semibold mb-6 tracking-wide">Quick Links</h4>
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
              className="block text-[#94a3b8] hover:text-[#00f5d4] text-[0.9rem] mb-3 transition-colors no-underline"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div>
          <h4 className="font-display text-base font-semibold mb-6 tracking-wide">Services</h4>
          {['Social Media Marketing', 'SEO Optimization', 'PPC Advertising', 'Web Development'].map((s) => (
            <a
              key={s}
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollToId('#services');
              }}
              className="block text-[#94a3b8] hover:text-[#00f5d4] text-[0.9rem] mb-3 transition-colors no-underline"
            >
              {s}
            </a>
          ))}
        </div>

        <div>
          <h4 className="font-display text-base font-semibold mb-6 tracking-wide">Contact</h4>
          <a href="mailto:info@blendskills.co.in" className="block text-[#94a3b8] hover:text-[#00f5d4] text-[0.9rem] mb-3 transition-colors no-underline">
            info@blendskills.co.in
          </a>
          <a href="tel:+918530819966" className="block text-[#94a3b8] hover:text-[#00f5d4] text-[0.9rem] mb-3 transition-colors no-underline">
            +91 85308 19966
          </a>
          <span className="block text-[#94a3b8] text-[0.9rem]">Pune | Gaya</span>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto mt-16 md:mt-20 pt-10 px-6 border-t border-[rgba(255,255,255,0.05)] flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-[#64748b]">
        <span>© 2025 BlendSkills. All rights reserved.</span>
        <div className="flex gap-6">
          <a href="#" className="text-[#64748b] hover:text-[#00f5d4] transition-colors no-underline">Privacy Policy</a>
          <a href="#" className="text-[#64748b] hover:text-[#00f5d4] transition-colors no-underline">Terms &amp; Conditions</a>
        </div>
      </div>
    </footer>
  );
}
