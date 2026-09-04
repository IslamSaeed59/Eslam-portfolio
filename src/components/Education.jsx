
import ScrollReveal from './ScrollReveal';

const Education = () => {
  return (
    <section className="py-section-gap px-gutter bg-surface-container-lowest/50">
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal className="space-y-8">
          <h2 className="font-display-lg text-headline-md text-on-background">Education & Certifications</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center shrink-0 border border-primary/20">
                <span className="material-symbols-outlined text-primary">school</span>
              </div>
              <div>
                <h4 className="font-headline-sm text-sm text-on-background">B.Sc. Artificial Intelligence</h4>
                <p className="text-xs text-on-surface-variant font-code-snippet">Egyptian Russian University | 2024</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-secondary/10 rounded flex items-center justify-center shrink-0 border border-secondary/20">
                <span className="material-symbols-outlined text-secondary">verified</span>
              </div>
              <div>
                <h4 className="font-headline-sm text-sm text-on-background">HCIA-AI Certification</h4>
                <p className="text-xs text-on-surface-variant font-code-snippet">Huawei</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary-fixed/10 rounded flex items-center justify-center shrink-0 border border-primary-fixed/20">
                <span className="material-symbols-outlined text-primary-fixed">code</span>
              </div>
              <div>
                <h4 className="font-headline-sm text-sm text-on-background">Python Programming</h4>
                <p className="text-xs text-on-surface-variant font-code-snippet">HackerRank</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal className="space-y-8 glass rounded-2xl p-8 relative overflow-hidden flex flex-col justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
          <h3 className="font-headline-sm text-headline-sm text-on-background relative z-10">Languages & Communication</h3>
          <div className="space-y-6 relative z-10">
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="font-code-snippet text-on-surface">Arabic</span>
                <span className="text-primary font-bold">Native</span>
              </div>
              <div className="h-1 bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-primary w-full"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="font-code-snippet text-on-surface">English</span>
                <span className="text-secondary font-bold">B1 (Intermediate)</span>
              </div>
              <div className="h-1 bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-secondary w-[60%]"></div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Education;
