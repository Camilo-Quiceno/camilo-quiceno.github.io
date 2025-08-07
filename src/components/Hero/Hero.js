import React from 'react';
import styles from './Hero.module.css';

const HeroDefaultProps = {
  backgroundImage: null
};

const Hero = ({backgroundImage}) => {
  const heroStyle = backgroundImage 
    ? { backgroundImage: `url(${backgroundImage})` }
    : {};
  return (
    <div className={styles.hero} style={heroStyle}>
      
    </div>
  );
};

export default Hero;
