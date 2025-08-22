import React from 'react';
import styles from './Contact.module.css';

const ContactItem = ({ icon, label, text, isClickable, href }) => {
  const content = (
    <div className={styles.contactItem}>
      <span className={styles.icon}>{icon}</span>
      <div className={styles.contactText}>
        {label && <span className={styles.label}>{label} </span>}
        <span className={styles.text}>{text}</span>
      </div>
    </div>
  );

  if (isClickable && href) {
    return (
      <a href={href} className={styles.contactLink}>
        {content}
      </a>
    );
  }

  return content;
};

const Contact = ({ contact }) => {
  if (!contact) {
    return <div className={styles.noData}>No contact information available.</div>;
  }

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactGrid}>
        <div className={styles.titleColumn}>
          <h2 className={styles.contactTitle}>{contact.title}</h2>
        </div>
        <div className={styles.infoColumn}>
          <ContactItem 
            icon={contact.location.icon}
            text={contact.location.text}
          />
          <ContactItem 
            icon={contact.phone.icon}
            label={contact.phone.label}
            text={contact.phone.text}
            isClickable={true}
            href={`tel:+57${contact.phone.text.replace(/\s/g, '')}`}
          />
          <ContactItem 
            icon={contact.email.icon}
            label={contact.email.label}
            text={contact.email.text}
            isClickable={true}
            href={`mailto:${contact.email.text}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact; 