import React, { useEffect } from 'react';
import styles from './SkillStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
          }
        });
      },
      { threshold: 0.1 }
    );

    const skillItems = document.querySelectorAll(`.${styles.skillItem}`);
    skillItems.forEach((item) => observer.observe(item));

    return () => {
      skillItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <section id="skills" className={styles.container}>
      <h1 className={styles.sectionTitle}>Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Flutter" percentage={90} className={styles.skillItem} />
        <SkillList src={checkMarkIcon} skill="Laravel" percentage={85} className={styles.skillItem} />
        <SkillList src={checkMarkIcon} skill="HTML" percentage={95} className={styles.skillItem} />
        <SkillList src={checkMarkIcon} skill="CSS" percentage={90} className={styles.skillItem} />
        <SkillList src={checkMarkIcon} skill="JavaScript" percentage={88} className={styles.skillItem} />
        <SkillList src={checkMarkIcon} skill="Node" percentage={80} className={styles.skillItem} />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React" percentage={85} className={styles.skillItem} />
        <SkillList src={checkMarkIcon} skill="Vue" percentage={80} className={styles.skillItem} />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Git" percentage={95} className={styles.skillItem} />
        <SkillList src={checkMarkIcon} skill="Bootstrap" percentage={90} className={styles.skillItem} />
        <SkillList src={checkMarkIcon} skill="Vb.Net" percentage={90} className={styles.skillItem} />
      </div>
    </section>
  );
}

export default Skills;
