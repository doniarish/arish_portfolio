/*  Swarm Rebuild: a standalone "builder swarm" for this site.
    From Master Spec Appendix A (PORTFOLIO_BUILDER.md).
    Re-implemented with owner-themed AI & ML Engineer agent roles.
*/

const NAMES = [
  'ML_OPS',
  'TRAINER',
  'DEBUGGER',
  'PIPELINE',
  'LOADER',
  'PARSER',
  'PLOTTER',
  'BUILDER',
  'DEPLOY',
  'RUNNER',
  'TUNER',
  'VALIDATOR'
];
const COLORS = ['#e32b3c', '#f2efeb', '#ff8a5c', '#ffd166', '#7cc6ff', '#9b8cff', '#5fe39a', '#ff6b9a'];
const FINALE_DELAY_MS = 0;
const PENTA = [329.63, 369.99, 415.3, 493.88, 554.37, 659.25, 739.99, 830.61];

const CSS = `
.sw-h{opacity:0!important;transition:none!important}
.sw-fade{opacity:0!important;transition:opacity .45s ease!important}
.sw-show{transition:opacity .38s ease!important}
#sw{position:fixed;inset:0;z-index:500;pointer-events:none;overflow:hidden;font-family:'JetBrains Mono',ui-monospace,monospace;transition:opacity .5s}
#sw.out{opacity:0}
.sw-ruler{position:absolute;background:rgba(14,13,13,.92);color:rgba(242,239,235,.45);font-size:9px;z-index:3;opacity:0;transition:opacity .6s}
#sw.ready .sw-ruler{opacity:1}
.sw-rt{left:0;right:0;top:0;height:18px;border-bottom:1px solid rgba(242,239,235,.14);background-image:repeating-linear-gradient(90deg,rgba(242,239,235,.28) 0 1px,transparent 1px 10px);background-size:100% 5px;background-repeat:repeat-x;background-position:0 100%}
.sw-rl{left:0;top:0;bottom:0;width:18px;border-right:1px solid rgba(242,239,235,.14);background-image:repeating-linear-gradient(180deg,rgba(242,239,235,.28) 0 1px,transparent 1px 10px);background-size:5px 100%;background-repeat:repeat-y;background-position:100% 0}
.sw-rt span{position:absolute;top:2px;transform:translateX(3px)}
.sw-corner{position:absolute;left:0;top:0;width:18px;height:18px;background:#0e0d0d;z-index:4;border-right:1px solid rgba(242,239,235,.14);border-bottom:1px solid rgba(242,239,235,.14)}
.sw-ag{position:absolute;left:0;top:0;will-change:transform;z-index:6;transition:opacity .4s}
.sw-ag svg{position:absolute;max-width:none;filter:drop-shadow(0 2px 4px rgba(0,0,0,.5));transition:transform .12s}
.sw-ag .m{display:none}
.sw-ag[data-m="arrow"] .m-arrow,.sw-ag[data-m="cross"] .m-cross,.sw-ag[data-m="ibeam"] .m-ibeam,.sw-ag[data-m="pen"] .m-pen{display:block}
.sw-ag .m-arrow{left:-2px;top:-2px}.sw-ag .m-cross{left:-11px;top:-11px}.sw-ag .m-ibeam{left:-6px;top:-12px}.sw-ag .m-pen{left:-3px;top:-21px}
.sw-ag.press svg{transform:scale(.82)}
.sw-tag{position:absolute;left:15px;top:19px;white-space:nowrap;padding:3px 7px;border-radius:2px 8px 8px 8px;background:var(--c);color:var(--ct);font:700 9px/1.2 'JetBrains Mono',monospace;letter-spacing:.04em;transition:opacity .3s,transform .3s;transform-origin:0 0}
.sw-tag em{font-style:normal;font-weight:400;opacity:.8}
.sw-ag.flip .sw-tag{left:auto;right:8px;border-radius:8px 2px 8px 8px;transform-origin:100% 0}
.sw-ag.idle .sw-tag{opacity:0;transform:scale(.6)}
.sw-alt{position:absolute;left:-26px;top:-4px;padding:1px 5px;border-radius:4px;background:#f2efeb;color:#0b0b0b;font:700 11px/1.3 system-ui,sans-serif;opacity:0;transition:opacity .2s}
.sw-ag.alt .sw-alt{opacity:1}
.sw-ph{position:absolute;left:0;top:0;background:rgba(242,239,235,.055);border:1px solid var(--c);z-index:2}
.sw-ph i{position:absolute;width:7px;height:7px;background:#0b0b0b;border:1px solid var(--c);opacity:0;transition:opacity .15s}
.sw-ph i:nth-child(1){left:-4px;top:-4px}.sw-ph i:nth-child(2){right:-4px;top:-4px}.sw-ph i:nth-child(3){left:-4px;bottom:-4px}.sw-ph i:nth-child(4){right:-4px;bottom:-4px}
.sw-ph.set i{opacity:1}
.sw-ph.ghost{border-style:dashed;background:rgba(242,239,235,.04)}
.sw-ph.out{opacity:0;transition:opacity .4s}
.sw-wh{position:absolute;left:0;top:0;padding:2px 6px;border-radius:3px;background:var(--c);color:var(--ct);font:700 10px/1.3 'JetBrains Mono',monospace;white-space:nowrap;z-index:7}
.sw-caret{position:absolute;left:0;top:0;width:2px;background:var(--c);z-index:5;animation:swblink .9s steps(1) infinite}
@keyframes swblink{50%{opacity:0}}
.sw-scan{position:absolute;left:0;top:0;height:2px;background:var(--c);box-shadow:0 0 14px 2px var(--c);z-index:5}
.sw-guide{position:absolute;top:0;bottom:0;width:0;border-left:1px solid #ff2d4a;z-index:1;box-shadow:0 0 6px rgba(255,45,74,.5)}
.sw-guide b{position:absolute;top:auto;bottom:84px;left:4px;padding:1px 5px;background:#ff2d4a;color:#fff;font:700 9px/1.4 'JetBrains Mono',monospace;border-radius:2px}
.sw-measure{position:absolute;left:0;top:0;background:#ff2d4a;z-index:6}
.sw-measure b{position:absolute;padding:1px 5px;background:#ff2d4a;color:#fff;font:700 9px/1.4 'JetBrains Mono',monospace;border-radius:2px;white-space:nowrap}
.sw-anchor{position:absolute;width:7px;height:7px;margin:-3.5px 0 0 -3.5px;background:#0b0b0b;border:1.5px solid var(--c);z-index:6}
.sw-pen{position:absolute;left:0;top:0;overflow:visible;z-index:5}
.sw-rip{position:absolute;width:34px;height:34px;margin:-17px 0 0 -17px;border-radius:50%;border:1.5px solid var(--c);animation:swrip .55s ease-out forwards;z-index:4}
@keyframes swrip{from{transform:scale(.2);opacity:1}to{transform:scale(1.5);opacity:0}}
.sw-orbit{position:absolute;border:1px dashed rgba(227,43,60,.5);border-radius:50%;z-index:1;transition:opacity .5s}
.sw-hud{position:absolute;left:50%;bottom:18px;transform:translateX(-50%);display:flex;align-items:center;gap:6px;padding:6px;border-radius:999px;background:rgba(14,13,13,.94);border:1px solid rgba(242,239,235,.16);box-shadow:0 20px 50px -10px rgba(0,0,0,.8);pointer-events:auto;z-index:8;color:#f2efeb;font:600 12px 'Manrope',system-ui,sans-serif;max-width:calc(100vw - 24px);flex-wrap:wrap;justify-content:center}
.sw-hud button{min-height:34px;min-width:34px;padding:0 12px;border-radius:999px;border:1px solid transparent;background:none;color:inherit;font:inherit;cursor:pointer}
.sw-hud button:hover{border-color:rgba(242,239,235,.3)}
.sw-hud button:focus-visible{outline:2px solid #e32b3c;outline-offset:2px}
.sw-hud .on{background:#f2efeb;color:#0b0b0b}
.sw-hud .live{background:#e32b3c;color:#fff}
.sw-hud .sw-st{display:flex;align-items:center;gap:8px;padding:0 10px 0 8px;font-family:'JetBrains Mono',monospace;font-size:11.5px;white-space:nowrap}
.sw-hud .sw-st i{width:8px;height:8px;border-radius:50%;background:#e32b3c;box-shadow:0 0 10px #e32b3c;animation:swblink 1.2s steps(1) infinite}
.sw-hud .sw-st.done i{background:#5fe39a;box-shadow:0 0 10px #5fe39a;animation:none}
.sw-hud .sep{width:1px;height:18px;background:rgba(242,239,235,.16)}
.sw-hint{position:absolute;left:50%;bottom:74px;transform:translateX(-50%);font:600 11px 'JetBrains Mono',monospace;color:rgba(242,239,235,.7);letter-spacing:.08em;text-transform:uppercase;opacity:0;transition:opacity .4s;z-index:8;white-space:nowrap}
.sw-hint.on{opacity:1}
.sw-done{position:fixed;left:50%;top:50%;transform:translate(-50%,-50%) scale(.86);text-align:center;opacity:0;transition:opacity .6s,transform .8s cubic-bezier(.22,1,.36,1);z-index:510;pointer-events:none;width:min(92vw,900px)}
.sw-done::before{content:'';position:absolute;inset:-40% -10%;background:radial-gradient(ellipse at center,rgba(9,9,9,.92) 30%,transparent 70%);z-index:-1}
.sw-done.on{opacity:1;transform:translate(-50%,-50%) scale(1)}
.sw-done h3{margin:0;font:400 clamp(44px,8.5vw,128px)/.9 'Anton',Impact,sans-serif;text-transform:uppercase;color:#f2efeb;letter-spacing:.01em}
.sw-done h3 em{font-style:normal;color:#e32b3c}
.sw-done p{margin:14px 0 0;font:600 12px 'JetBrains Mono',monospace;letter-spacing:.16em;text-transform:uppercase;color:rgba(242,239,235,.7)}
.sw-done .ok{display:inline-grid;place-items:center;width:54px;height:54px;margin-bottom:14px;border-radius:50%;background:#5fe39a;color:#0b0b0b;font:800 26px system-ui,sans-serif;box-shadow:0 0 40px rgba(95,227,154,.5)}
@media (max-width:560px){.sw-hud{border-radius:16px;bottom:10px;gap:2px;padding:5px}.sw-hud .sep{display:none}.sw-hud .sw-st{width:100%;justify-content:center;padding:4px 0}.sw-hud button{padding:0 9px}.sw-hint{bottom:118px}.sw-rl{display:none}}
`;

