import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: 'ATC Academy',
    shortDesc: 'LMS & Student Management System',
    longDesc: 'A comprehensive multi-tenant platform for training centers featuring automated grading, course management, role-based dashboards and interactive portals.',
    images: [
      '/projects/Atc/Home.png',
      '/projects/Atc/Dashbord.png',
      '/projects/Atc/Login.png',
      '/projects/Atc/depatments.png'
    ],
    stats: '5,000+ Users',
    techStack: ['React.js', 'Node.js', 'MySQL', 'Socket.io', 'VPS / JWT'],
    categories: ['Full Stack'],
    demoLink: 'https://lms-atc-academy.com/',
    codeLink: '#'
  },
  {
    id: 2,
    title: 'Sheshinstor',
    shortDesc: 'Comprehensive Women\'s E-Commerce',
    longDesc: 'An all-in-one e-commerce system dedicated to women\'s fashion and cosmetics. Built as a fully integrated platform, it features a robust multi-role architecture with dedicated portals and workflows for Users, Admins, and Employees.',
    images: [
      '/projects/Sheshinstor/login.png',
      '/projects/Sheshinstor/Hero.png',
      '/projects/Sheshinstor/Sections.png',
      '/projects/Sheshinstor/Proudect.png',
      '/projects/Sheshinstor/admin.png',
      '/projects/Sheshinstor/Loading.png'
    ],
    stats: '2,000+ Customers',
    techStack: ['React.js', 'Express.js', 'MySQL', 'Cloudinary'],
    categories: ['Full Stack', 'E-Commerce'],
    demoLink: 'https://sheshine.up.railway.app/',
    codeLink: '#'
  },
  {
    id: 3,
    title: 'Rently',
    shortDesc: 'Smart Rental Platform',
    longDesc: 'A modern, full-stack rental marketplace platform designed to connect renters and owners. It features Smart KYC with automated Egyptian National ID verification using OCR, an AI chatbot powered by Gemini, real-time chat via WebSockets, and an advanced booking system.',
    images: [
      '/projects/Rently/Login.png',
      '/projects/Rently/OTB.png',
      '/projects/Rently/Home.png',
      '/projects/Rently/Proudct.png',
      '/projects/Rently/Notifcations.png',
      '/projects/Rently/wallet.png'
    ],
    stats: 'SaaS Model',
    techStack: ['React.js', 'Node.js', 'Socket.io', 'Gemini AI', 'OCR'],
    categories: ['SaaS', 'Full Stack'],
    demoLink: '#',
    codeLink: 'https://github.com/islamsaeed597/Rently'
  },
  {
    id: 4,
    title: 'De7ket-baby',
    shortDesc: 'E-Commerce Platform',
    longDesc: 'Full-stack e-commerce platform with an admin dashboard for managing products, responsive UI, and live chat features.',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuAidyl663d9p4b12-V2fuA6M3G-D_U_wGBEP459iGKevaeskkxBGlG_YqdWNbO3N0J1cN1bkJKy0qkfL4J7QiS-A-X-GzJdLOFhBNaZgRavfqljHHll8o8jCmYxEQH6HAI23GCl1RunkH-5ZM6IohsSnpq992McVf_Xjvg58plfb7DziiS0fqqiO85zrLFfo5D6BnQECBTioRpRId2zN5EZyxzt9fBwmI4ct6ZimQ5gwE_D8LJD_tWRCsRwX40ATUT8ruw-HZIoE4gO'],
    stats: 'Global Reach',
    techStack: ['React.js', 'MongoDB', 'Cloudinary', 'Tailwind CSS'],
    categories: ['E-Commerce'],
    demoLink: '#',
    codeLink: '#'
  },
  {
    id: 5,
    title: 'Leon Template',
    shortDesc: 'Modern HTML/CSS Landing Page',
    longDesc: 'A fully responsive, clean, and modern template built with pure HTML5, CSS3, and Vanilla JavaScript, demonstrating strong foundational web design skills and pixel-perfect layout implementation.',
    images: [
      '/projects/Leon/Home.png',
      '/projects/Leon/servicse.png',
      '/projects/Leon/pr.png'
    ],
    stats: 'UI/UX Design',
    techStack: ['HTML5', 'CSS3', 'JavaScript'],
    categories: ['Front-end'],
    demoLink: 'https://islamsaeed597.github.io/Leon/',
    codeLink: 'https://github.com/islamsaeed597/Leon'
  },
  {
    id: 6,
    title: 'Kasper Template',
    shortDesc: 'Creative HTML/CSS Landing Page',
    longDesc: 'A responsive and elegantly designed template built with pure HTML and CSS, showcasing a keen eye for layout, typography, and modern UI/UX principles.',
    images: [
      '/projects/Kasper/Home.png',
      '/projects/Kasper/About.png',
      '/projects/Kasper/skills.png'
    ],
    stats: 'UI/UX Design',
    techStack: ['HTML5', 'CSS3'],
    categories: ['Front-end'],
    demoLink: 'https://islamsaeed597.github.io/Kasper/',
    codeLink: 'https://github.com/islamsaeed597/Kasper'
  }
];

