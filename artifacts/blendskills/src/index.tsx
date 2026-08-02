import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalLayout from './components/GlobalLayout';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ShowcaseSection from './components/ShowcaseSection';
import StatsSection from './components/StatsSection';
import TimelineSection from './components/TimelineSection';
import FooterSection from './components/FooterSection';
import './styles/global.css';

function App() {
  return (
    <GlobalLayout>
      <HeroSection />
      <AboutSection />
      <ShowcaseSection />
      <StatsSection />
      <TimelineSection />
      <FooterSection />
    </GlobalLayout>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
