import { useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Expertise from '@/components/Expertise';
import WhyChooseUs from '@/components/WhyChooseUs';

export default function About() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  useScrollReveal();
  return (
    <main className="pt-24">
      <Expertise />
      <div className="blend-rule" />
      <WhyChooseUs />
    </main>
  );
}
