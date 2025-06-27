import React, { useState } from 'react';
import styles from './Navigation.module.css';
import { FaCode } from 'react-icons/fa';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo + ' ' + styles.logoGradient + ' ' + styles.logoFadeIn}>
        <FaCode className={styles.logoIcon} />
        <h2>SONA KUMARI</h2>
      </div>

      <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        <span className={`${styles.bar} ${menuOpen ? styles.rotate1 : ''}`}></span>
        <span className={`${styles.bar} ${menuOpen ? styles.fade : ''}`}></span>
        <span className={`${styles.bar} ${menuOpen ? styles.rotate2 : ''}`}></span>
      </div>

      <ul className={`${styles.navigation} ${menuOpen ? styles.open + ' ' + styles.menuFadeIn : ''}`}>
        <li><a className={styles.animatedLink} href="#Home" >Home</a></li>
        <li><a className={styles.animatedLink} href="#About">About</a></li>
        <li><a className={styles.animatedLink} href="#Projects">Projects</a></li>
        <li><a className={styles.animatedLink} href="#Services">Services</a></li>
        <li><a className={styles.animatedLink} href="#Contact">Contact</a></li>
        <li className={styles.mobileBtn}><button className={styles.glowBtn}><a href='#Contact'>Hire Me</a></button></li>
      </ul>
    </nav>
    
  );
}

export default Navbar;
