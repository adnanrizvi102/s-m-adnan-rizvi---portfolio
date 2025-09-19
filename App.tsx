
import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      <div className="absolute inset-0 -z-10 h-full w-full bg-gray-900 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px]"></div>
      <div className="relative z-10">
        <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm">
          <nav className="container mx-auto px-6 py-4">
            <ul className="flex justify-center space-x-4 md:space-x-8 text-sm font-medium text-gray-400">
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a></li>
              <li><a href="#education" className="hover:text-cyan-400 transition-colors">Education</a></li>
              <li><a href="#certifications" className="hover:text-cyan-400 transition-colors">Certifications</a></li>
            </ul>
          </nav>
        </header>

        <main className="container mx-auto px-6">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Certifications />
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default App;
