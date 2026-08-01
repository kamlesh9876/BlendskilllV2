import { useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, ArrowRight, Phone, Mail, Sparkles, ChevronRight } from 'lucide-react';
import { useScrolled } from '@/hooks/useScroll';

const LINKS = [
  { href: '/', label: 'Home', sectionId: 'hero' },
  { href: '/services', label: 'Services', sectionId: 'services' },
  { href: '/process', label: 'Process', sectionId: 'process' },
  { href: '/results', label: 'Results', sectionId: 'results' },
  { href: '/about', label: 'About Us', sectionId: 'about' },
  { href: '/contact', label: 'Contact', sectionId: 'contact' },
];

export default function Nav() {
  const scrolled = useScrolled(40);
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useLocation();

  // Disable body scroll when mobile drawer is active
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [location]);

  const handleNavClick = (href: string, sectionId?: string) => {
    setOpen(false);

    // If already on home page and clicking a section link
    if (location === '/' && sectionId && sectionId !== 'hero') {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    if (href === '/') {
      if (location === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setLocation('/');
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
      return;
    }

    setLocation(href);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${
        scrolled
          ? 'h-16 bg-slate-950/90 backdrop-blur-xl border-b border-white/10 shadow-2xl'
          : 'h-20 bg-slate-950/60 backdrop-blur-md border-b border-white/10'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 h-full flex justify-between items-center">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('/', 'hero')}
          className="no-underline transition-transform duration-300 hover:scale-[1.02] flex items-center gap-2 relative z-[1002] cursor-pointer bg-transparent border-none p-0"
        >
          <img
            src="/logo.png"
            alt="BlendSkills"
            className="h-8 sm:h-9 w-auto object-contain brightness-0 invert transition-all duration-300"
          />
        </button>

        {/* Desktop Links */}
        <nav className="hidden lg:flex gap-8 items-center">
          {LINKS.map((l) => {
            const isActive = location === l.href;
            return (
              <button
                key={l.href}
                onClick={() => handleNavClick(l.href, l.sectionId)}
                className={`relative text-[0.925rem] font-semibold transition-colors duration-300 no-underline group py-1 cursor-pointer bg-transparent border-none ${
                  isActive ? 'text-cyan-400 font-bold' : 'text-slate-300 hover:text-white'
                }`}
              >
                {l.label}
                <span
                  className="absolute -bottom-0.5 left-0 h-0.5 bg-cyan-400 rounded-full transition-all duration-300 group-hover:w-full"
                  style={{ width: isActive ? '100%' : '0' }}
                />
              </button>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <button
          onClick={() => handleNavClick('/contact', 'contact')}
          className="hidden lg:inline-flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#0066cc]/25 active:scale-95 cursor-pointer bg-gradient-to-r from-[#0066cc] via-indigo-600 to-cyan-500 text-white font-semibold text-sm px-6 py-2.5 rounded-xl border border-cyan-400/30 shadow-md"
        >
          <span>Book Consultation</span>
          <ArrowRight size={16} />
        </button>

        {/* Mobile menu trigger toggle button */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          className="lg:hidden flex items-center justify-center w-11 h-11 rounded-2xl active:scale-95 transition-all duration-200 relative z-[1002] cursor-pointer bg-white/10 border border-white/20 text-white hover:bg-white/20 shadow-md"
        >
          {open ? <X size={22} className="text-cyan-400 animate-in fade-in duration-200" /> : <Menu size={22} />}
        </button>
      </div>

      {/* Enhanced Mobile Navigation Drawer Backdrop & Modal */}
      <div
        className={`lg:hidden fixed inset-0 bg-slate-950/98 backdrop-blur-2xl text-white transition-all duration-300 ease-in-out flex flex-col justify-between pt-20 ${
          open ? 'opacity-100 pointer-events-auto translate-x-0' : 'opacity-0 pointer-events-none translate-x-full'
        }`}
        style={{ zIndex: 1001 }}
      >
        {/* Mobile Links List */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-2">
          <p className="font-mono text-[11px] uppercase tracking-widest text-cyan-400 font-bold mb-4">
            Navigation Menu
          </p>

          {LINKS.map((l, i) => {
            const isActive = location === l.href;
            return (
              <button
                key={l.href}
                onClick={() => handleNavClick(l.href, l.sectionId)}
                className={`w-full flex items-center justify-between p-4 rounded-2xl text-base sm:text-lg font-medium transition-all duration-200 cursor-pointer bg-transparent border-none text-left ${
                  isActive
                    ? 'bg-gradient-to-r from-[#0066cc] to-indigo-600 text-white font-bold shadow-lg shadow-[#0066cc]/30 border border-cyan-400/30'
                    : 'text-slate-200 hover:bg-white/5 hover:text-white'
                }`}
                style={{
                  transitionDelay: open ? `${i * 35}ms` : '0ms',
                }}
              >
                <div className="flex items-center gap-3">
                  {isActive && <span className="w-2.5 h-2.5 rounded-full bg-cyan-300 animate-pulse" />}
                  <span>{l.label}</span>
                </div>
                <ChevronRight size={18} className={isActive ? 'text-cyan-200' : 'text-slate-500'} />
              </button>
            );
          })}

          <div className="pt-6">
            <button
              onClick={() => handleNavClick('/contact', 'contact')}
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#0066cc] via-indigo-600 to-cyan-500 text-white font-bold text-center flex items-center justify-center gap-2 shadow-xl shadow-[#0066cc]/25 border border-cyan-400/30 cursor-pointer"
            >
              <Sparkles size={18} className="text-cyan-300" />
              <span>Book Free AI Consultation</span>
            </button>
          </div>
        </div>

        {/* Mobile Footer Contact Bar */}
        <div className="p-6 bg-slate-900/90 border-t border-white/10 space-y-3">
          <div className="flex items-center gap-3 text-xs text-slate-300">
            <Phone size={14} className="text-[#0066cc]" />
            <a href="tel:+918530819966" className="hover:text-cyan-300 font-mono transition-colors">
              +91 85308 19966
            </a>
          </div>
          <div className="flex items-center gap-3 text-xs text-slate-300">
            <Mail size={14} className="text-[#0066cc]" />
            <a href="mailto:info@blendskills.co.in" className="hover:text-cyan-300 font-mono transition-colors">
              info@blendskills.co.in
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
