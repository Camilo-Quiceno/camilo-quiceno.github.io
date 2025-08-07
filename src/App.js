import './App.css';
import Hero from './components/Hero/Hero';
import heroBackground from './assets/images/hero/hero.jpg';

const appConfig = {
  hero: {
    backgroundImage: heroBackground,
  },
};

function App() {
  return (
    <Hero {...appConfig.hero} />
  );
}

export default App;
