// App.jsx — root component
import { useEffect } from 'react';
import { AppProvider } from './context.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Ways from './components/Ways.jsx';
import Work from './components/Work.jsx';
import ToolsMarquee from './components/ToolsMarquee.jsx';
import Lab from './components/Lab.jsx';
import About from './components/About.jsx';
import Journey from './components/Journey.jsx';
import Creator from './components/Creator.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function Portfolio() {
  useEffect(() => {
    // Scroll reveal setup
    function revealAll() {
      const els = document.querySelectorAll('.rv:not(.vis)');
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach(e => {
            if (e.isIntersecting) {
              e.target.classList.add('vis');
              obs.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      els.forEach(el => obs.observe(el));
    }

    // Small delay so DOM is painted
    const timer = setTimeout(revealAll, 100);

    // MutationObserver so cards rendered later or updated state also reveal
    const mutObs = new MutationObserver(() => revealAll());
    mutObs.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(timer);
      mutObs.disconnect();
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Ways />
        <Work />
        <ToolsMarquee />
        <Lab />
        <About />
        <Journey />
        <Creator />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <AppProvider>
      <Portfolio />
    </AppProvider>
  );
}
