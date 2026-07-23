import { useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { useMagnetic } from '@/hooks/useInteractions';
import { useScrolled } from '@/hooks/useScroll';

const LINKS = [
  { href: '/about', label: 'What We Do' },
  { href: '/services', label: 'Services' },
  { href: '/process', label: 'Process' },
  { href: '/results', label: 'Results' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const scrolled = useScrolled(40);
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  const consultRef = useMagnetic<HTMLAnchorElement>();

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
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
        scrolled
          ? 'py-4 bg-[rgba(7,10,19,0.8)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.06)]'
          : 'py-8'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
        <Link
          href="/"
          className="font-display text-2xl font-bold tracking-tight text-white no-underline transition-transform duration-300 hover:scale-[1.02]"
        >
          Blend<span className="text-[#00f5d4]">Skills</span>
        </Link>

        <nav className="hidden md:flex gap-10">
          {LINKS.map((l) => {
            const isActive = location === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative text-[0.95rem] font-medium transition-colors duration-300 no-underline group ${
                  isActive ? 'text-[#00f5d4]' : 'text-[#94a3b8] hover:text-[#00f5d4]'
                }`}
              >
                {l.label}
                <span
                  className="absolute -bottom-1 left-0 h-px bg-[#00f5d4] transition-all duration-300 group-hover:w-full"
                  style={{ width: isActive ? '100%' : '0' }}
                />
              </Link>
            );
          })}
        </nav>

        <Link
          ref={consultRef}
          href="/contact"
          className="btn btn-small hidden md:inline-flex"
        >
          <span>Get a Consult</span>
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden flex items-center justify-center w-10 h-10 text-white relative z-[1002]"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-0 top-0 bg-[#090e1a]/95 backdrop-blur-xl transition-all duration-500 ${
          open ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-7">
          {LINKS.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-display text-2xl font-semibold text-white hover:text-[#00f5d4] transition-colors no-underline"
              style={{
                transitionDelay: open ? `${i * 60 + 100}ms` : '0ms',
                opacity: open ? 1 : 0,
                transform: open ? 'translateY(0)' : 'translateY(10px)',
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn btn-primary mt-6"
            style={{
              transitionDelay: open ? `${LINKS.length * 60 + 100}ms` : '0ms',
              opacity: open ? 1 : 0,
              transform: open ? 'translateY(0)' : 'translateY(10px)',
            }}
          >
            <span>Get a Consult</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
