import { Github, Linkedin, Mail, ArrowDown, BrainCircuit, Code2, Database, Cpu, Sparkles } from 'lucide-react';

const HeroSection = () => (
  <section id="home" className="relative isolate overflow-hidden bg-background pt-28 pb-20 sm:pt-36 sm:pb-28">
    <div className="pointer-events-none absolute -right-24 -top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
    <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
    <div className="container relative z-10 mx-auto px-6">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_.95fr] lg:gap-10">
        <div className="hero-copy">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold tracking-wide text-primary">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" /> OPEN TO ENTRY-LEVEL OPPORTUNITIES
          </div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[.24em] text-primary">Hello, I'm</p>
          <h1 className="text-5xl font-bold leading-[1.02] tracking-tight text-foreground sm:text-6xl xl:text-7xl">Sahana Sri<span className="text-primary">.</span></h1>
          <h2 className="mt-5 text-2xl font-semibold text-foreground/90 sm:text-3xl">AI / ML & Python Developer</h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">I build practical applications with Python, machine learning, APIs and data tools. Explore selected projects, the technologies behind them and my development work.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="hero-primary-button inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground">View my projects <ArrowDown size={16}/></a>
            <a href="mailto:imsahanasri@gmail.com" className="hero-secondary-button inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground"><Mail size={16}/> Get in touch</a>
          </div>
          <div className="mt-7 flex items-center gap-5 text-sm text-muted-foreground">
            <a href="https://github.com/sahanasri18" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition hover:text-primary"><Github size={19}/></a>
            <a href="https://linkedin.com/in/sahanasri-r/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition hover:text-primary"><Linkedin size={19}/></a>
            <span className="h-4 w-px bg-border"/>
            <span>B.Tech AI & Data Science · 2026 · CGPA 8.70</span>
          </div>
        </div>

        <div className="hero-visual-wrap" aria-label="Animated three-dimensional AI technology visualization">
          <div className="hero-visual-grid" />
          <div className="hero-3d-scene">
            <div className="hero-orbit hero-orbit-one"><span className="orbit-dot" /></div>
            <div className="hero-orbit hero-orbit-two"><span className="orbit-dot" /></div>
            <div className="hero-orbit hero-orbit-three" />
            <div className="hero-core">
              <div className="hero-core-glow" />
              <BrainCircuit size={72} strokeWidth={1.15} />
              <span>AI</span>
            </div>
            <div className="hero-float-card hero-card-code"><Code2 size={19}/><span><b>Python</b><small>Build & create</small></span></div>
            <div className="hero-float-card hero-card-data"><Database size={19}/><span><b>Data</b><small>Find patterns</small></span></div>
            <div className="hero-float-card hero-card-ml"><Cpu size={19}/><span><b>Machine learning</b><small>Train models</small></span></div>
            <div className="hero-float-card hero-card-spark"><Sparkles size={17}/><span>Ideas into apps</span></div>
            <div className="hero-scene-caption"><span className="hero-caption-pulse"/> EXPLORING INTELLIGENT SYSTEMS</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
