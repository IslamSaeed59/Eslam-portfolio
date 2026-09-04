import React from 'react';
import ScrollReveal from './ScrollReveal';

const Contact = () => {
  return (
    <section className="py-section-gap px-gutter" id="contact">
      <ScrollReveal className="max-w-container-max mx-auto max-w-2xl text-center space-y-12">
        <div className="space-y-4">
          <h2 className="font-display-lg text-headline-md text-on-background">Initiate Contact</h2>
          <p className="text-on-surface-variant font-body-md">Ready for a new project or architectural consultation?</p>
        </div>
        {/* Update 'YOUR_FORMSPREE_ID' below with your actual form ID from formspree.io */}
        <form 
          className="glass-card p-8 rounded-2xl space-y-6 text-left" 
          action="https://formspree.io/f/YOUR_FORMSPREE_ID" 
          method="POST"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="font-code-snippet text-xs text-primary ml-1">USER_NAME</label>
              <input name="name" className="w-full bg-surface-container-lowest border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg p-3 text-on-surface placeholder:text-surface-variant transition-all outline-none" placeholder="Enter your name" type="text" required/>
            </div>
            <div className="space-y-2">
              <label className="font-code-snippet text-xs text-primary ml-1">USER_EMAIL</label>
              <input name="email" className="w-full bg-surface-container-lowest border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg p-3 text-on-surface placeholder:text-surface-variant transition-all outline-none" placeholder="email@example.com" type="email" required/>
            </div>
          </div>
          <div className="space-y-2">
            <label className="font-code-snippet text-xs text-primary ml-1">TRANSMISSION_CONTENT</label>
            <textarea name="message" className="w-full bg-surface-container-lowest border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary rounded-lg p-3 text-on-surface placeholder:text-surface-variant transition-all outline-none" placeholder="Briefly describe your project or inquiry..." rows="4" required></textarea>
          </div>
          <button className="w-full bg-primary-container text-on-primary-container py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(0,245,212,0.4)] active:scale-[0.98] transition-all cursor-pointer" type="submit">
            Send Message
            <span className="material-symbols-outlined">send</span>
          </button>
        </form>
      </ScrollReveal>
    </section>
  );
};

export default Contact;
