import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

const HeroSection = () => (
  <section id="home" className="hero-section relative overflow-hidden bg-background pb-20 pt-28 sm:pb-28 sm:pt-36 lg:pb-32">
    <div className="pointer-events-none absolute -right-28 top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl sm:h-96 sm:w-96" />
    <div className="container relative mx-auto px-5 sm:px-6">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-10">
        <div className="min-w-0">
          <div className="hero-enter inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-3 py-2 text-xs font-semibold tracking-wide text-primary">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/50" /><span className="relative inline-flex h-2 w-2 rounded-full bg-primary" /></span>
            OPEN TO ENTRY-LEVEL OPPORTUNITIES
          </div>
          <p className="hero-enter hero-delay-1 mt-7 text-xs font-bold uppercase tracking-[.22em] text-muted-foreground">AI & Machine Learning Graduate · 2026</p>
          <h1 className="hero-enter hero-delay-2 mt-4 max-w-3xl text-[clamp(2.7rem,7vw,5.8rem)] font-bold leading-[.98] tracking-[-.055em] text-foreground">
            I build ideas into <span className="font-playfair font-medium italic text-primary">useful</span> AI-powered applications.
          </h1>
          <p className="hero-enter hero-delay-3 mt-7 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
            I’m Sahana Sri, an Artificial Intelligence and Data Science graduate interested in machine learning, NLP and Python development. I learn by building projects and turning concepts into working applications.
          </p>
          <div className="hero-enter hero-delay-4 mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="mailto:imsahanasri@gmail.com?subject=Hiring%20Opportunity" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/15 transition duration-300 hover:-translate-y-1 hover:brightness-110">
              <Mail size={17}/> Hire me <ArrowUpRight size={16}/>
            </a>
            <a href="#projects" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-border bg-background/70 px-6 py-3 text-sm font-semibold text-foreground transition duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary">
              Explore my projects <ArrowDown size={16}/>
            </a>
          </div>
          <div className="hero-enter hero-delay-4 mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-border pt-6 text-sm text-muted-foreground">
            <span>B.Tech · AI & Data Science</span><span className="hidden h-1 w-1 rounded-full bg-primary sm:block"/>
            <span>CGPA 8.70 / 10</span><span className="hidden h-1 w-1 rounded-full bg-primary sm:block"/>
            <a href="https://github.com/sahanasri18" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition hover:text-primary"><Github size={16}/> GitHub</a>
            <a href="https://linkedin.com/in/sahanasri-r/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition hover:text-primary"><Linkedin size={16}/> LinkedIn</a>
          </div>
        </div>

        <div className="hero-enter hero-delay-3 relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="hero-visual relative isolate overflow-hidden rounded-[1.75rem] border border-border bg-[#242a34] p-6 text-[#f7f3eb] shadow-2xl shadow-slate-900/10 sm:p-8">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-[#e28a70]/25" />
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-[#e28a70]/20" />
            <div className="relative flex items-center justify-between gap-3">
              <span className="text-[10px] font-bold uppercase tracking-[.24em] text-[#e7a18c]">The builder’s mindset</span>
              <Sparkles size={18} className="text-[#e7a18c]"/>
            </div>
            <div className="relative mt-14 sm:mt-20">
              <p className="font-playfair text-5xl leading-none sm:text-6xl">Learn.</p>
              <p className="mt-2 font-playfair text-5xl italic leading-none text-[#e7a18c] sm:text-6xl">Build.</p>
              <p className="mt-2 font-playfair text-5xl leading-none sm:text-6xl">Improve.</p>
            </div>
            <div className="relative mt-12 border-t border-white/15 pt-5">
              <p className="text-xs leading-6 text-white/65">Exploring the space between data, machine learning and real-world software.</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {['Python', 'Machine Learning', 'NLP', 'FastAPI', 'React'].map((skill) => <span key={skill} className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] text-white/80">{skill}</span>)}
              </div>
            </div>
            <div className="hero-orbit absolute right-7 top-28 h-20 w-20 rounded-full border border-[#e7a18c]/40 sm:right-10 sm:top-32 sm:h-24 sm:w-24">
              <span className="absolute -right-1 top-1/2 h-3 w-3 rounded-full bg-[#e7a18c] shadow-[0_0_20px_#e7a18c]"/>
            </div>
          </div>
          <p className="mt-4 text-center text-[11px] uppercase tracking-[.18em] text-muted-foreground">Curiosity backed by hands-on projects</p>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
