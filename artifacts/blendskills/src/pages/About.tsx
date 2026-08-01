import { useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import Expertise from '@/components/Expertise';
import WhyChooseUs from '@/components/WhyChooseUs';

export default function About() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  useScrollReveal();
  useDocumentTitle('About Us — BlendSkills', 'Learn about BlendSkills, our team, mission, values, and dual-location offices in Pune and Gaya, India.');
  return (
    <main className="pt-24">
      <Expertise />
      <div className="blend-rule" />
      <WhyChooseUs />
    </main>
  );
}
