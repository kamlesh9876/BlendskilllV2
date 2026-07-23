import { useEffect } from 'react';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';

export default function Home() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <main>
      <Hero />
      <Marquee />
    </main>
  );
}
