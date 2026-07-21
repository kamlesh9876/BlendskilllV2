import { BarChart3, Sparkles, FileBarChart } from 'lucide-react';
import { useTilt } from '@/hooks/useInteractions';
import { scrollToId } from '@/hooks/useScroll';
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
  return (
    <article ref={ref} className="reveal glass-card p-10 md:p-12 relative overflow-hidden">
      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-[rgba(0,245,212,0.08)] border border-[rgba(0,245,212,0.15)]">
        <Icon size={22} className="text-[#00f5d4]" />
      </div>
      <h3 className="font-display text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-[#94a3b8] text-[0.95rem] leading-relaxed mb-6">{body}</p>
      <a
        href="#services"
        onClick={(e) => {
          e.preventDefault();
          scrollToId('#services');
        }}
        className="link-underline"
      >
        Read more
      </a>
    </article>
  );
}

export default function Expertise() {
  return (
    <section id="work" className="relative z-[2] py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16">
        <div className="reveal">
          <p className="eyebrow">Our Expertise</p>
          <h2 className="h2">
            Data-driven strategies,
            <br />
            measurable results.
          </h2>
        </div>
        <div className="reveal">
          <p className="lead">
            At <strong>BlendSkills</strong>, we craft result-driven digital marketing strategies and
            high-performance websites that help brands grow faster with real business impact. As a
            trusted digital marketing and web development company in Pune and Gaya, we specialize in
            SEO, social media marketing, Google Ads, branding, website development, and app development.
          </p>
          <ul className="flex flex-wrap gap-3 list-none mt-8">
            {['Performance Marketing', 'Social Media Growth', 'Content Marketing', 'Brand Strategy & More'].map((t) => (
              <li
                key={t}
                className="font-mono text-[0.8rem] px-4 py-1.5 rounded-full text-[#94a3b8] transition-colors duration-300 hover:text-[#00f5d4] hover:border-[rgba(0,245,212,0.3)] cursor-default"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)' }}
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
