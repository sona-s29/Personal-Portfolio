import styles from './Home.module.css';
import myImage from './profileImage.png'; // Replace with your image file path
import resumePDF from '../Resume.pdf'; // Ensure this file exists in the src folder
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <div className={styles['home-container']} id='Home'>
      <div className={styles['left-section']}>
        <h1 className={styles['fadeInLeft']}>Hello, I'm <span className={styles['animatedName']}>Sona Kumari</span></h1>
        <p className={styles['fadeInLeft']} style={{ animationDelay: '0.2s' }}>I'm a passionate Front-End Developer who turns complex problems 
          into intuitive, interactive, and visually appealing web solutions. 
          With a love for clean code and seamless user experiences, 
          I specialize in translating UI/UX designs into responsive, 
          pixel-perfect websites using modern technologies like React.js, Tailwind CSS, and JavaScript.</p>
        <a href={resumePDF} download="Resume.pdf">
          <button className={styles['download-btn']}>
            <FontAwesomeIcon icon={faDownload} className={styles['download-icon']} />
            Download Resume
          </button>
        </a>
      </div>

      <div className={styles['right-section'] + ' ' + styles['fadeInRight']}>
        <img src={myImage} alt="Profile" className={styles['profile-img']} />
      </div>
    </div>
  );
}

export default Home;
