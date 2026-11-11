// Header.jsx
import { useState, useEffect, useCallback } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useApp } from '../context.jsx';

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
  const [menuOpen, setMenuOpen] = useState(false);

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
          <a href="#contact" className="btn btn-solid" onClick={(e) => handleNav(e, '#contact')}>
            Let's connect ↗
          </a>
          <button className="btn btn-ghost" onClick={toggleTheme}>
            {theme === 'dark' ? '☀ Light' : '☾ Dark'}
          </button>
        </div>
      </nav>
    </>
  );
}
