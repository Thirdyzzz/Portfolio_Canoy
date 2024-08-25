import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const AnimatedScrollComponent = () => {
  return (
    <div>
      <ScrollAnimation animateIn="fadeIn" duration={2} delay={100} animateOnce={true}>
        <h1>Scroll-triggered Animation Example</h1>
      </ScrollAnimation>

      <ScrollAnimation animateIn="bounceInLeft" duration={1.5} animateOnce={true}>
        <p>This paragraph will animate from the left as you scroll down.</p>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeInUp" duration={2} delay={500} animateOnce={true}>
        <p>This content will fade in and move up with a delay.</p>
      </ScrollAnimation>
    </div>
  );
}

export default AnimatedScrollComponent;
