  import React from 'react';
  import styles from './About.module.css';

  const About = ({title}) => {
  return (
    <section className={styles.about}>
      <h2>{title}</h2>
    </section>
  );
};

export default About; 