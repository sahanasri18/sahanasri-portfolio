import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const HeroSection = () => (
  <section id="home" className="bg-background pt-32 pb-20 sm:pt-40 sm:pb-28">
    <div className="container mx-auto px-6">
      <div className="mx-auto max-w-5xl">
        <p className="mb-6 text-sm font-medium tracking-wide text-primary">PORTFOLIO · 2026</p>
        <h1 className="max-w-4xl text-5xl font-bold leading-[1.04] tracking-tight text-foreground sm:text-7xl">
          Sahana Sri<span className="text-primary">.</span>
        </h1>
        <h2 className="mt-6 text-xl font-semibold text-foreground sm:text-2xl">AI & Machine Learning Graduate</h2>
        <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
          I work with Python, machine learning and web technologies to build useful applications.
          This portfolio brings together my projects, technical skills and learning experience.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110">Explore projects <ArrowDown size={16}/></a>
          <a href="mailto:imsahanasri@gmail.com" className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary"><Mail size={16}/> Contact</a>
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-6 text-sm text-muted-foreground">
          <span>B.Tech · AI & Data Science</span>
          <span className="hidden h-1 w-1 rounded-full bg-primary sm:block"/>
          <span>CGPA 8.70 / 10</span>
          <span className="hidden h-1 w-1 rounded-full bg-primary sm:block"/>
          <span>2022–2026</span>
          <span className="hidden h-1 w-1 rounded-full bg-primary sm:block"/>
          <a href="https://github.com/sahanasri18" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="inline-flex items-center gap-2 hover:text-primary"><Github size={17}/> GitHub</a>
          <a href="https://linkedin.com/in/sahanasri-r/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-flex items-center gap-2 hover:text-primary"><Linkedin size={17}/> LinkedIn</a>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
