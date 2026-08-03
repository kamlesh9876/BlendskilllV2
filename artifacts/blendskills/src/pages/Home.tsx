import { useEffect, useState } from 'react';
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
import { AuroraLoader } from '@/components/Skeleton';

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "BlendSkills",
  "description": "BlendSkills combines cutting-edge software engineering, performance marketing, and AI automation to help businesses scale with clarity and momentum.",
  "url": "https://blendskills.co.in",
  "logo": "https://blendskills.co.in/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91 85308 19966",
    "contactType": "sales",
    "email": "info@blendskills.co.in",
    "areaServed": ["IN", "US", "UK", "AU"],
    "availableLanguage": ["English"]
  },
  "address": [
    {
      "@type": "PostalAddress",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    {
      "@type": "PostalAddress",
      "addressLocality": "Gaya",
      "addressRegion": "Bihar",
      "addressCountry": "IN"
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/blendskills",
    "https://www.instagram.com/blendskills",
    "https://www.facebook.com/blendskills",
    "https://www.twitter.com/blendskills"
  ],
  "service": [
    {
      "@type": "Service",
      "name": "Custom Software Development",
      "description": "Scalable software solutions designed around your business goals"
    },
    {
      "@type": "Service",
      "name": "AI & Automation",
      "description": "Intelligent automation that saves time and reduces errors"
    },
    {
      "@type": "Service",
      "name": "Performance Marketing",
      "description": "Data-driven marketing strategies that deliver measurable ROI"
    },
    {
      "@type": "Service",
      "name": "Branding & Design",
      "description": "Strategic branding that resonates with your audience"
    }
  ]
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => { window.scrollTo(0, 0); }, []);
  
  useDocumentTitle('BlendSkills — Digital Marketing, Custom Software & AI Automation', 'BlendSkills crafts data-driven digital marketing strategies, custom web & mobile app engineering, and 24/7 AI workflow automation.');

  useEffect(() => {
    // Simulate initial loading for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Add structured data to head
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  if (isLoading) {
    return <AuroraLoader />;
  }

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

