// About.jsx — Experience & Craft
import { useRef, useEffect } from 'react';
import { skillBars, processSteps } from '../data/profile.js';

export default function About() {
  const barsRef = useRef(null);

  useEffect(() => {
    const el = barsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('vis');
        obs.disconnect();
      }
    }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about">
      <div className="wrap">
        <div className="section-label rv">
          <span className="kicker">04 / ABOUT</span>
        </div>
        <h2 className="sec-head rv">
          Experience<br />&amp; Craft<span className="red-dot">.</span>
        </h2>

        <div className="about-grid">
          {/* Left: bio + process */}
          <div>
            <p className="about-bio rv d1">
              I'm an AI & Data Science engineer passionate about building systems that solve real problems.
              From RAG-based knowledge retrieval to production chatbots handling multilingual queries,
              I bring together ML fundamentals and modern LLM tooling to ship results-driven applications.
            </p>

            <div className="process-steps rv d2">
              {processSteps.map((step, i) => (
                <div className="process-step" key={step.n}>
                  <div className="step-num">{step.n}</div>
                  <div className="step-content">
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="quote-card rv d3">
              "Research, build, evaluate, ship. Repeat."
            </div>
          </div>

          {/* Right: skill bars */}
          <div className="about-right rv d2" ref={barsRef}>
            <h3 style={{ fontFamily: 'var(--disp)', fontSize: 'clamp(20px,2.5vw,28px)', textTransform: 'uppercase', marginBottom: 32 }}>
              Skill Stack<span className="red-dot">.</span>
            </h3>
            {skillBars.map(sb => (
              <div className="skill-bar-wrap" key={sb.label}>
                <div className="skill-bar-top">
                  <span className="skill-bar-name">{sb.label}</span>
                  <span className="skill-bar-val">{sb.level}%</span>
                </div>
                <div className="skill-bar-track">
                  <div
                    className="skill-bar-fill"
                    style={{ '--lv': sb.level }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
