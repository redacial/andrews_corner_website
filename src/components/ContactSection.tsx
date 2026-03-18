import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const contactInfo = {
  address: "Spartis 12, Thessaloniki 54640, Greece",
  email: "StAndrewsCorner@gmail.com",
  phone: "2310832265",
  instagram: "andrewscorner.skg",
};

const ContactSection: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="contact" className="container contact-section grid">
      <div className="contact-form-side">
        <h2>{t('contact.title')}</h2>
        <form className="contact-form">
          <div className="form-group">
            <label>{t('contact.name')}</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>{t('contact.email')}</label>
            <input type="email" />
          </div>
          <div className="form-group">
            <label>{t('contact.message')}</label>
            <textarea rows={5}></textarea>
          </div>
          <button type="button" className="btn-primary">{t('contact.send')}</button>
        </form>
      </div>

      <div className="contact-info-side">
        <h3>{language === 'el' ? 'Πληροφορίες' : 'Contact Details'}</h3>
        <p><strong>Address:</strong> {contactInfo.address}</p>
        <p><strong>Email:</strong> <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
        <p><strong>Phone:</strong> {contactInfo.phone}</p>
        <p><strong>Instagram:</strong> <a href={`https://instagram.com/${contactInfo.instagram}`} target="_blank" rel="noreferrer">@{contactInfo.instagram}</a></p>
      </div>
    </section>
  );
};

export default ContactSection;
