// Work.jsx
import { useState, useMemo } from 'react';
import { projects } from '../data/profile.js';

function hashCat(cat) {
  let h = 0;
  for (let i = 0; i < cat.length; i++) h = (h * 31 + cat.charCodeAt(i)) & 0xffff;
  return h % 4;
}

const FILTERS = ['All', 'Career', 'Personal', 'Public'];

export default function Work() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return projects.filter(p => {
      const matchFilter = filter === 'All' || p.group === filter || p.l === filter;
      const q = search.toLowerCase();
      const matchSearch = !q || [p.t, p.cat, p.d, ...p.stack].join(' ').toLowerCase().includes(q);
      return matchFilter && matchSearch;
    });
  }, [filter, search]);

  return (
    <section id="work">
      <div className="wrap">
        <div className="section-label rv">
          <span className="kicker">02 / WORK</span>
        </div>

        <div className="work-top">
          <h2 className="sec-head rv">
            Projects<span className="red-dot">.</span>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-end' }}>
            <div className="work-filters">
              {FILTERS.map(f => (
                <button
                  key={f}
                  className={`filter-btn ${filter === f ? 'active' : ''}`}
                  onClick={() => setFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
            <input
              type="search"
              className="work-search"
              placeholder="Search projects…"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="no-results">No projects match your search.</div>
        ) : (
          <div className="work-grid">
            {filtered.map((p, i) => (
              <article key={p.t} className={`proj-card rv d${(i % 3) + 1}`}>
                <div className={`proj-thumb proj-thumb-${hashCat(p.cat)}`} />
                <div className="proj-body">
                  <div className="proj-cat">
                    <span>{p.cat}</span>
                    <span className="proj-badge">{p.l}</span>
                  </div>
                  <h3 className="proj-title">{p.t}</h3>
                  <p className="proj-desc">{p.d}</p>
                  <div className="proj-stack">
                    {p.stack.map(s => <span key={s} className="stack-tag">{s}</span>)}
                  </div>
                  {p.link && (
                    <a href={p.link} className="proj-link" target="_blank" rel="noopener noreferrer">
                      View Project →
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
