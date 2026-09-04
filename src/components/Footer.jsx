import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant py-stack-lg">
      <div className="max-w-container-max mx-auto px-gutter flex flex-col md:flex-row justify-between items-center gap-8">
        <a href="#home" className="cursor-pointer">
          <img src="/logo.png" alt="Eslam Saeed Logo" className="h-10 w-auto mix-blend-screen opacity-80 hover:opacity-100 transition-opacity" />
        </a>
        <div className="text-on-surface-variant font-label-caps text-label-caps flex flex-wrap gap-4 md:gap-8 justify-center">
          <a className="hover:text-primary transition-all flex items-center gap-1" href="https://github.com/islamsaaedy" target="_blank" rel="noreferrer">
            <span className="material-symbols-outlined scale-75">code</span> GitHub
          </a>
          <a className="hover:text-primary transition-all flex items-center gap-1" href="#" target="_blank" rel="noreferrer">
            <span className="material-symbols-outlined scale-75">work</span> LinkedIn
          </a>
          <a className="hover:text-primary transition-all flex items-center gap-1" href="mailto:islamsaeed597@gmail.com">
            <span className="material-symbols-outlined scale-75">mail</span> Email
          </a>
          <a className="hover:text-primary transition-all flex items-center gap-1" href="tel:+201026237058">
            <span className="material-symbols-outlined scale-75">call</span> +201026237058
          </a>
        </div>
        <div className="text-on-surface-variant font-label-caps text-label-caps">
          Built with ❤️ by Eslam Saeed © {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
