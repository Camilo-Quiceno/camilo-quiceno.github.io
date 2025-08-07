import React from 'react';
import { HeroDefaultProps } from './Hero.types';



const Hero = ({title}) => {
  return (
    <div className="hero">
      <h1>{title || HeroDefaultProps.title}</h1>
    </div>
  );
};


export default Hero;
