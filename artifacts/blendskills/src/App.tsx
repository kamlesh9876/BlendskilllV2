import { Route, Switch, Router as WouterRouter } from 'wouter';
import Nav from '@/components/Nav';
import { Footer } from '@/components/Contact';
import AIChatBot from '@/components/AIChatBot';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Results from '@/pages/Results';
import ProcessPage from '@/pages/Process';
import ContactPage from '@/pages/Contact';

export default function App() {
  const progress = useScrollProgress();

  return (
    <WouterRouter>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <Nav />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/results" component={Results} />
        <Route path="/process" component={ProcessPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
      <Footer />
      <AIChatBot />
    </WouterRouter>
  );
}
