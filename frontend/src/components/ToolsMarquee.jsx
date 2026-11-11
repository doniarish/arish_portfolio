// ToolsMarquee.jsx — The tools I trust (Spec Item 4)
import { useState } from 'react';
import { Pause, Play, LayoutGrid, ChevronDown, ChevronUp } from 'lucide-react';
import { skillsMarquee } from '../data/profile.js';

export default function ToolsMarquee() {
  const [paused, setPaused] = useState(false);
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="tools" className="tools-section">
      <div className="wrap">
        <div className="section-label rv">
          <span className="kicker">03 / STACK</span>
        </div>

        <div className="tools-header-row rv">
          <div>
            <h2 className="sec-head">
              The tools<br />I trust<span className="red-dot">.</span>
            </h2>
            <p className="tools-sub">Technologies and frameworks I build production AI systems with.</p>
          </div>

          <div className="tools-ctrl-bar">
            <button
              type="button"
              className={`tools-ctrl-btn ${paused ? 'active' : ''}`}
              onClick={() => setPaused(p => !p)}
              title={paused ? 'Resume scrolling' : 'Pause scrolling'}
              aria-label={paused ? 'Resume scrolling' : 'Pause scrolling'}
            >
              {paused ? <Play size={14} /> : <Pause size={14} />}
              <span>{paused ? 'Resume' : 'Pause'}</span>
            </button>

            <button
              type="button"
              className={`tools-ctrl-btn ${showAll ? 'active' : ''}`}
              onClick={() => setShowAll(s => !s)}
              title={showAll ? 'Hide tool grid' : 'View all tools'}
              aria-expanded={showAll}
            >
              <LayoutGrid size={14} />
              <span>{showAll ? 'Hide All' : `See All (${skillsMarquee.length})`}</span>
              {showAll ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>
          </div>
        </div>

        {/* Marquee Row */}
        <div
          className={`marquee-wrap ${paused ? 'is-paused' : ''}`}
          title="Click Pause to stop"
        >
          <div className="marquee-track">
            {skillsMarquee.map((tool, i) => (
              <span key={`t1-${i}`} className="marquee-badge">
                <span className="marquee-dot" />
                <span className="marquee-text">{tool}</span>
              </span>
            ))}
          </div>
          <div className="marquee-track" aria-hidden="true">
            {skillsMarquee.map((tool, i) => (
              <span key={`t2-${i}`} className="marquee-badge">
                <span className="marquee-dot" />
                <span className="marquee-text">{tool}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Expanded 'See All' Grid */}
        {showAll && (
          <div className="tools-expanded-grid rv vis">
            {skillsMarquee.map((tool) => (
              <div key={tool} className="tool-tile">
                <span className="tool-tile-dot" />
                <span className="tool-tile-name">{tool}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

