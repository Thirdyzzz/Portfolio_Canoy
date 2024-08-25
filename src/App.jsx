import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.css';
import Certifications from './Certification/Certification';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Navbar from './sections/NavBar/Navbar';
import Introduction from './sections/Intro/Introduction';
import Consultation from './sections/Consultation/Consultation';
import FloatingIcon from './sections/Float/FloatingIcon';
import Loading from './sections/Loading/Loading';  // Import the Loading component
import Timeline from './sections/Timeline/Timeline';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,  // Duration of the animation in milliseconds
    });

    // Simulate loading time (e.g., fetching data or initializing something)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />  // Show loading screen if loading is true
      ) : (
        <>
          <Navbar />
          <Introduction />
          <FloatingIcon />
          <div id="hero" data-aos="fade-up">
            <Hero />
          </div>
          <div id="timeline" data-aos="fade-up">
            <Timeline/>
          </div>
          <div id="projects" data-aos="fade-up">
            <Projects />
          </div>
          <div id="skills" data-aos="fade-up">
            <Skills />
          </div>
          <div id="certifications" data-aos="fade-up">
            <Certifications />
          </div>
          <div id="consultation" data-aos="fade-up">
            <Consultation />
          </div>
         
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
