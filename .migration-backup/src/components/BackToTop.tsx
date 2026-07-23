import { ArrowUp } from 'lucide-react';
import { useShowTop } from '@/hooks/useScroll';

export default function BackToTop() {
  const show = useShowTop(700);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`fixed bottom-8 right-8 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer z-[99] transition-all duration-500 group ${
        show ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
      style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', backdropFilter: 'blur(12px)' }}
    >
      <ArrowUp size={16} className="text-white transition-colors duration-300 group-hover:text-[#00f5d4]" />
      <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: '0 0 20px rgba(0,245,212,0.3)' }} />
    </button>
  );
}
