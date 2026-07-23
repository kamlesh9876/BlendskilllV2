import { useEffect, useState } from 'react';
import CursorGlow from '@/components/CursorGlow';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Expertise from '@/components/Expertise';
import WhyChooseUs from '@/components/WhyChooseUs';
import Services from '@/components/Services';
import CaseStudies from '@/components/CaseStudies';
import Testimonials from '@/components/Testimonials';
import Process from '@/components/Process';
import Contact, { Footer } from '@/components/Contact';
import BackToTop from '@/components/BackToTop';
import { useScrollProgress } from '@/hooks/useScrollProgress';

function SkeletonLoader() {
  const lines = [100, 78, 56];
  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col justify-between p-10 transition-opacity duration-800"
      style={{ background: 'var(--bg-color)' }}
      aria-hidden="true"
    >
      <div className="flex justify-between items-center max-w-[1200px] w-full mx-auto">
        <div className="h-6 rounded shimmer" style={{ width: 120, background: 'rgba(255,255,255,0.04)' }} />
        <div className="flex gap-4">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="h-5 rounded-full shimmer" style={{ width: 80, background: 'rgba(255,255,255,0.04)' }} />
          ))}
        </div>
      </div>
      <div className="max-w-[1200px] w-full mx-auto">
        <div className="h-4 mb-6 rounded shimmer" style={{ width: 180, background: 'rgba(255,255,255,0.04)' }} />
        {lines.map((w, i) => (
          <div key={i} className="h-14 mb-4 rounded shimmer" style={{ width: `${w}%`, background: 'rgba(255,255,255,0.04)' }} />
        ))}
      </div>
      <div className="font-display text-2xl font-bold max-w-[1200px] w-full mx-auto">
        Blend<span className="text-[#00f5d4]">Skills</span>
      </div>
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const progress = useScrollProgress();

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <div className="grain" />
      <CursorGlow />
      {loading && <SkeletonLoader />}

      <Nav />
      <main id="top">
        <Hero />
        <Marquee />
        <div className="blend-rule" />
        <Expertise />
        <div className="blend-rule" />
        <WhyChooseUs />
        <div className="blend-rule" />
        <Services />
        <div className="blend-rule" />
        <CaseStudies />
        <div className="blend-rule" />
        <Testimonials />
        <div className="blend-rule" />
        <Process />
        <div className="blend-rule" />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
