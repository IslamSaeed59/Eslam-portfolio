import React, { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/70 backdrop-blur-md border-b border-primary/20 shadow-[0_0_20px_rgba(0,245,212,0.15)]">
      <div className="max-w-container-max mx-auto flex justify-between items-center px-gutter py-4">
        <a href="#home" className="cursor-pointer">
          <img src="/logo.png" alt="Eslam Saeed Logo" className="h-10 w-auto mix-blend-screen" />
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <a className="text-primary font-bold border-b-2 border-primary pb-1 font-headline-sm text-headline-sm" href="#home">Home</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-headline-sm text-headline-sm" href="#skills">Skills</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-headline-sm text-headline-sm" href="#projects">Projects</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-headline-sm text-headline-sm" href="#experience">Experience</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-headline-sm text-headline-sm" href="#contact">Contact</a>
          <a href="/Eslam_Saeed_CV.pdf" download="Eslam-Saeed-FullStack-Developer-CV.pdf" className="bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-bold hover:bg-primary transition-all active:scale-95 cursor-pointer inline-block text-center">
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-primary p-2 focus:outline-none cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="material-symbols-outlined text-3xl">
            {isOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-primary/20 py-4 px-gutter flex flex-col gap-4 shadow-xl">
          <a className="text-on-surface hover:text-primary transition-colors font-headline-sm text-lg" href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a className="text-on-surface hover:text-primary transition-colors font-headline-sm text-lg" href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
          <a className="text-on-surface hover:text-primary transition-colors font-headline-sm text-lg" href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          <a className="text-on-surface hover:text-primary transition-colors font-headline-sm text-lg" href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
          <a className="text-on-surface hover:text-primary transition-colors font-headline-sm text-lg" href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
          <a href="/Eslam_Saeed_CV.pdf" download="Eslam-Saeed-FullStack-Developer-CV.pdf" onClick={() => setIsOpen(false)} className="bg-primary-container text-on-primary-container px-6 py-3 mt-2 rounded-lg font-bold hover:bg-primary transition-all active:scale-95 text-center cursor-pointer">
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
