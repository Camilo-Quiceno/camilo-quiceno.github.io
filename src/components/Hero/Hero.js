import React from 'react';
import styles from './Hero.module.css';
import nuIcon from '../../assets/icons/nu-icon.png';

const HeroDefaultProps = {
  emoji: '👋',
  backgroundImage: null
};

const Hero = ({emoji, title1, title2, title3, backgroundImage}) => {
  const heroStyle = backgroundImage 
    ? { backgroundImage: `url(${backgroundImage})` }
    : {};
  return (
    <div className={styles.hero} style={heroStyle}>
      <h1>{emoji}</h1>
      <h1>{title1}</h1>
      <br></br>
      <h2>{title2}</h2>
      <h3 className={styles.titleWithIcon}>
        <img src={nuIcon} alt="Nu" className={styles.icon} loading="lazy" decoding="async" />
        {title3}
      </h3>
    </div>
  );
};

export default Hero;
