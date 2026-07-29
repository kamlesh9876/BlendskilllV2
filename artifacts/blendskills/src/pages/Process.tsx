import { useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import ProcessSection from '@/components/Process';

export default function ProcessPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  useScrollReveal();
  return (
    <main className="pt-24">
      <ProcessSection />
    </main>
  );
}
