// Hero.jsx — Cinematic Tech Portfolio Hero
import { useEffect, useRef } from 'react';
import { Cpu, Bug, Sparkles, Code } from 'lucide-react';
import { useApp } from '../context.jsx';
import { skillsMarquee } from '../data/profile.js';

function countUp(el, end, duration = 1800, suffix = '') {
  const isFloat = !Number.isInteger(end);
  const startTime = performance.now();
  function frame(now) {
    const p = Math.min((now - startTime) / duration, 1);
    const val = p * end;
    el.textContent = isFloat ? val.toFixed(1) + suffix : Math.floor(val) + suffix;
    if (p < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

export default function Hero() {
  const { site } = useApp();
  const statsRef = useRef(null);
  const statEls = useRef([]);

  const stats = [
    { value: 3, label: 'YEARS IN AI & DEV', suffix: '+' },
    { value: 8, label: 'PRODUCTION PROJECTS', suffix: '+' },
    { value: 93.7, label: 'MODEL ACCURACY PEAK', suffix: '%' },
  ];

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        statEls.current.forEach((el, i) => {
          const s = stats[i];
          if (el) countUp(el, s.value, 1800, s.suffix);
        });
        obs.disconnect();
      }
    }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <section id="hero">
        {/* Giant red background meaningful role word spanning across */}
        <div className="hero-bg-word" aria-hidden="true">
          {site.heroBgWord || 'AI ENGINEER'}
        </div>

        <div className="wrap hero-inner">
          {/* Top meta-bar */}
          <div className="hero-top-meta">
            <div className="hero-kicker rv d1">
              <span className="kicker-title">AI ENGINEER & GENAI SPECIALIST</span>
              <span className="kicker-sep">·</span>
              <span className="kicker-sub">LLMs · RAG · AGENTIC SYSTEMS × PRODUCTION</span>
            </div>

            <div className="hero-avail rv d1">
              <span className="avail-dot"></span>
              <span className="avail-text">OPEN TO ROLES, COLLABS & MENTORSHIP</span>
            </div>
          </div>

          {/* 3-Column main hero grid */}
          <div className="hero-grid">
            {/* Left Column: Hello, I'm Arish Doni + punchline + bio + CTAs */}
            <div className="hero-col-left">
              <div className="hero-script-wrap rv d1">
                <span className="hero-script">Hello, I'm</span>
              </div>

              <h1 className="hero-name rv d2">
                <span className="name-l1">ARISH</span><br />
                <span className="name-l2">DONI<span className="red-dot">.</span></span>
              </h1>

              <div className="hero-punchline rv d2">
                <div>AI MOMENTUM.</div>
                <div>PRODUCTION DEPTH.</div>
              </div>

              <p className="hero-bio rv d3">
                I build production AI systems, autonomous multi-agent workflows, and scalable architectures that turn complex models into reliable, high-impact products.
              </p>

              <div className="hero-actions rv d3">
                <a href={site.resume} className="btn btn-solid" download target="_blank" rel="noopener noreferrer">
                  Download CV →
                </a>
                <a href="#work" className="btn btn-ghost">
                  View Work →
                </a>
              </div>
            </div>

            {/* Center Column: Circular Avatar Tech Hub Portal */}
            <div className="hero-col-center rv d2">
              <div className="portal-container">
                {/* Outer concentric radar tech rings */}
                <div className="portal-ring outer"></div>
                <div className="portal-ring inner-dashed"></div>
                <div className="portal-ring grid-ticks"></div>

                {/* Left floating status pills */}
                <div className="portal-pills-stack">
                  <div className="portal-pill">
                    <span className="p-dot"></span>
                    <span className="p-text">LLM AGENTS: ACTIVE</span>
                  </div>
                  <div className="portal-pill">
                    <span className="p-dot"></span>
                    <span className="p-text">RAG PIPELINE: BUILDING</span>
                  </div>
                  <div className="portal-pill">
                    <span className="p-dot"></span>
                    <span className="p-text">MODEL OPS: READY</span>
                  </div>
                </div>

                {/* Orbit feature badges around the perimeter */}
                <div className="portal-badge badge-tr" title="Agentic AI Architecture">
                  <div className="b-icon"><Cpu size={14} /></div>
                  <div className="b-text">
                    <strong>AGENTIC AI</strong>
                    <span>ARCHITECTURE</span>
                  </div>
                </div>

                <div className="portal-badge badge-mr" title="Evals and Model Benchmarks">
                  <div className="b-icon"><Bug size={14} /></div>
                  <div className="b-text">
                    <strong>EVALS & TESTS</strong>
                    <span>HIGH ACCURACY</span>
                  </div>
                </div>

                <div className="portal-badge badge-br" title="Continuous Growth & Community">
                  <div className="b-icon"><Sparkles size={14} /></div>
                  <div className="b-text">
                    <strong>LEARN. BUILD.</strong>
                    <span>GROW TOGETHER.</span>
                  </div>
                </div>

                <div className="portal-badge badge-bl" title="Full Stack AI Automation">
                  <div className="b-icon"><Code size={14} /></div>
                  <div className="b-text">
                    <strong>FULL STACK AI</strong>
                    <span>SCALABLE APPS</span>
                  </div>
                </div>

                {/* Portrait framed in the center */}
                <div className="portal-portrait-frame">
                  <img
                    src={site.portrait}
                    alt="Arish Doni S"
                    className="portal-img"
                    loading="eager"
                  />
                  {/* Subtle inner dark gradient for blending */}
                  <div className="portal-img-blend"></div>
                </div>

                {/* Bottom Nameplate inside the circle */}
                <div className="portal-nameplate">
                  <div className="pn-name">ARISH DONI</div>
                  <div className="pn-role">AI ENGINEER | GENAI & AGENTS</div>
                </div>

                {/* Docked vibrant red "CURRENTLY BUILDING" badge */}
                <div className="portal-building-dock">
                  <div className="dock-label">CURRENTLY BUILDING</div>
                  <div className="dock-val">AGENTIC TOOLS FOR PRODUCTION</div>
                </div>
              </div>
            </div>

            {/* Right Column: Motto & Vertical Stat Numbers */}
            <div className="hero-col-right rv d2">
              <div className="hero-motto">
                <span className="motto-spark">✳</span>
                <div className="motto-lines">
                  <div>Agentic Workflows.</div>
                  <div>Scalable &amp; Reliable.</div>
                </div>
              </div>

              <div className="hero-stats-stack" ref={statsRef}>
                {stats.map((s, i) => (
                  <div key={i} className="hero-stat-block">
                    <div className="stat-giant-num">
                      <span ref={el => statEls.current[i] = el}>0{s.suffix}</span>
                    </div>
                    <div className="stat-giant-lbl">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Marquee */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {skillsMarquee.map((s, i) => (
            <span key={`h1-${i}`} className="marquee-item">{s}</span>
          ))}
        </div>
        <div className="marquee-track" aria-hidden="true">
          {skillsMarquee.map((s, i) => (
            <span key={`h2-${i}`} className="marquee-item">{s}</span>
          ))}
        </div>
      </div>
    </>
  );
}
