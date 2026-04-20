import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const contactInfo = {
  address: "Spartis 12, Thessaloniki 54640, Greece",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Spartis+12+Thessaloniki+54640+Greece",
  email: "StAndrewsCorner@gmail.com",
  phone: "+30 2310 832 265",
  instagram: "andrewscorner.skg",
};

const ContactSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async () => {
    setStatus('sending');
    try {
      const response = await fetch('https://formspree.io/f/xpqovoba', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      if (response.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="container contact-section grid">
      <div className="contact-form-side">
        <h2>{t('contact.title')}</h2>
        <form className="contact-form">
          <div className="form-group">
            <label>{t('contact.name')}</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>{t('contact.email')}</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>{t('contact.message')}</label>
            <textarea
              rows={5}
              name="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </div>

          {status === 'success' && (
            <p style={{ color: 'green', marginBottom: 'var(--space-sm)' }}>
              {language === 'el' ? 'Το μήνυμά σας εστάλη!' : 'Your message was sent successfully!'}
            </p>
          )}
          {status === 'error' && (
            <p style={{ color: 'red', marginBottom: 'var(--space-sm)' }}>
              {language === 'el' ? 'Κάτι πήγε στραβά. Δοκιμάστε ξανά.' : 'Something went wrong. Please try again.'}
            </p>
          )}

          <button
            type="button"
            className="btn-primary"
            onClick={handleSubmit}
            disabled={status === 'sending'}
          >
            {status === 'sending'
              ? (language === 'el' ? 'Αποστολή...' : 'Sending...')
              : t('contact.send')}
          </button>
        </form>
      </div>

      <div className="contact-info-side">
        <h3>{language === 'el' ? 'Πληροφορίες' : 'Contact Details'}</h3>
        <p>
          <strong>Address:</strong>{' '}
          <a href={contactInfo.mapsUrl} target="_blank" rel="noreferrer">{contactInfo.address}</a>
          {' — '}
          <a href={contactInfo.mapsUrl} target="_blank" rel="noreferrer">
            {language === 'el' ? 'Οδηγίες' : 'Get Directions'}
          </a>
        </p>
        <p><strong>Email:</strong> <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
        <p><strong>Phone:</strong> {contactInfo.phone}</p>
        <p><strong>Instagram:</strong> <a href={`https://instagram.com/${contactInfo.instagram}`} target="_blank" rel="noreferrer">@{contactInfo.instagram}</a></p>
      </div>
    </section>
  );
};

export default ContactSection;