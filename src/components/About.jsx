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
        <p className={styles['aboutFadeIn']} style={{ animationDelay: '0.1s' }}>
          Hello, I'm a <strong>Front-End Developer</strong> with a creative eye and a problem-solving mindset. I specialize in building responsive, user-friendly websites and web applications that combine clean design with functional code.
        </p>
        <p className={styles['aboutFadeIn']} style={{ animationDelay: '0.3s' }}>
          Whether it's developing from scratch or breathing life into a UI/UX design, I focus on delivering smooth, performance-optimized, and accessible user experiences.
        </p>
        <p className={styles['aboutFadeIn']} style={{ animationDelay: '0.5s' }}>
          I enjoy working with technologies like HTML5, CSS3, JavaScript, React.js, and Tailwind CSS, and I'm always exploring new tools to stay ahead in this fast-moving digital world. From wireframes to final deployment, I care deeply about every step of the development process.
        </p>
        <p className={styles['aboutFadeIn']} style={{ animationDelay: '0.7s' }}>
          When I'm not coding, I'm probably learning something new, experimenting with UI ideas, or working on passion projects that push my limits.
        </p>
        <strong>
          <p className={styles['aboutFadeIn']} style={{ animationDelay: '0.9s' }}>Let's create something extraordinary together.</p>
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
