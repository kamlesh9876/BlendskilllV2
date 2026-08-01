import { useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import ContactSection from '@/components/Contact';

export default function ContactPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  useScrollReveal();
  useDocumentTitle('Book a Consultation — Contact BlendSkills', 'Book a free 30-minute AI & digital strategy session with BlendSkills. Reach our Pune or Gaya offices via info@blendskills.co.in or +91 85308 19966.');
  return (
    <main className="pt-24">
      <ContactSection />
    </main>
  );
}