const categories = ['All', 'Full Stack', 'Front-end', 'E-Commerce', 'SaaS'];

const ProjectCard = ({ project }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const nextImg = () => {
    setCurrentImgIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  };

  const prevImg = () => {
    setCurrentImgIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (project.images.length > 1) {
      const interval = setInterval(nextImg, 5500); // Auto-slide every 5.5 seconds
      return () => clearInterval(interval);
    }
  }, [project.images.length]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="glass-card rounded-xl overflow-hidden group flex flex-col h-full"
    >
      <div className="relative aspect-video overflow-hidden shrink-0 bg-surface-dim">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImgIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 w-full h-full bg-cover bg-top"
            style={{ backgroundImage: `url('${project.images[currentImgIndex]}')` }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-30 pointer-events-none"></div>
        
        {/* Slider Controls */}
        {project.images.length > 1 && (
          <>
            <button 
              onClick={prevImg}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/40 text-white backdrop-blur-md hover:bg-primary hover:text-on-primary transition-all opacity-0 group-hover:opacity-100 z-10 cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">chevron_left</span>
            </button>
            <button 
              onClick={nextImg}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/40 text-white backdrop-blur-md hover:bg-primary hover:text-on-primary transition-all opacity-0 group-hover:opacity-100 z-10 cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </button>
            
            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {project.images.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    idx === currentImgIndex ? 'bg-primary w-3' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="p-8 space-y-6 flex-grow flex flex-col">
        <div className="flex justify-between items-start gap-4">
          <div>
            <h3 className="font-headline-sm text-headline-sm text-on-background">{project.title}</h3>
            <p className="font-body-md text-on-surface-variant">{project.shortDesc}</p>
          </div>
          <span className="text-primary font-code-snippet font-bold shrink-0">{project.stats}</span>
        </div>
        <p className="font-body-md text-on-surface-variant flex-grow">
          {project.longDesc}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-surface-container text-on-surface-variant text-[10px] border border-outline-variant font-code-snippet rounded">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4 pt-4 border-t border-outline-variant mt-auto">
          <a href={project.demoLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-fixed transition-colors">
            <span className="material-symbols-outlined scale-75">language</span> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === 'All') return true;
    return project.categories.includes(activeCategory);
  });

  return (
    <section className="py-section-gap px-gutter bg-surface-container-lowest/30" id="projects">
      <div className="max-w-container-max mx-auto space-y-12">
        
        {/* Header & Categories */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-4">
            <h2 className="font-display-lg text-headline-md text-on-background">Featured Deployments</h2>
            <p className="text-on-surface-variant font-body-md">Production-ready solutions for real-world business challenges.</p>
          </div>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full font-bold text-sm transition-all cursor-pointer ${
                  activeCategory === category 
                    ? 'bg-primary text-on-primary shadow-[0_0_15px_rgba(0,245,212,0.3)]' 
                    : 'bg-surface-container border border-outline-variant text-on-surface-variant hover:text-primary hover:border-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Projects;

