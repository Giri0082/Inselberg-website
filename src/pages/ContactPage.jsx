import { useState } from 'react';

const INTERESTS = [
  'Wealth Management',
  'Asset Management',
  'Banking',
  'Governance & Regulatory Operations',
  'Financial Data Foundation',
  'Platform'
];

function topicDefaults(search = '') {
  const params = new URLSearchParams(search.startsWith('?') ? search.slice(1) : search);
  const topic = params.get('topic');
  if (topic === 'executive-summary') {
    return {
      interest: '',
      message: 'I would like to receive the executive summary and discuss how BERG applies to our institution.',
      heroTitle: 'Request Executive Summary',
      heroCopy: 'Share your details and Inselberg will follow up with the executive summary and next steps.'
    };
  }
  return {
    interest: '',
    message: '',
    heroTitle: 'Discuss Your AI Use Case',
    heroCopy: 'Request a BERG demo or speak with Inselberg about your enterprise AI roadmap.'
  };
}

export function ContactPage() {
  const defaults = topicDefaults(typeof window !== 'undefined' ? window.location.search : '');
  const [status, setStatus] = useState({ message: '', type: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const company = String(formData.get('company') || '').trim();
    const interest = String(formData.get('interest') || '').trim();
    const message = String(formData.get('message') || '').trim();
    const botcheck = String(formData.get('botcheck') || '');

    if (botcheck) {
      setStatus({ message: "Thank you — your message was sent. We'll be in touch soon.", type: 'success' });
      form.reset();
      return;
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '';
    if (!accessKey) {
      setStatus({
        message: 'Contact form is not configured yet. Please email marketing@inselbergsolutions.com or call +91 6362 134276.',
        type: 'error'
      });
      return;
    }

    if (!name || !email) {
      setStatus({ message: 'Please enter your name and work email.', type: 'error' });
      return;
    }

    setSending(true);
    setStatus({ message: '', type: '' });

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name,
          email,
          from_name: 'Inselberg Website',
          botcheck: '',
          subject: interest ? `Inselberg inquiry: ${interest}` : 'Inselberg website contact form',
          company,
          interest,
          message: [message, company ? `\nInstitution: ${company}` : '', interest ? `\nInterest: ${interest}` : ''].join('').trim()
        })
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Unable to send message. Please try again.');
      }
      form.reset();
      setSent(true);
      setStatus({ message: "Thank you — your message was sent. We'll be in touch soon.", type: 'success' });
      setTimeout(() => setSent(false), 4000);
    } catch (error) {
      setStatus({
        message: error.message || 'Something went wrong. Please email marketing@inselbergsolutions.com or try again later.',
        type: 'error'
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <section className="resources-hero contact-hero">
        <div className="container resources-hero-inner">
          <h1>{defaults.heroTitle}</h1>
          <p>{defaults.heroCopy}</p>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2>Build the Next Generation of Financial Services with <span>BERG</span></h2>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <span className="eyebrow">Contact Us</span>
              <h2>Talk to Inselberg</h2>
              <p>
                <strong>Email</strong>
                <br />
                <a href="mailto:marketing@inselbergsolutions.com">marketing@inselbergsolutions.com</a>
              </p>
              <p>
                <strong>Phone</strong>
                <br />
                <a href="tel:+916362134276">+91 6362 134276</a>
              </p>
              <p>
                <strong>Offices</strong>
                <br />
                Bangalore . Chennai
                <br />
                San Francisco . Sydney
              </p>
            </div>

            <form id="contact-form" className="contact-form" onSubmit={onSubmit} noValidate>
              <input
                type="checkbox"
                name="botcheck"
                className="botcheck"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
              <div className="form-field">
                <label htmlFor="cf-name">Name</label>
                <input id="cf-name" name="name" type="text" autoComplete="name" required />
              </div>
              <div className="form-field">
                <label htmlFor="cf-email">Work email</label>
                <input id="cf-email" name="email" type="email" autoComplete="email" required />
              </div>
              <div className="form-field">
                <label htmlFor="cf-company">Institution</label>
                <input id="cf-company" name="company" type="text" autoComplete="organization" />
              </div>
              <div className="form-field">
                <label htmlFor="cf-interest">Area of interest</label>
                <select id="cf-interest" name="interest" defaultValue={defaults.interest}>
                  <option value="">Select an area</option>
                  {INTERESTS.map((item) => (
                    <option key={item} value={item}>{item}</option>
                  ))}
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="cf-message">Message</label>
                <textarea
                  id="cf-message"
                  name="message"
                  placeholder="Tell us about your use case"
                  defaultValue={defaults.message}
                  key={defaults.message || 'default'}
                />
              </div>
              <button type="submit" className="btn-primary" disabled={sending}>
                {sending ? 'Sending...' : sent ? 'Message Sent' : 'Request Private Demo'}
              </button>
              {status.message ? (
                <p className={`form-status form-status--${status.type}`} role="status" aria-live="polite">
                  {status.message}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
