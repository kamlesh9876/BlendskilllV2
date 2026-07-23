import { useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import CaseStudies from '@/components/CaseStudies';
import Testimonials from '@/components/Testimonials';

export default function Results() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  useScrollReveal();
  return (
    <main className="pt-24">
      <CaseStudies />
      <div className="blend-rule" />
      <Testimonials />
    </main>
  );
}
