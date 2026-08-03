import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { Menu, X, ArrowRight, Phone, Mail, Sparkles, ChevronRight, MessageSquare, Compass, CheckCircle2 } from 'lucide-react';
import { useScrolled } from '@/hooks/useScroll';
import MagneticButton from '@/components/MagneticButton';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/industries', label: 'Industries' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/insights', label: 'Insights' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const scrolled = useScrolled(30);
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useLocation();

  // Prevent background body scroll when mobile menu is open (handles iOS Safari & Android Chrome)
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [open]);

  // Handle ESC key press to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  // Close drawer on location/route change
  useEffect(() => {
    setOpen(false);
  }, [location]);

  const handleNavClick = (href: string) => {
    setOpen(false);
    if (location !== href) {
      setLocation(href);
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${
          scrolled ? 'h-16 glass' : 'h-20 glass'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 h-full flex justify-between items-center">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('/')}
            className="no-underline transition-transform duration-300 hover:scale-[1.02] flex items-center gap-2 relative z-[1002] cursor-pointer bg-transparent border-none p-0 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg"
            aria-label="BlendSkills Home"
          >
            <img
              src="/logo.png"
              alt="BlendSkills"
              className="h-8 sm:h-9 w-auto object-contain brightness-0 invert transition-all duration-300"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-8 items-center" aria-label="Main Navigation">
            {LINKS.map((l) => {
              const isActive = location === l.href;
              return (
                <button
                  key={l.href}
                  onClick={() => handleNavClick(l.href)}
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
          <MagneticButton strength={0.3} className="hidden lg:inline-flex">
            <button
              onClick={() => handleNavClick('/contact')}
              className="inline-flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#FF6B35]/30 active:scale-95 cursor-pointer bg-gradient-to-r from-[#FF6B35] to-[#FF8557] text-white font-semibold text-sm px-6 py-2.5 rounded-xl border border-[#FF6B35]/40 shadow-md"
            >
              <span>Book Consultation</span>
              <ArrowRight size={16} />
            </button>
          </MagneticButton>

          {/* Mobile Navigation Trigger Button */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            className="lg:hidden flex items-center justify-center min-w-[44px] min-h-[44px] rounded-xl active:scale-95 transition-all duration-200 relative z-[1002] cursor-pointer bg-slate-900/80 border border-white/20 text-white hover:bg-slate-800 hover:border-cyan-400/50 shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            {open ? <X size={22} className="text-cyan-400 animate-in fade-in duration-200" /> : <Menu size={22} className="text-slate-100" />}
          </button>
        </div>
      </header>

      {/* Universal Responsive Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-[1001] bg-slate-950/95 backdrop-blur-2xl text-white transition-all duration-300 ease-in-out flex flex-col h-[100dvh] min-h-[100dvh] pt-20 pb-[max(1rem,env(safe-area-inset-bottom))] ${
          open ? 'opacity-100 pointer-events-auto translate-x-0' : 'opacity-0 pointer-events-none translate-x-full'
        }`}
        style={{
          paddingTop: 'calc(5rem + env(safe-area-inset-top, 0px))',
        }}
        aria-hidden={!open}
      >
        {/* Subtle Background Accent Glow */}
        <div className="absolute top-1/4 -right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -left-20 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Scrollable Nav Area */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-5 sm:px-8 py-2 space-y-2 relative z-10">
          <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
            <span className="font-mono text-[11px] uppercase tracking-widest text-cyan-400 font-bold flex items-center gap-1.5">
              <Compass size={13} />
              Navigation
            </span>
            <span className="text-[10px] text-slate-400 font-mono">BlendSkills AI</span>
          </div>

          <div className="space-y-1.5">
            {LINKS.map((l, i) => {
              const isActive = location === l.href;
              return (
                <button
                  key={l.href}
                  onClick={() => handleNavClick(l.href)}
                  className={`w-full min-h-[48px] flex items-center justify-between px-4 py-3 rounded-xl text-base sm:text-lg font-medium transition-all duration-200 cursor-pointer text-left border ${
                    isActive
                      ? 'bg-gradient-to-r from-[#FF6B35]/90 to-[#FF8557]/90 text-white font-bold border-[#FF6B35]/40 shadow-lg shadow-[#FF6B35]/20'
                      : 'bg-white/[0.03] hover:bg-white/[0.08] text-slate-200 hover:text-white border-white/5 active:bg-white/10'
                  }`}
                  style={{
                    transitionDelay: open ? `${i * 30}ms` : '0ms',
                  }}
                >
                  <div className="flex items-center gap-3">
                    {isActive ? (
                      <CheckCircle2 size={18} className="text-cyan-300 shrink-0" />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-slate-600 shrink-0" />
                    )}
                    <span>{l.label}</span>
                  </div>
                  <ChevronRight
                    size={18}
                    className={`transition-transform duration-200 ${isActive ? 'text-cyan-300 translate-x-0.5' : 'text-slate-500'}`}
                  />
                </button>
              );
            })}
          </div>

          {/* Primary Mobile CTA Button */}
          <div className="pt-4 pb-2">
            <button
              onClick={() => handleNavClick('/contact')}
              className="w-full min-h-[50px] py-3.5 px-5 rounded-xl bg-gradient-to-r from-[#FF6B35] to-[#FF8557] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xl shadow-[#FF6B35]/35 border border-[#FF6B35]/40 cursor-pointer active:scale-[0.98] transition-transform"
            >
              <Sparkles size={18} className="text-[#FFB380] animate-pulse" />
              <span>Book Free AI Consultation</span>
            </button>
          </div>
        </div>

        {/* Fixed Bottom Contact Footer Bar */}
        <div className="px-5 sm:px-8 py-4 bg-slate-900/95 border-t border-white/10 space-y-2.5 shrink-0 relative z-10">
          <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Direct Contact</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <a
              href="tel:+918530819966"
              className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 hover:text-cyan-300 font-mono transition-colors border border-white/5"
            >
              <Phone size={14} className="text-[#0066cc] shrink-0" />
              <span className="truncate">+91 85308 19966</span>
            </a>
            <a
              href="mailto:info@blendskills.co.in"
              className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 hover:text-cyan-300 font-mono transition-colors border border-white/5"
            >
              <Mail size={14} className="text-[#0066cc] shrink-0" />
              <span className="truncate">info@blendskills.co.in</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
