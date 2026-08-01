import { useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import ServicesSection from '@/components/Services';

export default function Services() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  useScrollReveal();
  useDocumentTitle('Our Services — Software, AI Automation & Marketing | BlendSkills', 'Explore custom software development, 24/7 AI chatbots & workflow automation, performance marketing, and analytics solutions.');
  return (
    <main className="pt-24">
      <ServicesSection />
    </main>
  );
}
