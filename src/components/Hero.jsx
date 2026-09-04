import React from 'react';
import Typewriter from './Typewriter';
import Terminal from './Terminal';
import ScrollReveal from './ScrollReveal';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-gutter overflow-hidden" id="home">
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Hero Content */}
        <ScrollReveal className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">Senior Full Stack Developer</span>
            <h1 className="font-display-lg text-display-lg text-on-background leading-tight">
              Eslam Saeed
            </h1>
            <div className="min-h-[1.4em]">
              <Typewriter />
            </div>
          </div>
          <p className="font-body-lg text-on-surface-variant max-w-xl">
            Full Stack Developer with 3+ years of experience building production-grade applications serving 10,000+ active users. 
            Specializing in scalable React architectures, robust Node.js backends, and mentoring the next generation of developers (550+ students trained).
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="bg-primary-container text-on-primary-container px-8 py-4 rounded-lg font-bold flex items-center gap-2 hover:shadow-[0_0_20px_rgba(0,245,212,0.4)] transition-all cursor-pointer">
              View My Work
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
            <a href="/Eslam_Saeed_CV.pdf" download="Eslam-Saeed-FullStack-Developer-CV.pdf" className="border border-primary-fixed-dim text-primary-fixed-dim px-8 py-4 rounded-lg font-bold backdrop-blur-sm hover:bg-primary/10 transition-all cursor-pointer block">
              Download CV
            </a>
          </div>
        </ScrollReveal>
        
        {/* Terminal Window */}
        <div className="lg:col-span-5 relative">
          <Terminal />
          {/* Decorative Glows */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-[80px] -z-10"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 blur-[80px] -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
