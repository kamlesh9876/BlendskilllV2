import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Linkedin, Copy, Check } from 'lucide-react';
import { Link } from 'wouter';
import ContactForm from './ContactForm';

export default function Contact() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section className="relative" style={{ padding: '120px 24px', background: '#f8fafc' }}>
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ maxWidth: '600px' }}
          >
            <p
              className="font-mono text-[0.75rem] font-semibold uppercase tracking-widest mb-6"
              style={{ color: '#0066cc' }}
            >
              Let's Build Something
            </p>
            <h2
              className="font-display font-bold leading-tight mb-6"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: '#1e293b',
              }}
            >
              Transform your business<br />
              with BlendSkills
            </h2>
            <p
              className="font-normal mb-12"
              style={{
                fontSize: '1.1rem',
                color: '#64748b',
                lineHeight: 1.7,
              }}
            >
              Take your digital marketing and software infrastructure to the next level. Book a free consultation with our growth engineering specialists.
            </p>

            {/* Contact Info Cards with Micro-Interactions */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between p-4 rounded-2xl bg-white border border-black/10 hover:border-[#0066cc]/40 transition-all shadow-sm">
                <a
                  href="mailto:info@blendskills.co.in"
                  className="inline-flex items-center gap-4 font-display text-base md:text-lg font-semibold text-[#1e293b] hover:text-[#0066cc] transition-colors"
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'rgba(0, 102, 204, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Mail size={20} style={{ color: '#0066cc' }} />
                  </div>
                  info@blendskills.co.in
                </a>
                <button
                  onClick={() => copyToClipboard('info@blendskills.co.in', 'email')}
                  className="p-2.5 rounded-xl bg-[#f1f5f9] hover:bg-[#e2e8f0] text-[#64748b] hover:text-[#0066cc] transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-mono"
                  title="Copy email"
                >
                  {copiedField === 'email' ? (
                    <>
                      <Check size={14} className="text-emerald-600" />
                      <span className="text-emerald-600 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span className="hidden sm:inline">Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between p-4 rounded-2xl bg-white border border-black/10 hover:border-[#0066cc]/40 transition-all shadow-sm">
                <a
                  href="tel:+918530819966"
                  className="inline-flex items-center gap-4 font-display text-base md:text-lg font-semibold text-[#1e293b] hover:text-[#0066cc] transition-colors"
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'rgba(0, 102, 204, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Phone size={20} style={{ color: '#0066cc' }} />
                  </div>
                  +91 85308 19966
                </a>
                <button
                  onClick={() => copyToClipboard('+918530819966', 'phone')}
                  className="p-2.5 rounded-xl bg-[#f1f5f9] hover:bg-[#e2e8f0] text-[#64748b] hover:text-[#0066cc] transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-mono"
                  title="Copy phone"
                >
                  {copiedField === 'phone' ? (
                    <>
                      <Check size={14} className="text-emerald-600" />
                      <span className="text-emerald-600 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span className="hidden sm:inline">Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-black/10 flex items-center gap-4">
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(0, 102, 204, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <MapPin size={20} style={{ color: '#0066cc' }} />
                </div>
                <div>
                  <div className="font-display font-semibold text-[#1e293b]">Offices in Pune & Gaya</div>
                  <div className="text-xs text-[#64748b]">Serving clients across India & global markets</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative" style={{ padding: '80px 24px 32px', background: '#070B14', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 lg:gap-16 mb-16">
          {/* Brand Column */}
          <div>
            <Link href="/" className="no-underline inline-block">
              <img src="/logo.png" alt="BlendSkills" className="h-10 w-auto" />
            </Link>
            <p
              className="font-normal mt-6"
              style={{
                fontSize: '0.95rem',
                color: '#94a3b8',
                maxWidth: '350px',
                lineHeight: 1.7,
              }}
            >
              Empowering brands with smart digital marketing, creative design, and powerful development—growth that lasts.
            </p>
            <div className="flex gap-3 mt-8">
              <a
                href="https://www.instagram.com/blendskills.co/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300"
                style={{
                  background: 'rgba(0, 245, 212, 0.05)',
                  border: '1px solid rgba(0, 245, 212, 0.1)',
                  color: '#64748b',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#00f5d4';
                  e.currentTarget.style.background = 'rgba(0, 245, 212, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(0, 245, 212, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#64748b';
                  e.currentTarget.style.background = 'rgba(0, 245, 212, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(0, 245, 212, 0.1)';
                }}
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/blendskills-pvt-ltd"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300"
                style={{
                  background: 'rgba(0, 245, 212, 0.05)',
                  border: '1px solid rgba(0, 245, 212, 0.1)',
                  color: '#64748b',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#00f5d4';
                  e.currentTarget.style.background = 'rgba(0, 245, 212, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(0, 245, 212, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#64748b';
                  e.currentTarget.style.background = 'rgba(0, 245, 212, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(0, 245, 212, 0.1)';
                }}
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-display font-bold mb-8 tracking-wider uppercase"
              style={{ fontSize: '0.85rem', color: '#f8fafc' }}
            >
              Quick Links
            </h4>
            {[
              { label: 'Home', href: '/' },
              { label: 'What We Do', href: '/about' },
              { label: 'Services', href: '/services' },
              { label: 'Contact', href: '/contact' },
            ].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="block font-normal mb-3 transition-colors no-underline"
                style={{
                  fontSize: '0.9rem',
                  color: '#94a3b8',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#00f5d4';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#94a3b8';
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4
              className="font-display font-bold mb-8 tracking-wider uppercase"
              style={{ fontSize: '0.85rem', color: '#f8fafc' }}
            >
              Services
            </h4>
            {['Social Media Marketing', 'SEO Optimization', 'PPC Advertising', 'Web Development'].map((s) => (
              <Link
                key={s}
                href="/services"
                className="block font-normal mb-3 transition-colors no-underline"
                style={{
                  fontSize: '0.9rem',
                  color: '#94a3b8',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#00f5d4';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#94a3b8';
                }}
              >
                {s}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-display font-bold mb-8 tracking-wider uppercase"
              style={{ fontSize: '0.85rem', color: '#f8fafc' }}
            >
              Contact
            </h4>
            <a
              href="mailto:info@blendskills.co.in"
              className="block font-normal mb-3 transition-colors no-underline"
              style={{
                fontSize: '0.9rem',
                color: '#94a3b8',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#00f5d4';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#94a3b8';
              }}
            >
              info@blendskills.co.in
            </a>
            <a
              href="tel:+918530819966"
              className="block font-normal mb-3 transition-colors no-underline"
              style={{
                fontSize: '0.9rem',
                color: '#94a3b8',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#00f5d4';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#94a3b8';
              }}
            >
              +91 85308 19966
            </a>
            <span
              className="block font-normal"
              style={{
                fontSize: '0.9rem',
                color: '#94a3b8',
              }}
            >
              Pune | Gaya
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}
        >
          <span
            className="font-normal"
            style={{
              fontSize: '0.85rem',
              color: '#64748b',
            }}
          >
            © 2025 BlendSkills. All rights reserved.
          </span>
          <div className="flex gap-8">
            <a
              href="#"
              className="font-normal transition-colors no-underline"
              style={{
                fontSize: '0.85rem',
                color: '#94a3b8',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#00f5d4';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#94a3b8';
              }}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-normal transition-colors no-underline"
              style={{
                fontSize: '0.85rem',
                color: '#94a3b8',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#00f5d4';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#94a3b8';
              }}
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
