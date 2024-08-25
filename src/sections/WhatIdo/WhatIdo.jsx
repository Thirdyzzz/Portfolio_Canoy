import React from 'react';
import styles from './WhatIDo.module.css'; // Check this path

function WhatIDo() {
  return (
    <section id="what-i-do" className={styles.container}>
      <h1 className={styles.sectionTitle}>What I Do</h1>
      <div className={styles.services}>
        <div className={styles.serviceItem}>
          <h2>Front End <FaHtml5 className={styles.icon} /></h2>
          <p>
            I specialize in delivering clean, creative, and responsive designs using the latest tools and modern technologies.
          </p>
        </div>
        <div className={styles.serviceItem}>
          <h2>Back End <FaCode className={styles.icon} /></h2>
          <p>
            I specialize in backend development, focusing on data handling, API integration, and custom functionalities.
          </p>
        </div>
        <div className={styles.serviceItem}>
          <h2>Editing <FaAdobe className={styles.icon} /></h2>
          <p>
            I offer editing services to enhance web designs with creative visuals and unique images.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhatIDo;
