import React from 'react';
import styles from './Hero.module.css';

const HeroDefaultProps = {
  title: 'Bienvenido',
};

const Hero = ({title}) => {
  return (
    <div className={styles.hero}>
      <h1>{title || HeroDefaultProps.title}</h1>
    </div>
  );
};

export default Hero;
