import React from 'react';
import styles from './Services.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPaintBrush, faMobileAlt, faRocket } from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    title: 'Frontend Development',
    icon: faCode,
    desc: 'Responsive and performant user interfaces using React, HTML, CSS, and JavaScript.',
  },
  {
    title: 'UI/UX Design',
    icon: faPaintBrush,
    desc: 'Clean and user-friendly designs using Figma, Adobe XD, and design principles.',
  },
  {
    title: 'Mobile-First Design',
    icon: faMobileAlt,
    desc: 'Ensuring mobile responsiveness and accessibility across all screen sizes.',
  },
  {
    title: 'Deployment & Hosting',
    icon: faRocket,
    desc: 'Deploying apps with Netlify, Vercel, Firebase and managing performance.',
  },
];

function Services() {
  // Duplicate the services array for seamless looping
  const infiniteServices = [...services, ...services];
  return (
    <section className={styles.servicesSection} id="Services">
      <h2 className={styles.sectionTitle}>My Services <span className={styles.underline}></span></h2>
      <div className={styles.infiniteScrollWrapper}>
        <div className={styles.infiniteScroll}>
          {infiniteServices.map((service, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={service.icon} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
