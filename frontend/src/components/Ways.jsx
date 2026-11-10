// Ways.jsx
import { waysCards } from '../data/profile.js';

export default function Ways() {
  return (
    <section id="ways">
      <div className="wrap">
        <div className="section-label rv">
          <span className="kicker">Ways to know me</span>
        </div>
        <h2 className="sec-head rv" data-sw="text">
          How can I<br />help you<span className="red-dot">?</span>
        </h2>

        <div className="ways-grid">
          {waysCards.map((card, i) => (
            <div key={i} className={`way-card rv d${i + 1}`} data-sw="box" data-sw-dup="ways-grid">
              <div className="way-emoji">{card.emoji}</div>
              <div className="way-cta" data-sw="text">{card.cta}</div>
              <h3 className="way-head" data-sw="text">{card.headline}</h3>
              <p className="way-body" data-sw="text">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
