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
    // Single shared IntersectionObserver for scroll reveals
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('vis');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const observeNew = () => {
      document.querySelectorAll('.rv:not(.vis)').forEach(el => obs.observe(el));
    };

    observeNew();

    // Debounced mutation observer so dynamic cards reveal without re-creating observers
    let debounceTimer = null;
    const mutObs = new MutationObserver(() => {
      if (debounceTimer) return;
      debounceTimer = setTimeout(() => {
        observeNew();
        debounceTimer = null;
      }, 150);
    });
    mutObs.observe(document.body, { childList: true, subtree: true });

    return () => {
      obs.disconnect();
      mutObs.disconnect();
      if (debounceTimer) clearTimeout(debounceTimer);
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
