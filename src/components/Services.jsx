import React from 'react';
import styles from './Services.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPaintBrush, faMobileAlt, faRocket, faCogs, faDatabase } from '@fortawesome/free-solid-svg-icons';

  const services = [
            {
                title: 'Full-Stack Development',
                icon: faCogs,
                desc: "Building complete web applications from front to back, leveraging my expertise in the MERN stack."
            },
            {
                title: 'Frontend Development',
                icon: faCode,
                desc: "Creating responsive and interactive user interfaces using modern frameworks like React.js and Tailwind CSS."
            },
            {
                title: 'Responsive Design',
                icon: faMobileAlt,
                desc: 'Ensuring seamless user experiences across all devices, from desktops to mobile phones, with a mobile-first approach.'
            },
            {
                title: 'Deployment & Hosting',
                icon: faRocket,
                desc: 'Deploying robust applications to production environments using platforms like Vercel for seamless access.'
            },
            {
                title: 'MERN Stack Expertise',
                icon: faDatabase,
                desc: 'Developing dynamic, data-driven applications by integrating MongoDB, Express.js, React.js, and Node.js.'
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