const SVG = {
  arrow: '<svg class="m m-arrow" width="20" height="24" viewBox="0 0 20 24"><path d="M2 2v18l5-4.8 3.4 7.6 3.1-1.4-3.3-7.4H17z" fill="var(--c)" stroke="#0b0b0b" stroke-width="1.4" stroke-linejoin="round"/></svg>',
  cross: '<svg class="m m-cross" width="22" height="22" viewBox="0 0 22 22"><path d="M11 1v20M1 11h20" stroke="#0b0b0b" stroke-width="3.4"/><path d="M11 1v20M1 11h20" stroke="var(--c)" stroke-width="1.5"/></svg>',
  ibeam: '<svg class="m m-ibeam" width="12" height="24" viewBox="0 0 12 24"><path d="M2 2h8M2 22h8M6 2v20" stroke="#0b0b0b" stroke-width="3.6" stroke-linecap="round"/><path d="M2 2h8M2 22h8M6 2v20" stroke="var(--c)" stroke-width="1.7" stroke-linecap="round"/></svg>',
  pen: '<svg class="m m-pen" width="22" height="24" viewBox="0 0 22 24"><path d="M3 21 5 12l8-9 6 6-9 8z" fill="var(--c)" stroke="#0b0b0b" stroke-width="1.4" stroke-linejoin="round"/><circle cx="8.5" cy="14.5" r="1.6" fill="#0b0b0b"/></svg>'
};

