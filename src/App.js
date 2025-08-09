import './App.css';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import heroBackground from './assets/images/hero/hero.jpg';

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
};

function App() {
  return (
    <>
      <Hero {...appConfig.hero} />
      <About {...appConfig.about} />
    </>
  );
}

export default App;
