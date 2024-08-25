import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add(styles.lightMode);
    } else {
      document.body.classList.remove(styles.lightMode);
    }
  }, [isLightMode]);

  const handleThemeSwitch = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}><a href="#hero">Profile</a></li>
        <li className={styles.navItem}><a href="#projects">Projects</a></li>
        <li className={styles.navItem}><a href="#skills">Skills</a></li>
        <li className={styles.navItem}><a href="#certifications">Certifications</a></li>
        <li className={styles.navItem}><a href="#footer">Contacts</a></li>
      </ul>

    </nav>
  );
}

export default Navbar;
