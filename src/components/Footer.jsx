import React from 'react';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faHeart,
  faX,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';

const socialLinks = [
  {
    href: 'https://github.com/sona-s29',
    icon: faGithub,
    name: 'GitHub',
    color: '#181717',
  },
  {
    href: 'https://www.linkedin.com/in/sona-kumari/',
    icon: faLinkedin,
    name: 'LinkedIn',
    color: '#0077B5',
  },
  {
    href: 'https://x.com/Sona0429',
    icon: faXTwitter,
    name: 'X (Twitter)',
    color: '#000000',
  },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.socialIcons}>
          {socialLinks.map((link, idx) => (
            <span className={styles.iconWrapper} key={link.name}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.icon}
                style={{ '--icon-hover': link.color }}
                aria-label={link.name}
              >
                <FontAwesomeIcon icon={link.icon} />
              </a>
              <span className={styles.tooltip} style={{ '--tooltip-color': link.color }}>{link.name}</span>
            </span>
          ))}
        </div>
        <p className={styles.copy}>&copy; 2025 Sona Kumari. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
