// Header.jsx
import { useState, useEffect, useCallback } from 'react';
import { Moon, Sun, Zap } from 'lucide-react';
import { useApp } from '../context.jsx';
import { playSwarm } from '../motion/swarm.js';

const NAV = [
  { label: 'Work', href: '#work' },
  { label: 'AI Lab', href: '#lab' },
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#journey' },
  { label: 'Creator', href: '#creator' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const { theme, toggleTheme, motion, toggleMotion } = useApp();
  const [prog, setProg] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setProg(docH > 0 ? (window.scrollY / docH) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const handleNav = useCallback((e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <>
      <header id="header">
        <div className="wrap hbar">
          <a href="#hero" className="logo" data-logo onClick={(e) => handleNav(e, '#hero')}>
            ARISH DONI<span> ▪</span>
          </a>

          <nav className="hnav">
            {NAV.map((n, i) => (
              <span key={n.href} className="hnav-item-wrap">
                <a href={n.href} onClick={(e) => handleNav(e, n.href)}>{n.label}</a>
                {i < NAV.length - 1 && <span className="hnav-sep">·</span>}
              </span>
            ))}
          </nav>

          <div className="hcontrols">
            <button className="swarm-btn" onClick={playSwarm} title="Play Builder Swarm (Alt+Shift+S)">
              <Zap size={12} /> Swarm
            </button>
            <button
              className="ctrl-pill-btn"
              onClick={toggleMotion}
              aria-pressed={motion}
              title={motion ? 'Disable motion' : 'Enable motion'}
            >
              <span className="ctrl-icon">☷</span>
              <span className="ctrl-lbl">{motion ? 'Motion on' : 'Motion off'}</span>
            </button>
            <button
              className="ctrl-pill-btn"
              onClick={toggleTheme}
              aria-pressed={theme === 'dark'}
              title="Toggle theme"
            >
              <span className="ctrl-icon">{theme === 'dark' ? '☼' : '☾'}</span>
              <span className="ctrl-lbl">{theme === 'dark' ? 'Dark' : 'Light'}</span>
            </button>
            <a href="#contact" className="btn btn-solid hcta" onClick={(e) => handleNav(e, '#contact')}>
              Let's connect ↗
            </a>
          </div>

          <button
            className="hmenu-btn"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span style={menuOpen ? { transform: 'rotate(45deg) translate(5px,5px)' } : {}} />
            <span style={menuOpen ? { opacity: 0 } : {}} />
            <span style={menuOpen ? { transform: 'rotate(-45deg) translate(5px,-5px)' } : {}} />
          </button>

          <div className="hprog" style={{ width: `${prog}%` }} />
        </div>
      </header>

      {/* Mobile nav overlay */}
      <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)} aria-label="Close menu">✕</button>
        {NAV.map((n, i) => (
          <a key={n.href} href={n.href} onClick={(e) => handleNav(e, n.href)}>
            <sup>0{i + 1}</sup>
            {n.label}
          </a>
        ))}
        <div style={{ marginTop: 32, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <button className="btn btn-solid" onClick={() => { setMenuOpen(false); playSwarm(); }}>
            <Zap size={12} /> Swarm
          </button>
          <button className="btn btn-ghost" onClick={toggleTheme}>
            {theme === 'dark' ? '☀ Light' : '☾ Dark'}
          </button>
        </div>
      </nav>
    </>
  );
}
