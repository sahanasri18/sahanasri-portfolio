import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Sparkles, BrainCircuit } from 'lucide-react';

const HeroSection = () => (
  <section id="home" className="hero-section relative isolate overflow-hidden bg-background pb-16 pt-28 text-foreground sm:pb-24 sm:pt-36 lg:pb-28">
    <div className="hero-glow pointer-events-none absolute -right-28 -top-20 h-80 w-80 rounded-full blur-3xl sm:h-[30rem] sm:w-[30rem]" />
    <div className="hero-grid pointer-events-none absolute inset-0 opacity-30" />
    <div className="container relative mx-auto px-5 sm:px-6">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-12">
        <div className="min-w-0">
          <div className="hero-enter inline-flex max-w-full items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-2 text-[10px] font-bold tracking-[.12em] text-primary sm:text-xs">
            <span className="relative flex h-2 w-2 shrink-0"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" /><span className="relative inline-flex h-2 w-2 rounded-full bg-primary" /></span>
            OPEN TO AI / ML & SOFTWARE ROLES
          </div>
          <p className="hero-enter hero-delay-1 mt-7 text-xs font-semibold uppercase tracking-[.24em] text-muted-foreground">Hello, I’m</p>
          <h1 className="hero-enter hero-delay-2 mt-2 break-words text-[clamp(3.2rem,9vw,6.8rem)] font-bold leading-[.92] tracking-[-.065em] text-foreground">
            Sahana <span className="hero-name-gradient">Sri.</span>
          </h1>
          <p className="hero-enter hero-delay-3 mt-6 max-w-2xl text-xl font-semibold leading-snug sm:text-2xl lg:text-3xl">
            AI & Machine Learning Graduate <span className="text-primary">·</span> 2026
          </p>
          <p className="hero-enter hero-delay-3 mt-4 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
            I turn ideas into useful applications through Python, machine learning, NLP and web technologies. Explore my projects, see what I can build, and let’s talk about your next opportunity.
          </p>
          <div className="hero-enter hero-delay-4 mt-8 grid w-full grid-cols-1 gap-3 sm:flex sm:flex-wrap">
            <a href="mailto:imsahanasri@gmail.com?subject=Hiring%20Opportunity" className="hire-button group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl px-7 py-4 text-sm font-bold text-white shadow-xl transition duration-300 hover:-translate-y-1 sm:w-auto sm:min-w-44">
              <Mail size={18}/> Hire Me <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"/>
            </a>
            <a href="#projects" className="project-button inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl border border-primary/35 bg-white/[.04] px-7 py-4 text-sm font-semibold text-foreground transition duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary/10 sm:w-auto">
              Explore Projects <ArrowDown size={17}/>
            </a>
          </div>
          <div className="hero-enter hero-delay-4 mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-border/70 pt-6 text-sm text-muted-foreground">
            <span>B.Tech · AI & Data Science</span><span className="hidden h-1 w-1 rounded-full bg-primary sm:block"/>
            <span>CGPA 8.70 / 10</span><span className="hidden h-1 w-1 rounded-full bg-primary sm:block"/>
            <a href="https://github.com/sahanasri18" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition hover:text-primary"><Github size={16}/> GitHub</a>
            <a href="https://linkedin.com/in/sahanasri-r/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition hover:text-primary"><Linkedin size={16}/> LinkedIn</a>
          </div>
        </div>

        <div className="hero-enter hero-delay-3 relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="ai-panel relative isolate overflow-hidden rounded-[1.7rem] border border-white/10 p-6 text-white shadow-2xl sm:p-8">
            <div className="ai-panel-glow pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full blur-3xl"/>
            <div className="relative flex items-center justify-between gap-3">
              <span className="text-[10px] font-bold uppercase tracking-[.22em] text-cyan-200">Curiosity → Creation</span>
              <BrainCircuit size={21} className="text-cyan-200"/>
            </div>
            <div className="relative mt-12 sm:mt-16">
              <p className="font-playfair text-5xl leading-none sm:text-6xl">Think.</p>
              <p className="mt-2 font-playfair text-5xl italic leading-none text-cyan-300 sm:text-6xl">Create.</p>
              <p className="mt-2 font-playfair text-5xl leading-none sm:text-6xl">Evolve.</p>
            </div>
            <p className="relative mt-9 max-w-sm border-t border-white/15 pt-5 text-xs leading-6 text-white/65">Learning through hands-on projects across data, machine learning and real-world software.</p>
            <div className="relative mt-5 flex flex-wrap gap-2">
              {['Python', 'Machine Learning', 'NLP', 'FastAPI', 'React'].map((skill) => <span key={skill} className="rounded-full border border-cyan-200/20 bg-cyan-100/[.07] px-3 py-1.5 text-[11px] text-cyan-50">{skill}</span>)}
            </div>
            <div className="neural-orbit neural-orbit-one absolute right-5 top-20 h-24 w-24 rounded-full border border-cyan-300/25 sm:right-9 sm:top-24 sm:h-28 sm:w-28"><span className="absolute -right-1 top-1/2 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_22px_#67e8f9]"/></div>
            <div className="neural-orbit neural-orbit-two absolute right-12 top-28 h-16 w-16 rounded-full border border-violet-300/25 sm:right-16 sm:top-32 sm:h-20 sm:w-20"><span className="absolute -left-1 top-1/4 h-2.5 w-2.5 rounded-full bg-violet-300 shadow-[0_0_18px_#c4b5fd]"/></div>
          </div>
          <p className="mt-4 text-center text-[10px] uppercase tracking-[.2em] text-muted-foreground">AI mindset · Practical projects · Continuous learning</p>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
