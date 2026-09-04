import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import BackgroundNetwork from './components/BackgroundNetwork';

function App() {
  return (
    <div className="relative">
      <CustomCursor />
      <BackgroundNetwork />
      {/* Background Grid */}
      <div className="fixed inset-0 bg-grid pointer-events-none -z-10"></div>
      
      <Navigation />
      <main>
        <Hero />
        <Stats />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;