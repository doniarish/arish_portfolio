import { useState, useEffect, useCallback } from 'react';
import BgAnimation   from './components/BgAnimation';
import Navbar        from './components/Navbar';
import Hero          from './components/Hero';
import About         from './components/About';
import Skills        from './components/Skills';
import Services      from './components/Services';
import Projects      from './components/Projects';
import Contact       from './components/Contact';
import Footer        from './components/Footer';
import Notification  from './components/Notification';

function App() {
  const [notification, setNotification] = useState({ message: '', type: '', visible: false });

  // Scroll-reveal via IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    sections.forEach((s) => {
      s.style.opacity = '0';
      s.style.transform = 'translateY(20px)';
      s.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const showNotification = useCallback((message, type) => {
    setNotification({ message, type, visible: true });
    setTimeout(() => setNotification((n) => ({ ...n, visible: false })), 5000);
  }, []);

  return (
    <>
      <BgAnimation />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact showNotification={showNotification} />
      <Footer />
      <Notification
        message={notification.message}
        type={notification.type}
        visible={notification.visible}
      />
    </>
  );
}

export default App;
