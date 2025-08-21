import './App.css';
import Hero from './components/Hero/Hero';
import Divider from './components/Divider/Divider';
import Description from './components/Description/Description';

import heroBackground from './assets/images/hero/hero.jpg';
import profilePicture from './assets/images/description/profile.jpg';

const appConfig = {
  hero: {
    emoji: '👋',
    title1: 'CQQ - Camilo Quiceno Quintero',
    title2: '💻 🟪 Data-Powered Software Engineer | 🎓 MSc Data Science',
    title3: 'Nu Colombia',
    backgroundImage: heroBackground,
  },
  about: {
    title: '- About -',
  },
  description: {
    image: profilePicture,
    description: (
      <>
        I am Camilo Quiceno Quintero, a 28 years old <strong>Biomedical Engineer</strong>, from Colombia.
        <br></br>
        <br></br>
        Since the beginning of 2017, I am working in the field of 3D-Printing as a designer of patient-specific surgical guides for cranio-maxillofacial surgeries at Materialise. I started as a full time designer and held this position during my first one year and a half years. After that I became the trainer and technical leader of the team. Nowadays I am the <strong>Team Leader</strong> of the Plastic Team.        
        <br></br>
        <br></br>
        During my time at University I got interested about two topics, mechanical design and Software Development & Data Science, for that reason, by November 2019 I started to spend my free time to explore further the second area. I started to study Software Development & Data Science by my own and I have been learning Python and all its specialized libraries.        
        <br></br>
        <br></br>
        In 2022 I took this area more seriously. Currently I am studying a <strong>Master Degree in Data Science</strong>.      </>
    )},
};

function App() {
  return (
    <>
      <Hero {...appConfig.hero} />
      <Divider title=" - About - " />
      <Description {...appConfig.description} />
      <Divider title=" - Experience - " />
    </>
  );
}

export default App;
