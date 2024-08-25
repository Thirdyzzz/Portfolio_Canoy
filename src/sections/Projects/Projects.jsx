import React, { useState } from 'react';
import styles from './ProjectStyles.module.css';
import mlwiki from '../../assets/p1.png';
import onlypants from '../../assets/p3.png';
import secure from '../../assets/p2.png';
import ProjectCard from '../../common/ProjectCard';
import Modal from '../../common/Modal';
import Dtracker from '../../assets/dt1.png'

function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [theme, setTheme] = useState('light');

  // Toggle theme functionality
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const projects = [
    {
      id: 1,
      title: 'ML WIKI',
      description:
        'ML WIKI is a comprehensive resource providing detailed information and rotation strategies for Mobile Legends, built using Flutter for seamless cross-platform performance.',
      image: mlwiki,
      link: 'https://github.com/Thirdyzzz/Projects1.git',
    },
    {
      id: 2,
      title: 'Securedocs',
      description:
        'Securedocs is a robust file storage solution for law firms, implementing hybrid security measures to ensure confidentiality and integrity, developed using Laravel.',
      image: secure,
      link: 'https://github.com/Thirdyzzz/Projects1.git',
    },
    {
      id: 3,
      title: 'ONLY PANTS',
      description:
        'ONLY PANTS is an efficient Point of Sale (POS) system tailored for stock management, crafted with Flutter to provide a smooth and responsive user experience.',
      image: onlypants,
      link: 'https://github.com/Thirdyzzz/Projects1.git',
    },
    {
      id: 3,
      title: 'Dtracker',
      description:
        'Dtracker is a robust and user-friendly tracking tool designed to help individuals and teams stay on top of important dates and schedules. This tool offers a comprehensive tracking method that allows users to efficiently manage deadlines, appointments, events, and tasks all in one place..',
      image: Dtracker,
      link: 'https://github.com/Thirdyzzz/Projects1.git',
    },
  ];

  const openModal = (project) => {
    setModalContent(project);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="projects" className={styles.container}>
      {/* Remove or comment out the button below */}
      {/* <button onClick={toggleTheme} className={styles.themeToggle}>
        Toggle to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button> */}
      <h1 className={styles.sectionTitle}>Projects</h1>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            src={project.image}
            title={project.title}
            description={project.description}
            onClick={() => openModal(project)}
          />
        ))}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={modalContent.title}
        content={modalContent.description}
        image={modalContent.image}
        link={modalContent.link}
      />
    </section>
  );
}

export default Projects;
