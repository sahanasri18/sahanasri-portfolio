import { Github, Linkedin, Mail, ArrowDown, ArrowUpRight, Code2, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const focus = ['Python', 'Machine Learning', 'SQL', 'NLP', 'FastAPI', 'React'];

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden bg-background pt-28 pb-20">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 78% 24%, hsl(174 75% 45% / .12), transparent 32%), linear-gradient(hsl(220 18% 22% / .16) 1px, transparent 1px), linear-gradient(90deg, hsl(220 18% 22% / .16) 1px, transparent 1px)', backgroundSize: 'auto, 48px 48px, 48px 48px' }} />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.15fr_.85fr] gap-14 items-center">
          <div className="space-y-7 animate-slide-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary font-semibold">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" /> Open to entry-level opportunities
            </div>
            <div>
              <p className="text-primary font-semibold tracking-[.22em] uppercase text-sm mb-4">Hello, I'm</p>
              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.04] text-foreground">Sahana Sri <span className="text-primary">R</span></h1>
              <h2 className="mt-5 text-2xl sm:text-3xl font-semibold text-foreground/90">AI / ML & Python Developer</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">Artificial Intelligence and Data Science graduate building practical applications with Python, machine learning, APIs and modern web tools. I enjoy turning ideas into working software and learning by building.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {focus.map((item) => <span key={item} className="rounded-md border border-border bg-card/80 px-3 py-2 text-sm text-foreground/85">{item}</span>)}
            </div>
            <div className="flex flex-wrap gap-3 pt-1">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground hover:brightness-110 transition">Explore my work <ArrowDown size={17}/></a>
              <a href="https://github.com/sahanasri18" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 font-semibold text-foreground hover:border-primary/60 transition"><Github size={18}/> GitHub <ArrowUpRight size={15}/></a>
              <a href="https://linkedin.com/in/sahanasri-r/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 font-semibold text-foreground hover:border-primary/60 transition"><Linkedin size={18}/> LinkedIn</a>
              <a href="mailto:imsahanasri@gmail.com" className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 font-semibold text-foreground hover:border-primary/60 transition"><Mail size={18}/> Contact</a>
            </div>
            <p className="text-sm text-muted-foreground">B.Tech Artificial Intelligence & Data Science · 2022–2026 · CGPA 8.70/10</p>
          </div>
          <div className="relative animate-fade-in">
            <div className="absolute -inset-5 rounded-3xl bg-primary/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <div className="flex items-center gap-2 border-b border-border px-5 py-4">
                <span className="h-3 w-3 rounded-full bg-red-400/80"/><span className="h-3 w-3 rounded-full bg-yellow-400/80"/><span className="h-3 w-3 rounded-full bg-green-400/80"/>
                <span className="ml-3 text-xs tracking-wide text-muted-foreground">developer-profile.py</span>
              </div>
              <div className="p-6 sm:p-8 font-mono text-sm sm:text-base leading-8">
                <p className="text-muted-foreground"># A little about my work</p>
                <p><span className="text-primary">developer</span> = {'{'}</p>
                <p className="pl-5"><span className="text-cyan-300">"focus"</span>: <span className="text-emerald-300">"AI + Python"</span>,</p>
                <p className="pl-5"><span className="text-cyan-300">"builds"</span>: [</p>
                <p className="pl-10 text-emerald-300">"ML applications",</p>
                <p className="pl-10 text-emerald-300">"Full-stack tools",</p>
                <p className="pl-10 text-emerald-300">"Data dashboards"</p>
                <p className="pl-5">],</p>
                <p className="pl-5"><span className="text-cyan-300">"mindset"</span>: <span className="text-emerald-300">"learn by building"</span></p>
                <p>{'}'}</p>
                <div className="mt-7 flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4">
                  <Code2 className="text-primary" size={22}/>
                  <div><p className="font-sans font-semibold text-foreground">Projects over buzzwords</p><p className="font-sans text-xs text-muted-foreground">Explore the work and source code below.</p></div>
                  <Sparkles className="ml-auto text-primary" size={18}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
