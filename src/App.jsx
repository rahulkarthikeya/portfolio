import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SpecializationCards from './components/SpecializationCards';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <SpecializationCards />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
