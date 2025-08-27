import React from 'react';
import styles from './About.module.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGitAlt, FaLaptopCode, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiMongoose } from 'react-icons/si';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 color="#e44d26" /> },
  { name: 'CSS3', icon: <FaCss3Alt color="#1572b6" /> },
  { name: 'JavaScript', icon: <FaJs color="#f7df1e" /> },
  { name: 'React', icon: <FaReact color="#61dafb" /> },
  { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
  { name: 'Express.js', icon: <SiExpress color="#000000" /> },
  { name: 'MongoDB', icon: <SiMongodb color="#47a248" /> },
  { name: 'Mongoose', icon: <SiMongoose color="#880000" /> },
  { name: 'Bootstrap', icon: <FaBootstrap color="#7952b3" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss color="#38bdf8" /> },
  { name: 'Git & GitHub', icon: <FaGitAlt color="#f34f29" /> },
  { name: 'Responsive', icon: <FaLaptopCode color="#5e43d6" /> },
];

const education = [
  {
    year: '2023 - 2026',
    institution: 'World College Of Technology And Management (MDU Rohtak)',
    desc: `I'm currently pursuing a Bachelor of Computer Applications (BCA), building a strong foundation in programming, web technologies, and software development. This journey has fueled my passion for front-end development, allowing me to apply what I learn through real-world projects, continuous practice, and creative experimentation.`
  },
  // Add more education/experience entries here if needed
];

function About() {
  // Duplicate skills for seamless infinite scroll
  const infiniteSkills = [...skills, ...skills];
  return (
    <section className={styles['about-section']} id="About">
      <h2 className={styles['section-title'] + ' ' + styles['popInTitle']}>About Me <span className={styles.underline + ' ' + styles.underlinePop}></span></h2>
      <div className={styles['about-text']}>
        <p className={styles['aboun tFadeIn']} style={{ animationDelay: '0.1s' }}>
          Hello, I'm an aspiring <strong>Full-Stack Developer</strong> with expertise in the MERN stack (MongoDB, Express, React, Node.js).
        </p>
        <p className={styles['aboutFadeIn']} style={{ animationDelay: '0.3s' }}>
          Strong proficiency in frontend development, building responsive and intuitive interfaces with React.js, JavaScript, and Tailwind CSS.
        </p>
        <p className={styles['aboutFadeIn']} style={{ animationDelay: '0.5s' }}>
          Skilled in backend development, creating secure, scalable APIs with Node.js and Express, and managing data with MongoDB.
        </p>
        <p className={styles['aboutFadeIn']} style={{ animationDelay: '0.7s' }}>
          Focused on delivering applications that balance performance, usability, and modern design principles.

          Experienced in solving complex problems through logical architecture and seamless frontend-backend integration.
        </p>
        <p>
          Committed to continuous learning and staying updated with the latest web technologies.

          Driven to build innovative, user-friendly, and scalable web applications that create real value.
        </p>
        <strong>
          <p className={styles['aboutFadeIn']} style={{ animationDelay: '0.9s' }}>"Let's create something extraordinary together."</p>
        </strong>
      </div>

      {/* Infinite Scroll Skills Section */}
      <div style={{ textAlign: 'center', width: '100%' }}>
        <h3 className={styles.skillsHeading}>Skills</h3>
        <span className={styles.skillsUnderline}></span>
      </div>
      <div className={styles.infiniteScrollWrapper}>
        <div className={styles.infiniteScroll}>
          {infiniteSkills.map((skill, i) => (
            <div className={styles.skillCardScroll} key={skill.name + '-' + i}>
              <div className={styles.skillIconScroll}>{skill.icon}</div>
              <div className={styles.skillNameScroll}>{skill.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Education Timeline Section */}
      <div className={styles.eduTimelineSection}>
        <h3 className={styles.educationHeading}>Education</h3>
        <span className={styles.educationUnderline}></span>
        <div className={styles.eduTimelineWrapper}>
          <div className={styles.eduTimelineLine}></div>
          <ul className={styles.eduTimelineList}>
            {education.map((edu, i) => (
              <li className={styles.eduTimelineItem} key={edu.year + '-' + i}>
                <div className={styles.eduTimelineDot}></div>
                <div className={styles.eduTimelineCard}>
                  <div className={styles.eduTimelineYear}>{edu.year}</div>
                  <div className={styles.eduTimelineInst}>{edu.institution}</div>
                  <div className={styles.eduTimelineDesc}>{edu.desc}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
