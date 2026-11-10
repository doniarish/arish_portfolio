// Contact.jsx — EmailJS form + JD matcher
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, ChevronDown } from 'lucide-react';
import { jdKeywords, brief30 } from '../data/profile.js';
import { useApp } from '../context.jsx';

const LinkedinIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const GithubIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

function AccordionItem({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="cacc-item">
      <div className="cacc-head" onClick={() => setOpen(o => !o)}>
        {title}
        <ChevronDown size={16} style={{ transform: open ? 'rotate(180deg)' : '', transition: 'transform .3s' }} />
      </div>
      <div className="cacc-body" style={{ maxHeight: open ? 500 : 0 }}>
        <div className="cacc-content">{children}</div>
      </div>
    </div>
  );
}

function JDMatcher() {
  const [jd, setJd] = useState('');
  const matched = jd
    ? jdKeywords.filter(kw => jd.toLowerCase().includes(kw))
    : [];

  return (
    <div>
      <textarea
        className="jd-textarea"
        placeholder="Paste a job description here…"
        value={jd}
        onChange={e => setJd(e.target.value)}
      />
      {jd && (
        <>
          <div className="jd-result">
            <strong>{matched.length}/{jdKeywords.length}</strong> skills matched
            {' '}({Math.round((matched.length / jdKeywords.length) * 100)}%)
          </div>
          <div className="jd-matches">
            {matched.slice(0, 12).map(kw => (
              <span key={kw} className="jd-kw">{kw}</span>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Contact() {
  const { site } = useApp();
  const formRef = useRef(null);
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus('');
    const form = formRef.current;
    const templateParams = {
      from_name: form.from_name.value,
      from_email: form.reply_to.value,
      reply_to: form.reply_to.value,
      subject: form.subject?.value || 'Portfolio Contact',
      message: form.message.value,
      to_name: site.name,
    };
    try {
      await emailjs.send(
        site.emailjs.serviceId,
        site.emailjs.templateId,
        templateParams,
        site.emailjs.publicKey
      );
      if (site.emailjs.autoreplyTemplateId) {
        emailjs.send(
          site.emailjs.serviceId,
          site.emailjs.autoreplyTemplateId,
          templateParams,
          site.emailjs.publicKey
        ).catch(() => {});
      }
      setStatus('ok');
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus('err');
    }
    setSending(false);
  };

  return (
    <section id="contact">
      <div className="wrap">
        <div className="section-label rv">
          <span className="kicker">07 / CONTACT</span>
        </div>
        <h2 className="sec-head rv" data-sw="text">
          Let's work<br />together<span className="red-dot">.</span>
        </h2>

        <div className="contact-grid">
          {/* Left: info */}
          <div className="contact-info rv d1">
            <a href={`mailto:${site.email}`} className="contact-row">
              <Mail size={18} className="contact-row-icon" />
              {site.email}
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="contact-row">
              <LinkedinIcon className="contact-row-icon" />
              linkedin.com/in/arishdoni
            </a>
            <a href={site.github} target="_blank" rel="noopener noreferrer" className="contact-row">
              <GithubIcon className="contact-row-icon" />
              github.com/doniarish
            </a>
            <div className="contact-row" style={{ cursor: 'default' }}>
              <MapPin size={18} className="contact-row-icon" />
              {site.location}
            </div>

            <div className="contact-acc" style={{ marginTop: 32 }}>
              <AccordionItem title="30-second brief">
                <p>{brief30}</p>
              </AccordionItem>
              <AccordionItem title="JD Matcher — paste a job description">
                <JDMatcher />
              </AccordionItem>
            </div>
          </div>

          {/* Right: form */}
          <div className="contact-form rv d2" data-sw="box">
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="form-row">
                <label className="form-label" htmlFor="cf-name">Name</label>
                <input id="cf-name" name="from_name" className="form-input" required placeholder="Your name" />
              </div>
              <div className="form-row">
                <label className="form-label" htmlFor="cf-email">Email</label>
                <input id="cf-email" name="reply_to" type="email" className="form-input" required placeholder="your@email.com" />
              </div>
              <div className="form-row">
                <label className="form-label" htmlFor="cf-subject">Subject</label>
                <input id="cf-subject" name="subject" className="form-input" placeholder="What's this about?" />
              </div>
              <div className="form-row">
                <label className="form-label" htmlFor="cf-msg">Message</label>
                <textarea id="cf-msg" name="message" className="form-textarea" required placeholder="Tell me about the role or project…" />
              </div>
              <div className="form-submit">
                <button type="submit" className="btn btn-solid" disabled={sending}>
                  {sending ? 'Sending…' : 'Send Message →'}
                </button>
              </div>
              <div className={`form-msg ${status}`}>
                {status === 'ok' && '✓ Message sent! I\'ll get back to you soon.'}
                {status === 'err' && '✕ Something went wrong. Try emailing directly.'}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
