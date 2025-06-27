import React from 'react';
import styles from './Projects.module.css';

const projects = [
  {
    id: 1,
    title: 'Tic Tac Toe Game',
    description: 'A classic Tic Tac Toe game, offering smooth gameplay and responsive design.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/sona-s29/Tic-Tac-Toe-Game',
    image: 'https://i.pinimg.com/originals/ce/6f/7f/ce6f7ffd885e477efa2110437ab779dd.gif'
  },
  {
    id: 2,
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
    title: 'To Do List',
    description: 'A clean and functional to-do list app built with React to help you organize tasks and boost productivity.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React'],
    link: 'https://github.com/sona-s29/To-Do-List',
    image: 'https://cdn.dribbble.com/userupload/27483813/file/original-6938adf595105de6cb356b6b00d46dae.gif'
  }
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
