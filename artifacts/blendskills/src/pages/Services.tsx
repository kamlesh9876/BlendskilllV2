import { useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import ServicesSection from '@/components/Services';

export default function Services() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  useScrollReveal();
  return (
    <main className="pt-24">
      <ServicesSection />
    </main>
  );
}
