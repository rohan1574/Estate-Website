import React from 'react';
import{DarkModeProvider} from './Components/DarkModeContext'
import Header from './Components/Header';
import Hero from './Sections/Hero';
import About from './Sections/About';
import PopularAreas from './Sections/PopularAreas';
import Properties from './Sections/Properties';
import Services from './Sections/Services';
import Clients from './Sections/Clients';
import Contact from './Sections/Contact';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
   <DarkModeProvider>
    <Header></Header>
    <Hero></Hero>
    <About></About>
    <PopularAreas></PopularAreas>
    <Properties></Properties>
    <Services></Services>
    <Clients></Clients>
    <Contact></Contact>
    <Footer></Footer>
   </DarkModeProvider>
    </div>
  );
};

export default App;