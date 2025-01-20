import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// import About from './pages/About';
import Projects from './pages/Projects';
import Particles from 'react-tsparticles';
import ParticlesComponent from './pages/Particles';
import Hero from './components/hero/Hero';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Service from './components/services/Services';

// import Contact from './pages/Contact';
// import Navbar from './components/Navbar';

function App() {
  return (
    <div className='container1'>
      {/* <ParticlesComponent/> */}
      <section id="home"><Hero /></section>
      <section id="services"><Service /></section>
      <section id="portfolio"><Portfolio /></section>
      <section id="contact"><Contact /></section>



    </div>
  );
}

export default App;