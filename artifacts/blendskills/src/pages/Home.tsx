import { useEffect } from 'react';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import Hero from '@/components/Hero';
import TrustedCompanies from '@/components/TrustedCompanies';
import BusinessProblems from '@/components/BusinessProblems';
import Services from '@/components/Services';
import AISection from '@/components/AISection';
import CaseStudies from '@/components/CaseStudies';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';

export default function Home() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  useDocumentTitle('BlendSkills — Digital Marketing, Custom Software & AI Automation', 'BlendSkills crafts data-driven digital marketing strategies, custom web & mobile app engineering, and 24/7 AI workflow automation.');
  return (
    <main>
      <Hero />
      <TrustedCompanies />
      <BusinessProblems />
      <Services />
      <AISection />
      <CaseStudies />
      <Process />
      <Testimonials />
      <Contact />
    </main>
  );
}

