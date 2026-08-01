import { useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import ProcessSection from '@/components/Process';

export default function ProcessPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  useScrollReveal();
  useDocumentTitle('Our Process — 4-Step Blueprint | BlendSkills', 'Discover our proven 4-step execution framework: Discovery & Strategy, High-Fidelity Design, Agile Engineering, and Continuous Scaling.');
  return (
    <main className="pt-24">
      <ProcessSection />
    </main>
  );
}
