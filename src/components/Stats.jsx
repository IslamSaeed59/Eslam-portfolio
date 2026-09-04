import React from 'react';
import ScrollReveal from './ScrollReveal';

const Stats = () => {
  return (
    <section className="py-20 px-gutter bg-surface-container-lowest/50 backdrop-blur-sm">
      <ScrollReveal className="max-w-container-max mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        <div className="space-y-2">
          <h3 className="font-display-lg text-display-lg text-primary">3+</h3>
          <p className="font-label-caps text-label-caps text-on-surface-variant">Years Experience</p>
        </div>
        <div className="space-y-2">
          <h3 className="font-display-lg text-display-lg text-secondary">4</h3>
          <p className="font-label-caps text-label-caps text-on-surface-variant">Production Apps</p>
        </div>
        <div className="space-y-2">
          <h3 className="font-display-lg text-display-lg text-primary-fixed">10k+</h3>
          <p className="font-label-caps text-label-caps text-on-surface-variant">Active Users</p>
        </div>
        <div className="space-y-2">
          <h3 className="font-display-lg text-display-lg text-secondary">550+</h3>
          <p className="font-label-caps text-label-caps text-on-surface-variant">Students Trained</p>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Stats;
