import { useEffect } from 'react';
import { Link } from 'wouter';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

export default function NotFound() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useDocumentTitle('404 — Page Not Found | BlendSkills', 'The page you are looking for does not exist or has been moved.');

  return (
    <main className="min-h-screen bg-[#070b14] text-slate-100 flex items-center justify-center px-4 py-24 relative overflow-hidden">
      {/* Glow overlays */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-xl w-full text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-6">
          <Search size={14} />
          <span>Error 404</span>
        </div>

        <h1 className="text-7xl sm:text-9xl font-extrabold font-display text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 mb-4 tracking-tight">
          404
        </h1>

        <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4">
          Page Not Found
        </h2>

        <p className="text-slate-400 text-base sm:text-lg mb-8 leading-relaxed max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 hover:scale-[1.02] transition-all cursor-pointer"
          >
            <Home size={18} />
            Back to Homepage
          </Link>

          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 font-semibold text-sm transition-all cursor-pointer"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
}
