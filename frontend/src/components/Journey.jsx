// Journey.jsx — Work experience + education + credentials
import { useState } from 'react';
import { Download } from 'lucide-react';
import { experience, education, achievements } from '../data/profile.js';
import { useApp } from '../context.jsx';

export default function Journey() {
  const { site } = useApp();
  const [open, setOpen] = useState(0);
  const [caccOpen, setCaccOpen] = useState(null);

  const toggle = (i) => setOpen(o => o === i ? null : i);

  return (
    <section id="journey">
      <div className="wrap">
        <div className="section-label rv">
          <span className="kicker">05 / JOURNEY</span>
        </div>
        <h2 className="sec-head rv" data-sw="text">
          Career<span className="red-dot">.</span>
        </h2>

        <div className="journey-grid">
          {/* Accordion */}
          <div className="rv d1">
            {experience.map((exp, i) => (
              <div key={exp.id} className={`accordion-item ${open === i ? 'open' : ''}`} data-sw="box" data-sw-dup="experience-acc">
                <div className="accordion-head" onClick={() => toggle(i)}>
                  <div>
                    <div className="acc-role">{exp.role}</div>
                    <div className="acc-company">{exp.company} — {exp.location}</div>
                    <div className="acc-period">{exp.period}</div>
                  </div>
                  <span className="acc-chevron">▾</span>
                </div>
                <div className="accordion-body">
                  <ul className="acc-bullets">
                    {exp.bullets.map((b, bi) => <li key={bi}>{b}</li>)}
                  </ul>
                </div>
              </div>
            ))}

            {/* Achievements */}
            <div className="rv" style={{ marginTop: 40 }}>
              <h3 style={{ fontFamily: 'var(--disp)', fontSize: 'clamp(18px,2vw,24px)', textTransform: 'uppercase', marginBottom: 20 }}>
                Achievements<span className="red-dot">.</span>
              </h3>
              {achievements.map((a, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: 12,
                    padding: '14px 0', borderBottom: '1px solid var(--line)',
                    fontSize: 14, color: 'var(--ink2)',
                  }}
                >
                  <span style={{ color: 'var(--red)', flexShrink: 0 }}>✓</span>
                  {a}
                </div>
              ))}
            </div>
          </div>

          {/* Credential vault + education */}
          <div>
            <div className="cred-vault rv d2">
              <div className="vault-head">Credentials</div>
              <a href={site.resume} download className="cred-card" style={{ display: 'flex', textDecoration: 'none', color: 'inherit' }}>
                <div className="cred-icon">📄</div>
                <div className="cred-info">
                  <h4>Resume / CV</h4>
                  <p>ari_sh.pdf · 2026</p>
                </div>
                <div className="cred-dl">
                  <Download size={16} />
                </div>
              </a>
            </div>

            <div className="edu-card rv d3">
              <div className="edu-school">{education.school}</div>
              <div style={{ fontSize: 12, fontFamily: 'var(--mono)', color: 'var(--muted)' }}>{education.location}</div>
              <div className="edu-deg" style={{ marginTop: 8 }}>{education.degree}</div>
              <div className="edu-year">{education.year}</div>
              <div style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 10 }}>
                {education.courses.join(' · ')}
              </div>
              <div className="edu-tags">
                {education.certs.map(c => <span key={c} className="edu-tag">{c}</span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
