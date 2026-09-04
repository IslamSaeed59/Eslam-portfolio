import React from 'react';

const Experience = () => {
  return (
    <section className="py-section-gap px-gutter" id="experience">
      <div className="max-w-container-max mx-auto">
        <div className="text-center space-y-4 mb-20">
          <h2 className="font-display-lg text-headline-md text-on-background">Professional Journey</h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </div>
        <div className="relative space-y-12 before:absolute before:left-[19px] md:before:left-1/2 before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-primary before:via-secondary before:to-primary/20">
          
          {/* Experience Item 1 */}
          <div className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center w-full">
            <div className="md:w-5/12 ml-12 md:ml-0 glass-card p-6 rounded-xl order-2 md:order-1 hover:border-primary transition-all">
              <span className="text-xs font-code-snippet text-primary">Jun 2024 - Present</span>
              <h3 className="font-headline-sm text-on-background mt-1">Freelance Full Stack Developer</h3>
              <p className="text-on-surface-variant text-sm mb-4">ICT Academy</p>
              <ul className="text-sm text-on-surface-variant space-y-2 list-disc list-inside">
                <li>Architected and deployed 4 production-grade full-stack applications serving a combined 7,000+ active users.</li>
                <li>Designed RESTful APIs with JWT authentication, RBAC, and real-time Socket.io communication.</li>
                <li>Managed full VPS deployment lifecycle including server config, SSL, and ongoing maintenance.</li>
              </ul>
            </div>
            <div className="absolute left-0 md:left-1/2 top-4 md:top-auto md:-translate-x-1/2 w-10 h-10 rounded-full bg-background border-4 border-primary z-10 flex items-center justify-center order-1 md:order-2">
              <span className="material-symbols-outlined text-primary scale-75">work</span>
            </div>
            <div className="md:w-5/12 hidden md:block order-3"></div>
          </div>
          
          {/* Experience Item 2 */}
          <div className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center w-full">
            <div className="md:w-5/12 hidden md:block"></div>
            <div className="absolute left-0 md:left-1/2 top-4 md:top-auto md:-translate-x-1/2 w-10 h-10 rounded-full bg-background border-4 border-secondary z-10 flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary scale-75">school</span>
            </div>
            <div className="md:w-5/12 ml-12 md:ml-0 glass-card p-6 rounded-xl hover:border-secondary transition-all">
              <span className="text-xs font-code-snippet text-secondary">Jan 2025 - Present</span>
              <h3 className="font-headline-sm text-on-background mt-1">Programming & AI Instructor</h3>
              <p className="text-on-surface-variant text-sm mb-4">Creative Interactive School</p>
              <ul className="text-sm text-on-surface-variant space-y-2 list-disc list-inside">
                <li>Deliver practical programming and AI training sessions covering React.js and web fundamentals.</li>
                <li>Simplified complex concepts to increase student engagement via hands-on coding exercises.</li>
              </ul>
            </div>
          </div>

          {/* Experience Item 3 */}
          <div className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center w-full">
            <div className="md:w-5/12 ml-12 md:ml-0 glass-card p-6 rounded-xl order-2 md:order-1 hover:border-primary-fixed transition-all">
              <span className="text-xs font-code-snippet text-primary-fixed">Jun 2022 - Present</span>
              <h3 className="font-headline-sm text-on-background mt-1">Programming Instructor</h3>
              <p className="text-on-surface-variant text-sm mb-4">ICT Academy</p>
              <ul className="text-sm text-on-surface-variant space-y-2 list-disc list-inside">
                <li>Trained 550+ students in web development fundamentals through online and onsite sessions.</li>
                <li>Taught HTML, CSS, JavaScript, React.js, Python, OOP, and problem-solving techniques.</li>
              </ul>
            </div>
            <div className="absolute left-0 md:left-1/2 top-4 md:top-auto md:-translate-x-1/2 w-10 h-10 rounded-full bg-background border-4 border-primary-fixed z-10 flex items-center justify-center order-1 md:order-2">
              <span className="material-symbols-outlined text-primary-fixed scale-75">code</span>
            </div>
            <div className="md:w-5/12 hidden md:block order-3"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
