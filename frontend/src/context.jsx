// context.jsx — React context for theme, motion, and swarm
import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import site from './config/site.js';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem(site.storageKey + '-theme') || 'dark'; } catch { return 'dark'; }
  });
  const [motion, setMotion] = useState(() => {
    try {
      const saved = localStorage.getItem(site.storageKey + '-motion');
      if (saved !== null) return saved !== 'false';
    } catch {}
    return true;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem(site.storageKey + '-theme', theme); } catch {}
  }, [theme]);

  useEffect(() => {
    if (!motion) {
      document.documentElement.classList.add('nomo');
    } else {
      document.documentElement.classList.remove('nomo');
    }
    try { localStorage.setItem(site.storageKey + '-motion', String(motion)); } catch {}
  }, [motion]);

  const toggleTheme = useCallback(() => setTheme(t => t === 'dark' ? 'light' : 'dark'), []);
  const toggleMotion = useCallback(() => setMotion(m => !m), []);

  return (
    <AppContext.Provider value={{ theme, toggleTheme, motion, toggleMotion, site }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
