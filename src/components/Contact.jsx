import React, { useState, useEffect, useRef } from 'react';
import styles from './Contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhoneAlt,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';

const contactInfo = [
  {
    icon: faEnvelope,
    label: 'Email',
    value: 'sona2529001@gmail.com',
    color: '#c71610',
  },
  {
    icon: faPhoneAlt,
    label: 'Phone',
    value: '+91 8920852665',
    color: '#43d65e',
  },
  {
    icon: faMapMarkerAlt,
    label: 'Location',
    value: 'Gurugram, Haryana',
    color: '#e94e77',
  },
];

function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Floating label logic
  const handleInput = (e) => {
    if (e.target.value) {
      e.target.classList.add(styles.filled);
    } else {
      e.target.classList.remove(styles.filled);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmitted(false);
    setError(false);
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    emailjs.sendForm(
      'service_ia2fv0v', // <-- service ID
      'template_nyic4s3', // <-- template ID
      form.current,
      publicKey
    )
    .then((result) => {
      setSubmitted(true);
      form.current.reset();
    }, (error) => {
      setError(true);
    });
  };

  return (
    <section className={styles.contactSection} id="Contact">
      <div className={`${styles.formContainer} ${isVisible ? styles.visible : ''}`}>
        <h2 className={styles.animatedTitle}>Contact Me</h2>
        <p className={styles.subtext}>I'd love to hear from you. Fill out the form below or reach me directly.</p>

        {submitted ? (
          <div className={styles.successCard}>
            <h3>Thank you!</h3>
            <p>Your message has been sent successfully. I'll get back to you soon.</p>
            <button
              className={styles.submitBtn}
              style={{ marginTop: '24px', minWidth: '120px' }}
              onClick={() => setSubmitted(false)}
              type="button"
            >
              OK
            </button>
          </div>
        ) : (
          <>
            <form
              ref={form}
              className={`${styles.form} ${isVisible ? styles.visible : ''}`}
              onSubmit={sendEmail}
            >
              <div className={styles.formGroup}>
                <input type="text" name="user_name" required placeholder=" " onInput={handleInput} />
                <label className={styles.floatingLabel}>Your Name</label>
              </div>
              <div className={styles.formGroup}>
                <input type="email" name="user_email" required placeholder=" " onInput={handleInput} />
                <label className={styles.floatingLabel}>Your Email</label>
              </div>
              <div className={styles.formGroup}>
                <input type="text" name="subject" required placeholder=" " onInput={handleInput} />
                <label className={styles.floatingLabel}>Subject</label>
              </div>
              <div className={styles.formGroup}>
                <textarea name="message" rows="6" required placeholder=" " onInput={handleInput}></textarea>
                <label className={styles.floatingLabel}>Your Message</label>
              </div>
              <button type="submit" className={styles.submitBtn}>
                <span>Send Message</span>
              </button>
              {error && <p className={styles.error} style={{ color: 'red', marginTop: '1rem' }}>Failed to send. Please try again.</p>}
            </form>

            <div className={`${styles.contactInfo} ${isVisible ? styles.visible : ''}`}>
              {contactInfo.map((info) => (
                <div className={styles.infoBox} key={info.label}>
                  <span
                    className={styles.infoIconWrapper}
                    style={{ '--icon-color': info.color }}
                    tabIndex={0}
                  >
                    <FontAwesomeIcon icon={info.icon} className={styles.icon} />
                  </span>
                  <strong>{info.label}</strong>
                  <span>{info.value}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Contact;
