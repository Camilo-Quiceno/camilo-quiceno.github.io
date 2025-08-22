import './App.css';
import Hero from './components/Hero/Hero';
import Divider from './components/Divider/Divider';
import Description from './components/Description/Description';
import Timeline from './components/Timeline/Timeline';
import EducationTable from './components/EducationTable/EducationTable';
import Contact from './components/Contact/Contact';
import { appConfig } from './data/appConfig';

function App() {
  return (
    <>
      <Hero {...appConfig.hero} />
      <Divider title={appConfig.about.title} />
      <Description {...appConfig.description} />
      <Divider title=" - Experience - " />
      <Timeline companies={appConfig.companies} />
      <Divider title=" - Education - " />
      <EducationTable education={appConfig.education} />
      <Divider title=" - Contact - " />
      <Contact contact={appConfig.contact} />
    </>
  );
}

export default App;
