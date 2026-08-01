import { useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import CaseStudies from '@/components/CaseStudies';
import Testimonials from '@/components/Testimonials';

export default function Results() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  useScrollReveal();
  useDocumentTitle('Case Studies & Proven Results — BlendSkills', 'Discover how BlendSkills delivered +340% booking growth for Imagicaa, +180% revenue for Wet N Joy, and +220% applications for ADYPU.');
  return (
    <main className="pt-24">
      <CaseStudies />
      <div className="blend-rule" />
      <Testimonials />
    </main>
  );
}
