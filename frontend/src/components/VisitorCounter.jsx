// VisitorCounter.jsx
import { useEffect, useRef, useState } from 'react';
import { Eye } from 'lucide-react';
import { useApp } from '../context.jsx';

// Live total-visits counter using Abacus API (from spec Appendix B)
export default function VisitorCounter() {
  const { site } = useApp();
  const cfg = site.visitorCounter;
  const cacheKey = `${site.storageKey}-visits`;
  const [count, setCount] = useState(() => {
    try {
      const v = +localStorage.getItem(cacheKey);
      return v > 0 ? v : null;
    } catch {
      return null;
    }
  });
  const [bump, setBump] = useState(false);
  const last = useRef(count);

  useEffect(() => {
    if (!cfg) return;
    const base = `https://abacus.jasoncameron.dev/%s/${encodeURIComponent(cfg.namespace)}/${encodeURIComponent(cfg.key)}`;
    let stop = false;
    const show = (v) => {
      if (stop || typeof v !== 'number') return;
      if (last.current != null && v > last.current) {
        setBump(true);
        setTimeout(() => setBump(false), 900);
      }
      last.current = v;
      setCount(v);
      try {
        localStorage.setItem(cacheKey, String(v));
      } catch {
        /* storage blocked */
      }
    };
    const call = (op) =>
      fetch(base.replace('%s', op), { cache: 'no-store' })
        .then((r) => (r.ok ? r.json() : null))
        .then((j) => j && show(j.value))
        .catch(() => {});

    call('hit');
    const refresh = () => {
      if (document.visibilityState === 'visible') call('get');
    };
    const t = setInterval(refresh, 15000);
    document.addEventListener('visibilitychange', refresh);
    return () => {
      stop = true;
      clearInterval(t);
      document.removeEventListener('visibilitychange', refresh);
    };
  }, [cfg, cacheKey]);

  if (count == null) return null;
  return (
    <div className={`visitor-counter ${bump ? 'vc-bump' : ''}`}>
      <Eye size={14} />
      <span className="visitor-count">{count.toLocaleString()}</span>
      <span>visitors</span>
    </div>
  );
}
