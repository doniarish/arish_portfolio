// Lab.jsx
import { useState, useEffect, useRef } from 'react';
import { consoleLines, labBeforeAfter, services } from '../data/profile.js';

const SERVICE_ICONS = { cpu: '🖥️', zap: '⚡', code: '</>' };

export default function Lab() {
  const [consoleIdx, setConsoleIdx] = useState(0);
  const [split, setSplit] = useState(50);
  const sliderRef = useRef(null);

  // Console rotating lines
  useEffect(() => {
    const interval = setInterval(() => {
      setConsoleIdx(i => (i + 1) % consoleLines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSliderChange = (e) => {
    setSplit(Number(e.target.value));
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') setSplit(s => Math.max(0, s - 5));
    if (e.key === 'ArrowRight') setSplit(s => Math.min(100, s + 5));
  };

  return (
    <section id="lab">
      <div className="wrap">
        <div className="section-label rv">
          <span className="kicker">03 / LAB</span>
        </div>
        <h2 className="sec-head rv">
          Under the<br />Hood<span className="red-dot">.</span>
        </h2>

        <div className="lab-top" style={{ marginTop: 48 }}>
          {/* Console */}
          <div className="lab-console rv d1">
            <div className="console-bar">
              <div className="console-dot" /><div className="console-dot" /><div className="console-dot" />
              <span className="console-title">arish@ml-workstation:~</span>
            </div>
            <div className="console-body">
              {consoleLines.map((line, i) => (
                <div
                  key={i}
                  className="console-line"
                  style={{
                    opacity: i === consoleIdx ? 1 : 0.3,
                    transition: 'opacity 0.4s ease',
                  }}
                >
                  <span className="console-cmd">{line[0]}</span>
                  <span className="console-out">{line[1]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Before / After slider */}
          <div className="rv d2">
            <div className="ba-header-row">
              <div className="ba-label">Before / After — AI Debug</div>
              <div className="ba-presets">
                <button
                  type="button"
                  className={`ba-preset-btn ${split <= 15 ? 'active' : ''}`}
                  onClick={() => setSplit(10)}
                  title="Show Before state"
                >
                  ◀ Before
                </button>
                <button
                  type="button"
                  className={`ba-preset-btn ${split > 35 && split < 65 ? 'active' : ''}`}
                  onClick={() => setSplit(50)}
                  title="50/50 Split view"
                >
                  50 / 50
                </button>
                <button
                  type="button"
                  className={`ba-preset-btn ${split >= 85 ? 'active' : ''}`}
                  onClick={() => setSplit(90)}
                  title="Show After state"
                >
                  After ▶
                </button>
              </div>
            </div>

            <div
              ref={sliderRef}
              className="lab-slider"
              role="region"
              aria-label="Before and after transformation slider"
              tabIndex={0}
              onKeyDown={onKeyDown}
              style={{ '--x': split }}
            >
              {/* Native range input positioned across the entire slider for smooth dragging */}
              <input
                type="range"
                min="0"
                max="100"
                value={split}
                onChange={handleSliderChange}
                aria-label="Before and after slider position"
                className="ba-range-input"
              />

              <div className="ba-panel ba-before">
                <span className="ba-badge before">Before</span>
                <p className="ba-text">{labBeforeAfter.before}</p>
              </div>

              <div
                className="ba-panel ba-after"
                style={{ clipPath: `inset(0 0 0 ${split}%)` }}
              >
                <span className="ba-badge after">After</span>
                <p className="ba-text">{labBeforeAfter.after}</p>
              </div>

              <div
                className="ba-handle"
                style={{ left: `${split}%` }}
                aria-hidden="true"
              >
                <span className="ba-handle-badge">◀▶</span>
              </div>
            </div>
          </div>
        </div>

        {/* System Diagram (Spec Item 5 & Reference Image) */}
        <div className="sys-diagram-wrap rv d2">
          <div className="sys-diagram-label">Architecture Pipeline</div>
          <div className="sys-diagram">
            {/* Root Node: AI Clients / LLMs */}
            <div className="sys-node sys-root">
              <span className="sys-node-title">AI CLIENTS &amp; AGENTS</span>
              <span className="sys-node-sub">LangChain · LangGraph · Multi-turn LLMs</span>
            </div>

            <div className="sys-connector" />

            {/* Bus Node: Hybrid Orchestrator */}
            <div className="sys-node sys-bus">
              <span className="sys-node-title">HYBRID RAG &amp; ROUTING BUS</span>
              <span className="sys-node-sub">Intent Classifier · Query Router · Redis Session Memory</span>
            </div>

            <div className="sys-connector" />

            {/* Three Leaves with */}
            <div className="sys-leaves">
              <div className="sys-node sys-leaf">
                <span className="sys-node-title">PINECONE / FAISS</span>
                <span className="sys-node-sub">Vector retrieval · Semantic search</span>
              </div>
              <div className="sys-node sys-leaf">
                <span className="sys-node-title">TEXT-TO-SQL ENGINE</span>
                <span className="sys-node-sub">SQL Server · Dynamic query builder</span>
              </div>
              <div className="sys-node sys-leaf">
                <span className="sys-node-title">REDIS STATE STORE</span>
                <span className="sys-node-sub">Context cache · Rate limiting</span>
              </div>
            </div>
          </div>
        </div>

        {/* Capability cards */}
        <h3 className="rv" style={{ fontFamily: 'var(--disp)', fontSize: 'clamp(24px,3vw,36px)', textTransform: 'uppercase', marginBottom: 24 }}>
          Services<span className="red-dot">.</span>
        </h3>
        <div className="caps-grid">
          {services.map((s, i) => (
            <div key={s.title} className={`cap-card rv d${i + 1}`}>
              <div className="cap-icon">{SERVICE_ICONS[s.icon] || '🤖'}</div>
              <div className="cap-title">{s.title}</div>
              <div className="cap-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
