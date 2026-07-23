import { BarChart3, Sparkles, FileBarChart } from 'lucide-react';
import { useLocation } from 'wouter';
import { useTilt } from '@/hooks/useInteractions';
import type { LucideIcon } from 'lucide-react';

const FEATURES: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: BarChart3,
    title: 'Data-Driven Approach',
    body: 'We use analytics, insights, and performance data to build marketing strategies that drive measurable growth. Every campaign is optimized in real time to maximize ROI.',
  },
  {
    icon: Sparkles,
    title: 'Creative & Innovative',
    body: 'We blend creative storytelling with innovative digital solutions to build unique brand experiences that stand out online and boost conversions.',
  },
  {
    icon: FileBarChart,
    title: 'Transparent Reporting',
    body: 'Clear, honest performance reporting means you always know where your budget goes. Real-time insights, detailed analytics, measurable progress.',
  },
];

function FeatureCard({ icon: Icon, title, body }: (typeof FEATURES)[number]) {
  const ref = useTilt<HTMLDivElement>();
  const [, navigate] = useLocation();
  return (
    <article ref={ref} className="reveal glass-card p-10 md:p-12 relative overflow-hidden group">
      <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br from-[rgba(0,245,212,0.15)] to-[rgba(0,245,212,0.05)] border border-[rgba(0,245,212,0.2)] group-hover:from-[rgba(0,245,212,0.2)] group-hover:to-[rgba(0,245,212,0.08)] transition-all duration-500">
        <Icon size={24} className="text-[#00f5d4]" />
      </div>
      <h3 className="font-display text-2xl lg:text-3xl font-bold mb-4 leading-tight">{title}</h3>
      <p className="text-[#94a3b8] text-[0.95rem] leading-relaxed mb-6 font-light">{body}</p>
      <a
        href="/services"
        onClick={(e) => { e.preventDefault(); navigate('/services'); }}
        className="link-underline"
      >
        Read more
      </a>
    </article>
  );
}

export default function Expertise() {
  const [, navigate] = useLocation();
  return (
    <section id="work" className="relative z-[2] py-24 md:py-40 lg:py-48">
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-20">
        <div className="reveal">
          <p className="eyebrow">Our Expertise</p>
          <h2 className="h2">
            Data-driven strategies,<br className="hidden md:block" />
            measurable results.
          </h2>
        </div>
        <div className="reveal">
          <p className="lead text-lg lg:text-xl">
            At <strong>BlendSkills</strong>, we craft result-driven digital marketing strategies and
            high-performance websites that help brands grow faster with real business impact. As a
            trusted digital marketing and web development company in Pune and Gaya, we specialize in
            SEO, social media marketing, Google Ads, branding, website development, and app development.
          </p>
          <ul className="flex flex-wrap gap-3 list-none mt-8">
            {['Performance Marketing', 'Social Media Growth', 'Content Marketing', 'Brand Strategy & More'].map((t) => (
              <li
                key={t}
                className="font-mono text-[0.75rem] px-4 py-2 rounded-lg text-[#94a3b8] transition-all duration-300 hover:text-[#00f5d4] hover:bg-[rgba(0,245,212,0.08)] hover:border-[rgba(0,245,212,0.3)] cursor-default font-semibold tracking-wider"
                style={{ background: 'rgba(0,245,212,0.04)', border: '1px solid rgba(0,245,212,0.1)' }}
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 mt-16 md:mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {FEATURES.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </section>
  );
}
