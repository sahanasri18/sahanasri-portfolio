import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const HeroSection = () => {
  const skills = ['Python', 'SQL', 'Machine Learning', 'NLP', 'FastAPI', 'React', 'TypeScript', 'MySQL', 'MongoDB'];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden py-24">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-warm border border-border">
                <img src="/profile.jpg" alt="Sahana Sri" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="text-center lg:text-left space-y-7 order-1 lg:order-2">
              <div>
                <p className="text-lg text-primary font-semibold mb-3 font-poppins">Sahana Sri R</p>
                <h1 className="text-5xl md:text-6xl font-poppins font-bold text-foreground mb-4 leading-tight">
                  AI / ML & Python Developer
                </h1>
                <h2 className="text-xl md:text-2xl text-muted-foreground font-medium mb-6 font-poppins">
                  Building practical applications with Python, data and AI
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-poppins">
                  Artificial Intelligence and Data Science graduate interested in machine learning, NLP and full-stack application development. I work with Python, SQL, FastAPI and React to build and test software projects.
                </p>
                <p className="text-sm text-muted-foreground font-medium font-poppins">
                  Open to entry-level AI/ML, Python Developer and Software Developer opportunities.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {skills.map((skill) => <span key={skill} className="px-3 py-2 bg-card text-foreground rounded-full border border-border text-sm font-medium">{skill}</span>)}
              </div>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <a href="https://github.com/sahanasri18" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 bg-foreground text-background rounded-xl font-medium"><Github size={18} /> GitHub</a>
                <a href="https://linkedin.com/in/sahanasri-r/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-xl font-medium"><Linkedin size={18} /> LinkedIn</a>
                <a href="mailto:imsahanasri@gmail.com" className="inline-flex items-center gap-2 px-5 py-3 border border-border rounded-xl font-medium"><Mail size={18} /> Email</a>
                <a href="https://sahanasri-portfolio-rose.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 border border-border rounded-xl font-medium"><ExternalLink size={18} /> Live Portfolio</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
