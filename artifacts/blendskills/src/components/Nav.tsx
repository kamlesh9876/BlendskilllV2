import { useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, ArrowRight, Phone, Mail, Sparkles, ChevronRight } from 'lucide-react';
import { useScrolled } from '@/hooks/useScroll';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/process', label: 'Process' },
  { href: '/results', label: 'Results' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const scrolled = useScrolled(40);
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${
        scrolled
          ? 'h-16 bg-white/90 backdrop-blur-xl border-b border-black/5 shadow-sm'
          : 'h-20 bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 h-full flex justify-between items-center">
        <Link
          href="/"
          className="no-underline transition-transform duration-300 hover:scale-[1.02] flex items-center gap-2"
        >
          <img src="/logo.png" alt="BlendSkills" className="h-9 sm:h-10 w-auto" />
        </Link>

        <nav className="hidden lg:flex gap-9 items-center">
          {LINKS.map((l) => {
            const isActive = location === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative text-[0.95rem] font-medium transition-colors duration-300 no-underline group ${
                  isActive ? 'text-[#0066cc] font-semibold' : 'text-[#475569] hover:text-[#1e293b]'
                }`}
              >
                {l.label}
                <span
                  className="absolute -bottom-1 left-0 h-0.5 bg-[#0066cc] rounded-full transition-all duration-300 group-hover:w-full"
                  style={{ width: isActive ? '100%' : '0' }}
                />
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden lg:inline-flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#0066cc]/20"
          style={{
            background: 'linear-gradient(135deg, #0066cc, #0052a3)',
            color: '#ffffff',
            border: '1px solid #0066cc',
            padding: '12px 28px',
            borderRadius: '12px',
            fontWeight: 600,
            fontSize: '0.9rem',
          }}
        >
          <span>Book Consultation</span>
          <ArrowRight size={16} />
        </Link>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          className="lg:hidden flex items-center justify-center w-11 h-11 rounded-2xl bg-slate-100 border border-slate-200/80 text-[#1e293b] active:scale-95 transition-all duration-200 relative z-[1002]"
        >
          {open ? <X size={22} className="text-[#0066cc]" /> : <Menu size={22} />}
        </button>
      </div>

      {/* Enhanced Mobile Drawer */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-slate-950/98 backdrop-blur-2xl text-white transition-all duration-300 ease-in-out flex flex-col justify-between ${
          open ? 'opacity-100 pointer-events-auto translate-x-0' : 'opacity-0 pointer-events-none translate-x-full'
        }`}
        style={{ zIndex: 1001 }}
      >
        {/* Mobile Drawer Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2">
            <img src="/logo.png" alt="BlendSkills" className="h-9 w-auto brightness-200" />
          </Link>
          <button
            onClick={() => setOpen(false)}
            className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Mobile Links List */}
        <div className="flex-1 overflow-y-auto px-6 py-8 space-y-2">
          <p className="font-mono text-[11px] uppercase tracking-widest text-cyan-400 font-bold mb-4">
            Navigation Menu
          </p>

          {LINKS.map((l, i) => {
            const isActive = location === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between p-4 rounded-2xl text-lg font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-[#0066cc] text-white font-bold shadow-lg shadow-[#0066cc]/30'
                    : 'text-slate-200 hover:bg-white/5 hover:text-white'
                }`}
                style={{
                  transitionDelay: open ? `${i * 40}ms` : '0ms',
                }}
              >
                <div className="flex items-center gap-3">
                  {isActive && <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />}
                  <span>{l.label}</span>
                </div>
                <ChevronRight size={18} className={isActive ? 'text-white' : 'text-slate-500'} />
              </Link>
            );
          })}

          <div className="pt-6">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#0066cc] to-indigo-600 text-white font-bold text-center flex items-center justify-center gap-2 shadow-xl shadow-[#0066cc]/20 border border-cyan-400/30"
            >
              <Sparkles size={18} />
              <span>Book Free AI Consultation</span>
            </Link>
          </div>
        </div>

        {/* Mobile Footer Contact Bar */}
        <div className="p-6 bg-slate-900 border-t border-white/10 space-y-3">
          <div className="flex items-center gap-3 text-xs text-slate-300">
            <Phone size={14} className="text-[#0066cc]" />
            <a href="tel:+918530819966" className="hover:text-cyan-300 font-mono">+91 85308 19966</a>
          </div>
          <div className="flex items-center gap-3 text-xs text-slate-300">
            <Mail size={14} className="text-[#0066cc]" />
            <a href="mailto:info@blendskills.co.in" className="hover:text-cyan-300 font-mono">info@blendskills.co.in</a>
          </div>
        </div>
      </div>
    </header>
  );
}
