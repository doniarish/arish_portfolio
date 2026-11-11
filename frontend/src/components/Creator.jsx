// Creator.jsx — Social presence + content topics
import { ExternalLink } from 'lucide-react';
import { creatorTopics } from '../data/profile.js';

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const PLATFORMS = [
  {
    Icon: LinkedinIcon,
    name: 'LinkedIn',
    handle: '/in/arishdoni',
    href: 'https://www.linkedin.com/in/arishdoni',
    color: '#0A66C2',
  },
  {
    Icon: GithubIcon,
    name: 'GitHub',
    handle: '/doniarish',
    href: 'https://github.com/doniarish',
    color: '#f2efe9',
  },
  {
    Icon: InstagramIcon,
    name: 'Instagram',
    handle: '@doniarish',
    href: 'https://www.instagram.com/doniarish/',
    color: '#E4405F',
  },
];

export default function Creator() {
  return (
    <section id="creator">
      <div className="wrap">
        <div className="section-label rv">
          <span className="kicker">06 / CONNECT</span>
        </div>
        <h2 className="sec-head rv">
          Find Me<br />Online<span className="red-dot">.</span>
        </h2>

        <div className="creator-grid">
          <div>
            <p className="rv d1" style={{ fontSize: 16, color: 'var(--ink2)', lineHeight: 1.65, marginBottom: 32 }}>
              I share my work, learning journey, and AI engineering insights across these platforms.
            </p>
            <div className="platform-cards">
              {PLATFORMS.map((p, i) => (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`platform-card rv d${i + 1}`}
                >
                  <div className="plat-icon" style={{ color: p.color }}>
                    <p.Icon />
                  </div>
                  <div>
                    <div className="plat-name">{p.name}</div>
                    <div className="plat-handle">{p.handle}</div>
                  </div>
                  <ExternalLink size={14} className="plat-arr" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="rv d2" style={{ marginBottom: 24, fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.1em', color: 'var(--muted)', textTransform: 'uppercase' }}>
              Topics I work on
            </div>
            <div className="topic-cards">
              {creatorTopics.map((t, i) => (
                <div key={t} className={`topic-card rv d${i + 1}`}>
                  <span className="topic-name">{t}</span>
                  <span className="topic-num">0{i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
