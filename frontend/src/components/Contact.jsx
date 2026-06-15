import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID  = 'service_dlizlyq';
const TEMPLATE_ID = 'template_49ryzoz';
const AUTOREPLY   = 'template_maqplco';
const PUBLIC_KEY  = 'Qvke1Fq43On9iQcBz';

const contactItems = [
  {
    icon: 'fas fa-phone',
    label: 'Phone',
    content: <p>9087518741</p>,
  },
  {
    icon: 'fas fa-envelope',
    label: 'Email',
    content: (
      <p>
        <a href="mailto:doniarish1@gmail.com">doniarish1@gmail.com</a>
      </p>
    ),
  },
  {
    icon: 'fab fa-linkedin',
    label: 'LinkedIn',
    content: (
      <p>
        <a
          href="https://www.linkedin.com/in/arish-doni-s-652757351/"
          target="_blank"
          rel="noreferrer"
        >
          linkedin
        </a>
      </p>
    ),
  },
  {
    icon: 'fab fa-github',
    label: 'GitHub',
    content: (
      <p>
        <a href="https://github.com/doniarish" target="_blank" rel="noreferrer">
          github
        </a>
      </p>
    ),
  },
];

const Contact = ({ showNotification }) => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [fields, setFields] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) =>
    setFields({ ...fields, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name:  fields.name,
      from_email: fields.email,
      message:    fields.message,
      to_name:    'Arish Doni S',
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
        publicKey: PUBLIC_KEY,
      });
      // auto-reply (fire & forget)
      emailjs
        .send(SERVICE_ID, AUTOREPLY, templateParams, {
          publicKey: PUBLIC_KEY,
        })
        .catch((err) => console.error('Auto-reply failed:', err));

      showNotification("Message sent successfully! I'll get back to you soon.", 'success');
      setFields({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Email sending failed:', err);
      // Show the exact error message from EmailJS (err.text contains the API response)
      const errorMsg = err?.text || err?.message || 'Please try again later.';
      showNotification(`Failed: ${errorMsg}`, 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="section-container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-container">
          {/* Form */}
          <div className="contact-form">
            <form ref={formRef} onSubmit={handleSubmit} id="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={fields.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={fields.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={fields.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? (
                  <>Sending&hellip;</>
                ) : (
                  <>Send Message <i className="fas fa-paper-plane" style={{ marginLeft: '8px' }}></i></>
                )}
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="contact-info">
            <h3>Get In Touch</h3>
            {contactItems.map(({ icon, label, content }) => (
              <div className="contact-item" key={label}>
                <div className="contact-icon">
                  <i className={icon}></i>
                </div>
                <div className="contact-text">
                  <h4>{label}</h4>
                  {content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
