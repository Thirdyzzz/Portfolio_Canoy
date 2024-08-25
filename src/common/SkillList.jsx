import React from 'react';
import styles from './SkillList.module.css';

function SkillList({ src, skill, percentage }) {
  return (
    <div className={styles.skillItem}>
      <img src={src} alt="Checkmark" className={styles.icon} />
      <span>{skill} - {percentage}%</span>
    </div>
  );
}

export default SkillList;
