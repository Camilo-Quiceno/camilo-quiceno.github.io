import './App.css';
import Hero from './components/Hero/Hero';
import heroBackground from './assets/images/hero/hero.jpg';

const appConfig = {
  hero: {
    emoji: '👋',
    title1: 'CQQ - Camilo Quiceno Quintero',
    title2: '💻 🟪 Data-Powered Software Engineer | 🎓 MSc Data Science',
    title3: 'Nu Colombia',
    backgroundImage: heroBackground,
  },
};

function App() {
  return (
    <Hero {...appConfig.hero} />
  );
}

export default App;
