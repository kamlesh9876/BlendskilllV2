import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Linkedin, Copy, Check, Sparkles, ArrowUpRight } from 'lucide-react';
import { Link } from 'wouter';
import ContactForm from './ContactForm';

export default function Contact() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-gradient-to-b from-[#0f1418] to-[#000000] text-white overflow-hidden">
      {/* Premium gradient overlays */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-[#FF6B35]/10 to-transparent blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#6B3FB5]/10 to-transparent blur-3xl pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#FF6B35]/20 to-[#FF6B35]/10 border border-[#FF6B35]/30 text-[#FF8557] font-mono text-xs font-bold uppercase tracking-wider mb-6">
                <Sparkles size={14} />
                <span>Ready to Transform?</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
                Let's build your next
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-[#6B3FB5] to-[#00F5D4]"> digital breakthrough</span>
              </h2>
              <p className="text-slate-300 text-base md:text-lg mt-4 leading-relaxed">
                Take your digital marketing and software infrastructure to the next level. Book a free strategy call with our growth engineering specialists.
              </p>
            </div>

            {/* Contact Info Cards with Micro-Interactions */}
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/50 backdrop-blur-md transition-all shadow-lg">
                <a
                  href="mailto:info@blendskills.co.in"
                  className="inline-flex items-center gap-4 font-display text-sm sm:text-base font-semibold text-white hover:text-cyan-300 transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0066cc] to-cyan-500 flex items-center justify-center text-white shadow-md">
                    <Mail size={20} />
                  </div>
                  info@blendskills.co.in
                </a>
                <button
                  onClick={() => copyToClipboard('info@blendskills.co.in', 'email')}
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-mono"
                  title="Copy email"
                >
                  {copiedField === 'email' ? (
                    <>
                      <Check size={14} className="text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span className="hidden sm:inline">Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/50 backdrop-blur-md transition-all shadow-lg">
                <a
                  href="tel:+918530819966"
                  className="inline-flex items-center gap-4 font-display text-sm sm:text-base font-semibold text-white hover:text-cyan-300 transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-md">
                    <Phone size={20} />
                  </div>
                  +91 85308 19966
                </a>
                <button
                  onClick={() => copyToClipboard('+918530819966', 'phone')}
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-mono"
                  title="Copy phone"
                >
                  {copiedField === 'phone' ? (
                    <>
                      <Check size={14} className="text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span className="hidden sm:inline">Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-md">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="font-display font-semibold text-white text-sm sm:text-base">Offices in Pune & Gaya</div>
                  <div className="text-xs text-slate-400">Serving clients across India & global markets</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-slate-400">
              <span>Follow Us:</span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-cyan-300 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-cyan-300 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
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
    <footer className="bg-slate-950 text-white border-t border-slate-900 py-16">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-900">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <img src="/logo.png" alt="BlendSkills" className="h-9 w-auto object-contain brightness-0 invert" />
            </Link>
            <p className="text-slate-400 text-xs leading-relaxed max-w-xs">
              Full-Stack Digital Marketing & Engineering Agency turning ambitious ideas into scalable revenue.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase font-bold text-cyan-400 tracking-wider mb-4">Services</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><Link href="/services" className="hover:text-cyan-300 transition-colors">Custom Software Development</Link></li>
              <li><Link href="/services" className="hover:text-cyan-300 transition-colors">AI & Workflow Automation</Link></li>
              <li><Link href="/services" className="hover:text-cyan-300 transition-colors">Performance Marketing (PPC & SEO)</Link></li>
              <li><Link href="/services" className="hover:text-cyan-300 transition-colors">Brand Identity & Digital Design</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase font-bold text-cyan-400 tracking-wider mb-4">Company</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><Link href="/about" className="hover:text-cyan-300 transition-colors">About Us</Link></li>
              <li><Link href="/results" className="hover:text-cyan-300 transition-colors">Case Studies & Impact</Link></li>
              <li><Link href="/contact" className="hover:text-cyan-300 transition-colors">Book Consultation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase font-bold text-cyan-400 tracking-wider mb-4">Direct Inquiry</h4>
            <div className="text-xs text-slate-300 space-y-1 font-mono">
              <p>Email: info@blendskills.co.in</p>
              <p>Phone: +91 85308 19966</p>
              <p>Locations: Pune & Gaya, India</p>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>© {new Date().getFullYear()} BlendSkills. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