export function createSwarm({ logo = '[data-logo]', finaleDelay = FINALE_DELAY_MS } = {}) {
  let style = null, L = null, hud = null, hint = null;
  let active = false, EP = 0, tasks = [], agents = [], speed = 1.5, sound = false, tour = false, done = 0, total = 0;
  let mouse = null, raf = 0, readyT = 0, anyReady = false, ac = null, lastScroll = { y: 0, t: 0 }, guides = [], tourT = 0, allDone = false, phase = 'build', finaleAt = 0, stuckT = 0;
  let userScrolledUp = false, pauseTourUntil = 0, touchStartY = 0;
  const off = [];

  const on = (t, ev, fn, o) => { t.addEventListener(ev, fn, o); off.push(() => t.removeEventListener(ev, fn, o)); };
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const ez = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  const rc = (el) => el.getBoundingClientRect();
  const D = (ms) => ms / speed;
  const div = (cls, parent = L) => { const d = document.createElement('div'); d.className = cls; parent.appendChild(d); return d; };
  const alive = (ep) => active && ep === EP;
  const tween = (dur, fn, ep) => new Promise((res) => {
    const t0 = performance.now();
    const f = (now) => { if (!alive(ep)) return res(false); const t = Math.min(1, (now - t0) / dur); fn(t); t < 1 ? requestAnimationFrame(f) : res(true); };
    f(t0);
  });

  // ── sound (off by default; M toggles) ──
  function audio() { if (!ac) { try { ac = new (window.AudioContext || window.webkitAudioContext)(); } catch { ac = null; } } if (ac && ac.state === 'suspended') ac.resume(); return ac; }
  let lastClick = 0;
  function sfx(type, x = innerWidth / 2, i = 0) {
    if (!sound) return; const a = audio(); if (!a) return;
    const now = a.currentTime, pan = a.createStereoPanner ? a.createStereoPanner() : null, g = a.createGain();
    if (pan) { pan.pan.value = Math.max(-1, Math.min(1, (x / innerWidth) * 2 - 1)); g.connect(pan); pan.connect(a.destination); } else g.connect(a.destination);
    if (type === 'key') {
      if (performance.now() - lastClick < 38) return; lastClick = performance.now();
      const b = a.createBuffer(1, a.sampleRate * 0.02, a.sampleRate), d = b.getChannelData(0);
      for (let k = 0; k < d.length; k++) d[k] = (Math.random() * 2 - 1) * Math.pow(1 - k / d.length, 3);
      const s = a.createBufferSource(), hp = a.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 2400 + Math.random() * 1200;
      s.buffer = b; s.connect(hp); hp.connect(g); g.gain.value = 0.05; s.start(now);
    } else {
      const o = a.createOscillator(); o.type = 'triangle'; o.frequency.value = PENTA[i % PENTA.length] * (type === 'media' ? 0.5 : 1);
      g.gain.setValueAtTime(0.0001, now); g.gain.exponentialRampToValueAtTime(0.05, now + 0.015); g.gain.exponentialRampToValueAtTime(0.0001, now + 0.5);
      o.connect(g); o.start(now); o.stop(now + 0.52);
    }
  }

  // ── agents ──
  function mkAgent(i, x, y) {
    const e = div('sw-ag'); const c = COLORS[i % COLORS.length];
    e.style.setProperty('--c', c); e.style.setProperty('--ct', ['#f2efeb', '#ffd166', '#5fe39a', '#7cc6ff'].includes(c) ? '#0b0b0b' : '#fff');
    e.dataset.m = 'arrow';
    e.innerHTML = SVG.arrow + SVG.cross + SVG.ibeam + SVG.pen + '<span class="sw-alt">⌥</span><span class="sw-tag"><b></b><em></em></span>';
    e.querySelector('b').textContent = NAMES[i % NAMES.length];
    const a = { i, e, c, x, y, busy: false, wx: x, wy: y, wt: 0, em: e.querySelector('em'), f: false };
    a.set = (nx, ny) => { a.x = nx; a.y = ny; e.style.transform = `translate3d(${nx}px,${ny}px,0)`; const f = nx > innerWidth - 170; if (f !== a.f) { a.f = f; e.classList.toggle('flip', f); } };
    a.mode = (m) => { e.dataset.m = m; };
    a.say = (s) => { a.em.textContent = s ? ' · ' + s : ''; };
    a.press = () => { e.classList.add('press'); setTimeout(() => e.classList.remove('press'), 150); const r = div('sw-rip'); r.style.cssText = `left:${a.x}px;top:${a.y}px;--c:${c}`; setTimeout(() => r.remove(), 600); };
    a.set(x, y); agents.push(a); return a;
  }
  function moveTo(a, pt, ep, dur) {
    const sx = a.x, sy = a.y, p0 = pt(), dist = Math.hypot(p0.x - sx, p0.y - sy);
    dur = dur || D(Math.min(900, Math.max(240, dist * 0.7)));
    const bend = (Math.random() - 0.5) * 0.3;
    return tween(dur, (t) => { const e = ez(t), p = pt(), dx = p.x - sx, dy = p.y - sy, s = Math.sin(Math.PI * e) * bend; a.set(sx + dx * e - dy * s, sy + dy * e + dx * s); }, ep);
  }

  // ── tasks ──
  function collect() {
    const els = [...document.querySelectorAll('[data-sw]')].filter((el) => el.getClientRects().length && !el.closest('#sw'));
    const map = new Map(); tasks = [];
    els.forEach((el) => { const t = { el, kind: el.dataset.sw, state: 'wait', parent: null, master: null, kids: [], guide: el.hasAttribute('data-sw-guide') }; map.set(el, t); tasks.push(t); });
    tasks.forEach((t) => { for (let p = t.el.parentElement; p; p = p.parentElement) if (map.has(p)) { t.parent = map.get(p); t.parent.kids.push(t); break; } });
    const groups = {};
    tasks.forEach((t) => { const g = t.el.dataset.swDup; if (g) (groups[g] = groups[g] || []).push(t); });
    Object.values(groups).forEach((list) => list.slice(1).forEach((t) => { t.kind = 'dup'; t.master = list[0]; }));
    // descendants of a duplicate arrive with it
    tasks.forEach((t) => { for (let p = t.parent; p; p = p.parent) if (p.kind === 'dup') { t.inherit = true; break; } });
    total = tasks.length; done = 0;
  }
  const visible = (r) => r.width > 0 && r.bottom > 0 && r.top < innerHeight * 0.94 && r.right > 0 && r.left < innerWidth;
  function reveal(t, animate) {
    if (t.state === 'done') return;
    t.state = 'done'; done++;
    const el = t.el; el.style.clipPath = '';
    if (animate) { el.classList.add('sw-show'); el.classList.remove('sw-h'); setTimeout(() => el.classList.remove('sw-show'), 420); }
    else el.classList.remove('sw-h', 'sw-fade');
    if (t.kind === 'dup' || animate === 'tree') t.kids.forEach((k) => revealTree(k, !!animate));
    hudUpdate();
  }
  function revealTree(t, animate) { reveal(t, animate); t.kids.forEach((k) => revealTree(k, animate)); }
  function ready(t) {
    if (t.state !== 'wait' || t.inherit) return false;
    if (t.parent && t.parent.state !== 'done') return false;
    if (t.master && t.master.state !== 'done') return false;
    return visible(rc(t.el));
  }
  function pick(a) {
    let best = null, bs = Infinity;
    for (const t of tasks) {
      if (!ready(t)) continue;
      const r = rc(t.el); const s = r.top * 1.2 + Math.hypot(r.left - a.x, r.top - a.y) * 0.35 + (t.kind === 'text' ? 0 : -30);
      if (s < bs) { bs = s; best = t; }
    }
    if (best) best.state = 'claimed';
    return best;
  }
  function passBy() {
    if (!active) return;
    for (const t of tasks) if (t.state === 'wait' && !t.inherit) { const r = rc(t.el); if (r.bottom < 0 || (r.width === 0 && r.height === 0)) revealTree(t, false); }
  }

  // ── builders ──
  const B = {
    async box(a, t, ep) {
      const el = t.el;
      await moveTo(a, () => { const r = rc(el); return { x: r.left, y: r.top }; }, ep); if (!alive(ep)) return;
      a.mode('cross'); a.press(); sfx('note', a.x, a.i);
      const ph = div('sw-ph'); ph.style.setProperty('--c', a.c); ph.innerHTML = '<i></i><i></i><i></i><i></i>';
      ph.style.borderRadius = getComputedStyle(el).borderRadius;
      const wh = div('sw-wh'); wh.style.setProperty('--c', a.c); wh.style.setProperty('--ct', a.e.style.getPropertyValue('--ct'));
      const r0 = rc(el), dur = D(Math.min(1050, Math.max(420, (r0.width + r0.height) * 0.75)));
      await tween(dur, (k) => {
        const e = ez(k), r = rc(el), w = Math.max(1, r.width * e), h = Math.max(1, r.height * e);
        a.set(r.left + w, r.top + h);
        ph.style.transform = `translate(${r.left}px,${r.top}px)`; ph.style.width = w + 'px'; ph.style.height = h + 'px';
        wh.textContent = `${Math.round(w)} × ${Math.round(h)}`; wh.style.transform = `translate(${r.left + w + 10}px,${r.top + h + 8}px)`;
      }, ep);
      ph.classList.add('set'); a.mode('arrow');
      await sleep(D(120)); reveal(t, true); wh.remove();
      const fr = rc(el); ph.style.transform = `translate(${fr.left}px,${fr.top}px)`;
      setTimeout(() => { ph.classList.add('out'); setTimeout(() => ph.remove(), 420); }, D(260));
    },

    async text(a, t, ep) {
      const el = t.el;
      const lines = textLines(el);
      if (!lines.length) { reveal(t, true); return; }
      if (t.guide) await guide(a, el, ep);
      if (!alive(ep)) return;
      await moveTo(a, () => { const r = rc(el); return { x: r.left + lines[0].l - 2, y: r.top + lines[0].t + (lines[0].b - lines[0].t) / 2 }; }, ep); if (!alive(ep)) return;
      a.mode('ibeam'); a.press();
      const caret = div('sw-caret'); caret.style.setProperty('--c', a.c);
      el.classList.remove('sw-h'); el.style.clipPath = 'polygon(0 0,0 0,0 0)';
      const totalW = lines.reduce((s, l) => s + (l.r - l.l), 0), chars = Math.max(1, (el.textContent || '').length);
      const big = parseFloat(getComputedStyle(el).fontSize) > 40;
      const dur = D(Math.min(big ? 1200 : 1500, Math.max(260, chars * (big ? 70 : 16))));
      let lastP = 0;
      await tween(dur, (k) => {
        const r = rc(el); let rem = k * totalW, li = 0;
        while (li < lines.length - 1 && rem > lines[li].r - lines[li].l) { rem -= lines[li].r - lines[li].l; li++; }
        const L0 = lines[li], x = Math.min(L0.r, L0.l + rem);
        el.style.clipPath = `polygon(-20px -20px,${r.width + 20}px -20px,${r.width + 20}px ${L0.t}px,${x}px ${L0.t}px,${x}px ${L0.b + 6}px,-20px ${L0.b + 6}px)`;
        caret.style.transform = `translate(${r.left + x + 1}px,${r.top + L0.t}px)`; caret.style.height = (L0.b - L0.t) + 'px';
        a.set(r.left + x + 8, r.top + L0.b - 2);
        if (k - lastP > 0.02) { lastP = k; sfx('key', a.x); }
      }, ep);
      caret.remove(); reveal(t, false); a.mode('arrow');
    },

    async media(a, t, ep) {
      const el = t.el;
      await moveTo(a, () => { const r = rc(el); return { x: r.right - 6, y: r.top }; }, ep); if (!alive(ep)) return;
      a.press(); sfx('media', a.x, a.i);
      el.classList.remove('sw-h'); el.style.clipPath = 'inset(0 0 100% 0)';
      const sc = div('sw-scan'); sc.style.setProperty('--c', a.c);
      await tween(D(Math.min(900, Math.max(420, rc(el).height * 1.6))), (k) => {
        const e = ez(k), r = rc(el), y = r.top + r.height * e;
        el.style.clipPath = `inset(0 0 ${(100 - e * 100).toFixed(2)}% 0)`;
        sc.style.transform = `translate(${r.left}px,${y}px)`; sc.style.width = r.width + 'px'; a.set(r.right - 6, y);
      }, ep);
      sc.remove(); reveal(t, false);
    },

    async line(a, t, ep) {
      const el = t.el, vert = () => { const r = rc(el); return r.height > r.width; };
      const A = () => { const r = rc(el); return vert() ? { x: r.left + r.width / 2, y: r.top } : { x: r.left, y: r.top + r.height / 2 }; };
      const Bp = () => { const r = rc(el); return vert() ? { x: r.left + r.width / 2, y: r.bottom } : { x: r.right, y: r.top + r.height / 2 }; };
      await moveTo(a, A, ep); if (!alive(ep)) return;
      a.mode('pen'); a.press(); sfx('note', a.x, a.i + 2);
      const an1 = div('sw-anchor'), an2 = div('sw-anchor'); an1.style.setProperty('--c', a.c); an2.style.setProperty('--c', a.c); an2.style.opacity = '0';
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); svg.setAttribute('class', 'sw-pen'); svg.setAttribute('width', innerWidth); svg.setAttribute('height', innerHeight);
      const ln = document.createElementNS('http://www.w3.org/2000/svg', 'line'); ln.setAttribute('stroke', a.c); ln.setAttribute('stroke-width', '1.5'); ln.setAttribute('stroke-dasharray', '5 4');
      svg.appendChild(ln); L.appendChild(svg);
      const s0 = A(); a.set(s0.x, s0.y);
      await tween(D(Math.min(1000, Math.max(380, Math.hypot(Bp().x - s0.x, Bp().y - s0.y) * 0.8))), (k) => {
        const e = ez(k), p = A(), q = Bp(), x = p.x + (q.x - p.x) * e, y = p.y + (q.y - p.y) * e;
        an1.style.left = p.x + 'px'; an1.style.top = p.y + 'px';
        ln.setAttribute('x1', p.x); ln.setAttribute('y1', p.y); ln.setAttribute('x2', x); ln.setAttribute('y2', y);
        a.set(x, y + (vert() ? 0 : Math.sin(e * Math.PI) * -10));
      }, ep);
      const q = Bp(); an2.style.left = q.x + 'px'; an2.style.top = q.y + 'px'; an2.style.opacity = '1'; a.press();
      ln.removeAttribute('stroke-dasharray');
      reveal(t, true); a.mode('arrow');
      setTimeout(() => { [an1, an2, svg].forEach((n) => { n.style.transition = 'opacity .4s'; n.style.opacity = '0'; setTimeout(() => n.remove(), 420); }); }, D(320));
    },

    async dup(a, t, ep) {
      const el = t.el, m = t.master.el;
      if (!visible(rc(m))) { await B.box(a, t, ep); reveal(t, 'tree'); return; }
      await moveTo(a, () => { const r = rc(m); return { x: r.left + r.width / 2, y: r.top + r.height / 2 }; }, ep); if (!alive(ep)) return;
      a.e.classList.add('alt'); a.press(); sfx('note', a.x, a.i + 4);
      const ph = div('sw-ph ghost'); ph.style.setProperty('--c', a.c); ph.style.borderRadius = getComputedStyle(m).borderRadius;
      const ms = div('sw-measure'), mb = document.createElement('b'); ms.appendChild(mb);
      const off0 = (() => { const r = rc(m); return { dx: a.x - r.left, dy: a.y - r.top }; })();
      const tr0 = rc(el), mr0 = rc(m);
      const dur = D(Math.min(950, Math.max(380, Math.hypot(tr0.left - mr0.left, tr0.top - mr0.top) * 0.6)));
      await tween(dur, (k) => {
        const e = ez(k), mr = rc(m), tr = rc(el);
        const x = mr.left + (tr.left - mr.left) * e, y = mr.top + (tr.top - mr.top) * e, w = mr.width + (tr.width - mr.width) * e, h = mr.height + (tr.height - mr.height) * e;
        ph.style.transform = `translate(${x}px,${y}px)`; ph.style.width = w + 'px'; ph.style.height = h + 'px';
        a.set(x + off0.dx, y + off0.dy);
        const sameRow = Math.abs(tr.top - mr.top) < 12;
        if (sameRow) {
          const g = x >= mr.right ? x - mr.right : mr.left - (x + w), x0 = x >= mr.right ? mr.right : x + w;
          ms.style.cssText = `transform:translate(${x0}px,${y + h / 2}px);width:${Math.max(0, g)}px;height:1px`; mb.textContent = Math.round(Math.max(0, g)) + 'px'; mb.style.cssText = 'left:50%;top:6px;transform:translateX(-50%)';
        } else {
          const g = y >= mr.bottom ? y - mr.bottom : mr.top - (y + h), y0 = y >= mr.bottom ? mr.bottom : y + h;
          ms.style.cssText = `transform:translate(${x + w / 2}px,${y0}px);width:1px;height:${Math.max(0, g)}px`; mb.textContent = Math.round(Math.max(0, g)) + 'px'; mb.style.cssText = 'left:6px;top:50%;transform:translateY(-50%)';
        }
      }, ep);
      a.e.classList.remove('alt'); a.press();
      reveal(t, 'tree');
      setTimeout(() => { ms.remove(); ph.classList.add('out'); setTimeout(() => ph.remove(), 420); }, D(240));
    }
  };

  function textLines(el) {
    const R = rc(el), range = document.createRange(); range.selectNodeContents(el);
    const rects = [...range.getClientRects()].filter((r) => r.width > 1 && r.height > 1);
    const lines = [];
    rects.forEach((r) => {
      const cy = (r.top + r.bottom) / 2; let ln = lines.find((l) => Math.abs(l.cy - cy) < Math.max(4, r.height * 0.3));
      if (!ln) { ln = { cy, t: r.top, b: r.bottom, l: r.left, r: r.right }; lines.push(ln); }
      ln.t = Math.min(ln.t, r.top); ln.b = Math.max(ln.b, r.bottom); ln.l = Math.min(ln.l, r.left); ln.r = Math.max(ln.r, r.right);
    });
    return lines.sort((a, b) => a.t - b.t).map((l) => ({ t: l.t - R.top, b: l.b - R.top, l: l.l - R.left, r: l.r - R.left }));
  }

  async function guide(a, el, ep) {
    const x = Math.round(rc(el).left);
    if (guides.some((g) => Math.abs(g.x - x) < 3)) return;
    await moveTo(a, () => ({ x: 9, y: Math.max(40, rc(el).top) }), ep); if (!alive(ep)) return;
    a.press(); a.mode('arrow');
    const g = div('sw-guide'); const lab = document.createElement('b'); g.appendChild(lab); const rec = { x, n: g }; guides.push(rec);
    if (guides.length > 5) guides.shift().n.remove();
    await tween(D(520), (k) => { const gx = 9 + (x - 9) * ez(k); g.style.left = gx + 'px'; lab.textContent = Math.round(gx) + 'px'; a.set(gx, a.y); }, ep);
    el.animate([{ transform: 'translateX(-7px)' }, { transform: 'translateX(0)' }], { duration: D(240), easing: 'cubic-bezier(.2,1.6,.4,1)' });
  }

  async function run(a, t) {
    const ep = EP; a.busy = true; a.e.classList.remove('idle');
    a.say({ box: 'box', text: 'type', media: 'image', line: 'pen', dup: '⌥ copy' }[t.kind] || '');
    try { await (B[t.kind] || B.box)(a, t, ep); } catch { /* never block content */ }
    if (alive(ep)) reveal(t, t.kind === 'dup' ? 'tree' : true);
    a.mode('arrow'); a.e.classList.remove('alt'); a.say(''); a.busy = false;
  }
  async function loop(a, ep) {
    while (alive(ep)) {
      const t = pick(a);
      if (t) await run(a, t); else { if (phase !== 'finale' && phase !== 'home') a.e.classList.add('idle'); await sleep(140); }
    }
  }

  // ── idle flocking + tour + agent boost ──
  function tick() {
    if (!active) return;
    const now = performance.now();
    const pending = tasks.some((t) => t.state !== 'done');
    allDone = !pending;
    agents.forEach((a, i) => {
      if (a.busy || phase === 'home') return;
      let tx, ty;
      if (phase === 'finale') { const R = Math.min(innerWidth, innerHeight) * (innerWidth < 600 ? 0.36 : 0.3), ang = now / 650 + (i / agents.length) * Math.PI * 2; tx = innerWidth / 2 + Math.cos(ang) * R; ty = innerHeight / 2 + Math.sin(ang) * R * 0.78; a.set(a.x + (tx - a.x) * 0.12, a.y + (ty - a.y) * 0.12); return; }
      if (allDone && mouse) { const ang = now / 1600 + (i / agents.length) * Math.PI * 2, rad = 46 + (i % 3) * 22; tx = mouse.x + Math.cos(ang) * rad; ty = mouse.y + Math.sin(ang) * rad * 0.7; }
      else { if (now > a.wt) { a.wx = 60 + Math.random() * (innerWidth - 120); a.wy = innerHeight * (0.55 + Math.random() * 0.35); a.wt = now + 1600 + Math.random() * 2200; } tx = a.wx; ty = a.wy; }
      a.set(a.x + (tx - a.x) * 0.06, a.y + (ty - a.y) * 0.06);
    });
    const idle = agents.every((a) => !a.busy);
    if (now - readyT > 300) { readyT = now; anyReady = tasks.some(ready); }

    // If user scrolled up, pause automatic downward scrolling
    const isTourPaused = userScrolledUp || now < pauseTourUntil;
    if (userScrolledUp && tasks.some((t) => t.state !== 'done' && ready(t))) {
      userScrolledUp = false;
    }

    if (hint) {
      if (isTourPaused && pending) {
        hint.textContent = 'Auto-scroll paused · Scroll down to continue ↓';
        hint.classList.add('on');
      } else {
        hint.textContent = 'Scroll to keep building ↓';
        hint.classList.toggle('on', phase === 'build' && pending && idle && !anyReady && !tour);
      }
    }

    const atBottom = innerHeight + scrollY >= document.documentElement.scrollHeight - 4;
    // ONLY auto-scroll down if user has NOT scrolled up and tour is not paused
    if (tour && !isTourPaused && pending && idle && !anyReady && now > tourT) {
      if (!atBottom) { tourT = now + D(900); scrollBy({ top: innerHeight * 0.55, behavior: 'smooth' }); }
    }
    // never get stuck anywhere (middle or bottom): if pending tasks exist but none are ready for > 1000ms, unblock next batch
    if (pending && idle && !anyReady) {
      if (!stuckT) stuckT = now;
      else if (now - stuckT > 1000) {
        const unbuilt = tasks.filter((t) => t.state !== 'done');
        if (unbuilt.length > 0) {
          unbuilt.slice(0, 3).forEach((t) => reveal(t, true));
        }
        if (tour && !isTourPaused && !atBottom) {
          scrollBy({ top: innerHeight * 0.55, behavior: 'smooth' });
        } else if (atBottom) {
          unbuilt.forEach((t) => reveal(t, true));
        }
        stuckT = now;
      }
    } else {
      stuckT = 0;
    }
    if (!pending && phase === 'build') { phase = 'rest'; finaleAt = now + 400; hudUpdate(); }
    if (phase === 'rest') {
      const left = Math.max(0, Math.ceil((finaleAt - now) / 1000));
      const txt = hud ? hud.querySelector('.sw-txt') : null, want = `Built ${total} layers · finale in ${Math.floor(left / 60)}:${String(left % 60).padStart(2, '0')}`;
      if (txt && txt.textContent !== want) txt.textContent = want;
      if (now >= finaleAt) finale(EP);
    }
    raf = requestAnimationFrame(tick);
  }
  async function finale(ep) {
    phase = 'finale'; tour = false; hudUpdate();
    if (hud) {
      const txt = hud.querySelector('.sw-txt');
      if (txt) txt.textContent = 'Ready';
    }
    agents.forEach((a) => { a.e.classList.remove('idle'); a.mode('arrow'); a.say('done ✓'); });
    sfx('note', innerWidth / 2, 0); setTimeout(() => sfx('note', innerWidth / 2, 2), 160); setTimeout(() => sfx('note', innerWidth / 2, 5), 320);
    // circle keeps spinning while the page glides back to the top
    scrollTo({ top: 0, behavior: 'smooth' });
    const t0 = performance.now(); while (alive(ep) && scrollY > 4 && performance.now() - t0 < 5000) await sleep(100);
    if (!alive(ep)) return;
    await sleep(300); if (!alive(ep)) return;
    // fly home to the logo, then go live
    phase = 'home';
    const lg = document.querySelector(logo), r = lg ? rc(lg) : { left: 40, top: 20, width: 80, height: 30 };
    await Promise.all(agents.map((a, i) => new Promise((res) => setTimeout(() => moveTo(a, () => ({ x: r.left + r.width / 2, y: r.top + r.height / 2 }), ep, 700).then(() => { a.e.style.opacity = '0'; res(); }), i * 60))));
    if (alive(ep)) stop();
  }
  function onScroll() {
    const now = performance.now();
    const dy = scrollY - lastScroll.y;
    const v = Math.abs(dy) / Math.max(16, now - lastScroll.t);
    lastScroll = { y: scrollY, t: now };

    // If scrolling up, pause auto-scroll immediately so it doesn't fight the user
    if (dy < -4) {
      userScrolledUp = true;
      pauseTourUntil = now + 4000;
    } else if (dy > 12 && userScrolledUp) {
      if (tasks.some((t) => t.state !== 'done' && ready(t))) {
        userScrolledUp = false;
        pauseTourUntil = 0;
      }
    }

    if (v > 1.4 && agents.length < NAMES.length) { const a = mkAgent(agents.length, Math.random() * innerWidth, innerHeight + 20); loop(a, EP); }
    requestAnimationFrame(passBy);
  }

  // ── HUD ──
  function buildHud() {
    hud = document.createElement('div'); hud.className = 'sw-hud'; // control bar kept off-DOM for internal state
    hud.setAttribute('role', 'toolbar'); hud.setAttribute('aria-label', 'Swarm rebuild controls');
    hud.innerHTML = `<span class="sw-st" aria-live="polite"><i></i><span class="sw-txt">Building</span></span><span class="sep"></span>
      <button data-a="tour" title="Auto-scroll at the swarm's pace (on by default)">Auto-scroll</button>
      <button data-a="s1" aria-label="Speed 1x">1×</button><button data-a="s2" aria-label="Speed 2x">2×</button><button data-a="s3" aria-label="Speed 3x">3×</button>
      <button data-a="snd" aria-label="Toggle sound (M)" title="Sound (M)">♪ off</button><span class="sep"></span>
      <button data-a="replay" title="Rebuild again">Replay</button><button data-a="live" class="live" title="Esc">Go live</button>`;
    hud.addEventListener('click', (e) => {
      const b = e.target.closest('button'); if (!b) return; const k = b.dataset.a;
      if (k === 'live') stop(); else if (k === 'replay') start(); else if (k === 'tour') { tour = !tour; tourT = 0; hudUpdate(); }
      else if (k === 'snd') toggleSound(); else if (k[0] === 's') { speed = +k[1]; hudUpdate(); }
    });
    hint = document.createElement('div'); hint.className = 'sw-hint';
    hint.textContent = 'Scroll to keep building ↓';
  }
  function toggleSound() { sound = !sound; if (sound) audio(); hudUpdate(); }
  function hudUpdate() {
    if (!hud) return;
    const fin = done >= total;
    const st = hud.querySelector('.sw-st');
    if (st) st.classList.toggle('done', fin);
    const txt = hud.querySelector('.sw-txt');
    if (txt && phase === 'build') txt.textContent = fin ? `Built ${total} layers` : `Building ${done}/${total}`;
    hud.querySelectorAll('[data-a^="s"]').forEach((b) => b.dataset.a !== 'snd' && b.classList.toggle('on', +b.dataset.a[1] === speed));
    const tr = hud.querySelector('[data-a="tour"]');
    if (tr) tr.classList.toggle('on', tour);
    const snd = hud.querySelector('[data-a="snd"]');
    if (snd) snd.textContent = sound ? '♪ on' : '♪ off';
  }

  function rulers() {
    div('sw-ruler sw-rt'); div('sw-ruler sw-rl'); div('sw-ruler sw-corner');
    const rt = L.querySelector('.sw-rt');
    for (let x = 100; x < innerWidth; x += 100) { const s = document.createElement('span'); s.style.left = x + 'px'; s.textContent = x; rt.appendChild(s); }
  }

  // ── lifecycle ──
  async function start() {
    if (active) teardown(false);
    if (!style) { style = document.createElement('style'); style.id = 'sw-css'; style.textContent = CSS; document.head.appendChild(style); }
    active = true; EP++; const ep = EP; tour = true; tourT = 0; allDone = false; guides = []; phase = 'build'; stuckT = 0; userScrolledUp = false; pauseTourUntil = 0;
    scrollTo({ top: 0, behavior: 'instant' });
    L = document.createElement('div'); L.id = 'sw'; L.setAttribute('aria-hidden', 'false'); document.body.appendChild(L);
    collect();
    rulers(); buildHud(); hudUpdate();
    // 1. blank the canvas
    tasks.forEach((t) => t.el.classList.add('sw-fade'));
    await sleep(480); if (!alive(ep)) return;
    tasks.forEach((t) => { t.el.classList.remove('sw-fade'); t.el.classList.add('sw-h'); });
    L.classList.add('ready');
    // 2. orbit the logo, then fan out
    const lg = document.querySelector(logo); const lr = lg ? rc(lg) : { left: innerWidth / 2 - 40, top: innerHeight / 2 - 20, width: 80, height: 40 };
    const cx = lr.left + Math.min(lr.width, 60) / 2 + 6, cy = lr.top + lr.height / 2 + 26;
    const n = innerWidth < 700 ? 5 : 9;
    for (let i = 0; i < n; i++) mkAgent(i, cx, cy);
    const ring = div('sw-orbit');
    await tween(D(1300), (k) => {
      const rad = 18 + 46 * ez(Math.min(1, k * 1.6));
      ring.style.cssText = `left:${cx - rad}px;top:${cy - rad * 0.7}px;width:${rad * 2}px;height:${rad * 1.4}px;opacity:${1 - k}`;
      agents.forEach((a, i) => { const ang = k * Math.PI * 2.2 + (i / n) * Math.PI * 2; a.set(cx + Math.cos(ang) * rad, cy + Math.sin(ang) * rad * 0.7); });
    }, ep);
    ring.remove(); if (!alive(ep)) return;
    // 3. build
    lastScroll = { y: scrollY, t: performance.now() };
    agents.forEach((a, i) => setTimeout(() => loop(a, ep), i * 70));
    raf = requestAnimationFrame(tick);
  }
  function teardown(fade) {
    active = false; EP++; cancelAnimationFrame(raf);
    tasks.forEach((t) => { t.el.classList.remove('sw-h', 'sw-fade', 'sw-show'); t.el.style.clipPath = ''; t.state = 'done'; });
    tasks = []; agents = [];
    const layer = L; L = null; hud = null; hint = null;
    if (layer) { if (fade) { layer.classList.add('out'); setTimeout(() => layer.remove(), 520); } else layer.remove(); }
  }
  function stop() { if (active) teardown(true); }

  on(window, 'keydown', (e) => {
    if (e.altKey && e.shiftKey && (e.key === 'S' || e.key === 's' || e.code === 'KeyS')) { e.preventDefault(); active ? stop() : start(); return; }
    if (!active) return;
    if (e.key === 'Escape') stop();
    else if ((e.key === 'm' || e.key === 'M') && !/input|textarea|select/i.test(document.activeElement?.tagName || '')) toggleSound();
    else if (e.key === 'ArrowUp' || e.key === 'PageUp' || e.key === 'Home') {
      userScrolledUp = true;
      pauseTourUntil = performance.now() + 5000;
    }
  });
  on(window, 'wheel', (e) => {
    if (!active || phase !== 'build') return;
    if (e.deltaY < -2) {
      userScrolledUp = true;
      pauseTourUntil = performance.now() + 5000;
    } else if (e.deltaY > 15 && userScrolledUp) {
      if (tasks.some((t) => t.state !== 'done' && ready(t))) {
        userScrolledUp = false;
        pauseTourUntil = 0;
      }
    }
  }, { passive: true });
  on(window, 'touchstart', (e) => {
    if (e.touches && e.touches[0]) touchStartY = e.touches[0].clientY;
  }, { passive: true });
  on(window, 'touchmove', (e) => {
    if (!active || phase !== 'build' || !e.touches || !e.touches[0]) return;
    const dy = e.touches[0].clientY - touchStartY;
    if (dy > 6) {
      userScrolledUp = true;
      pauseTourUntil = performance.now() + 5000;
    }
  }, { passive: true });
  on(window, 'pointermove', (e) => { if (e.pointerType === 'mouse') mouse = { x: e.clientX, y: e.clientY }; }, { passive: true });
  on(window, 'scroll', () => active && onScroll(), { passive: true });
  on(window, 'resize', () => active && passBy());

  return {
    start, stop,
    get active() { return active; },
    destroy() { stop(); off.forEach((f) => f()); style?.remove(); style = null; }
  };
}

// Global singleton instance
let globalSwarm = null;

export function getSwarm() {
  if (!globalSwarm && typeof window !== 'undefined') {
    globalSwarm = createSwarm({ logo: '[data-logo]' });
  }
  return globalSwarm;
}

export function playSwarm() {
  const swarm = getSwarm();
  if (swarm) swarm.start();
}

export function initSwarm() {
  const swarm = getSwarm();
  const SW_SESSION_KEY = 'arish-portfolio-sw';
  if (typeof window !== 'undefined') {
    const isMobile = window.innerWidth < 900;
    const played = sessionStorage.getItem(SW_SESSION_KEY);
    if (!isMobile && !played) {
      sessionStorage.setItem(SW_SESSION_KEY, '1');
      setTimeout(() => {
        if (swarm && !swarm.active) swarm.start();
      }, 700);
    }
  }
}
