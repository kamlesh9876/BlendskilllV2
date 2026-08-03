import { motion } from 'framer-motion';
import { ArrowRight, Instagram, Linkedin, Mail, Sparkles } from 'lucide-react';
import { Link } from 'wouter';

export default function FooterSection() {
  return (
    <footer id="footer" className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-[#0a0e14] via-[#0e141d] to-[#05070b]">
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-mesh absolute inset-0 opacity-60" />
        <div className="absolute left-[10%] top-[10%] h-64 w-64 rounded-full bg-[#FF6B35]/10 blur-[7rem]" />
        <div className="absolute bottom-[5%] right-[8%] h-72 w-72 rounded-full bg-[#00F5D4]/10 blur-[8rem]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16 md:px-12 lg:px-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[2rem] border border-white/10 bg-white/6 p-8 shadow-[0_24px_90px_rgba(3,7,18,0.4)] backdrop-blur-xl md:p-10"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FF6B35]/20 bg-[#FF6B35]/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#FF8557]">
                <Sparkles size={13} />
                Ready when you are
              </div>
              <h2 className="mb-4 font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
                Let’s shape something unmistakably premium.
              </h2>
              <p className="max-w-xl text-base leading-8 text-[#A8B0BF]">
                From product strategy to engineering execution, we help ambitious teams launch experiences that feel as sharp as they perform.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#FF6B35] to-[#FF8557] px-6 py-3.5 font-semibold text-white shadow-[0_20px_50px_-12px_rgba(255,107,53,0.45)] transition-all duration-300 hover:-translate-y-1">
                Book a consultation
                <ArrowRight size={17} />
              </Link>
              <a href="mailto:info@blendskills.co.in" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/8 px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:border-[#00F5D4]/40 hover:bg-white/12">
                <Mail size={17} />
                Reach us directly
              </a>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col gap-6 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-[#7E8798]">© 2026 BlendSkills. All rights reserved.</p>
          <div className="flex flex-wrap gap-3">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-2.5 text-[#A8B0BF] transition-colors duration-300 hover:border-[#FF6B35]/30 hover:text-white">
              <Linkedin size={16} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-2.5 text-[#A8B0BF] transition-colors duration-300 hover:border-[#FF6B35]/30 hover:text-white">
              <Instagram size={16} />
            </a>
            <a href="mailto:info@blendskills.co.in" className="rounded-full border border-white/10 bg-white/5 p-2.5 text-[#A8B0BF] transition-colors duration-300 hover:border-[#FF6B35]/30 hover:text-white">
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
