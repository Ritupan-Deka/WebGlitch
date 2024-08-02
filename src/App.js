import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/Header';
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <div id='services'><Services /></div>
      <div id='portfolio'><Work /></div>
      <div id='about'><Team /></div>
      <div id='contact'><Contact /></div>
      <Footer />
    </div>
  );
}

export default App;
