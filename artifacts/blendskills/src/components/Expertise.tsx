import { BarChart3, Sparkles, FileBarChart, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import type { LucideIcon } from 'lucide-react';

const FEATURES: { icon: LucideIcon; title: string; body: string; color: string; badge: string }[] = [
  {
    icon: BarChart3,
    title: 'Data-Driven Precision',
    body: 'We use real-time analytics, consumer insights, and performance data to optimize marketing campaigns for maximum conversion rates and minimum customer acquisition costs.',
    color: 'from-cyan-500 to-blue-600',
    badge: 'Analytics Engine',
  },
  {
    icon: Sparkles,
    title: 'Creative & Brand Innovation',
    body: 'We blend high-impact storytelling with bespoke interactive web design to build memorable brand identities that capture attention and foster long-term loyalty.',
    color: 'from-purple-500 to-indigo-600',
    badge: 'Creative Studio',
  },
  {
    icon: FileBarChart,
    title: 'Transparent Reporting',
    body: 'Clear, zero-fluff performance reporting means you always know where your budget goes. Gain live visibility into clicks, leads, sales pipeline, and revenue returns.',
    color: 'from-emerald-500 to-teal-600',
    badge: 'Real-Time Telemetry',
  },
];

export default function Expertise() {
  return (
    <section id="work" className="relative py-24 md:py-36 bg-slate-900 text-white overflow-hidden">
      {/* Background ambient light mesh */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 space-y-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-end">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-4">
              Our Core Methodology
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
              Data-driven strategies.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                Measurable growth results.
              </span>
            </h2>
          </div>

          <div>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              At <strong>BlendSkills</strong>, we craft result-driven digital marketing strategies and high-performance websites that help brands scale faster with real business impact across Pune, Gaya, and international markets.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {['Performance Marketing', 'Social Media Funnels', 'Technical SEO', 'AI Automation', 'Brand Strategy'].map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs px-3.5 py-1.5 rounded-xl text-slate-300 bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:text-cyan-300 transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="p-8 rounded-3xl bg-slate-950/80 border border-slate-800 hover:border-cyan-400/50 transition-all duration-300 shadow-xl group flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.color} text-white flex items-center justify-center shadow-lg`}>
                    <f.icon size={26} />
                  </div>
                  <span className="font-mono text-[10px] uppercase font-bold text-slate-400 px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                    {f.badge}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-white group-hover:text-cyan-300 transition-colors">
                  {f.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {f.body}
                </p>
              </div>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 transition-all pt-4 border-t border-slate-800/80"
              >
                <span>Learn More About Our Methodology</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
