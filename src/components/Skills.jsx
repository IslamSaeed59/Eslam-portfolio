import React from 'react';
import ScrollReveal from './ScrollReveal';

const Skills = () => {
  return (
    <section className="py-section-gap px-gutter" id="skills">
      <div className="max-w-container-max mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="font-display-lg text-headline-md text-on-background">Technical Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Frontend */}
          <ScrollReveal className="glass-card p-8 rounded-xl space-y-6">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary text-3xl">laptop_mac</span>
              <h3 className="font-headline-sm text-headline-sm">Frontend Engine</h3>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm"><span className="font-code-snippet">React.js / TypeScript</span><span>95%</span></div>
                <div className="h-1 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[95%]"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm"><span className="font-code-snippet">Tailwind / CSS3 / HTML5</span><span>98%</span></div>
                <div className="h-1 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[98%]"></div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-label-caps">Redux</span>
                <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-label-caps">Bootstrap</span>
                <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-label-caps">Framer Motion</span>
                <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-label-caps">Shadcn UI</span>
                <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-label-caps">Axios</span>
                <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-label-caps">Figma</span>
              </div>
            </div>
          </ScrollReveal>
          
          {/* Backend */}
          <ScrollReveal className="glass-card p-8 rounded-xl space-y-6">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary text-3xl">terminal</span>
              <h3 className="font-headline-sm text-headline-sm">Core Backend</h3>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm"><span className="font-code-snippet">Node.js / Express.js</span><span>90%</span></div>
                <div className="h-1 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-secondary w-[90%]"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm"><span className="font-code-snippet">MySQL / MongoDB</span><span>85%</span></div>
                <div className="h-1 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-secondary w-[85%]"></div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 bg-secondary/10 text-secondary border border-secondary/20 rounded-full text-xs font-label-caps">REST APIs</span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary border border-secondary/20 rounded-full text-xs font-label-caps">Socket.io</span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary border border-secondary/20 rounded-full text-xs font-label-caps">JWT / bcrypt</span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary border border-secondary/20 rounded-full text-xs font-label-caps">Mongoose</span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary border border-secondary/20 rounded-full text-xs font-label-caps">Sequelize</span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary border border-secondary/20 rounded-full text-xs font-label-caps">CORS</span>
              </div>
            </div>
          </ScrollReveal>
          
          {/* Specialized */}
          <ScrollReveal className="glass-card p-8 rounded-xl space-y-6">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary-fixed text-3xl">verified_user</span>
              <h3 className="font-headline-sm text-headline-sm">Tools & Advanced</h3>
            </div>
            <div className="space-y-4">
              <p className="font-body-md text-on-surface-variant">Specialized in full deployment pipelines and system architecture.</p>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center gap-2 text-sm">
                  <span className="material-symbols-outlined text-primary-fixed scale-75">check_circle</span>
                  <span className="font-code-snippet text-primary-fixed">VPS & Cloud (Hostinger/Vercel/Render)</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="material-symbols-outlined text-primary-fixed scale-75">check_circle</span>
                  <span className="font-code-snippet text-primary-fixed">RBAC, OTP & Payment Integration</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="material-symbols-outlined text-primary-fixed scale-75">check_circle</span>
                  <span className="font-code-snippet text-primary-fixed">Firebase & Cloudinary</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 bg-on-secondary-container text-secondary-container rounded-full text-xs font-label-caps">Git/GitHub</span>
                <span className="px-3 py-1 bg-on-secondary-container text-secondary-container rounded-full text-xs font-label-caps">AI Integration</span>
                <span className="px-3 py-1 bg-on-secondary-container text-secondary-container rounded-full text-xs font-label-caps">Postman</span>
                <span className="px-3 py-1 bg-on-secondary-container text-secondary-container rounded-full text-xs font-label-caps">Responsive Design</span>
              </div>
            </div>
          </ScrollReveal>
          
          {/* AI & Data Science */}
          <ScrollReveal className="glass-card p-8 rounded-xl space-y-6">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary text-3xl">psychology</span>
              <h3 className="font-headline-sm text-headline-sm">AI & Machine Learning</h3>
            </div>
            <div className="space-y-4">
              <p className="font-body-md text-on-surface-variant">Building predictive models and integrating intelligent capabilities.</p>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center gap-2 text-sm">
                  <span className="material-symbols-outlined text-secondary scale-75">check_circle</span>
                  <span className="font-code-snippet text-secondary">Neural Networks (TensorFlow / PyTorch)</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="material-symbols-outlined text-secondary scale-75">check_circle</span>
                  <span className="font-code-snippet text-secondary">Machine Learning (Scikit-Learn)</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="material-symbols-outlined text-secondary scale-75">check_circle</span>
                  <span className="font-code-snippet text-secondary">AI APIs & Prompt Engineering</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 bg-secondary/10 text-secondary border border-secondary/20 rounded-full text-xs font-label-caps">Python</span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary border border-secondary/20 rounded-full text-xs font-label-caps">Pandas</span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary border border-secondary/20 rounded-full text-xs font-label-caps">NumPy</span>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default Skills;
