import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { Menu, X, ArrowRight, Phone, Mail, Sparkles, ChevronRight, Compass, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
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
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open]);

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

  // Touch gesture handlers for swipe to close
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!open) return;
    const swipeDistance = touchStart - touchEnd;
    // Swipe right to close (distance > 50px)
    if (swipeDistance < -50) {
      setOpen(false);
    }
  };

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[1003] focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-slate-950 focus:font-semibold focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>

      <motion.header
        initial={false}
        animate={{
          height: scrolled ? 64 : 80,
          boxShadow: scrolled ? '0 18px 50px rgba(0,0,0,0.28)' : '0 8px 30px rgba(0,0,0,0.16)',
        }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="fixed left-0 top-0 z-[1100] w-full border-b border-white/10"
        style={{
          paddingTop: 'env(safe-area-inset-top, 0px)',
          backdropFilter: scrolled ? 'blur(24px)' : 'blur(30px)',
          WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'blur(30px)',
          background: scrolled
            ? 'linear-gradient(135deg, rgba(10, 14, 20, 0.82), rgba(10, 14, 20, 0.6))'
            : 'linear-gradient(135deg, rgba(10, 14, 20, 0.68), rgba(10, 14, 20, 0.4))',
        }}
      >
        <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-4 sm:px-6">
          <button
            onClick={() => handleNavClick('/')}
            className="relative z-[1102] flex items-center gap-2 rounded-lg border border-transparent bg-transparent p-0 no-underline transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="BlendSkills Home"
          >
            <img
              src="/logo.png"
              alt="BlendSkills"
              className="h-10 w-auto object-contain transition-all duration-300 sm:h-12"
            />
          </button>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main Navigation">
            {LINKS.map((l) => {
              const isActive = location === l.href;
              return (
                <button
                  key={l.href}
                  onClick={() => handleNavClick(l.href)}
                  className={`group relative cursor-pointer border-none bg-transparent py-1 text-[0.925rem] font-semibold no-underline transition-colors duration-300 ${isActive ? 'text-cyan-400' : 'text-slate-300 hover:text-white'}`}
                >
                  {l.label}
                  <span
                    className="absolute bottom-[-0.35rem] left-0 h-0.5 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#00F5D4] transition-all duration-300"
                    style={{ width: isActive ? '100%' : '0' }}
                  />
                </button>
              );
            })}
          </nav>

          <MagneticButton strength={0.3} className="hidden lg:inline-flex">
            <button
              onClick={() => handleNavClick('/contact')}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#FF6B35]/35 bg-gradient-to-r from-[#FF6B35] to-[#FF8557] px-6 py-2.5 text-sm font-semibold text-white shadow-[0_20px_40px_-12px_rgba(255,107,53,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_48px_-10px_rgba(255,107,53,0.5)] active:scale-[0.97]"
            >
              <span>Book Consultation</span>
              <ArrowRight size={16} />
            </button>
          </MagneticButton>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            className="relative z-[1102] flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-white/20 bg-slate-900/80 text-white shadow-lg transition-all duration-200 hover:border-cyan-400/50 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 active:scale-95 lg:hidden"
          >
            {open ? <X size={22} className="animate-in fade-in text-cyan-400 duration-200" /> : <Menu size={22} className="text-slate-100" />}
          </button>
        </div>
      </motion.header>

      <div
        className={`fixed inset-0 z-[1090] flex h-[100dvh] min-h-[100dvh] flex-col bg-slate-950/95 text-white backdrop-blur-2xl transition-all duration-300 ease-in-out lg:hidden ${open ? 'pointer-events-auto translate-x-0 opacity-100' : 'pointer-events-none translate-x-full opacity-0'}`}
        style={{
          paddingTop: 'calc(5rem + env(safe-area-inset-top, 0px))',
          paddingBottom: 'env(safe-area-inset-bottom, 0px)',
          paddingLeft: 'env(safe-area-inset-left, 0px)',
          paddingRight: 'env(safe-area-inset-right, 0px)',
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        aria-hidden={!open}
      >
        <div className="pointer-events-none absolute left-[-2rem] top-1/4 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-1/4 right-[-2rem] h-64 w-64 rounded-full bg-indigo-600/10 blur-3xl" />

        <div className="relative z-10 flex-1 space-y-2 overflow-y-auto overscroll-contain px-5 py-2 sm:px-8">
          <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-2">
            <span className="flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-widest text-cyan-400">
              <Compass size={13} />
              Navigation
            </span>
            <span className="font-mono text-[10px] text-slate-400">BlendSkills AI</span>
          </div>

          <div className="space-y-1.5">
            {LINKS.map((l, i) => {
              const isActive = location === l.href;
              return (
                <button
                  key={l.href}
                  onClick={() => handleNavClick(l.href)}
                  className={`flex min-h-[48px] w-full items-center justify-between rounded-xl border px-4 py-3 text-left text-base font-medium transition-all duration-200 sm:text-lg ${isActive ? 'border-[#FF6B35]/40 bg-gradient-to-r from-[#FF6B35]/90 to-[#FF8557]/90 font-bold text-white shadow-lg shadow-[#FF6B35]/20' : 'border-white/5 bg-white/[0.03] text-slate-200 hover:bg-white/[0.08] hover:text-white active:bg-white/10'}`}
                  style={{ transitionDelay: open ? `${i * 30}ms` : '0ms' }}
                >
                  <div className="flex items-center gap-3">
                    {isActive ? <CheckCircle2 size={18} className="shrink-0 text-cyan-300" /> : <span className="h-2 w-2 shrink-0 rounded-full bg-slate-600" />}
                    <span>{l.label}</span>
                  </div>
                  <ChevronRight size={18} className={`transition-transform duration-200 ${isActive ? 'translate-x-0.5 text-cyan-300' : 'text-slate-500'}`} />
                </button>
              );
            })}
          </div>

          <div className="pb-2 pt-4">
            <button
              onClick={() => handleNavClick('/contact')}
              className="flex w-full min-h-[50px] items-center justify-center gap-2 rounded-xl border border-[#FF6B35]/40 bg-gradient-to-r from-[#FF6B35] to-[#FF8557] px-5 py-3.5 text-sm font-bold text-white shadow-xl shadow-[#FF6B35]/35 transition-transform active:scale-[0.98] sm:text-base"
            >
              <Sparkles size={18} className="animate-pulse text-[#FFB380]" />
              <span>Book Free AI Consultation</span>
            </button>
          </div>
        </div>

        <div className="relative z-10 shrink-0 space-y-2.5 border-t border-white/10 bg-slate-900/95 px-5 py-4 sm:px-8">
          <p className="font-mono text-[10px] uppercase tracking-wider text-slate-400">Direct Contact</p>
          <div className="grid grid-cols-1 gap-2 text-xs sm:grid-cols-2">
            <a href="tel:+918530819966" className="flex items-center gap-2.5 rounded-lg border border-white/5 bg-white/5 p-2.5 font-mono text-slate-200 transition-colors hover:bg-white/10 hover:text-cyan-300">
              <Phone size={14} className="shrink-0 text-[#0066cc]" />
              <span className="truncate">+91 85308 19966</span>
            </a>
            <a href="mailto:info@blendskills.co.in" className="flex items-center gap-2.5 rounded-lg border border-white/5 bg-white/5 p-2.5 font-mono text-slate-200 transition-colors hover:bg-white/10 hover:text-cyan-300">
              <Mail size={14} className="shrink-0 text-[#0066cc]" />
              <span className="truncate">info@blendskills.co.in</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
