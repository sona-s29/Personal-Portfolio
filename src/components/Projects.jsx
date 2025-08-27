import React from 'react';
import styles from './Projects.module.css';

const projects = [
    {
    id: 1,
    title: 'Job Portal',
    description: "A MERN stack web application that connects job seekers and recruiters.",
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    link: 'https://github.com/sona-s29/Job_portal',
    image: 'https://assets-v2.lottiefiles.com/a/4ab59f98-1171-11ee-ae84-4701bf3b3b9e/MuEl9pAZMr.gif'
  },
  {
    id:2 ,
    title: 'Rock Paper Scissors',
    description: 'A fun and interactive Rock Paper Scissors game built with JavaScript to challenge your luck and logic.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/sona-s29/rock-paper-scissors',
    image: 'https://miro.medium.com/v2/resize:fit:1040/1*lQmRWLWbHQNZhb9DtcGEHg.gif'
  },
  {
    id: 3,
    title: 'Weather App',
    description: 'A sleek and responsive weather app built with React that fetches real-time weather data using API integration.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React'],
    link: 'https://github.com/sona-s29/React-Weather-App',
    image: 'https://i.pinimg.com/originals/e1/70/03/e17003d3a86823bea8a48e4ec03d33e9.gif'
  },
  {
    id: 4,
    title: 'User Enquiry Form',
    description: "A user enquiry form built with the MERN stack that allows users to view, submit, edit and update their details",
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    link: 'https://github.com/sona-s29/User-Enquiry-Form',
    image: 'https://saibabacartransport.com/assets/images/supplier.gif'
  },
  
   {
    id: 5,
    title: 'Calculator',
    description: "Developed a fully functional advanced calculator web application.",
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    link: 'https://github.com/sona-s29/Calculator',
    image: 'https://cdn.pixabay.com/animation/2022/12/05/15/28/15-28-43-29_512.gif'
  },
    {
    id: 6,
    title: 'Pomodoro Timer',
    description: "Developed a fully functional, responsive, and visually engaging Pomodoro Timer",
     tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/sona-s29/pomodoro_timer',
    image: 'https://metro.co.uk/wp-content/uploads/2021/11/The-Pomodoro-Technique-feature-d05e.gif?w=646'
  },
];

function Projects() {
  return (
    <section className={styles.projectSection} id="Projects" tabIndex={-1}>
      <h2 className={styles.sectionTitle}>
        My Work <span className={styles.underline}></span>
      </h2>
      <p className={styles.description}>
        A glimpse into the projects where design meets code — crafted with creativity, precision, and purpose.
      </p>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <div className={styles.projectCard} key={project.id}>
            <img src={project.image} alt={project.title} className={styles.projectImg} />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDesc}>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map((tag, index) => (
                  <span key={index} className={styles.tag}>{tag}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.viewBtn}>
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
