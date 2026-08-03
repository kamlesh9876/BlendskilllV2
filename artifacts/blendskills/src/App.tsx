import { lazy, Suspense } from 'react';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import Nav from '@/components/Nav';
import { Footer } from '@/components/Contact';
import AIChatBot from '@/components/AIChatBot';
import { AuroraLoader } from '@/components/Skeleton';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import LiquidBackground from '@/components/LiquidBackground';
import SmoothScroll from '@/components/SmoothScroll';

const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Services = lazy(() => import('@/pages/Services'));
const SolutionsPage = lazy(() => import('@/pages/Solutions'));
const IndustriesPage = lazy(() => import('@/pages/Industries'));
const PortfolioPage = lazy(() => import('@/pages/Portfolio'));
const InsightsPage = lazy(() => import('@/pages/Insights'));
const Results = lazy(() => import('@/pages/Results'));
const ProcessPage = lazy(() => import('@/pages/Process'));
const ContactPage = lazy(() => import('@/pages/Contact'));
const NotFound = lazy(() => import('@/pages/NotFound'));

function PageFallback() {
  return <AuroraLoader />;
}

export default function App() {
  const progress = useScrollProgress();

  return (
    <SmoothScroll>
      <WouterRouter>
        <LiquidBackground />
        <div className="relative z-10">
          <div className="scroll-progress" style={{ width: `${progress}%` }} />
          <Nav />
          <Suspense fallback={<PageFallback />}>
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/services" component={Services} />
              <Route path="/solutions" component={SolutionsPage} />
              <Route path="/industries" component={IndustriesPage} />
              <Route path="/portfolio" component={PortfolioPage} />
              <Route path="/insights" component={InsightsPage} />
              <Route path="/results" component={Results} />
              <Route path="/process" component={ProcessPage} />
              <Route path="/contact" component={ContactPage} />
              <Route path="/:rest*" component={NotFound} />
            </Switch>
          </Suspense>
          <Footer />
        </div>
        <AIChatBot />
      </WouterRouter>
    </SmoothScroll>
  );
}
