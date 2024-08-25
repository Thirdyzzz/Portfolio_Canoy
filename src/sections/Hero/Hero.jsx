import React from 'react';
import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero2.png'; // Corrected path
import sun from '../../assets/sun.svg';
import fbIconlight from '../../assets/fbicon.png';
import fbicondark from '../../assets/fbicon4.png';
import githubIconlight from '../../assets/github-light.svg';
import githubIconddark from '../../assets/github-dark.svg';
import linkedIconlight from '../../assets/linkedin-light.svg';
import linkedIcondark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/CV.pdf';
import { useTheme } from '../../common/ThemeContext';
import moon from '../../assets/moon.svg';

function Hero() { 
    const {theme, toggleTheme} = useTheme();
    const themeIcon = theme === 'light' ? sun : moon;
    const fbIcon = theme === 'light' ? fbIconlight : fbicondark;
    const githubIcon = theme === 'light' ? githubIconlight : githubIconddark;
    const linkedIcon = theme === 'light' ? linkedIconlight : linkedIcondark;

    return (
        <section id="hero" className={styles.container}>
            
            <div className={styles.colorModeContainer}>
                <img
                    className={styles.hero}
                    src={heroImg}
                    alt="Profile of Canoy"
                />
                <img
                    className={styles.colorMode}
                    src={themeIcon}
                    alt="Color mode icon"
                    onClick={toggleTheme}
                />
            </div>
            <div className={styles.info}>
                <h1>
                    Iluminado III <br></br>
                    Canoy
                </h1>
                <h2>Mobile Developer</h2>
                <span>
                    <a href="https://www.facebook.com/zack.canoy/" target="_blank" rel="noreferrer">
                        <img src={fbIcon} alt="Facebook icon" />
                    </a>
                    <a href="https://github.com/Thirdyzzz/" target="_blank" rel="noreferrer">
                        <img src={githubIcon} alt="Github icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/iluminado-canoy-a721821ba/" target="_blank" rel="noreferrer">
                        <img src={linkedIcon} alt="LinkedIn icon" />
                    </a>
                </span>
                <p>
                    Driven by a passion for innovative digital solutions, I’m excited to leverage my skills in mobile and web development to contribute to your company’s success.
                </p>
                <a href={CV} download>
        <button className={styles.hover + ' ' + styles.down}>Download CV</button>
       </a>
            </div>
        </section>
    );
}

export default Hero;
