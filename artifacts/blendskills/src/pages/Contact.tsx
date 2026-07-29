import { useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import ContactSection from '@/components/Contact';

export default function ContactPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  useScrollReveal();
  return (
    <main className="pt-24">
      <ContactSection />
    </main>
  );
}
